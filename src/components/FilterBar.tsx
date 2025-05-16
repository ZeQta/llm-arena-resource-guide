
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  task: string;
  showFree: boolean;
  showPaid: boolean;
  sortBy: string;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    task: "all",
    showFree: true,
    showPaid: true,
    sortBy: "score",
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const taskOptions = [
    { value: "all", label: "All Tasks" },
    { value: "text-generation", label: "Text Generation" },
    { value: "question-answering", label: "Question Answering" },
    { value: "summarization", label: "Summarization" },
    { value: "translation", label: "Translation" },
    { value: "code-generation", label: "Code Generation" },
  ];

  const sortOptions = [
    { value: "score", label: "Score (High to Low)" },
    { value: "name", label: "Name (A to Z)" },
    { value: "date", label: "Release Date (Newest)" },
  ];

  return (
    <div className="bg-white p-4 rounded-md border mb-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/3">
          <Input
            placeholder="Search models..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="w-full"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Task: {taskOptions.find(t => t.value === filters.task)?.label || "All Tasks"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Task</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {taskOptions.map(task => (
                <DropdownMenuItem 
                  key={task.value}
                  onClick={() => handleFilterChange({ task: task.value })}
                >
                  {task.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort: {sortOptions.find(s => s.value === filters.sortBy)?.label || "Score"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {sortOptions.map(option => (
                <DropdownMenuItem 
                  key={option.value}
                  onClick={() => handleFilterChange({ sortBy: option.value })}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="showFree" 
                checked={filters.showFree} 
                onCheckedChange={(checked) => 
                  handleFilterChange({ showFree: Boolean(checked) })
                }
              />
              <Label htmlFor="showFree">Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="showPaid" 
                checked={filters.showPaid} 
                onCheckedChange={(checked) => 
                  handleFilterChange({ showPaid: Boolean(checked) })
                }
              />
              <Label htmlFor="showPaid">Paid</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
