import { GotMilk } from '../../assets/img';
import { FaChevronCircleDown } from 'react-icons/fa';
import { SpinningText } from '../SpinningText';

const Hero = () => (
	<section className="relative h-screen ">
		<section
			className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:w-9/12  textostr mx-auto z-10"
			id="top"
		>
			<section className="flex flex-col items-center justify-end  ">
				<h3 id="js02" className="saludo">
					¡Hola, soy Lasfito!
				</h3>
				<h1 id="js03">
					Y soy <strong>ingeniero de software </strong>
				</h1>

				<a href="#acerca-top">
					<FaChevronCircleDown className="icono" />
				</a>
			</section>
			<section className="hero-foto grid place-items-center mt-8 md:mt-0 ">
				<div className="md:hidden">
					<SpinningText size={325} text=" Frontend • Software • Engineer •">
						<img
							className="img-hero"
							src={GotMilk}
							alt="Cartoon drawing of myself"
						/>
					</SpinningText>
				</div>
				<div className="hidden md:block">
					<SpinningText size={450} text=" Frontend • Software • Engineer •">
						<img
							className="img-hero"
							src={GotMilk}
							alt="Cartoon drawing of myself"
						/>
					</SpinningText>
				</div>
			</section>
		</section>

		<div className="hero-olas"></div>
	</section>
);

export default Hero;
