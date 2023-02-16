---
template: tutoriales
url: magic-link-auth-firebase-react
enlaceyt: https://www.youtube.com/embed/Mu4Iqqg1dTQ
date: 2022-03-11T02:09:51.439Z
title: Tutorial Magic Link Auth con Firebase y React
metaDescription: 'Aprende cómo crear un sistema de autenticación con Magic
  Link  (Enlace Mágico) a través de rutas con React y Firebase #tutorial #webdev
  #react #firebase  #passwordless'
tag:
  - Firebase
  - React
  - JavaScript
autor: Adrián Salgado
introThumbnail: 'Aprende cómo crear un sistema de autenticación con Magic
  Link  (Enlace Mágico) a través de rutas con React y Firebase '
keyword: magic link firebase
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/19-magic-link-firebase%2F19-magic-link-firebase.png?alt=media&token=34e259f3-c2a8-4413-be42-6d885b18b480
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo crear un

sistema de inicio de sesión sin

contraseña para lo cual utilizaremos

únicamente un correo como poder ahora

mismo tengo sesión iniciada lo que es

cerrar sesión

luego haré click en iniciar sesión en

que estaremos trabajando con una

aplicación con rutas o bien que estamos

en login voy a poner mi correo o la la

suite o acceder y se me envía un enlace

a mi correo esto lo habrán visto bajo el

nombre de password leds o magic wing y

donde sabemos de uno con fire page si yo

reviso mi correo pueden ver que a las 7

14 se envió este correo sólo pueden

personalizar no se preocupen yo hago

clic en acceder lo que va a suceder es

que me redirige me inicia la sesión me

lleva de vuelta a home y tengo sesión

iniciada una vez más vale y si les

interesa aprender a hacer esto

acompáñenme

[Música]

y antes de comenzar lo primero

recordarle dos cosas la primera es que

encuentra en el código de ese tutorial

en la descripción del vídeo y la segunda

es invitarlos a que se suscriban a mi

boletín habiendo dicho esto vamos a

comenzar y el primer paso es abrir una

terminal y dirigirnos al volver donde

queramos trabajar una vez ahí tenemos

dos opciones la primera es trabajar con

el pie yakup e instalar fire face o la

segunda mucho más rápida y sencilla

utilizar mi plantilla que viene

trabajada para reactivarlos para lo cual

haremos git from

colocamos la dirección de qinghai

seguido de las fit o riad files y

decidimos como queremos llamarlo yo lo

llamaría tutorial magic wing mencionamos

enter y nos va a clonar esta plantilla

una vez hecho esto ingresemos a la

carpeta y corramos en pie stop para

instalar todas las dependencias de esta

plantilla

una vez terminó de instalarse lo

queremos es abrir este proyecto con

nuestro editor favorito y abandonar la

terminal

entonces aquí tenemos todo el código y

antes de hacer nada vamos a ver que esté

todo funcionando a la perfección para lo

cual desde la terminal integrada

ejecutaremos en store

si todo ha salido bien deberán ver algo

más o menos así hollande con un botón

que dice bueno es que no hace

absolutamente

y ahora antes de continuar para esta

aplicación necesitamos tener rutas que

lleven a distintas partes de la para lo

cual vamos a ir a utilizar jack bauer

realmente logran conducir lo han

escuchado ya e instalarlo es muy pero

que muy sencillo basta con hacer clic

aquí en la documentación y ahí después

haremos clic en instó instrucción ya

tiene cuál es el comando que tenemos que

ejecutar como pueden ver es en bienestar

ya writer en la versión 6 es la versión

que estaremos utilizando entonces vuelvo

aquí en la terminal vamos a cancelar

esto de momento tengamos ejecutamos se

instalaría glover y estamos listos para

trabajar entonces cómo es que funciona

nuestra app muy sencillo la idea es que

tengamos un home el home va a detectar

si hay sesión iniciada o no y

dependiendo de ello nos dará la opción

de cerrar sesión o iniciar sesión

entonces todo esto nos indica que

tenemos que trabajar con un estado que

guarde si la persona ha iniciado sesión

uno para lo cual a quien source lo que

haremos es crear una carpeta que se

llame contexto en que vamos a crear un

archivo que se llame yo ser context

punto js

vamos a trabajar con contextos porque

nuestra aplicación va a funcionar con

rutas y cada ruta es un componente

distinto para lo cual si no queremos

