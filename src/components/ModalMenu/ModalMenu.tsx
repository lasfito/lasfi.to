import React, { useEffect } from 'react';

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
			onClick={e => toggleMenu(e)}
			className={`ease-in transition-[1.45s] absolute top-0 left-0 right-0 bottom-0  w-screen h-screen z-50 glassmorph-dark grid place-items-left	opacity-0 
      ${isModalShown ? 'opacity-100' : ' pointer-events-none'} 
      `}
			style={{ top: `${scrolledY}px` }}
		>
			<nav
				id="modal-menu"
				className={`bg-white flex  justify-center items-center flex-col w-screen md:w-[33vw] text-3xl h-screen bg-fondo transition-all ease-in-out duration-500 transform
      ${isModalShown ? 'translate-x-0 ' : '-translate-x-full '}
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
