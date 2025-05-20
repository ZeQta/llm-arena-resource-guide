
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { theme } = useTheme();

  // Since we're enforcing dark mode only, we'll just display the dark mode icon
  // and disable the button functionality
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-800"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <span className="sr-only">Dark theme</span>
    </Button>
  );
}
