
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface APIKeyManagerProps {
  apiKeys: Record<string, string>;
  onApiKeyChange: (provider: string, key: string) => void;
}

export function APIKeyManager({ apiKeys, onApiKeyChange }: APIKeyManagerProps) {
  const [providerInputs, setProviderInputs] = useState<Record<string, string>>({
    openai: apiKeys.openai || "",
    anthropic: apiKeys.anthropic || "",
    google: apiKeys.google || "",
    openrouter: apiKeys.openrouter || "",
    mistral: apiKeys.mistral || "",
    cohere: apiKeys.cohere || "",
  });

  const handleInputChange = (provider: string, value: string) => {
    setProviderInputs({
      ...providerInputs,
      [provider]: value
    });
  };

  const saveApiKey = (provider: string) => {
    const key = providerInputs[provider]?.trim();
    if (!key) {
      toast.error(`Please enter a valid API key for ${formatProviderName(provider)}`);
      return;
    }

    onApiKeyChange(provider, key);
    toast.success(`${formatProviderName(provider)} API key saved`);
  };

  const formatProviderName = (provider: string): string => {
    return {
      openai: "OpenAI",
      anthropic: "Anthropic",
      google: "Google AI",
      openrouter: "OpenRouter",
      mistral: "Mistral AI",
      cohere: "Cohere"
    }[provider] || provider;
  };

  const providers = [
    "openai", 
    "anthropic", 
    "google", 
    "mistral", 
    "cohere", 
    "openrouter"
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Add your API keys below to enable comparison between different models. 
        Your keys are stored securely in your browser's local storage and are never sent to our servers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {providers.map(provider => (
          <Card key={provider}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="font-medium">{formatProviderName(provider)}</div>
                <div className="text-xs text-muted-foreground mb-2">
                  {provider === "openrouter" 
                    ? "Access multiple models with a single API key" 
                    : `${formatProviderName(provider)} native API key`}
                </div>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value={providerInputs[provider]}
                    onChange={(e) => handleInputChange(provider, e.target.value)}
                    placeholder={`Enter ${formatProviderName(provider)} API key`}
                  />
                  <Button onClick={() => saveApiKey(provider)}>Save</Button>
                </div>
                {provider === "openai" && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Get your API key at <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">OpenAI Platform</a>
                  </div>
                )}
                {provider === "anthropic" && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Get your API key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">Anthropic Console</a>
                  </div>
                )}
                {provider === "openrouter" && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Get your API key at <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">OpenRouter.ai</a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 p-4 bg-muted rounded-md text-sm">
        <p className="font-medium mb-1">Security Note:</p>
        <p className="text-muted-foreground">
          Your API keys are stored only in your browser's local storage and never sent to our servers.
          For production applications, we recommend using a backend proxy to handle API calls securely.
        </p>
      </div>
    </div>
  );
}
