
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ModelSelector } from "@/components/ModelSelector";
import { APIKeyManager } from "@/components/APIKeyManager";
import modelApiService from "@/utils/modelApiService";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  modelId: string;
}

export default function CompareAI() {
  // Use localStorage to persist API keys
  const [apiKeys, setApiKeys] = useLocalStorage<Record<string, string>>("ai-model-api-keys", {});
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleAddModel = (modelId: string) => {
    if (selectedModels.length < 3 && !selectedModels.includes(modelId)) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const handleRemoveModel = (modelId: string) => {
    setSelectedModels(selectedModels.filter(id => id !== modelId));
  };

  const handleApiKeyChange = (provider: string, key: string) => {
    setApiKeys({
      ...apiKeys,
      [provider]: key
    });
  };

  const handleSubmit = async () => {
    if (!userInput.trim() || selectedModels.length === 0) return;

    // Add user message to chat
    setChatHistory([
      ...chatHistory, 
      { role: "user", content: userInput, modelId: "user" }
    ]);

    setIsGenerating(true);
    
    // Generate responses for each selected model
    const userMessage = userInput;
    setUserInput("");

    try {
      // For each selected model, generate a response
      for (const modelId of selectedModels) {
        try {
          // Extract model provider from modelId
          const [provider] = modelId.split('/');
          
          if (!apiKeys[provider]) {
            toast.error(`Missing API key for ${provider}. Please add your API key.`);
            continue;
          }
          
          // Call the API service to generate a response
          const response = await modelApiService.generateResponse({
            modelId,
            message: userMessage,
            apiKey: apiKeys[provider],
            temperature: 0.7,
            maxTokens: 1000
          });
          
          setChatHistory(prev => [
            ...prev, 
            { role: "assistant", content: response.content, modelId }
          ]);
        } catch (error) {
          console.error(`Error with model ${modelId}:`, error);
          setChatHistory(prev => [
            ...prev, 
            { role: "assistant", content: `Error: Failed to generate response with ${modelId}`, modelId }
          ]);
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-background py-12 dark:from-blue-950/20 dark:to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground">Compare AI Models in Real-time</h1>
            <p className="mt-2 text-muted-foreground">
              Add your API keys and test different AI models side by side with your own prompts.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chat">Chat Interface</TabsTrigger>
              <TabsTrigger value="keys">API Keys</TabsTrigger>
            </TabsList>
            
            <TabsContent value="keys">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Your API Keys</CardTitle>
                </CardHeader>
                <CardContent>
                  <APIKeyManager apiKeys={apiKeys} onApiKeyChange={handleApiKeyChange} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="chat" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Selected Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {selectedModels.length === 0 ? (
                      <p className="text-muted-foreground">No models selected. Add a model to start comparing.</p>
                    ) : (
                      selectedModels.map(modelId => (
                        <div key={modelId} className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                          <span>{modelId}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleRemoveModel(modelId)}
                            className="h-5 w-5 p-0 rounded-full"
                          >
                            ✕
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Add Model</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Select a Model</DialogTitle>
                      </DialogHeader>
                      <ModelSelector 
                        onSelectModel={handleAddModel} 
                        selectedModels={selectedModels}
                        apiKeys={apiKeys}
                      />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              
              <Card className="min-h-[500px] flex flex-col">
                <CardHeader>
                  <CardTitle>Chat Comparison</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[400px]">
                    {chatHistory.length === 0 ? (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">Start the conversation to see model comparisons.</p>
                      </div>
                    ) : (
                      chatHistory.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div 
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.role === 'user' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            {msg.role === 'assistant' && (
                              <div className="text-xs font-medium mb-1 text-muted-foreground">
                                {msg.modelId}
                              </div>
                            )}
                            <div className="whitespace-pre-wrap">{msg.content}</div>
                          </div>
                        </div>
                      ))
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <div className="mt-auto flex gap-2">
                    <Textarea 
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type your prompt here..."
                      className="resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit();
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSubmit} 
                      disabled={isGenerating || !userInput.trim() || selectedModels.length === 0}
                    >
                      {isGenerating ? 'Generating...' : 'Send'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
