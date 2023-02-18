import {Luis} from "../../assets/img";
import {MacWindow} from "../MacWindow";

interface AcercaCardProps {
  id: string;
}

function AcercaCard({id}: AcercaCardProps) {
  return (
    <MacWindow id={id} title="Acerca de mí">
      <div className="mx-auto">
        <img
          src={Luis}
          alt="Ilustración de Lasfito"
          className=" h-[150px] w-auto"
        />
      </div>
      <div className="py-5 text-center">
        <p className="mx-auto max-w-[50ch] ">
          <span>
            Me llamo Adrián, ingeniero bilingüe de software con amplia
            experiencia en
          </span>
          <strong> JavaScript</strong> para desarrollo full stack.
          <br />
          <br />
          ¿Eres reclutador o buscas contratarme? Entonces{" "}
          <a href="/#contactame" className="fancy">
            contáctame
          </a>{" "}
          o lee{" "}
          <a href="/acerca" className="fancy">
            acerca de mí
          </a>
          .
          <br />
          <br />
          ¿Eres desarrollador y/o buscas mejorar tus habilidades? Entonces echa
          un vistazo a mis{" "}
          <a href="/tutoriales" target="blank" rel="noopener" className="fancy">
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
        </p>
      </div>
    </MacWindow>
  );
}

export default AcercaCard;
