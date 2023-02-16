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
			className={`modal-menu absolute top-0 left-0 right-0 bottom-0  w-screen h-screen z-50 glassmorph-dark grid place-items-left	opacity-0 
      ${isModalShown ? 'opacity-100' : ' pointer-events-none'} 
      `}
			style={{ top: `${scrolledY}px` }}
		>
			<div
				id="modal-menu"
				className={`bg-white flex-col w-screen md:w-[33vw] h-screen modal-menu-jr 
      ${isModalShown ? 'translate-x-0 ' : '-translate-x-full '}
      `}
			>
				<a href="/acerca">
					<h3>Acerca</h3>
				</a>
				<a href="/blog">
					<h3>Blog</h3>
				</a>
				<a href="/tutoriales">
					<h3>Tutoriales</h3>
				</a>
			</div>
		</div>
	);
}

export default ModalMenu;
