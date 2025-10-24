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
        architecture: {
          type: 'Transformer-based Decoder',
          components: {
            'Core Architecture': 'Dense Transformer with mixture of experts (MoE) - multiple specialized sub-models activated based on input',
            'Attention Mechanism': 'Multi-head self-attention with sparse attention patterns for efficiency',
            'Reasoning Engine': 'Chain-of-thought reasoning with implicit step-by-step problem decomposition',
            'Vision Encoder': 'ViT (Vision Transformer) for processing image inputs, integrated with text processing',
            'Safety Layer': 'RLHF (Reinforcement Learning from Human Feedback) alignment with constitutional AI principles',
            'Memory System': 'Context window management with key-value caching for long conversations',
            'Agent Capabilities': 'Function calling, tool use, structured outputs for integration with external systems'
          },
          layers: '~96-120 transformer layers',
          trainingMethod: 'Pre-training on diverse text/code + RLHF + red-teaming'
        },
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
        architecture: {
          type: 'Optimized Transformer Decoder',
          components: {
            'Core Architecture': 'Optimized MoE transformer with improved routing efficiency and reduced latency',
            'Attention Mechanism': 'Grouped-query attention (GQA) for faster processing with extended context',
            'Reasoning Engine': 'Streamlined reasoning pipeline with optimized inference paths',
            'Vision Encoder': 'Efficient ViT variant with compression for faster multimodal processing',
            'Safety Layer': 'Same RLHF alignment as GPT-4 with additional speed optimizations',
            'Memory System': 'Advanced context caching with 128K token sliding window support',
            'Agent Capabilities': 'Enhanced function calling with JSON mode and reproducible outputs'
          },
          layers: '~96 transformer layers with optimized computation',
          trainingMethod: 'Distillation from GPT-4 + additional training + efficiency optimization'
        },
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
        architecture: {
          type: 'Standard Transformer Decoder',
          components: {
            'Core Architecture': 'Dense transformer architecture optimized for conversational tasks',
            'Attention Mechanism': 'Standard multi-head attention with efficient token processing',
            'Reasoning Engine': 'Basic reasoning with pattern matching and completion',
            'Vision Encoder': 'Not available in this version',
            'Safety Layer': 'RLHF fine-tuning for safe and helpful responses',
            'Memory System': 'Standard context window with efficient caching',
            'Agent Capabilities': 'Function calling support for basic tool integration'
          },
          layers: '96 transformer layers',
          trainingMethod: 'Pre-training on text/code + RLHF + instruction tuning'
        },
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
        architecture: {
          type: 'Constitutional AI Transformer',
          components: {
            'Core Architecture': 'Advanced transformer with constitutional AI principles built into architecture',
            'Attention Mechanism': 'Long-range attention with 200K token support and efficient processing',
            'Reasoning Engine': 'Multi-step reasoning with explicit chain-of-thought and self-reflection capabilities',
            'Vision Encoder': 'Advanced image understanding with PDF and document processing capabilities',
            'Safety Layer': 'Constitutional AI training - model learns harmlessness from AI feedback (not just human feedback)',
            'Memory System': 'Extended context management with intelligent summarization for long conversations',
            'Agent Capabilities': 'Advanced tool use, computer control, code execution, multi-step task planning'
          },
          layers: 'Undisclosed (estimated 80-100 layers)',
          trainingMethod: 'Constitutional AI + RLHF + preference learning + self-critique'
        },
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
        architecture: {
          type: 'Large-scale Constitutional AI Transformer',
          components: {
            'Core Architecture': 'Largest Claude architecture with maximum reasoning capacity',
            'Attention Mechanism': 'Dense attention with 200K context and sophisticated pattern recognition',
            'Reasoning Engine': 'Deep reasoning with extended chain-of-thought, multi-perspective analysis',
            'Vision Encoder': 'High-fidelity vision processing for detailed image and document analysis',
            'Safety Layer': 'Enhanced constitutional AI with extensive red-team testing',
            'Memory System': 'Sophisticated long-context management with hierarchical summarization',
            'Agent Capabilities': 'Advanced planning, research, analysis with tool orchestration'
          },
          layers: 'Undisclosed (largest in Claude family)',
          trainingMethod: 'Constitutional AI + extensive RLHF + expert demonstrations'
        },
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
        architecture: {
          type: 'Compact Constitutional AI Transformer',
          components: {
            'Core Architecture': 'Streamlined transformer optimized for speed and efficiency',
            'Attention Mechanism': 'Efficient attention with fast processing while maintaining 200K context',
            'Reasoning Engine': 'Lightweight reasoning suitable for straightforward tasks',
            'Vision Encoder': 'Basic vision capabilities for simple image understanding',
            'Safety Layer': 'Constitutional AI principles with optimized safety checks',
            'Memory System': 'Fast context processing with efficient memory management',
            'Agent Capabilities': 'Basic tool use and function calling for simple workflows'
          },
          layers: 'Undisclosed (smallest in Claude 3 family)',
          trainingMethod: 'Distillation from larger Claude models + Constitutional AI'
        },
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
        architecture: {
          type: 'Multimodal Mixture-of-Experts Transformer',
          components: {
            'Core Architecture': 'Advanced MoE with specialized experts for different modalities and tasks',
            'Attention Mechanism': 'Efficient sparse attention supporting 1M-2M token contexts',
            'Reasoning Engine': 'Multi-step reasoning with cross-modal understanding',
            'Vision Encoder': 'Unified encoder for images, video frames with temporal understanding',
            'Audio Processor': 'Speech and audio understanding integrated with text processing',
            'Safety Layer': 'Multi-stage safety including content filtering and bias mitigation',
            'Memory System': 'Hierarchical memory architecture for extremely long contexts',
            'Agent Capabilities': 'Function calling, code execution, external tool integration'
          },
          layers: 'Undisclosed (estimated very deep architecture)',
          trainingMethod: 'Multimodal pre-training + instruction tuning + RLHF'
        },
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
        architecture: {
          type: 'Optimized Multimodal MoE',
          components: {
            'Core Architecture': 'Streamlined MoE with fewer but more efficient experts',
            'Attention Mechanism': 'Fast sparse attention for 1M token processing',
            'Reasoning Engine': 'Efficient reasoning optimized for speed',
            'Vision Encoder': 'Compressed multimodal encoder for faster processing',
            'Audio Processor': 'Lightweight audio processing capabilities',
            'Safety Layer': 'Efficient safety checks with maintained standards',
            'Memory System': 'Fast context processing with smart caching',
            'Agent Capabilities': 'Streamlined tool use for rapid task execution'
          },
          layers: 'Undisclosed (optimized depth vs Pro)',
          trainingMethod: 'Distillation from Gemini Pro + optimization training'
        },
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
        architecture: {
          type: 'Open-Source Dense Transformer',
          components: {
            'Core Architecture': 'Standard dense transformer with 405B parameters, fully open architecture',
            'Attention Mechanism': 'Grouped-query attention (GQA) for efficient long-context processing',
            'Reasoning Engine': 'Strong reasoning capabilities through scale and training data',
            'Vision Encoder': 'Not included (text-only model)',
            'Safety Layer': 'Llama Guard safety model (separate component) for content filtering',
            'Memory System': '128K token rope-based positional encoding for extended context',
            'Agent Capabilities': 'Tool use through fine-tuning, supports function calling when adapted'
          },
          layers: '126 transformer layers',
          trainingMethod: 'Pre-training on 15T+ tokens + instruction tuning + preference optimization (DPO)'
        },
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
        architecture: {
          type: 'Efficient Open-Source Transformer',
          components: {
            'Core Architecture': 'Dense transformer with 70B parameters, optimized for efficiency',
            'Attention Mechanism': 'GQA with reduced KV cache for memory efficiency',
            'Reasoning Engine': 'Solid reasoning for mid-scale tasks and fine-tuning',
            'Vision Encoder': 'Not included (text-only)',
            'Safety Layer': 'Llama Guard compatibility for safety filtering',
            'Memory System': '128K context with rope positional encoding',
            'Agent Capabilities': 'Supports tool use after fine-tuning'
          },
          layers: '80 transformer layers',
          trainingMethod: 'Same training pipeline as 405B with scaled parameters'
        },
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
        architecture: {
          type: 'Multilingual Mixture-of-Experts',
          components: {
            'Core Architecture': 'MoE architecture with language-specific experts for multilingual excellence',
            'Attention Mechanism': 'Sliding window attention combined with global attention',
            'Reasoning Engine': 'Strong reasoning with emphasis on code and logic',
            'Vision Encoder': 'Multimodal capabilities with vision support',
            'Safety Layer': 'European GDPR-compliant safety and content filtering',
            'Memory System': '128K context with efficient retrieval mechanisms',
            'Agent Capabilities': 'Function calling, native JSON mode, tool integration'
          },
          layers: 'Undisclosed MoE configuration',
          trainingMethod: 'Multilingual pre-training + instruction tuning + DPO'
        },
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
        architecture: {
          type: 'Compact Dense Transformer',
          components: {
            'Core Architecture': 'Dense 22B parameter model optimized for efficiency',
            'Attention Mechanism': 'Sliding window attention for fast processing',
            'Reasoning Engine': 'Basic reasoning suitable for common tasks',
            'Vision Encoder': 'Not included (text-only)',
            'Safety Layer': 'Efficient content moderation',
            'Memory System': '32K context window',
            'Agent Capabilities': 'Limited tool use capabilities'
          },
          layers: 'Undisclosed (optimized depth)',
          trainingMethod: 'Distillation + targeted fine-tuning'
        },
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
        architecture: {
          type: 'Pathways-based Transformer',
          components: {
            'Core Architecture': 'Dense transformer using Google Pathways infrastructure',
            'Attention Mechanism': 'Multi-query attention for efficient serving',
            'Reasoning Engine': 'Strong mathematical and logical reasoning',
            'Vision Encoder': 'Not included (text-focused model)',
            'Safety Layer': 'Google safety standards with content filtering',
            'Memory System': '8K token context',
            'Agent Capabilities': 'Limited - primarily completion-based'
          },
          layers: 'Undisclosed (estimated 118 layers)',
          trainingMethod: 'Pre-training on multilingual corpus + fine-tuning'
        },
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
        architecture: {
          type: 'RAG-Optimized Transformer',
          components: {
            'Core Architecture': 'Dense transformer with specialized RAG integration layers',
            'Attention Mechanism': 'Cross-attention mechanisms optimized for retrieved document integration',
            'Reasoning Engine': 'Grounded reasoning that cites sources and maintains factual accuracy',
            'Vision Encoder': 'Not included (text-focused)',
            'Safety Layer': 'Enterprise-grade safety with hallucination detection',
            'Memory System': '128K context with document chunking optimization',
            'Agent Capabilities': 'Tool use with emphasis on search and retrieval tools',
            'RAG Components': 'Native connectors, citation tracking, relevance scoring'
          },
          layers: 'Undisclosed (optimized for RAG workflows)',
          trainingMethod: 'Pre-training + RAG-specific fine-tuning + grounding optimization'
        },
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
        architecture: {
          type: 'Diffusion-based Image Generator',
          components: {
            'Core Architecture': 'Latent diffusion model with transformer-based text encoder',
            'Text Encoder': 'Advanced language model for precise prompt understanding',
            'Diffusion Process': 'Iterative denoising in latent space for high-quality generation',
            'Image Decoder': 'VAE decoder for converting latents to high-resolution images',
            'Prompt Rewriting': 'GPT-4 integration for expanding and refining user prompts',
            'Safety Layer': 'Content filtering, watermarking, and policy enforcement',
            'Memory System': 'Not applicable (single-turn image generation)',
            'Style Control': 'Advanced prompt adherence and artistic style capabilities'
          },
          layers: 'Multi-stage: text encoder + diffusion U-Net + decoder',
          trainingMethod: 'Diffusion training on text-image pairs + safety fine-tuning'
        },
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
        architecture: {
          type: 'Open-Source Latent Diffusion',
          components: {
            'Core Architecture': 'Two-stage diffusion: base model + refiner for enhanced details',
            'Text Encoder': 'Dual CLIP encoders (OpenCLIP ViT-G/14 + OpenAI CLIP ViT-L/14)',
            'Diffusion Process': 'U-Net based denoising in latent space with cross-attention',
            'Image Decoder': 'VAE decoder for latent-to-pixel conversion',
            'Refinement Stage': 'Second diffusion model for detail enhancement',
            'Safety Layer': 'Optional safety checker (open-source, user-controlled)',
            'Memory System': 'Not applicable (single-turn generation)',
            'Customization': 'LoRA support, textual inversion, DreamBooth fine-tuning'
          },
          layers: 'U-Net with attention layers + dual text encoders',
          trainingMethod: 'Latent diffusion training on LAION dataset + aesthetic scoring'
        },
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
