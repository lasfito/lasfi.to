import type React from 'react';

interface AcercaHeroProps {
	setVisitante: React.Dispatch<React.SetStateAction<'reclutador' | 'perdido'>>;
}

const AcercaHero = ({ setVisitante }: AcercaHeroProps) => (
	<section className="h-[90vh] flex flex-col justify-evenly  items-center">
		<div>
			<h1>
				¿Quién es <strong>Lasfito</strong> ?
			</h1>
			<h3 className="saludo-acerca">Depende de quién pregunte:</h3>
		</div>

		<div className="flex justify-around items-center">
			{' '}
			<a href="#wenas">
				<button
					className="btn-proyectos btn-prime"
					onClick={() => setVisitante('reclutador')}
				>
					Soy un reclutador
				</button>
			</a>
			<a href="/">
				<button className="btn-proyectos btn-secu fill-white">
					No sé cómo llegué aquí
				</button>
			</a>
		</div>
	</section>
);

export default AcercaHero;
