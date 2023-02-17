import OlaComp from '../OlaComp/OlaComp';

const Footer = () => {
	return (
		<footer className="global-footer w-full md:w-9/12 mx-auto py-8 rounded-t-xl flex flex-col items-center justify-evenly text-center px-8 ">
			<p className=" text-lg">
				© 2021 – Hoy (no fío, mañana sí) Copyright Lasfito. Todos los derechos
				reservados.
			</p>
			<p className="italic">
				Sitio construido con{' '}
				<a
					href="https://astro.build"
					className="underline"
					target="_blank"
					rel="noopener"
				>
					Astro
				</a>{' '}
				y hospedado en{' '}
				<a
					href="https://netlify.com"
					target="_blank"
					className="underline"
					rel="noopener"
				>
					Netlify
				</a>
			</p>
			<div className="my-10"></div>
			<OlaComp />
		</footer>
	);
};

export default Footer;
