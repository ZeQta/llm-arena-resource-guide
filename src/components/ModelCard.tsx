
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModelType } from "@/types/models";

interface ModelCardProps {
  model: ModelType;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Card className="w-full h-full hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg md:text-xl font-bold">{model.name}</CardTitle>
          <Badge variant={model.free ? "outline" : "default"} className={model.free ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}>
            {model.free ? "Free" : "Paid"}
          </Badge>
        </div>
        <CardDescription>{model.organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{model.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <p className="text-xs text-muted-foreground">Top Task</p>
            <p className="text-sm font-medium">{model.topTask}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Score</p>
            <p className="text-sm font-medium">{model.score.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {model.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link to={`/model/${model.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
