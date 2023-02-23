// todo: fix false negative
/* eslint-disable jsx-a11y/label-has-associated-control */
import {MacWindow} from "../MacWindow";

function Contacto() {
  return (
    <section
      className="w-ful flex min-h-screen flex-col items-center justify-center px-5"
      id="contactame"
    >
      <MacWindow title="Contáctame" id="CONTACT-FORM">
        <div className=" flex-1 p-4 md:p-12">
          <form
            data-netlify="true"
            name="contacto-lasfito"
            autoComplete="on"
            method="post"
            encType="application/x-www-form-urlencoded"
            action="/gracias"
            className=""
          >
            <input type="hidden" name="form-name" value="contacto-lasfito" />
            <div>
              <div className="mb-5 ">
                <label htmlFor="jsnombre">Nombre</label>
                <input
                  type="text"
                  className="app-form-control"
                  placeholder="Tu nombre"
                  name="nombre"
                  id="jsnombre"
                  required
                />
              </div>
              <div className="my-5">
                <label htmlFor="jsemail" id="jsemaillabel">
                  Correo
                </label>
                <input
                  type="email"
                  className="app-form-control"
                  placeholder="tu correo"
                  name="correo"
                  required
                  id="jsemail"
                />
              </div>

              <div className="my-5">
                <label htmlFor="099" id="js25">
                  Mensaje
                </label>
                <input
                  className="app-form-control"
                  placeholder="Te amo, lasfito"
                  id="099"
                  name="mensaje"
                  required
                />
              </div>
              <div className="mb-0 text-right">
                <button
                  type="submit"
                  className="my-1 mx-[10px] h-[3rem] w-full cursor-pointer rounded-md bg-[#b14e50] text-lg text-white outline-none transition duration-300 ease-out hover:translate-y-[15%]  hover:bg-hover"
                  id="js26"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </MacWindow>
    </section>
  );
}

export default Contacto;
