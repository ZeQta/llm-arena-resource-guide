
import { useState, useMemo } from "react";
import { models } from "@/data/models";
import Navbar from "@/components/Navbar";
import FilterBar, { FilterState } from "@/components/FilterBar";
import ModelCard from "@/components/ModelCard";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ModelType } from "@/types/models";
import { Helmet } from "react-helmet";

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    task: "all",
    showFree: true,
    showPaid: true,
    sortBy: "score"
  });
  
  const filteredModels = useMemo(() => {
    // First assign ranks to all models based on score
    const sortedModels = [...models].sort((a, b) => b.score - a.score);
    const rankedModels = sortedModels.map((model, index) => ({
      ...model, 
      rank: index + 1
    }));
    
    return rankedModels.filter(model => {
      // Filter by search term
      if (filters.search && !model.name.toLowerCase().includes(filters.search.toLowerCase()) && 
          !model.description.toLowerCase().includes(filters.search.toLowerCase()) && 
          !model.organization.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      // Sort by selected sort option
      switch (filters.sortBy) {
        case "score":
          return b.score - a.score;
        case "name":
          return a.name.localeCompare(b.name);
        case "date":
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        default:
          return b.score - a.score;
      }
    });
  }, [filters]);
  
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Helmet>
        <title>SingularityAI - Frontend Developer Model Leaderboard</title>
        <meta name="description" content="Compare top AI models for frontend development and web design tasks. Find the best AI for React, CSS, responsive design, and UI/UX implementation." />
        <meta name="keywords" content="AI models, frontend development, web design, React AI, UI/UX AI, responsive design, AI leaderboard, coding AI" />
        <meta property="og:title" content="Frontend AI Models Leaderboard | SingularityAI" />
        <meta property="og:description" content="Compare and evaluate the best AI models for frontend development, web design, and UI implementation." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frontend AI Models Leaderboard | SingularityAI" />
        <meta name="twitter:description" content="Find the best AI models for frontend development, React, CSS, and UI/UX implementation." />
        <link rel="canonical" href="https://zeqta.verecl.app" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark pointer-events-none opacity-[0.05]" />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Top Frontend Development AI Models</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Showing <span className="font-semibold text-primary">{filteredModels.length}</span> models ranked by Frontend Benchmarks
                </p>
              </div>
              <div className="w-full md:w-auto">
                <FilterBar onFilterChange={handleFilterChange} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map(model => <ModelCard key={model.id} model={model} />)}
            </div>
            
            {filteredModels.length === 0 && 
              <div className="text-center py-12 glass rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">No models found</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search to see more results.</p>
              </div>
            }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
