
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
    <Card className="w-full h-full group hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 border-t-2 hover:border-t-primary overflow-hidden relative">
      {/* Rank badge */}
      {model.rank && (
        <div className="absolute -top-3 -left-6 w-16 h-16 bg-primary/10 dark:bg-primary/20 rotate-45">
          <div className="absolute top-[22px] left-[30px] transform -rotate-45">
            <span className="text-xs font-bold text-primary">#{model.rank}</span>
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <ModelLogo organization={model.organization} name={model.name} />
            <div>
              <CardTitle className="text-lg md:text-xl font-bold">{model.name}</CardTitle>
              <CardDescription>{model.organization}</CardDescription>
            </div>
          </div>
          {model.license && (
            <Badge variant={["Apache 2.0", "MIT"].includes(model.license) ? "outline" : "default"} 
                  className={["Apache 2.0", "MIT"].includes(model.license) ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200" : ""}>
              {model.license}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Arena Score</span>
            <span className="text-lg font-bold">{model.score.toFixed(1)}</span>
          </div>
          <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent" 
              style={{ width: `${(model.score / 1500) * 100}%` }}
            ></div>
          </div>
          {model.ci && (
            <div className="text-xs text-muted-foreground mt-1">
              CI: {model.ci}
            </div>
          )}
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="bg-muted/30 p-2 rounded-md flex-1 mr-2">
            <p className="text-xs text-muted-foreground">Votes</p>
            <p className="text-sm font-medium">{model.votes ? model.votes.toLocaleString() : 'N/A'}</p>
          </div>
          <div className="bg-muted/30 p-2 rounded-md flex-1">
            <p className="text-xs text-muted-foreground">License</p>
            <p className="text-sm font-medium truncate">{model.license || 'N/A'}</p>
          </div>
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
