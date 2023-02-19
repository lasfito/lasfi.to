---
type: tutoriales
slug: crea-ventana-modal-popup-html
enlaceyt: https://youtube.com/embed/ZMhEVSvSwwk
date: 2022-04-28T19:17:37.924Z
title: Crea una Ventana Modal (PopUp) con HTML
metaDescription: "Aprende cómo crear una ventana modal estilo pop-up responsiva
  en unos cuántos minutos gracias a la etiqueta Dialog #html #css #javascript"
tag:
  - HTML/CSS
  - Desarrollo 101
autor: Adrián Salgado
introThumbnail: "Aprende cómo crear una ventana modal estilo pop-up responsiva
  en unos cuántos minutos gracias a la etiqueta Dialog "
keyword: ventana modal html
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/33-ventana-modal.png?alt=media&token=3e820aba-f72c-4291-be92-e3b0cc20074b
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo crear una

ventana mod al estilo pop de manera

rápida y sencilla si no conocen las

ventanas modal es como esta que en

pantalla es una ventana a un elemento

cuyo objeto es obtener toda nuestra

atención por ello es que número uno se

sitúa por encima de todo el contenido y

número dos el contenido que está detrás

se oscurece o se saca de foco con varios

efectos y bueno si les interesa aprender

cómo conseguir este efecto acompáñenme

\[Música]

vale y ya que estamos aquí notarán que

tengo cierto contenido html tengo un

encabezado unos cuantos párrafos

tengo un botón que dice abrir modal que

es estar acá el cual tiene por ahí de

dtn abrir modal muy importante y tenemos

un día cuyo haydee es modal y dentro del

cual tenemos contenido y también dentro

de este día modal tenemos un botón que

dice cerrar modal con haití de bt n

cerrar modal todo esto nada más es el

preámbulo es la preparación y ahora como

creamos un modal en la antigüedad en

tiempos anteriores lo que tenía que

hacer era precisamente esto tener un

beat y modificarlo con ccs modificar si

se mostraba o no su visibilidad la

opacidad de alguna cava por encima en la

posición juárez con absolutos jugar con

el set a index era todo un lío por

fortuna hoy día existe una nueva

etiqueta html que viene a facilitar todo

este proceso

es lo que tenemos que hacer es cambiar

este día por la nueva etiqueta la cual

es the world ok y ahora si cambiamos

esto notarán que mi contenido aquí el

modal desaparece y por defecto así se ve

el comportamiento si queremos que se

muestre este modal este elemento dialogó

lo que tenemos que hacer es pasarle una

propiedad que diga open cuando le

pasamos esta propiedad cuando este

atributo se muestra pero se muestra como

como dentro del flujo no se muestra en

estilo modal no se muestra en estilo pop

pop si queremos hacer esto que se

muestre por encima y que

obtenga nuestra total y completa

atención lo que debemos hacer es

deshacernos de esta de esta propiedad en

html e irnos

javascript ok yo aquí en este archivo

javascript estoy declarando estoy

trayendo mis elementos tengo aquí vtn

abrir modal vtn cerrar modal y tengo

modal todos entonces los traigo a través

de los irish que definí en mi html ya

que lo que vamos a hacer como es que

vamos a mostrar este modal de forma pop

pop muy sencilla lo que haremos es vamos

a agregar un evento a este botón de acá

diciendo algo como btn abrir modal punto

at event listener vamos a escuchar todos

los clics y por función le vamos a pasar

una función de flecha que ahora que

queremos que suceda cuando la gente haga

clic aquí queremos que se muestre moda

como lo hacemos muy sencillo

estos elementos de dialog tienen ella

vienen preconfigurados con ciertos

métodos los cuales podemos utilizar uno

de ellos es show si yo lo hago aquí le

pongo show

lo que va a pasar es cuando yo haga clic

por acá se va a mostrar tal y cual como

lo hicimos con la propiedad de opel ok y

ahora si queremos que se muestre en modo

pop cambiamos show pre show modo ok y

ahora cuando ya clic por acá se va a

mostrar por encima y como pueden ver

trae por defecto ciertos estilos ya nos

trae un borde ya nos trae acá nos

oscurece un poquito el contenido de

atrás y esto viene por defecto y ahora

