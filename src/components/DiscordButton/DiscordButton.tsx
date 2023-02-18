import type React from "react";
import {FaDiscord} from "react-icons/fa/index.js";

type Props = {};

// create a Discord button with the proper tailwind styling
export const DiscordButton: React.FC<Props> = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://discord.com/invite/GQ2EKbh"
      className=" flex items-center justify-center rounded-md bg-[#7289DA] 
py-3 text-xl text-white shadow-xl hover:translate-y-1 hover:bg-[#5E74C0] hover:shadow-md "
    >
      <FaDiscord className="mr-2" />
      <span>Únete al Discord oficial</span>
    </a>
  );
};

export default DiscordButton;
