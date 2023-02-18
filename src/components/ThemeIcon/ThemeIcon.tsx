import React, {useEffect, useState} from "react";
import {FaRegSun, FaRegMoon} from "react-icons/fa/index.js";
import {ClientOnly} from "../ClientOnly";

function ThemeIcon() {
  const [isDark, setIsDark] = useState<boolean>(false);
  function cambiarTema() {
    document.body.classList.toggle("oscuro");
    setIsDark(!isDark);
  }

  useEffect(() => {
    document.body.classList.contains("oscuro")
      ? setIsDark(true)
      : setIsDark(false);
  }, []);

  return (
    <ClientOnly>
      <div
        data-testid="THEME-ICON"
        className="h-20px  w-20px fixed bottom-3 right-3  z-30 cursor-pointer rounded-full bg-texto-sft p-3 text-xl text-fondo md:bottom-10 md:right-10"
        onClick={cambiarTema}
      >
        {isDark ? <FaRegSun /> : <FaRegMoon />}
      </div>
    </ClientOnly>
  );
}

export default ThemeIcon;
