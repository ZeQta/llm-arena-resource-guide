
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
    name: "Claude 3.7 Sonnet",
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
    name: "Claude 3.5 Sonnet",
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
    multimodal: true
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
  }
];
