import Card from "./components/Card";
import { ThemeProvider, useThemeProvider } from "./themes/default";

function App() {
  return (
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  );
}

export default App; 
