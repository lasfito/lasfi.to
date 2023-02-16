---
template: tutoriales
url: chat-estilo-discord-firebase-react
enlaceyt: https://www.youtube.com/embed/oYiKbwLXRuA
date: 2022-02-21T23:43:06.271Z
title: Cómo crear un chat estilo Discord con Firebase y React
tag:
  - Firebase
  - React
autor: Adrián Salgado
publicoObjetivo: Se requieren conocimientos mínimos sobre JavaScript y React.
keyword: chat discord react y firebase
thumbnail: /assets/09-chat-discord-firebase.png
---

\## Transcripción automática

hola chicos que tan bienvenidos en este

vídeo vamos a aprender cómo hacer una

especie de copia de disco está hecha con

rihanna con fire veis y la idea es que

sea una suerte de chat público en el

cual se puedan crear canales se puedan

enviar mensajes y se pueda acceder como

pueden ver ahora mismo en pantalla que

intentó ingresar a mi cuenta que

claramente metí mal muy bien entonces

que la idea es tener una imagen una

pantalla de bienvenida donde accedemos

aquí se muestran los canales tenemos

reglas general este y bueno ahora mismo

no tengo mensajes aquí en general vamos

a enviar uno vamos a poner hola que tal

y listo se envía el mensaje con usuario

fecha me y texto podemos añadir un nuevo

canal por ejemplo llamémoslo este sala

de estar qué sé yo ya que nos lo crea

vayamos a este nuevo canal no hay

mensajes vean como ya está este y algo

muy interesante que además que creo que

les va a gustar es que si intentamos

enviar alguna grosería por ejemplo

como están

automáticamente nos la manera nos la

bloquea y evita que la gente ande por

ahí diciendo groserías en nuestros

canales

no es precisamente un clon de disco

porque claramente faltan muchísimas

funcionalidades pero lo importante es

los canales los chats estas salas que

son este públicas la autenticación y por

supuesto poder crear canales y cerrar

sesión desde aquí entonces si es algo

que les interesa pues acompáñenme en

este vídeo de hoy

muy bien antes de comenzar quiero

recordarles que al igual con todos mis

vídeos van a encontrar el código de este

tutorial este todo el código todo el

proyecto lo encuentran en la descripción

entonces en cualquier momento si se

pierden o si simplemente vienen por

código para copiar desde lo adelante

aquí está y claro no olviden darle

estrellita para agradecer y antes de

entrar de lleno es importante saber qué

es lo que estaremos construyendo vale

entonces primero este tenemos la parte

de fire beige que sería cómo va a estar

organizada la base de datos no es

ninguna maravilla es algo muy sencillo

recuerden que tenemos colecciones fire

veis funciona así tenemos colecciones

documentos y dentro de los documentos

podemos tener más colecciones entonces

lo que haremos es que tendremos una

colección que se llame canales

dentro de esta colección canales habrán

distintos documentos y cada documento

representa un canal por ejemplo como ya

vimos el canal general el canal de

reglas y el canal de sala de estar sala

de estar que añadir

muy bien entonces con esto vamos a

identificar los canales y ahora al

interior de cada documento vamos a tener

una colección que se llame mensajes

y como habrán podido deducir dentro de

esta colección vamos a tener más

documentos donde cada documento va a

representar un mensaje es un poquito

está un poquito enraizado pero créanme

que es más sencillo de lo que parece

vale entonces esto es referente a bayern

veis así es como funciona ahora

referente a la aplicación con real en

realidad es muy sencillo

vamos a tener un usuario

global en nuestro estado y la idea es

que sí

no hay algún usuario registrado no está

la información del usuario

vamos a presentar una pantalla de login

si el usuario si está vamos a presentar

el chat ahora cómo funciona el chat el

chat funciona de la siguiente manera

como pudieron ver en el intro tenemos un

chat que se compone de una

barra lateral

que en inglés se llama site bar y un

componente que vamos a llamar chat

ahora aquí en el sidebar lo que hay que

destacar son tres cosas

bueno solo dos tenemos aquí un

encabezado que no importa mucho y aquí

tenemos

donde se van a ir desplegando todos los

canales que como ya vieron era general

reglas sala de estar aquí vamos tener un

botón para añadirlos

y aquí abajo vamos tener al usuario foto

del usuario y nombre entonces desde aquí

vamos a seleccionar los canales para

enviárselo sachet cuando chat sepa en

qué canal estamos lo que chat hará es lo

siguiente primero en el encabezado va a

poner el nombre del chat luego en esta

parte de acá va a desplegar todos los

mensajes que correspondan al canal que

habremos seleccionado desde aquí y por

último aquí un pequeño input para poder

enviar mensajes a donde al canal en el

cual estemos esta es más o menos la idea

esto lo que estaremos construyendo y

bueno vamos allá como podrán ver lo

primero es descargar una plantilla que

he preparado para ustedes y lo segundo

es instalar el paquete de material white

entonces el primer paso es copiamos este

enlace enlace no encuentran en la

descripción del vídeo nos vamos a

nuestra terminal en mi caso yo voy a

entrar a una carpeta que llamo dead y

desde aquí corremos git home y pegamos

el enlace esto nos va a descargar esta

plantilla que preparado que básicamente

es un rack increíble a camps sin tanto

relleno tiene preconfigurado en cierta

manera para poder trabajar con fires

desde aquí lo queremos es abrir la

carpeta que se llaman array fire race

desde nuestro editor favorito el mío

visual estéreo code vamos a hacer esto

en grande y vamos a abrirlo desde el que

debiera estar aquí abrir muy bien una

vez que hayan abierto

esto de aquí lo que tienen que hacer es

correr una terminal y ejecutar en pm

esto para que les instale todas las

dependencias toda la paquetería que

vamos a requerir esto debiera ser rápido

no deberá tomar más de un minuto y

mientras tanto vamos revisando el

siguiente paso que es instalar material

y guay para quienes no conozcan mentira

unidad básicamente es una ya no sólo una

serie

de lineamiento y recomendación ese

estilo que fue creado en cierta medida

por google y para lo cual existe una

paquetería de la cual podemos utilizar

elementos y ahorrarnos un poquito de

tiempo en estar creando componentes y

código y todo ello para poder instalarlo

vayamos a nuestro navegador

y si buscan aquí en google si buscamos

material guay bien seguro quedan con el

paquete

que está aquí

muy bien hay varios paquetes en realidad

pero dónde va la onda hay varios

paquetes los que utilizaremos son dos el

core que como podrán deducir es el

mínimo necesario la base y además el de

iconos entonces copiamos este enlace de

aquí o este comando nos regresamos a

nuestro proyecto de jazz terminó

instalar todo y vamos a pegar e instalar

este material y word y el siguiente es

el de iconos entonces me regreso a mi

navegador y aquí podemos buscar

material

itunes

y aquí está

entonces copiamos como podrán ver es

bastante popular más de millón y medio

descargas semanales

regresamos a nuestro proyecto

pegamos e instalamos y ya con ello

habremos instalado los paquetes que

requerimos de material igual el core y

el de iconos entonces regresemos a

nuestra lista de pasos ya podemos

terminar esto de aquí lo que sigue es

nuestro proyecto de fire bis para ello

desde nuestro navegador

vamos a visitar fire page punto.com ya

que habrá una opción para irnos a

consola se mostrará nuestro listado de

proyectos vamos a crear uno lo voy a

llamar copia dischord youtube

continuar

no queremos analíticas crea proyecto y

ahorita lo que sucederá es que nos va a

aprovisionar el espacio para el proyecto

mientras tanto no bien darle me gusta

suscribirse y comentar qué tipo de

tutoriales les gustaría que realizar en

este canal para entonces toma unos

cuantos segundos nomás perfecto aquí

estaremos trabajando con dos este

servicios de primera autenticación

entonces aquí le damos en comenzar y

elegimos qué tipo de autenticación

estaremos utilizando

google es de los más convenientes aquí

el nombre que queremos mostrar vamos a

ponerle copia dischord youtube y el

correo que de momento sólo va a haber

uno el cual tengan asociado su cuenta

muy bien con esto habremos

activado el servicio de autenticación

que nos ofrece google lo siguiente es la

base de datos entonces desde aquí es the

fire store crear base de datos pongamos

un modo prueba siguiente habilitar y

estuviera tomar no más de unos cuantos

segundos

con esto abramos habremos creado el

proyecto activado los dos servicios pero

ojo que recuerden que todo proyecto de

fair race tiene a su interior además de

los servicios lo que se llaman

aplicaciones y no podemos trabajar con

el proyecto de fire page a menos que

tengamos una aplicación como se crean

muy sencillo desde el engrane

configuración del proyecto y hasta abajo

hay una opción que dice no hay apps

bojan dándonos la opción es tus apps

hasta abajo aquí tenemos la opción de

crear una app de ios android o web hoy

unir y vamos a escoger la tercera que es

web vamos a llamarla igual dischord

copia youtube

da igual el nombre la registramos lo que

importa aquí es que al crear la app

tendremos acceso a las credenciales

entonces no se preocupen por copiar todo

esto si descargaron mi plantilla todo lo

que va a estar a hacer es copiar la

configuración

regresamos al proyecto y fíjense que

aquí en source tenemos una carpeta que

se llama fire list

aquí tenemos un archivo que se llama

credenciales y lo único que hace falta

hacer es pegar las credenciales de su

aplicación desde aquí vamos a guardar y

