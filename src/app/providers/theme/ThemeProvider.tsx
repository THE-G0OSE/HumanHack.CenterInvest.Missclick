import { createContext, useContext, useState, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  theme: string;
  setTheme: (arg: string) => void;
}

const ThemeContext = createContext<IContext>({ theme: "", setTheme: () => {} });

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
