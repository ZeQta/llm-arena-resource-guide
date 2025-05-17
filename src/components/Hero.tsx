
import { useState, useEffect } from "react";
import { AnimatedCube } from "./AnimatedCube";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (depth: number) => {
    const moveX = (mousePosition.x - 0.5) * depth;
    const moveY = (mousePosition.y - 0.5) * depth;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-gray-900 to-black min-h-[80vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />

        {/* Animated blobs */}
        <div 
          className="absolute -top-24 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float-slow opacity-70" 
          style={{ transform: calculateTransform(-20) }} 
        />
        <div 
          className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-slow opacity-70 animation-delay-2000" 
          style={{ transform: calculateTransform(-30) }} 
        />
        <div 
          className="absolute -bottom-48 left-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float-slow opacity-70 animation-delay-1000" 
          style={{ transform: calculateTransform(-10) }} 
        />

        {/* Glowing particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/70 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`
            }}
          />
        ))}

        {/* 3D grid lines */}
        <div className="absolute inset-0 perspective-1000">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute h-[0.5px] w-full bg-primary/20"
              style={{ 
                top: `${i * 10}%`, 
                transform: `rotateX(${80 + (i * 1)}deg) translateZ(${i * 5}px)`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className={`text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block animate-float">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30 shadow-lg">
              Universal Benchmarks (UB) Scoring System
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-6 relative">
            <span className="block animate-fade-in text-white">FRONT-END ARENA</span>
            <span className="block mt-2 gradient-text animate-fade-in animation-delay-300 text-shadow-lg">AI Models Leaderboard</span>
            
            {/* 3D Cubes positioning */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 transform scale-75 md:scale-100 lg:right-0 opacity-80 hidden md:block"
                 style={{ transform: calculateTransform(15) }}>
              <AnimatedCube />
            </div>
            
            <div className="absolute -left-4 bottom-0 transform scale-50 md:scale-75 opacity-60 hidden md:block"
                 style={{ transform: `${calculateTransform(-10)} rotate(-20deg)` }}>
              <AnimatedCube />
            </div>
          </h1>
          
          <div className="mt-12 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            <p className="glass py-3 px-6 rounded-xl inline-block animate-fade-in animation-delay-500 transition-all duration-500 hover:shadow-lg hover:scale-105 border border-white/10">
              Discover the best AI language models for front-end development
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:space-x-3">
            <div className="glass py-3 px-6 rounded-lg text-sm text-gray-400 animate-fade-in animation-delay-700 transition-all hover:scale-105 hover:shadow-md duration-300 border border-white/5">
              <span className="font-bold text-primary">30+</span> Models
            </div>
            <div className="glass py-3 px-6 rounded-lg text-sm text-gray-400 animate-fade-in animation-delay-900 transition-all hover:scale-105 hover:shadow-md duration-300 border border-white/5">
              <span className="font-bold text-primary">200K+</span> Votes
            </div>
            <div className="glass py-3 px-6 rounded-lg text-sm text-gray-400 animate-fade-in animation-delay-1100 transition-all hover:scale-105 hover:shadow-md duration-300 border border-white/5">
              <span className="font-bold text-primary">100%</span> Accurate
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </div>
  );
}
