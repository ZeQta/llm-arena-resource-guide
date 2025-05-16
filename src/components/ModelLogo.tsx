
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
      "DeepSeek": "https://avatars.githubusercontent.com/u/128925023",
      "Alibaba": "https://logowik.com/content/uploads/images/alibaba-group3560.jpg",
      "Meta": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png",
      "xAI": "https://upload.wikimedia.org/wikipedia/commons/9/9d/X.ai_logo.png",
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
