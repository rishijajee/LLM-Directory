import axios from 'axios';

class LLMService {
  constructor() {
    // Static LLM data with comprehensive information
    this.llmModels = [
      {
        id: 1,
        name: 'GPT-4',
        provider: 'OpenAI',
        releaseDate: '2023-03',
        parameters: '1.76T (estimated)',
        contextWindow: '8K-32K tokens',
        description: 'Most advanced GPT model with improved reasoning, creativity, and safety. Multimodal capabilities for text and image inputs.',
        useCases: 'Complex reasoning, creative writing, code generation, data analysis, research assistance',
        examples: 'Legal document analysis, advanced coding projects, academic research, creative storytelling, business strategy',
        pricing: '$0.03/1K input tokens, $0.06/1K output tokens',
        strengths: 'Superior reasoning, multimodal, reliable',
        limitations: 'Expensive, slower than GPT-3.5',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 2,
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        releaseDate: '2023-11',
        parameters: '1.76T (estimated)',
        contextWindow: '128K tokens',
        description: 'Faster and more cost-effective version of GPT-4 with significantly larger context window for handling extensive documents.',
        useCases: 'Long-form content analysis, extensive code review, document summarization, multi-turn conversations',
        examples: 'Analyzing entire codebases, summarizing books, processing legal contracts, multi-document research',
        pricing: '$0.01/1K input tokens, $0.03/1K output tokens',
        strengths: 'Large context, cost-effective, fast',
        limitations: 'Slightly less accurate than GPT-4',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 3,
        name: 'GPT-3.5 Turbo',
        provider: 'OpenAI',
        releaseDate: '2022-11',
        parameters: '175B',
        contextWindow: '4K-16K tokens',
        description: 'Fast and cost-effective model optimized for chat and conversational applications with good general performance.',
        useCases: 'Chatbots, content generation, simple coding tasks, translations, customer support',
        examples: 'Customer service automation, blog writing, basic code assistance, language translation',
        pricing: '$0.0005/1K input tokens, $0.0015/1K output tokens',
        strengths: 'Very fast, affordable, good accuracy',
        limitations: 'Less reasoning capability than GPT-4',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 4,
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        releaseDate: '2024-06',
        parameters: 'Undisclosed',
        contextWindow: '200K tokens',
        description: 'Latest Claude model with superior performance on coding, reasoning, and analysis. Excellent at following instructions precisely.',
        useCases: 'Software development, data analysis, content editing, research, complex problem-solving',
        examples: 'Full-stack development, scientific paper analysis, technical documentation, code refactoring',
        pricing: '$3/MTok input, $15/MTok output',
        strengths: 'Excellent coding, large context, nuanced',
        limitations: 'Higher cost, limited image generation',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 5,
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        releaseDate: '2024-03',
        parameters: 'Undisclosed',
        contextWindow: '200K tokens',
        description: 'Most capable Claude model for complex tasks requiring deep reasoning and analysis. Multimodal with vision capabilities.',
        useCases: 'Advanced research, strategic planning, complex analysis, detailed content creation',
        examples: 'Market research reports, strategic business plans, academic papers, complex data interpretation',
        pricing: '$15/MTok input, $75/MTok output',
        strengths: 'Top-tier reasoning, multimodal, thorough',
        limitations: 'Expensive, slower response time',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 6,
        name: 'Claude 3 Haiku',
        provider: 'Anthropic',
        releaseDate: '2024-03',
        parameters: 'Undisclosed',
        contextWindow: '200K tokens',
        description: 'Fastest and most compact Claude model designed for quick responses and high-throughput applications.',
        useCases: 'Real-time chat, quick queries, content moderation, simple automation',
        examples: 'Customer support bots, content filtering, rapid Q&A, simple data extraction',
        pricing: '$0.25/MTok input, $1.25/MTok output',
        strengths: 'Very fast, affordable, efficient',
        limitations: 'Less capable for complex tasks',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 7,
        name: 'Gemini 1.5 Pro',
        provider: 'Google',
        releaseDate: '2024-02',
        parameters: 'Undisclosed',
        contextWindow: '1M-2M tokens',
        description: 'Google\'s most advanced model with unprecedented context length. Multimodal with support for text, images, audio, and video.',
        useCases: 'Multi-document analysis, video understanding, long-form content, cross-modal tasks',
        examples: 'Video content analysis, processing multiple books, codebase understanding, multimedia projects',
        pricing: 'Variable based on context length',
        strengths: 'Massive context, multimodal, versatile',
        limitations: 'Complex pricing, rate limits',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 8,
        name: 'Gemini 1.5 Flash',
        provider: 'Google',
        releaseDate: '2024-05',
        parameters: 'Undisclosed',
        contextWindow: '1M tokens',
        description: 'Faster, more efficient version of Gemini optimized for high-volume applications while maintaining large context.',
        useCases: 'High-frequency tasks, real-time applications, batch processing, chatbots',
        examples: 'Live customer support, content moderation at scale, real-time translation, API services',
        pricing: 'Lower cost than Pro version',
        strengths: 'Fast, large context, cost-effective',
        limitations: 'Slightly reduced capabilities vs Pro',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 9,
        name: 'Llama 3.1 405B',
        provider: 'Meta',
        releaseDate: '2024-07',
        parameters: '405B',
        contextWindow: '128K tokens',
        description: 'Meta\'s largest open-source model with competitive performance to proprietary models. Available for commercial use.',
        useCases: 'Custom deployments, research, fine-tuning, on-premise solutions, cost-sensitive applications',
        examples: 'Private enterprise deployments, academic research, customized AI solutions, specialized domains',
        pricing: 'Free (self-hosted), cloud pricing varies',
        strengths: 'Open-source, customizable, no API costs',
        limitations: 'Requires infrastructure, technical expertise',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 10,
        name: 'Llama 3.1 70B',
        provider: 'Meta',
        releaseDate: '2024-07',
        parameters: '70B',
        contextWindow: '128K tokens',
        description: 'Medium-sized open-source model balancing performance and resource requirements. Excellent for fine-tuning.',
        useCases: 'Domain-specific fine-tuning, mid-scale deployments, research, cost-effective production',
        examples: 'Industry-specific chatbots, custom assistants, edge deployments, specialized tools',
        pricing: 'Free (self-hosted)',
        strengths: 'Efficient, open-source, good performance',
        limitations: 'Less capable than 405B variant',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 11,
        name: 'Mistral Large 2',
        provider: 'Mistral AI',
        releaseDate: '2024-07',
        parameters: '123B',
        contextWindow: '128K tokens',
        description: 'European AI leader\'s flagship model with strong multilingual capabilities and code generation. Open and commercial versions.',
        useCases: 'Multilingual applications, European data compliance, code generation, general tasks',
        examples: 'Multi-language customer support, European business applications, coding assistants, translations',
        pricing: 'API and self-hosted options available',
        strengths: 'Multilingual, European privacy, versatile',
        limitations: 'Less known than OpenAI/Anthropic',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 12,
        name: 'Mistral Small',
        provider: 'Mistral AI',
        releaseDate: '2024-02',
        parameters: '22B',
        contextWindow: '32K tokens',
        description: 'Efficient small model optimized for speed and cost while maintaining good performance for common tasks.',
        useCases: 'Simple queries, classification, basic chat, high-volume applications',
        examples: 'Content categorization, sentiment analysis, simple customer queries, quick translations',
        pricing: 'Low-cost API option',
        strengths: 'Fast, affordable, efficient',
        limitations: 'Limited complex reasoning',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 13,
        name: 'PaLM 2',
        provider: 'Google',
        releaseDate: '2023-05',
        parameters: '340B (estimated)',
        contextWindow: '8K tokens',
        description: 'Google\'s previous generation model with strong multilingual and reasoning capabilities. Powers many Google services.',
        useCases: 'Translation, code generation, reasoning tasks, question answering',
        examples: 'Google Workspace features, language translation, code assistance in IDEs',
        pricing: 'Integrated into Google services',
        strengths: 'Multilingual, integrated ecosystem',
        limitations: 'Superseded by Gemini models',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 14,
        name: 'Command R+',
        provider: 'Cohere',
        releaseDate: '2024-04',
        parameters: '104B',
        contextWindow: '128K tokens',
        description: 'Enterprise-focused model optimized for RAG (Retrieval-Augmented Generation) and business applications with strong grounding.',
        useCases: 'Enterprise search, RAG applications, document QA, business intelligence',
        examples: 'Corporate knowledge bases, customer support with documentation, business analytics, compliance',
        pricing: 'Enterprise pricing model',
        strengths: 'RAG-optimized, enterprise features, grounded',
        limitations: 'Less general-purpose than GPT-4',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 15,
        name: 'DALL-E 3',
        provider: 'OpenAI',
        releaseDate: '2023-10',
        parameters: 'Undisclosed',
        contextWindow: 'N/A (Image generation)',
        description: 'State-of-the-art text-to-image generation model with improved prompt following and image quality.',
        useCases: 'Image generation, creative design, marketing materials, concept visualization',
        examples: 'Marketing graphics, product mockups, artistic creation, visual brainstorming, social media content',
        pricing: '$0.040-$0.120 per image',
        strengths: 'High quality, prompt accuracy, creative',
        limitations: 'Image-only, content policy restrictions',
        lastUpdated: new Date().toISOString()
      },
      {
        id: 16,
        name: 'Stable Diffusion XL',
        provider: 'Stability AI',
        releaseDate: '2023-07',
        parameters: '3.5B',
        contextWindow: 'N/A (Image generation)',
        description: 'Open-source image generation model with photorealistic results. Highly customizable through fine-tuning.',
        useCases: 'Custom image generation, artistic creation, game assets, product visualization',
        examples: 'Game character design, product photography, artistic projects, custom model training',
        pricing: 'Free (self-hosted), API available',
        strengths: 'Open-source, customizable, photorealistic',
        limitations: 'Requires technical setup, compute intensive',
        lastUpdated: new Date().toISOString()
      }
    ];
  }

