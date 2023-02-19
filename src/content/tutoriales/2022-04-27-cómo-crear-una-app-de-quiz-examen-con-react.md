---
type: tutoriales
url: crear-app-quiz-examen-react
enlaceyt: https://youtube.com/embed/8oItCrRkQU0
date: 2022-04-27T20:12:46.854Z
title: Cómo crear una app de quiz/examen con React
metaDescription: "Aprende cómo crear una aplicación de estilo examen con tiempo
  en cuenta regresiva y respuestas de opción múltiple #tutorial #webdev
  #react  "
tag:
  - React
  - Misceláneo
autor: Adrián Salgado
introThumbnail: Aprende cómo crear una aplicación de estilo examen con tiempo en
  cuenta regresiva y respuestas de opción múltiple
keyword: app examen react
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/23-app-examen-react%2F23-app-examen-react.png?alt=media&token=8cbd0ed4-ff41-47a2-a84d-4373feb1da89
---

## Transcripción

hola chicos que está bienvenidos el día

de hoy aprenderemos cómo crear un quiz

una aplicación tipo quiz tipo examen y

como podrán ver tenemos distintas

preguntas cada una con opción múltiple y

estamos contestando contrarreloj de modo

que si se agota el tiempo no puedo

responder y debo pasar a la siguiente

pregunta aquí comenzamos con el tiempo a

través desde 10 y aquí ya no nos va a

elegir estaca

errónea pasamos a la tercera nada me

está acá errónea pasamos a la última 4

de 4 ya que elegiré está acá qué tal

parece que es la correcta y me llaman la

pantalla final donde veo mi resultado 1

de 4 puedo volver a jugar o poner las

respuestas veamos las respuestas la

primera era javascript no lo hubiera

imaginado la segunda era sin rellena la

tercera era 111 la siguiente de 95 y

volver a jugar y bueno si les interesa

aprender a crear algo como esto

acompáñenme en el vídeo de bill

[Música]

antes de comenzar recordarles tres cosas

la primera se encuentran el código de

esta aplicación en la descripción del

vídeo la segunda invitarlos a que se

suscriban a mi boletín y la tercera es

si sienten que el vídeo hablan muy lento

pueden utilizar los controles de youtube

para que vayan más rápido ok y habiendo

dicho esto vamos a comenzar hoy vamos a

ver una terminal y me dije al escritorio

conoce aquí usualmente yo trabajaría con

en piex reactive pero hay una

herramienta que es bastante popular la

cual podemos ejecutar corriendo en in it

beats ok y activas madero donde lo

llamaré quiz

elegimos durán jacques sencillo

accedemos a la carpeta que nos crea y

corremos en pie y esto nos darán que

instalar las dependencias es muchísimo

más rápido que con las que lo tienen

hemos terminado abramos todo desde

nuestro editor y cerramos la terminal y

aquí en esta carpeta bueno en este sí en

esta carpeta esos son los archivos que

nos crean fit lo que vamos a eliminar el

css vamos a minar el favicon

el index css

si bien quedamos únicamente app

ubs tap

es algo así como que el index desde

describe la capa que eliminamos es

también y aquí en up eliminamos todo

eliminamos este estado y este 10 va no

sea eliminarlo ok lo que nosotros

haremos es tener un main cuya clase sea

igual a up ok y antes de cuánto vamos a

poner aquí un hola y antes de continuar

vamos a correr en pie braun net para ver

que esté todo en orden debe aparecer un

hola que nos abre los ojos 3.000 mismo

puerto que club caiac tap tenemos hola y

podemos comenzar que lo primero que hay

que hacer es tener un archivo donde

tengamos contenidas las preguntas del

quiz y hay muchas maneras de hacer esto

pero lo que yo haré es crear una red de

objetos donde cada objeto contendrá la

información de las preguntas y para no

hacerles perder el tiempo no quieres

pegar unas preguntas que tenían

preparadas notarán que son objetos

tienen propiedad de título tiene una

propiedad opciones qué

tienes este una rey y a su vez este rey

