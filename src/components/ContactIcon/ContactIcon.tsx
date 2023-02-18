import {FaQuestion} from "react-icons/fa/index.js";

interface ContactIconProps {
  toggleContact: (e: any) => void;
}

function ContactIcon({toggleContact}: ContactIconProps) {
  return (
    <div
      data-testid="CONTACT-ICON"
      className="fixed  bottom-3 left-3 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-texto-sft p-3 text-xl text-fondo md:bottom-10 md:left-10 md:h-16 md:w-16 md:text-3xl"
      onClick={(e) => toggleContact(e)}
    >
      <FaQuestion />
    </div>
  );
}

export default ContactIcon;
