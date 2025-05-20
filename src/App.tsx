
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModelDetail from "./pages/ModelDetail";
import ComparisonPage from "./pages/ComparisonPage";
import TasksPage from "./pages/TasksPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { CursorEffect } from "./components/CursorEffect";
import { ParticleEffect } from "./components/ParticleEffect";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => (
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <CursorEffect />
            <ParticleEffect />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/model/:id" element={<ModelDetail />} />
              <Route path="/compare" element={<ComparisonPage />} />
              <Route path="/tasks/:taskId" element={<TasksPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
