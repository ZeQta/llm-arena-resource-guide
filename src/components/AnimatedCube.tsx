
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
    
    const animate = () => {
      rotX += 0.3;
      rotY += 0.5;
      if (cube) {
        cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      if (cube) {
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const lightModeColors = [
    "rgba(59, 130, 246, 0.7)", // blue
    "rgba(16, 185, 129, 0.7)", // green
    "rgba(245, 158, 11, 0.7)", // amber
    "rgba(239, 68, 68, 0.7)",  // red
    "rgba(139, 92, 246, 0.7)", // purple
    "rgba(236, 72, 153, 0.7)", // pink
  ];
  
  const darkModeColors = [
    "rgba(96, 165, 250, 0.7)", // blue
    "rgba(52, 211, 153, 0.7)", // green
    "rgba(251, 191, 36, 0.7)", // amber
    "rgba(248, 113, 113, 0.7)", // red
    "rgba(167, 139, 250, 0.7)", // purple
    "rgba(244, 114, 182, 0.7)", // pink
  ];
  
  const colors = resolvedTheme === "dark" ? darkModeColors : lightModeColors;
  
  return (
    <div className="perspective-500 w-32 h-32 relative mx-auto my-8">
      <div 
        ref={cubeRef}
        className="w-full h-full relative transform-style-3d transition-transform duration-200 ease-out"
      >
        {/* Cube faces */}
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform translate-z-16" style={{ backgroundColor: colors[0] }}></div>
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform -translate-z-16 rotate-y-180" style={{ backgroundColor: colors[1] }}></div>
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform rotate-y-90 translate-z-16" style={{ backgroundColor: colors[2] }}></div>
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform -rotate-y-90 translate-z-16" style={{ backgroundColor: colors[3] }}></div>
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform rotate-x-90 translate-z-16" style={{ backgroundColor: colors[4] }}></div>
        <div className="absolute w-full h-full bg-opacity-70 backdrop-blur-sm border border-white/20 shadow-lg transform -rotate-x-90 translate-z-16" style={{ backgroundColor: colors[5] }}></div>
      </div>
    </div>
  );
};