ya estamos aquí vamos a echar un vistazo

de que consta esta plantilla como les

dije básicamente es un crack sin relleno

tenemos word tenemos el app sin relleno

tenemos index sin rellenos interés sin

tanto tenemos una carpeta de estilos una

carpeta de fire veis y ya está

vale entonces regresamos a nuestra lista

de pasos ya tenemos fire veis fuera de

aquí muy bien entonces lo que sigue es

trabajar el esquema de la aplicación y

por esto me refiero a esto ya vamos a

salir a consolas ya lo pueden cerrar

cerramos esto esto de aquí vamos a dejar

únicamente el proyecto y bueno por sca

me refiero a la estructura la

arquitectura de la aplicación que

ciertamente ya ya viene un poco resuelta

por la plantilla si acaso aquí lo que yo

les recomiendo hacer que bueno es más

bien es mi estilo en cuanto a

arquitectura no hay nada escrito en roca

pero lo que yo hago es crear una con una

con una carpeta que se llama componer y

crear una más o igual dentro de shorts

que se llama medios

muy bien entonces como les había dicho

la idea era

tener un usuario global y que

dependiendo si hay usuario no vayamos a

una pantalla que sea login o una

pantalla que sea la aplicación de chat

lo que haremos a continuación entonces

esto debe ser un versión del par que ya

debieron estar familiarizados con esto

que estaría haciendo importamos si usted

creamos un estado que se llame llamarlo

usuario global y ser

usuario global y esto lo metemos como

ellos

kate y de entrada vamos a inicializar lo

como un nulo para que nos redirige a la

pantalla de login

y de hecho ahora que me acuerdo alguien

alguna vez me comentó que la letra

estaba muy pequeña vamos a meterle aquí

un 20 para que puedan ver mejor y esta y

continuamos vale entonces tenemos un

usuario y la idea es que aquí en la

aplicación

vamos a

redirigir a la persona

a un locking oa una pantalla de chat

cómo hacemos esto vamos a acondicionar

el famosísimo en inglés se llama

versión acción fue el nombre pero bueno

vamos a revisar si existe

este elemento si existe queremos que nos

envíe a

a dos pantallas bueno queremos que nos

envía la aplicación de chat la cual se

compone de un side bar y se compone de

un chat

más con el chance screen porque no

entonces sí shuar global existe nos va a

enviar a estas dos caso contrario donde

no exista a dónde nos va a enviar nos va

a enviar a un elemento componente que va

a ser de tipo longing y guardamos y de

hecho vamos a correr esto en el

bienestar y nos va a mandar error porque

ninguno de estos componentes existe

entonces los agregamos lo que tenemos

que hacer es crear estas vistas aquí en

vídeos vamos a crear

login

y vamos a ponerle aquí el login y vamos

a crear las otras dos que se llamaban

side por

mayúscula

vamos a renombrar side por js

y poner aquí sidebar

guardamos y una más que habíamos llamado

chat green no pero saben que ya recordé

que en el código no está bien chat

screen j es lo mismo y vamos a poner

aquí chat screen muy bien entonces desde

app importamos todas estas dos de sus

componentes

y vamos a hacer lo siguiente port

login

por favor e import chat screen y ahora

sí si nos regresamos al navegador

aquí está nos envía al login por qué

pues porque no hay usuario entonces

regresando a nuestra lista de pasos ya

está lo que sigue es tratar el tema del

login y el usuario vamos a trabajar esta

pantalla de login y todo el tema del

usuario con cerrar todo esto que no me

interesa vamos a enfocarnos en login

entonces ojo este es un tutorial de the

fire beige y debería que entonces no va

a poner mucho énfasis en el en el estilo

lo queremos hacer lo siguiente vamos a

trabajar como con de material ya que

comercio ha dicho cómo funciona vamos a

ir importando los elementos que requiera

mos uno de ellos es varón varón from y

ya esto vamos a poner aquí materia

why court desde que importamos el botón

y nuestra pantalla lo que yo voy a hacer

que si quieren que quede idéntico al mío

les recomiendo que dan exactamente lo

mismo lo que va a hacer es que aquí voy

a tener un 10 cuya clase se va a ser

login y al interior

voy a tener otro 10

cuya clase va a ser

login quien bajo lo

y aquí al interior de este disco lo

vimos tener una imagen cuya fuente va a

ser de momento vamos a poner

no tengo la mano mico no vamos a poner

uno que les genera imágenes aleatorias

que les recomendó muchísimo se llama

peak son foros diagonal y ponen las

medidas que requieren entonces voy a

poner aquí

420 le metemos un alto como es

decorativo lo dejamos vacío y cerramos

esto de aquí ya está y ahora después de

este dir del logo vamos a tener el botón

que acabamos de importar

cuyo

texto debiera decir acceder con google y

aquí vamos a ponerle un clic

que deberá correr una función que vamos

a llamar al login con google

esta función existe y que hay que

definirla para que nos marque lo aquí

ponemos function login con google es

igual a esto de aquí muy bien echamos un

vistazo a nuestro navegador y aquí lo

tienen ahora este como se había dicho

esto no es un tutorial css entonces lo

que voy a hacer es que

en el código en el repositorio van a

encontrar el código venga y van a

encontrar todos los estilos vale no los

vuestra trabajando aquí los voy a pegar

acá entonces todo lo que tienen que

hacer es pegar los distintos que dan el

repositorio y su aplicación debiera

haberse en más o menos es la magia del

estilo entonces

aquí como les dije les dejo los estilos

en el repositorio si quieren es evidente

colombia copió el pelo no hay más no va

a ser mucho énfasis en los estilos o

bien pueden trabajar sus propios estilos

de mientras ya tenemos esta pantalla de

login y lo que hace falta es que al

hacer clic no se ejecute esta función de

login con google como funciona muy

sencillo recuerden que nuestra carne en

nuestro folder de the source tenemos acá

venta se llama fire bis aquí tenemos las

credenciales mismas que copiamos de

nuestra aplicación lo que haremos con

cada componente que requiera utilizar

fires es lo siguiente primero importar

fire page

from

sería

fire veis una de credenciales y hasta

esto lo primero importar fair rise up

porque es lo que estamos exportando con

las creencias y luego lo que queremos es

importar los servicios que estemos

utilizando en este caso el de soft

entonces corremos ekin por from fire

veis diagonal out y necesitamos correr

la función que inicia este servicio de

red y todas las funciones subsecuentes

que estamos utilizando en este caso

utilizaremos dos funciones la primera es

la de google of provider y la segunda es

la de sajnín with great

una vez que los hayamos importado lo que

tenemos que hacer es ejecutar esta

función que inicia el servicio con las

credenciales como argumento y lo

guardamos en una constante por ejemplo

count of es igual a cero y le pasamos

fire list up y con esto ya podremos

tener acceso a todos los servicios que

tengan que ver con la autenticación

tratándose de iniciar sesión con google

estos se llaman proveedores o providers

en inglés lo que tenemos que hacer es

inicializar los u crear una instancia de

ellos y guardarlos tiene alguna

constante lo que haré es lo siguiente

google a provider vamos a ponerle

y pereira es igual a new google of

trailer y ya está con ello podamos

iniciar sesión entonces de vuelta a

nuestra función para iniciar sesión lo

que haremos es lo siguiente

pasamos la la función quizás haining

with greg significa iniciar sesión con

redirección hacemos sainz jr red y como

pueden ver aquí nos pide dos argumentos

el primero es el que acabamos de crear y

el segundo es el proveedor nosotros

vamos a ocupar el chip provider que se

refiere a acceder con google vamos a

probarlo es todo lo que se requiere

vengo para acá acceder con google

y me dice que es inválido con sus seres

intentar refrescar actualizar la página

regresaron salvo con house 3000 que es

donde está es nuestra aplicación acceder

con google y listo ya está sólo se

trataba de un problema y de del ambiente

de desarrollo entonces que voy a elegir

mi cuenta y técnicamente ya inicie

sesión ante los ojos fire veis ya inicie

sesión lo que ocurre es que entre los

ojos de riad que pueden ver aquí desde

la aplicación mi usuario global sigue

estando en no he hecho nada para

cambiarlo y vamos a cambiar y cómo lo

hacemos muy sencillo lo que haremos es

importar este fair visa para que desde

aquí desde nuestra aplicación desde

nuestro punto de entrada vamos a correr

una función que va a estar escuchando o

va a estar observando estos inicios de

sesión cuando iniciamos sesión va a

modificar el usuario cuando cerremos

sesión lo va a devolver a nulo entonces

aquí de hecho esto ya viene como parte

de la plantilla

importamos las gredas

y

ocupamos esta función que se llama

se llama guérot recuerden que tenemos

que llamar a estas funciones para

iniciar los servicios y la función que

ocuparemos es está aquí con of state

change y como les dije va a estar

observando estos cambios de inicio de

sesión ejecutamos la función le pasamos

las credenciales y guardamos enlace

perfecto ahora cómo funciona está esta

función muy sencillo con dos state james

vamos a pasar los argumentos del primero

como podrán notar este es algo bastante

común y lo siguiente la función que

queremos que se corra cuando haya estos

cambios de inicio decisión entonces va a

correr una función que va a recibir como

argumento bueno ya recibe como argumento

el usuario de firefox y dentro de esta

función que yo voy a correr cuando se

hagan los cambios de extensión voy a

hacer dos cosas la primera es revisar si

se inició no se cerró sesión

