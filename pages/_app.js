import { createContext, useEffect, useState } from "react";
import "../styles/main.scss";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  function updateDarkMode(isDark) {
    const theme = isDark ? "dark" : "light";
    setDarkMode(isDark);

    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("darkMode", isDark);
  }

  useEffect(() => {
    let darkMode = localStorage.getItem("darkMode") === "true";

    // Set theme based on user preference
    if (!localStorage.getItem("darkMode")) {
      darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    updateDarkMode(darkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, updateDarkMode }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