complicarnos es muchísimo más fácil

tener un contexto al cual todos los

componentes y todas las rutas puedan

acceder lo primero que hay que hacer es

importar react desde riad vale y también

aquí mismo vamos a importar y state just

memo y create context ahora bien

importado esto lo que haremos es crear

un contexto como nos indica que en

pantalla vamos a exportarlo muy

importante esto se exporta pero ojo no

es la exportación default donde decimos

export commons y usher context y esto

sale desde acá y luego lo queremos es

crear un provider para lo cual ha

demostado como export function y digamos

y usher context of fire

esto es una función y aquí lo que

tenemos que hacer es crear el estado que

queremos estar siguiendo de manera

global pero tan sencillo como un usuario

sea de usuario y que esto sea igual a

uno steak que inicialmente estará

declarado o inicial izado como no y

también estaremos utilizando ius memo

para que no estemos renderizando de más

lo que nos permite es evitar que cuando

cambia algún valor o cuando no haya

cambiado mejor dicho se estén corriendo

ejecuciones y demás lo cual nos daña el

desempeño entonces haremos algo como

count valió values será igual a un news

memo ius memo lo que recibirá son o lo

que devolverá mejor dicho son estos dos

datos usuario hice de usuario giucich y

joose memo red devolverá siempre lo

mismo a menos que usuario haya cambiado

ok y ahora este mal con este mal y vamos

a retornar algo dentro de este proveedor

pero cuando iremos return

y aquí devolvemos un clúster count ex

este grabamos de crear bueno así no

mentir así y como value le vamos a pasar

o como valoramos a pasar y estoy acá

ahora esto el que cerrarlo

no esto hay que cerrarlo y entremedio

como esto va a ser un provider va a ser

un contexto hay que ponerle y aquí van a

ir lo que sea que se haya puesto en

medio de esto hay que sacarlo del proxy

muy bien y por último en este mismo

archivo de user context además del

provider lo que haremos es crear un

pequeño gancho en beijing que nos

permita acceder a estos valores desde

cualquier lado de la aplicación para lo

cual vamos a creado como sports

foundation y vamos a y marius visser

count ex y aquí lo que haremos es que

vamos a crear una constante que se llama

contexto y que vamos a revisar o vamos a

intentar acceder a este ya ser contexto

estamos creando aquí luego si este

contexto en este intento de acceder

arroja dónde find lo que significará que

estamos intentando acceder al contexto

fuera de este provide por lo tanto vamos

a arrojar un error que diga y esos el

contexto debe ser usado

jordi un contexto bayern caso contrario

de que si podamos acceder a esto aquí lo

queremos regresarlo y con esto ya

estamos trabajando de manera global esta

parte de seguir los datos del usuario se

ha iniciado sesión si no ha iniciado

cuál es su correo cuál son sus datos

etcétera y bueno habiendo hecho esto ya

terminamos quizás algo de lo más difícil

lo que sigue es crear una carpeta no

aquí no aquí crear una carpeta que se

llame así y el interior de vis vamos a

crear todas las vistas que estaremos

trabajando para nuestra aplicación la

primera en un home

y a quién son vamos a devolver un

componente cree que me digan algo como

bienvenido

vamos a crear otro vídeo otro componente

que se llama login y quien lo quien

vamos a devolver de mientras algo que

diga e inicia sesión por ejemplo luego

tendremos otro componente más el cual va

a darnos el mensaje de éxito después de

que la persona ingresó su correo y aquí

diremos algo como el enlace

enviado a equis correo por ejemplo y por

último vamos a tener un componente una

ruta que reciba al usuario una vez que

haya hecho clic en su correo reciba al

usuario verifica quién es quién está

intentando acceder verifica la

información y ya con ello inicia sesión

o no está funcionado como un login

y varios puntos así que haremos lo mismo

y aquí pondrá un show como cargando

ok ahora a quién vamos a trabajando con

rutas ok entonces lo que tenemos que

hacer es importar ciertos componentes

desde riad browser ok entonces lo que

haremos es

importar round y round en singular y en

plural desde real roberto muy importante

no se confundan y acto seguido borramos

esto de aquí todo esto de acá se borra y

aquí al interior este fragmento vamos a

devolver un rounds

y aquí vamos a aislar nuestras rutas y

adónde queremos que apunten lo primero

es entonces importar los componentes o

