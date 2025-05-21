import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900/70 shadow backdrop-blur-sm border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Navigation */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-primary/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Leaderboard
                </Link>
                <Link to="/compare" className="text-gray-300 hover:bg-primary/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Compare
                </Link>
                <a href="https://arena.verecl.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-primary/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Arena
                </a>
                <Link to="/compare-ai" className="text-gray-300 hover:bg-primary/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Compare AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
