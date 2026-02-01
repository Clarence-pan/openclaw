import { describe, expect, it } from "vitest";
import { validateConfigObject } from "./config.js";

describe("web search provider config", () => {
  it("accepts zhipu provider and config", () => {
    const res = validateConfigObject({
      tools: {
        web: {
          search: {
            enabled: true,
            provider: "zhipu",
            zhipu: {
              apiKey: "test-key",
              baseUrl: "https://open.bigmodel.cn/api/paas/v4",
              model: "web-search-pro",
            },
          },
        },
      },
    });

    expect(res.ok).toBe(true);
  });

  it("accepts perplexity provider and config", () => {
    const res = validateConfigObject({
      tools: {
        web: {
          search: {
            enabled: true,
            provider: "perplexity",
            perplexity: {
              apiKey: "test-key",
              baseUrl: "https://api.perplexity.ai",
              model: "perplexity/sonar-pro",
            },
          },
        },
      },
    });

    expect(res.ok).toBe(true);
  });
});
