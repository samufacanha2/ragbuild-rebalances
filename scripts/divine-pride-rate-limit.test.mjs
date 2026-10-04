import assert from "node:assert/strict";
import test from "node:test";
import { createRateLimitedFetch, divinePrideSkillUrl, fetchSourceResponse, formatSourceFailure, publishedApiBaseUrl } from "./divine-pride-rate-limit.mjs";

test("serializes concurrent API attempts at least one second apart", async () => {
  let time = 0;
  const starts = [];
  const fetcher = createRateLimitedFetch({
    now: () => time,
    sleep: async (ms) => { time += ms; },
    fetch: async (url) => { starts.push({ url, time }); return { ok: true }; },
  });
  await Promise.all([fetcher("a"), fetcher("b"), fetcher("c")]);
  assert.deepEqual(starts.map(({ time: t }) => t), [0, 1000, 2000]);
});

test("a failed API attempt still consumes its rate-limit slot", async () => {
  let time = 0;
  const starts = [];
  const fetcher = createRateLimitedFetch({
    now: () => time,
    sleep: async (ms) => { time += ms; },
    fetch: async () => { starts.push(time); if (starts.length === 1) throw Error("network"); },
  });
  await assert.rejects(fetcher("a"), /network/);
  await fetcher("b");
  assert.deepEqual(starts, [0, 1000]);
});

test("configured API URLs use the limited fetch regardless of URL path", async () => {
  const called = [];
  const url = "https://mirror.example/custom/database/Skill/5205";
  await fetchSourceResponse(url, {}, {
    divinePrideApi: true,
    apiFetch: async () => { called.push("limited"); },
    otherFetch: async () => { called.push("unlimited"); },
  });
  assert.deepEqual(called, ["limited"]);
});

test("an early timer wake cannot start the next API request early", async () => {
  let time = 0;
  const starts = [];
  let sleeps = 0;
  const fetcher = createRateLimitedFetch({
    now: () => time,
    sleep: async (ms) => { time += ++sleeps === 1 ? ms - 1 : ms; },
    fetch: async () => { starts.push(time); },
  });
  await fetcher("first");
  await fetcher("second");
  assert.deepEqual(starts, [0, 1000]);
});

test("a wall-clock jump does not skip the next API request slot", async () => {
  const originalDateNow = Date.now;
  const waits = [];
  let wallTime = 0;
  try {
    Date.now = () => wallTime;
    const fetcher = createRateLimitedFetch({
      fetch: async () => ({ ok: true }),
      sleep: async (ms) => { waits.push(ms); await new Promise((resolve) => setTimeout(resolve, ms)); },
    });
    await fetcher("first");
    wallTime = 60_000;
    await fetcher("second");
    assert.equal(waits.length, 1);
    assert.ok(waits[0] > 0);
  } finally {
    Date.now = originalDateNow;
  }
});

test("API URL construction preserves a configured prefix and existing /api suffix", () => {
  assert.equal(divinePrideSkillUrl("https://mirror.example/custom/api", 5205, "key").href,
    "https://mirror.example/custom/api/database/Skill/5205?apiKey=key");
  assert.equal(divinePrideSkillUrl("https://www.divine-pride.net", 5205, "key").href,
    "https://www.divine-pride.net/api/database/Skill/5205?apiKey=key");
  assert.equal(divinePrideSkillUrl("https://mirror.example/custom", 5205, "key").href,
    "https://mirror.example/custom/api/database/Skill/5205?apiKey=key");
});

test("cached-source failure messages never disclose API query credentials", () => {
  const url = divinePrideSkillUrl("https://mirror.example/custom/api", 5205, "very-secret-key").href;
  const message = formatSourceFailure(url, new Error(`HTTP 429 for ${url}`), true);
  assert.match(message, /HTTP 429/);
  assert.doesNotMatch(message, /very-secret-key|apiKey=/);
  assert.match(message, /\/custom\/api\/database\/Skill\/5205/);
});

test("public metadata omits every custom API URL, even one containing credentials", () => {
  const defaultBase = "https://www.divine-pride.net";
  assert.equal(publishedApiBaseUrl(defaultBase, defaultBase), defaultBase);
  assert.equal(publishedApiBaseUrl("https://mirror.example/api?apiKey=very-secret-key", defaultBase), null);
  assert.equal(publishedApiBaseUrl("https://user:very-secret-key@mirror.example/private/api", defaultBase), null);
});
