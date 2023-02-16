---
template: tutoriales
url: como-crear-pdf-en-react
enlaceyt: https://www.youtube.com/watch?v=D05ptoe7brY
date: 2022-02-21T23:55:43.386Z
title: Crea, Visualiza y Descarga PDFs en React
tag:
  - React
  - Misceláneo
autor: Adrián Salgado
publicoObjetivo: 'Conocimientos básicos en JavaScript son necesarios para este tutorial. '
keyword: crear pdf en react
thumbnail: /assets/10-react-pdf.png
---

\## Transcripción automática

hola chicos que tal bienvenidos aseguran

3 ha pasado que tiene alguna aplicación

que genera contenido dinámico piensa

porque ustedes lo crean o bien sea

porque lo jalan desde alguna api y

además de mostrarlo en pantalla

seguramente han querido mostrar en algún

documento pdf en el tutorial de ves

mostraré cómo hacer esto cómo tomar esta

información meterla en una vista pdf o

además si así lo desean permitir al

usuario directamente sin la vista

descargar el documento y que dicho

documento se vea exactamente igual a la

información que están renderizado se les

interesa acompáñame en el vídeo de hoy

\[Música]

antes de comenzar les recuerdo que como

siempre encuentran el código de este

tutorial en mi repositorio de tutoriales

los hicieron a tutoriales y siéntense

libres de copiar modificar tomar que sí

vayamos a nuestro editor en mi caso yo

trabajaré con beats code voy a abrir una

nueva terminal y lo que haré es

dirigirme al escritorio y desde ahí voy

a crear una copia del famosísimo fui a

riad lo llamaré pdf tutorial damos entre

los ejecutamos y mientras el descaro

instar a todos no olviden darle me gusta

y escriben los comentarios que

tutoriales gustaría ver en este canal

una vez que éste haya terminado de

instalar de este proyecto está esta

copia de declarar lo queremos es acceder

al folder concede pdf este y desde aquí

vamos a instalar dos dependencias más la

primera es la dependencia para los pdf

que estaremos utilizando la cual es

estar aquí urak y un pdf punto o hereje

aquí encuentran el comando para

instalarla entonces nos regresamos lo

pegamos y lo instalamos adicionalmente y

esto es opcional la segunda dependencia

yo voy a estar trabajando con woods

track para ryan entonces lo que haré es

venir acá hacer clic en get started

tomar el comando de instalación

este instalarlo en este mismo folk del

folk der de nuestro proyecto muy

importante fíjense siempre que la

terminal les indica que están en el

folder del proyecto una vez instalada la

dependencia de pdf y la dependencia de

butcher lo que quiere es abrir la

carpeta desde escritorio aquí está y

antes de comenzar voy a tomar los

estilos para buscar que están justo aquí

estos los copió y los voy a pegar en

index

no perdón a quien index

entonces ya tenemos nuestro proyecto si

todo ha ido bien y abrimos una terminal

y corremos en plan start esto nos va a

ejecutar el ambiente de desarrollo y

debiéramos ver la clásica pantalla de

bienvenida de brad y aquí lo tienen y lo

que vamos a hacer es limpiar un poquito

proyecto porque esto trae muchísimo

muchísimo relleno entonces voy a

eliminar el estilo de la app la prueba

el estilo de index el logo los reportes

de web va a ir ao esto de aquí y debía

quedarnos únicamente up index yo que

desde app vamos a eliminar lo que

hayamos borrado previamente vamos a

eliminar todo este rellenito y vamos a

dejar que les parece una noche 1 y hola

qué tal pondría que el mundo pero hola

mundo hola bueno pues hoy está muy

trillado chicos dijo que tiene index

también tenemos código muerto por

ejemplo esto de aquí y los web air outs

y esto de aquí abajo muy bien debía

quedarnos únicamente lo de riad lab los

estilos de buscar y si yo me regreso a

mi aplicación y refresco aquí está

muy bien estamos dentro

lo primero que voy a hacer desde aquí es

crear un menú superior este similar que

les mostré en el cual podamos decidir si

