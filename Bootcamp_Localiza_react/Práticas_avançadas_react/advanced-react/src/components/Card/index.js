import { useEffect, useState } from "react";
import { useThemeProvider } from "../../themes/default";

function Card() {
  const theme = useThemeProvider(); 
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      
    }, 4000); // 4 Second
  }, []);
  
  return (
    <button style={{color: theme.foreground, background: theme.background}}>
      Card Button
    </button>
  );
}

export default Card;
