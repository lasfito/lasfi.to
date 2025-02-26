import {GITHUB_URL} from "../../consts";
import OlaComp from "../OlaComp/OlaComp";

const Footer = () => {
  return (
    <footer className="relative mx-auto  mt-10 flex w-full flex-col items-center justify-evenly rounded-t-xl bg-fondo py-8  pb-40 text-center  text-texto-str md:px-8 md:pb-24 md:text-lg ">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-3">
        <p className="my-1">
          © 2021 – Hoy <span className="italic">(no fío, mañana sí).</span>{" "}
        </p>
        <p className="my-1">
          Ver{" "}
          <a href={GITHUB_URL} className="fancy" target="_blank" rel="noopener">
            código fuente
          </a>{" "}
          en GitHub.
        </p>
      </div>
      <div className="text-sm italic">
        Sitio construido con{" "}
        <a
          href="https://astro.build"
          className="underline"
          target="_blank"
          rel="noopener"
        >
          Astro
        </a>{" "}
        y hospedado en{" "}
        <a
          href="https://netlify.com"
          target="_blank"
          className="underline"
          rel="noopener"
        >
          Netlify.
        </a>
      </div>
      <OlaComp />
    </footer>
  );
};

export default Footer;
