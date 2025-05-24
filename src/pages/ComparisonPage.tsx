import { useState } from "react";
import { models } from "@/data/models";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ModelSelector } from "@/components/ModelSelector";
import { APIKeyManager } from "@/components/APIKeyManager";
import { ModelType } from "@/types/models";
import modelApiService from "@/utils/modelApiService";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRef, useEffect } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  modelId: string;
}

const ComparisonPage = () => {
  // Static comparison state
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  
  // AI comparison state
  const [apiKeys, setApiKeys] = useLocalStorage<Record<string, string>>("ai-model-api-keys", {});
  const [selectedAIModels, setSelectedAIModels] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const availableModels = models.filter(model => !selectedModels.includes(model.id));

  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleAddModel = (modelId: string) => {
    if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const handleRemoveModel = (modelId: string) => {
    setSelectedModels(selectedModels.filter(id => id !== modelId));
  };

  const handleAddAIModel = (modelId: string) => {
    if (selectedAIModels.length < 3 && !selectedAIModels.includes(modelId)) {
      setSelectedAIModels([...selectedAIModels, modelId]);
    }
  };

  const handleRemoveAIModel = (modelId: string) => {
    setSelectedAIModels(selectedAIModels.filter(id => id !== modelId));
  };

  const handleApiKeyChange = (provider: string, key: string) => {
    setApiKeys({
      ...apiKeys,
      [provider]: key
    });
  };

  const handleSubmit = async () => {
    if (!userInput.trim() || selectedAIModels.length === 0) return;

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
      for (const modelId of selectedAIModels) {
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

  const getModelById = (id: string): ModelType | undefined => {
    return models.find(model => model.id === id);
  };

  const comparedModels = selectedModels.map(getModelById).filter(Boolean) as ModelType[];

  // Get all unique task names across selected models
  const allTasks = Array.from(
    new Set(
      comparedModels.flatMap(model => 
        model.tasks.map(task => task.taskName)
      )
    )
  ).sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12 dark:from-blue-950/20 dark:to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground">Compare AI Models</h1>
            <p className="mt-2 text-muted-foreground">
              Compare models by performance metrics or test them in real-time with your own API keys.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="static" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="static">Performance Comparison</TabsTrigger>
              <TabsTrigger value="realtime">Real-time Chat</TabsTrigger>
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

            <TabsContent value="static" className="space-y-6">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select Models to Compare</h2>
                <div className="flex flex-wrap gap-4 items-start">
                  {selectedModels.length < 3 && (
                    <Card className="w-full md:w-[300px]">
                      <CardContent className="pt-6">
                        <Select onValueChange={handleAddModel} disabled={availableModels.length === 0}>
                          <SelectTrigger>
                            <SelectValue placeholder="Add model to compare" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableModels.map(model => (
                              <SelectItem key={model.id} value={model.id}>
                                {model.name} ({model.organization})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </CardContent>
                    </Card>
                  )}
                  
                  {comparedModels.map(model => (
                    <Card key={model.id} className="w-full md:w-[300px]">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{model.name}</CardTitle>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleRemoveModel(model.id)}
                            className="h-6 w-6 p-0 rounded-full"
                          >
                            ✕
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{model.organization}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200" : ""}>
                            {model.free ? "Free" : "Paid"}
                          </Badge>
                          <Badge variant="secondary">Score: {model.score.toFixed(1)}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {comparedModels.length > 0 ? (
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {allTasks.map(taskName => (
                          <div key={taskName} className="mb-6">
                            <h3 className="font-medium mb-2">{taskName}</h3>
                            <div className="space-y-4">
                              {comparedModels.map(model => {
                                const task = model.tasks.find(t => t.taskName === taskName);
                                return (
                                  <div key={`${taskName}-${model.id}`} className="flex flex-col">
                                    <div className="flex justify-between mb-1">
                                      <span className="text-sm">{model.name}</span>
                                      <span className="text-sm">{task ? `${task.score.toFixed(1)}/10` : 'N/A'}</span>
                                    </div>
                                    {task ? (
                                      <Progress value={task.score * 10} className="h-2" />
                                    ) : (
                                      <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-800"></div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Features Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                              {comparedModels.map(model => (
                                <th key={model.id} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {model.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Model Size</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.modelSize || 'Not disclosed'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Context Window</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.contextWindow || 'Unknown'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Multimodal</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.multimodal ? 'Yes' : 'No'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Release Date</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {new Date(model.releaseDate).toLocaleDateString()}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Free Tier</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.free ? 'Available' : 'Not available'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">API Key Required</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.apiAccess.apiKey ? 'Yes' : 'No'}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Pricing Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                              {comparedModels.map(model => (
                                <th key={model.id} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {model.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Free Tier</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.free 
                                    ? (model.pricing?.free?.tokens || 'Available') 
                                    : 'Not available'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Paid Pricing</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.pricing?.paid?.pricing || 'Not available'}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">Rate Limits</td>
                              {comparedModels.map(model => (
                                <td key={model.id} className="px-4 py-3 text-sm text-gray-500">
                                  {model.pricing?.free?.rateLimit || 'Not specified'}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg dark:bg-gray-900/50">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No models selected for comparison</h3>
                  <p className="mt-2 text-gray-500">Please select at least one model from the dropdown above.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="realtime" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Selected Models for Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {selectedAIModels.length === 0 ? (
                      <p className="text-muted-foreground">No models selected. Add a model to start comparing.</p>
                    ) : (
                      selectedAIModels.map(modelId => (
                        <div key={modelId} className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
                          <span>{modelId}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleRemoveAIModel(modelId)}
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
                        onSelectModel={handleAddAIModel} 
                        selectedModels={selectedAIModels}
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
                      disabled={isGenerating || !userInput.trim() || selectedAIModels.length === 0}
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
};

export default ComparisonPage;
