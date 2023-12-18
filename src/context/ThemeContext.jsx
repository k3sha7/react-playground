import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error("Error initiating context");
  }
  return context;
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localT = localStorage.getItem("theme");
    setTheme(localT === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = (str) => {
    setTheme(str);
    localStorage.setItem("theme", str);
  };
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
