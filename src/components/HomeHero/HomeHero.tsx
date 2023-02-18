import {GotMilk} from "../../assets/img";
import {FaChevronCircleDown} from "react-icons/fa/index.js";
import {SpinningText} from "../SpinningText";
import OlaComp from "../OlaComp/OlaComp";

const HomeHero = () => (
  <section className="relative h-screen  ">
    <section
      className="z-10 mx-auto flex w-full flex-col-reverse items-center justify-between  text-texto-str md:w-9/12 md:flex-row"
      id="top"
    >
      <section className="flex flex-col items-center justify-end  ">
        <h3 id="js02" className="text-3xl font-light text-primario">
          ¡Hola, soy Lasfito!
        </h3>
        <h1 id="js03" className="my-3 text-4xl">
          Y soy <strong>ingeniero de software </strong>
        </h1>

        <a href="#acerca-top" data-testid="HERO-BUTTON">
          <FaChevronCircleDown className="z-10 mt-4 animate-bounce text-5xl text-primario hover:animate-none hover:text-acento" />
        </a>
      </section>
      <section className="mt-8 grid place-items-center md:mt-0 ">
        <div className="md:hidden">
          <SpinningText size={325} text=" Frontend • Software • Engineer •">
            <img
              id="gotMilk.png"
              className="h-auto w-auto max-w-[80%] animate-bounce"
              src={GotMilk}
              alt="Cartoon drawing of myself"
            />
          </SpinningText>
        </div>
        <div className="hidden md:block">
          <SpinningText size={450} text=" Frontend • Software • Engineer •">
            <img
              className="h-auto w-auto max-w-[80%] animate-cereal drop-shadow-2xl"
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

export default HomeHero;
