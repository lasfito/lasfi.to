import {MugShot} from "../../assets/img";
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
    <section className=" my-20 w-full bg-fondo-jr px-5 py-8">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-center md:flex-row">
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
          <div className="flex-row ">
            {includeNewsLetter && <NewsLetter cta="Únete al NewsLetter" />}
          </div>
        </div>
        <div>
          <img
            className="hidden h-auto w-[200px] md:block"
            src={MugShot}
            alt="Hey, soy yo"
            width={200}
            height={200}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default AcercaAutor;
