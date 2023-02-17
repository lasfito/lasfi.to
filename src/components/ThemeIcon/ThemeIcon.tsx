import React, { useEffect, useState } from 'react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { ClientOnly } from '../ClientOnly';

function ThemeIcon() {
	const [isDark, setIsDark] = useState<boolean>(false);
	function cambiarTema() {
		document.body.classList.toggle('oscuro');
		setIsDark(!isDark);
	}

	useEffect(() => {
		document.body.classList.contains('oscuro')
			? setIsDark(true)
			: setIsDark(false);
	}, []);

	return (
		<ClientOnly>
			<div
				className="fixed  bottom-3 right-3 md:bottom-10 md:right-10  cursor-pointer h-20px w-20px bg-texto-sft rounded-full text-xl text-fondo z-30 p-3"
				onClick={cambiarTema}
			>
				{isDark ? <FaRegSun /> : <FaRegMoon />}
			</div>
		</ClientOnly>
	);
}

export default ThemeIcon;