y para ello todo lo que tengo que hacer

es verificar si esto de aquí existe o no

entonces corre a unir el usuario

fire face existe entonces hacemos tal

caso contrario de que no existe el

usuario fire veis hacemos tal si si

existe lo que haremos es iniciar sesión

ante los ojos sería para ello voy a

actualizar el usuario blog entonces

corro un ser usuario global y que voy a

guardar aquí la información del usuario

de firefox

listo es así de fácil así de sencilla

vamos a correr un con solo que diga

sesión inicial

caso contrario si no existe el usuario

significa que sorpresa cerramos sesión

lo que hago es avisar al ajax y cerró

sesión con melo en null nuevamente listo

regresemos a nuestro navegador y aquí

como pueden ver ya tenía mi sesión

iniciada ante fire veis y lo que hizo

redacten es actualizar mi usuario global

y listo ya tengo acceso a la aplicación

aquí tengo mis componentes de software y

charles screen muy bien ahora lo que

sigue es trabajar estos componentes y

vamos a comenzar por salvar escuchamos

un vistazo a nuestros pasos si

efectivamente comenzamos por site work

perfil más sesión pues vamos a trabajar

el sidebar comenzando por el perfil para

ello lo vuelvo aquí envíes code lo que

hago es cerrar no me sirve a cerrar

login y vámonos a side word aunque aquí

que es lo que estaremos haciendo primero

vamos a estar trabajando con state

y con ellos effect los importamos y

ahora lo que sigue es importar todos los

elementos que necesitaremos desde la

librería de material igual el primero de

ellos es avatar que estos importa desde

el coro y los siguientes son unos

cuantos iconos que vamos a importar

desde

desde alicante meridianamente el editor

ok que conoce estaremos trabajando los

siguientes el primero expand mor el

siguiente at el siguiente mi hermano

mike mejor dicho si estamos de gringos

el siguiente settings el siguiente

headset y ya está muy bien ahora como

les había dicho el énfasis aquí nos el

estilo entonces tienen dedos o utilizan

los mismos nombres de clases que yo o

meten sus propios estilos vale entonces

de entrada yo requiere un día

que envuelva todo que vamos a ponerle

por clase side bar

ok ahora al interior de este 10 bandas

va a van a estar los distintos

elementos componentes el primero de

ellos es un componente que llegue por

clase o bueno sección que lleve por

clase sidebar top y aquí vamos a meter

un buen encabezado vamos a poner aquí

servidor de la suite porque no vamos a

meterle un expand moore

y hasta ahora esto debiera haberse más o

menos aquí dónde está mi

navegador aquí está

así servidor de las fit o perfecto vamos

a volverlo en grande nos regresamos aquí

el código y bueno este es el sidebar top

muy bien después del top o encabezado

viene la parte de canales entonces vamos

a crear un día que lleve por clase

sidebar

channels porque quieran estar todos los

canales y lo pongo en inglés porque es

importante que se vayan familiarizando

con este estilo y esta forma de nombrar

los elementos ahora dentro de este

listado vamos a tener otro dif cuya

clase va a ser

sidebar

channels refiriéndonos a que estamos

aquí vamos a poner header porque este es

el encabezado

o la sección de encabezado porque al

interior

ahora sí vamos a encontrar otro dif con

clase

sidebar

heather a que me comí un guión

y aquí adentro vamos a poner una

span more

y vamos a meterle un h4

esto es intentando simular un poco el la

apariencia de discriminamos a ponerle

canales de texto que tiene mucho tiempo

que un antiguo la discordia hecho ya

dice cómo se verá estos días entonces de

aquí cerramos este día y ya está lo que

sigue ahora seguimos dentro del

encabezado tenemos el del texto y vamos

a ponerle el botón para añadir canales

entonces para añadir canales vamos a

poner el up hay con 9 perdón

y aquí vamos a ponerle como clase el

sidebar

ya no tiene un clic de momento no vamos

a hacer nada vamos a ponerle un con solo

que diga este no sé canal añadido por

qué no

muy bien cerramos este elemento

cerramos el 10

aquí me marca es roja

sistema de marca error porque nada

porque aquí no me tienen dónde

sabéis y borró este de aquí

y hasta no teníamos una extra que

agregue extra bienvenido a todo pero ya

estamos aquí sólo tenían que ahorrar ese

extra que sentimos nos regresamos a la

aplicación y deberá verse así servidor

de la suite o canales de texto esté aquí

es el que nos va a estar añadiendo los

canales que ahora mismo lo único que

hace es imprimir canal ha añadido muy

bien

chula continuamos entonces este header

ya lo podemos cerrar

porque ahora lo que sigue

dentro de este mismo side words channels

lo que sigue es crear ahora si el

espacio donde van a estar listados todos

los canales entonces que metemos un 10

cuya clase sea

hyde park channels

list

vamos a llamarla así

y aquí vamos a mapear los canales que le

damos de este fire list pero como de

momento no tenemos nada esto vamos a

dejarlo vacío en todo caso vamos a

comentarlo y vamos a poner aquí

mapear canales más adelante

por qué no

entonces aquí este es el espacio para

los canales aquí los mapeados

y después de haberlos mapeado lo que

sigue es la parte de del perfil entonces

a mostrar la fotito el nombre y todo eso

mal entonces esta parte de canales ya

está lista y lo que sigue como les decía

es la parte de el perfil entonces para

esta sección de perfil voy a poner igual

otro 10 cuya clase será si así es

adivinaron bien salvar

profile profile no no sé cómo se

pronuncia y aquí al interior de profanar

hemos lo siguiente ocuparemos el

componente de avatar que importamos

previamente la librería demasiado guay y

aquí ojo que avatar recibe este un

componente que es source aquí vamos a

indicar de dónde queremos que saque la

foto de momento no tenemos este la foto

del usuario donde vamos a dejarlo en

blanco a ver si no me manda error

y este lo que si además del avatar vamos

a meter un día cuya clase

class name será sabor

profile indicando que pertenece queremos

añadir inc y como podrán deducir

añadiremos la información que

información dos elementos el nombre de

usuario

y en el código

yo creo que es número no me acordaros de

si tiene tiempo como utilizo disco

redondel el pin creo que es el pin

entonces lo ideal es que esta

información la saque del usuario pero de

momento vamos dejarlo así y vamos a

echar un vistazo mira aquella marca

error por la fuente vamos a meterle

este sitio que les mencioné https

pixon

puntos foros diagonal

es un buen 420 muy bien compilamos y ya

está

listo tenemos nuestras tres secciones

top canales y profile todo dentro de 6

bar y aquí está como pueden ver nombre

de usuario código la fotito y listo

entonces regresando a nuestras

instrucciones

vamos a terminar de configurar esta

parte de perfil que como pueden ver aquí

riviera revilla deberá recibir el nombre

y el código open como lo haremos muy

sencillo muy sencillo todo es muy

sencillo en esta vida regresemos a

recordemos que en app que es donde

digamos que se hospedan el sidebar y el

chat screen aquí en bar bar en app

tenemos este usuario global que cuando

se inicia sesión guarda la información

del usuario de fair play y es esta

información aquí estaremos utilizando

entonces que está llevar vamos a pasar

el usuario vamos a pasarle usuario

global es igual a

usuario global de modo que ahora este

componente tenga acceso a este state a

este estado y aquí le indicamos oye

sabes que hoy está recibiendo usuario

global guárdame lo así como tal muy bien

entonces aquí en profile por ejemplo

la foto no la vamos a sacar de aquí la

foto la vamos a sacar d

de de de vamos a ver no vamos a sacar

que me siempre se me olvida vamos a

imprimir en pantalla

este objeto de usuario global para que

vean de qué consta para que lo conozcan

se familiaricen con él sean amigos de

este usuario global aquí de vuelta a la

aplicación vayamos a consola

y aquí está y usher está toda la

información que tenemos guardada en

nuestro estado de donde sacamos la foto

la sacamos de foro diario de donde

sacamos el nombre de display ning de

donde sacamos el código el código lo

vamos a sacar de él y whitey vale

entonces toda la información está la que

genera airways nosotros la vamos a

aprovechar

entonces hagámoslo de la siguiente

manera entonces la foto sale de usuario

global punto display no era futuro

foro y barrio

muy bien el nombre de usuario los

sacamos de usuario global punto display

name

y el código lo vamos a sacar de usuario

global punto y white y perfecto

regresamos a la aplicación

pero qué cresta

y aquí como pueden ver ya está mi foto

adrián salgado pero fíjense que este

código está larguísimo y esto es porque

el wide y está pues es larguísimo todo

lo que vamos a hacer es recortarlo para

ello regresamos a la aplicación y aquí

vamos a ponerle un método que se llama

sub string y vamos a indicar qué tan

largo queremos que sea decimos empieza

del 0 termina en el 4

aquí está y el 50 este es mi código para

que me agregan en esta copia de disco

perfecto ya está entonces revisión a la

lista de tareas perfil y sesión chula lo

que sigue es agregar canal como vamos a

agregar canal con este botón que

añadimos aquí recuerdan que de momento

sólo nos imprime en consola

canal añadido pues vamos a crear una

función para que en verdad agregue

canales

entonces para ello este parte de

profecía la cerramos regresamos aquí a

saber channels y aquí tenemos en el

header

el botón de agrega

entonces lo que haremos es lo siguiente

al momento de agregar vamos a correr la

función que se llame agregar canal que

