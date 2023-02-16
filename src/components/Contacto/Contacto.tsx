import { MacWindow } from '../MacWindow';

const Contacto = () => (
	<section>
		<div className="background" id="contactame">
			<MacWindow title="Contáctame" id="contactame-form">
				<div className="flex ">
					<div className="flex-1 w-screen p-12">
						<form
							data-netlify="true"
							name="contacto-lasfito"
							autoComplete="on"
							method="post"
							encType="application/x-www-form-urlencoded"
							action="/gracias"
						>
							<input type="hidden" name="form-name" value="contacto-lasfito" />
							<div>
								<div className="mb-3 text-texto-sft">
									<label htmlFor="jsnombre" id="jsnombrelabel">
										Nombre
									</label>
									<input
										type="text"
										className="app-form-control"
										placeholder="Tu nombre"
										name="nombre"
										id="jsnombre"
										required
									/>
								</div>
								<div className="">
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

								<div className="my-10">
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
									<button className="btn-proyectos btn-prime" id="js26">
										Enviar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</MacWindow>
		</div>
	</section>
);

export default Contacto;
