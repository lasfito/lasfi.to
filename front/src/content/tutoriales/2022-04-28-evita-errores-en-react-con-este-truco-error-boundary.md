---
type: tutoriales
slug: truco-react-error-boundary
enlaceyt: https://youtube.com/embed/AkFrnjI3jv0
date: 2022-04-28T16:46:13.375Z
title: Evita Errores en React con este Truco ( Error Boundary )
metaDescription: "Aprende cómo evitar que tu aplicación se rompa por un error
  gracias a los Error Boundaries de React #tutorial #webdev #React  "
tag:
  - React
  - Desarrollo 101
autor: Adrián Salgado
introThumbnail: "Aprende cómo evitar que tu aplicación se rompa por un error
  gracias a los Error Boundaries de React "
keyword: error boundary react
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/27-react-error-boundary%2F27-error-boundary.png?alt=media&token=e16baa8a-f4ea-40b2-a321-6db7ef4c02df
---

## Transcripción

hola chicos que tan bienvenidos el día

de hoy les voy a mostrar un truco caso

de raid que número uno casi nadie conoce

y número dos les va a salvar la vida en

más de una ocasión y es que seguramente

les ha pasado que tienen una aplicación

muy bonita en funcional preciosa pero

que en uno de sus componentes hay un

error que ustedes no previeron o que

está fuera de su control y ahora lo que

va a ocurrir es que este componente al

entrar en error nos va a [ __ ] toda la

aplicación todo se crea y todo se va

para abajo y obviamente esta es una

pésima experiencia de usuario porque el

usuario no tiene ni puñetera idea de qué

es lo que ocurrió y es por ello que el

día de hoy les voy a mostrar qué es lo

que tienen que hacer para atrapar estos

errores en un solo componente evitar que

se propaguen y además darle una muy

buena experiencia de usuario a quienes

utilicen su aplicación y ojo que quien

estoy ocupando ningún try ni ningún cage

sino que aquí vamos a ver trabajando con

error wanderers y si les interesa

aprender qué es lo que son cómo

funcionan acompañamiento

[Música]

antes de comenzar recuerden que

encuentran el código de este tutorial en

la descripción del vídeo junto con todos

mis tutoriales también recuerden que

pueden suscribirse a mi boletín para

recibir cada semana consejos como estos

del día de hoy pero bueno vamos a echar

un vistazo a la aplicación la aplicación

es muy sencilla tenemos aquí un app el

interior de obtenemos un componente que

se llama alfa y al interior lo

encontramos a brabo el interés de brabo

encontramos a charly y delta y al

interior de delta encontramos a delta

juniors y es aquí en delta juniors donde

se va a presentar un error obviamente

que yo lo estoy simulando y aquí estoy

simulando este error el cual le estoy

asignando código 43 ok y ahora lo que

pasaría es que este componente está el

interior del taller integrado y dentro

del paquete ahora lo que va a pasar es

que cuando un componente tenga error

este error se ha propagado por todo el

árbol de componentes de ryan y entonces

si no hay nada que detenga a este error

la aplicación se va a detener que por

ejemplo ha sido llegó a tres se detiene

se vuelve blanca y no podemos hacer

absolutamente nada salvo recargar la

página ahora la pregunta es que es un

error boundary y cómo es que nos pueda

ayudar con este tipo de situaciones con

errores que no sabemos que está en

nuestra aplicación o que están fuera de

nuestro control después es muy sencillo

es sencillo un componente el cual tiene

ciertos métodos en su interior ciertas

funciones las cuales nos permiten

detectar estos errores y nos permiten

evitar que los errores se propaguen

hasta el punto de detener nuestra

aplicación y son muy sencillos de usar

normalmente son muy muy fáciles puede

entrar un solo componente de wandering y

con eso ya están salvando su aplicación

y les va mostrar cómo es que se ve uno

de ellos aquí lo tengo yo lo llamado

salvavidas y como pueden ver es un error

wandering es básicamente un componente

pero ojo ojo que para crear un error

banner y nuestro compone tiene que ser

de tipo clase no puede ser un componente

funcional sino que debe ser de tipo

clase la lógica o el funcionamiento en

monterrey es muy sencilla comenzamos con

un estado en el cual estamos vigilando

si existe algún error luego a través de

algunos de los métodos modificamos este