el listo que son goku va

con estos nombres están tan chulos ok

entonces

agregar canal lo que va a hacer es crear

una entrada en nuestra base de datos

entonces vamos a agregar canal

para trabajar con nuestra base de datos

como habrán podido deducir tenemos que

el número uno vamos a ponerlo aquí

después de los elementos

número 1 impuestos importar fair rise up

y número 2 importar la función para

firestorm

firestone que la función al igual que

todas comienza con 10

firestone y esto de aquí lo vamos a

guardar en una constante que se llame

firestone muchos le ponen esto dará veis

además nueve faster y la corremos con

nuestras credenciales como argumento

y hasta ahora para poder crear una

entrada

necesitamos número uno indicar donde la

queremos para que ocuparemos no vamos a

ocupar 2

doc y said doc

con esto creamos una referencia al

documento que queremos crear y con esto

le añadimos información entonces aquí en

agregar canal primero vamos a decir

el nombre del canal es igual a pie de

celo al usuario vamos a ponerle aquí

cuál es el nombre del canal

y luego si la persona

si metió un nombre de canal que puede

ser que lo haya dejado vacío vamos a por

la función que consta lo siguiente lo

primero es crear una referencia al

documento que queremos crear do courel

es igual a doc docx recibe fair store

como argumento y el path regresamos a

regresemos aquí a fire veis a la base de

datos entonces recuerden que la idea era

tener colección canales al interior el

documento con el nombre del canal y al

interior otra colección con los mensajes

entonces con dice paz se refiere a esto

imaginen que es un un sistema de

archivos de su computadora entonces

quien pad vamos a ocupar el famosísimo

template strings para poder ocupar

información dinámica

y aquí haremos lo siguiente el path es

igual a como se va a llamar los canales

y al interior vamos a crear un documento

que tenga por nombre el nombre del canal

que la persona el usuario haya decidido

ya que tengamos la referencia vamos a

ocupar esta función de este 2726 lo que

nos pide únicamente la referencia de

curet y la información aquí en

información ustedes pueden trabajarlo

como deseen lo que yo haré es crear dos

propiedades bueno que sea haití y la

idea va a ser igual a

la fecha de ahora get time

qué estoy haciendo quiera coman y el

nombre en el cual vamos a repetir una

vez más el nombre canal

perfecto entonces ya con esto vamos

estar agregando canales cuando la gente

haga clic en el botón de añadir vamos a

ponerlo a prueba me vengo para acá

hacemos clic vamos a ponerle a llamar

general aceptar

aunque esto esto es un error de la

actualización imagino porque si me vengo

para acá aunque probamos una vez más

vamos a ponerle en general

y listo no pasó nada y aquí debiera de

estar

la colección de general como pueden ver

con la información del nombre y el aire

muy bien entonces esta parte de añadir

agregar canales ya está funcionando pero

ahora lo que sigue es que al agregar el

canal se muestra aquí como como está en

la lista de canales vamos a agregar uno

más vamos a ponerle reglas aceptar

vengo para acá y actualizo

aquí está funciona muy bien todo lo que

sigue es que se muestren aquí

para ello para ello para ello para ello

lo que tenemos que hacer es

cerrar esto de aquí

cerrar esto de aquí y aquí está esto

tenemos a cerrarlo

aquí nos chanel louis que es dónde va a

estar la lista de canales

tenemos que mapear todos estos canales

que ya hemos añadido como lo hacemos lo

que tenemos que hacer es

pues

este llamar esta información se recuerda

honda y luego guardar la que está en

algún estado y mapear la es lo queremos

desde aquí vamos a crear una función

esto tiene que ser a síncrona porque

vamos a estar estoy recuperando datos

sin function se llame que canales

y me quemé combina s

y aquí funciona muy similar primero

tenemos que crear un arroz una

referencia preocuparemos collection y

luego vamos a ocupar una función que se

llama get

ok muy bien entonces primero lo primero

la referencia a la colección se llama

canales eso nos poner a que constante

collection red es igual a collection que

recibe por argumentos fire store y en

segundo argumento el paz

y nuestro pan pues curiosamente sólo es

canalis

luego vamos a obtener los datos que dos

nos recibe una referencia o query

entonces qué vamos a pasarle

collection red

y lo que de docs va a ser es que nos la

información pero ojo esta información

digamos a mí me gusta decir que ésta

está cifrada porque no es la información

que requerimos vamos a ponerlo const y

vamos a ponerle canales cifrados

es igual a white

esto es información que no podemos ver

lo que tenemos que hacer es

y traducirla con un método de fires no

sé a qué se llama deira para ello vamos

a correr canales cifrados punto for it

y aquí por cada canal

cifrado

queremos que nos devuelva el canal esté

correcto entonces qué vamos a guardar

los primeros en una revancha amarlo cons

canales art es igual a esto es lo que

tenemos decir

lupe a cada uno

canales art for each no no no no no

canales art punto puig

queremos que me guarde en este rey cada

canal cifrado

pero con la información

que es de ira

de ira es un método que nos da fire face

no hace aquí me puso mal es así canal

cifrado punto de ira y al final vamos a

bloquear en pantalla

aquí a ver en pantalla este rey que sí

que se llama canales

aquí tenemos temporalmente la

información de todos los canales

pongámoslo a prueba quien me up

inspeccionar

con solá

vamos a actualizar

a es que ojo y aquí lo que yo hice fue

definir la función pero no la estoy

llamando en ninguna parte apenas la

estoy definiendo pero no la he llamado

error de novatos a todos nos pasa pero

antes antes de cerrar es esta parte de

aquí no me gustaría que se quedara en

una variable interna lo que tenemos que

hacer es crear un estado

que se llame

lista canales sed lista canales

y esto va a ser un estado que

inicialmente va a estar vacío ok y al

final en lugar de lograrlo en pantalla

vamos vamos a lograrlo para que estemos

esté aquí seguros vamos a guardar estos

que estos canales en en el estado

entonces decimos ser lista canales es

igual a canales

como pirata

o que ya definimos la función cuando

tendría que ser llamada esta función que

nos muestra los canales muy sencillo tan

pronto iniciemos sesión deberíamos

encontrar toda la lista de canales y

para ello vamos a ocupar un bus effects

entonces aquí vamos a poner un efecto

que va a cargarse una sola vez por eso

dejamos esto vacío

y aquí vamos a correr una función

que lo único que va a hacer es llamar

get canales

y listo ahora si tan pronto entremos se

corre canales y tan pronto que el canal

estén de la lista nos los bloquea en

pantalla y lo guardó en el estado vamos

a ver si es cierto bueno aquí en el

marcador actualizamos y aquí están mis

dos canales general y reglas funciona

pero ahora hace falta que se muestre

aquí entonces aquí borro este blog no me

gusta que tiene de de texto en la

consola

y lo que tenemos que hacer es mapear los

desde aquí que vamos a mapear el estado

de lista canales

entonces vamos a hacer lo siguiente

vamos a hacer

sí

lista canales

existe si ya ya recibió la información

porque esto da síncrono si lista canales

ya tiene información entonces lista

canales mapea melo

y por cada canal lo que vas a hacer es

que de momento vamos a poner un 10

un día y aquí vamos a

pasar

el canal punto nombre

pero ojo como metí este el el operador

terciario qué pasa si no existe lista de

canales si no existe lista canales no

hagas nada

muy bien nos está compilando nos

regresamos al navegador

actualizamos

\[Música]

aquí está pasando al

porque me faltó el ratón no olviden el

árbitro aquí vamos a encerrar esto en

paréntesis

guardamos y ahora si ya le estamos

indicando que queremos que regrese esto

de aquí

y aquí está que vamos a realizar esto

aquí está ya nos lo está imprimiendo en

pantalla entonces lo que yo voy a hacer

es bueno y texto lo hice de rápido pero

lo que vamos a hacer es pues devolver un

elemento bien entonces aquí en lugar de

regresar este día vamos a regresar un

componente vamos a crear lo que se llame

se va a llamar

canales 1 canal en word

pero este canal en side bar no existe

vamos a crearlo en componentes

como el puse

canal en software js

el que vamos a

para crear este este elemento para

poderlo regresar con el mapeo y tenemos

que recibir el nombre

del canal y un aire para que no hayan

problemas

con el mate o este tip vamos a ponerle

por clase

esa board chano

y al interior es tener un h 4

y al interior tengo un spam cuya clase

sea

por chano hush hush este es el simbolito

de de gato ahora no sé cómo lo llaman en

su país aquí en méxico es gato

e inmediatamente después vamos a

imprimir el nombre que es el nombre del

canal

cerramos el h4 cerramos el dif y ya está

entonces nombre en haití

y aquí ponemos nombre es igual a

en el punto nombre

y allí es igual a canal punto recuerden

que estas propiedades las estamos

sacando desde nuestra base de datos así

es como se están guardando

entonces aquí de vuelta en la aplicación

ojo me falta importar la canal en salvar

no está definido vamos a importarlo

después de el material y guay

en él guardamos y aquí está canales de

texto entonces ya podemos añadir

vamos a ponerle juanito

ya podemos leer pero a su fin sé que

quiero añadir no me lo actualizo lo que

debo hacer entonces es podría cambiar

este efecto para que dependa de la lista

canales o lo que puedo hacer también es

que al añadir

se corra nuevamente el canal es entonces

aquí después de agregar canal vamos a

poner get canales

y listo si yo agrego otro vamos a

