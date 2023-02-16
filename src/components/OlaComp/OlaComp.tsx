import React from 'react';

type Props = {};

function OlaComp({}: Props) {
	return (
		<div className="absolute bottom-0 h-[143px] w-screen mt-auto">
			<div className="absolute bottom-0 left-0 w-full h-full bg-ola animate-ola z-10"></div>
			<div className="absolute bottom-0 left-0 w-full h-full bg-ola opacity-60 animate-ola-jr z-0"></div>
			<div className="absolute bottom-0 right-0 w-full h-full bg-ola opacity-30 animate-ola-slow z-0"></div>
		</div>
	);
}

export default OlaComp;
