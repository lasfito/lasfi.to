import {MacWindow} from "../MacWindow";
import {trans} from "../../i18n/index"

interface AcercaCardProps {
  id: string;
  short?: boolean;
  currentLocale: ValidLocale;
}

function AcercaCard({id, short = false, currentLocale = "en"}: AcercaCardProps) {


  const t = trans[currentLocale].about;

  return (
    <MacWindow id={id} title={t.title}>
      <div className="mx-auto">
        <img
          src={"/mugShot.webp"}
          alt={t.avatar_alt}
          className=" h-[150px] w-auto"
          height={150}
          width={150}
        />
      </div>
      <div className="py-5 text-center">
        <p className="mx-auto max-w-[50ch] ">
          {t.intro_text}
          <br />
          <br />
          {t.recruiter_text}{" "}
          <a href="/#contactame" className="fancy">
            {t.contact_link}
          </a>{" "}
          {t.or}{" "}
          <a href="/acerca" className="fancy">
            {t.bio_link}
          </a>
          <br />
          <br />
          {!short && (
            <div>
              {t.developer_text}{" "}
              <a
                href="/tutoriales"
                target="blank"
                rel="noopener"
                className="fancy"
              >
                {t.tutorials_link}{" "}
              </a>{" "}
              {t.and}{" "}
              <a
                href="https://youtube.com/@lasfito"
                target="_blank"
                rel="noopener"
                className="fancy"
              >
                {t.youtube_link}
              </a>
            </div>
          )}
        </p>
      </div>
    </MacWindow>
  );
}

export default AcercaCard;
