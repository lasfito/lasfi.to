import React, {useEffect} from "react";

interface ModalMenuProps {
  isModalShown: boolean;
  toggleMenu: (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
  scrolledY: number;
  setScrolledY: (scrolledY: number) => void;
}

function ModalMenu({
  isModalShown,
  toggleMenu,
  scrolledY,
  setScrolledY,
}: ModalMenuProps) {
  // todo: review
  useEffect(() => {
    setScrolledY(window.scrollY);
  });

  return (
    <div
      id="modal-menu-wrapper"
      data-testid="MODAL-MENU"
      onClick={(e) => toggleMenu(e)}
      className={`place-items-left absolute bottom-0 left-0 right-0 top-0 z-50  grid h-screen w-full opacity-0 transition-[1.45s] ease-in	glassmorph-dark 
      ${isModalShown ? "opacity-100" : " pointer-events-none"} 
      `}
      style={{top: `${scrolledY}px`}}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          toggleMenu(e);
        }
      }}
    >
      <nav
        id="modal-menu"
        className={`flex h-screen  w-screen transform flex-col items-center justify-center bg-fondo bg-white text-3xl transition-all duration-500 ease-in-out md:w-[33vw]
      ${isModalShown ? "translate-x-0 " : "-translate-x-full "}
      `}
      >
        <a className="my-5 hover:underline " href="/acerca">
          Acerca
        </a>
        <a className="my-5 hover:underline" href="/blog">
          Blog
        </a>
        <a className="my-5 hover:underline" href="/fang">
          FANG
        </a>
        <a className="my-5 hover:underline" href="/tutoriales">
          Tutoriales
        </a>
      </nav>
    </div>
  );
}

export default ModalMenu;
