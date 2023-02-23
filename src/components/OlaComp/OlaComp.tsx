import React from "react";

type Props = {};

function OlaComp({}: Props) {
  return (
    <div className="pointer-events-none absolute bottom-0 mt-auto h-[143px] w-full">
      <div className="absolute bottom-0 left-0 z-10 h-full w-full animate-ola bg-ola"></div>
      <div className="absolute bottom-0 left-0 z-0 h-full w-full animate-ola-jr bg-ola opacity-60"></div>
      <div className="absolute bottom-0 right-0 z-0 h-full w-full animate-ola-slow bg-ola opacity-30"></div>
    </div>
  );
}

export default OlaComp;
