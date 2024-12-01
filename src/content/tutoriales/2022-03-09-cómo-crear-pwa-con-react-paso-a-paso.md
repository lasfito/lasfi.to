---
type: tutoriales
slug: como-crear-pwa-con-react
enlaceyt: https://www.youtube.com/embed/kMucD68rkio
date: 2022-03-09T07:42:01.704Z
title: Cómo crear PWA con React - Paso a paso
tag:
  - React
  - Desarrollo 101
autor: Lasfito
publicoObjetivo: "Cierto conocimiento sobre React no caería mal. "
keyword: cómo crear pwa con react
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/pwa-react-thumn.png?alt=media&token=beb852ab-0f01-4be4-80dd-53d8c928fb27"
---

# Convierte React en una PWA - paso a paso

¿Has oído acerca de las PWA ?
Una <def> PWA </def> es una aplicación web que utiliza _service workers_, manifiestos y otras características de la web en combinación con “mejoras progresivas” para brindar a los usuarios una experiencia a la par con las aplicaciones nativas.

Dicho de otra manera, una PWA es el hijo de sitios web y aplicaciones móviles. **En resumen**, puedes tomar tu sitio web y convertirlo en una aplicación móvil con 2 sencillas <s> aplicaciones </s> modificaciones.

En este tutorial te mostraré paso a paso cómo puedes tomar tu aplicación de React, bien sea con <mono> create-react-app, next , gatsby o vite </mono> y convertirla en una **PWA**.

## ¿Qué es una PWA?

Antes de comenzar tomémonos un minuto para entender la magia detrás de las PWA.

Todo sitio/aplicación web no es más que un conjunto de HTML, CSS y JavaScript.
Cuando visitas un sitio, tu navegador pide esos archivos a algún servidor y los interpreta para mostrarte algo en la pantalla. ¿Estamos de acuerdo?

Hay distintas maneras en las cuales el servidor prepara, gestiona y envía esos archivos:SSR, CSR, SSG e ISG. Pero todas se reducen a una comunicación entre navegador y “origen” que al final te muestra algo en tu navegador.

<q>Una PWA no es más que un navegador “fingiendo” ser una aplicación móvil. </q>

Para lograr una imitación lo más cercano a “lo nativo”, disponemos de 2 herramientas: Web Manifest y Service Worker.

El <def>web manifest </def> (manifiesto web) le indica al navegador y dispositivo (celular, computadora) qué apariencia especial tendrá la PWA de modo que el usuario no se de cuenta de que en realidad sigue en el navegador.

Por otro lado, el <def> service worker </def> es una secuencia de comandos que el navegador ejecuta en segundo plano. Es decir, mientras el navegador mantiene su comunicación con el origen para recibir HTML, CSS y JS, el service worker se ejecuta en el fondo para realizar actividades sin interrumpir al navegador.

Para el caso de las PWA, los service worker toman un papel más activo puesto que interceptan solicitudes de red, almacenan y recuperan recursos en caché y entregar mensajes push (aka, notificaciones).