ponerle a este

agregando an

aceptar listo me los está añadiendo

todos chulada entonces ya puedo agregar

ya la información del perfil ya me los

lista lo que sigue es que cuando yo haga

clic acá

en el canal de general en la parte del

chat me sale sus mensajes del canal y me

permita formar parte de esa conversación

pero y vamos a trabajar este elemento

este componente de chat screen cerramos

todo esto

y vámonos a en dios vamos a chats

creemos el resto de aquí aquí andamos

charles queen entonces recuerden el

empecé aquí no es el estilo entonces voy

a emitir un poquito esta parte vamos a

hacerlo como lo hemos estado haciendo

pero lo primero aquí vamos a estar

trabajando con tres hubs o tres ganchos

el primero famosísimo estado el segundo

yo diría que este es el segundo más

famoso y usted ve que por supuesto claro

que sí y por último uno bastante raro

casi nunca lo veo el juz red

y vamos a cerrarlo y lo siguiente es

importar todos los

componentes que necesitamos de la

librería de material igual

para ello vamos a traer la círculo desde

donde desde itunes

entonces acercó credit card que más gay

que más

emotions y por qué no y ya muy bien

y aquí este cómo va a estar nuestra

pantalla de chan chan screen esto lo

borramos ok de entrada de entrada un

dibujito

visita cuya clase sea chat muy bien y

aquí vamos por partes primero haría

falta un encabezado

aquí voy a hacer un componente que

entonces mientras lo pongo en cabeza

luego lo siguiente es la parte donde van

a estar los mensajes entonces que vamos

a poner class name que sea chat mes

inglés

ok y aquí vamos a de momento vamos a

comentarlo

vamos a mapear mensajes de airways ok

esto para la parte de mensajes y luego

hasta abajo sigue un input

cuyo

cuya clase sea igual

chad

pero aunque el impulse se compone de

varios elementos

o varias secciones ok lo primero es

necesitamos un botoncito el de agregar

a ser com

ok y aquí éste ha aceptado

cómo se llama una propiedad

vamos a ponerle riches esto viene desde

metro arriba ya en orden mucha

importancia luego lo que sigue es una un

formulario siempre digo forma es un

formulario y aquí al interior es tener

un input

que sea de tipo texto

pero aquí es dónde va a escribir el

mensaje

vamos a estar de momento vamos a ponerlo

disabled vamos a ligar su valor a un

estado que vamos a crear vamos a ponerle

input

no sé llamarlo

input mensaje

ok

estruch se llama winding vamos a meterle

un change donde el range va a correr una

función que reciba el evento es decir

esto que estamos limpiando o tecleando

mejor dicho y esto lo vamos a modificar

nos poner el set input mensaje es igual

aquí es igual a target

es decir cada vez que vayamos

escribiendo se va a ir guardando donde

está en este de input mensaje

y además vamos a ponerle un place holder

un place holder que diga

enviar un mensaje a y aquí va a ir el

nombre del canal

nombre canal y vamos a dejarlo así vamos

a cerrar este input

estos estos no no existe en este estado

vamos a crearlo

vamos a hacer tiempo de mensaje y set

input mensaje es igual a jong joo state

que de inicio tendría que estar vacío

para que no haya ningún texto aquí en el

input y bueno después del impulso sigue

un botón para poder este estar enviando

este mensaje vamos poner aquí enviar

mensaje de hecho

y vamos a no vamos a las propiedades

vamos a poner lo dice también de momento

vamos a ponerle un nombre de clase que

va a ser child

simple varón y por último vamos ponerlo

como tipo submit ya está ok esto para

nuestra nuestro formulario y por último

del lado derecho del imputados a meter

como que unos y con hitos para que se

vea cada medio guapetón vamos a hacerlo

dentro de un 10 la clase va a ser chat

input hay camps

keiko nos vamos a meter aquí los

siguientes credit card

igual con función del área

de hecho todos llevan las vamos a

aplicar esto o bien no todos son

traficar el siguiente es gif

y el siguiente es en moi y emotions me

encanta ese nombre

échale un vistazo

ah caray

interesante

estamos en chats screen y enap estamos

que están pasando doctor garcía

aquí está nos lo puso abajo cuando

debiera estar de lo cual significa que

hay un problema con los estilos o con la

aplicación

ah claro es que me olvidado de algo ojo

esto esto me lo comí aquí en up tenemos

un nombre

klasnic

igual a

listo nos regresamos y aquí está aquí

está nuestro encabezado la parte de

mensajes que hemos mapeado y el limpio

de momento está

desactivado aquí primero lo primero la

idea es que cuando yo haga clic en

alguno de estos canales

la aplicación detecte en qué canal estoy

y en la parte de aquí de chat se

actualice de acuerdo al canal en el cine

que estoy que tendría que actualizarse

número uno el encabezado

número dos el input y número tres

los mensajes ok entonces para ello vamos

a comenzar con el encabezado este

encabezado vamos a vamos a crear porque

les parece

aunque

vamos a

componentes vamos a llamarlo

encabezado yo les recuerdo que sean

mejor que yo con los nombres yo soy

pésimo entonces aquí el clásico

componente de react

pero además de importar real vamos a

importar varios componentes desde la

librería de material de bajo cuales

tools iconos

vamos a poner aquí

itunes

\[Música]

y el primero es no

jones notifications segundo location en

tercero people

alt alternativo search porque no uno

para enviar y uno de ayuda

vamos a trabajar este encabezar en

causar buen es esta parte aquí arriba no

sigamos con estar acá y como lo haremos

muy sencillito lo primero aquí en the

codename es igual a vamos a meterle chat

jeter significa en cabeza lo que vamos a

dividirlo en

izquierda y derecha eso ayuda bastante a

no perdernos entonces aquí en clase

vamos a ponerle chat header led

y en la parte izquierda vamos a hacer

esto de entrada vamos a tener un h 3

que al interior va a tener un spam

cuyo class name

así es adivinaron es chat ver más y que

vamos a ir poner aquí el famosísimo

símbolo de gato y luego aquí ojo aquí la

idea es que cuando llega clic acá en

juanito me vaya al canal de juanito aquí

diga canal de juanito entonces aquí

tendríamos que meter éste

el nombre

nombre del canal de momento vamos a

ponerlo así

ya más ahora entramos a ser dinámico y

esto es para la parte de la izquierda

entonces esto de la izquierda ya lo

cerramos para seguir lo de la derecha

vamos a crear un 10 para la derecha cuyo

nombre sea chat edberg right

y aquí que vamos a meter puro y con la

verdad el primero notifications

el siguiente

location

el siguiente tipo alternativo

y el siguiente el siguiente será meter

un recuadro de búsqueda para ello vamos

a meter un dígito cuya clase sea chat

jeter search aquí en este librito vamos

a meter por supuesto un input de aquí

que estoy haciendo

un input

que sea va a ser falso la verdad vamos a

ponerle buscar

y aquí vamos a meter un serial con

search maicon ya es solito

y después de este día de búsqueda

manteniéndonos dentro de la sección de

la derecha vamos a meter dos más uno que

sea un centro

y uno que está en esto no es obligatorio

esto es puramente lo que deseen que yo

recuerde así es como se veía me vengo

para acá nada pero ojo que aquí en chad

screen no estoy metiendo la encabeza

vamos a importarlo

en fort encabezado chat

y aquí vamos a

guarda a renderizar lo encabezado chat

occasion arte fine

location si este cambio

ok location location

burnett

vamos a meterle location serie y aquí

vamos a meterle

location city

qué bueno este no es

éste no es bueno si les pasa lo que

pueden hacer bueno a mí lo que yo puedo

hacer es el tiro de itunes

y aquí

pueden buscar vamos a ver cuál es el

bueno

qué es este que se llama

cual ponemos chicos vamos a ponérselo

case john y paul browne vamos a meter un

mejor

rome se ve más conveniente

esto lo borramos room y location si te

cambia por room

aquí está chula muy bien entonces ahora

sí ya tenemos esto hay que volverlo

dinámico junto con esto lo que hay que

hacer es que al hacer clic acá se

actualice esto para ello vámonos

la aplicación

aquí en la aplicación

y vamos a cerrarlo aquí en aplicación

tenemos un estado que nos guarda el

usuario que ha iniciado sesión

ahora vamos a tener otro estado que nos

va a guardar el canal que se encuentra

activo vamos a ponerle canal activo

esta cosa

en el activo set canal activo

es igual a un estado cuyo valor inicial

es

y ahora la idea es que estos componentes

puedan estar modificando el canal activo

de modo que site board lo va a modificar

y ellos lo modifican y chad screen va a

utilizar esa información para

actualizarse entonces vamos a pasar ser

los como propios como propias

propiedades para que lo puedan utilizar

hasta eibar vamos a pasarle set canal

activo es igual a ese canal activo esto

me faltó meter lo aquí en un

bracket

y chad screen se va a alimentar de canal

activo que es igual a canal activa muy

bien ahora sidebar ya está recibiendo

esta función para cambiarlo vayámonos a

side board

vamos a

de estructurarlo ser canal activo para

poder utilizarlo

y quién lo va a actualizar

estos muchachos de aquí cuando hagamos

clic en ellos que recuerden que esto

está siendo mapeado

entonces aquí en esta parte del mapeo en

la parte del return cuando hagamos clic

en cada uno de ellos queremos que se

actualice con que con el nombre del

canal entonces vamos a envolverlos en un

