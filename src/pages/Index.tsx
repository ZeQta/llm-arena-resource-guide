
import { useState, useMemo } from "react";
import { models } from "@/data/models";
import Navbar from "@/components/Navbar";
import FilterBar, { FilterState } from "@/components/FilterBar";
import ModelCard from "@/components/ModelCard";
import Footer from "@/components/Footer";
import { ModelType } from "@/types/models";
import { Hero } from "@/components/Hero";

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    task: "all",
    showFree: true,
    showPaid: true,
    sortBy: "score"
  });
  
  const filteredModels = useMemo(() => {
    return models.filter(model => {
      // Filter by search term
      if (filters.search && !model.name.toLowerCase().includes(filters.search.toLowerCase()) && !model.description.toLowerCase().includes(filters.search.toLowerCase()) && !model.organization.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      // Filter by task
      if (filters.task !== "all") {
        const hasTasks = model.tasks.some(task => task.taskName.toLowerCase().replace(" ", "-") === filters.task);
        if (!hasTasks) return false;
      }

      // Filter by pricing
      if (!filters.showFree && model.free) return false;
      if (!filters.showPaid && !model.free) return false;
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
  
  return <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FilterBar onFilterChange={handleFilterChange} />
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Front-end AI Models</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Showing {filteredModels.length} models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map(model => <ModelCard key={model.id} model={model} />)}
          </div>
          
          {filteredModels.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">No models found</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your filters to see more results.</p>
            </div>}
        </div>
      </main>
      <Footer />
    </div>;
};

export default Index;
