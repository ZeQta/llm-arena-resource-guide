
import { useState } from "react";
import { models } from "@/data/models";
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
import { ModelType } from "@/types/models";

const ComparisonPage = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const availableModels = models.filter(model => !selectedModels.includes(model.id));

  const handleAddModel = (modelId: string) => {
    if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const handleRemoveModel = (modelId: string) => {
    setSelectedModels(selectedModels.filter(id => id !== modelId));
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
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Compare AI Models</h1>
            <p className="mt-2 text-gray-600">
              Select up to three models to compare their performance, features, and pricing.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    <p className="text-sm text-gray-600">{model.organization}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}>
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
                                  <div className="h-2 bg-gray-100 rounded-full"></div>
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
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">No models selected for comparison</h3>
              <p className="mt-2 text-gray-500">Please select at least one model from the dropdown above.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