las vistas que acabamos de crear videos

con el login login y barrio y socias

vale entonces que haremos algo como esto

la primera ruta

road donde el pan es home y el elemento

que queremos mostrar es home lo que

sigue es login el login y un óleo y

access pero aunque aquí este login y

vamos a cambiarlo a algo como esto y muy

importante que home vamos a pasarlo

hasta abajo ok ahora con esto si yo abro

mi terminal y ejecutó en bienestar ya

podríamos estar navegando con estos

enlaces

cierto lo he olvidado muy muy muy

importante para que esta parte de graus

funcione rauch tiene que estar al

interior de un contexto que es el

contexto de la historia crowder para

ello vayamos a index recuerden que el

index estamos mostrando y entonces vamos

a envolverla en nuestros contextos aquí

dentro como contextos vamos a importar

ese llamado browser reuters

y este es importa desde riad brouwer dom

y de una vez vamos a importar también

nuestro y ser count ex para que todo lo

que está el interior de up pueda acceder

y hacer uso de esta información para

ello importamos y usted context provider

ojo que esteban mayúscula y un ser count

text provider desde aquí y entonces nada

vamos a envolverla en browser over the

news el context ambiente

más o menos así

aquí demanda error dice que esto está

mal decir context provider y hace aquí

me ha puesto una mayúscula

fíjense que el nombre del archivo es con

minúscula y ya lo tienen de vuelta ni

aplicación si yo actualizo pueden ver

que en home me dice bienvenido y si yo

escribo login me dice inicia sesión lo

mismo para el login y barrio y lo mismo

para socks es perfecto entonces habiendo

resuelto esto vamos a trabajar esta

parte de inicio de sesión pero para ello

tenemos que dirigirnos a fire 6.1

puntocom desde aquí y desde la consola

vamos a crear un proyecto yo lo llamaré

tutorial

email yo

continuara decíamos que no nos interesan

las analíticas y hacemos clic en crear

proyecto ante lo cual fire veis va a

crear servicios y aprovisionar espacio y

apis y demás para nosotros mientras

tanto se les usa el vídeo hagan clic en

me gusta suscriban y como siempre los

invito a que en los comentarios me digan

que tutoriales gustaría ver por aquí

aquí vamos trabaja únicamente con

autenticación y para qué necesitamos

comenzar este servicio

hay varios proveedores pero para este

paso no es el método para este método de

volverles de magical inc trabajaremos

con correo electrónico lo habilitamos

muy importante y aquí seleccionemos esta

opción de acceso sin contraseña

habilitamos y hacemos clic en guardar

muy bien y ahora vamos a crear una

aplicación recuerden que esto es el

proyecto y otra cosa adicional son las

aplicaciones aquí en ajustes deslizamos

opción web y nombremos nada web

lo que sea da igual aquí lo importante

es registrar la aplicación para que fire

veis nos dé estas credenciales desde

aquí copiamos y ahora si ustedes

trabajaron con mi plantilla aquí hay una

carpeta que se llama fire face dentro de

la cual tenemos credenciales basta con

pegar lo que habían copiado previamente

y guardar y ahora con esto lo que

hacemos es importamos esta función que

inicializa fair raise bore damos

credenciales e inicial izamos la

aplicación con nuestras credenciales

misma aplicación que exportamos para

poder utilizarla en cualquier parte de

esta aplicación de riad ahora bien de

hecho esto vamos a cerrar todo esto de

aquí que nos estorba y vamos a trabajar

con el login

ok entonces abramos login

y aquí lo queremos es muy pero que muy

bien si vamos a colocar un formulario

aquí primero acomodamos este título de

inicia sesión y ahora sí vamos a colocar

este formulario dentro del cual queremos

únicamente un campo que diga correo

vamos a colocar un input de limpio de la

secuencia que sea de tipo email bueno

creo que este era así

y colocamos un botón que sea de tipo

submit ok debieran tener esto lo podemos

cerrar deben tener algo más o menos así

y vamos a colocar el correo y ahora

fíjense que yo me vengo para acá y pongo

cualquier cosa y haga click en iniciar

sesión en la página para lo cual tenemos

que indicar la forma que queremos que

haga cuando alguien haga clic en enviar

para llevaríamos o definiremos esta

propiedad de on submit y aquí vamos a

pasar una función que la llamaremos algo

como que no los esté dejando

shopping lo que sea esta función no

