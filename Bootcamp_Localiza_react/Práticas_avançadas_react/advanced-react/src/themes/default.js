import { createContext, useContext } from 'react';

export const theme = {
  primary: {
    foreground: '#efefef',
    background: '#333'
  },

  secondary: {
    foreground: "#333",
    background: '#efefef'
  }
}

export const ThemeContext = createContext(theme.secondary);

export function ThemeProvider({children}) {
  return (
    <ThemeContext.Provider value={theme.primary}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeProvider() {
  const context = useContext(ThemeContext);
  return (context);
}
