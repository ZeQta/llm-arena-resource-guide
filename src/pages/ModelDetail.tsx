
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
import ModelLogo from "@/components/ModelLogo";

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
    if (model.apiAccess.apiKey) {
      toast({
        title: "API Information",
        description: "Please visit the provider's documentation to get your API key.",
      });
    } else {
      toast({
        title: "No API Key Required",
        description: "This model can be accessed without an API key. Check the documentation for details.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="mr-4">
                  <ModelLogo organization={model.organization} name={model.name} />
                </div>
                <div>
                  <Link to="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
                    ← Back to Leaderboard
                  </Link>
                  <h1 className="text-3xl font-bold">{model.name}</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{model.organization}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : ""}>
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
              <TabsTrigger value="access">API Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {model.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{model.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Model Size</h3>
                      <p className="mt-1 text-lg">{model.modelSize || 'Not disclosed'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Context Window</h3>
                      <p className="mt-1 text-lg">{model.contextWindow || 'Unknown'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Release Date</h3>
                      <p className="mt-1 text-lg">{new Date(model.releaseDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Task</h3>
                      <p className="mt-1 text-lg">{model.topTask}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Multimodal</h3>
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
                  <CardTitle>Frontend Development Performance</CardTitle>
                  <CardDescription>Benchmark scores across different front-end tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {model.tasks.map((task) => (
                      <div key={task.taskName} className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{task.taskName}</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {task.score.toFixed(1)}/10 
                            {task.benchmark && ` (${task.benchmark})`}
                          </span>
                        </div>
                        <Progress value={task.score * 10} className="h-2" />
                        {task.details && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{task.details}</p>
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
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {model.name} ranks {
                      models.sort((a, b) => b.score - a.score)
                        .findIndex(m => m.id === model.id) + 1
                    }/{models.length} in our overall leaderboard.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Model</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Organization</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Top Task</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {models
                          .filter(m => m.organization === model.organization || 
                                       m.tags.some(t => model.tags.includes(t)))
                          .sort((a, b) => b.score - a.score)
                          .slice(0, 5)
                          .map((m) => (
                            <tr key={m.id} className={m.id === model.id ? "bg-blue-50 dark:bg-blue-900/20" : ""}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={`/model/${m.id}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                                  <ModelLogo organization={m.organization} name={m.name} />
                                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline">{m.name}</span>
                                </Link>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{m.score.toFixed(1)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{m.organization}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{m.topTask}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="access" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>How to access and use this model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border dark:border-gray-700">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">API Endpoint</h3>
                      <div className="bg-white dark:bg-gray-900 p-3 rounded border dark:border-gray-600 font-mono text-sm overflow-x-auto">
                        <code>{model.apiAccess.url}</code>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Documentation</h3>
                      <a 
                        href={model.apiAccess.documentation} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Official Documentation
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">API Key Required</h3>
                      <p className="mb-3">{model.apiAccess.apiKey ? 'Yes - you will need to request an API key' : 'No - this model can be accessed without an API key'}</p>
                      
                      {model.apiAccess.apiKey && (
                        <Button 
                          variant="outline" 
                          onClick={handleCopyApiKey}
                          className="flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                          </svg>
                          Get API Key
                        </Button>
                      )}
                    </div>
                    
                    {model.free && (
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Free Access</h3>
                        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 mb-2">Open Access</Badge>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">This model provides free access to developers.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Example API Call</h3>
                    <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto">
                      <code>{`// Example code for ${model.name}
fetch("${model.apiAccess.url}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    ${model.apiAccess.apiKey ? '"Authorization": "Bearer YOUR_API_KEY"' : ''}
  },
  body: JSON.stringify({
    prompt: "Create a responsive React component using Tailwind CSS",
    max_tokens: 1000
  })
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                    </pre>
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
