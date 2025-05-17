
import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Navigation */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
                  Leaderboard
                </Link>
                <Link to="/compare" className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
                  Compare
                </Link>
                <a href="https://arena.verecl.app" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
                  Arena
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Theme toggle only */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
