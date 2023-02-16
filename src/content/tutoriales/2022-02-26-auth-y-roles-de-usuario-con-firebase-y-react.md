---
template: tutoriales
url: auth-roles-usuarios-firebase-react
enlaceyt: https://youtu.be/6O2yYpIG8R8
date: 2022-02-26T19:19:26.215Z
title: Auth y Roles de Usuario con Firebase y React
tag:
  - Firebase
  - React
autor: Adrián Salgado
keyword: roles usuario firebase
thumbnail: /assets/14-roles-usuario-firebase.jpeg
---

## Transcripción automática:

hola chicos que tal bienvenidos en este

vídeo vamos a aprender cómo crear un

sistema de autenticación con fire veis

que además asigne roles de usuario a las

personas que se registren y que con base

en estos roles a lo mejor tenemos el rol

de administrador y rol de usuario con

base en estos roles las personas podrán

acceder a cierto contenido o no por

ejemplo hay que hacer clic en quiero

registrarme vamos a registrar a la suite

o le damos su contraseña y la suite o va

a ser administrador

cuando yo vengo aquí a mi proyecto de

fires fíjense que no tengo nada en base

de datos no tengo nada en usuarios vamos

a registrarlo se registra la cuenta la

escrito tiene acceso al panel de

administrador y de vuelta en fire veis

si lo actualizo ya tenemos la cuenta de

las fito y en la base de datos tenemos

registrado y el as fito tiene el rol de

administrador

por lo tanto puede ver el plantamiento

panel entre comillas si yo cierro sesión

y registro otro correo registramos a las

y todos y ahora si todos tenemos el rol

de usuario fíjense que al registrarlo

con un rol de usuario la csf y todos

tiene acceso al panel de usuario

y aquí en la base de datos podemos ver

que se guardó como usuario y aquí

tenemos a la persona bueno es el día de

hoy aprenderemos cómo crear un sistema

si autenticación creación de cuentas

creación de roles y contenido

personalizado como hacen el rol y si les

interesa acompáñenme

\[Música]

muy bien chicos lo primero es crear el

proyecto el código de brigada y para

ello tenemos dos opciones el primer

arrancamos nuestra terminal y tenemos

las opciones ahora si la primera opción

es que ustedes corran en pie explica

break up se bajan todo los archivos de

break si creas un proyectito y después

lo que tendrían que hacer es empire

state fair beige para que tengan que

fair race en su proyecto esta es la

primera opción la segunda opción

un tanto más fácil más cómoda es que

utilicen mi plantilla para trabajar con

ryan y kviris esta plantilla se

encuentran en el hub en las fit o

diagonal graph irish enlace lo

encuentran en la descripción y simple y

sencillamente veníamos aquí copiamos el

enlace para clonarlos y lo que hacemos

aunque primero primero me voy a ir al

escritorio y ahora sí aquí desde el

escritorio vamos a clonar esta plantilla

y hasta los siguientes meternos en la

plantilla en el folder y ya que estemos

en el folder sería correr en stop para

instalar todo lo necesario archivos de

reactivos de fire beige dependencias y

demás muy antes del primer paso el

proyecto nuestro folder contract y fire

mls lo segundo sería venir aquí al

navegador dirigirnos a fire beige punto

punto com accedan a su consola y

necesitamos crear un proyecto que lo

llamaré tuto de roles

voy a decir que no a las analíticas y

eso nos va a crear nuestro proyecto hay

quien fair page para llevar a cabo todo

este seguimiento de usuarios de roles

permisos derechos y demás lo que haremos

es utilizar los apis o dos servicios de

files el primero naturalmente el

servicio de autenticación y el segundo

el servicio de base de datos comencemos

o inicial hicimos el servicio de

autenticación haciendo clic aquí y luego

haciendo clic en comenzar aquí nos darán

una lista de opciones de servicios o

proveedores que podemos utilizar

podríamos utilizar google facebook

pública porque si yo son tanto más

tediosos algunos requieren cuenta de

desarrollador así que elegiremos correr

tranco porque es lo habitual es el

estándar hoy día en la web

y así de sencillo ya tenemos habilitado

esta parte de autenticación con correo y

contraseña lo segundo es aquí en el

panel en firebase hacer clic en

comenzar bueno crear base de datos que

según se pone en un modo prueba porque

caso contrario no podrán editar la ame

no se cambien las reglas entonces no se

compliquen elijamos modo prueba

siguiente ya que eligen la ubicación yo

voy a escoger el ibex west número 2 y

aparece que es los ángeles muy bien

entonces mientras este segundo paso de

fire beige se completan revisemos

