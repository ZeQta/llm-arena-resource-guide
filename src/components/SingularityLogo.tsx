
import React from "react";

interface SingularityLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const SingularityLogo = ({ className, width = 100, height = 100 }: SingularityLogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src="/lovable-uploads/db408bd2-b399-4909-9d3a-13d5e2c575c4.png" 
        alt="Singularity Logo" 
        width={width} 
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default SingularityLogo;
