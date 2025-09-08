// Error handling utilities

export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class RateLimitError extends APIError {
  constructor(retryAfter?: number) {
    super('Rate limit exceeded', 429);
    this.name = 'RateLimitError';
    if (retryAfter) {
      this.message += `. Retry after ${retryAfter}ms`;
    }
  }
}

export class GraphQLError extends APIError {
  constructor(
    message: string,
    public errors: Array<{
      message: string;
      locations?: Array<{ line: number; column: number }>;
      path?: string[];
    }>
  ) {
    super(message, 400);
    this.name = 'GraphQLError';
  }
}

export const handleAPIError = (error: unknown): APIError => {
  if (error instanceof APIError) {
    return error;
  }

  if (error instanceof Error) {
    return new APIError(error.message, 500, error);
  }

  return new APIError('An unknown error occurred', 500);
};

export const logError = (error: APIError, context?: string): void => {
  const logData = {
    name: error.name,
    message: error.message,
    statusCode: error.statusCode,
    context,
    timestamp: new Date().toISOString(),
    ...(error.originalError && { originalError: error.originalError.message }),
  };

  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', logData);
  } else {
    // In production, you might want to send this to a logging service
    console.error('API Error:', logData);
  }
};
