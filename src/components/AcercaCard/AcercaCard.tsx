import {MugShot} from "../../assets/img";
import {MacWindow} from "../MacWindow";

interface AcercaCardProps {
  id: string;
  short?: boolean;
}

function AcercaCard({id, short = false}: AcercaCardProps) {
  return (
    <MacWindow id={id} title="Acerca de mí">
      <div className="mx-auto">
        <img
          src={MugShot}
          alt="Ilustración de Lasfito"
          className=" h-[150px] w-auto"
          height={150}
          width={150}
        />
      </div>
      <div className="py-5 text-center">
        <p className="mx-auto max-w-[50ch] ">
          Me llamo Adrián y he desarrollado software para la web durante más de
          3 años. Poseo amplia experiencia en JavaScript, TypeScript, React,
          React Native y Node.js.
          <br />
          <br />
          ¿Eres reclutador o buscas contratarme? Entonces puedes{" "}
          <a href="/#contactame" className="fancy">
            contactarme
          </a>{" "}
          o leer mi{" "}
          <a href="/acerca" className="fancy">
            bio.
          </a>
          <br />
          <br />
          {!short && (
            <div>
              ¿Eres desarrollador y/o buscas mejorar tus habilidades? Entonces
              echa un vistazo a mis{" "}
              <a
                href="/tutoriales"
                target="blank"
                rel="noopener"
                className="fancy"
              >
                tutoriales{" "}
              </a>{" "}
              y mi canal de{" "}
              <a
                href="https://youtube.com/@lasfito"
                target="_blank"
                rel="noopener"
                className="fancy"
              >
                YouTube.
              </a>
            </div>
          )}
        </p>
      </div>
    </MacWindow>
  );
}

export default AcercaCard;
