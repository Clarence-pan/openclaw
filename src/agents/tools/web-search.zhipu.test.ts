import { afterEach, describe, expect, it, vi } from "vitest";
import { createWebSearchTool } from "./web-search.js";

const ZHIPU_BASE_URL = "https://open.bigmodel.cn/api/paas/v4";

describe("web_search zhipu integration via runWebSearch", () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    // 恢复全局 fetch，避免影响其他测试
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("calls Zhipu web_search endpoint and returns parsed results", async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      // 校验请求 URL
      expect(String(input)).toBe(`${ZHIPU_BASE_URL}/web_search`);

      // 校验 HTTP 方法
      expect(init?.method).toBe("POST");

      // 校验请求头（尤其是 Authorization）
      const headers = (init?.headers ?? {}) as Record<string, string>;
      const authHeader = headers.Authorization ?? headers.authorization;
      expect(authHeader).toBe("Bearer test-zhipu-key");
      expect(headers["Content-Type"] ?? headers["content-type"]).toBe("application/json");

      // 校验请求体
      const body = JSON.parse((init?.body as string) ?? "{}") as Record<string, unknown>;
      expect(body).toEqual({
        search_query: "千问 测试 query",
        search_engine: "search_std",
        count: 3,
        search_recency_filter: "noLimit",
        content_size: "medium",
      });

      // 返回一个符合 ZhipuSearchResponse 结构的响应
      return {
        ok: true,
        status: 200,
        json: async () => ({
          search_result: [
            {
              title: "Result 1",
              link: "https://example.com/1",
              content: "Content 1",
              media: "Media 1",
              publish_date: "2026-01-27",
            },
            {
              title: "Result 2",
              link: "https://example.com/2",
              content: "Content 2",
              media: "Media 2",
              publish_date: "2026-01-28",
            },
          ],
        }),
      } as Response;
    });

    // 使用 vi.mock 替换全局 fetch
    globalThis.fetch = fetchMock as typeof globalThis.fetch;

    const tool = createWebSearchTool({
      // 这里注入的 config 只需要包含 web.search.zhipu，对类型精度要求不高
      config: {
        tools: {
          web: {
            search: {
              enabled: true,
              provider: "zhipu",
              zhipu: {
                apiKey: "test-zhipu-key",
                baseUrl: ZHIPU_BASE_URL,
              },
            },
          },
        },
      } as never,
      sandboxed: false,
    });

    expect(tool).not.toBeNull();

    const result = await tool!.execute("test-zhipu-call", {
      query: "千问 测试 query",
      count: 3,
    });

    // 确认底层只调用了一次 Zhipu API
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const details = result.details as Record<string, unknown>;

    // 校验 runWebSearch 返回的结构被正确挂到 details 上
    expect(details.provider).toBe("zhipu");
    expect(details.query).toBe("千问 测试 query");

    // content 现在包含标题、媒体来源和发布日期
    const content = String(details.content);
    expect(content).toContain("Result 1");
    expect(content).toContain("Media 1 2026-01-27");
    expect(content).toContain("Content 1");
    expect(content).toContain("Result 2");
    expect(content).toContain("Media 2 2026-01-28");
    expect(content).toContain("Content 2");
    expect(details.citations).toEqual(["https://example.com/1", "https://example.com/2"]);
    expect(typeof details.tookMs).toBe("number");
    expect(details.cached).toBeUndefined();
  });
});
