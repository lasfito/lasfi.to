import {BiMenuAltRight} from "react-icons/bi";
import LanguageSelector from "./LanguageSelector"
import { AVAILABLE_LANGS } from "../../consts";
import { trans } from "../../i18n";

interface HeaderProps {
  toggleMenu: (
    e:
      | React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
}

function Header({toggleMenu}: HeaderProps) {
  const getValidLocale = (locale: string): ValidLocale => {
    // todo 
    return AVAILABLE_LANGS.includes(locale as any) ? locale as ValidLocale : 'en';
  };

  const currentLocale = getValidLocale(
    typeof window === 'undefined' 
      ? 'en' 
      : window?.location.pathname.split('/')[1] || 'en'
  );

  const t = trans[currentLocale].nav;

  return (
    <header
      id="header"
      className="b-2 flex w-full items-center justify-between px-5 py-3 md:px-10 md:py-5 "
    >
      <a href={`/${currentLocale}`} className="text-2xl font-black   md:text-5xl">
        Lasfito
      </a>
      <button
        type="button"
        className="z-40   md:hidden"
        onClick={(e) => toggleMenu(e)}
      >
        <BiMenuAltRight fontSize={40} className="cursor-pointer" />
      </button>
      <nav className=" hidden font-bold text-texto-str md:block">
        <ul className="flex flex-row items-center justify-center gap-4 text-xl">
          <li className="hover:text-primario hover:underline">
            <a href={`/${currentLocale}/acerca`}>{t.about}</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href={`/${currentLocale}/blog`}>{t.blog }</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href={`/${currentLocale}/fang`}>{t.fang }</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href={`/${currentLocale}/tutoriales`}>{t.tutorials }</a>
          </li>
          <li>
            <LanguageSelector  />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