queremos ver la vista web si queremos

ver la vista pdf o si queremos simple y

sencillamente descargar el pdf para ello

voy a crear aquí un count que se llame

menú este y desde aquí vamos a

al regresar un elemento nada dentro del

cual vamos a meter tres botones y aquí

ya me está ayudando el copiloto este

primero vamos a importar varón desde

books grande

aquí está entonces dentro de una vamos a

poner tres botones

no va a ser ver este web otro será ver

pdf y un último será descargar pdf muy

bien regresamos a la aplicación y claro

éste no lo insertado vamos a ponerlo

aquí arribita

y debiera haberse nos anima a ver qué

pasó es que aquí me faltó decir que esto

lo que quiere es regresar entonces

metemos está aquí

está acá

ok ahora esto lo que regresa al menú y

aquí debe estar ver web ver pdf y

descargar pdf y se cuando yo le haga

clic en ver web me muestre una

información dinámica aquí en el

navegador para ello vamos a obtener esta

información dinámica vale donde

regresamos aquí y lo que haremos es yo

estar trabajando con una api que genera

poemas aleatorios para ello voy a decir

con es poema set poema es igual a y

usted que inicialmente va a estar en

nube y ahora la idea es que haya una

función que vaya por datos por esta app

y por estos poemas y me los guarde aquí

este y dicha función va a ser más o

menos así tenemos la función fecha poema

que va la app y tomar la respuesta y la

guarda en este estado de puebla esto que

quiero eliminar y luego esta función de

fecha poema es ejecutada al principio

con un giuseppe con dependencia vacía lo

cual indica que esto va a correr al

inicio aquí me dice la pantalla que no

estoy declarando estos dos para ello

vamos a importar react no esté más

reaccionarias y desde aquí mismo también

vamos a jalar el juz state y él

para que no me maten muy bien y hasta

entonces tenemos la función que va por

los datos cada problema lo guardan elfec

lo mete aquí y ahora la idea es que

cuando yo haga clic en el botón de ver

web me muestre la información del poema

aquí para ello me voy a deshacer de esto

y para ello vamos a crear este

componente de vista web entonces aquí en

shorts voy a crear un nuevo archivo este

que se va a llamar vista web punto js

aquí vamos a correr una plantilla normal

y la idea es que este elemento reciba el

poema que le reciba el poema que fuimos

a obtener ese la pista aquí recibe el

poema y la información del poema laver

mostrando en distintas etiquetas por

ejemplo un h1 que va a llevar el título

del poema poema cairo este y ojo ojo que

esta información es bien el nap y que la

información tardé en llegar entonces si

lo dejamos así y le pasamos poema esta

información se la pasamos desde un

principio y en un principio la

información no ha llegado por lo tanto

nos ha marcado error de andy fine para

ello hay que protegernos con un operador

terciario más o menos así y le decimos

si poema existe si podemos ya tiene un

valor verdadero entonces pone con el

título del poema caso contrario si poema

no existe pone unos puntos suspensivos

se pueden poner que no ponga nada

entonces aquí el título y de bajito

vamos a poner este el autor vamos a

poner lo mismo sí bueno existe poner

poema poeta contó name caso contrario

con es puntos suspensivos una imagen y

tiene imagen vamos a obtenerla desde una

vida imágenes aleatorias la cual es yx

un punto fotos diagonal y aquí metemos

las medidas que queremos lleva a poner

600 x 400 después de la imagen vamos

poner un pie de un pie de imagen en una

descripción este medio falsa a mí se me

ocurre vamos a poner aquí una constante

que sea menor en esta constante va a ser

igual a esto aquí un lore nixon o que en

tu estuvo en pie de página y por último

el contenido del poema lo mismo tipo de

malla existe entonces pone el poema

content caso contrario poner los puntos

suspensivos y ya está entonces este

componente de vista web recibe la

información del poema que fuimos a

buscar y una vez que poema haya cargado

ya tenga más información nos va a

renderizar el título del autor y el

contenido en esto vamos a probarlo para

