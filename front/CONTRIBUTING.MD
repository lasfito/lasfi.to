# Contribuir

¡Gracias por estar dispuesto a contribuir!

¿Trabajando en tu primer Pull Request? Puedes aprender cómo hacerlo desde esta serie gratuita (eng) [Cómo contribuir a un proyecto de código abierto en GitHub][egghead]

## Cambios de contenido

La mayoría de los cambios de contenido se pueden hacer sin clonar el repositorio. Simplemente busca el archivo que deseas cambiar en la interfaz de GitHub y haz clic en el pequeño icono de edición para realizar el cambio directamente en el sitio web de GitHub.

Si necesitas hacer otros cambios sustanciales, sigue los pasos de configuración del proyecto a continuación.

## Configuración del proyecto

Si necesitas configurar el proyecto localmente, es en realidad bastante sencillo:

#### Requisitos del sistema

Node.js >= 16.0.0
npm >= 7.0.0
git >= 2.7.0

#### Pasos de configuración

- Haz un fork y clona el repositorio en tu máquina
- Ejecuta `npm install` instalar las dependencias y configurar el proyecto. Si encuentras problemas con el gestor de contenido de Astro puedes ejecutar `npx astro sync` para solucionarlo.
- Crea una rama para tu PR con `git checkout -b pr/nombre-de-tu-rama`

Consejo: Si planeas realizar distintas contribuciones es mejor manenter tu rama main/master apuntando al repositorio original. Para hacer esto, configura un "upstream" remoto y haz fetch de la rama master desde ese remote. Ejemplo:

```bash
git remote add upstream https://github.com/lasfito/lasfi.to.git
git fetch upstream
git branch --set-upstream-to=upstream/master (rama principal)
```

#### Ejecutar el proyecto

Ejecuta `npm run dev` para iniciar el servidor de desarrollo. El sitio se puede ver en `http://localhost:3000`.

#### Ejecutar los tests

Ejecuta `npm run test` para ejecutar los tests.

#### Ejecución de pruebas estáticas (formateo / linting / escritura)

Todo está configurado con TypeScript/Prettier/ESLint. Todo debería ejecutarse automaticamente al realizar un commit. Si no es así, puedes ejecutar `npm run commit-check` antes del commit para ejecutar todas las pruebas (aségurate de haber añadido los archivos editados a staging).
