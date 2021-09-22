import { useState } from "react";
import { useThemeProvider } from "../../themes/default";

function Card() {
  const { theme } = useThemeProvider();
  const [selectedTheme, setSelectedTheme] = useState(theme.primary);

  function changeTheme() {
    if (selectedTheme === theme.primary) {
      setSelectedTheme(theme.secondary);
      return;
    }

    setSelectedTheme(theme.primary);
  }

  return (
    <button
      style={{
        color: selectedTheme.foreground,
        background: selectedTheme.background,
      }}
      onClick={changeTheme}
    >
      Card Button
    </button>
  );
}

export default Card;