de opciones es una red de objetos en

donde guardamos el texto de la respuesta

y si la respuesta es correcta o false

okey donde habiendo hecho esto este

array de preguntas hay que exportarlo no

se es por default preguntas y regresemos

a nuestra aplicación aquí vamos a

importar estas preguntas vamos a

importar preguntas

preguntas

ok y ahora vamos a trabajar nuestra

interfaz nuestro esqueleto vamos a tener

dos secciones hoy vamos a tener dos

secciones el lado izquierdo en donde va

a estar toda la información de la

pregunta y el lado derecho donde van a

estar las respuestas entonces aquí en

este primer día agreguémosle una clase

del lado izquierdo

y de momento tener dos apartados el

primer apartado

corresponde con el número de preguntas

en cual vamos entonces pondremos como

clase el número pregunta y aquí vamos a

poner un spam y vamos a poner como

pregunta uno de equipos o como cinco por

ejemplo y cerramos el dif y cerramos el

dif este es el primer día y la primera

sección el número de preguntas las

siguientes secciones

class name igual a título pregunta que

es en sí la pregunta que espero como

cómo te llamas que sería este es un

pequeño el relleno y esto va para el

lado izquierdo y ahora el segundo día

que va a contener el lado derecho de la

aplicación única y sencillamente va a

tener las respuestas a cada respuesta

hacer un botón entonces yo aquí pondrá

como opción 1 y un 2 opción 3 y opción 4

en el lado derecho cerramos en nuestra

aplicación debemos tener algo más o

menos así ok varón sale un poquito de

estilo y ojo que el objetivo de este

tutorial no es enfocarnos en los estilos

sino que es enfocarnos en la lógica

guiarlos como podrían hacer una

aplicación de este estilo web de este

objetivo una aplicación estilo quiz y

para ello lo que haré es copiar en los

estilos que yo tenía preparados vamos a

llamarlo global punto css y estos

estilos los se encuentran en el

repositorio el cual está en la

descripción del vídeo aunque ya que

están no es nada fascinada elaborado

letras márgenes mucho flex medidas

colores en la parte de preguntas

distribuyó el juego botones que si es

correcta o incorrecta

covers focus y ya está ok ahora si me

vengo para acá notarán que no pasa nada

porque estos estilos hay que importarlos

vamos a importarlos desde min

en que vamos a colocar algo como

no importa me diste aquí mismo en el

global punto css y ahí está pregunta uno

de cinco cómo te llamas y los botones ok

ahora la pregunta es estos textos riendo

preguntes cómo mostramos el continuo de

las preguntas que ya tenemos elaboradas

es muy muy muy sencillo vengamos de

vuelta para acá en nuestro lado

izquierdo recuerde que estamos

importando preguntas el archivo que

habíamos preparado comenzamos aquí en el

número de pregunta bueno antes de

continuar mejor dicho vamos a vamos a

importar a state

effects desde riad ok y antes de

continuar tenemos que crear tres estados

muy fino muy sencillos primer estado va

a revisar en qué pregunta estamos en

segundo estado va a revisar la

puntuación

y el tercer estado va a revisar si hemos

terminado el juego o no

6 finish y naturalmente desde un

principio no hemos terminado pregunta

actual puntuación y si hemos terminado

ahora queremos aquí y es lo siguiente

pasamos unas llaves y diremos con lo que

la pregunta actual + 1 y es más 1 porque

aquí vamos a estar trabajando con índice

o buenos y con índices 0 porque así es

como funcionan los arrays pero que en

idiomas no vendría siendo un +1 para que

tenga sitio porque no es normal decir

pregunta cero sino que comenzamos

haciendo pregunta número uno la primera

y aquí para saber cuántos son en total

pasamos son preguntas punto plena que

fácil ahora para mostrar la pregunta en

sí haremos algo como accedemos a este

rey recuerden que esto de aquí es una

rey

y entonces a la rey accedemos a la

posición en la cual vamos actualmente es

decir la pregunta actual y luego

accedemos a la propiedad de título

