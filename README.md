# Sitio web de Lasfito

Bienvenido, aquí encontrarás el código fuente de [lasfi.to](https://lasfi.to), mi pequeño espacio en la web. Este sitio está construido principalmente con [Astro](https://astro.build), [Tailwind](https://tailwindcss.com) y [React](https://reactjs.com).

Echa un vistazo al código para aprender cómo he realizado ciertas cosas, o simplemente para ver cómo se ve el código. Siéntete libre de usarlo como inspiración/base para tu propio proyecto respetando los lineamientos de la licencia.

## Pull Requests

Como todo proyecto, el sitio es trabajo en progreso y siempre hay cosas que mejorar. Siéntete libre de abrir un PR con cualquier mejora que creas que pueda ser útil para el sitio. Asimismo, puedes tomar alguno de los problemas identificados aquí abajo y trabajar en ellos. Si tienes alguna duda, puedes abrir un issue o escribirme por [Discord](https://discord.com/invite/GQ2EKbh).

No olvides revisar los lineamientos de contribución antes de abrir un PR.

- [ ] Corregir parpadeo al navegar con tema oscuro. Posible solución turbolinks.
- [ ] Modelación de datos para integración con Algolia (o similar) para búsqueda de contenido.
- [ ] Extender pruebas e2e con Playwright.
- [ ] Optimización de imágenes.
- [ ] Extensión del sitio para crear PWA.
- [ ] i18n Inglés.
- [ ] Integración CMS con content collections de Astro.
- [ ] Corregir espacios en blanco de las transcripciones de tutoriales.
- [ ] Crear entradas de tutoriales para videos subidos en el canal. (ver [/tutoriales](https://lasfi.to/tutoriales))
- [ ] Corregir/actualizar CodePens embedidos: qBXRmML, xxLgdWJ, PoKWmLZ .
- [ ] Crear RSS feed para el blog.
- [ ] Implementar mejor Code-highlighting (previamente con Gatsby Plugin y PrismJS).
- [ ] Limpiar configuración de TailwindConfig y purgar CSS no utilizado.

## Commandos principales

Todos los comandos se ejecutan desde una terminal en la raíz del proyecto.

| Comando           | Acción                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala las dependencias (hazlo de primero) |
| `npm run dev`     | Inicia un servidor en `localhost:3000`      |
| `npm run build`   | Crea una versión de prod en `./dist/`       |
| `npm run preview` | Obtén una vista previa de la versión prod   |
| `npm run test`    | Ejecuta las pruebas e2e con PlayWright      |