10

este de canal salvar los envolvemos en

un 10

y al dif le vamos a pasar un click

que queremos cargar con el clic que nos

corra una función

que nos va a cambiar el canal activo por

canal punto nombre

y esta información no está recibiendo de

este mapeo ya está y ahora desde chat

screen vamos a recibir canal activo

aquí

enviar mensaje por ejemplo

vamos a ponerle un

un tiempo extra

no vamos a empezar

por él en casa aquí está

ya recibimos el canal activo

de acá ya se está modificando al hacer

clic lo que sigue es que en el

encabezado recuerden que encabezado

recibe

recibe

qué onda

debiera recibir

aquí nos faltó encabezado recibe el

nombre canal y este nombre de canal lo

va a poner aquí

nombre canal

entonces desde chat screen

encabezado le vamos a pasar la

información de cuál es el nombre del

canal y ahora tenemos aquí el canal

activo

nos veníamos para acá

y listo ya se está realizando

correctamente

chulada muy bien los recibimos en chats

green lo pasamos encabezado y encabezado

el ponente listo ahora en la parte de

input lo mismo

hay que resolver vamos a meterle un

template string con los famosísimos back

tics en inglés

y aquí vamos a

poner

canal activo que estamos

recibiendo

por qué

porque no me lo

para soler es igual a enviar mensaje a

ganar activos que andan

ah ya sé por qué vamos a ponerlo así

a ver

a ver que estoy haciendo lo que tenemos

que hacer es

mentar aquí él

a esta meta del bactec desde aquí

cerramos el back tic

y listo

entonces ahora el input nos va a leer

qué canal en qué canal estamos aquí

enviar mensaje a juanito general general

aquí abajo generar aquí arriba

pero fíjense qué pasa si yo actualizo

aquí me dicen

porque de momento no he escogido ningún

canal y por lo tanto esto es tan vacío

entonces aquí vamos a ponerle

y enviar

a este

qué onda con mi teclado

o dejarlo vacío

y ya está bien enviar mensaje a y ahora

sí chulada muy bien entonces ya se está

cambiando al canal ya nos lo identifica

que es lo que sigue leer los mensajes

que están en este canal pero de momento

no hay ningún mensaje entonces creo que

sería más conveniente comenzar por

enviar mensajes y es lo que haremos

bueno deje de seguir las instrucciones

saber leer canales ya seleccionar canal

ya

recibir canal ya escribir mensaje muy

bien estamos aquí ya que llegaban los

chicos escribir un mensaje desde aquí

muy bien

entonces vámonos a cerrar todo esto

vámonos a el chat screen de donde se

envían mensajes desde el formulario

aquí pero de momento está

desactivado porque está desactivado

porque yo lo dejara activo y no he

elegido canal lo que va a pasar es que

voy a poder enviar mensajes sin haber

elegido a canalis o será un error

entonces una vez que ya haya canal ya lo

podemos desactivar cuando ya lo podemos

desactivar o mejor dicho activar vamos a

poner aquí dice bolt es igual a si no

existe

esto es en una comunidad si existe el

canal

entonces esos fondos si no existe

entonces será sur

y esto copiamos y pegamos para el botón

y es lo que les decía fíjense aquí ya ya

y canarias puedo escribir pero si

actualizo y no hay canal no puedo

escribir muy bien ahora la idea es

enviar el mensaje que hayamos guardado

en este estado de input mensaje

entonces quién forma vamos a meter

una función que se va a llamar enviar

mensaje

y va a recibir el evento y esto para que

no me lo corra de un principio vamos a

meterlo con un aro fons muy bien ahora

esto no existe

vamos a

lester

definirla

vamos a crear una función que se llame

enviar mensaje

lo primero

prevenir por bent default

entonces ahora si yo me vengo is not

fine

bueno no mentira que estoy haciendo aquí

simple y sencillamente lo corremos así

aunque ya está yo me vengo acá

el hijo general y le doy enter

no se refresca porque porque ya evite

que se actualice aunque lo siguiente es

en

este crear una referencia

a la colección en la cual queremos

guardar el mensaje por ejemplo si yo

estoy en general donde quiero guardar el

mensaje lo quiero guardar aquí en

general en la colección que se llame

mensajes

vamos a meterlo así de rápido

no no lo voy a meter entonces aquí va a

haber una colección que se llame

mensajes al interior de este documento y

luego al interior esta colección van a

estar los documentos de mensajes

entonces todo este caminito todo este

paz lo que tenemos que definir en

nuestra referencia

para ello así es vamos a importar fire

race up

está loco

firefox

porque no me lo está adivinando

credenciales y que más vamos trabajar

con fire por entonces importamos

baird face llegó

firestone

y aquí vamos a jalar la función d

qué

firestone

y vamos a dejar la función del doc y set

2 y por último guardamos esto en uno que

se llame

no estoy haciendo

fire store es igual a get fire sólo

gramos en fair play

y ya estamos listos para trabajar con

first gulf air race of war stories es lo

mismo lo que haremos es primero la

referencia a todo este caminito entonces

vamos a hacer los 111 tonos ocres

es igual a 2 que nos recibe primero

firestone luego el famosísimo

pasa que vamos a ocupar estos tiempos

strings y vamos a lo siguiente nos vamos

a ir de canales de esta colección al

documento que estemos en canal activo

los canales diagonal

canal activo

y luego diagonal nos vamos a ir después

a una colección que se va a llamar

mensajes

y luego después

vamos a

a

nombrar al documento por

la fecha en que se envía esto para que

sea más conveniente entonces para

generar este timestamp pero para que nos

dé este números secuenciales de acuerdo

a la fecha vamos a decir new day

punto

\[Música]

entonces ya tenemos la referencia del

caminito lo que sigue es

guardar la información del mensaje ahí

vamos a decir set doc

y aquí la vamos a pasar primero la

referencia que es do courel y luego los

datos qué datos queremos pasar

4

vamos a llamarlo foto

vamos a pasarle

el usuario

vamos a pasarle el mensaje y una indica

la i d y va a ser la fecha

entonces

la idea es la fecha

no se deja copiar

lo mismito

luego el mensaje vamos a pasar el

mensaje recuerden que se está guardando

en input mensaje y

mensaje

usuario y foto de dónde van a salir

usuario y foto van a salir

desde acá desde el usuario de fire veis

entonces a chad screen vamos a pasarle

el usuario global

vamos a pasar el usuario que va a ser

igual a usuario global

para que chad screen pueda tener tener

acceso a este usuario global

a través del propio usuario entonces

queremos decir foto es igual a usuario

punto foto ariel y el usuario va a ser

usuario punto

display

y por último ya que se haya enviado el

mensaje que borrara el limbo entonces

hicimos

setting el mensaje de gemelo

déjame lo vacío

y listo

esto se va a activar cada vez que el

formulario sea enviado y vamos a ponerlo

a prueba

vámonos aquí a generar al fin sé que

ahorita solo tenemos esto aquí actualizo

me voy a generar

vamos a ponerle probando ando enter

venimos para acá

actual liso

dice que en general ya se metro la

colección de mensajes y aquí está el

documento con fotos de mensaje y usuario

vamos a enviar una más

probando en todos

y aquí ya está inmediato muy bien

entonces

escribir mensaje

lo que sigue ahora es

en los mensajes

para ello la idea es que

cada vez que yo entré aquí yo cada vez

que quique que abra el chat se

enlisten se me renderizan todos los

mensajes pertenecientes al canal en el

cual estoy ahora mismo yo lo voy a hacer

entonces para ello me voy a venir aquí a

chats screen

aquí

y

la parte d

dónde está aquí

mapear más mensajes de fire bis aquí es

donde lo vamos a mapear

pero vamos a mapear un componente de

mensaje que es lo que vamos antes de

empezar vamos a crear aquí

mensaje punto j

y creamos una pequeña plantilla y aquí

mensaje va a recibir

mensaje

vamos a ponerle otro nombre más

descriptivo mensaje

fire page

muy descriptivo entonces aquí tenemos el

mensaje aquí vamos a importar desde que

se me olvide el famosísimo avatar

y aquí dentro del día vamos a ponerle

por nombre

m 6

y ahora aquí la idea es recibir este

mensaje de fires ok entonces vamos a

decir lo siguiente

\[Música]

a ver cómo lo hacemos cómo lo hacemos

vamos a

vamos a correr aquí en el avatar

cuya foto va a ser igual

en el mensaje the fire veis

aquí en cada mensaje en la propia que se

llama photo x 11 que la información

la fuente a este mensaje fire veis punto

foto

y cerramos este avatar muy bien ya

tenemos el avatar lo que sigue es que

del lado derecho haya un día que tenga

por clase

meses

ok aquí qué información necesitamos

primero una

ch4 con el nombre del usuario el usuario

lo sacamos nuevamente del mensaje que

está

el mensaje usuario vamos a pasar

mensaje punto usuario

ok que más necesitamos necesitamos

la parte de la fecha

para ello lo que vamos a hacer es dentro

del h 4 vamos a meter otro spam como ya

hemos venido haciendo cuyo clase a

message

times

y aquí dentro de este spam que vamos a

pasar la fecha entonces decimos mensaje

fire veis haití pero fíjense que este es

un número es éste los milisegundos

lo que toca hacer es convertirlo este

número de vuelta a una fecha entonces

aquí vamos a decir

este número

quiero que de él

quiero que de él me hagas una nueva

