import {GotMilk} from "../../assets/img";
import {FaChevronCircleDown} from "react-icons/fa/index.js";
import {SpinningText} from "../SpinningText";
import OlaComp from "../OlaComp/OlaComp";

const HomeHero = () => (
  <section
    className="relative   flex h-[90vh] w-full flex-col-reverse items-center justify-end  gap-8  pt-6 text-texto-str  md:h-[85vh]  md:flex-row md:items-center  md:justify-around md:gap-0 md:pb-60 md:pt-0"
    id="top"
  >
    <section className="flex flex-col items-center  justify-center  ">
      <h3 id="js02" className="text-2xl font-light text-primario md:text-3xl">
        ¡Hola, soy Lasfito!
      </h3>
      <h1 id="js03" className="my-3 text-center text-3xl md:text-4xl">
        <strong>Ingeniero de Software </strong>
      </h1>

      <a href="#acerca-top" data-testid="HERO-BUTTON">
        <FaChevronCircleDown className="z-10 mt-4 animate-bounce text-5xl text-primario hover:animate-none hover:text-acento" />
      </a>
    </section>
    <section className=" grid  place-items-center  ">
      <div className="md:hidden">
        <SpinningText
          size={250}
          mobile={true}
          text="Full-Stack • Software • Engineer • "
        >
          <img
            id="gotMilk.png"
            className="h-auto w-5/6 animate-cereal"
            src={GotMilk}
            alt="Cartoon drawing of myself"
          />
        </SpinningText>
      </div>
      <div className="hidden md:block">
        <SpinningText size={350} text="Full-Stack • Software • Engineer • ">
          <img
            className="h-auto  w-5/6 animate-cereal drop-shadow-2xl"
            src={GotMilk}
            alt="Cartoon drawing of myself"
          />
        </SpinningText>
      </div>
    </section>
    <OlaComp />
  </section>
);

export default HomeHero;
