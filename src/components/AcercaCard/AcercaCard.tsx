import {MugShot} from "../../assets/img";
import {MacWindow} from "../MacWindow";
import {SHORT_RESUME_ES} from "../../consts"

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
          {SHORT_RESUME_ES}
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