nuestro primer paso que es el proyecto

muy aquí hasta dos instalado con 154 mil

932 web y ahora estando desde nuestro

folder lo que sigue es abrirlo con su

video editor favorito favorito yo voy a

utilizar vies code y aquí está muy bien

si utilizaron la primera opción la de

utilizar en pies break up con envían

stop fair play es la única diferencia

que existe con respecto a mi plantilla

es que mi plantilla ya viene limpia no

tiene tanto relleno y no trae que el

testing no trae que los estilos que esto

que el otro viene limpia sin relleno

número 2 la seguna diferencia que

implante ya tiene una carpeta llamada

files dentro de la cual encontramos un

archivo para realizar la conexión con

fire page y es lo que haremos antes de

continuar esto es lo queremos el tercer

paso es realizar la conexión entonces

como podrán ver aquí le tenemos tres

próximas credenciales importamos esto

desde fire media con esto necesitan con

el pie luego añadimos nuestras

credenciales y después esto que estamos

inicial izando lo guardamos en esta

constante que se llama fire y sap y la

idea es exportar la para que la podamos

utilizar en cualquier parte de nuestra

aplicación estas credenciales las vamos

a generar con una aplicación en fire

guys para ello me voy a regresar al

navegador

nadia se terminó la parte base de datos

y estamos crear una aplicación para ello

venimos aquí a el engrane configuración

del proyecto y hasta abajo en la opción

de crear aplicaciones en el proyecto muy

importante entender que el proyecto es

algo así como que la madre es el almacén

donde toda la configuración la info y

demás y luego a cada proyecto podemos

asignarle distintas aplicaciones voy a

elegir la opción de aplicación web que

es la tercera la llamaré web

de una lo que sería lo que me importa la

registramos y al registrar esta

aplicación fires nos va a dar las

credenciales para conectarnos entonces

de aquí lo único que importa dicho esto

que está aquí es más nos lo que está en

el chivas credenciales voy a tomar insta

parte de credenciales voy a copiar me

regreso y lo pego aquí y ya está

importamos la inicialización guardamos

las credenciales inicial izamos la labor

damos aquí y la exportamos muy bien

tercer paso completada tenemos la

conexión con firewall y lo siguiente es

trabajar la aplicación de riad donde la

idea es que la gente se pueda registrar

pueda bloquear su inserción y

dependiendo del rol de la persona tenga

acceso a cierto contenido o no pero no

podría ser una mina podría ser un

usuario normal entonces dentro de

nuestro carpeta de soul dentro de este

folder voy a crear una más que se llama

screens

y voy a aquí entre escrito voy a crear

dos archivos uno que sea el login nos

estamos escrito login js y yo recomiendo

tener este plugin skip login se llama

jacques y asevera que los guarde todo

esto es muy útil para ahorrarnos tiempo

se habían instalado bastaría escribir

break funcional componen export

presionar está y ya estamos nos escriben

código parecía muchísimo más rápido de

trabajar entonces de vuelta aquí a login

esta va a ser la vista para bloquearse

muy bien nos tener otra vista cuando la

persona ya se haya logrado la idea es

que vea la vista de home y aquí no son

lo mismo

exponen creamos esta vista que se llama

home muy bien

dentro de home la idea es que

dependiendo del rol la persona de a1

cierto contenido entonces aquí en su

horizonte crear otra carpeta que se

llame componente

aquí en componentes vamos a quedar dos

archivos el primero en llamarlo admin

view esto lo que el administrador va a

poder ver

vamos a ponerle hola admin la vamos a

crear otro archivo más que sea

como lo llamamos y usher y serviu la

idea es la misma que aquí esto lo vea

quién sea usuario o la usuario y hasta

entonces

y tenemos nuestras vistas especiales de

acuerdo al rol tenemos las pantallas de

home y de login y estas pantallas vamos

a pasarlas a nuestra aplicación esto

esto lo vamos a borrar de más tarde lo

ocupamos lo vamos a borrar y lo que

haremos es lo siguiente importamos la

vista de home importamos la vista de

login y vamos a condicionar los aquí en

nuestra aplicación la idea es que

llevemos seguimiento de si la persona ha

iniciado sesión o no este seguimiento lo

vamos a guardar en un estado por lo

tanto ya crea un estado que diga si hay

usuario o si no hay usuario de momento

voy a decir no hay usual voy a asumir

que no hay usuario

y aquí estoy espérame tantito vamos a un

fragmento y aquí esto vamos a

condicionar si hay usuario vamos a

mostrar el home caso contrario si no hay

usuario vamos a mostrar el login

