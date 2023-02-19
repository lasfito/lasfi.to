import {useEffect, useState} from "react";
import {FaRegSun, FaRegMoon} from "react-icons/fa/index.js";

function ThemeIcon() {
  const [isDark, setIsDark] = useState<boolean>(false);
  function cambiarTema() {
    document.body.classList.toggle("oscuro");
    setIsDark(!isDark);
    setThemePreference(isDark ? "disabled" : "enabled");
  }

  function setThemePreference(value: "enabled" | "disabled") {
    const themeStr = JSON.stringify({
      darkMode: value,
    });

    localStorage.setItem("theme", themeStr);
  }

  useEffect(() => {
    document.body.classList.contains("oscuro")
      ? setIsDark(true)
      : setIsDark(false);
  }, []);

  return (
    <div
      data-testid="THEME-ICON"
      className="fixed bottom-3 right-3 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-texto-sft p-3 text-xl text-fondo md:bottom-10 md:right-10 md:h-16 md:w-16 md:text-3xl"
      onClick={cambiarTema}
    >
      {isDark ? <FaRegSun /> : <FaRegMoon />}
    </div>
  );
}

export default ThemeIcon;
