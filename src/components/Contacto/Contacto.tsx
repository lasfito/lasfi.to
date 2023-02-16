import React from "react";

const Contacto = () => (
  <section>
    <div className="background" id="contactame">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-center txt-str" id="js04">
              ¿Quieres trabajar conmigo?
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item">
              <form
                data-netlify="true"
                name="contacto-lasfito"
                autoComplete="on"
                method="post"
                encType="application/x-www-form-urlencoded"
                action="/gracias"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="contacto-lasfito"
                />
                <div className="app-form">
                  <div className="app-form-group">
                    <label htmlFor="jsnombre" id="jsnombrelabel">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="Adrian Salgado"
                      name="nombre"
                      id="jsnombre"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <label htmlFor="jsemail" id="jsemaillabel">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="app-form-control"
                      placeholder="hola@lasfi.to"
                      name="correo"
                      required
                      id="jsemail"
                    />
                  </div>

                  <div className="app-form-group message">
                    <label htmlFor="099" id="js25">
                      Mensaje
                    </label>
                    <input
                      className="app-form-control"
                      placeholder="Hi"
                      id="099"
                      name="mensaje"
                      required
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="btn-proyectos btn-prime" id="js26">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contacto;