porque recuerden que así lo hemos hecho

aunque esto ya lo podemos cerrar y por

último el lado derecho en lugar de tener

botones manuales vamos a agarrar

preguntas accedemos a la pregunta actual

y accedemos a la propiedad de opciones

que recuerden que esto es un array

entonces agarramos

opciones lo mate amos

no requerimos el index lo matemos y lo

que haremos es devolver

vamos a devolver un botón cuyo contenido

sea la respuesta apuntó texto respuesta

y el texto respuesta porque así lo hemos

llamado aquí y es respuesta porque así

lo hemos puesto aquí en la función

último que me falta un paréntesis y

hemos terminado aquí esta pregunta 1 de

4 porque son 4 este es el título y las

opciones ahora para que no se queje lo

que vemos aquí en botón es pasarle una

llave que será igual a

y lo mismo aquí para que sea único

así

y

ahora lo que sigue es cuando ya da clic

acá cambio de respuesta a cambio de

pregunta entonces aquí a este botón

además de haberle asignado y una llave

vamos a agregarle un con clic y vamos

pasar le vamos a pasarle una función que

queremos que se ejecute y se funciona

llamaremos cuando answer submit ok y no

existe vamos a crearla aquí diremos

quejando

cuando esto va a ser lo siguiente

primero queremos añadir puntaje

cuando añadí puntuación que no queremos

hacer es añadir estilos para saber si es

correcta o incorrecta la respuesta y por

último queremos cambiar a la siguiente

pregunta ok como hacemos esto añade

puntuaciones y está vamos a ver si la

respuesta era correcta o incorrecta y

adivinen que eso lo tenemos aquí en cada

opción nos indica si es correcta o

incorrecta entonces lo que haremos aquí

cuando estamos mapeando las opciones

estas reducciones lo estamos mapeando lo

que haremos es que vamos a pasarle a la

función que tiene acceso a cada

respuesta que es cada uno de estos vamos

a pasarle este dato

entonces que diremos que le vamos a

pasar respuesta a punto es correcto ok y

adicional le vamos a pasar el el evento

lo cual vamos a atrapar desde aquí lo

atrapamos y lo enviamos para que y ahora

esta función lo que tiene que hacer es

recibirlos correctamente y vamos a

ponerle el script y el evento para

añadir puntuación simple y sencillamente

diremos que sí es pues verdadero que se

descubre que estamos pensando es

verdadero entonces una puntuación lo que

tiene que hacer es cambiarme la la que

sea que tenga más uno luego los estilos

de pregunta esto les muestra recuerden

que tenemos unos estilos de correcto e

incorrecto y para aplicarlos dependiendo

de si era correcta o no este este evento

nos da acceso al botón que estábamos

clicando y con ellos acceso a todas sus

propiedades y datos es lo que haremos

diremos si es correcto entonces no

mentira le damos a como más sencillo y

haremos el target

todas list punto at y le vamos a pasar

una clase y clase le pasaremos pues si

la respuesta era correcta entonces la

pasaremos la clase de correcta es caso

contraer sea incorrecta le pasamos esta

clase la que aunque vamos a poner la

prueba estará correcta en correcta

incorrecta e incorrecta pero lo que

sigue es que cambie a la siguiente

pregunta y para cambiar a siguiente

pregunta primero tenemos que

revisar que no hayamos llegado al final

del cuestionario para ello vamos a hacer

lo común

if

it's pregunta

actual es igual a preguntas line manos 1

entonces lo que haremos es terminar el

juego

caso contrario lo que haremos es cambiar

la pregunta actual a más 1 que vamos a

ponerlo prueba que vamos a refrescar me

lleva lados media bala tres me llevará

cuatro y aquí se termina el juego de que

los problemas fíjense que en los estilos

no los alcanzó a apreciar porque me

pasan la siguiente inmediatamente y

cuando termina el juego no está pasando

nada vamos a ver esta parte de terminar

el juego esto se resuelve muy

sencillamente

lo siguiente

aquí estamos en esta función estamos

regresando nuestra aplicación por lo que