fecha y la fecha en lugar de guardarme

la como objeto quiero que me la muestres

en un

en un string acorde al formato local muy

bien entonces ya tenemos el meses info y

tenemos el título la fecha lo que sigue

es aquí meter un

mensajito o la información del mensaje

que va a salir de mensaje fire veis

punto mensaje porque así lo hemos

nombrado nosotros entonces esto ya lo

podemos guardar

y ahora sí con este componente de

mensaje de vuelta en chats win aquí lo

vamos a mapear primero hay que importar

los chicos para importarlo al igual que

encabezado chat vamos a importar

mensaje

y aquí diremos lo siguiente

bueno primero hay que tener una lista de

mensajes

a ver cómo hacemos esto queremos

mostrarlo en un estado o no

aquí vamos a decir constante es decir

lista mensajes

sed lista mensajes es igual a news state

cuyo valor inicial será una risita

muy bien entonces ahora la idea es que

vamos a correr una función que nos sale

todos los mensajes los guardamos en este

a raíz de mensajes y dicho a rey lo

renderizados aquí esta función de jalar

los mensajes tendría que

ejecutarse tan pronto abramos la

pantalla entonces primero hay que

definir una función que tiene que ser

así un crono porque vamos a estar

trabajando con datos que sea get

lista mensajes

y luego lo que sea que ocurre aquí lo

vamos a ejecutar en un efecto

y va a correrse únicamente al inicio que

llegamos vacío

y entonces dentro de este dentro de este

es efectiva moza correr que lista

mensajes

muy bien entonces ahora sí vamos a

trabajar esta lógica de jalar todos los

mensajes y guardarlos aquí para que se

rindiesen lo primero que hay que hacer

es crear una referencia hacia la

colección desde la cual queremos

descargar los mensajes o los documentos

en este caso para ello diremos como

siempre este conexión red es igual a una

más que aquí saben que me faltó jalar

está aquí collection ahí lo tienen con

la colección ref es igual a collection y

aquí recibe por argumentos wire store y

recibe el famosísimo paz que nos va a

llevar a la colección desde la cual

queremos trabajar que en este caso este

queremos irnos canales

luego el canal

y luego la colección de mensajes y es

está aquí con la cual estaremos

trabajando y este paz este camino es de

hecho aquí nos lo da vean aquí está

este es del path

esto lo tenemos que replicar desde aquí

obviamente esto es dinámico y esto va a

depender del canal activo y como es

dinámico vamos a meter las famosísimas

bactec para el temple string muy

importante chicos familiaricen con los

nombres en inglés es muy pero que muy

importante entonces estos son los back

tics y hacemos canales diagonal a que

dejen el regreso canales diagonal y está

la parte dinámica

cualquiera que sea el canal activo

diagonal y no importa en qué canal

estemos siempre va a haber una colección

llamada mensajes

entonces ya con sus tenemos el path y ya

tenemos la referencia a la colección

lo que sigue

este ya tenemos la referencia jalar los

documentos

y para ello vamos a ocupar get box

qué docs este tampoco la importe vamos a

importar las desde aquí arriba y get

docs recibe este algún cuadro o

referencia entonces vamos a decirle

trabe los documentos desde

cole aquí lo tengo en español colección

ref

pero ojo que esto de aquí nos jala

información nos genera una promesa vamos

a ponerle su bueno wait y además

esto que no se entrega no son los

documentos en sí son como una especie de

paso intermedio es como que están en

chino con que están en jeroglíficos

vamos a llamarlo

mensajes pero glíficos porque

jeroglíficos porque es necesario

interpretarlos por cierta por cierta

manera de cómo decirlo de cierta forma

interpretarlos con el método de ira o

dar dependiendo como lo pronuncien

entonces lo que vamos a hacer

antes de meternos aquí con fire veis

vamos a crear una red que se llame

mensajes art es igual a una red vacío y

ya que tenemos el jeroglífico vamos a

interpretarlo con mensajes jeroglíficos

punto for each

y entonces lo queremos es por cada

mensaje que exista

lo que haremos es meter la

interpretación de dicho mensaje en este

río entonces ponemos mensajes art puntos

y que vamos a meter vamos a meter la

interpretación y como lo desciframos con

mensaje punto de ir a derá es un método

que nos brinda fire rise para descifrar

esto está que está en chino que no se

entiende nada créanme yo le echaba un

ojo no os entiendo nada muy bien y ya

con esto lo único que nos haría falta es

todos los que metimos aquí esto es un

arreglo interno la función lo que hace

falta es actualizar el estado nuestro

estado de lista mensajes para ello

decimos sed lista mensajes y aquí me vas

a poner todo lo que yo guardé en

mensajes ahora

facilitamos

esto es un paseo muy bien ya está la

función para obtener los mensajes la

función ya está aquí en el giuseppe por

lo tanto se va a correr tan pronto se se

renderizar este componente y lo que

haría falta es el famosísimo

mapeo o que entonces para mapear

estos mensajes

aquí dije nuevo resto de aquí vamos a

primero revisar

que esta lista de mensajes no esté vacía

porque como es asíncrona en lo que va

por los mensajes lo guardo y todo ello

pasa a tiempo y eso da lugar a errores

los mismos revisamos lista mensajes es

verdadera si si corre m este código que

estoy a punto de pasarte y si no simple

y sencillamente no hagas nada

ahora qué código queremos que corra el

mapeo si lista mensajes es verdadera

entonces pondremos lista mensajes punto

map

y me va a mapear que por cada mensaje

me haces esta función donde me regresas

el componente mensaje que ya creamos

aquí está

y mensaje recibía como prop

el mensaje del fire guys y el mensaje de

fires x el mensaje entonces el mensaje

fire beige es igual a mensaje guardar y

zippy si muy bien entonces ya los

trajimos corre el inicio se actualiza el

estado estados verdadero me lo mapea y

lo imprime todo 2006 vamos a ponerlo a

prueba

aquí en general

no me imprime nada los dos teníamos

mensajes creo que era general verdad

vamos a revisar

aquí está así general

ok algo no está pasando bien vamos otro

ojo al código

o que aqui chicos muy importante revisar

siempre la lógica

tenemos la función que nos jala a los

mensajes

al principio del renderizado el primero

dejarán los mensajes

pero cuando venimos acá no está

y esto se debe a ojo con esto se debe a

que el primer renderizado del chat es

este en este primer renderizado todavía

no hay canal activo y como no hay canal

activo no me jala ningún mensaje 2 lo

que tengo que hacer es decirle este bus

effect quiero que me lo corras cada vez

que canal activo o cada vez que el valor

de canal activo sea modificado de modo

que el primer renderizado es este y

luego cuando yo hago clic acá se cambia

el valor del canal activo y por lo tanto

tendría que correrse esto una vez más

vamos a hacerlo así canal activo

guardamos y aquí está

juanito no hay nada en general aquí

vamos a ponerle este buenas noches

y aquí ojos fíjense que no me está

jalando el mensaje tendría que

actualizar para que me lea buenas noches

porque porque aquí en en enviar mensaje

no he escalado los mensajes una vez más

es decir después del mensaje que

hablarlos nuevamente para que se

actualice

ahora si nos venimos para acá y ponemos

buenas noches por dos ahí lo tienen

aquí está ya se envía el mensaje se

actualizan los mensajes se actualizan

cada vez que cambio de canal por ejemplo

aquí ponemos 123 vengo para acá todo se

actualiza de volada y ahora faltan falta

que falta falta ser el display pero aquí

les tengo un pequeño bonus por haber

llegado tan lejos número 1 filtro de

groserías y número 2

como lo llamamos vamos a llamarlo

deslizamiento automático

automática

la silla de puerta fíjense esto si yo

continúo escribiendo

va a llegar un punto en el que el último

mensaje va a estar aquí abajo y no se va

a ver vean 1 2 3 1 2 3 1 2 3 tendría que

deslizar

para que mi vista se ponga acá como

cambiamos esto muy sencillo nos

regresamos aquí al chat

recuerdan que decía que ocuparíamos y

red pues bueno cómo funciona ello será

básicamente grave nos genera una

referencia a la cual queremos tener en

mente

pulsaremos lo siguiente aquí en el

apartado de mensajes que es estar acá se

imprimen se se mapean estos mensajes lo

que vamos a hacer es que después de los

mensajes hasta abajo

vamos a agregar un día ok cuál es la

finalidad la finalidad es que después de

enviar un mensaje le decimos a la

aplicación muéstrame este ponme este en

pantalla y para ello haremos lo

siguiente

si le vamos a poner de revés igual a

ancor aquí le pueden poner cualquier

nombre el pongo ancoporc ángulo

significa ancla es una especie de ancla

y para que funcione este truco de que

jugar un poquito con el estilo vamos a

meterle este margen barón week vamos a

meterle no se ve margen para que esté al

salto aquí ponemos un buen margen varón

con que será bueno unos 55

y hasta ahora esta red lo vamos a

declarar más arriba

de la siguiente manera

vamos a

aquí vamos a hacer lo siguiente vamos a

decir que en cort o como sea que lo

hayan llamado es igual

y hasta entonces ya ya creamos la

referencia y sabe cuando yo digo ancor

me refiero a este de aquí está acá muy

similar a cómo funciona una idea pero

pero distinto y ahora lo que tengo que

hacer es modificar la función de enviar

mensaje

entonces en enviar mensaje además de

enviar mensaje y además de actualizarlo

le decimos quiero que