estado y dependiendo de si hay algún

error o no mostramos una lista de

emergencia por ejemplo hubo un error ok

pero bueno esto es nada más un breve

vistazo y ahora la isleña con el er

banderín es como su nombre lo indica van

der significa al límite o frontera o

borde la idea con esto se normalice es

que vamos a delimitar hasta donde

queremos permitir que se propague un

error por ejemplo aquí vemos o yo quiero

que el error no pase de este componente

de este delta juniors pues en este caso

lo que tendría que hacer es buscar dónde

estoy renderizando adeuda juniors y en

este caso lo estoy mostrando aquí al

interior de delta y lo que voy a hacer

es envolver a delta juniors con miguel

urbán rico llamado salvavidas lo

envuelve y ahora lo que va a suceder es

que este este componente este salvavidas

va a atrapar el error de delta juniors

tan pronto como del daño falle lo pueden

ver aquí en acción aquí lo otro pero

ahora qué pasa si yo no yo no sé dónde

va a ocurrir el error ok lo mejor puede

ser lo que falla es delta en este caso

yo tendría que prever que del gana

fallar y tendría que ponerme el banderín

por afuera de delta por ejemplo aquí lo

voy a quitar y vamos a ponerlo en

charlie no en bravo aquí en bravo estoy

renderizando a delta lo que voy a hacer

entonces es importar salvavidas

desde

salva vidas

y ahora lo que voy a hacer es envolver

adenta por ejemplo

y por ejemplo si me vengo para acá ahora

fíjense que leer el error banner y está

afuera por lo tanto si delta juniors

falla se va a propagar a delta y cuando

intenté salir de delta el error el error

gamer que está aquí alrededor de delta

lo atrapa fíjense esto falla me corrompe

a delta y lo atrapa aquí pero qué pasa

se lo pongo más afuera que pase lo pongo

afuera de obra o por ejemplo pues en

este caso vamos a quitarlo nos venimos a

alfa y aquí en alfaz donde estoy

renderizando a brabo vamos a importar el

salvavidas desde y vamos a envolver a

bravo con salva vidas y ahora fíjense

que el error van der y está hasta fuera

de brabo está aquí este este es mi error

banner y alrededor de bravo por lo tanto

sin él está júnior falla se va a

propagar a delta se va a propagar a

bravo y aquí donde está al borde lo va a

detener observen

pero fíjense que se propaga y me

corrompe todo lo demás entonces quizá lo

ideal sería por ejemplo poner un error

vander y afuera de cada uno de estos

quizás su sería lo idóneo o quizás sería

lo idóneo poner un error bandera en los

componentes a los cuales ustedes quieren

que definitivamente no se estén

corrompiendo lo mejor a quien charlie

sólo muestro información que no es útil

y no me importa que esto se corrompa y

por eso lo pongo hasta fuera de brawn

pero bueno esto ya queda en discreción

de ustedes y ahora mostrar un vistazo a

cómo podemos crear el error banderín

desde cero vamos a crear un archivo lo

vamos a llamar error

llamarlo un error punto j ok ahora vamos

a importar lo queremos importar react

desde rían ok y lo segundo es que este

es un componente de tipo clase por lo

tanto vamos a comenzar con la palabra

que más vamos a dar el nombre en este

caso lo hemos llamado error el cual

diremos que extiende react

compongo y vamos a abrir llaves ok al

interior de toda la clase estamos lo

primero un constructor vamos a

comenzó a nuestro constructor en cueva a

recibir props el cual al interior vamos

también a llamar al súper el cual

también recibe prob super es el

constructor de nuestra clase original no

vendrá mucho detalle pero vale la pena

mencionarlo y también aquí mismo dentro

del constructor es donde vamos a definir

nuestros estados ustedes puede tener

cualquier estado que desee en frío

recomiendo tener dos el primero un

estado en el cual vamos a estar

vigilando si hay algún error o no y un

segundo estado en el cual guardemos el

mensaje de error para mostrar al usuario

ok esto lo primero y ahora habiendo

obtenido este constructor con el estado

más importante es este estado de aquí lo

que sigue es reconocer el error o que ya

hay dos formas hay dos métodos para

atraparlo el primero es este de aquí que

es un método estático el cual se llama

head y wright state

el cual recibe como argumento un un