podemos hacer revisar si el juego ha

terminado de ser así entonces podemos

regresarnos antes de realizar la

aplicación aquí lo que regresaremos será

el mismo mail con la clase de app

el cual al interior tendrá un disco y la

clase sea un juego terminado por ejemplo

aquí vamos a pasarle un spam sito

obtuviste

y quienes pasamos puntuación

de no obtuviste tantos puntos de

preguntas juntos

vale

y además del spam vamos a pasarle un

botoncito que diga volver a jugar y para

volver a jugar que tenemos que hacer

actualizar la página así que le pasamos

un click que al hacer clic en esta cosa

nos cambie la ubicación de la ventana

el inicio así de fácil y sencillo y

convertiste 4 de 4 volver a jugar

javascript sin gracia sin tag cd robert

1 de 4 volver a jugar con libia bla bla

bla bla será de 4 para los estilos que

está pasando que está pasando otra

gracia lo que está pasando es que la

agrega el estilo me cambia a la

siguiente y a cambiar a la siguiente

bien qué es lo que ocurre me vuelve a

renderizar los botones por lo tanto

pierden el estilo que les habíamos ha

creado lo cual es correcto pero yo no

alcancé a ver si era correcta o mala o

incorrecta lo que tenemos que hacer es

que esto de aquí no me lo curré

inmediatamente para ello para ello vamos

a utilizar un set time al el cual se

recibe una función que queremos que

ejecute lo pasamos el tiempo dentro del

cual queremos que se ejecute ok entonces

queremos que se deje que se espere un

segundo y medio y mientras espera que lo

haga que ejecute extra quiere cambiar

entonces si yo hago clic acá pasa

segundo y medio y ya cambia segundo y

medio y cambia porque lo que está aquí

adentro no me lo va a ejecutar sino

hasta que haya pasado este tiempo de

aquí que le indica ok y es así como

tenemos nuestra función para

administrar esto y ahora lo que sigue es

agregarle aquí un temporizador que sea

contrarreloj y que cuando el tiempo

llegue a cero yo ya no pueda responder

por haberme tardado y para eso vamos a

crear dos estados más vamos a crear un

estado que diga el tiempo restante

set tiempo restante el cual vamos a

comenzar con 10 segundos le vamos a dar

una una

un estado xxi que vigile si no hacemos

caso sin tiempo y que por lo tanto nos

desactiven los botones y haremos algo

como

ahora estamos en precisamente los

mejores nombres de variables chicos pero

es lo que hay aquí en el tutorial de

rápido ok ahora como como como aquí en

return

tenemos el número de pregunta tenemos

vamos a destacar dentro del lado

izquierdo tenemos el número de preguntas

entre toda la pregunta y ahora vamos a

agregar

com

un tiempo restante ok y que vamos a

pasarle tiempo restante y aquí como

clase vamos a ponerle class name

adivinaron tiempo restante ok ya vengo

para acá piense que tengo 10 segundos de

tiempo restante ahora como que se vaya

reduciendo desde 1 en 1

pues muy sencillo

podrían tomar como referencia este set

time que se ejecuta dentro de cierto

tiempo pero hay algo muy parecido que se

llama set interfaz ok y para ello

utilizaremos ius effect ahora antes de

este retorno previo y antes de esto de

acá

no esperen

vamos a pasarle nuestro y un efecto

y a quienes efecto vamos a correr una

función cuya dependencia se ejecuta con

el tiempo restante

y ahora que queremos ejecutar desde un

principio y cada que tiempo restante

cambie no queremos ejecutar es crear una

función que se ejecute en cada segundo

y esta función la vamos a crear con el

intervalo la cual vamos a guardar aquí

en una constante y ya les diré para qué

vamos a crear intervalo el cual es igual

a set interfaz y aquí al igual que con

time out vamos a pensar una función y

vamos pasarle cada cuánto tiempo

queremos que se esté ejecutando ok

entonces qué es lo que queremos que

ocurra cada un segundo bueno pues cada

segundo queremos revisar si el tiempo

