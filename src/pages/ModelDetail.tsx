
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { models } from "@/data/models";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const ModelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  
  const model = models.find((m) => m.id === id);

  if (!model) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Model Not Found</h1>
            <p className="mb-8">The model you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Return to Leaderboard</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCopyApiKey = () => {
    toast({
      title: "API Information",
      description: "Please visit the provider's documentation to get your API key.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <Link to="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
                  ← Back to Leaderboard
                </Link>
                <h1 className="text-3xl font-bold">{model.name}</h1>
                <p className="text-lg text-gray-600">{model.organization}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800" : ""}>
                  {model.free ? "Free" : "Paid"}
                </Badge>
                <Badge variant="secondary">Score: {model.score.toFixed(1)}</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="pricing">Pricing & Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {model.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">{model.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Model Size</h3>
                      <p className="mt-1 text-lg">{model.modelSize || 'Not disclosed'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Context Window</h3>
                      <p className="mt-1 text-lg">{model.contextWindow || 'Unknown'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Release Date</h3>
                      <p className="mt-1 text-lg">{new Date(model.releaseDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Top Task</h3>
                      <p className="mt-1 text-lg">{model.topTask}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Multimodal</h3>
                      <p className="mt-1 text-lg">{model.multimodal ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Capabilities</CardTitle>
                  <CardDescription>Key strengths and features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {model.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Task Performance</CardTitle>
                  <CardDescription>Benchmark scores across different tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {model.tasks.map((task) => (
                      <div key={task.taskName} className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{task.taskName}</span>
                          <span className="text-gray-600">
                            {task.score.toFixed(1)}/10 
                            {task.benchmark && ` (${task.benchmark})`}
                          </span>
                        </div>
                        <Progress value={task.score * 10} className="h-2" />
                        {task.details && (
                          <p className="text-sm text-gray-500 mt-1">{task.details}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compared to Similar Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {model.name} ranks {
                      models.sort((a, b) => b.score - a.score)
                        .findIndex(m => m.id === model.id) + 1
                    }/{models.length} in our overall leaderboard.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Top Task</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {models
                          .filter(m => m.organization === model.organization || 
                                       m.tags.some(t => model.tags.includes(t)))
                          .sort((a, b) => b.score - a.score)
                          .slice(0, 5)
                          .map((m) => (
                            <tr key={m.id} className={m.id === model.id ? "bg-blue-50" : ""}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <Link to={`/model/${m.id}`} className="hover:text-blue-600 hover:underline">
                                  {m.name}
                                </Link>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.score.toFixed(1)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.organization}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.topTask}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pricing" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  {model.free ? (
                    <div className="mb-6">
                      <Badge variant="outline" className="bg-green-100 text-green-800 mb-2">Free Tier Available</Badge>
                      {model.pricing?.free && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Free Tier Limits:</span> {model.pricing.free.tokens}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Rate Limit:</span> {model.pricing.free.rateLimit}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Badge className="mb-2">Paid Only</Badge>
                  )}
                  
                  {model.pricing?.paid && (
                    <div className="mt-4">
                      <h3 className="font-medium text-gray-900 mb-2">Paid Tiers</h3>
                      <p className="text-sm text-gray-700 mb-2">{model.pricing.paid.pricing}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {model.pricing.paid.tiers.map(tier => (
                          <Badge key={tier} variant="secondary">{tier}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Documentation</h3>
                      <a 
                        href={model.apiAccess.documentation} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-1 block"
                      >
                        {model.apiAccess.documentation}
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900">API Endpoint</h3>
                      <a 
                        href={model.apiAccess.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-1 block"
                      >
                        {model.apiAccess.url}
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900">API Key Required</h3>
                      <p className="mt-1">{model.apiAccess.apiKey ? 'Yes' : 'No'}</p>
                      {model.apiAccess.apiKey && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="mt-2"
                          onClick={handleCopyApiKey}
                        >
                          Get API Key
                        </Button>
                      )}
                    </div>
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

export default ModelDetail;
