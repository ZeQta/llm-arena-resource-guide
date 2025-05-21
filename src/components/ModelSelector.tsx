
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ModelSelectorProps {
  onSelectModel: (modelId: string) => void;
  selectedModels: string[];
  apiKeys: Record<string, string>;
}

interface ModelOption {
  id: string;
  name: string;
  provider: string;
  description: string;
}

export function ModelSelector({ onSelectModel, selectedModels, apiKeys }: ModelSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample model definitions
  const openAIModels: ModelOption[] = [
    { id: "openai/gpt-4o", name: "GPT-4o", provider: "OpenAI", description: "Latest GPT-4 model with fast responses" },
    { id: "openai/gpt-4o-mini", name: "GPT-4o Mini", provider: "OpenAI", description: "Smaller, faster, and more cost-effective version of GPT-4o" },
    { id: "openai/gpt-4-turbo", name: "GPT-4 Turbo", provider: "OpenAI", description: "GPT-4 with improved capabilities, context, and up-to-date knowledge" },
    { id: "openai/gpt-3.5-turbo", name: "GPT-3.5 Turbo", provider: "OpenAI", description: "Fast and cost-effective model optimized for chat" },
  ];

  const anthropicModels: ModelOption[] = [
    { id: "anthropic/claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic", description: "Most powerful Claude model for complex tasks" },
    { id: "anthropic/claude-3-sonnet", name: "Claude 3 Sonnet", provider: "Anthropic", description: "Balanced model for a wide range of tasks" },
    { id: "anthropic/claude-3-haiku", name: "Claude 3 Haiku", provider: "Anthropic", description: "Fastest and most compact Claude model" },
    { id: "anthropic/claude-2.1", name: "Claude 2.1", provider: "Anthropic", description: "Previous-generation Claude model" },
  ];

  const mistralModels: ModelOption[] = [
    { id: "mistral/mistral-large", name: "Mistral Large", provider: "Mistral AI", description: "Most powerful model from Mistral AI" },
    { id: "mistral/mistral-medium", name: "Mistral Medium", provider: "Mistral AI", description: "Balanced performance and cost" },
    { id: "mistral/mistral-small", name: "Mistral Small", provider: "Mistral AI", description: "Fast and cost-effective model" },
  ];

  const googleModels: ModelOption[] = [
    { id: "google/gemini-1.5-pro", name: "Gemini 1.5 Pro", provider: "Google", description: "Google's most capable model for complex reasoning" },
    { id: "google/gemini-1.5-flash", name: "Gemini 1.5 Flash", provider: "Google", description: "Fastest response times, optimized for low latency" },
  ];

  const openRouterModels: ModelOption[] = [
    { id: "openrouter/meta-llama/llama-3-70b-instruct", name: "Llama 3 70B", provider: "OpenRouter", description: "Meta's Llama 3 70B model via OpenRouter" },
    { id: "openrouter/anthropic/claude-3-opus", name: "Claude 3 Opus", provider: "OpenRouter", description: "Anthropic's Claude 3 Opus via OpenRouter" },
    { id: "openrouter/google/gemini-1.5-pro", name: "Gemini 1.5 Pro", provider: "OpenRouter", description: "Google's Gemini 1.5 Pro via OpenRouter" },
    { id: "openrouter/mistral/mistral-large", name: "Mistral Large", provider: "OpenRouter", description: "Mistral Large via OpenRouter" },
    { id: "openrouter/perplexity/sonar-medium-online", name: "Perplexity Sonar", provider: "OpenRouter", description: "Perplexity Sonar Medium model via OpenRouter" },
  ];

  const allModelsByProvider = {
    openai: openAIModels,
    anthropic: anthropicModels,
    mistral: mistralModels,
    google: googleModels,
    openrouter: openRouterModels,
  };

  // Filter models based on search query
  const filterModels = (models: ModelOption[]) => {
    if (!searchQuery) return models;
    const query = searchQuery.toLowerCase();
    return models.filter(
      model =>
        model.name.toLowerCase().includes(query) ||
        model.provider.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query)
    );
  };

  const renderModelList = (models: ModelOption[], providerKey: string) => {
    const hasApiKey = !!apiKeys[providerKey];
    const filteredModels = filterModels(models);
    
    if (filteredModels.length === 0) {
      return <div className="py-4 text-center text-muted-foreground">No models found</div>;
    }
    
    return (
      <ScrollArea className="h-[300px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Model</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredModels.map(model => (
              <TableRow key={model.id}>
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell>{model.description}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectModel(model.id)}
                    disabled={!hasApiKey || selectedModels.includes(model.id)}
                  >
                    {selectedModels.includes(model.id) ? "Added" : "Add"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    );
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search models..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <Tabs defaultValue="openai">
        <TabsList className="w-full flex">
          <TabsTrigger value="openai" className="flex-1">OpenAI</TabsTrigger>
          <TabsTrigger value="anthropic" className="flex-1">Anthropic</TabsTrigger>
          <TabsTrigger value="mistral" className="flex-1">Mistral</TabsTrigger>
          <TabsTrigger value="google" className="flex-1">Google</TabsTrigger>
          <TabsTrigger value="openrouter" className="flex-1">OpenRouter</TabsTrigger>
        </TabsList>
        
        <TabsContent value="openai">
          {!apiKeys.openai ? (
            <div className="py-4 text-center text-muted-foreground">
              Please add your OpenAI API key to access these models
            </div>
          ) : (
            renderModelList(openAIModels, "openai")
          )}
        </TabsContent>
        
        <TabsContent value="anthropic">
          {!apiKeys.anthropic ? (
            <div className="py-4 text-center text-muted-foreground">
              Please add your Anthropic API key to access these models
            </div>
          ) : (
            renderModelList(anthropicModels, "anthropic")
          )}
        </TabsContent>
        
        <TabsContent value="mistral">
          {!apiKeys.mistral ? (
            <div className="py-4 text-center text-muted-foreground">
              Please add your Mistral AI API key to access these models
            </div>
          ) : (
            renderModelList(mistralModels, "mistral")
          )}
        </TabsContent>
        
        <TabsContent value="google">
          {!apiKeys.google ? (
            <div className="py-4 text-center text-muted-foreground">
              Please add your Google AI API key to access these models
            </div>
          ) : (
            renderModelList(googleModels, "google")
          )}
        </TabsContent>
        
        <TabsContent value="openrouter">
          {!apiKeys.openrouter ? (
            <div className="py-4 text-center text-muted-foreground">
              Please add your OpenRouter API key to access these models
            </div>
          ) : (
            renderModelList(openRouterModels, "openrouter")
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