  // Get all LLM models
  getLLMModels() {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        // Update lastUpdated timestamp
        const models = this.llmModels.map(model => ({
          ...model,
          lastUpdated: new Date().toISOString()
        }));
        resolve(models);
      }, 500);
    });
  }

  // Search the web for AI/GenAI/LLM topics
  async searchWeb(query) {
    try {
      // For real-time web search, we'll use a public API
      // Note: In production, you'd want to use a proper search API like Google Custom Search, Bing API, etc.
      // For now, we'll return a structured response indicating the search query

      // You can integrate with actual search APIs here
      // Example APIs: Google Custom Search, Bing Web Search, SerpAPI, etc.

      return {
        query: query,
        message: 'Web search functionality requires API key configuration',
        suggestion: 'Please integrate with Google Custom Search API, Bing Web Search API, or similar service',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  }

  // Get last refresh time from localStorage
  getLastRefreshTime() {
    const lastRefresh = localStorage.getItem('llm-last-refresh');
    return lastRefresh ? new Date(lastRefresh) : null;
  }

  // Set last refresh time
  setLastRefreshTime() {
    localStorage.setItem('llm-last-refresh', new Date().toISOString());
  }

  // Check if it's time for daily refresh (9 AM EST)
  shouldAutoRefresh() {
    const lastRefresh = this.getLastRefreshTime();
    if (!lastRefresh) return true;

    const now = new Date();
    const lastRefreshDate = new Date(lastRefresh);

    // Convert to EST (UTC-5)
    const estOffset = -5 * 60; // EST offset in minutes
    const nowEST = new Date(now.getTime() + (estOffset + now.getTimezoneOffset()) * 60000);
    const lastRefreshEST = new Date(lastRefreshDate.getTime() + (estOffset + lastRefreshDate.getTimezoneOffset()) * 60000);

    // Check if it's past 9 AM EST today and we haven't refreshed yet today
    const isAfter9AM = nowEST.getHours() >= 9;
    const isDifferentDay = nowEST.getDate() !== lastRefreshEST.getDate() ||
                          nowEST.getMonth() !== lastRefreshEST.getMonth() ||
                          nowEST.getFullYear() !== lastRefreshEST.getFullYear();

    return isAfter9AM && isDifferentDay;
  }

  // Calculate time until next 9 AM EST refresh
  getTimeUntilNextRefresh() {
    const now = new Date();
    const estOffset = -5 * 60;
    const nowEST = new Date(now.getTime() + (estOffset + now.getTimezoneOffset()) * 60000);

    let next9AM = new Date(nowEST);
    next9AM.setHours(9, 0, 0, 0);

    // If it's past 9 AM today, set for tomorrow
    if (nowEST.getHours() >= 9) {
      next9AM.setDate(next9AM.getDate() + 1);
    }

    return next9AM.getTime() - nowEST.getTime();
  }
}

export default new LLMService();
