import { createContext, useContext } from "react";

const ThemeContext = createContext({});
export default ThemeContext;

export function ThemeProvider({ children }) {
  const theme = {
    primary: {
      foreground: "#efefef",
      background: "#333",
    },

    secondary: {
      foreground: "#333",
      background: "#efefef",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  const context = useContext(ThemeContext);
  return context;
}