ok esto lo guardamos aquí le está

pasando esto no es necesario ya está

si hay usuario mostramos con home si no

hay usuario mostramos login

ahora vamos a comenzar a trabajar con

este nuestra y con nuestra relación al

fire pero vamos a revisar que esté todo

bien todo correcto dándole aquí corremos

la terminal bueno la abrimos la terminal

y vamos a correr en bienestar y como no

hay usuario nos hubiera mostrar la

página de login

estoy aquí le vamos a dar una consola

esto ya lo podemos cerrar la plantilla

el enlace lo encontrarán en la

descripción al igual que el enlace a

todos mis códigos de todos mis

tutoriales

y ustedes nos define muy bien aquí

tenemos con un error y es que

efectivamente estoy usando state pero no

lo ha importado desde libia vamos a

importarlo y ahora si yo me regreso me

manda a la vista del hogar se porque

dice que no hay usuario registra muy

bien aquí vamos a importar este vamos a

importar nuestras credenciales de fires

recuerden si queremos trabajar con fire

veis todo esto

en cualquier sitio que queramos acceder

a lo servicios de fire race vamos a

tener que importar esto aunque lo

importamos e importamos el servicio con

el cual queremos trabajar les muestro

pero no importó fire rise up desde

desde air race y luego credenciales

importa esto desde aquí y lo siguiente

es importar el servicio con el cual

quiero trabajar aquí desde la app

la idea es que detectemos cuando haya

algún cambio de sesión entonces lo que

haré es importar o trabajar con el

servicio de fire veis

este de aquí y para cualquier servicio

con el cual están trabajando requerimos

siempre importa la función que empieza

concrete en este caso quiero y

necesitamos también inicializar esta

función con esto es igual a grado y le

pasamos como argumento nuestras

credenciales barbies ya está muy bien

entonces aquí la idea es estar

escuchando si hay cambio de sesionando

para ello fire veis nos da una función

que es o no state change muy bien

entonces aquí desde la app vamos a decir

lo siguiente queremos escuchar cuando

haya cambio decisión y si hay sesión

iniciada queremos guardar esa sesión en

nuestro estado de usuario si no hay

sesión iniciará iniciada también

queremos registrar esa canción no state

change y fíjense que el primer argumento

es off y el segundo argumento es la

función que observa vale dónde

argumento y como segundo aumento la

función que observa entonces aquí esta

función que observan va a recibir el

usuario de fires en caso de que exista y

aquí vamos a hacer lo siguiente

aunque queremos hacer lo siguiente si

hay usuario de fair beige dicho usuario

lo vamos a guardar en el giuseppe en

nuestro estado caso contrario si no hay

usuario el estado lo regresamos anular

de aquí copa de lotes leyéndome la mente

muy bien y es así de sencillo desde la

app llevamos control del usuario y desde

la app llevamos control del inicio de

sesión de fair peace

perfecto si una relación aplicación

sigue mostrando me la vista de lo

guiarse por claramente no me elogie para

trabajemos eso vayamos al componente de

log in action login hay de dos la

primera es que el usuario se esté

logrando y la acción es que usuarios no

tenga cuenta no se puede lograr por lo

tanto tenga que registrarse todo esto lo

vamos a aguardar vamos estar los

revisando obtener los pendientes de un

estado entonces aquí tendremos un estado

vamos a llamarlo is

y registrando

de momento vamos a asumir que no se está

registrando por lo tanto está iniciando

sesión

entonces aquí nuestro título va a

depender de si se está registrando o no

por lo tanto hacemos lo siguiente

hacemos lo siguiente

hay que moscú para un operador terciario

para acondicionar que queremos

renderizar y decimos si se está

registrando es verdadero entonces quiero

que el mensaje diga regístrate porque se

está registrando caso contrario si esto

es falso no se está registrando y por lo

tanto quiero que mensaje diga inicia

sesión muy bien y necesitamos un

formulario vamos a meter un form y aquí

vamos a meter

una etiqueta

vamos a meter un correo electrónico y lo

vamos a meter un input de tipo email muy

bien el segundo campo es la contraseña

vamos a meter un importe tipo contraseña

y cerramos la etiqueta el tercer campo

es una etiqueta que diga rol que rol

queremos darle al usuario le vamos a

meter un select que nos dé la opción

administrador o como opción usuario ya

está y por ultimo visitamos un botón

para hacer el show mid entonces aquí

metemos un varón no metemos

un input de tipo submit cuyo texto va a

variar el texto del botón si el usuario

se está registrando va a decir registrar

si el usuario no se está registrando va

a decir iniciar sesión y afuera afuera