restante es mayor que 0 entonces

queremos que haga que el tiempo restante

me lo cambie a menos 1

y adicional si el tiempo restante es

igual a cero

entonces queremos que les habilite que

esto no lo ponga como desactivado igual

ok y ahora lo que sigue es para cancelar

esta función que se va a estar

ejecutando cada segundo para cancelarlo

y use fernanda nos da una opción de

limpiar con un return lo que haremos es

limpiarme el intervalo que se llama

intervalo que hemos guardado y ahora si

yo guardo y vengo para acá notarán que

ésta ha vuelto hecho loca al loco que y

lo que ha pasado es que lo que ha pasado

es que aquí cuando su estado dependa del

estado anterior lo que tienen que hacer

es en lugar de ponerlo así recuperar el

estado anterior con una función de

flecha decimos el valor previo tomalo y

ese valor previo cualquiera que sea

restarle

y guardamos volvemos para acá y sigue

vuelto loco

sólo requería una pequeña refrescada

para que entraran en vigor los cambios

ok y ahí está llega a ser fíjense

actualizamos 19 8 7 6 5 4 3 2 muy bien

muy bien muy bien llega a 0 y se detiene

tal como lo hemos hecho pero ahora que

está deshabitado lo que hay que hacer es

que a estos botones en quien la aquí en

el lado derecho y nosotros que estamos

retornando con el mapa diremos que están

deshabilitados cuando este estado sea

verdadero y si llega será como pueden

ver ya no puedo hacer nada ya lo que

tendría que pasar que ya que se agote el

tiempo aquí tendría que salir un botón

que dijera bueno no alcanza hasta

contestar vamos a continuar con esta

como respuesta incompleta entonces para

eso aquí en el lado izquierdo en la

parte en este día de tiempo restante lo

que haremos es condicionar

lo que queremos renderizar y diremos

mientras

cómo se llama disabled

mientras no esté desactivado

lo que haremos es

regresar espérenme

mientras no esté desactivado lo queremos

regresar esto de aquí

y una vez que esté desactivado pues

ponemos este dos puntos vamos a regresar

un botoncito que diga

continua y ahora este botón de continuar

cuando hagamos clic en él lo que haremos

es correr una función que haga dos cosas

la primera nos regresa el tiempo a 10

segundos y la segunda es que

desactiva el desactivado es decir que

esté hardy se voló regrese a falso que

conocer cómo funciona fíjense aquí está

desactivado porque llegó a cero lo de

continuar 10 98 debí haberlo puesto en

tres para este para esta prueba pero

bueno 4 32

11 desactivado y ya no puedo responder y

no vamos a continuar pero fíjense que me

da continuar pero me quedo en la misma

pregunta y aquí me faltó entonces me

faltó cambiar la pregunta se pregunta

actual

pregunta actual claramente + 1 y ahora

si ya no alcanza a contestar la 1 de

continuar nada chance de contestar más

de un jockey supongamos que no alcanzo a

contestar la segunda porque soy muy

lento y hold es que terrible un tercer

que contestó la tercera es la tuve mal

la cuarta está también la tuve mal y

habrá sacado 0 d-4d

como cuando ya está bastante funcional

lo que sigue es que podamos ver las

respuestas y para eso para eso vamos a

regresar aquí

y vamos a cerrar esto acá y vamos a

crear otro estado más que lo llamaremos

[Música]

además la anses son

hoy sed

ok respuestas visibles sí o no de

momento es tan falso y aquí lo queremos

es tener

otro condicional donde si las respuestas

son vistas o están mostrándose vamos a

regresar un un mail con la clase de app

como digo sea de juego no

vamos a regresar

vamos a cerrar esto de aquí y de momento

estoy acá con respuestas

solo para poner a prueba los

de vuelta aquí vamos a tener el juego

terminó

déjenme lo termino

y aquí al terminar además de volver a

jugar debiera de haber un ver respuestas

entonces en el si ya terminó

además de volver a jugar vamos a poner

un

de respuestas

y ahora al hacer clic en ven las