ello aquí desde up vamos a poner

en vista web

y le vamos a pasar por poema el poema

que estamos guardando no es prestado de

la aplicación yo me vengo aquí y aquí lo

pueden ver

este es el título el autor el contenido

y la foto si yo actualizo vean que me

salen los puntos suspensivos carga el

título carga el autor carga contenía

actualizo nuevamente puntos suspensivos

y aquí está lo cual significa que

funciona vale pero notarán que esta

vista web se muestra automáticamente

cuando ya actualizó la página la idea

era habíamos dicho que sólo se viera

cuando hice clic aquí para ello me va

regresar a la aplicación y esto esto lo

dejo aquí y vamos a crear otros dos

estados

bueno que se llame web

a ver web el cual va a ser un estado que

va a estar en falso inicialmente esto lo

duplicamos

vista de web vista pdf

sed ver pdf y la idea es que cuando

queramos ver el componente web cambiemos

ver web a tour con que con este botón de

ver web vale entonces aquí en ver web

haremos lo siguiente vamos a meterle un

clic el cual va a correr una reflexión

que hará lo siguiente

cuando hagamos clic efectivamente vamos

a poner este set ver web

lo opuesto que haya tenido

y set del pdf en falso y aquí vamos a

también cambiar en contenido vamos a

ponerle si

cyber web es verdadero pone ocultar

en caso contrario por mi ver web

o que ya está y ahora la idea es que

esto solo se muestre cuando ver web sea

sea este verdadero para y vamos a poner

ver web es verdadero sí sí con este

componente caso contrario no me pongas

nada regresamos a la aplicación y no hay

nada si hago clic aquí

me muestra en la vista web clic acá me

lo oculta muy bien si yo actualizo se

reinicia y me muestra otro poema debería

ocultar perfecto muy bien está

funcionando ahora la idea es que cuando

yo haga clic en ver pdf me muestre lo

mismo el mismo poema que tengo kimber

web pero me lo muestra una vista pdf y

para ello vamos a realizarnos a nuestra

aplicación esto en el grupo cerrar y

vamos a crear un componente vamos a

poner aquí si ver pdf existe me va a

poner la vista de pdf esta es la idea

entonces vamos a configurar nuestro

botón de una vez este botón de ver pdf

en un clic

vamos a correr una función que haga lo

siguiente

\[Música]

esto lo ponemos así ya está entonces

aquí me lo me lo va a ocultar espérame

tantito

aquí vamos a ponerle una continuación

dinámica ver pdf existe si si vamos a

poder ocultar caso contrario ver

muy bien entonces aquí solo están

jugando con estados esto me lo muestra

me lo oculta me lo muestra me lo oculta

yo tengo este y aprieto este menos

cambia muy bien de momento cuando yo lo

di ver pdf solo me muestra este texto

que dice pdf unidades que nos muestre la

vista pdf pero esto lo tengo como de

manera temporal registra lo ideal o lo

tenemos que hacer es que aquí tengamos

nuestro componente de vista peligro ok

entonces vamos a crear este componente

aquí en source vamos a crear un archivo

que se llame docu pdf punto a js y ojo

la idea es que en dos de efe haya

exactamente lo mismo en vista web ok

esa es la idea entonces lo que vamos a

hacer es tomar todo el contenido de

vista web y ponerlo en pdf porque la

idea es que haya exactamente lo mismo

pero antes de hacer eso quiero que

pongan un joven que el momento esta

vista web está terribles está bellísima

no tienen nada de estilos y antes de

meterle estilos lo que tienen que saber

es que para poder reciclar esta vista

nuevo con el docu pdf lo que hay que

hacer es usar estilos in line ok el

enfoque aquí no son los estilos entonces

quería es copiar eliminar

y pegar este el componente ya conoce

estilos fíjense que es lo mismo pero

tenemos aquí los estilos y 9 dentro de

cada éste está dentro del dif tenemos

estilo inline el lazio no estilo online

la imagen es tiene un line también si yo

me regreso aquí está la aplicación y el

eibar web ya se ve más decente ok

