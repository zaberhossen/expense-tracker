import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "../styles/Theme.module.scss";

type Theme = "light" | "dark";

export default function Theme() {
  const [themeMode, setThemeMode] = useState<Theme>("light");

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.dataset.theme = "dark";
      setThemeMode("dark");
    } else {
      document.documentElement.classList.add("light");
      document.body.dataset.theme = "light";
      setThemeMode("light");
    }
  }, []);

  const switchTheme = (theme: Theme) => {
    setThemeMode(theme);
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  };
  return (
    <button
      className={styles.button}
      onClick={() => switchTheme(themeMode === "dark" ? "light" : "dark")}
    >
      {themeMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
