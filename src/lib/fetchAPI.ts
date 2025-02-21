let lastFetchTime = 0;
const FETCH_DELAY = 3000;

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAPI(query: string, { variables = {} } = {}) {
  const apiUrl = process.env.HYGRAPH_PROJECT_API;

  if (!apiUrl) {
    throw new Error('HYGRAPH_PROJECT_API is not defined');
  }

  const now = Date.now();
  const timeToWait = Math.max(0, FETCH_DELAY - (now - lastFetchTime));

  if (timeToWait > 0) {
    await delay(timeToWait);
  }

  lastFetchTime = Date.now();

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        process.env.NODE_ENV === 'development'
          ? process.env.HYGRAPH_DEV_AUTH_TOKEN
          : process.env.HYGRAPH_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
