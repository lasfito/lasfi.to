import { AcercaCard } from '../AcercaCard';
import React, { useEffect } from 'react';

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
			onClick={e => toggleContact(e)}
			className={`transition-all ease-in-out duration-500 transform absolute top-0 left-0 right-0 bottom-0  w-screen h-screen z-50 glassmorph-dark grid place-items-center opacity-0 ${
				isContactShown ? 'opacity-100' : ' pointer-events-none'
			}  `}
			style={{ top: `${scrolledY}px` }}
		>
			<div
				className="  w-[90vw] md:w-[33vw] h-screen flex flex-col justify-center modal"
				id="modal-contact"
			>
				<AcercaCard />
			</div>
		</div>
	);
}

export default ModalContact;
