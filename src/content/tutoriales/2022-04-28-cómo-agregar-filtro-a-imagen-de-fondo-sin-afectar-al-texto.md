---
type: tutoriales
slug: filtro-imagen-fondo-afectar-texto
enlaceyt: https://youtube.com/embed/RUA_x_R5Eng
date: 2022-04-28T17:01:29.635Z
title: Cómo agregar filtro a imagen de fondo SIN afectar al texto
metaDescription: >
  Aprende cómo agregar filtro a tu background-image sin alterar el
  contenido  (Hero Image) con ayuda de pseudo elements #tutorial #webdev #css
  #html
tag:
  - HTML-CSS
  - Desarrollo 101
autor: Adrián Salgado
introThumbnail: Aprende cómo agregar filtro a tu background-image sin alterar el
  contenido  (Hero Image) con ayuda de pseudo elements
keyword: overlay div css
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/28-overlay-div-css%2F28-overlay-div-css.png?alt=media&token=5d705980-91e3-4fef-821c-70e1ebc779b6
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo agregar un

filtro a un elemento en este caso este

día con clase padre sin que dicho filtro

afecte al contenido del elemento en este

caso no queremos que afecte al contenido

a los hijos que son este h

y esto con la finalidad de crear el

famosísimo giro image o libro banner el

cual consiste de una imagen en gigante

que al interior tiene un texto en

fíjense que este texto es difícil de

leer no es muy legible debido a que el

contraste entre el texto y el fondo no

es el adecuado y esto podría ser muy

sencillo ustedes podrían pensar yo

podría pensar que basta con venir aquí

al padre al dif y agregarle algo como

por ejemplo filter y le cambiamos su

brillo en algo como punto 33 por ejemplo

y aquí lo que va a ocurrir es que

efectivamente este filtro de brillo se

aplica al dif al padre pero fíjense que

mi texto blanco ahora tiene menos

contraste menos brillo y sucede que a

pesar de que el hijo

tiene ningún filtro el hijo termina

irremediablemente

heredando esta propiedad de su padre

entonces qué podemos hacer nosotros

podríamos a bueno pues a lo mejor poner

acá y la agregó un zeta index para que

esté por encima del filtro no fue

sorpresa esto no funciona que podemos

hacer entonces para que el texto el hijo

sea completamente blanco y se salte este

brillo esta regla de brillo

[Música]

bueno lo que podemos hacer es muy

sencillo lo que podemos hacer es

trabajar con pseudo elementos y que es

un pseudo elemento se preguntarán en

caso de que no los conocen un segundo

elemento es un elemento más como un dip

un sección online un elemento h temas de

cualquiera con la diferencia de que este

elemento sólo existe en el css es decir

no se genera un elemento más aquí en el

html y les voy a mostrar para crear un

pseudo elemento en este caso yo quiero

uno que sea exactamente igual que el de

iu en el cual voy a trabajar esta parte

del filtro para ello voy a venir aquí a

mi css y dicen que quiero uno que afecte

o que replique o que se coloque junto al

día de padre pero cuando selecciona

padre y luego colocó dos en dos dobles

puntos se me fue el nombre ahorita

grabar el vídeo este y después vamos a

colocar bien sea after

de fort con after o con mi ford es que

indicamos un pseudo elemento y ahora

como funciona muy sencillo firma tenemos

que indicar donde queremos que esté este

pseudo elemento y que hay un problema

porque el navegador lo que va a hacer es

que iba a renderizar las cosas aquí en

pantalla conforme las vaya leyendo en el

html pero si aquí no hay html como sabrá

dónde colocarlo pues sucede que para

este tipo de pseudo elementos somos

nosotros quienes tenemos que indicar la

posición colocándole el atributo o la

propiedad de posición absoluta y ustedes

sabrán que cuando utilizamos la posición

absoluta tenemos que anclar o tenemos

que darle una referencia a este elemento

con respecto de dónde va a comenzar a

tomar sus medidas de origen para ello si

queremos que tome como referencia al

padre al padre le daremos posición de

relax y ahora lo que va a ocurrir es que

este segundo elemento entender cuestión

absoluta va a buscar al elemento

composición relativa más cercano ahora