existe vamos a crearla aquí al interior

del log in pero como función

que recibe el evento del envío lo

primero es el envío prevenir que se

actualiza la página

lo siguiente es recuperar este dato que

colo a quien colocó a quien imputó

podemos ponerle un haití que se llame

form

ocurre vamos a ponerle y utilizando este

y vamos a obtener el valor escrito para

cual haremos algo como comes correo es

igual a

documento

punto 2 valió o pueden utilizar también

hago como conste correo es igual a esto

vamos a borrarlo con tu residual de

target.com correo punto usuario es

exactamente lo mismo y ahora para ver

que funcione vamos a bloquearlo en

pantalla regresamos a casa abrimos la

consola y si yo pongo como 17 o clic me

lo imprime en pantalla ahora con este

correo lo que tenemos que hacer es

enviar seno fire beige para que fair

play se envíe el correo de de inicio

decisión de la persona y esto fíjense

que lo pueden personalizar si unimos

autenticación aquí en templates podemos

cambiar de entrada del idioma vamos a

cambiarlo a español

vamos a ponerlo al español siempre lo

pierdo

y es que no están usando está después

del ají

aquí está guardar y esto lo que dice

purificación por ejemplo y aquí puede

hacer clic en editar pueden este cambiar

estos datos pueden personalizar el

dominio vamos a hacerlo está fuera del

alcance este tutorial pero aquí lo que

importa es este que sepan que pueden

modificar todo esto de acá vale mientras

basta con cambiarlo a espanyol y ahora

de vuelta en la aplicación necesitamos

correr una función para que el correo a

la persona con lo cual aquí en dentro

del sol creemos otro folder que

llamaremos auctions y aquí crearemos uno

que diga enviar enlace el login punto

hot es que si yo y ahora aquí vamos a

ver trabajando con fire bridge para lo

cual es necesario importar esto de acá

entonces vamos a como import rise up

también como está trabajando con

autenticación necesitamos importar

ciertos elementos desde el fair play off

y uno de ellos es verón

efe

guetta o algo así y este de grado hay

que inicializar lo como más o menos esto

y ahora vamos a crear nuestra función

que se llame en export

default y vamos a llamar este enviar en

el hace login

y esta va a ser una

su función

que reciba únicamente el correo y ahora

cuando el correo en mano necesitamos

importar una función más la cual es se

está aquí enviar enlace de iniciación al

correo ahora antes de poder enviar este

enlace a este correo que estamos

recibiendo tenemos que definir ciertas

características de este inicio de sesión

con lo cual queremos una constante que

se llame este es un buen hombre ajustes

del código y estos son objeto que recibe

distintos elementos o distintas

propiedades muy importante son 211 la

más importante es la url que queremos

utilizar aunque ya dónde queremos

redirigir entonces qué vamos a hacer

utilizar esto a esto ahora está copiando

vamos a penado como url y esto va a ser

igual a

lo cause momentos los trabajos donde

está nuestra aplicación y antes a

producción aquí tendría que ser el

dominio real y el enlace desde donde

quieren recibir y atrapar estos intentos

de inicio de sesión o que los una

importante es que necesitamos definir

esta propia que se llama hand of code y

nada pues tenemos que guardarlo como

tour siempre no pregunten burgués todas

siempre tour y ojo si su aplicación en

lugar de ser web fuera una aplicación

móvil en android o en android o apple

aquí también podrían definir las

cualidades o bueno el bon delight y de

sus aplicaciones

y aquí es trabajar en comentarios porque

mi aplicación no es una móviles es una

web versus aplicación for mobile hay que

colocar el nombre de bond white y para

que el sistema operativo el teléfono lo

detecte y les abra esto en lugar de

abrir esto en un navegador o que

habiendo definido estas características

ahora ya podemos llamar esto de que

vamos a decir algo como send

y esto de aquí recibe tres propiedades

la primera y la segunda del correo y la

tercera estas características de aquí

y ahora como estamos en una promesa lo

que podemos hacer es esperar y ver que

haya salido todo bien

vamos a poner esta respuesta hacia la

respuesta vamos a bloquear en pantalla

éxito

de lo contrario vamos a atrapar un

errores y lograrlo en verde

ahora habiendo exportado esta función

podemos regresar al login

importar la función

y llamarla desde acá con el correo que

estamos recogiendo de limpio y ahora una

vez que hayamos