respuestas lo que queremos es

en lugar de recargar la página queremos

hacer dos cosas la primera

regresar el finish falls y la segunda en

poner el

en él

como se llama en serio

en surf para qué sirve hoy en ver

respuestas esto se ponga en surf y por

lo tanto se active estar acá y me

muestre está aquí

respuestas a lo tiene para respuestas no

vamos a romper nos mucho la cabeza vamos

a reutilizar este código de acá la parte

de el lado izquierdo copiamos

y aquí en respuestas vamos a pegar

en el answer son

y la misma lógica pregunta actual el

título y en lugar de ponerle un tiempo

porque ya no tiene sentido

vamos a pasarle

un 10 que es tenga la respuesta y para

dar con la respuesta actual tenemos que

mapear las

digamos en la pregunta actual esto sin

opciones sí sí más opciones sí en

opciones mate a mí cuando me pega menos

va a utilizar filtra

y aquí vamos a filtrar

vamos a recibir la respuesta

vamos a recibir cada una opción perdón y

va a regresar la única en donde la

opción is correct sea verdadero

qué ha pasado

y ahí está

aquí me estoy comiendo

[Música]

paréntesis

a ver en preguntas

o si me comía un paréntesis aquí

ahí está ok y de aquí nos interesa él

[Música]

el texto respuesta

entonces siempre vengo para acá

y finalizó el juego

y le doy en ver respuestas

en qué año fue creado javascript y aquí

no me lo está pintando y es que y es que

yasky es que cuando ustedes filtran con

ustedes filtran un arreglo que obtienen

de vuelta es un rey por lo tanto tenemos

que acceder a este rey y ahora si ya

podemos tener acceso a la respuesta

entonces porque voy a buscar y 1995

y ahora nos haría falta un botón

vamos a poner un botoncito

que diga continuar o bueno que diga

continuar o volver inicia y para este

botón vamos a ponerle un click y vamos

vamos a hacer exactamente lo mismo que

hicimos aquí arriba tenemos que revisar

que no nos estemos acabando las

preguntas entonces aquí en continuar

haremos lo siguiente

revisamos si la pregunta actual sigue

siendo menor

y todas las que hay pasamos a la

siguiente y si no terminamos

pero aquí en lugar de terminar lo que

haremos es refrescar con un windows

punto location punto red es igual a esto

de aquí vale y adicional adicional

porque quiero que vean algo que yo

cuando le doy en ver respuestas me envía

automáticamente a la 4 porque es donde

me quedé adicional lo que tendría que

hacer aquí en ver respuestas es que la

pregunta actual sea la 0 para que desde

la 0 comienza a ver las respuestas

entonces aquí vamos a darle continuar se

reinician vamos a terminar terminar

terminada y terminar

3 de 4 para volver a jugar o para ver

las respuestas y empieza desde la 1

javascript sin relleno 111 y listo si

acaso aquí en continuar

en la inserción aquí podríamos decirle

sí

si la pregunta actual es igual

a esto volver a jugar sino siguiente

ok

y ahora fíjense que cuando yo termine

si no había respuesta siguiente

siguiente el siguiente volver a jugar y

empezamos de cero y si el temporizador

llega a cero no puedo responder y si el

respondió es correcta está verde si

respondería es incorrecta es tan roja y

si se me acaba el tiempo pues deben

continuar y es así como funciona este

quiz relativamente básico pueden ustedes

volverlo más complejo pueden meterle

este puntajes máximos pueden guardar

información en una base de datos find

race por ejemplo por ellas que tengan

una idea una noción básica de cómo es

que suelen hacerse este tipo de

aplicaciones con ryan y ya a partir de

ahí ustedes pueden elaborar y

profundizar tanto como desee si os ha

gustado vídeo regalen un me gusta y en

los comentarios como siempre pueden

indicar me qué tipo de tutoriales

gustaría ver por aquí y además en planta

encuentran dos vídeos más de mi canal

entonces los invito a que sigan

explorando y contenidos chicos nos vemos

en la próxima
