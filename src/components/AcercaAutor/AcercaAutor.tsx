import {Luis} from "../../assets/img";
import {NewsLetter} from "../NewsLetter/";

function AcercaAutor() {
  // todo: refactor with 1-2-3
  return (
    <section className=" w-full bg-fondo-jr py-8 ">
      <div className="mx-auto flex max-w-[1024px] items-center justify-center">
        <div>
          <div>
            <h3>Acerca del autor</h3>
            <p className="my-5 max-w-[35ch] text-texto-sft">
              ¡Hola! Me llamo Adrián, pero todos me conocen como Lasfito. Soy
              desarrollador front-end y escribo artículos y tutoriales sobre
              JavaScript, desarrollo web y diseño.
            </p>
          </div>
          <div className="flex-row">
            <NewsLetter cta="Únete al NewsLetter" />
          </div>
        </div>
        <div>
          <img className="h-auto w-[200px]" src={Luis} alt="Hey, soy yo"></img>
        </div>
      </div>
    </section>
  );
}

export default AcercaAutor;