del formulario según se extrapola el

problema vamos a ver un botón y al hacer

clic en él nos cambia el este y la

función del usuario de que se quiera

registrar una aquí el texto lo mismo

y hasta el texto si se está registrando

ya tengo una cuenta o si no quiero

registrar muy bien ya lo van a entender

como les muestre la aplicación aquí está

piense

ahora mismo me da la opción de iniciar

sesión iniciar sesión pero qué pasa si

no tengo cuenta qué pasa si yo quedó

registrado clic a quién quiero

registrarme y ahora me dice regístrate

regístrate por qué pasa si en realidad

tenía cuenta bueno ya tengo una cuenta

por lo tanto hago clic en la opción de

inserción correo electrónico contraseña

y qué rol quiero administrador o usuario

muy bien oralidad es cuando la gente da

clic acá se registre o inicie sesión

vamos a comenzar con registrarse aquí en

fair race vayamos a autenticación de

momento no tenemos usuarios regresamos a

la aplicación y lo que haremos es lo

siguiente al formulario vamos a decirle

cuando la gente no cuando la gente haga

clic en el submit este que tenemos acá

con la gente da click aquí en smith

quiero que corras la siguiente función

es una función que no existe pero yo la

voy a llamar algo muy común es llamarla

submit hunger ok y antes de que se me

olvide para que sea más fácil trabajar

con los datos a sus inputs hay que

meterles una idea para que sea más fácil

carlos después quien ahí vamos a ponerle

email

hay días para el password

y al select vamos a ponerle un aire de

roll

y aquí bien sé que la marca error mis

oye tu función que estás pasando acá no

existe y es correcto no existe esta

fórmula y vamos a cerrarlo vamos a ver

esto de aquí y vamos a trabajar esta

función de submit hardware entonces

hemos lo siguiente formación submit

handler va a recibir el evento y lo

primero es prevenir el que se actualice

ahora fíjate o cuando se refresque no me

gusta arreglar esta actualización clic

acá ya no me actualiza la página como

hizo hace rato lo siguiente debiera ser

recopilar los datos que el usuario me

está me está dejando aquí correo

contraseña y rol para ello voy a decir

que con su email es igual a esto de aquí

password lo mismo y rol es igual a lo

mismo

fíjense que aquí cómo funciona recibamos

el evento el target del evento en ese

caso el daño sería el formulario

dentro del formulario tenemos elementos

buscamos en light y los hay dyson y neo

password yo rol que tenemos que tenemos

aquí asignados

haití password y roll y luego dicha

información la estamos guardando en

estas constantes y vamos a vamos a

bloquear las en pantalla para ver que

todo funcione correcto si me vengo para

acá inspeccionó abro consola

limpiamos esto de cam mi correo o la

harás fito 3.106 y de rol administrado

clic acá - implementar ya como pueden

ver muy bien ahora de vuelta a la lógica

aquí hay dos escenarios el escenario

donde la persona se está registrando el

escenario donde la persona está

iniciando sesión y tenemos que tenerlos

en cuenta ambos queremos lo siguiente

si se está registrando lo registramos si

nos está registrando que haremos lo

iniciamos sesión chulada de código de

lógica esto va directo por al google y

ahora aquí vamos a necesitar registrando

vamos a van a tener una función mucho

ancha vamos a crear una función que se

llama registrar usuario

hoy en de esta función no existe vamos a

crear

m

esto lo cerramos vamos a crear esta

función de

registrar usuarias y la llamamos verdad

registrar service correcto y ahora cómo

vamos a registrar un usuario a estar

hablando con padres y vamos a recibir

datos e información muy importante con

esta función sea asíncrona

lo metemos aquí funciona registrar

usuario

y vamos a hacer lo siguiente vamos a

registrar un usuario con fire mls dentro

de esta función pero para utilizar los

servicios de fires tenemos que

importarlo en este componente en esta

pantalla de login pues ya saben chicos

lo primero las credenciales desde fire y

sap lo siguiente el servicio en este

caso vamos a importar los de fair play

out

y desde aquí vamos a jalar el buen grado

y vamos a utilizar la función que se

llama create y use width y notas al

crear usuario con correo y contraseña y

por último el santo grial primero

segundo y tercero es crear en la

constante de grados a la cual le vamos a

pasar nuestras creencias ya lo hemos

hecho antes muy bien ya tenemos esta

función y es la que va a utilizar aquí

en registrar usuario aunque queramos

registrar usuario por lo tanto vamos a

decir que x de william password y aquí

fíjense que esto recibe como argumento

lo primero y lo segundo y medio y lo

tercero contraseña lo primero ya

