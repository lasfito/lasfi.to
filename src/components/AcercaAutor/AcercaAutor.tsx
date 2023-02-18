import {Luis} from "../../assets/img";
import {NewsLetter} from "../NewsLetter/";

interface AcercaAutorProps {
  includeNewsLetter?: boolean;
  backHome?: boolean;
  title: string;
  body: string;
}

function AcercaAutor({
  includeNewsLetter = true,
  backHome = false,
  title,
  body,
}: AcercaAutorProps) {
  return (
    <section className=" my-20 w-full bg-fondo-jr py-8">
      <div className="mx-auto flex max-w-[1024px] items-center justify-center">
        <div>
          <div>
            <h3 className="text-center text-xl font-bold">{title}</h3>
            <p className="my-5 max-w-[35ch] text-texto-sft">{body}</p>
            {backHome && (
              <div className="flex justify-center">
                <a
                  href="/"
                  className="rounded bg-boton py-2 px-4 font-bold text-white hover:scale-105 hover:bg-acento hover:shadow-md hover:transition-all hover:duration-300 hover:ease-in-out"
                >
                  Ir al inicio
                </a>
              </div>
            )}
          </div>
          <div className="flex-row">
            {includeNewsLetter && <NewsLetter cta="Únete al NewsLetter" />}
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
