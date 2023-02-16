---
template: tutoriales
url: mejora-app-debounce-javascript
enlaceyt: https://youtu.be/W1sOOTjtfh0
date: 2022-04-28T21:49:37.812Z
title: Mejora tu App con Debounce en JavaScript
metaDescription: >
  Aprende cómo optimizar tus funciones con el efecto Debounce en JavaScript
  #tutorial #javascript #webdev
tag:
  - Programación
  - JavaScript
autor: Adrián Salgado
introThumbnail: Aprende cómo optimizar tus funciones con el efecto Debounce en JavaScript
keyword: debounce javascript
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/35-manual-javascript.png?alt=media&token=03b093aa-4485-40e1-80e9-394e3dfe2069
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo añadir un

efecto de pound a sus funciones y si no

saben que estaba aún o para que podría

servirles es tengo este ejemplo que

seguramente lo habrán vivido y bueno

todos conocemos que la gran mayoría ha

visitado en youtube o google o alguna

otra de estas páginas y habrá notado que

cuando ustedes buscan algo como cons les

va mostrando sugerencias ok

conforme ustedes van escribiendo este

texto que ustedes escriben este texto se

envía a los servidores youtube youtube

toma el texto y envía de vuelta las

sugerencias conforme el texto que

recibieron por ejemplo como dibujar aquí

me va mostrando las sugerencias vale

bueno pues les voy a mostrar para qué

sirve

dib aun si es que tengo acá una

aplicación que intenta simular muy muy

modestamente simula este funcionamiento

de youtube ok fíjense que conforme yo

voy escribiendo

y lo que va a pasar es que aquí me va a

mostrar el texto que yo escribí ya

vieron y una sugerencia ok entonces

cada vez que voy escribiendo o sea

mostrando una sugerencia pero ahora cuál

es el problema con esto el problema está

en que fíjense hoy voy a borrarlo si yo

abro mi consola vamos a limpiar esto y

voy a escribir voy a buscar cómo dibujar

una casa ok para obtener la sugerencia

que acompaña a cómo dibujar una casa

realicé 21 solicitudes 21 porque por

cada letra que yo escriba cada letra me

está enviando la función envía la

solicitud a mis servidores y esto es un

problemón chicos porque es un problema

es un problema porque imaginemos que

esta es su aplicación ok son sus

servidores su aplicación y ahorita por

un usuario por una búsqueda acaban de

recibir 38 solicitudes en su servidor

ahora multipliquen estas 38 por 10

búsquedas por 1000 usuarios y todo esto

pone muchísima muchísima presión en su

estructura y esto se convierte en costos

ok esto es un problema para ustedes y es

un problema para su usuario porque sí

todas estas solicitudes se hacen a lo

mejor desde un teléfono móvil se hacen

con tantos móviles el caso licitud tiene

que enviar datos tiene que esperar y

tiene que regresar con datos de vuelta y

descargarlos y esto pasa factura en su

usuario porque se gastan sus datos a lo

mejor si tiene pésima señal va a tener

una pésima experiencia de usuario y es

ahí donde entra de downs ok es donde

entra aquí de bones para solucionarnos

este problema y ahora como lo vamos a

resolver muy sencillo verán que tengo a

tengo abierto este sitio web tengo aquí

un html donde tengo un input tiempo

texto tengo estos días donde tengo

escrito normal y de bones y tengo un

archivo javascript en el cual traigo

todos estos elementos traigo el input

traigo estos textos y fíjense aquí me

imputó tiene un f listener ok y aquí en

la le dan diseñar lo que el estudio no

javascript es cada vez que se escriba

una ley

cada vez que escriba una letra mándame

la solicitud para obtener la sugerencia

ok y esto es una simulación porque mi

función para mi request para obtener la

sugerencia lo único que hace es que me

imprime en pantalla me imprime en

consola normal request y que me me

repite el mismo texto más una sugerencia

que esto es simulación obviamente no

vamos a estar haciendo aquí llamados

reales alguna api pero en esencia es lo