definimos aquí lo segundo email y lo

tercero contraseña

y ahora esto de aquí tienen que

obtenerlos de algún lado los va a

obtener de la función email password y

rol también porque no y aquí los vamos a

pasar también el email password y rol

dentro de nuestra función que gestiona

el somni corremos registrar usuario le

pasamos esta información y desde aquí la

estamos utilizando

ahora ahora con esto con esto es más que

suficiente construida puedo registrar mi

usuario y no tengo el vídeo no tengo

problema pero la idea es que además de

crear el usuario queremos llevar un

seguimiento de qué rol tiene asignado al

usuario para ello toda esta información

la vamos a guardar en una base de datos

en firestone me vengo para acá y vayamos

a la base de datos la idea es cuando la

persona se registre aquí vamos a guardar

la información de con qué rol fue

registrado para que después podamos

revisar su rol y revisar o bueno ver qué

derechos y permisos y accesos tiene que

va a crear una colección que se llame

usuarios y me pide la fuerza que tenga

algún este documento vamos a hacerlo así

de rápido realidad es que aquí

registremos no lo sé juanito pérez y

bonito pérez tiene por rol administrador

o la csf y todo tiene por rol usuario y

así sucesivamente entonces además de

crear un usuario tenemos que escribir en

la base de datos pero ojo no tiene que

aprender de files con usted registran un

usuario esta función se comunica con

fire veis genera una promesa como valor

de retorno file veis

para recibir la información nos crea al

usuario y una vez que haya creado al

usuario envía la información de usuario

la envía de regreso para que entonces

dentro de esa información viene un campo

muy importante que es el y white y creo

que es y usaid y yo creo que es única y

di no sé qué significa la persona con el

cual con el cual vamos a estar guardando

la información en la base de datos ok

entonces es lo que haremos

tomar esta información que nos envía de

vuelta fire bis para ello diremos lo

siguiente

info usuario es igual al valor que nos

regresa esta función pero ojo que esto

es una promesa esto nos genera una

promesa entonces lo que hacer es tener

aquí un buen den un buen den que cuando

ya hayamos recibido al usuario deba

airways entonces queremos retornar esta

esta información de usuario de wireless

aquí porque ahí está

y es también esto hay que volver no

decir que nos espere para que antes de

ejecutar más código primero ejecuta esto

esperar que llegue la info y guarde la

info aquí y de hecho pueden ver qué

si después de esto yo lo veo en pantalla

el info usuario vamos a ver qué es lo

que estamos recibiendo desde fibers

donde vamos a poder hacer la prueba que

devengamos para que la quiero

registrarme regístrate regístrate para

estar a mi correo con contraseña 1 2 3 4

5 6 y haré clic en registrar

me crea la cuenta me detecta el inicio

de sesión me manda al home y recibo la

información de fares me oye te acabo de

crear tu cuenta y esta es la info de la

cuenta que acabó de crear aquí lo que

nos importa es este campo de giuseppe y

este campo de lo que dice este campo de

usher y este campo de wajdi para este

usuario que me acaba de crear de ahora

las fito este es su único bueno

penalidades con este hay de venir para

acá y crear un documento para este

usuario entonces para solamente hemos

completado fin se ya creamos usuarios y

ya los estamos estamos viendo su

información

lo estamos guardando aquí y lo estamos

subiendo aunque me faltó por cierto

mejor es un botón para cerrar sesión

vamos a

agregar un botón que diga cerrar sesión

y vamos a importar lo de siempre fue

revisar el servicio

desde el firewall inicializa moss con

grado

y esto logramos una constante así el

santo grial tres de tres para hacer la

sesión desde o importar una función que

se llama saint out

bueno pues aquí este botón al hacer clic

queremos que nos corra la función the

strain out y saint recibe por argumento

el off y hasta cannes ahora si yo le

dais a la sesión me regresa a la parte

del odio hoy empero continuamos en esta

parte de registrarse ya vimos sólo

cierra ya vimos que al registrarme

recibo la info del usuario ahora lo que

tenemos que hacer es utilizar este este

campo de huay de que está en youser que

están a info y con este guay de crear el

documento en la base de datos como vamos

a trabajar con base de datos tendremos

que importar el servicio de base de

datos entonces haremos lo siguiente

importamos forma fire beige diagonal

fire store fair story en la parte de

base de datos y al igual que con grado

aquí vamos a utilizar get fire store muy

bien y al igual que aquí tenemos que

guardarlo en una constante con fire

store ya está bueno que necesitamos para

escribir en nuestra en nuestra base de

datos para escribir necesitamos dos