enviado esto fire beige vamos a

redirigir a la persona a la pantalla de

éxito pero lo cual vamos a importar aquí

un pequeño este un pequeño gancho que se

llama ils navigate y sólo vamos a

importar desde no desde aquí desde react

doblar el don

esto lo definimos como navigate

y con esto ya podemos redirigir a la

persona a la que llamamos success

y lo tienen

una que llaman de un error porque por

esto allí

y ahí está

ok

de vuelta a nuestra aplicación

si yo pongo aquí o la roba las fito y

hago click en iniciar sesión de éxito y

me redirige a la pantalla de fox es ok y

aquí fíjense que aquí hay dos cosas la

primera si en esta pantalla no me dice a

qué correo fue enviado porque esto es es

un string show que escribimos nosotros

esto viene a ser dinámico número 1 y

número 2 fíjense que si yo ingreso a mi

correo son las 748 y aquí tenemos en 748

que ya se envió a esto de acá ya

recibimos es crear una qualifica que

está funcionando pero pero si yo me

vengo para acá en fair race regresamos a

giuseppe fíjense que este usuario de

bala roba el hábito no se ha creado y no

se crea sino hasta que yo haga clic acá

en iniciar sesión en tonces ya me lo

crea entonces de vuelta aquí son dos

cosas la primera es esta parte del

correo y la segunda parte es cómo

continuar con el proceso ahora esto de

aquí es muy sencillo de resolver y de

hecho es algo que tenemos que hacer para

la segunda parte para poder atrapar

inicia sesión desde aquí entonces de

cuenta en nuestra aplicación

aquí enojan los ovnis después de que ya

recibimos el correo después de haberlo

enviado fire bis y después de haber

navegado bueno antes de navegar lo que

haremos es acceder a la pala windows

lo aquí ingresaremos a lo cause torres y

vamos a guardar un objeto un dato que

dato vamos a guardar el holocausto ahora

sí vamos a guardar el correo con el dato

de correo y por qué estamos haciendo

esto lo estamos haciendo porque éste los

autores lo vamos a necesitar para

iniciar sesión y lo vamos a necesitar

para que aquí en la ventana de shocks es

lo que haremos es lugar de poner algo

como esto vamos a aquí a decir con este

correo es igual a

windows o castro recién ayer en correo

aquí lo ponemos en pantalla

bueno aquí ya no aquí no dice porque

esto lo puse después de haber enviado el

enlace pero bueno se entiende aunque

ahora muy importante fíjense que yo hago

clic acá

le redirige me lleva a esta parte que

pusimos como blogging wild pero pero no

me inicia sesión y pueden saber que no

me inicia sesión porque

aquí en fire veis

si yo actualizo

sigo sin usuarios y esto se debe a que

no basta con decirle a fire veis hoy

queremos que vayas a local house 3000

usted este login drive no basta con eso

desde este componente tenemos que

atrapar la solicitud y trabajarla ok y

es lo que haríamos a continuación de

vuelta en la

vayamos a login y wilde y aquí lo que

tenemos que hacer es desde que atrapar

la petición para lo cual necesitamos

correr un bus effect

ok ahora dentro de este jeans effect

necesitamos correr correr función que

atrape el inicio de sesión

ok algo más o menos así ahora esta

función no existe hay que crearla vamos

a tenerla aquí en nuestra carpeta de

funcións y vamos a llamarla algo como

atrapar inició sesión

y ahora quiere atrapar a inicio de

sesión vamos a estar trabajando con fire

which por lo tanto estas tres líneas de

aquí vamos a copiar las y ponerlas aquí

también importamos la app inicializa

mosset y vamos caminando ciertas

funciones desde fires y desde aquí vamos

a jalar dos funciones la primera la

primera es para verificar que cuando yo

haya hecho clic aquí en verdad provenga

desde un enlace de acá porque está en la

semilla magaloni barrio pero yo bien

simple y sencillamente podría copiar

esto podría venir para acá y pegarlo sin

haber recibido un correo entonces pero

no tenemos que descartar que alguien

simple y sencillamente haya escrito esta

dirección queremos descartar este

escenario para lo cual vamos a importar

it's sign in which emailing estamos

revisando si está iniciando sesión y

ahora sí si están sanos ya no queremos

entonces es correr la designen with m

link ok y ahora aquí vamos a definir

nuestra función que se va a llamar