mismo que hace youtube ahora cómo

resolvemos este problema cómo evitar que

se hagan tantas solicitudes innecesarias

por una mera búsqueda bueno vamos a

hacer esto vamos a crear

ahora tenemos normal request vamos a

crear nuestra función que se llame dy

bounds request ok de momento deban ser

pues no va a tener nada porque lo que

tenemos que hacer lo que haremos es

una función que

reciba a una segunda función que será la

función original que será la función a

ejecutar y entonces esta primera función

al recibir la segunda función le va a

añadir el efecto de downs y el de bones

consiste en mí más ni menos que esperar

cierto tiempo antes de realizar el

request ok antes de ejecutar la segunda

función la cual es la original entonces

aquí vamos a crear una función que se

llame deba anunciar function ok y esta

esta función que me diga un sea una una

función una segunda función original

obviamente va a recibir por argumento la

función original que llamaremos kovác y

vamos aquí a recibir

un parámetro alfred y ley que nos va a

decir cuánto tiempo queremos esperar

aquí yo por defecto voy a añadir mil

segundos de espera y entonces lo que

haré aquí es devolver otra función una

función de flecha y aquí dentro de esta

función de flechas donde ocurre aquí va

a ocurrir la magia ok ya está no hay más

ahora de vuelta aquí a nuestro infante

listen aquí nuestros bendiciones con

cada cambio vamos a ejecutar él

en la función de de bound de bound

request el cual también va a recibir el

texto de el inp y ahora obviamente este

digamos request de momento no es nada

todavía entonces vamos a que deban ser

pues la función de digamos request va a

ser igual a lo que

viva un zar de vance jr function me

devuelva recuerden que aquí iba a

anunciar función recibe un comeback y

recibe un delay pues aquí en el comeback

pero vamos a pasar el delay el delay va

a ser de 1.000 segundos tal cual como

está aquí por defecto y aquí en el kodak

la función que queremos ejecutar va a

ser lo mismo que aquí ok vamos a hacer

lo mismo que el normal request

vamos a pegar

y ya ven

\[Música]

y obviamente aquí en lugar de cambiar el

normal vamos a cambiar

i

y aquí vamos a cambiarlo por

divines request ahora ya le di mucha

vuelta pero qué es lo que está

sucediendo aquí aquí lo que está

sucediendo es que di bounds request es

igual a lo que iba a anunciar function

me devuelve ok ya digamos ya alfonsín

está recibiendo un comeback que es esto

de acá que es modificar el texto y está

recibiendo un tiempo de espera y ahora

para que esto suceda tenemos que

encargarnos de la magia tenemos que

resolver esta parte de la magia y la

magia no es ni más ni menos que un set

time and chicos un clásico y tranquilo y

se time is yet time out lo que recibe es

una función que queremos ejecutar

y recibe un delay ok

qué es cuánto tiempo queremos esperar de

ley no es ni más ni menos que espera

demora o tiempo vale y aquí no estoy

aquí tengo una gran llave de más

y aquí me falta una llave está ok ahora

aquí en este set time lo que haremos es

ejecutar nuestro kovác

ok pero fíjense esto nuestro callback en

este caso nuestro call va que es esta

función de flecha que recibe como

argumento valió y me ejecuta este de

aquí bueno pues entonces sabemos que

cuba que recibe por argumento value pero

qué pasaría si nuestro callback tiene a

lo mejor otro argumento y otro que no

que no conocemos de previa de previa

mano pues en este caso lo que tenemos

que hacer es aquí a recibir cuantos

argumentos necesitemos para que en

nuestro kovác lo llamemos con tantos

argumentos como necesitemos o que este

es el sprite operator aquí me va a

atrapar todos los argumentos en uno solo

entonces con buscarlo vale y ya está

vamos a guardar y ahora fíjense que si

yo comienzo a escribir y hago un dos

tres

aquí me se espera un segundo antes de

realizar la solicitud 20 123 1 2 3 4 5 6

