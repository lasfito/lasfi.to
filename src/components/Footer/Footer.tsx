import OlaComp from "../OlaComp/OlaComp";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-evenly rounded-t-xl bg-fondo py-8 px-8 text-center text-texto-str  ">
      <p className=" text-lg">
        © 2021 – Hoy (no fío, mañana sí) Copyright Lasfito. Todos los derechos
        reservados.
      </p>
      <p className="italic">
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
          Netlify
        </a>
      </p>
      <div className="my-10"></div>
      {/* <OlaComp /> */}
    </footer>
  );
};

export default Footer;