sí quiero cerrarlo como lo hago de la

misma manera vamos a añadir un evento a

este botón diciendo algo como btn cerrar

modal punto

maribel y sener

y de igual manera vamos a escuchar los

clics y de igual manera vamos a pasar

una función de flecha dentro de la cual

a modal vamos a utilizar su propiedad de

close ok esto ya lo trae por defecto

entonces ahora puedo venir acá y abrir

modal y puedo hacer click en el botón y

cerrar modal y ahora no solo ya viene

con estos métodos sino que además

fíjense por defecto ya está escuchando

ciertas teclas como la tecla de escape o

skype si presiona la tecla de escape el

modal se cierra automáticamente entonces

esto es uno de los beneficios de esta

nueva etiqueta ese nuevo elemento bailo

y ahora que tanto puedes personalizar lo

podemos personalizarlo casi tanto como

deseemos por ejemplo notarán que

y nos pone de fondo un color que no es

lo suficientemente fuerte en mi gusto lo

que podemos hacer es acceder ojo el

elemento de diálogo tiene un pseudo

elemento llamado background entonces

podemos utilizar este pseudo elemento

llamado back drop para

y estilizar esta capa que está entre el

contenido y el modal y yo podría por

aquí por ejemplo cambiar el background

\[ \_\_ ] pasarle un rgb a rgb a con 0 0

0.55 y ahora qué va a suceder es que

esto acá cambia de medio que hay que

tener en cuenta es que este modal por

defecto ya nos trae

configurada la posición fíjense que por

defecto viene centrado en x y en

bastante genial pero aquí es algo muy

curioso ahora mismo yo tengo dos líneas

de contenido gay y se ve bien pero qué

pasa si en el contenido del modal qué

pasa si aquí en lugar de tener esto acá

tenemos

más contenido

ahora cuando yo abra el modal se me

dispara se me expande y ya no tengo ya

no tengo estos espacios en blanco

entonces los menciono para que lo tengan

en cuenta ya que podrían hacer aquí por

ejemplo es el buen modal

agregarle por ejemplo un max with the a

lo mejor 50 caracteres no algo así para

asegurarnos de que este comportamiento

no suceda sin importar cuánto contenido

tenga en su interior

y ahora por último que más hay que saber

acerca de de este de este tipo de

elementos de este modal de este pop lo

que sabemos es que se puede cerrar con

la tecla escape o que lo podemos cerrar

accediendo a este evento a este método

de close método que tenemos aquí close y

sound moral que más debemos saber por

último debemos saber que si nosotros

agregamos un formulario al interior que

tengo este formulario vamos a tenerlo

para acá vamos a quitarle este botón y

vamos a ponerle el formulario vamos a

quitar este aquí también fíjense que si

yo abro este modal tengo este formulario

ok

otra manera de cerrar estos modales

además de con escape además de

accediendo al método de close otra

manera es con un formulario que tenga

por método

diálogo o en inglés 'daily ok si su

formulario tiene este método queremos o

yo por acá llenó estos datos

bueno me va a marcar el root por el

correo número 1

pero han sido ya en estos datos y le doy

a enviar el formulario en el formulario

el modal se cierra automáticamente pero

esto solo funciona sin método tengo de

algo que pasa si le quito el método de

diálogo y abro el modal y lo vuelvo a lo

vuelvo a enviar que vamos a ponerlo otra

vez

estoy acá lo que va a pasar es que me va

a marcar pero entonces ojo tengan

cuidado con agregar su netbook igual a

dialogo vale y esto es todo lo que

tienen que saber como pueden ver es muy

muy sencillo elemento diálogo los

traemos acá y accedemos a estas

propiedades ya definidas o métodos show

morado y close entonces bastante bien

bastante genial ya lo tienen es así como

pueden crear estas ventanas modales y

cuando por último antes de irme si les

ha gustado el vídeo regálame un me gusta

y si quieren aprender cómo cambiar la

opacidad de una imagen de fondo sin

cambiar el texto que está encima de esa

imagen de fondo pueden revisar este

estudio que tengo aquí que verse en

pantalla para que aprendan cómo hacer

pero mientras tanto me despido y nos

vemos en el próximo vídeo hasta luego
