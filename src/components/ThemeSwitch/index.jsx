import { ThemeModeContext } from "../ThemeContext";
import { useContext } from "react";


const ThemeSwitch = () => {
  const { theme, toggleThemeMode } = useContext(ThemeModeContext);

  const toggleTheme = () => {
    toggleThemeMode();
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeSwitch;
