import React from "react";
import {FaQuestion} from "react-icons/fa/index.js";

interface ContactIconProps {
  toggleContact: (e: any) => void;
}

function ContactIcon({toggleContact}: ContactIconProps) {
  return (
    <div
      data-testid="CONTACT-ICON"
      className="h-20px  w-20px fixed bottom-3 left-3 z-30 cursor-pointer rounded-full bg-texto-sft p-3 text-xl text-fondo md:bottom-10 md:left-10"
      onClick={(e) => toggleContact(e)}
    >
      <FaQuestion />
    </div>
  );
}

export default ContactIcon;