Es así, gracias al web manifest y service worker que podemos reutilizar nuestra aplicación web y hacerla pasar por aplicación móvil. Y aunque diciéndolo así suene a que es una aplicación “de segunda”, “falsa” o “[chafa](https://dle.rae.es/chafa?m=form)” , lo cierto es que ante los ojos del usuario las diferencias son casi nulas.

¿Interesado en convertir tu aplicación de React en una PWA?
¡Acompáñame!

## Checklist

Asumiendo que ya tienes una aplicación hecha en React, esta es la lista de pasos a seguir:

Instalación de Workbox

Creación del Web Manifest

Splash Screen

Modificaciones Safari

Creación del Service-Worker

Registro del Service Worker

Descargar PWA

PWAs con Gatsby y Next

**Nota importante:** tu sitio/aplicación web debe contar con https o no podrás tener una PWA.

## 1 Instalación de Workbox

Workbox es un conjunto de bibliotecas que nos brindan service worker nivel producción de forma sencilla. Está respaldada por Google y de hecho Facebook utiliza Workbox de forma predeterminada para sus PWA.

Desde tu terminal ejecuta

`npm install workbox-core workbox-expiration workbox-precaching workbox-routing workbox-strategies`

## 2 Creación del Web Manifest

Para que nuestra PWA pueda verse como una aplicación nativa bastan unos cuantos datos. No obstante, aquí revisaremos todos los campos posibles del manifiesto web en caso de que busques mayor personalización.

Si tu aplicación está creada con CRA, es posible que en la carpeta de ./public encuentres ya un archivo llamado **manifest.json**. Caso contrario, crea un archivo con ese nombre y vamos a revisar sus propiedades.

Ojo, si llevas prisa implementa solo las que son obligatorias.

### background_color

**Obligatorio:** No

La propiedad background_color define un color de fondo que se muestra en la PWA mientras los estilos de la aplicación cargan.
Por lo tanto, se recomienda que background_color coincida con la propiedad CSS background-color de tu aplicación web para una transición fluida entre los tiempos de carga.

Ejemplo:
`“background_color”: “white”`

### categories

**Obligatorio:** No

Se trata de las “categorías” a las que supuestamente pertenece la PWA. No existe una lista estándar de valores posibles, pero el W3C mantiene una [lista de categorías conocidas](https://github.com/w3c/manifest/wiki/Categories):

_(books, business, education, entertainment, finance, fitness, food, games, government, health, kids, lifestyle, magazines, medical, music, navigation, news, personalization, photo, politics, productivity, security, shopping, social, sports, travel, utilities, weather )_.

Ejemplo:

`"categories": [ "education", "music"]`

### description

**Obligatorio:** No

Eso, la descripción de la PWA :v

Ejemplo:
`"description": "Aplicación para el cuidado de la salud."`

### dir

**Obligatorio:** No

Se refiere a la dirección en la cual mostrar el nombre, nombre corto y descripción del manifiesto.

Puede tomar los siguientes valores:

auto: la dirección del texto la determina el navegador
ltr — de izquierda a derecha
rtl: de derecha a izquierda

Ejemplo:

`“dir”: “ltr”`

### display

Esta propiedad determina el modo de visualización para la aplicación.

Recuerda que una PWA es un sitio web/navegador fingiendo ser una aplicación nativa. Por ello, con esta propiedad determinas cuanto quieres que se vea como “navegador” y cuando como “aplicación nativa”.
Hay 4 valores posibles: fullscreen, standalone, minimal-ui, browser.

Como consejo pro, puedes estilizar tu aplicación con media queries con base en el modo de visualización:

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

Ejemplo:
`"display": "standalone"`

### display_override

**Obligatorio:** No

Recuerda que las PWA son navegadores haciéndose pasar por aplicaciones. El problema está en que no todos los navegadores implementan igual características de CSS y JS. Por ello, algunos navegadores no implementan todos los modos de display.
Con display_override proporcionamos una secuencia de modos de visualización que el navegador considerará **antes** de revisar el valor de display.

Ejemplo:

```json
{
  "display_override": ["fullscreen", "minimal-ui"],
  "display": "standalone"
}
```

### iarc_rating_id

**Obligatorio:** No

Representa el código de certificación de la [International Age Rating Coalition](https://www.globalratings.com/) - IARC. Está destinado a ser utilizado para determinar qué edad es apropiada para usar la aplicación web.

Ejemplo:

`"iarc_rating_id": "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7"`

### icons

**Obligatorio:** Sí

Se trata de un array de objetos en los cuales definimos qué íconos mostrar para ciertos tamaños/contextos.

El objeto se ve así:

```javascript
{
sizes,
src,
type,
purpose,
}
```

Es recomendable que te tomes el tiempo de generar suficientes tamaños para todos los dispositivos/contextos posibles. Te recomiendo echarle un ojo a [esta herramienta](https://nsimage.brosteins.com/)

Ejemplo:

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "any"
  }
]
```

### id

**Obligatorio:** No

Representa la identidad de la aplicación. La identidad toma la forma de una URL, que tiene el mismo origen que la URL de inicio.
La identidad es utilizada por los navegadores para identificar de forma única la aplicación de forma universal. Cuando el navegador ve un manifiesto con una identidad que no corresponde a una aplicación ya instalada, DEBE tratar ese manifiesto como una descripción de una aplicación distinta, incluso si se sirve desde la misma URL que la de otra aplicación.

Ejemplo:
`“id”: "/"`

### lang

**Obligatorio:** No

Contiene una sola etiqueta de idioma. Especifica el idioma principal para los name, short name y description y junto con dir, determina su dirección.
Ejemplo:

`“lang”: “es-MX”`

### name

**Obligatorio:** Sí

Representa el nombre de la aplicación web tal como se muestra normalmente al usuario (p. ej., entre una lista de otras aplicaciones o como una etiqueta para un icono).

El nombre tiene capacidad de "direccionalidad", lo que significa que se puede mostrar de izquierda a derecha o de derecha a izquierda en función de los valores de los miembros del manifiesto dir y lang.

Ejemplo:

`“name”: “App de Lasfito”`

### orientation

**Obligatorio:** No

Aquí defines la orientación de la aplicación. Dependiendo del modo de display, es posible que el valor sea ignorado por la PWA.

Estos son los posibles valores:

any

natural

landscape

landscape-primary

landscape-secondary

portrait

portrait-primary

portrait-secondary

**Nota:** Puedes cambiar la orientación con `screen.orientation al interior de la app.

Ejemplo:

`"orientation": "portrait-primary"`

### prefer_related_applications

**Obligatorio:** No

prefer_related_applications es un valor booleano que especifica que las aplicaciones enumeradas en related_applications deben preferirse en lugar de esta PWA. Si el miembro prefer_related_applications se establece en verdadero, el navegador podría sugerir instalar una de las aplicaciones relacionadas en lugar de esta aplicación web.

Si se omite, prefer_related_applications por defecto es falso.

Ejemplo:

`"prefer_related_applications": true`

### protocol_handlers

**Obligatorio:** No

¿Has visto que puedes enviar correos desde un enlace colocando mailto:hola\[arroba]lasfi.to?

En este caso, mailto es un esquema o protocolo. En esta propiedad definimos qué esquema/protocolo queremos que sea asignado a la PWA para que gestione estos enlaces.

Nota: Firefox y Safari no implementan esta propiedad.

Ejemplo:

```json
"protocol_handlers": [
  {
    "protocol": "appshop",
    "url": "/shop?for=%s"
  }
]
```

Nota2: %s es reemplazado por la URL después del protocolo.

### related_applications

**Obligatorio:** No

El campo related_applications es array de objetos que especifican aplicaciones alternativas recomendadas por la PWA.

Ejemplo:

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }
]
```

### scope

**Obligatorio:** No

¿Recuerdas que una PWA es el navegador fingiendo ser una aplicación nativa? En este campo definimos a qué páginas/URLs queremos que se apliquen las características del manifiesto/PWA. Por lo tanto, si el usuario navega fuera del alcance, vuelve a una página web normal dentro de una pestaña o ventana del navegador.
Se recomienda colocar “/” para cubrir todo el sitio web.
Ejemplo:

`"scope": "/app/"`

### screenshots

**Obligatorio:** No

Define un array de capturas de pantalla destinadas a mostrar la aplicación. Estas imágenes están destinadas a ser utilizadas por tiendas de PWAs para efectos de venta/divulgación.

Ejemplo:

```json
"screenshots" : [
{
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp".
    "platform": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

### short_name

**Obligatorio:** No

La propiedad short_name representa el nombre de la aplicación web que se muestra al usuario **si no hay suficiente espacio para mostrar el nombre**

Ejemplo:

```json
"name": "El Lasfito es el mejor dev ",
"short_name": "Lasfito goat"
```

### shortcuts

**Obligatorio:** No

Define un array de accesos directos o enlaces a tareas o páginas clave dentro dela PWA. El navegador puede usar estos valores para ensamblar un menú contextual que mostrará el sistema operativo cuando un usuario interactúe con el ícono de la aplicación web (presionando el ícono, por ejemplo).

Ejemplo:

```json
"shortcuts" : [
  {
    "name": "Enviar felicitación",
    “short-name”: “Felicitar”,
    “icon”: “/icon96x96.png”,
    "url": "/today",
    "description": "List of events planned for today"
  },
]
```

### start_url

**Obligatorio:** No

Representa la URL de inicio de la aplicación web: la URL preferida que debe cargarse cuando el usuario inicia la aplicación web (por ejemplo, cuando el usuario toca el ícono de la aplicación web desde el menú de la aplicación o la pantalla de inicio de un dispositivo) .

Ejemplo:

`"start_url": "https://example.com?mode=pwa"`

### theme_color

**Obligatorio: No**

theme_color define el color del tema predeterminado para la aplicación. Esto a veces afecta la forma en que el sistema operativo muestra el sitio (por ejemplo, en el selector de tareas de Android, el color del tema rodea el sitio).

Ejemplo:

`"theme_color": "purple"`

## 3 Splash Screen

Con una aplicación web progresiva (PWA), la famosa “splash screen” se muestra si hay un retraso con la carga del sitio.

**Casi todos los navegadores** generan una splash screen por ti de forma automática. Esta splash screen - también conocida como pantalla de inicio - se compone de datos en el archivo de manifiesto: el nombre, el color de fondo y lo que el navegador considera que es el ícono de mejor tamaño especificado en la lista de íconos.

Ahora, fíjate como coloqué en negritas “casi todos los navegadores”. Para safari tienes que crear y especificar la splash screen que utilizará la PWA.

No pasa nada, podrás pensar. Es solo una imagen, ¿cierto? ¿CIERTO?

Amígo mío (o amiga), claramente subestimas la maldad de Apple :v
Verás, hay varios dispositivos que utilizan safari. Todos con distintas medidas de pantalla. Por ello, apple espera que proveas una imagen para cada combinación distinta de tamaño.

![yamcha derrotado](https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/31-pwa%2Fyamcha-muerto.jpg?alt=media&token=7ddbf269-f6f3-4289-91a7-fda5120f8e95 "Asi termina uno con tanta etiqueta :v")

Bueno, no realmente. Pero sí es tedioso.

Lo que tienes que hacer es declarar las splash screen a través de etiquetas meta <meta>. Puedes cubrir varios tamaños con una misma etiqueta gracias a “media queries”.

Ejemplo:

```html
<!-- iPhone Xs Max (1242px x 2688px) -->

<link
  rel="apple-touch-startup-image"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
  href="/apple-launch-1242x2688.png"
/>
<!-- iPhone Xr (828px x 1792px) -->
<link
  rel="apple-touch-startup-image"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
  href="/apple-launch-828x1792.png"
/>
<!-- iPhone X, Xs (1125px x 2436px) -->
<link
  rel="apple-touch-startup-image"
  media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
  href="/apple-launch-1125x2436.png"
/>
<!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) -->
<link
  rel="apple-touch-startup-image"
  media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
  href="/apple-launch-1242x2208.png"
/>
<!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->
<link
  rel="apple-touch-startup-image"
  media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
  href="/apple-launch-750x1334.png"
/>
```

Es importante mencionar que también debes considerar versiones en horizontal y que debes añadir la siguiente etiqueta para que estas splash screen sean utilizadas:

`<meta name="mobile-web-app-capable" content="yes">`

## 4 Modificaciones Safari

Recuerda que las Aplicaciones Web Progresivas son un navegador haciéndose pasar por aplicación nativa. El problema está en que no todos los navegadores se comportan igual, hay quienes tienen “deficiencias” o comportamientos inesperados.

Hace unos años el navegador meme era Internet Explorer.
Pues ahora lo es safari (aunque no los culpo mucho pues entiendo el conflicto de intereses entre su app store y la web).
Si quieres que quienes descarguen tu WPA usando safari tengan una buena experiencia, tendrás que realizar un par de ajustes en tu aplicación.

### Ícono

Para el ícono tendrás que añadir en tu carpeta de _public_ una imagen en PNG llamada apple-touch-icon.png. También puedes establecerla con el siguiente link tag:

<link rel="apple-touch-icon" href="/custom_icon.png">
Para especificar varios íconos para diferentes resoluciones de dispositivos, por ejemplo, admitir dispositivos iPhone y iPad, agregue un atributo de tamaños a cada elemento de enlace de la siguiente manera:

```html
<link rel="apple-touch-icon" href="touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png" />
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="touch-icon-iphone-retina.png"
/>
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="touch-icon-ipad-retina.png"
/>
```

Se utiliza el icono que tiene el tamaño más apropiado para el dispositivo. Consulte el capítulo "Gráficos" de las Pautas de interfaz humana de iOS para conocer los tamaños y las recomendaciones actuales de los íconos.
Si no hay ningún icono que coincida con el tamaño recomendado para el dispositivo, se utiliza el icono más pequeño que tenga un tamaño superior al recomendado. Si no hay íconos más grandes que el tamaño recomendado, se usa el ícono más grande.
Si no se especifican íconos, se buscan íconos con el prefijo _apple-touch-icon_ en el directorio raíz del sitio web.

### Splash Screen

Como revisamos anteriormente en el apartado de Splash Screen, es necesario definir esta imagen con la siguiente etiqueta:

`<link rel="apple-touch-startup-image" href="/launch.png">`

### App Title

En iOS, puedes especificar un título para el icono de inicio. De forma predeterminada, se utiliza la etiqueta `<title>`. Para establecer un título diferente, agrega una etiqueta meta a la página web, como en:

`<meta name="apple-mobile-web-app-title" content="AppTitle">`

### Modo Standalone

Cuando se usa el modo standalone (independiente) no hay un campo de texto de URL del navegador en la parte superior de la pantalla o una barra de botones en la parte inferior de la pantalla. Solo aparece una barra de estado en la parte superior de la pantalla.

`<meta name="apple-mobile-web-app-capable" content="yes">`

### Barra de estado

Si has escogido el modo standalone, puedes minimizar la barra de estado que se muestra en la parte superior de la pantalla en iOS.
Por ejemplo, el siguiente código HTML establece el color de fondo de la barra de estado en negro:

`<meta name="apple-mobile-web-app-status-bar-style" content="black">`

Posibles valores: default, black, black-translucent.

## 5 Creación del Service Worker

Nos encontramos ya en la recta final.
Recuerda que los 2 pilares de toda WPA son el manifiesto web y el Service Worker, donde la labor de este último recae en orquestar los procesos necesarios para que todo ande _viento en popa_.

Si estás trabajando con <abbr title=“Create React App” > CRA </abbr> crea 1 archivo en /SRC (o donde quieras :v) con el nombre service-worker.js. Allí iremos pegando los siguientes fragmentos de código.

### Imports y Claim para Worker

¿Recuerdas que instalamos ciertos módulos de workbox?
Aquí es donde entran en juego. El ClientsClaim sirve para brindar control a algún service worker.

```javascript
/* eslint-disable no-restricted-globals */
import {clientsClaim} from "workbox-core";
import {ExpirationPlugin} from "workbox-expiration";
import {precacheAndRoute, createHandlerBoundToURL} from "workbox-precaching";
import {registerRoute} from "workbox-routing";
import {StaleWhileRevalidate} from "workbox-strategies";

clientsClaim();
```

### To Cache or not to cache

Una WPA funciona “mejor” cuando guardamos en memoria caché los recursos de la aplicación. Puedes no cachear recursos, pero aún así deberás de declarar self.\_\_WB_MANIFEST. En este fragmento de código puedes ver cómo hacer ambos caminos.

```javascript
// Puedes desactivar el precaching reemplazand esta línea
precacheAndRoute(self.__WB_MANIFEST);
// por esta otra:
// const desactivarPrecache = self.__WB_MANIFEST;
// para más info: https://cra.link/PWA
```

### Estructura App-Shell

<blockquote>Una arquitectura de shell de aplicación (o shell de app) es una forma de crear una Progressive Web App que se carga al instante y de manera confiable en la pantalla de tu usuario, en forma similar a lo que ves en las apps nativas.

La "shell" de app es la mínima cantidad de HTML, CSS y JavaScript requeridos para activar la interfaz de usuario, y cuando se almacena en caché sin conexión puede asegurar un rendimiento instantáneo y de alta confiabilidad para los usuarios en las visitas repetidas. De esta manera, la shell de la app no se carga desde la red en cada visita del usuario. Solo se carga el contenido necesario de la red.
Para apps de una sola página con arquitecturas con mucho código JavaScript, una shell de app es un enfoque acertado. Este enfoque se basa en almacenar la shell agresivamente en caché (utilizando un service worker para lograr que la app funcione. Luego, el contenido dinámico carga cada página a través de JavaScript. Una shell de app es útil para enviar el HTML inicial a la pantalla en forma rápida y sin utilizar una red. </blockquote>

```javascript
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({request, url}) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /\_, skip.
    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);
```

### Últimos ajustes

Por último, nos defendemos contra rutas que no estén en caché y nos preparamos para futuros ajustes al service worker:

```javascript
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({url}) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({maxEntries: 50}),
    ],
  })
);
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
```

## 6 Registro del Service Worker

Hay 2 maneras de proceder con el Service Worker: registrándolo o no haciéndolo.

Si se registra, lo que sucederá es que la aplicación cargará de manera más rápida con cada visita subsecuente del usuario. Esto gracias a una poderosa estrategia de caché. Además, es necesario registrar al worker si se desea tener acceso offline a la aplicación.

La desventaja recae en que el usuario no verá modificaciones a la aplicación sino hasta haberla cerrado completamente y vuelto a abrir.

Pero antes de entrar en esa decisión, hay que crear un archivo llamado _serviceWorkerRegistration.js_ y allí colocamos el siguiente código (si estás leyendo esto en celular sería un buen momento para cambiarte a PC)

```javascript
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);
        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://cra.link/PWA"
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://cra.link/PWA."
              );
              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log("Content is cached for offline use.");
              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {"Service-Worker": "script"},
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
```

Ahora que tenemos el archivo creado, dirijámonos a index.js (el punto de entrada de tu aplicación) e importemos el archivo de registro de la siguiente manera:

import \* as serviceWorkerRegistration from "./serviceWorkerRegistration";

Ahora tenemos 3 opciones para el tema de la PWA.

No registrar el worker y no tener modo offline
Registrarlo y tener el tema del “cacheo”
Registrarlo con modificaciones

Para la primera opción basta con añadir al código:
serviceWorkerRegistration.unregister()

Para la segunda: serviceWorkerRegistration.register()

Y para la tercera:

```javascript
serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({type: "SKIP_WAITING"});
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});
```

## 7 Descargar PWA

Dependiendo del navegador y dispositivo recibirás una notificación que te indique cómo descargar la app desde el celular. Si estás en PC podrás hacerlo a través de un icono junto a la barra de direcciones. Y si estás en safari no tendrás mucho aviso. ¿Jode, no?

Si deseas tener un botón claro y directo para descargar la aplicación puedes guiarte del siguiente código.

### Escuchar evento de instalación

Añadimos un evento a la ventana que nos indica que la app está lista para instalarse. Guardamos esto en un estado (true/false), así como guardamos también el evento en el objeto de ventana para acceder a él más adelante.

```javascript
const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);
```

### Botón de instalación de PWA

Ya que guardamos el evento en el objeto de window, podemos acceder a él y sus propiedades desde un botón con la siguiente función como evento de click.

```javascript
async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}
```

## 7 PWAs con Gatsby, Next y Vite

Si utilizas alguno de estos frameworks/herramientas el proceso es relativamente similar. Con la diferencia de que no creas/modificas el manifiesto y service worker de forma directa. Sino que utilizas alguno de los plugins oficiales de cada plataforma:

Gatsby: gatsby-plugin-manifest para el manifiesto y gatsby-plugin-offline para el service worker.
Next: https://www.npmjs.com/package/next-pwa para ambos
Vite: https://vite-plugin-pwa.netlify.app/ para ambos

## Conclusiones

Vaya que ha sido un tutorial largo, pero espero que te haya servido.
¡A crear aplicaciones web progresivas! :v
