import { Luis } from '../../assets/img';
import { NewsLetter } from '../NewsLetter/';

function AcercaAutor() {
	// todo: refactor with 1-2-3
	return (
		<section className="bg-fondo-jr w-full py-8">
			<div className="max-w-[1024px] mx-auto flex justify-center items-center">
				<div>
					<div>
						<h3>Acerca del autor</h3>
						<p className="max-w-[35ch] text-texto-sft my-5">
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
