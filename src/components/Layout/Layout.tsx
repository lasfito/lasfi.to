import React, {useState} from "react";
import {Header} from "../Header";

/* import '../../styles/monokai.css'; */
import {Footer} from "../Footer";
import {ModalMenu} from "../ModalMenu";
import {ModalContact} from "../ModalContact";
import {ThemeIcon} from "../ThemeIcon";

/* import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'; */
import {ContactIcon} from "../ContactIcon";
/* deckDeckGoHighlightElement(); */

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isContactShown, setIsContactShown] = useState(false);
  const [scrolledY, setScrolledY] = useState(0);

  function toggleMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!(e.target instanceof HTMLElement || e.target instanceof SVGElement)) {
      console.log("not div", e.target);
      return;
    }
    let targetId = e.target.id;
    if (targetId === "modal-menu") return;
    document.body.classList.toggle("modal");
    setIsModalShown(!isModalShown);
  }

  function toggleContact(e: any) {
    document.body.classList.toggle("modal");
    setIsContactShown(!isContactShown);
  }

  return (
    <div className="relative w-full ">
      <ModalMenu
        isModalShown={isModalShown}
        toggleMenu={toggleMenu}
        scrolledY={scrolledY}
        setScrolledY={setScrolledY}
      />
      <ModalContact
        isContactShown={isContactShown}
        toggleContact={toggleContact}
        scrolledY={scrolledY}
        setScrolledY={setScrolledY}
      />

      <Header toggleMenu={toggleMenu} />
      {children}
      <ThemeIcon />
      <ContactIcon toggleContact={(e) => toggleContact(e)} />
      <Footer />
    </div>
  );
};

export default Layout;