funciones la primera función nos va a

decir o nos va a ayudar a declarar el

documento es decir las referencias decir

el pan por ejemplo este documento su

camino como pueden ver aquí es usuarios

diagonal y el nombre de este documento

este es el path es la primera opción que

vamos a importar y la función se llama

se llama doc

la segunda función es set doc para

guardar la información muy bien entonces

de vuelta aquí ya creamos el usuario y

ya recibimos información vamos tomar

dicho wajdi y crear una entrada en la

base datos primero necesitamos el pad el

caminito donde hicimos con do courel

diciendo referencia de documento es

igual a 2 y fíjense que doc recibe por

argumento

primero fires tour que es la constante y

luego el path el caminito fire store

aquí está y el segundo argumento es el

pad en nuestro caso el path debiera

hacer algo como esto

la colección de usuarios diagonal y el

nombre del documento que queremos y es

lo que escribiremos aquí usuarios de la

colección diagonal el nombre del

documento el número cómo tiene que ser

dinámico chicos el nombre documento va a

ser igual al y white y entonces que

ponemos a info usuario punto y usher

punto y haydee y para que esto funcione

tenemos que cambiar este string esta

cadena a un template swing nunca sobre

cómo se llama en español de o val

template touring tenemos utilizar estos

que se llaman

y tampoco sé canción en español ya la

pueden ver que ya me está escribió algo

dinámico muy bien ya que tengo la

referencia

este creo que éste creo que no lleva

white donde lleva white y cuatro discos

ya que tengo la referencia le digo fabri

sabes que en esta referencia en este

caminito quiero que me guardas la

información entonces vamos a decir set 2

le pasamos que dónde está no

lo pasamos se recibe como argumentos la

referencia y luego la información de la

la referencia está aquí y luego la

información que vamos que para modo

objeto información información vamos a

guardar un correo por qué no

en correos abordar el email que estamos

recibiendo y entró al vamos a guardar el

rol que estamos recibiendo y ya con eso

estaríamos escribiendo en nuestra base

de datos este proyecto no hace falta muy

bien creamos al usuario recibe un su

info con dicha info creamos una

referencia la base de datos y en dicha

referencia creamos un documento con esta

información vamos a probarlo mueven a mi

aplicación

voy a registrar regístrate registro que

voy a registrar ahora las fico 2 1 2 3 4

5 6 con el rol de usuario y le doy

registrar

la que haya que llamar error

muy interesante a ver a ver qué pasó

vale de vuelta tiene el código no hay

ningún problema pero por alguna extraña

razón no me está aceptando este

argumento de burton no lo reconoce y lo

que vamos a hacer es que en lugar de que

esté fuera de la función vamos a pasarlo

adentro de esta función de componente de

login entonces vamos a bajar lo

guardamos

el rezamos acá este que llame de

reconoció la sesión está la sesión de

las citados pero si no vengo a la base

de datos notarán que es que no hay nada

no me alcanzo a crear la entrada pero al

usuario si no nos proveemos nuevamente

quiero registrarme vamos a aprobar con

las citó 3 1 2 3 4 5 6 cómetelo como

usuario registrado

aquí está recibimos la info se creó la

entrada y está muy bien las citó 3 tiene

por usuario o por rol y usher

perfecto entonces ya podemos crear

cuentas ya podemos al final de roles

obviamente para este ejercicio lo estoy

haciendo con una lista para que la

persona escoja pero en su aplicación de

acuerdo a sus características de coraje

o lógica esta parte de asignar usuario

nos la van a asignar de acuerdo a la

lógica de su aplicación yo lo que hice

fue la asignó de acuerdo a lo que la

persona haya escogido muy bien entonces

esta parte de crear cuentas ya está

haría falta utilizar una función para

que los usuarios ya existentes puedan

iniciar sesión y es lo que haremos para

iniciar sesión vamos a jalar o importar

desde aquí la de sangin with email and

password iniciar sesión con correo y

contraseña y entonces lo que haremos es

que aquí vamos a tener otra función

dentro de la función que gestiona el

summit mira que no solamente lo vamos a

utilizar una función que se llame o no

vamos a utilizar este aquí

scheinin with imam password recibe el

email y la contraseña lo pueden ver aquí

argumentó email y contraseña de modo que

si yo me vengo para acá y quiero iniciar

sesión con alguna de estas cuentas

2 3 4 5 6

aquí está mi iniciación fin de que esta

es una cuenta que ya existe fue la

primera que cree unos 34 56 nicki está

me inicia la sesión perfecto ahora la

idea es éste

cómo poder utilizar estos roles del

usuario para saber qué información

