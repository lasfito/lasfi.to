import { Luis } from '../../assets/img';

function AcercaCard() {
	return (
		<div className="container-acerca" id="acerca-card">
			<div className="screen-acerca">
				<div className="screen-header">
					<div className="screen-header-left">
						<div className="screen-header-button close"></div>
						<div className="screen-header-button maximize"></div>
						<div className="screen-header-button minimize"></div>
					</div>
					<div className="screen-header-center">Acerca de mí</div>
					<div className="screen-header-right">
						<div className="screen-header-ellipsis"></div>
						<div className="screen-header-ellipsis"></div>
						<div className="screen-header-ellipsis"></div>
					</div>
				</div>
				<div className="screen-body-acerca">
					<div className="foto-acerca">
						<img src={Luis} alt="This is me, Lasfito!" />
					</div>
					<div className="info">
						<p>
							<span id="js05">
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
							¿Eres desarrollador y/o buscas mejorar tus habilidades? Entonces
							echa un vistazo a mis tutoriales, mi canal de YouTube y regístrate
							en{' '}
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
				</div>
			</div>
		</div>
	);
}

export default AcercaCard;
