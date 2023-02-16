const Footer = () => {
	return (
		<footer className="global-footer w-full md:w-9/12 mx-auto py-8 rounded-t-xl flex flex-col items-center justify-evenly text-center px-8 ">
			<p className="font-bold text-lg">
				© 2021 – Hoy (no fío, mañana sí) Copyright Lasfito. Todos los derechos
				reservados.
			</p>
			<p className="anchor">
				Sitio construido con{' '}
				<a href="https://astro.build" target="_blank" rel="noopener">
					Astro
				</a>{' '}
				y hospedado en{' '}
				<a href="https://netlify.com" target="_blank" rel="noopener">
					Netlify
				</a>
			</p>
			<div className="hero-olas pointer-events-none"></div>
		</footer>
	);
};

export default Footer;
