import {SOCIAL_LINKS} from "../../consts";
import OlaComp from "../OlaComp/OlaComp";
import { trans } from "../../i18n";

interface FooterProps {
  currentLocale: ValidLocale;
}

const Footer = ({currentLocale ="en"}: FooterProps) => {
  const t = trans[currentLocale].footer;

  return (
    <footer className="relative mx-auto  mt-10 flex w-full flex-col items-center justify-evenly rounded-t-xl bg-fondo py-8  pb-40 text-center  text-texto-str md:px-8 md:pb-24 md:text-lg ">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-3">
        <p className="my-1">
          {t.copyright} <span className="italic">{t.no_credit}</span>{" "}
        </p>
        <p className="my-1">
          {t.source_code}{" "}
          <a href={SOCIAL_LINKS.GitHub} className="fancy" target="_blank" rel="noopener">
            {t.source_code_link}
          </a>{" "}
          {t.on_github}
        </p>
      </div>
      <div className="text-sm italic">
        {t.built_with}{" "}
        <a
          href="https://astro.build"
          className="underline"
          target="_blank"
          rel="noopener"
        >
          Astro
        </a>{" "}
        {t.and_hosted}{" "}
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
