
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    if (splineContainerRef.current) {
      const splineViewer = document.createElement('spline-viewer');
      // Using a placeholder URL since the actual URL was undefined in the user request
      // We'll use a sample Spline scene for demonstration
      splineViewer.setAttribute('url', 'https://prod.spline.design/cJkq6hCnPCBvFcZX/scene.splinecode');
      splineViewer.setAttribute('loading-anim', 'true');
      splineContainerRef.current.appendChild(splineViewer);
      
      // Add event listener for when Spline loads
      splineViewer.addEventListener('load', () => {
        setSplineLoaded(true);
      });
    }
    
    return () => {
      if (splineContainerRef.current) {
        const splineViewer = splineContainerRef.current.querySelector('spline-viewer');
        if (splineViewer) {
          splineContainerRef.current.removeChild(splineViewer);
        }
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={splineContainerRef} 
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
        style={{ zIndex: -1 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className={`text-center transition-opacity duration-1000 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">FRONT-END ARENA</span>
            <span className="block mt-2 gradient-text">AI Models Leaderboard</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300 sm:max-w-3xl">
            Discover the best AI language models specifically tested for front-end development
          </p>
          <p className="mt-2 max-w-md mx-auto text-sm text-gray-500 dark:text-gray-400 sm:text-base md:max-w-3xl">
            Based on Universal Benchmarks (UB) scoring system
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background dark:from-transparent dark:to-background" style={{ zIndex: -1 }} />
    </div>
  );
}
