import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {}
});

const lightTheme = {
  "--color-white": "#fff",
  "--color-grey-light-1": "#fafafa",
  "--color-grey-light-2": "#f4f2f2",
  "--color-Title": "#1c263f"

};

const darkTheme = {
  "--color-white": "#252525",
  "--color-grey-light-1": "#1a1a1a",
  "--color-grey-light-2": "#1a1a1a",
  "--color-Title": "#fff"
};

const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === "light" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};

export default ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [themeMode, setDarkMode] = useState(initialTheme);
 
  useEffect(() => {
    applyTheme(themeMode, () => setDarkMode(themeMode));
    localStorage.setItem("theme", themeMode);
    
  }, [themeMode]);

  const toggeleDarkMode = currentMode => {
    const nextTheme = currentMode === "light" ? "dark" : "light";
    setDarkMode(nextTheme);
    applyTheme(nextTheme, () => setDarkMode(nextTheme));
  };
  return (
    <ThemeContext.Provider
      value={{ themeMode: themeMode, setDarkMode: toggeleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