mostrar al momento de iniciar sesión fin

se cree que inició sesión

nada más muestra como no entonces

regresando a la aplicación la idea la

idea o como tenemos ahora mismo es lo

siguiente cuando alguien inicia sesión

dicha información que nos envía fair

race la estamos guardando aquí en este

estado de usuario y vamos a ver cómo es

que se ve esta información de usuarios

imprimir usuarios bar beige

y aquí está esto es lo que estamos

recibiendo de fires todo este objeto nos

da un y medio nos da una url de foto

univ haití y lo que haremos es que vamos

a guardar además de esta información

vamos a guardar el rol que tiene el

usuario entonces haremos lo siguiente de

entrada no vamos a guardar todo esto

todo esto es es muchísimo vamos a

aguardar si acaso el email y nibali

dentro de aquí de cuando si exista el

usuario haremos lo siguiente diremos

const de ir a bueno sigue al revés no

existirá en inglés y usted de ira es

igual

es igual a que tienen y vice y vamos a

poner el white y que nos da la

información de fire veis en email

también el email que nos daba airways

pero pero pero pero

este nuestro bebé y aquí en guardar

usuario vamos a poner y usher de ira

adicional de eso tenemos que obtener el

rol tendríamos que tener aquí rol y este

rol sacarlo desde la base de datos para

ello tenemos que consultar la base de

datos hagamos lo siguiente vamos a

importar aquí también el servicio de

fire store

desde fire with fire store

\[Música]

y desde aquí que vamos a traer un

tráiler great falls store y vamos a

traer dos para la referencia y es ticket

2 para obtener la información de dicha

referencia como siempre vamos a también

poner aquí guardar la constante de fair

store

y vamos a crear una función que se llame

que se llame con llamarla a 5 johnson

vamos a llamarla get roll y estoy que

troll recibe un white y vale entonces la

idea es primero crear una referencia al

documento const do courel sería igual a

2 y recibe fire store

lo recibe es que sería usuarios diagonal

y aquí vamos a meter el wide y del

usuario que queramos cuyo rol queramos

buscar el yo lo estamos recibiendo aquí

vamos a pasarlo para acá

y esto es obviamente tiene que ser

batiks vamos a poner este aquí

aunque tenemos la referencia lo

siguiente es obtener la información aquí

nos dice lo q nos obtiene la información

pero ojo que esa información a mí

siempre me gusta decir que es

información que está está cifrada en

cierta manera no no es la información en

sí sí yo revisara esto y lo leyera me

encontraría con mucho texto mucho código

que que no es no es la invoca yo quiero

entonces yo lo acuse cifrada ahora

estado con cifrada hay que interpretarla

en cierta manera por lo tanto diremos

que la info final por así llamarlo la

info final es igual a poco cifrada punto

data donde fire nos proporciona este

método que en cierta manera nos nos

permite entender este la información

ahora está esta información

aquí hay que decir que queremos

solamente el campo de rol porque tiene

que tenemos correo rol vamos a tener a

guardar solamente el campo de arroyo

y hasta perfecto ahora la idea es

regresar esta info final de modo que

aquí cuando se detecte el cambio de

sesión

buscamos el rol a través del baile y

dicho no lo vamos a ocupar para

guardarlo dentro del estado en el cual

guardamos la impone nuestro de nuestro

usuario nuestro visitante en serio muy

entonces de vuelta aquí se detecta un

inicio de sesión comprobamos que si hay

iniciación que si hay información del

fire page de dicha información guardamos

aquí en este objeto el wide y el email

ya lo que tenemos que hacer es

éste buscar el rol para ello vamos a

decir qué rol le vamos a pasarle usuario

fire veis punto white

y luego cuando recibamos el roll vamos a

guardar lo que conocíamos el roll

retorne a los como

regresando

entonces avanzar un poquito de orden

esto

y mejor

y mejor esta parte de aquí vamos a

meterla dentro de la promesa y esto nos

vamos a regresar sino que cuando hayamos

recibido el roll lo que haremos es

definir la información del usuario

aquí diremos qué rol es igual a rol y ya

con esta información en mano este set y

usher lo vamos a meter dentro de la

misma promesa de modo que hasta que

tengamos la última pieza que es el rol

que estamos recibiendo con esta función

hasta que tengamos esto hasta entonces

definimos la info y la guardamos en el

usual y después vamos a probar a un

primero en pantalla para que vamos a

poner un set de ir a final vamos a

prender y ser de ira

y hasta íbamos de la prueba debiéramos

imprimir en pantalla estos tres datos de

aplicación

\[Música]

por alguna razón

