import { API_CONFIG, getAuthToken } from '@/config/api';
import { GraphQLResponse } from '@/types/graphql';
import { APIError, GraphQLError, RateLimitError, handleAPIError, logError } from '@/utils/handleErrors';

// Rate limiting state
let lastFetchTime = 0;
let retryCount = 0;

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function exponentialBackoff(attempt: number): Promise<void> {
  const delay = API_CONFIG.RATE_LIMIT.DELAY_MS * Math.pow(API_CONFIG.RATE_LIMIT.BACKOFF_MULTIPLIER, attempt);
  await new Promise((resolve) => setTimeout(resolve, delay));
}

export async function fetchAPI<T = any>(query: string, { variables = {} } = {}, retryAttempt = 0): Promise<T> {
  const apiUrl = process.env.HYGRAPH_PROJECT_API;

  if (!apiUrl) {
    throw new APIError('HYGRAPH_PROJECT_API is not defined', 500);
  }

  const authToken = getAuthToken();
  if (!authToken) {
    throw new APIError('Authentication token is not defined', 500);
  }

  try {
    // Rate limiting
    const now = Date.now();
    const timeToWait = Math.max(0, API_CONFIG.RATE_LIMIT.DELAY_MS - (now - lastFetchTime));

    if (timeToWait > 0) {
      await delay(timeToWait);
    }

    lastFetchTime = Date.now();

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT_MS);

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      if (res.status === 429) {
        throw new RateLimitError();
      }
      throw new APIError(`HTTP ${res.status}: ${res.statusText}`, res.status);
    }

    const json: GraphQLResponse<T> = await res.json();

    if (json.errors && json.errors.length > 0) {
      const error = new GraphQLError('GraphQL errors occurred', json.errors);
      logError(error, 'GraphQL query execution');
      throw error;
    }

    // Reset retry count on success
    retryCount = 0;
    return json.data;
  } catch (error) {
    const apiError = handleAPIError(error);

    // Retry logic for rate limiting and network errors
    if (
      (apiError instanceof RateLimitError || apiError.statusCode >= 500) &&
      retryAttempt < API_CONFIG.RATE_LIMIT.MAX_RETRIES
    ) {
      retryCount++;
      logError(apiError, `Retry attempt ${retryAttempt + 1}/${API_CONFIG.RATE_LIMIT.MAX_RETRIES}`);

      await exponentialBackoff(retryAttempt);
      return fetchAPI<T>(query, { variables }, retryAttempt + 1);
    }

    logError(apiError, 'Final API call failure');
    throw apiError;
  }
}
