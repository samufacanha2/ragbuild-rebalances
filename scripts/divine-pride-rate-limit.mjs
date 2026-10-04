// One shared queue for every Divine Pride API request in a build.
export function createRateLimitedFetch({ fetch: fetchImpl = globalThis.fetch, now = () => performance.now(), sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)), intervalMs = 1000 } = {}) {
  let nextStart = 0;
  let queue = Promise.resolve();
  return (url, options) => {
    const attempt = queue.then(async () => {
      let wait = nextStart - now();
      while (wait > 0) {
        await sleep(wait);
        wait = nextStart - now();
      }
      nextStart = now() + intervalMs;
      return fetchImpl(url, options);
    });
    queue = attempt.catch(() => {});
    return attempt;
  };
}

export const fetchDivinePrideApi = createRateLimitedFetch();

export function divinePrideSkillUrl(base, id, apiKey) {
  const url = new URL(base);
  const prefix = url.pathname.replace(/\/+$/, "");
  url.pathname = `${/\/api$/i.test(prefix) ? prefix : `${prefix}/api`}/database/Skill/${id}`;
  url.search = "";
  url.searchParams.set("apiKey", apiKey);
  return url;
}

export function publishedApiBaseUrl(configuredBase, defaultBase) {
  return configuredBase === defaultBase ? defaultBase : null;
}

export function formatSourceFailure(url, error, divinePrideApi = false) {
  if (!divinePrideApi) return `${url}: ${error.message}`;
  const parsed = new URL(url);
  const status = /^HTTP \d{3}\b/.exec(error.message)?.[0] ?? "Request failed";
  return `${parsed.origin}${parsed.pathname}: ${status}`;
}

export function fetchSourceResponse(url, options, { divinePrideApi = false, apiFetch = fetchDivinePrideApi, otherFetch = globalThis.fetch } = {}) {
  return (divinePrideApi ? apiFetch : otherFetch)(url, options);
}