ancor cualquiera que está el valor

actual de ancor me lo scroll y es scroll

en chubut lo pongas en vista y quiero

que esté este deslizamiento

sea de tipo o tenga un comportamiento

suave bonito

muy bien entonces con esto ya cerramos

esta actualización de enviar mensajes y

fíjense que aquí el último fue el 1 2 3

4 5 6

789 que me lo pone en pantalla 10 11 12

aquí como que me corta un poquito la

cabeza entonces vamos a ponerle un 75

y ahí está guapo muy bien entonces

primer bonus completada el deslizamiento

automático y ahora el filtro de

grosellas la idea es que si yo aquí

pongo una palabra como no sé tonto que

no es mala palabra por último que me van

en que pongo esta palabra la idea es que

la aplicación le cambie el significado y

cómo funciona muy sencillo esto ya lo

podemos cerrar

aquí en enviar mensajes

fíjense lo siguiente al enviar mensaje

yo le estoy diciendo

el mensaje es igual a lo que sea que el

usuario te haya dejado en el link lo que

guardamos aquí en este estado y no

queremos eso queríamos pasar por un

filtro previo entonces vamos a crear

este filtro previo vamos a decir que

este

mensaje

va a ser igual a mensaje filtrado

josep con un

mensaje filtrado es igual

lo que me va a regresar esta función que

llamaremos filtrar contenido y a filtrar

contenido le vamos a pasar lo que sea

que el usuario haya dejado

entonces el usuario deja su mensaje

corremos esta función y lo que regresa

la función lo guardamos aquí y esto es

lo que se va a estar enviando

a este

a la base de datos va a ser el mensaje

final y obviamente este filtra el

contenido hay que definirlo

vamos a definir la función

filtrar contenido que va a recibir

este vamos a llamarlo texto original

y cómo va a funcionar muy sencillo

muchachos esto es un poquito de

lógica lo primero que hay que hacer es

crear un listado de malas palabras

siento como si tuviera diez años

hablando de malas palabras llamarlo

groserías

vamos a poner un array con todas las

malas palabras o con todo lo que quieran

filtrar yo voy a filtrar tonto

este \[ \_\_ ] que significa harry potter y a

éste no lo sé este m k estos son esto es

lo que yo quiero filtrar

entonces hacemos lo siguiente

de este texto que estamos recibiendo de

este es un string vale entonces yo voy a

crear una red con rey es igual

el texto original el cual va a ser

convertido en el rey

ocupando un famosísimo plate y luego

como esto ahora es un array vamos a

limpiarlo a rey punto for each

vamos a limpiar cada palabra vamos a

recibir la palabra y el index

y desde aquí me comí

un paréntesis

y desde aquí vamos a correr

una función estamos limpiando cada

palabra que dejó el usuario vamos a

revisar si esta palabra que está

poniendo el usuario está en la raíz de

groserías para ello decimos if am

groserías

incluye

esta palabra que está pasando el usuario

entonces que quiero que hagas quiero que

me cambies esa palabra para ella digo al

rey

index va a ser igual a y aquí ponen como

lo quieren filtrar vamos a ponerle unos

asteriscos

y

este aquí que pasó creo que se me fueron

los nombres filtrar contenido conte

y al final ojo este hay que regresarlo

ya terminamos el europeo

en lo peor a la risa como hablo español

e inglés y que vamos a poner return al

rey

listo

ahora sí este

qué onda mensaje filtrado

mensaje mira me conviene r

ahí está muy bien ya tenemos esta

función que tiene las malas palabras

y ahora por ejemplo si yo intento

escribir

tonto harry potter o m mortal kombat me

lo va a bloquear por ejemplo pongo tonto

\[ \_\_ ] m k

y lo tiene más poner son hijos de potter

pero ojo que aquí esté fíjense que me

está no está regresando todo junto es un

\[ \_\_ ] de tonto me lo regresa junto me

estoy comiendo un este

este espacio van más que comer un

espacio lo que pasa es que estoy

regresando este una red lo que tengo que

hacer es volverlo a string

con esto de aquí y listo en la red

y yo quiero que regrese antes y no una

rey vamos a ponerle es un \[ \_\_ ]

bloqueado papá muy bien entonces con

esto estaríamos terminando el filtro de

groserías

y hasta lista nuestra aplicación ya

podemos cambiar de canales podemos

agregar un canal este canal 25 aquí está

puedo cambiar un nuevo canal enviar un

mensaje puedo enviar tantos mensajes y

me pone siempre al último en lista y

puedes de aquí me faltó cerrar sesión

donde están mis iconos de ven grande

a ver

sí

aquí tenemos el profile y chicos qué

pasó aquí este magma con hilos los

engranes entonces lo que vamos a hacer

es que

esté dentro de este vamos a quiera poner

otro grupito

vamos a llamarlo con clases name es

igual a salvar profile ay camps y al

interior vamos a meter el mike micrófono

el headset

y él

settings

así se llama así no me equivoco

regresamos a la mira aquí los puse en

otro 10

profile profile info creo que este va

para acá

vamos a cerrarlo

y vamos a venir

listo aquí están nuestros iconos y la

idea es que al hacer clic aquí en el

engrane se cierre sesión entonces

abrimos nuevamente le pasamos una

función en un clic

así que un clic corre me un arrocito y

lo que quiero es que me cierres la

sesión

mira quién me lo adivinó mal sin out

design recibe como argumento

pero ni sainz ni están aquí en

importados

entonces lo que tengo que hacer es

work

fireplace

diagonal o recuerden que así es cómo

jalamos los servicios y la función de

stein out

y necesitamos decir que hoy es igual a

grado con fair beige

como argumento

listo ahora sí vengo hago clic me cierra

sesión

acceder con google

me inicia sesión

no hay nada aquí elijo un canal y aquí

están mis mensajes muy bien y ya como

paso final

el dipló y como hacemos diplo yo que

tienen su aplicación y quieren que el

mundo entero perdón el mundo entero la

conozca para ello nos venimos aquí a

hosting

el paddle fire es muy sencillo este

hosting

comenzar que tienen los pasos chicos

primero a tener instalado el sebai el

comando interfaz del día no sé cómo

seguir si ya lo tenemos si no lo tiene

instale no los siguientes acceder nos

venimos para acá abrimos una nueva

terminal

pegamos fire veis locking si no tienen

sesión les va a pedir que inicien sesión

ya tengo la mía o la arroba las citó y

luego les voy a pedir que su proyecto de

rayak lo inicial y dicen con un proyecto

con con ciertos archivos de fires no se

preocupen aquí les dice que quieres

utilizar quiere utilizar fire store

y el hosting

enter

aquí les dice que quieres este proyecto

hay varias opciones quiero utilizar un

proyecto existente

en este caso yo voy a ocupar el copia

dischord youtube

y aquí nos pide este como queríamos

nombrar ciertos archivos que se

requieren le damos que entera todos son

nombres este por defecto ojo aquí

que que este folder quieres utilizar

para el diploma

react este no utiliza el público o

público utiliza el que se llama peot

entonces aquí muy importante en que

poner blood y hable de esto en otro

vídeo anterior y aquí le decimos que no

que no

y listo ya creamos el enlace ya

preparamos todo ahora lo que hay que

hacer es decir la red sirve decirle qué

área oye créame un build un vídeo t es

una versión optimizada de tu aplicación

lo que veamos acá esto es desarrollo

está optimizado ya lo puedo cerrar se lo

puedo el siguiente

vigo que es una versión optimizada

entonces que corremos en pie

lo que va a hacer es que me va a crear

la versión optimizada me la pone aquí en

esta carpeta de build

y una vez que hayamos creado esta

versión de bild

ya la podemos enviar a fire miss y

créanme que toma unos segunditos es

súper rápido mientras tanto no estoy

bien darle me gusta suscribirse

compartir y dejar unos comentarios que

más vídeos quieren ver que otros

tutoriales les gustaría si no aquí en el

canal y con mucho gusto los creadores

aquí ya está y ahora sí ya con build

creado con los archivos en orden le

decimos a fire veis airways quiero que

me esperes lo que sea que esté aquí en

beauty

unos segundos lo carga visible hablan

chulada ya está aquí nos da el enlace

me dice que mi aplicación está en copia

dischord vamos a hacer clic para acá

y como pueden ver ya está aquí cargado

en la web y es exactamente lo mismo lo

que construimos

lo tiene para acá me respeta todo

los mensajes

este enviar

y listo muy bien entonces misión

completada por último

consideraciones

hay muchas consideraciones a tomar en

cuenta por ejemplo cuestiones de

seguridad

de las reglas para la base de datos que

está en modo prueba este el tema de la

autenticación aquí les recomiendo que se

fijen desde donde está autorizada su

aplicación el tema de validación es

formularios todas pero ya esto es algo

aparte es un tema extra aquí lo

importante es que sepan cómo funciona

más o menos una arquitectura para crear

una aplicación similar relativamente

similar a dischord cómo pueden

aprovechar fire si habrán ya habrán

visto es facilísimo no hay que montar un

servidor no hay que escribir código es

es la maravilla de fires nos permite

crear aplicaciones de relativamente bajo

tráfico o este prototipos pero bueno ahí

lo tienen espero que os haya gustado les

recuerdo que encuentran el código el

repositorio en la descripción del canal

y si les ha gustado dejen su buen me

gusta en comentarios vemos en el próximo

vídeo

\[Música]

nunca
