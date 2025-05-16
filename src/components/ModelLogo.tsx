
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ModelLogoProps {
  organization: string;
  name: string;
}

const ModelLogo = ({ organization, name }: ModelLogoProps) => {
  // Generate logo based on organization
  const getLogoUrl = (org: string): string => {
    const placeholderImages = {
      "Google": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&auto=format&fit=crop",
      "Anthropic": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&auto=format&fit=crop",
      "OpenAI": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&auto=format&fit=crop",
      "DeepSeek": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&auto=format&fit=crop",
      "Alibaba": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&auto=format&fit=crop",
      "Meta": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&auto=format&fit=crop",
      "xAI": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&auto=format&fit=crop",
    };
    
    return placeholderImages[org as keyof typeof placeholderImages] || placeholderImages["Google"];
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
