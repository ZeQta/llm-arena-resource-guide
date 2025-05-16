
import { ModelType } from "@/types/models";

export const models: ModelType[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    organization: "OpenAI",
    description: "GPT-4o is OpenAI's latest multimodal model that can seamlessly understand and process image, audio, and text inputs. It's the most powerful model for text and vision tasks.",
    score: 9.8,
    free: false,
    topTask: "Multimodal Understanding",
    tags: ["Multimodal", "Vision", "Audio", "Text"],
    tasks: [
      { taskName: "Text Generation", score: 9.7, benchmark: "MMLU", details: "93.4% accuracy" },
      { taskName: "Question Answering", score: 9.8, benchmark: "HELM" },
      { taskName: "Summarization", score: 9.6, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 9.5, benchmark: "HumanEval", details: "88% pass@1" },
      { taskName: "Multimodal", score: 9.9, benchmark: "MMMU", details: "91.2% accuracy" }
    ],
    pricing: {
      paid: {
        pricing: "$10/1M input tokens, $30/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2024-05-13",
    modelSize: "1.8T parameters (estimated)",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    organization: "Anthropic",
    description: "Claude 3 Opus is Anthropic's most powerful model, designed for complex reasoning, coding, and sophisticated tasks. It excels in nuanced reasoning with lengthy texts.",
    score: 9.7,
    free: false,
    topTask: "Complex Reasoning",
    tags: ["Multimodal", "Reasoning", "Long Context"],
    tasks: [
      { taskName: "Text Generation", score: 9.6, benchmark: "MMLU", details: "92.3% accuracy" },
      { taskName: "Question Answering", score: 9.7, benchmark: "HELM" },
      { taskName: "Summarization", score: 9.5, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 9.4, benchmark: "HumanEval", details: "86% pass@1" },
      { taskName: "Multimodal", score: 9.6, benchmark: "MMMU", details: "89.1% accuracy" }
    ],
    pricing: {
      paid: {
        pricing: "$15/1M input tokens, $75/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
      documentation: "https://docs.anthropic.com/claude/docs",
      apiKey: true
    },
    releaseDate: "2024-03-04",
    modelSize: "~1.5T parameters (estimated)",
    contextWindow: "200K tokens",
    multimodal: true
  },
  {
    id: "gemini-pro",
    name: "Gemini 1.5 Pro",
    organization: "Google",
    description: "Gemini 1.5 Pro is Google's mid-sized multimodal model with a massive 1 million token context window, ideal for processing entire books, codebases, or videos in a single prompt.",
    score: 9.5,
    free: true,
    topTask: "Long Context Processing",
    tags: ["Multimodal", "Long Context", "Code"],
    tasks: [
      { taskName: "Text Generation", score: 9.4, benchmark: "MMLU", details: "87.8% accuracy" },
      { taskName: "Question Answering", score: 9.3, benchmark: "HELM" },
      { taskName: "Summarization", score: 9.5, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 9.2, benchmark: "HumanEval", details: "82% pass@1" },
      { taskName: "Multimodal", score: 9.5, benchmark: "MMMU", details: "85.4% accuracy" }
    ],
    pricing: {
      free: {
        tokens: "60 queries per minute",
        rateLimit: "Limited to 60 requests/min"
      },
      paid: {
        pricing: "$7/1M input tokens, $21/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2024-02-15",
    modelSize: "500B parameters (estimated)",
    contextWindow: "1M tokens",
    multimodal: true
  },
  {
    id: "llama-3-70b-instruct",
    name: "Llama 3 70B Instruct",
    organization: "Meta",
    description: "Llama 3 70B is Meta's most capable open model, available for commercial use. It performs exceptionally well across reasoning, coding, and creative tasks.",
    score: 9.1,
    free: true,
    topTask: "Open Source Deployment",
    tags: ["Open Source", "Self-hosted", "Commercial Use"],
    tasks: [
      { taskName: "Text Generation", score: 9.0, benchmark: "MMLU", details: "78.5% accuracy" },
      { taskName: "Question Answering", score: 9.1, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.9, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 9.0, benchmark: "HumanEval", details: "74% pass@1" }
    ],
    apiAccess: {
      url: "https://github.com/meta-llama/llama",
      documentation: "https://llama.meta.com/docs",
      apiKey: false
    },
    releaseDate: "2024-04-18",
    modelSize: "70B parameters",
    contextWindow: "8K tokens",
    multimodal: false
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    organization: "OpenAI",
    description: "GPT-4o Mini is a smaller, faster, and more cost-effective version of GPT-4o that maintains high performance across a range of tasks, with improved reasoning capabilities.",
    score: 9.0,
    free: false,
    topTask: "Cost-effective AI",
    tags: ["Multimodal", "Fast", "Cost-effective"],
    tasks: [
      { taskName: "Text Generation", score: 8.9, benchmark: "MMLU", details: "81.2% accuracy" },
      { taskName: "Question Answering", score: 8.8, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.9, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 8.7, benchmark: "HumanEval", details: "71% pass@1" },
      { taskName: "Multimodal", score: 8.8, benchmark: "MMMU", details: "78.5% accuracy" }
    ],
    pricing: {
      paid: {
        pricing: "$0.15/1M input tokens, $0.60/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2024-05-13",
    modelSize: "~200B parameters (estimated)",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "claude-3-haiku",
    name: "Claude 3 Haiku",
    organization: "Anthropic",
    description: "Claude 3 Haiku is Anthropic's fastest and most compact model, designed for high-volume, cost-sensitive applications that still require high quality responses.",
    score: 8.9,
    free: false,
    topTask: "Fast Response",
    tags: ["Fast", "Cost-effective", "Multimodal"],
    tasks: [
      { taskName: "Text Generation", score: 8.7, benchmark: "MMLU", details: "78.5% accuracy" },
      { taskName: "Question Answering", score: 8.8, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.9, benchmark: "SummEval" },
      { taskName: "Multimodal", score: 8.6, benchmark: "MMMU", details: "76.3% accuracy" }
    ],
    pricing: {
      paid: {
        pricing: "$0.25/1M input tokens, $1.25/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
      documentation: "https://docs.anthropic.com/claude/docs",
      apiKey: true
    },
    releaseDate: "2024-03-04",
    modelSize: "Unknown",
    contextWindow: "200K tokens",
    multimodal: true
  },
  {
    id: "mistral-large",
    name: "Mistral Large (2407)",
    organization: "Mistral AI",
    description: "Mistral Large is a state-of-the-art LLM that excels at reasoning, code generation, and instruction following. It offers performance comparable to the top models on the market.",
    score: 9.2,
    free: false,
    topTask: "Reasoning",
    tags: ["Reasoning", "Coding", "Multi-lingual"],
    tasks: [
      { taskName: "Text Generation", score: 9.2, benchmark: "MMLU", details: "86.7% accuracy" },
      { taskName: "Question Answering", score: 9.3, benchmark: "HELM" },
      { taskName: "Summarization", score: 9.1, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 9.3, benchmark: "HumanEval", details: "83% pass@1" }
    ],
    pricing: {
      paid: {
        pricing: "$8/1M input tokens, $24/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.mistral.ai/api/",
      documentation: "https://docs.mistral.ai/guides/",
      apiKey: true
    },
    releaseDate: "2024-04-10",
    modelSize: "Unknown",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "mixtral-8x7b",
    name: "Mixtral 8x7B Instruct",
    organization: "Mistral AI",
    description: "Mixtral 8x7B is a high-quality sparse mixture of experts model (SMoE) released by Mistral AI. It outperforms Llama 2 70B on many benchmarks while being much faster.",
    score: 8.7,
    free: true,
    topTask: "Efficient Inference",
    tags: ["Open Source", "SMoE", "Multi-lingual"],
    tasks: [
      { taskName: "Text Generation", score: 8.6, benchmark: "MMLU", details: "70.6% accuracy" },
      { taskName: "Question Answering", score: 8.7, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.5, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 8.8, benchmark: "HumanEval", details: "69% pass@1" }
    ],
    apiAccess: {
      url: "https://docs.mistral.ai/api/",
      documentation: "https://docs.mistral.ai/guides/",
      apiKey: true
    },
    releaseDate: "2023-12-11",
    modelSize: "47B parameters (8x7B sparse)",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "palm",
    name: "PaLM 2",
    organization: "Google",
    description: "PaLM 2 is Google's second-generation large language model with enhanced capabilities in reasoning, coding, and multilingual tasks across 100+ languages.",
    score: 8.5,
    free: true,
    topTask: "Multi-lingual",
    tags: ["Multi-lingual", "Reasoning", "Coding"],
    tasks: [
      { taskName: "Text Generation", score: 8.4, benchmark: "MMLU", details: "78.3% accuracy" },
      { taskName: "Question Answering", score: 8.5, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.3, benchmark: "SummEval" },
      { taskName: "Code Generation", score: 8.2, benchmark: "HumanEval", details: "65% pass@1" }
    ],
    pricing: {
      free: {
        tokens: "60 queries per minute",
        rateLimit: "Limited to 60 requests/min"
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2023-05-10",
    modelSize: "340B parameters",
    contextWindow: "8K tokens",
    multimodal: false
  },
  {
    id: "claude-instant",
    name: "Claude Instant",
    organization: "Anthropic",
    description: "Claude Instant is Anthropic's fastest and most cost-effective model, designed for high-throughput applications that require quick responses.",
    score: 8.4,
    free: false,
    topTask: "Fast Response",
    tags: ["Fast", "Cost-effective"],
    tasks: [
      { taskName: "Text Generation", score: 8.3, benchmark: "MMLU", details: "72.5% accuracy" },
      { taskName: "Question Answering", score: 8.4, benchmark: "HELM" },
      { taskName: "Summarization", score: 8.5, benchmark: "SummEval" }
    ],
    pricing: {
      paid: {
        pricing: "$0.20/1M input tokens, $0.60/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
      documentation: "https://docs.anthropic.com/claude/docs",
      apiKey: true
    },
    releaseDate: "2023-11-21",
    contextWindow: "100K tokens",
    multimodal: false
  }
];
