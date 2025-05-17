
export interface ModelType {
  id: string;
  name: string;
  organization: string;
  description: string;
  score: number;
  free: boolean;
  topTask: string;
  tags: string[];
  tasks: TaskScore[];
  pricing?: {
    free?: {
      tokens: string;
      rateLimit: string;
    };
    paid?: {
      pricing: string;
      tiers: string[];
    };
  };
  apiAccess: {
    url: string;
    documentation: string;
    apiKey: boolean;
  };
  releaseDate: string;
  modelSize?: string;
  contextWindow?: string;
  multimodal: boolean;
  rank?: number;
  license?: string;
  votes?: number;
  ci?: string;
}

export interface TaskScore {
  taskName: string;
  score: number;
  benchmark: string;
  details?: string;
}

export interface Benchmark {
  name: string;
  description: string;
  link: string;
}
