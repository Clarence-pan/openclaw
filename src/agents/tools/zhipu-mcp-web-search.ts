/**
 * Zhipu (BigModel/智谱) MCP Web Search Tool
 *
 * This tool implements Zhipu's web search capability via MCP (Model Context Protocol)
 */

export interface ZhipuSearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface ZhipuSearchOptions {
  query: string;
  numResults?: number;
}

/**
 * Execute Zhipu web search via MCP
 */
export async function executeZhipuSearch(
  options: ZhipuSearchOptions,
  mcpCall: (serverName: string, toolName: string, args: unknown) => Promise<unknown>,
): Promise<ZhipuSearchResult[]> {
  const { query, numResults = 10 } = options;

  try {
    // Call MCP tool for Zhipu web search
    const result = await mcpCall("zhipu-mcp", "web_search_prime", {
      query,
      num_results: numResults,
    });

    if (!result || typeof result !== "object") {
      return [];
    }

    // Transform MCP response to ZhipuSearchResult format
    const items = (result as { items?: ZhipuSearchResult[] })?.items || [];
    return items;
  } catch (error) {
    console.error(`[zhipu-search] Error: ${error}`);
    throw error;
  }
}
