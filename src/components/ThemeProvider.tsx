
import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderState = {
  theme: "dark";
  resolvedTheme: "dark";
};

const initialState: ThemeProviderState = {
  theme: "dark",
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  // Force dark theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  const value = {
    theme: "dark",
    resolvedTheme: "dark",
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
