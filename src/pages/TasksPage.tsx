
import { useParams, Link } from "react-router-dom";
import { models } from "@/data/models";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ModelType, TaskScore } from "@/types/models";

const taskDefinitions = {
  "text-generation": {
    name: "Text Generation",
    description: "Models that excel at generating coherent and contextually relevant text across various topics and styles.",
    benchmark: "MMLU (Massive Multitask Language Understanding)",
    icon: "📝"
  },
  "question-answering": {
    name: "Question Answering",
    description: "Models optimized for accurately answering questions across diverse domains of knowledge.",
    benchmark: "HELM (Holistic Evaluation of Language Models)",
    icon: "❓"
  },
  "summarization": {
    name: "Summarization",
    description: "Models specialized in condensing long documents into concise summaries while preserving key information.",
    benchmark: "SummEval",
    icon: "📋"
  },
  "code-generation": {
    name: "Code Generation",
    description: "Models designed to understand programming concepts and generate functional code across multiple languages.",
    benchmark: "HumanEval",
    icon: "💻"
  },
  "translation": {
    name: "Translation",
    description: "Models capable of translating text between different languages with high accuracy and natural phrasing.",
    benchmark: "FLORES-101",
    icon: "🌎"
  },
  "multimodal": {
    name: "Multimodal",
    description: "Models that can understand and process multiple modalities including text, images, and sometimes audio or video.",
    benchmark: "MMMU (Massive Multi-discipline Multimodal Understanding)",
    icon: "🖼️"
  },
};

type TaskDefinition = {
  name: string;
  description: string;
  benchmark: string;
  icon: string;
};

const TasksPage = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const taskInfo = taskId ? taskDefinitions[taskId as keyof typeof taskDefinitions] : null;
  
  // Filter models that have scores for this task
  const getModelsForTask = (): { model: ModelType, taskScore: TaskScore }[] => {
    if (!taskId) return [];
    
    const convertedTaskName = taskId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return models
      .map(model => {
        const taskScore = model.tasks.find(t => 
          t.taskName.toLowerCase() === convertedTaskName.toLowerCase()
        );
        return taskScore ? { model, taskScore } : null;
      })
      .filter((item): item is { model: ModelType, taskScore: TaskScore } => item !== null)
      .sort((a, b) => b.taskScore.score - a.taskScore.score);
  };
  
  const modelsForTask = getModelsForTask();

  if (!taskInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
            <p className="mb-8">The task you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Return to Leaderboard</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get all tasks for navigation
  const allTasks = Object.entries(taskDefinitions).map(([id, info]) => ({
    id,
    name: info.name
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Leaderboard
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{taskInfo.icon}</span>
              <h1 className="text-3xl font-bold">{taskInfo.name}</h1>
            </div>
            <p className="mt-2 text-gray-600 max-w-3xl">
              {taskInfo.description}
            </p>
            <div className="mt-4">
              <Badge variant="outline">Benchmark: {taskInfo.benchmark}</Badge>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Tasks</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav>
                    <ul className="space-y-1 p-4">
                      {allTasks.map((task) => (
                        <li key={task.id}>
                          <Link
                            to={`/tasks/${task.id}`}
                            className={`block px-4 py-2 rounded-md ${
                              taskId === task.id
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {task.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-3">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Top Models for {taskInfo.name}</CardTitle>
                  <CardDescription>
                    Ranked by their performance on {taskInfo.benchmark}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modelsForTask.map(({ model, taskScore }) => (
                      <div key={model.id} className="border-b pb-4 last:border-none last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Link to={`/model/${model.id}`} className="text-lg font-medium hover:text-blue-600 hover:underline">
                              {model.name}
                            </Link>
                            <p className="text-sm text-gray-600">{model.organization}</p>
                          </div>
                          <div className="flex items-center">
                            <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 mr-2" : "mr-2"}>
                              {model.free ? "Free" : "Paid"}
                            </Badge>
                            <span className="text-lg font-semibold">{taskScore.score.toFixed(1)}</span>
                          </div>
                        </div>
                        <Progress value={taskScore.score * 10} className="mb-2 h-2" />
                        {taskScore.details && (
                          <p className="text-sm text-gray-600">{taskScore.details}</p>
                        )}
                      </div>
                    ))}
                    
                    {modelsForTask.length === 0 && (
                      <div className="text-center py-6">
                        <p className="text-gray-500">No models found for this task.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>About {taskInfo.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium text-lg mb-2">What makes a good {taskInfo.name.toLowerCase()} model?</h3>
                  <p className="text-gray-700 mb-4">
                    {taskId === "text-generation" && "Top text generation models excel at producing coherent, contextually relevant, and fluent text. They understand instructions well, maintain consistent tone and style, and can adapt to various domains. The best models avoid hallucinations and demonstrate strong reasoning abilities."}
                    {taskId === "question-answering" && "Great question-answering models deliver accurate, concise answers with appropriate confidence levels. They excel at understanding the nuance of queries, recognizing when they lack sufficient information, and providing well-reasoned responses backed by their training data."}
                    {taskId === "summarization" && "Exceptional summarization models can identify and extract key information from lengthy texts while maintaining accuracy. They produce concise, coherent summaries that capture main points without adding hallucinations or missing critical details."}
                    {taskId === "code-generation" && "Superior code generation models understand programming concepts across multiple languages. They generate functional, efficient, and secure code that follows best practices and conventions. They can interpret natural language descriptions of programming tasks and translate them into correct implementations."}
                    {taskId === "translation" && "Excellent translation models preserve meaning, tone, and cultural nuance across languages. They handle idiomatic expressions appropriately, maintain the source text's intent, and produce natural-sounding output in the target language."}
                    {taskId === "multimodal" && "Advanced multimodal models seamlessly integrate understanding across text, images, and sometimes audio or video. They can describe visual content accurately, answer questions about images, and generate appropriate text responses that incorporate visual context."}
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">How are models evaluated?</h3>
                  <p className="text-gray-700 mb-4">
                    Models for {taskInfo.name.toLowerCase()} are primarily evaluated using the {taskInfo.benchmark} benchmark, which {
                      taskId === "text-generation" && "tests models across diverse domains including STEM, humanities, social sciences, and more. This benchmark measures factual knowledge, reasoning abilities, and problem-solving skills across 57 subjects."
                    }{
                      taskId === "question-answering" && "provides a standardized framework for comparing model performance across various question types, domains, and formats. It measures not just accuracy but also consistency, fairness, and robustness."
                    }{
                      taskId === "summarization" && "evaluates summaries on dimensions of coherence, consistency, fluency, and relevance. It uses both automated metrics and human evaluations to provide comprehensive assessment."
                    }{
                      taskId === "code-generation" && "measures the functional correctness of generated code using unit tests. The pass@k metric indicates how often a model generates correct solutions within k attempts."
                    }{
                      taskId === "translation" && "measures translation quality across 101 languages in many-to-many settings. It evaluates both semantic accuracy and fluency of translations."
                    }{
                      taskId === "multimodal" && "tests models on complex tasks requiring both visual and textual understanding. It includes college-level problems across various disciplines that require interpreting images alongside text."
                    }
                  </p>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/compare">Compare Top Models</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TasksPage;
