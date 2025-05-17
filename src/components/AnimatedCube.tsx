
import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export const AnimatedCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    
    let rotX = 0;
    let rotY = 0;
    let animationId: number;
    let isMouseControlled = false;
    
    const animate = () => {
      if (!isMouseControlled) {
        rotX += 0.3;
        rotY += 0.5;
        if (cube) {
          cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cube.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const xAxis = (e.clientX - centerX) / 10;
      const yAxis = (e.clientY - centerY) / 10;
      
      isMouseControlled = true;
      if (cube) {
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
      }
    };
    
    const handleMouseLeave = () => {
      isMouseControlled = false;
    };
    
    cube.addEventListener("mousemove", handleMouseMove);
    cube.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (cube) {
        cube.removeEventListener("mousemove", handleMouseMove);
        cube.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
  const lightModeColors = [
    "rgba(59, 130, 246, 0.8)", // blue
    "rgba(16, 185, 129, 0.8)", // green
    "rgba(245, 158, 11, 0.8)", // amber
    "rgba(239, 68, 68, 0.8)",  // red
    "rgba(139, 92, 246, 0.8)", // purple
    "rgba(236, 72, 153, 0.8)", // pink
  ];
  
  const darkModeColors = [
    "rgba(96, 165, 250, 0.8)", // blue
    "rgba(52, 211, 153, 0.8)", // green
    "rgba(251, 191, 36, 0.8)", // amber
    "rgba(248, 113, 113, 0.8)", // red
    "rgba(167, 139, 250, 0.8)", // purple
    "rgba(244, 114, 182, 0.8)", // pink
  ];
  
  const colors = resolvedTheme === "dark" ? darkModeColors : lightModeColors;
  
  return (
    <div className="perspective-500 w-36 h-36 relative mx-auto cursor-pointer group">
      <div 
        ref={cubeRef}
        className="w-full h-full relative transform-style-3d transition-transform duration-200 ease-out group-hover:scale-110"
      >
        {/* Cube faces */}
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform translate-z-16 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[0] }}></div>
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform -translate-z-16 rotate-y-180 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[1] }}></div>
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform rotate-y-90 translate-z-16 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[2] }}></div>
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform -rotate-y-90 translate-z-16 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[3] }}></div>
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform rotate-x-90 translate-z-16 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[4] }}></div>
        <div className="absolute w-full h-full bg-opacity-80 backdrop-blur-sm border border-white/30 shadow-lg transform -rotate-x-90 translate-z-16 group-hover:border-white/50 transition-all duration-300" style={{ backgroundColor: colors[5] }}></div>
      </div>
      <div className="absolute -inset-4 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};