mismo lo más cercano es el padre y lo va

a tomar para saber donde comenzar a

existir y ahora no basta con esto

también tengo que decirle bueno toma

este como referencia pero toma como

referencia que queremos que haya 0

píxeles de diferencia con respecto a su

lado superior y queremos también que

haya 0 píxeles de diferencia con

respecto a su lado este izquierdo lo

mismo para el lado derecho y lo mismo

para el lado inferior de modo que aquí

lo que ocurre es que estamos indicando

que este pseudo elemento queremos que

esté prácticamente del mismo tamaño que

éste dif vale y ahora lo que sigue es

quitar este filtro de brillo lo que

sigue es pasarle el filtro a este pseudo

elemento y ahora podrían jugar con

filtros podrían jugar con otras

propiedades pero lo más común y lo que

verán muy seguido en código allá afuera

es que para este tipo de usos se utiliza

un background color y aquí jugamos con

colocar bien sean negros si sería 000 o

blancos y se juega con la opacidad de

estos colores en este caso queremos que

esté oscuro vamos a ponerle con opacidad

punto 33

guardamos y fíjense que no ocurre nada

no se está aplicando este filtro y es

que lo último que tenemos que saber es

que al ser pseudo elementos todo

elemento puede tener contenido a su

interior y lo mismo un pseudo elemento

por ello es que aquí queremos obtenemos

que obligatoriamente indicar cuál va a

ser el contenido nosotros no queremos

contenido vamos a colocarle doble

comilla y ahora se aplica el filtro y

ahora notarán que si se aplicó el filtro

pero nuestro texto sigue estando oscuro

está pasando me van a decir hoy me

mentiste y dándole sentido a lo que

ocurre es que por defecto cuando tenemos

texto y tenemos elementos relativos

involucrados el texto se a colocar por

debajo es así como funciona el sistema

de deposición en z del navegador porque

tienen dos opciones la primera es ahora

sí colocar un zeta index a lo mejor de

tres el texto ya se pone por encima o la

segunda es si no queremos arruinar a

nuestros z index de otros elementos aquí

podríamos venir y decir sabes que este

texto también tómalo como relativo y

entonces ya se va a colocar por encima

como de este sistema de z index con

relativos o que ya lo tienen ahora antes

de terminar quiero que sepan que hay un

atajo para esto acá no verán que colocar

estas cuatro propiedades en cero podemos

colocar un set colocarlo en cero y el

efecto es el mismo y se significan todas

las cuatro medidas vale y por último

quiero que organicemos el contenido de

la que tiene el marcado de esta página

para que vean qué está pasando con este

sea un elemento si es que existen css

pero no existen html cómo es que

funciona eso pero y vamos a inspeccionar

esta página y vamos a quiero que vean

aquí el que el con el html aquí tenemos

si yo abro esto aquí tenemos el body y

fíjense que en body solamente tenemos un

día que es lo que estamos marcando acá y

tenemos un script para para el java sur

pero solamente tenemos un 10 es decir

tiene de entrada este padre me forest

ese elemento pareciera que no existe si

yo extiendo este día notarán que al

interior tenemos el h1 que aquí nos lo

marca y tenemos antes de la h1 tenemos

algo que dice el doble 2 de fort y es

aquí donde se está insertando este

pseudo elemento pero a pesar de que

aplica para el dif fíjense que no dice

aquí de no no tiene este los ángulos

estos agudos para para marcar elementos

solo dice dos puntos y por ok y aparece

antes del contenido antes del h uno del

liv porque le hemos indicado que es

before antes si nosotros con lo que

hacemos por ejemplo after dice después

notarán que ahora el ceo de elementos se

coloca después del contenido del día y

al hacer esto ahora el filtro ya está

afectando al texto por ello es que es

importante dependiendo de qué uso le

quieran dar cuál es su finalidad que

utilicen sabiamente o conscientemente

tanto el after como el 'big four'

tomando en cuenta el contenido del

elemento en el cual quieren colocar a

utilizar estos pseudo elementos bueno

con ello terminamos el vídeo del día de

hoy espero que les haya sido de utilidad

de ser así regalando un me gusta y nos

vemos en la próxima canción hasta luego