bla bla bla ok y fíjense se espera pero

aquí tenemos un problema y cuál es el

problema el problema el problema es que

nuestro problema original no está

resuelto fíjense que si yo escribo

a ese de acá en pantalla puedo ver que

realice tres solicitudes normales y tres

solicitudes de vance ok entonces sigo

con el mismo problema porque estoy

haciendo muchísimos llamados a mi

servidor no lo he resuelto y es que lo

que tenemos que hacer es esto lo que

tenemos que hacer es indicarle a nuestra

función que mientras la persona sigue

escribiendo y mientras no haya pasado un

segundo de continuar escribiendo bueno

de haber dejado de escribir mientras

tanto no queremos que envíe nada bueno

pues para ello venimos de vuelta que a

nuestra función de anunciar function y

aquí vamos a crear una variable que se

llame no lo sé

it's

writing

no vamos a llamar la opción semana time

como nos había sugerido ok y ahora si

ustedes conocen set time out sabrán que

nos devuelve un valor para cancelar este

time on esta cuenta regresiva entonces

aquí diremos que timer es igual a esta

cuenta regresiva que estamos creando de

modo que aquí cuando se ejecuta esta

función lo primero que hará es cancelar

toda cuenta regresiva que se haya creado

antes y entonces como sucede lo que va a

suceder es que si yo aquí busco uno no

vencido aquí escribo y escribo uno se

comienza la cuenta regresiva pero luego

si yo escribo todos me cancela la cuenta

regresiva del 1 y comienza la cuenta

regresiva del 2 y luego se escribe 3 me

cancela la cuenta del 2 y comienza la

cuenta del 3 y así va a estar sucediendo

hasta que yo paré de escribir

un segundo fíjense que pueden comenzar

escribir a estas tasas y mientras yo

siga escribiendo cada letra nueva que

añado me va cancelando la cuenta

regresiva anterior me va cancelando el

request que estaba pendiente anterior y

sólo va a realizarlo sólo lo va a

ejecutar hasta que es escribir y haya

pasado a un segundo

aquí pasa un segundo y me hace el rico

es con todo este contenido entonces por

ejemplo si yo aquí escribo

123 me hace la solicitud con 123 y luego

yo continúo escribiendo 456 me hace una

solicitud con

123456 ok entonces es así como estaría

funcionando de vaughn si quiero crear un

ejemplo bastante ilustrativo si yo me

pongo a escribir

cómo dibujar un gato cómo dibujar un

gato bueno pues aquí son 20 contra un

request ustedes estarán pensando oye

pero eso es un problema porque entonces

ahora no vas a recibir la sugerencia

sino hasta que termines de escribir toda

la frase lo cual es cierto y eso sería

cierto en este caso donde estoy

utilizando un segundo como tiempo de

espera obviamente en el mundo real lo

que las compañías hacen es que dejan una

fracción de segundo para el tema del

diván sé que voy a poner

125 milisegundos

entonces yo aquí escribo algo como cómo

dibujar un gato bueno pues aquí en cómo

dibujar un gato

aquí ya no nos hace nada más una sola

solicitud nos hace varias fíjense 1 2 3

4 5 6 7 8

9 10 11 ok que bueno creo que son 2 3 4

5 6 7 8 9 10 11 ok nos hizo 11

solicitudes en divines

versus

probablemente como 22 en normal es decir

ya nos la redujo a la mitad aquí vamos a

cambiarlo a lugar de 125 nos ha cambiado

a 250 igualmente lo que tienen que hacer

es encontrar el número mágico el sweet

spot el punto medio que les dé el mejor

a experiencia a sus usuarios y les

reduzcan los gastos y solicitudes a

ustedes así que vamos a probar de nuevo

cómo dibujar un gato fíjense aquí en

cómo dibujar un gato me hizo 20

solicitudes normales y solamente me soft

2 en modo de bounce ok entonces ahí lo

tienen chicos estabilidad detrás de ti

vamos y cómo pueden ver es bastante útil

bastante práctico
