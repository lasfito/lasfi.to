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
          He desarrollado software para la web y aplicaciones móviles durante más de
          4 años. Poseo amplia experiencia en JavaScript, TypeScript, React,
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
        </p>
      </div>
    </MacWindow>
  );
}

export default AcercaCard;
