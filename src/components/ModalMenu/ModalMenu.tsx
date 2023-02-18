import React, {useEffect} from "react";

interface ModalMenuProps {
  isModalShown: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
      className={`glassmorph-dark place-items-left absolute top-0 left-0 right-0 bottom-0  z-50 grid h-screen w-screen opacity-0 transition-[1.45s]	ease-in 
      ${isModalShown ? "opacity-100" : " pointer-events-none"} 
      `}
      style={{top: `${scrolledY}px`}}
    >
      <nav
        id="modal-menu"
        className={`flex h-screen  w-screen transform flex-col items-center justify-center bg-white bg-fondo text-3xl transition-all duration-500 ease-in-out md:w-[33vw]
      ${isModalShown ? "translate-x-0 " : "-translate-x-full "}
      `}
      >
        <a className="my-5 hover:underline " href="/acerca">
          Acerca
        </a>
        <a className="my-5 hover:underline" href="/blog">
          Blog
        </a>
        <a className="my-5 hover:underline" href="/tutoriales">
          Tutoriales
        </a>
      </nav>
    </div>
  );
}

export default ModalMenu;
