import React from 'react';
import { FaQuestion } from 'react-icons/fa';

interface ContactIconProps {
	toggleContact: (e: any) => void;
}

function ContactIcon({ toggleContact }: ContactIconProps) {
	return (
		<div
			className="fixed  bottom-3 left-3 md:bottom-10 md:left-10 cursor-pointer h-20px w-20px bg-texto-sft rounded-full text-xl text-fondo z-30 p-3"
			onClick={e => toggleContact(e)}
		>
			<FaQuestion />
		</div>
	);
}

export default ContactIcon;
