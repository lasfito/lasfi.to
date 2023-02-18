import {BiMenuAltRight} from "react-icons/bi/index.js";

interface HeaderProps {
  toggleMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Header = ({toggleMenu}: HeaderProps) => {
  return (
    <header
      id="header"
      className="b-2 flex w-full items-center justify-between px-5 py-3 md:px-10 md:py-5 "
    >
      <a href="/" className="text-2xl font-black   md:text-5xl">
        Lasfito
      </a>
      <div className="z-40   md:hidden" onClick={(e) => toggleMenu(e)}>
        <BiMenuAltRight fontSize={40} className="cursor-pointer" />
      </div>
      <nav className=" hidden font-bold text-texto-str md:block">
        <ul className="flex flex-row items-center justify-center gap-4">
          <li className="hover:text-primario hover:underline">
            <a href="/acerca">Acerca</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-primario hover:underline">
            <a href="/tutoriales">Tutoriales</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
