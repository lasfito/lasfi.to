import React from "react";
/* import Swiper from "../global/Swiper"; */
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Reclutador = () => {
  return (
    <div id="wenas" className="contenedor reclutador-acerca">
      <div className="buffer"></div>
      <section id="haciendo-ahora">
        <h2 className="txt-gde">Lo que estoy haciendo ahora</h2>
        <p>Actualmente estoy trabajando en 1 proyecto:</p>
        <ul>
          <li>
            Estoy construyendo una aplicación web (SaaS) para el público
            general. Puedes encontrar mi progreso en{" "}
            <a
              href="https://xolocrm.com"
              target="_blank"
              rel="noreferrer"
              className="fancy"
            >
              Xolocrm.com
            </a>
          </li>
        </ul>
      </section>
      <section id="acerca-corto">
        <h2 className="txt-gde"> Acerca (corto)</h2>
        <p>
          Soy desarrollador web con 2 años de experiencia en front-end. A lo
          largo de mi carrera he trabajado con PyMEs y clientes individuales. He
          tenido la fortuna de dirigir proyectos y resolver problemas .
          <br />
          <br />
          Pese a mi "corta" carrera, puedo decir con total seguridad que he
          aprendido y desarrollado mis habilidades a tal ritmo que hoy día me
          encuentro desarrollando una aplicación SaaS para el público general.
          <br />
          <br />
          Aunque he trabajado con distintas tecnologías, con las que actualmente
          trabajo son: JavaScript, React, Gatsby, Firebase. Siempre estoy
          dispuesto a platicar. Bien sea sobre desarrollo web, alguna oferta
          laboral o sobre viajes 🌎
        </p>
      </section>

      <section id="contacto">
        <h2 className="txt-gde"> Contacto</h2>

        <div className="hero__iconos">
          <ul className="contacto-acerca">
            <li>
              <a
                href="https://www.linkedin.com/in/lasfito/"
                target="_blank"
                className="snake"
                rel="noreferrer"
              >
                <FaLinkedinIn />
                Revisa mi perfil en Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lasfito"
                target="_blank"
                className="snake"
                rel="noreferrer"
              >
                <FaGithub />
                Echa un vistazo a mi perfil en Github
              </a>
            </li>
            <li>
              <a href="mailto:hola@lasfi.to" className="snake" rel="noreferrer">
                <FaEnvelope />O envíame un correo
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/*  <section id="experiencia">
        <h2 className="txt-gde">Experiencia</h2>
     
      </section> */}
    </div>
  );
};

export default Reclutador;
