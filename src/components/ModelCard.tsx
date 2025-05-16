
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModelType } from "@/types/models";
import ModelLogo from "./ModelLogo";

interface ModelCardProps {
  model: ModelType;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Card className="w-full h-full hover:shadow-md dark:hover:shadow-primary/10 transition-all duration-300 border-t-2 hover:border-t-primary">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <ModelLogo organization={model.organization} name={model.name} />
            <div>
              <CardTitle className="text-lg md:text-xl font-bold">{model.name}</CardTitle>
              <CardDescription>{model.organization}</CardDescription>
            </div>
          </div>
          <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200" : ""}>
            {model.free ? "Free" : "Paid"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{model.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted/50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Arena Score</p>
            <p className="text-lg font-bold">{model.score.toFixed(1)}</p>
          </div>
          <div className="bg-muted/50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Top Task</p>
            <p className="text-sm font-medium">{model.topTask}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {model.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group" variant="outline">
          <Link to={`/model/${model.id}`} className="flex items-center justify-center">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
