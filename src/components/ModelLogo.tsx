
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ModelLogoProps {
  organization: string;
  name: string;
}

const ModelLogo = ({ organization, name }: ModelLogoProps) => {
  // Generate logo based on organization
  const getLogoUrl = (org: string): string => {
    const logoImages = {
      "Google": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      "Anthropic": "https://www.anthropic.com/images/share-claude.jpg",
      "OpenAI": "https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png",
      "DeepSeek": "https://cdn.prod.website-files.com/657639ebfb91510f45654149/67b4c293747043c9b6d86ec3_deepseek-color.png",
      "Alibaba": "https://opencv.org/wp-content/uploads/2025/01/MIhJKlK5yVR3axxgE7_gHL-rsKjliShJKd3asUqg5KDdEsdOGut-9mCW4Ti1x7i2y8zCkxeZHQFR00sQg6BfYA.png",
      "Meta": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/640px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
      "xAI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASdaM6WkLjZS4VZoCatPZogXWs2rWeMREmw&s",
    };
    
    return logoImages[org as keyof typeof logoImages] || "https://github.com/shadcn.png";
  };
  
  // Get initials for fallback
  const getInitials = (org: string): string => {
    return org.substring(0, 2).toUpperCase();
  };
  
  return (
    <Avatar className="h-10 w-10 border">
      <AvatarImage src={getLogoUrl(organization)} alt={`${name} logo`} />
      <AvatarFallback>{getInitials(organization)}</AvatarFallback>
    </Avatar>
  );
};

export default ModelLogo;
