import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(false)

interface Props {
  children?: ReactNode;
}

interface ContextValue{
  theme: string,
  toggleTheme: (str: string) => void
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localT = localStorage.getItem("theme");
    setTheme(localT === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = (str: string) => {
    setTheme(str);
    localStorage.setItem("theme", str);
  };
  const contextValue: ContextValue = {
    theme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
