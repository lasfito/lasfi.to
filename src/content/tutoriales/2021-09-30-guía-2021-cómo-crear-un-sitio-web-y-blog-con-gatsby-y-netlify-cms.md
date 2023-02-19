---
type: tutoriales
url: guia-gatsby-blog-netlify
enlaceyt: https://www.youtube.com/embed/oE9GGrdrH1U
date: 2021-09-30T18:01:46.986Z
title: Guía 2021 - Cómo crear un sitio web y blog con Gatsby y Netlify CMS
tag:
  - Gatsby
  - React
autor: Adrián Salgado
keyword: cómo crear gatsby
thumbnail: /assets/guiagatsbythumbnail.png
---

Antes de comenzar, considero importante responder brevemente 2 preguntas:

## ¿Qué es Gatsby?

[Gatsby](https://www.gatsbyjs.com/) es un framework gratuito y de código abierto basado en React que te ayuda a crear sitios web y aplicaciones web rápidos. También es un generador de sitios estáticos como Next.js, Hugo y Jekyll.

Incluye SEO (optimización para motores de búsqueda), accesibilidad y optimización del rendimiento desde el principio. Esto significa que te llevará menos tiempo crear aplicaciones web listas para producción a comparación de si estuvieras construyendo solo con React.

## ¿Qué es Netlify CMS?

[Netlify CMS](https://www.netlifycms.org/) es un CMS (¡Vaya, quién lo hubiera imaginado!) para generadores de sitios estáticos - como Gatsby. Está construido por las mismas personas que hicieron [Netlify](https://netlify.com/) (¡Tampoco lo vi venir!). Te permite crear y editar contenido como si fuera WordPress, pero es una interfaz mucho más simple y fácil de usar (y sin tanto "bloat").

**Ahora sí viene lo bueno**

## Requisitos (environment)

Para poder seguir este tutorial necesitarás lo siguiente:

1. Instalar [Git](https://git-scm.com/)
2. Instalar [Node](https://nodejs.org/es/)
3. Instalar el [Gatsby-cli](https://www.npmjs.com/package/gatsby-cli)

## Cómo crear un sitio web con Gatsby

Hay dos formas distintas de comenzar con Gatsby:

1. Desde cero con `gatsby new`
2. A través de alguna plantilla

Ejecutar `gatsby new` en la terminal de comandos inicia el asistente de Gatsby, el cual nos realizará una serie de preguntas para poder comenzar con nuestro proyecto/sitio-web. _No obstante_, para este tutorial utilizaremos una plantilla.

Las plantillas son, como podrás deducirlo, maquetas o proyectos pre-creados para que los retomes y personalices a tu gusto. Aunque también es válido quedarte con el contenido de la plantilla (si no te molesta que alguien más tenga un sitio idéntico). Las plantillas de Gatsby las encuentras en su [librería oficial](https://www.gatsbyjs.com/starters/).

La plantilla que utilizaremos se llama _gatsby-starter-blog_ y para comenzar nuestro proyecto/sitio web con ella necesitaremos ejecutar el siguiente comando:

`npx gatsby new nombre-de-tu-proyecto https://github.com/gatsbyjs/gatsby-starter-blog`

Una vez que haya terminado de clonarse la plantilla, ejecuta `cd nombre-de-tu-proyecto` seguido de `gatsby develop` para acceder a la carpeta de tu proyecto y comenzar el ambiente de desarrollo.

¡Visita http://localhost:8000/ para encontrar tu nuevo sitio web!

Ahora mismo el proyecto que acabas de crear ya posee un "sistema" de publicaciones. Notarás que hay una carpeta llamada **content**, dentro de la cual hallarás una carpeta llamada **blog**.

En esta carpeta blog puedes crear "publicaciones" en archivos MarkDown y tales entradas serás publicadas en tu sitio web. Esto se debe gracias a **gatsby-node**, el cual encontrarás en el directorio raíz. Ahí está configuradas cómo, cuáles y cuántas páginas deben crearse.

El problema con esta situación es que debes trabajar directamente con el repositorio, así como añadir las entradas en MarkDown directamente y esto da pie a muchas complicaciones.

## Agregar Netlify CMS a tu sitio

Para solucionar el problema anterior añadiremos Netlify CMS a nuestro sitio. El proceso es relativamente sencillo y consta de 4 etapas:

1. Configuración carpeta Admin
2. Colecciones
3. Autenticación (código)
4. Deployment (desplegado) en Netlify
5. Autenticación (Netlify)

### Configuración carpeta Admin

En el directorio raíz de tu proyecto encontrarás una carpeta titulada **static**, en el mismo nivel que src, por ejemplo. De no existir, créala.

Al interior de static crearemos una carpeta llamada **admin**, dentro de la cual añadiremos 2 archivos:

1. index.html
2. config.yml

En **index.html** añadimos el siguiente código:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </body>
</html>
```

Esto nos dará acceso a la página tusitioweb.com/admin desde la cual podremos administrar nuestro contenido.

En **config.yml** agregaremos distintos fragmentos. Siendo el primero lo que nos permitirá enlazar el gestor de contenido con nuestro repositorio, de modo que lo que publiquemos desde el cms se añada a nuestro código.

**Ojo:** esto solo funciona con GitHub y GitLab. Nota también que especificamos en que rama nos encontramos (master para este ejemplo).

```
backend:
  name: git-gateway
  branch: master
```

También es necesario, desde este archivo config, especificar dónde deberán guardarse las imágenes que se añadan a través del cms. Para ello añadimos el siguiente código:

```
media_folder: "assets/images"
```

Siéntete libre de colocar la ubicación que tú desees.

### Configurar colecciones

Una colección es un conjunto de publicaciones que comparten algún rasgo característico que diferencia a ese conjunto de cualquier otro. Por ejemplo, en un portal de noticias puedes visualizar que los "artículos de opinión" son una colección, mientras que "las noticias" pertenecen a otro. Sea por el diseño, el contenido, estructura o cualquier otro criterio, es importante hacer separación de colecciones.

En este ejemplo añadiremos una colección para "entradas de blog":

```
collections:
  - name: "blog"
    label: "Blog"
    folder: "content/blog"
    create: true
    url: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}
```

Explicación de cada campo:

1. Name: El nombre de la colección\*
   Label: La etiqueta con la cual queremos identificar a la colección dentro del cms
2. Folder: La carpeta en la cual queremos guardar las publicaciones de esta colección. Fíjate que hemos escogido la misma que tenemos configurada con gatsby-node.
3. Create: Refiere a si queremos permitir que se creen entradas o no.
4. url: El formato con el cual se crearan los títulos de nuestros archivos .md (markdown).
5. Fields: Este es el lugar donde podremos personalizar nuestra colección. Para este caso de entradas de blog tenemos un campo de layout, título, fecha de publicación y cuerpo.

Te recomiendo que eches un vistazo de todos los campos de personalización que podemos añadir. Encontrarás la lista completa, ejemplos y explicaciones en la [documentación de Netlify CMS](https://www.netlifycms.org/docs/widgets/).

### Autenticación (código)

Antes de publicar nuestro sitio web es necesario añadir un par de líneas de código para preparar el terreno hacia la autenticación. Para ello añade este fragmento a dos lugares.

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

El primero es dentro de `<head> </head>` en static/admin/index.html.

El segundo lugar es el index de tu sitio web. En nuestro caso, encontrarás el archivo index.js en src/pages/index. Dado que se trata de un componente, para añadir el script tendrás que instalar [React-helmet](https://www.npmjs.com/package/react-helmet) con `npm i react-helmet`. Dentro de index.js añade el script entre dos etiquetas helmet:

```
<Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
```

Con esto estamos listos para publicar nuestro sitio.

### Deployment (desplegado) en Netlify

Vamos a utilizar Netlify para publicar nuestro sitio de Gatsby en vivo. El proceso de implementación es bastante sencillo, rápido y, lo que es más importante, viene con SSL gratuito - esto significa que tu sitio está protegido (puedes saberlo mirando el candado verde en la búsqueda del navegador).

Si no te has registrado en la plataforma, puedes hacerlo [aquí mismo](https://app.netlify.com/signup). Cuando hayas terminado de registrarte, necesitarás cargar tu proyecto a algún repositorio en línea (recomiendo hacerlo con [Github](https://github.com/) y una vez cargado podrás comenzar el proceso de implementación siguiendo estos 3 pasos.

1. Desde el panel principal de Netlify, haz clic en el botón "Nuevo sitio de Git" para crear un nuevo sitio para implementar. Elige el proveedor de Git donde está alojado tu sitio.
2. Elige el repositorio que deseas conectar a Netlify.
3. En la ventana donde te preguntan cómo te gustaría que Netlify ajuste sus compilaciones e implemente tu sitio, vamos a dejar todo como está y haremos clic en el botón "Desplegar sitio".

Una vez que se completa la implementación, puedes visitar tu sitio en vivo haciendo clic en el enlace verde que se ha generado para ti en la parte superior izquierda de la pantalla. Ejemplo: https://tu-proyecto.netlify.app.

Con esto, el mundo ahora puede ver tu sitio. Puedes reemplazar la URL extraña con algún dominio personalizado leyendo [esta documentación](https://docs.netlify.com/domains-https/custom-domains/#definitions).

### Autenticación (Netlify)

Ahora que hemos terminado de configurar el código y hemos lanzado nuestro sitio web, es momento de terminar el tutorial con los últimos pasos referentes a la autenticación.

Desde el panel de tu sitio web dentro de Netlify, encontrarás en el menú superior distintas opciones: Overview, deploys, plugins, functions, etc.

Haz clic en la última, la que dice **site settings** o **ajustes del sitio**. Se abrirá una nueva ventana con un panel lateral, en este elige el apartado de **Identity** (Identidad).

Dentro de identidad haremos lo siguiente:

1. Desliza hasta el final y haz clic en el botón verde <kbd> Enable Identity </kbd>
2. En Preferencias de registro (Registration preferences), selecciona Open o Invite Only. Lo cierto es que resulta mejor que solo usuarios invitados puedan acceder al CMS. Pero de momento es más cómodo dejarlo abierto, tan solo no olvides cambiar el ajuste después.
3. Desliza al apartado de "services" y haz clic en <kbd> Enable Git Gateway </kbd>

Con esto habremos terminado de configurar nuestro sitio web, blog y servicio de autenticación.

¡Hurra!

## Cómo acceder al CMS

Muy bien, ¡ahora estás listo para escribir tu primera publicación de blog!

Hay dos formas de acceder al administrador de CMS, dependiendo de las opciones de acceso que hayas elegido.

Si seleccionaste Invite Only, puedes invitarte a ti mismo y a otros usuarios haciendo clic en el botón <kbd>Invitar usuario</kbd>. Luego, se enviará un mensaje de correo electrónico con un enlace de invitación para iniciar sesión. Haz clic en el enlace de confirmación y se te dirigirá a la página de inicio de sesión.

Alternativamente, si seleccionaste Open, puedes acceder al CMS directamente en tu-sitio.com/admin/. Se te pedirá que crees una nueva cuenta. Cuando termines, se enviará un enlace de confirmación a tu correo electrónico. Haz clic en el enlace de confirmación para completar el proceso de registro y serás llevado a la página de CMS.

## Cómo publicar un articulo

Puedes crear una nueva publicación haciendo clic en el botón <kbd>Nueva publicación"</kbd>

Cuando estés listo para publicar, puedes hacer clic en el botón <kbd>Publicar ahora</kbd> para publicarla inmediatamente.

Cuando presiones el botón publicar, el archivo de publicación se crea automáticamente. Luego se agregará a los cambios con el mensaje de confirmación según el nombre de la publicación junto con la fecha y hora de publicación. Finalmente, se enviará al repositorio del host y, desde allí, tu publicación se verá en vivo.

Puedes ver los cambios mirando el mensaje de confirmación en su repositorio de host.

Después de esperar unos minutos, tu nueva publicación debería estar activa.
