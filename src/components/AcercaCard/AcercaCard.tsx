import { Luis } from '../../assets/img';
import { MacWindow } from '../MacWindow';

function AcercaCard() {
	return (
		<MacWindow id="acerca-card" title="Acerca de mí">
			<div className="mx-auto">
				<img
					src={Luis}
					alt="This is me, Lasfito!"
					className=" h-[150px] w-auto"
				/>
			</div>
			<div className="text-center">
				<p>
					<span>
						Me llamo Adrián, ingeniero bilingüe de software con amplia
						experiencia en
					</span>
					<strong> JavaScript</strong> para desarrollo full stack.
					<br />
					<br />
					¿Eres reclutador o buscas contratarme? Entonces{' '}
					<a href="/#contactame" className="fancy">
						contáctame
					</a>{' '}
					o lee{' '}
					<a href="/acerca" className="fancy">
						acerca de mí
					</a>
					.
					<br />
					<br />
					¿Eres desarrollador y/o buscas mejorar tus habilidades? Entonces echa
					un vistazo a mis tutoriales, mi canal de YouTube y regístrate en{' '}
					<a
						className="fancy"
						href="http://s.1-2-3.dev"
						target="_blank"
						rel="noopener"
					>
						mi boletín
					</a>
					.
				</p>
			</div>
		</MacWindow>
	);
}

export default AcercaCard;
