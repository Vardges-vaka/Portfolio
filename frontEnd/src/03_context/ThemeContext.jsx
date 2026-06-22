import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./contexts.js";

const STORAGE_KEY = "vp-portfolio-theme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, isDark: theme === "dark" }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = { children: PropTypes.node.isRequired };
