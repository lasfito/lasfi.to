import {BiMenuAltRight} from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";


interface HeaderProps {
  toggleMenu: (
    e:
      | React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
}

function Header({toggleMenu}: HeaderProps) {
  return (
    <header
      id="header"
      className="b-2 flex w-full items-center justify-between px-5 py-3 md:px-10 md:py-5 "
    >
      <a href="/" className="text-2xl font-black   md:text-5xl">
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
            <a href="/acerca">Acerca</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href="/fang">FANG</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href="/tutoriales">Tutoriales</a>
          </li>
          <li>
            <button
            onClick={() => {
              const currPath = window.location.pathname;


              const locale = currPath.startsWith("/en") ? "es" : "en";
              const newPath = currPath.replace(/^\/(en|es)/, `/${locale}`);

              window.location = newPath;
            }}
            
            >
              <IoLanguage />

            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