no hay nada que vamos a actualizar

aunque hay una carga que está pasando

chicos vamos a relanzarlo control más

sede para cancelar en bienestar corremos

de nuevo

mostrar para acá

ok vamos a

y aquí mi sexta indefinido en info final

o claro es que me tenía que tenía sesión

iniciada con los frito 1 pero las

pitones no tienen no tiene documento

aquí vamos a iniciar con las citó 3

bueno la sesión

porque me detectan a la sesión entera

vamos a darle su documento a las \[ \_\_ ]

12.1 tiene por igual de éste

y aquí vamos a crearle es un documento

que diga roll

y vamos a ponerle admin

aunque este es el de la suite on vamos a

poner también email

para que sea más fácil de entender y

hasta obviamente ustedes no tienen que

tendrían que hacer esto lo que tendrían

que hacer es prever estos escenarios en

su código no es la intención de este

tutorial entonces vamos a hacerlo así

miren ya me reconoció la sesión de la

suite o uno ya me guardo el rol y aquí

estamos vamos a ver cómo es que se ve en

pantalla

aquí está yo soy de ir a final

email admin y white y aunque pienso que

esto no está corriendo de forma infinita

lo cual indica que algo hicimos mal algo

hicimos mal chicos vamos a cancelar esto

\[Aplausos]

vamos a meter todo esto en una función

vamos a poner

función

\[Música]

en una función y vamos a meterlo aquí en

bueno tendríamos que tendrá que ser

función y vamos a meterle este bien que

ser muy críticos con sus nombres de

funciones chicos siempre conexión muy

descriptivos en este caso lo están

haciendo es

establecer el estado del usuario a

través de la información de files yo lo

llamara y no nos vamos a llamarlo set y

usher with fire' veis

un hombrecito aquí pegamos todo esto

ahora la idea es para evitar que se esté

corriendo y corriendo corriendo vamos a

condicionar le diremos si no existe el

usuario entonces corre esta función para

establecer esto debiera bastar corremos

una vez más en pie néstor

me trae para acá

en fin

\[Música]

wow usuario fibers is not the fine

eso es por qué

vamos a pasarle

saif airways y vamos a pasárselo por

aquí

ahora sí ya está vamos a iniciar sesión

que en el 1 1 2 3 4 5 6 y lo primero

iniciar sesión

y aquí está todo no se volvió de marca

error pero aquí está el clúster de ir a

final correo rol y ahora vamos a ocupar

este rol para renderizar esto ya mostrar

contenido personalizado de acuerdo al

rol aquí en el home vengamos a home y lo

que haremos es importar

vamos a importar el admin

desde los componentes anemia y vamos a

importar también el servidor

ok y serviu está aquí nos dice al

usuario y a mi novio está aquí y ahora

aquí en home lo que haremos es tener

acceso al loser

vamos a pasarlo desde aquí desde up

recuerden que nada estamos realizando

tanto juan como login

desde ahí vamos a enviarle esta

información de usuario diciendo algo

como y usted es igual a y usted no es lo

más lo más propio entonces vuelta a king

kong haremos lo siguiente

vamos a poner aquí una parte que digamos

sí bueno algo más o menos similar sí sí

dentro del you ser el rol es igual admin

entonces muéstrame la limpio caso

contrario muéstrame el servicio así de

sencillo no vengo para acá y me dice

hola admin porque yo soy administrador

pero si inicia la sesión con las fito 3

el cual es usuario vamos a ver qué es lo

que pasa

vamos a cerrar sesión

vamos a iniciar sesión con las fito 3 1

2 3 4 5 6 iniciar sesión y me dice hola

usuario hay login

entonces aquí lo que ustedes tendrían

que hacer es bueno que en su administrar

este algún panel de control que el admin

tuviera tuviera acceso a esta parte de

la base de datos y tuviera acceso a

remover personas y que new serviu

solamente tuviera tuviera ciertos

accesos o ciertas vistas obviamente esto

es un tutorial la idea es mostrarles

grosso modo cómo funcionaría un sistema

de autenticación con roles lo que tienen

que hacer es escribir mejor código que

el mío prever errores prever escenarios

este out también podrían hacer fíjense

que este usuario yo lo tengo en un

estado dentro de a algo muy recomendable

que podrían hacer es crear una carpeta y

crear un contexto que vayan pasando a

todos sus componentes pero bueno eso ya

sería tema de de otro vídeo o tema de

otro tutorial mientras tanto y si les ha

gustado vídeo dejen me gusta suscriban

se escriban en los comentarios también

que tutoriales o qué vídeos les gustaría

ver por este canal nos vemos
