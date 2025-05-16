
import { useState, useEffect } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.15]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className={`text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block animate-float">
            <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Universal Benchmarks (UB) Scoring System
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-6">
            <span className="block">FRONT-END ARENA</span>
            <span className="block mt-2 gradient-text">AI Models Leaderboard</span>
          </h1>
          
          <div className="mt-8 max-w-lg mx-auto text-xl text-gray-600 dark:text-gray-300 sm:max-w-3xl">
            <p className="glass py-3 px-4 rounded-xl inline-block">
              Discover the best AI language models for front-end development
            </p>
          </div>
          
          <div className="mt-4 flex justify-center space-x-3">
            <div className="glass py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold text-primary">30+</span> Models
            </div>
            <div className="glass py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold text-primary">200K+</span> Votes
            </div>
            <div className="glass py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold text-primary">100%</span> Accurate
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background dark:from-transparent dark:to-background" />
    </div>
  );
}
