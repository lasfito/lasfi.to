import { Luis } from '../../assets/img';
import { NewsLetter } from '../NewsLetter/';

function AcercaAutor() {
	return (
		<section className="about-author  ">
			<div className="cont ">
				<div>
					<div>
						<h3>Acerca del autor</h3>
						<p>
							¡Hola! Me llamo Adrián, pero todos me conocen como Lasfito. Soy
							desarrollador front-end y escribo artículos y tutoriales sobre
							JavaScript, desarrollo web y diseño.
						</p>
					</div>
					<div className="flex-row">
						<NewsLetter cta="  Únete al NewsLetter " />
					</div>
				</div>
				<div className="foto-autor">
					<img src={Luis} alt="Hey, soy yo"></img>
				</div>
			</div>
		</section>
	);
}

export default AcercaAutor;