error este es el método uno es la

primera manera en la cual pueden

modificar su estado de eeuu y ahora aquí

lo que tienen que hacer el interior de

este método estático es retornar o bueno

debe volver mejor dicho un cambio de

estado que lo que vamos a hacer es

recibimos el error y ya que lo recibimos

primero modificamos nuestro estado para

decir sabes que si hay error ya lo

atrapamos lo cambiamos al tour un

segundo que podrían hacer esto es

opcional es habiendo otro por el error

guardar el mensaje en nuestro estado de

mensaje error este es el primer método

la segunda manera es con componente de

caché el cual también recibe un error

como argumento como les dije ambos

métodos sirven por igual y aquí podrían

hacer lo mismo que podrían este y

podrían cambiar el estado hoy que

podrían decir de ese punto este punto

tiene rol o podrían cambiar a futuro ok

aquí podrían cambiarlo al igual que acá

como les dije cualquier método funciona

pero para este ejemplo lo que voy a

hacer es simple y sencillamente imprimir

en pantalla el mensaje

vale cualquiera de los dos métodos

funcionan y ahora una vez que ya

cambiamos nuestro estado les vamos a

ansiedad de componente de error que hay

de 2 que puede renderizar dos cosas en

el primer escenario donde no hay error

donde no ha pasado nada queremos que

render hice los componentes normalmente

los componentes de su aplicación sin más

y en el segundo escenario donde si hay

error queremos que aprender hice una

vista de error una vista de emergencia y

para esto vamos a ocupar un condicional

a comprender lo que haremos es revisar

si el estado ha cambiado por ejemplo

aquí tengo un id donde revisó si el

estado de disquete se refiere a este

componente si el estado de componente si

el estado de tiene error es verdadero

entonces en render quiero que me render

hice esta interfaz de emergencia que yo

le pongo hubo un error y fíjense que

aquí en párrafo estoy mostrando el

estado de mensaje error el estado que el

mensaje que guarde aquí con este método

el primero ok y aquí pongo un botón que

dice recargar la página y hasta no hay

más esto es en caso de que si hay un

error caso contrario si usted es falso

lo que vamos a devolver en render es

simple y sencillamente lo que está al

interior de mi error banner por ejemplo

aquí

dónde estaba

aquí por ejemplo en salvavidas lo que

está el interior como no ha habido

renueva renderizar brabo ok y es lo que

estamos haciendo aquí el drift punto

props punto childen childen se refiere a

todos los componentes que están al

interior ya lo que tengo que hacer con

este error exterior bandera que llamado

error lo bueno error simple y

sencillamente lo exportó para que esté

disponible en otros lados

y lo utilizó como cualquier otro

componente envolviendo donde quiera

atrapar por ejemplo nostra para aquí

hasta afuera de alfa vamos a vamos a

importar primero error y vamos a

envolver alfa con este error ok donde

vamos a quitar este dakar

y de momento el único nombre que tengo

está aquí en alt por lo tanto delta

juniors y tiene error se va a propagar

iba a ser atrapado hasta acá fíjense

hubo un error código 43 ok y es así como

funcionan los airbag gris obviamente

este ustedes pueden crearse algo más

personalizado aunque funcionan las

necesidades de su aplicación pero la

idea es quienes utilicen si pueden

utilizarlo sin cada uno de los

componentes lo cual no sería que sea lo

más óptimo porque terminarían con

muchísimos muchísimos componentes

envueltos o no dentro de los otros

además de que ojo el banderín no es una

solución mágica porque hay ciertos tipos

de errores que no logran atrapar y de

hecho si ustedes revisan la

documentación de riad

podrán ver que los errores que no

atrapas son errores de tipo evento por

ejemplo o errores de código asíncrono

por ejemplo o errores que vengan desde

el renderizado de su servidor en caso

que utilicen por ejemplo en next o

remakes tus frameworks de fusta pues no

va a atrapar este tipo de errores

obviamente la idea es que conozcan esta

función del urban droid la integren en

su conocimiento y la apliquen en sus

proyectos y aplicaciones de forma útil

vale cuando construyamos el vídeo del

día de hoy si les ha gustado arreglando

me gusta y verán en pantalla más

contenido de mi canal para que sigan

explorando y aprendiendo y mejorando

como desarrolladores nos vemos
