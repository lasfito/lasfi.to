import type React from "react";

type Props = {
  children: React.ReactNode;
  id: string;

  title: string;
};

function MacWindow({children, id, title}: Props) {
  return (
    <div
      className="m-auto  w-full rounded-xl p-2 md:max-w-[700px] "
      id={id}
      data-testid={id}
    >
      <div className="relative rounded-xl bg-fondo-jr shadow-2xl">
        <div className="flex items-center rounded-t-xl bg-primario-dark py-[10px] px-[20px]">
          <div className="flex-auto">
            <div className="mr-[3px] inline-block h-2 w-2 rounded-[8px] bg-red-500" />
            <div className="mr-[3px] inline-block h-2 w-2 rounded-[8px] bg-yellow-500" />
            <div className="mr-[3px] inline-block h-2 w-2 rounded-[8px] bg-green-500" />
          </div>
          <div className="flex flex-[15_1_auto] justify-center  text-fondo-jr ">
            {title}
          </div>
          <div className="direction-end flex flex-auto text-transparent">
            <div className="">.</div>
            <div className="">.</div>
            <div className="">.</div>
          </div>
        </div>
        <div className="flex flex-col py-3 px-5 text-xl">{children}</div>
      </div>
    </div>
  );
}

export default MacWindow;