export default y atrapar

inició sesión y atrapar inicia sesión lo

que hará es recibir la url y ya verán

para que ahora primero tenemos que

descartar si es legítima está esta

visita al componente ok

para ello vamos a correr esto de acá

y vamos a pasar dos componentes lo que

estamos definiendo y la url que vamos a

recibir desde la función para esto nos

va a retornar grupo false dependiendo si

es válido y aquí vamos a definir algo

como si esto es válido

entonces vamos a ejecutar cierto código

caso contrario vamos en primer en

pantalla algo como no es un enlace de

inicio de sesión variado o algo así

y bueno que me enmarca error el tema de

estos brackets y es que me faltó definir

aquí la palabra function ok maría está

ahora primero verificamos que sea una

iniciación válido y si no imprimimos que

no es válido y no hacemos nada pero así

si es válido y sí sí estoy viniendo

desde un correo desde fire veis entonces

qué es lo que haremos primero tenemos

que

recuperar el correo y para ello diremos

algo como con su correo

registro es igual a window local storage

del aire del correo el correo que

habíamos guardado aquí al hacer login

tenemos que utilizar el mismito

habiendo hecho esto ya podemos llamar

sign in which emailing y fíjense que

sainz win win recibe dos componentes el

hot y el email y cuando la url son 3

perdón aquí ponemos correo y url ok

tenemos que usar el correo y url y ahora

esto nos va a devolver una promesa es lo

que podemos hacer es revisar que haya

ido todo bien si sí fue bien vamos a

imprimir en pantalla algo como esto caso

contrario vamos a atrapar el error e

imprimirlo en pantalla también hoy antes

tenía que es algo más que más serio para

manejar sus errores pero ahí lo tienen a

quien faltó correo registro ahora por

último y adicional sí sí tuvimos éxito

lo que tendríamos que hacer es

cambiar la dirección de la ventana en

lugar de que sea el login y ahora vamos

a redirigir a las personas a esta parte

de home

y ahora ya estamos atrapando el inicio

de sesión ya estamos teniendo éxito ya

vamos a poder iniciar sesión pero

recuerden que aquí en home lo que

estamos imprimiendo es un bienvenido no

estamos manejando no estamos utilizando

la parte de usuario para lo cual tenemos

que trabajar y aquí lo que haremos es

importar el gancho que creamos el juz

user context

y ahora con este gancho esto cuando

vengo aquí a este componente este lo que

haríamos es estructurar usuario

y ser usuario desde aquí porque

recuerden que en el contexto así los

definimos usuario y sede usuario y así

es como podemos acceder a ellos muy

cómodamente importamos a hood y los de

estructuramos genera que haremos algo

muy sencillo vamos a utilizar un

operador terciario y revisar si existe

usuario vamos a imprimir el usuario en

caso contrario nos ha empañado como

bienvenido inician sesión por favor

pero este recuerden que de entrada

esto va estar siempre no todo lo que

tenemos que hacer es escuchar los

cambios de sesión para cambiar el valor

de usuario y que ya no sea nulo ya que

nada para hacerlo vamos a cuando es en

la pc en siena

vamos a importar

este yus

y usher

contex y aquí también vamos a

estructurar

usuarios el usuario ya que adicional en

app vamos a importar la aplicación de

fire fire rise up que vamos a poner como

myspace vamos a importar las funciones

de de hoy estar acá y vamos a iniciar y

salud con nuestras credenciales quieren

tener algo más o menos así y aquí es muy

importante en a dónde estamos llevando a

cabo todas nuestras rutas aquí vamos a

importar esta función se llama son of

state change y lo que haremos es correr

la

y ésta recibe dos argumentos la primera

es el love que acabamos de crear y en

segunda es la función que queremos

correr y aquí vamos a correr esta

función donde vamos a recibir el usuario

de fire veis y ahora en caso de que el

usuario sí exista es decir en caso de

que la persona haya iniciado sesión

vamos entonces a darle el valor del

usuario de firefox al usuario global que

estamos manejando desde nuestro contexto

ok caso contrario en el caso de que la

persona sea recesión lo que haremos es

devolver el usuario android

aquí lo borramos y ahí lo tienen ahora

la aplicación va estar escuchando los

cambios y nos va a estar modificando

esto y a esto pueden acceder o van a

estar accediendo todos los componentes

es la maravilla de trabajar con

