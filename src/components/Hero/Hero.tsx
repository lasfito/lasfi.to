import { GotMilk } from '../../assets/img';
import { FaChevronCircleDown } from 'react-icons/fa';
import { SpinningText } from '../SpinningText';
import OlaComp from '../OlaComp/OlaComp';

const Hero = () => (
	<section className="relative h-screen  ">
		<section
			className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:w-9/12  text-texto-str mx-auto z-10"
			id="top"
		>
			<section className="flex flex-col items-center justify-end  ">
				<h3 id="js02" className="text-primario font-light">
					¡Hola, soy Lasfito!
				</h3>
				<h1 id="js03">
					Y soy <strong>ingeniero de software </strong>
				</h1>

				<a href="#acerca-top">
					<FaChevronCircleDown className="text-primario text-5xl animate-bounce z-10 mt-4 hover:text-acento hover:animate-none" />
				</a>
			</section>
			<section className="grid place-items-center mt-8 md:mt-0 ">
				<div className="md:hidden">
					<SpinningText size={325} text=" Frontend • Software • Engineer •">
						<img
							className="max-w-[80%] h-auto w-auto animate-bounce"
							src={GotMilk}
							alt="Cartoon drawing of myself"
						/>
					</SpinningText>
				</div>
				<div className="hidden md:block">
					<SpinningText size={450} text=" Frontend • Software • Engineer •">
						<img
							className="max-w-[80%] h-auto w-auto animate-cereal"
							src={GotMilk}
							alt="Cartoon drawing of myself"
						/>
					</SpinningText>
				</div>
			</section>
		</section>

		<OlaComp />
	</section>
);

export default Hero;
