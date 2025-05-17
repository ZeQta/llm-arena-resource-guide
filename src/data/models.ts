import { ModelType } from "@/types/models";

export const models: ModelType[] = [
  {
    id: "gemini-25-pro-preview",
    name: "Gemini-2.5-Pro-Preview-05-06",
    organization: "Google",
    description: "Google's most advanced multimodal model for front-end coding, excels at generating high-quality HTML, CSS and JavaScript code with excellent UI/UX designs.",
    score: 9.9,
    free: false,
    topTask: "Advanced Front-end Code Generation",
    tags: ["Front-end", "Multimodal", "UI Design", "React"],
    tasks: [
      { taskName: "Code Generation", score: 9.9, benchmark: "ARENA", details: "1419.95 Arena Score" },
      { taskName: "React", score: 9.9, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.8, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.7, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.8, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$10/1M input tokens, $30/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2025-05-06",
    modelSize: "Undisclosed",
    contextWindow: "1M tokens",
    multimodal: true
  },
  {
    id: "claude-37-sonnet",
    name: "Claude 3.7 Sonnet (20250219)",
    organization: "Anthropic",
    description: "Anthropic's specialized front-end development model with exceptional understanding of web design principles and modern framework implementation.",
    score: 9.8,
    free: false,
    topTask: "Framework-based Development",
    tags: ["Front-end", "Framework Expertise", "Documentation"],
    tasks: [
      { taskName: "Code Generation", score: 9.8, benchmark: "ARENA", details: "1357.10 Arena Score" },
      { taskName: "React", score: 9.8, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.7, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.7, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.6, benchmark: "UB" }
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
    releaseDate: "2025-02-19",
    modelSize: "Undisclosed",
    contextWindow: "200K tokens",
    multimodal: true
  },
  {
    id: "gemini-25-pro-exp",
    name: "Gemini-2.5-Pro-Exp-03-25",
    organization: "Google",
    description: "Experimental version of Gemini 2.5 with enhanced capabilities for translating design mockups into functional code and debugging front-end applications.",
    score: 9.7,
    free: false,
    topTask: "Design-to-Code",
    tags: ["Front-end", "Design Translation", "Debugging"],
    tasks: [
      { taskName: "Code Generation", score: 9.7, benchmark: "ARENA", details: "1272.86 Arena Score" },
      { taskName: "React", score: 9.6, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.7, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.5, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.7, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$8/1M input tokens, $24/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2025-03-25",
    modelSize: "Undisclosed",
    contextWindow: "1M tokens",
    multimodal: true
  },
  {
    id: "gpt-41-latest",
    name: "GPT-4.1-2025-04-14",
    organization: "OpenAI",
    description: "OpenAI's advanced model optimized for front-end development with strong capabilities in responsive design and cross-browser compatibility.",
    score: 9.7,
    free: false,
    topTask: "Cross-browser Compatibility",
    tags: ["Front-end", "Responsive", "Cross-browser"],
    tasks: [
      { taskName: "Code Generation", score: 9.7, benchmark: "ARENA", details: "1261.35 Arena Score" },
      { taskName: "React", score: 9.7, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.6, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.8, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.5, benchmark: "UB" }
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
    releaseDate: "2025-04-14",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "claude-35-sonnet",
    name: "Claude 3.5 Sonnet (20241022)",
    organization: "Anthropic",
    description: "Claude 3.5 Sonnet excels at translating design requirements into clean, maintainable front-end code with excellent documentation.",
    score: 9.6,
    free: false,
    topTask: "Well-documented Code",
    tags: ["Front-end", "Documentation", "Clean Code"],
    tasks: [
      { taskName: "Code Generation", score: 9.6, benchmark: "ARENA", details: "1237.84 Arena Score" },
      { taskName: "React", score: 9.5, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.6, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.4, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.5, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$8/1M input tokens, $24/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
      documentation: "https://docs.anthropic.com/claude/docs",
      apiKey: true
    },
    releaseDate: "2024-10-22",
    modelSize: "Undisclosed",
    contextWindow: "200K tokens",
    multimodal: true
  },
  {
    id: "deepseek-v3-0324",
    name: "DeepSeek-V3-0324",
    organization: "DeepSeek",
    description: "Open-source model with MIT license that performs exceptionally well on front-end tasks including React, Vue, and Angular development.",
    score: 9.5,
    free: true,
    topTask: "Open-source Front-end Development",
    tags: ["Open Source", "MIT License", "Multiple Frameworks"],
    tasks: [
      { taskName: "Code Generation", score: 9.5, benchmark: "ARENA", details: "1206.85 Arena Score" },
      { taskName: "React", score: 9.5, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.4, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.3, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.4, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/deepseek-ai/deepseek-v3",
      documentation: "https://deepseek-ai.com/docs",
      apiKey: false
    },
    releaseDate: "2025-03-24",
    modelSize: "Undisclosed",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek-R1",
    organization: "DeepSeek",
    description: "MIT-licensed model focused specifically on React development with excellent component structure and state management.",
    score: 9.5,
    free: true,
    topTask: "React Development",
    tags: ["Open Source", "React", "MIT License"],
    tasks: [
      { taskName: "Code Generation", score: 9.5, benchmark: "ARENA", details: "1198.71 Arena Score" },
      { taskName: "React", score: 9.7, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.4, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.2, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.3, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/deepseek-ai/deepseek-r1",
      documentation: "https://deepseek-ai.com/docs",
      apiKey: false
    },
    releaseDate: "2025-01-15",
    modelSize: "Undisclosed",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "gpt-41-mini",
    name: "GPT-4.1-mini-2025-04-14",
    organization: "OpenAI",
    description: "Smaller variant of GPT-4.1 optimized for speed and cost-effectiveness while maintaining strong front-end coding capabilities.",
    score: 9.4,
    free: false,
    topTask: "Cost-effective Front-end Development",
    tags: ["Front-end", "Cost-effective", "Fast"],
    tasks: [
      { taskName: "Code Generation", score: 9.4, benchmark: "ARENA", details: "1188.56 Arena Score" },
      { taskName: "React", score: 9.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.3, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.4, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.2, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$2/1M input tokens, $6/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2025-04-14",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "o3-latest",
    name: "o3-2025-04-16",
    organization: "OpenAI",
    description: "Specialized front-end development model from OpenAI with excellent JavaScript and TypeScript capabilities.",
    score: 9.4,
    free: false,
    topTask: "JavaScript/TypeScript Development",
    tags: ["Front-end", "JavaScript", "TypeScript"],
    tasks: [
      { taskName: "Code Generation", score: 9.4, benchmark: "ARENA", details: "1187.08 Arena Score" },
      { taskName: "React", score: 9.3, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.2, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.3, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.4, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$5/1M input tokens, $15/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2025-04-16",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "qwen3-235b-a22b",
    name: "Qwen3-235B-A22B",
    organization: "Alibaba",
    description: "Large-scale model from Alibaba with exceptional front-end coding capabilities and strong performance across various frameworks.",
    score: 9.4,
    free: true,
    topTask: "Multi-framework Development",
    tags: ["Front-end", "Apache 2.0", "Multiple Frameworks"],
    tasks: [
      { taskName: "Code Generation", score: 9.4, benchmark: "ARENA", details: "1185.64 Arena Score" },
      { taskName: "React", score: 9.3, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.4, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.2, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.3, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/QwenLM/Qwen",
      documentation: "https://qwen.readthedocs.io",
      apiKey: false
    },
    releaseDate: "2025-02-28",
    modelSize: "235B",
    contextWindow: "32K tokens",
    multimodal: true
  },
  {
    id: "gemini-25-flash-preview",
    name: "Gemini-2.5-Flash-Preview-04-17",
    organization: "Google",
    description: "Faster variant of Gemini 2.5 optimized for rapid prototyping and interactive front-end development.",
    score: 9.3,
    free: false,
    topTask: "Rapid Prototyping",
    tags: ["Front-end", "Fast", "Prototyping"],
    tasks: [
      { taskName: "Code Generation", score: 9.3, benchmark: "ARENA", details: "1145.13 Arena Score" },
      { taskName: "React", score: 9.2, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.3, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.1, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.2, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$3/1M input tokens, $9/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2025-04-17",
    modelSize: "Undisclosed",
    contextWindow: "1M tokens",
    multimodal: true
  },
  {
    id: "early-grok-3",
    name: "early-grok-3",
    organization: "xAI",
    description: "Front-end focused model from xAI with strong performance in React and modern JavaScript frameworks.",
    score: 9.3,
    free: false,
    topTask: "Modern Framework Development",
    tags: ["Front-end", "React", "Modern JavaScript"],
    tasks: [
      { taskName: "Code Generation", score: 9.3, benchmark: "ARENA", details: "1142.85 Arena Score" },
      { taskName: "React", score: 9.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.2, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.1, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.3, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$5/1M input tokens, $15/1M output tokens",
        tiers: ["Standard", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://grok.x.ai/api",
      documentation: "https://grok.x.ai/docs",
      apiKey: true
    },
    releaseDate: "2025-01-30",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "o3-mini-high",
    name: "o3-mini-high (20250131)",
    organization: "OpenAI",
    description: "Optimized variant of o3 with enhanced capabilities for front-end development and web accessibility.",
    score: 9.3,
    free: false,
    topTask: "Accessible Web Development",
    tags: ["Front-end", "Accessibility", "Web Standards"],
    tasks: [
      { taskName: "Code Generation", score: 9.3, benchmark: "ARENA", details: "1136.37 Arena Score" },
      { taskName: "React", score: 9.2, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.1, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.3, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.2, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$3/1M input tokens, $9/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2025-01-31",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "claude-35-haiku",
    name: "Claude 3.5 Haiku (20241022)",
    organization: "Anthropic",
    description: "Smaller, faster variant of Claude 3.5 optimized for front-end development with excellent performance-to-cost ratio.",
    score: 9.2,
    free: false,
    topTask: "Efficient Front-end Development",
    tags: ["Front-end", "Efficient", "Fast"],
    tasks: [
      { taskName: "Code Generation", score: 9.2, benchmark: "ARENA", details: "1133.26 Arena Score" },
      { taskName: "React", score: 9.1, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.2, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.0, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.1, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$3/1M input tokens, $9/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
      documentation: "https://docs.anthropic.com/claude/docs",
      apiKey: true
    },
    releaseDate: "2024-10-22",
    modelSize: "Undisclosed",
    contextWindow: "200K tokens",
    multimodal: true
  },
  {
    id: "o4-mini-2025-04-16",
    name: "o4-mini-2025-04-16",
    organization: "OpenAI",
    description: "Compact model from OpenAI with strong front-end capabilities and excellent performance for everyday coding tasks.",
    score: 9.1,
    free: false,
    topTask: "Everyday Front-end Tasks",
    tags: ["Front-end", "Compact", "Everyday Use"],
    tasks: [
      { taskName: "Code Generation", score: 9.1, benchmark: "ARENA", details: "1093.02 Arena Score" },
      { taskName: "React", score: 9.0, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.1, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.0, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.0, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$1.5/1M input tokens, $4.5/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2025-04-16",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "o3-mini",
    name: "o3-mini (20250131)",
    organization: "OpenAI",
    description: "Lightweight model from OpenAI with good front-end development capabilities at an affordable price point.",
    score: 9.1,
    free: false,
    topTask: "Budget-friendly Front-end Development",
    tags: ["Front-end", "Budget", "Lightweight"],
    tasks: [
      { taskName: "Code Generation", score: 9.1, benchmark: "ARENA", details: "1091.78 Arena Score" },
      { taskName: "React", score: 9.0, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 9.0, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.0, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.9, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$0.5/1M input tokens, $1.5/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2025-01-31",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "gemini-20-pro-exp",
    name: "Gemini-2.0-Pro-Exp-02-05",
    organization: "Google",
    description: "Experimental version of Gemini 2.0 with enhanced front-end capabilities and improved debugging skills.",
    score: 9.1,
    free: false,
    topTask: "Front-end Debugging",
    tags: ["Front-end", "Debugging", "Problem Solving"],
    tasks: [
      { taskName: "Code Generation", score: 9.1, benchmark: "ARENA", details: "1088.91 Arena Score" },
      { taskName: "React", score: 9.0, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.9, benchmark: "UB" },
      { taskName: "Responsive Design", score: 9.0, benchmark: "UB" },
      { taskName: "UI/UX", score: 9.0, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$5/1M input tokens, $15/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2025-02-05",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "o1",
    name: "o1 (20241217)",
    organization: "OpenAI",
    description: "General-purpose model with strong front-end capabilities and excellent performance on JavaScript and TypeScript tasks.",
    score: 8.9,
    free: false,
    topTask: "JavaScript/TypeScript Development",
    tags: ["Front-end", "JavaScript", "TypeScript"],
    tasks: [
      { taskName: "Code Generation", score: 8.9, benchmark: "ARENA", details: "1045.00 Arena Score" },
      { taskName: "React", score: 8.8, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.9, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.7, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.8, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$2/1M input tokens, $6/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2024-12-17",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "o1-mini",
    name: "o1-mini (20240912)",
    organization: "OpenAI",
    description: "Compact model with good front-end development capabilities at an affordable price point.",
    score: 8.9,
    free: false,
    topTask: "Cost-effective Front-end Development",
    tags: ["Front-end", "Budget", "Compact"],
    tasks: [
      { taskName: "Code Generation", score: 8.9, benchmark: "ARENA", details: "1041.94 Arena Score" },
      { taskName: "React", score: 8.8, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.8, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.7, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.7, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$0.25/1M input tokens, $0.75/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2024-09-12",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "gemini-20-flash-001",
    name: "Gemini-2.0-Flash-001",
    organization: "Google",
    description: "Fast and efficient model from Google optimized for rapid front-end prototyping and interactive development.",
    score: 8.9,
    free: false,
    topTask: "Rapid Front-end Prototyping",
    tags: ["Front-end", "Prototyping", "Fast"],
    tasks: [
      { taskName: "Code Generation", score: 8.9, benchmark: "ARENA", details: "1039.32 Arena Score" },
      { taskName: "React", score: 8.8, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.7, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.8, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.7, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$1/1M input tokens, $3/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2024-08-15",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "gemini-20-flash-thinking",
    name: "Gemini-2.0-Flash-Thinking-01-21",
    organization: "Google",
    description: "Enhanced variant of Gemini 2.0 Flash with improved reasoning for complex front-end problems.",
    score: 8.8,
    free: false,
    topTask: "Complex Front-end Problem Solving",
    tags: ["Front-end", "Problem Solving", "Reasoning"],
    tasks: [
      { taskName: "Code Generation", score: 8.8, benchmark: "ARENA", details: "1029.71 Arena Score" },
      { taskName: "React", score: 8.7, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.6, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.7, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.6, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$1.5/1M input tokens, $4.5/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2025-01-21",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "llama-4-maverick",
    name: "Llama-4-Maverick-17B-128E-Instruct",
    organization: "Meta",
    description: "Advanced open-source model from Meta with strong front-end capabilities and excellent performance on React tasks.",
    score: 8.7,
    free: true,
    topTask: "Open-source Front-end Development",
    tags: ["Open Source", "React", "Llama 4"],
    tasks: [
      { taskName: "Code Generation", score: 8.7, benchmark: "ARENA", details: "1015.27 Arena Score" },
      { taskName: "React", score: 8.8, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.5, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.6, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.5, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/meta-llama/llama4",
      documentation: "https://llama.meta.com/docs",
      apiKey: false
    },
    releaseDate: "2024-11-05",
    modelSize: "17B",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "gemini-20-flash-exp",
    name: "Gemini-2.0-Flash-Exp",
    organization: "Google",
    description: "Experimental fast model from Google optimized for front-end development with strong performance on CSS and design tasks.",
    score: 8.6,
    free: false,
    topTask: "CSS and Design Implementation",
    tags: ["Front-end", "CSS", "Design"],
    tasks: [
      { taskName: "Code Generation", score: 8.6, benchmark: "ARENA", details: "980.31 Arena Score" },
      { taskName: "React", score: 8.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.7, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.5, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.6, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$0.5/1M input tokens, $1.5/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2024-07-20",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "qwen25-max",
    name: "Qwen2.5-Max",
    organization: "Alibaba",
    description: "Large-scale model from Alibaba with strong front-end capabilities and excellent performance across multiple languages.",
    score: 8.6,
    free: false,
    topTask: "Multilingual Front-end Development",
    tags: ["Front-end", "Multilingual", "Multiple Frameworks"],
    tasks: [
      { taskName: "Code Generation", score: 8.6, benchmark: "ARENA", details: "974.69 Arena Score" },
      { taskName: "React", score: 8.5, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.6, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.4, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.5, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$2.5/1M input tokens, $7.5/1M output tokens",
        tiers: ["Standard", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://qwen.aliyun.com/api",
      documentation: "https://qwen.readthedocs.io",
      apiKey: true
    },
    releaseDate: "2024-09-15",
    modelSize: "Undisclosed",
    contextWindow: "32K tokens",
    multimodal: true
  },
  {
    id: "gpt-4o-2024-11-20",
    name: "GPT-4o-2024-11-20",
    organization: "OpenAI",
    description: "Multimodal model from OpenAI with strong front-end capabilities and excellent performance on UX/UI tasks.",
    score: 8.5,
    free: false,
    topTask: "UX/UI Development",
    tags: ["Front-end", "UX/UI", "Multimodal"],
    tasks: [
      { taskName: "Code Generation", score: 8.5, benchmark: "ARENA", details: "964.00 Arena Score" },
      { taskName: "React", score: 8.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.5, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.5, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.6, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$5/1M input tokens, $15/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://platform.openai.com/docs/api-reference",
      documentation: "https://platform.openai.com/docs/guides/gpt",
      apiKey: true
    },
    releaseDate: "2024-11-20",
    modelSize: "Undisclosed",
    contextWindow: "128K tokens",
    multimodal: true
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek-V3",
    organization: "DeepSeek",
    description: "Open-source model with DeepSeek license that performs well on front-end tasks with excellent documentation capabilities.",
    score: 8.5,
    free: true,
    topTask: "Well-documented Front-end Code",
    tags: ["Open Source", "Documentation", "DeepSeek"],
    tasks: [
      { taskName: "Code Generation", score: 8.5, benchmark: "ARENA", details: "959.89 Arena Score" },
      { taskName: "React", score: 8.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.3, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.3, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.2, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/deepseek-ai/deepseek-v3",
      documentation: "https://deepseek-ai.com/docs",
      apiKey: false
    },
    releaseDate: "2024-06-10",
    modelSize: "Undisclosed",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "qwen25-coder-32b",
    name: "Qwen2.5-Coder-32B-Instruct",
    organization: "Alibaba",
    description: "Specialized coding model from Alibaba with Apache 2.0 license, optimized for front-end development tasks.",
    score: 8.3,
    free: true,
    topTask: "Open-source Front-end Coding",
    tags: ["Open Source", "Apache 2.0", "Front-end"],
    tasks: [
      { taskName: "Code Generation", score: 8.3, benchmark: "ARENA", details: "902.33 Arena Score" },
      { taskName: "React", score: 8.4, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.2, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.1, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.2, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/QwenLM/Qwen",
      documentation: "https://qwen.readthedocs.io",
      apiKey: false
    },
    releaseDate: "2024-08-05",
    modelSize: "32B",
    contextWindow: "32K tokens",
    multimodal: false
  },
  {
    id: "llama-4-scout",
    name: "Llama-4-Scout-17B-16E-Instruct",
    organization: "Meta",
    description: "Open-source model from Meta with Llama 4 license, optimized for front-end development with strong JS/TS capabilities.",
    score: 8.3,
    free: true,
    topTask: "JavaScript/TypeScript Development",
    tags: ["Open Source", "Llama 4", "JavaScript"],
    tasks: [
      { taskName: "Code Generation", score: 8.3, benchmark: "ARENA", details: "899.84 Arena Score" },
      { taskName: "React", score: 8.2, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.1, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.2, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.0, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/meta-llama/llama4",
      documentation: "https://llama.meta.com/docs",
      apiKey: false
    },
    releaseDate: "2024-10-18",
    modelSize: "17B",
    contextWindow: "128K tokens",
    multimodal: false
  },
  {
    id: "gemini-15-pro-002",
    name: "Gemini-1.5-Pro-002",
    organization: "Google",
    description: "General-purpose model from Google with good front-end capabilities and strong performance on UI/UX tasks.",
    score: 8.3,
    free: false,
    topTask: "UI/UX Development",
    tags: ["Front-end", "UI/UX", "General-purpose"],
    tasks: [
      { taskName: "Code Generation", score: 8.3, benchmark: "ARENA", details: "892.56 Arena Score" },
      { taskName: "React", score: 8.2, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 8.3, benchmark: "UB" },
      { taskName: "Responsive Design", score: 8.1, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.4, benchmark: "UB" }
    ],
    pricing: {
      paid: {
        pricing: "$3.50/1M input tokens, $10.50/1M output tokens",
        tiers: ["Pay as you go", "Enterprise"]
      }
    },
    apiAccess: {
      url: "https://ai.google.dev/api/rest",
      documentation: "https://ai.google.dev/docs",
      apiKey: true
    },
    releaseDate: "2024-03-25",
    modelSize: "Undisclosed",
    contextWindow: "1M tokens",
    multimodal: true
  },
  {
    id: "llama-31-405b",
    name: "Llama-3.1-405B-Instruct",
    organization: "Meta",
    description: "Large-scale open-source model from Meta with Llama 3.1 license and strong front-end development capabilities.",
    score: 8.0,
    free: true,
    topTask: "Large-scale Front-end Development",
    tags: ["Open Source", "Llama 3.1", "Large-scale"],
    tasks: [
      { taskName: "Code Generation", score: 8.0, benchmark: "ARENA", details: "809.72 Arena Score" },
      { taskName: "React", score: 8.1, benchmark: "UB" },
      { taskName: "CSS/Tailwind", score: 7.9, benchmark: "UB" },
      { taskName: "Responsive Design", score: 7.8, benchmark: "UB" },
      { taskName: "UI/UX", score: 8.0, benchmark: "UB" }
    ],
    apiAccess: {
      url: "https://github.com/meta-llama/llama3.1",
      documentation: "https://llama.meta.com/docs",
      apiKey: false
    },
    releaseDate: "2024-05-15",
    modelSize: "405B",
    contextWindow: "128K tokens",
    multimodal: false
  }
].map(model => {
  // Make all models multimodal except DeepSeek ones
  if (!model.organization.includes('DeepSeek')) {
    return { ...model, multimodal: true };
  }
  return model;
});