contextos porque este usuario se guarda

aquí y todo lo que está el interior

puede acceder pero no basta de plática

regresamos a la aplicación que vamos a

actualizar mira que llamarte error

como me parece un porte mal y es que me

puso mayúscula

fíjense que puso mayúsculas minúsculas

actualizamos

y desde aquí me comió la s aquí es

contexto en plural revisamos que esté

bien

aquí también mira y verás en minúscula y

esto ya se plural

y que actualizamos y aquí dice que no se

exporta desde aquí borg e incienso

context

desde contexto ser context

[Música]

a mí es que aquí me con mi gira madrid

que la pura error chicos por error aquí

vamos a actualizar una vez más ya no

tienen ya está funcionando errores

tipográficos pasan todo el tiempo y ok

ahora tengamos o vayamos mejor dicho a

home lo que estoy diciendo nos vayamos a

este home bienvenido inicia sesión por

favor ok y porque no tengo sesión

vayamos entonces haz login y aquí vamos

a correr o escribir mi correo o la

arroba las fit o en lance enviado a o la

arroba las fit o vayamos al correo

y aquí están las 87 ahora mismo son las

88 las 87 me envió este enlace hacemos

clic aquí y tan pronto como haga clic

voy a abrir la consola

y aquí ojo ojo en este aquí estamos en

login y barcel creamos la función de

atrapar sesión pero se nos olvidó o

mejor dicho a mí se me olvidó correrla

aquí estamos en login y vale nos faltó

importarle corre la vamos a hacerlo

importe

atrapar inicio de sesión y aquí

recuerden que atrapar inicios de sesión

recibe la url de la cual estamos

queremos cerrar todo esto

y aquí vamos a ejecutarla y vamos a

pasarle nuestra actual ubicación windows

location age red y ahora si vengamos a

lo cause tres mil 3.000

vayamos al login en el esmalte bueno

podemos bueno pues que vamos a una vez

más ola roja las fit o iniciar sesión se

envió tal lugar venimos al correo

me llegará notificaciones desde las 8 9

y ahora si hagamos clic en el enlace

y fíjense que me parece que me gano no

alcancé a activar la consola pero

fíjense que tan pronto me redirige me

inicia la sesión la detecta me modifica

el usuario y me re dirija home donde en

home ya me está mostrando mi corro y me

lo muestra porque así lo pusimos aquí

home si el usuario existe entonces

muestra el correo del usuario bienvenido

y tal aquí lo cual significa que ya

funciona si acaso por último podemos

añadir un botón aquí que nos cierre la

sesión o que éste nos redirige a lo bien

en caso de no tener sesión para ello

aquí vamos a

colocar aquí abajito un botón el x del

texto va a depender si existe usuario

vamos a ponerle hacer recepción caso

contrario iniciar sesión y aquí al hacer

clic en el home clic aquí también va a

depender si el usuario existe

entonces vamos a ocurrir una road

función que éste nos cierre sesión

caso contrario lo que hará es correr una

luz función que nos redirige

en la parte de diagonal login y ahora

este

debemos poner cerrar sesión ahora esta

función no existe vamos a crearla desde

aquí

y aquí lo mismo importamos fire rise up

importamos el grado y en saint out desde

bayer bay shore y inicializa moxos como

esto llevara export default cerrar

sesión siempre sencillamente nos dan

cerrar sesión the fire veis y al cerrar

sesión de fires nos va a cambiar el

usuario automáticamente entonces aquí en

home importamos esta función

cerrar sesión

y ahora ya está todo en orden venimos

para acá y hago clic acá me la cierre me

se oye pues bienvenido pero por favor

inicia sesión sido clic acá me redirige

al login y yo pongo mi correo una vez

más me envía otro enlace venimos al

correo este de las 8 12 hacemos clic acá

y aquí ya está esto es muy muy muy

rápido pero como pueden ver funciona me

atrapa la disposición y me dirijo a los

100 chicos esto ha sido todo a día de

hoy si les ha gustado todo el grupo de

no me gusta suscriban para ver más

contenido así y en los comentarios como

siempre díganme qué les gustaría ver en

este canal cualquier tutorial que deseen

ustedes pidan y yo se los calle a

ustedes por último en pantalla en a ver

dos vídeos uno recomendado otro es mi

último vídeo si os ha gustado el

contenido sigan explorando mi canal nos

vemos hasta la próxima
