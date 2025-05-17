
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Placeholder to prevent layout shift
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md hover:from-white/30 hover:to-white/10 dark:from-gray-800/40 dark:to-gray-900/40 dark:hover:from-gray-800/60 dark:hover:to-gray-900/60 transition-all duration-300 hover:shadow-lg hover:scale-110"
      aria-label="Toggle theme"
    >
      <SunIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 text-yellow-500 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 text-blue-400 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