entonces a nuestro componente web

nuestra vista o el últimos los estilos

online o no puedo terminar este mes en

ello y ahora sí todo lo que está en

vista web copiamos venimos a doku pdf y

pegamos porque deberá tener lo mismo

ahora cómo funciona este documento pdf

lo que tienen que hacer es imaginar este

docu pdf como el archivo pdf ok entonces

para ello antes de comenzar vamos a

importar nuestra librería de react pdf

bueno era pdf esta web pdf

este aquí y desde aquí vamos a ir

importando los distintos elementos como

les dije este docu pdf es un archivo un

documento pdf entonces lo que haremos es

envolver todo esto que estamos

regresando lo vamos a envolver en una

etiqueta llamada document

que viene desde aquí ok entonces esto de

aquí y esto de aquí lo vamos a envolver

y ya está pero recuerden que un

documento pdf tiene distintas páginas

entonces lo que haremos es indicarle que

de momento vamos a tener una página

la cual va a envolver esto que estamos

renderizando del pueblo entonces tomamos

este esta página

y lo vamos a envolver aquí hasta tenemos

nuestro documento con una página y su

contenido si el contenido que está el

interior de la página es muy extenso y

se sale de la página lo que esta

librería va a ser es que automáticamente

va a insertar más páginas entonces no

tienen que preocuparse pero aún así si

lo que quieren hacer es tener control

exacto de las páginas y su contenido

aquí lo que debieran hacer es ir

agregando páginas con el contenido de

cada uno pero nosotros no lo haremos así

dejaremos que él se encarga

automáticamente si acaso lo que sí hay

que hacer es indicar qué tamaño debía

tener la página a través de este

próximas 6

a menos que aquí me faltó importar lo

vamos a ponerle importando desde aquí y

ahora sí vamos a pasar le indicarle qué

tamaño queremos desde estáis aquí nos

dice estos tamaños de ahora si son de

méxico este debían saber que el tamaño

carta es muy similar a la 4 en desconoce

cómo se anotan en otros países pero la 4

deberá hacer el el estándar el

tradicional muy bien entonces ya tenemos

nuestro documento con la página que

dejaremos automática en cuanto extensión

ya tenemos el contenido de la página

pero ojo ojo mucho ojo que reactive ya

toda esta librería no trabajan con

etiquetas html lo que break pdf hace es

trabajar con los famosos este elementos

primitivos creo que así se llaman que

son los elementos primitivos que es una

muy buena pregunta la verdad y no sé qué

contestarte son si han trabajado con

ryanair y son los famosos view text

image y demás sino un trabajo con rainer

y no se preocupen es muy sencillo les

muestro que hay que hacer el día vamos a

cambiarlo por un view

todos los textos vamos a cambiarlos por

texto el h1 los párrafos la img y nachi

de html vamos a cambiar por un image de

éste

de react de break pedí entonces que

importamos image y por último

continuamos este p también lo cambiamos

por un texto este br no existe entonces

vamos a quitarlo y éste lo cambiamos por

otro texto es así de fácil ditsch por

views y todo texto lo comemos por text

las imágenes por image y ahora sí

tenemos documento página y contenido con

etiquetas primitivas que estamos

importando desde la librería ahorita se

me olvida esto vamos a cambiarlo por

doku pdf y aquí al final vamos a

exportar

docu

muy bien ya tenemos nuestro documento

pdf chulada estudio no podemos cerrar

esto ya lo podemos cerrar y de vuelta

aquí en la aplicación aquí viene lo

bueno

lo que haremos es importar nuestro

documento pdf y renderizar lo desde

doku pdf

y hasta pero recuerden que ocupe de efe

recibe como argumento el poema o la

información dinámica que estamos

mostrando dentro del vamos a poner que

reciba poema pero ojo muy importante

este docu pdf recuerden que es el

documento el archivo más o menos

entonces si queremos verlo en el

navegador a doku pdf hay que envolverlo

en la vista pdf y esta vista pdf va a

tomar el documento y lo va mostrar

