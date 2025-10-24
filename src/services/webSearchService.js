/**
 * Web Search Service for LLM Models
 *
 * Searches the internet for LLM models and AI information
 * Supports multiple search APIs
 */

class WebSearchService {
  constructor() {
    this.searchCache = new Map();
    this.cacheExpiry = 60 * 60 * 1000; // 1 hour
  }

  /**
   * Search the web for LLM models
   * @param {string} query - Search query
   * @returns {Promise<Array>} Search results
   */
  async searchWeb(query) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    // Check cache first
    const cacheKey = query.toLowerCase().trim();
    const cached = this.searchCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.results;
    }

    try {
      // Enhanced query for LLM-specific results
      const enhancedQuery = `${query} LLM large language model AI`;

      // Try to search using available API
      const results = await this.performSearch(enhancedQuery);

      // Cache results
      this.searchCache.set(cacheKey, {
        results,
        timestamp: Date.now()
      });

      return results;
    } catch (error) {
      console.error('Web search error:', error);
      return this.getFallbackResults(query);
    }
  }

  /**
   * Perform the actual search using available API
   */
  async performSearch(query) {
    // Check which API is configured
    const googleApiKey = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
    const googleSearchEngineId = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;

    if (googleApiKey && googleSearchEngineId) {
      return await this.googleCustomSearch(query, googleApiKey, googleSearchEngineId);
    }

    // If no API configured, use fallback
    return this.getFallbackResults(query);
  }

  /**
   * Google Custom Search API
   */
  async googleCustomSearch(query, apiKey, searchEngineId) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Search failed');
    }

    return (data.items || []).map(item => ({
      title: item.title,
      snippet: item.snippet,
      link: item.link,
      source: new URL(item.link).hostname,
      type: 'web'
    }));
  }

  /**
   * Fallback: Curated list of popular LLM resources
   */
  getFallbackResults(query) {
    const queryLower = query.toLowerCase();

    const curatedResources = [
      {
        title: 'GPT-4 - OpenAI',
        snippet: 'OpenAI\'s most advanced language model. Capable of complex reasoning, creative writing, and coding. Multimodal with vision capabilities.',
        link: 'https://openai.com/gpt-4',
        source: 'openai.com',
        type: 'curated',
        keywords: ['gpt', 'gpt-4', 'openai', 'chatgpt']
      },
      {
        title: 'Claude 3.5 - Anthropic',
        snippet: 'Anthropic\'s latest AI assistant with superior performance on coding, reasoning, and analysis. 200K context window.',
        link: 'https://www.anthropic.com/claude',
        source: 'anthropic.com',
        type: 'curated',
        keywords: ['claude', 'anthropic', 'sonnet', 'opus']
      },
      {
        title: 'Gemini - Google DeepMind',
        snippet: 'Google\'s multimodal AI model with massive context window (1M-2M tokens). Supports text, images, audio, and video.',
        link: 'https://deepmind.google/technologies/gemini/',
        source: 'deepmind.google',
        type: 'curated',
        keywords: ['gemini', 'google', 'deepmind', 'bard']
      },
      {
        title: 'Llama 3.1 - Meta',
        snippet: 'Meta\'s open-source LLM with 405B parameters. Free for commercial use with strong performance.',
        link: 'https://ai.meta.com/llama/',
        source: 'ai.meta.com',
        type: 'curated',
        keywords: ['llama', 'meta', 'facebook', 'open source']
      },
      {
        title: 'Mistral AI Models',
        snippet: 'European AI company offering Mistral Large and Small models with strong multilingual capabilities.',
        link: 'https://mistral.ai/',
        source: 'mistral.ai',
        type: 'curated',
        keywords: ['mistral', 'european', 'multilingual']
      },
      {
        title: 'PaLM 2 - Google',
        snippet: 'Google\'s Pathways Language Model with strong reasoning and multilingual capabilities.',
        link: 'https://ai.google/discover/palm2',
        source: 'ai.google',
        type: 'curated',
        keywords: ['palm', 'google', 'pathways']
      },
      {
        title: 'Command R+ - Cohere',
        snippet: 'Enterprise-focused model optimized for RAG applications with strong grounding capabilities.',
        link: 'https://cohere.com/',
        source: 'cohere.com',
        type: 'curated',
        keywords: ['cohere', 'command', 'rag', 'enterprise']
      },
      {
        title: 'DALL-E 3 - OpenAI',
        snippet: 'State-of-the-art text-to-image generation model with improved prompt following.',
        link: 'https://openai.com/dall-e-3',
        source: 'openai.com',
        type: 'curated',
        keywords: ['dall-e', 'dalle', 'image', 'generation', 'art']
      },
      {
        title: 'Stable Diffusion XL - Stability AI',
        snippet: 'Open-source image generation model with photorealistic results and high customizability.',
        link: 'https://stability.ai/stable-diffusion',
        source: 'stability.ai',
        type: 'curated',
        keywords: ['stable diffusion', 'stability', 'image', 'sdxl']
      },
      {
        title: 'Hugging Face Model Hub',
        snippet: 'Browse thousands of open-source LLMs and AI models. Download, fine-tune, and deploy.',
        link: 'https://huggingface.co/models',
        source: 'huggingface.co',
        type: 'curated',
        keywords: ['hugging face', 'models', 'open source', 'download']
      },
      {
        title: 'Papers with Code - LLM Leaderboard',
        snippet: 'Compare LLM performance across benchmarks. See latest research and state-of-the-art models.',
        link: 'https://paperswithcode.com/sota',
        source: 'paperswithcode.com',
        type: 'curated',
        keywords: ['benchmark', 'leaderboard', 'compare', 'research']
      },
      {
        title: 'Artificial Analysis - LLM Comparison',
        snippet: 'Independent analysis comparing LLM quality, speed, and pricing across providers.',
        link: 'https://artificialanalysis.ai/',
        source: 'artificialanalysis.ai',
        type: 'curated',
        keywords: ['compare', 'analysis', 'benchmark', 'pricing']
      }
    ];

    // Filter based on query
    return curatedResources.filter(resource => {
      const titleMatch = resource.title.toLowerCase().includes(queryLower);
      const snippetMatch = resource.snippet.toLowerCase().includes(queryLower);
      const keywordMatch = resource.keywords.some(keyword =>
        keyword.includes(queryLower) || queryLower.includes(keyword)
      );

      return titleMatch || snippetMatch || keywordMatch;
    }).map(({ keywords, ...rest }) => rest); // Remove keywords from results
  }

  /**
   * Get suggested searches
   */
  getSuggestedSearches() {
    return [
      'GPT-4 alternatives',
      'Best open source LLMs',
      'Multimodal AI models',
      'Free LLM APIs',
      'LLM benchmarks 2024',
      'Image generation models',
      'Code generation LLMs',
      'Enterprise LLM solutions'
    ];
  }
}

export default new WebSearchService();
