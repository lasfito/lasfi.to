import {AcercaCard} from "../AcercaCard";
import React, {useEffect} from "react";

interface ModalContactProps {
  isContactShown: boolean;
  toggleContact: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  scrolledY: number;
  setScrolledY: (scrolledY: number) => void;
}

function ModalContact({
  isContactShown,
  toggleContact,
  scrolledY,
  setScrolledY,
}: ModalContactProps) {
  useEffect(() => {
    setScrolledY(window.scrollY);
  });
  return (
    <div
      data-testid="MODAL-CONTACT"
      onClick={(e) => toggleContact(e)}
      className={`glassmorph-dark absolute top-0 left-0 right-0 bottom-0 z-50 grid h-screen  w-screen transform place-items-center opacity-0 transition-all duration-500 ease-in-out ${
        isContactShown ? "opacity-100" : " pointer-events-none"
      }  `}
      style={{top: `${scrolledY}px`}}
    >
      <div
        className="  modal flex h-screen w-[90vw] flex-col justify-center md:w-[33vw]"
        id="modal-contact"
      >
        <AcercaCard id="MODAL-ACERCA" />
      </div>
    </div>
  );
}

export default ModalContact;