entonces desde aquí desde nuestras

importaciones son imports vamos a

importar pide a bioware desde ahora pide

aprender y aquí lo que haremos es

envolverlo pidiã web

esto lo pasamos en medio

y ya está muy bien pero este aquí hay un

problema y les diré cuál es yo me

regreso a la aplicación cierto ya quién

ver web aquí esta visión los columbus

books 6 ya está diciendo y en ver pdf

fíjense que tarda en salir este visor

número uno tarda en salir y número dos

está muy chiquito ok entonces cómo lo

resolvemos

primero porque tarda en salir tarda en

salir porque poema todavía no tiene

valor o que entonces esto lo podemos

resolver

diciendo que esto va a ir dentro de un

fragmento ok

y este fragmento solo lo vamos a mostrar

cuando poema ya haya sido recibido si

puede más ya fue recibido me muestra

este fragmento caso contrario no me

muestra nada aunque el problema número

uno resuelto esto para para que éste no

llegamos no digamos de algún programa

donde find y el segundo problema viene

con el tamaño step y 10 bioware

estadista de pdf puede entenderla como

un iframe entonces que vamos a modificar

su tamaño con un imán y vamos a decir

que el with queremos 100 por ciento

siendo el ancho y en height altura

queremos un 90 height y este 10 vamos a

ponerle el disc principal de la

aplicación haremos lo mismo diciendo que

la altura mínima sea de 100 por ciento

bueno siente viajar muy bien regresemos

y aquí está aquí está la vista pdf se

puede ocultar la vista web de root

muy bien aquí está la vista pdf fíjense

que aquí esto esto no me lo tiene bien

pero esto se debe a los estilos si acaso

lo podemos modificar ya no nos ha

quedado pdf la parte del contenido esté

aquí en text content aquí tiene un

máximo de 50 vamos a ponerle vamos vamos

a poner lo mejor un tracking de

20

si yo uso la página ver pdf

aunque aquí ya está mejor muy bien aquí

notarán que es un pdf que está está

feliz y ok desde está feo las cosas como

son y esto se debe a que pues estos son

estilos genéricos son estilos que me

pide rápido lo que ustedes tienen que

hacer es comenzar los españoles currar

se la tienen que meterle buenos estilos

pensar todo el diseño y todo el momento

lo que importa es que ya tenemos la

vista web ya tenemos la vista pdf y lo

que nos hace falta es poder descargar el

archivo para ello hoy vamos a regresar a

la aplicación y aquí vamos a vamos a

aquí a descargar pdf

la idea es cuando la gente haga clic

aquí descargue el pdf y para ello vamos

a importar además de la vista pdf del

pbi de bioware vamos a importar pdf

download link aunque la descarga para el

pdf éste lo que haremos es tomar acá el

botón de descargar pdf y vamos a

envolverlo con download link

luego envolvemos y este de download me

recibe dos propios dos propiedades la

primera es indicarle qué documento

queremos descargar para ello me vengo

aquí el document es igual a y le vamos a

pasar el documento nuestro documento

recuerden es docu pdf entonces lo propio

y lo pongo aquí el segundo programa

propiedades indicarle con quien nombre

queremos que se descarguen vamos a

llamarlo poema punto pdf y hasta

entonces con esto me regreso a mi

aplicación vamos a actualizarla tenemos

la vista web fanhouse oms tenemos el pdf

de fabián songs y tenemos descargar pdf

que me lo guardé fíjense como poema le

doy guardar me vengo a vámonos al

escritorio y aquí está poema pdf lleva

doble clic en el aquí está el publica en

archivo bonito y precioso es muchísimo y

bueno con ello ya estaríamos teniendo

hoy todas las funcionalidades de nuestra

aplicación la vista web la vista pdf y

descargar pdf con shaquille o lo

importante es mover o dejar muy claros

los estilos para que no tengan algo tan

horrible como éste bueno eso ha sido

todo chicos si les gustó el vídeo dejen

me gusta y como siempre comenten qué

tutoriales más quieren ver en este canal

nos vemos

\[Música]
