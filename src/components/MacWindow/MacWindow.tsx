import type React from 'react';

type Props = {
	children: React.ReactNode;
	id: string;

	title: string;
};

function MacWindow({ children, id, title }: Props) {
	return (
		<div className="max-w-[700px] m-auto p-2 rounded-xl " id={id}>
			<div className="relative bg-fondo-jr rounded-xl shadow-2xl">
				<div className="flex items-center py-[10px] px-[20px] bg-primario rounded-t-xl">
					<div className="flex-auto">
						<div className="inline-block w-2 h-2 mr-[3px] rounded-[8px] bg-red-500"></div>
						<div className="inline-block w-2 h-2 mr-[3px] rounded-[8px] bg-yellow-500"></div>
						<div className="inline-block w-2 h-2 mr-[3px] rounded-[8px] bg-green-500"></div>
					</div>
					<div className="text-fondo flex justify-center flex-[15_1_auto]">
						{title}
					</div>
					<div className="flex flex-auto direction-end text-transparent">
						<div className="">.</div>
						<div className="">.</div>
						<div className="">.</div>
					</div>
				</div>
				<div className="flex flex-col py-3 px-8 text-xl">{children}</div>
			</div>
		</div>
	);
}

export default MacWindow;
