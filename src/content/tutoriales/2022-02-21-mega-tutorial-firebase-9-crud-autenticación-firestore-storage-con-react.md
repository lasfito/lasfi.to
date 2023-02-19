---
type: tutoriales
url: firebase-9-crud-react
enlaceyt: https://www.youtube.com/embed/PGPiefJK8LU
date: 2022-02-21T23:25:44.536Z
title: Mega Tutorial Firebase 9 - CRUD (Autenticación + Firestore + Storage) con React
tag:
  - React
  - Firebase
autor: Adrián Salgado
publicoObjetivo: "Conocimientos básicos de JavaScript y React son necesarios
  para este tutorial "
keyword: tutorial firebase 9
thumbnail: /assets/megatutorial-firebase-9.png
---

\## Transcripción automática

¡Hola chicos, qué tal! Recientemente Firebase

lanzó una nueva versión de su SDK. Es el

9.0, el cual introduce un gran cambio

puesto que ahora va a estar trabajando

con un sistema modular. Y en este vídeo

vamos a aprender cuáles son las

diferencias o mejor dicho, cómo utilizar

esta nueva versión 9.0. Y en caso de que

no estén familiarizados con Firebase

aprenderemos cómo utilizar sus

principales servicios que son:

autenticación, base de datos, y almacenaje.

La idea es crear una aplicación CRUD que

nos pueda crear, leer, actualizar y

eliminar documentos o datos en una

base de datos. En este caso Firestore y

para ello tenemos esto de aquí. Les voy a

mostrar qué es lo que estaremos

construyendo y que es lo que

aprenderemos a lo largo de este proceso.

Lo primero es un sistema de

autenticación. Aquí por ejemplo podemos

crear una cuenta. Es lo que voy a hacer

ahorita, voy a crear esta cuenta: la que

termina en 2. Agrego contraseña y hago

clic en registrarse.

Aquí me jala unas tareas falsas,

pero lo que yo puedo hacer es añadir las

propias. Por ejemplo "ir a comprar queso".

También tenemos integrado un servicio de

almacenaje. Vamos a cargar esta imagen de

aquí. No sé por qué lo agregaríamos,

pero vamos a agregarlo y hacemos clic

en añadir tarea. Esto no se queda en la

computadora, se queda en una base de

datos. Como pueden ver, aquí se crea un

documento por cada usuario -

donde se agrega el "ir a comprar queso" y

también podemos

eliminar las tareas, por ejemplo. Lo que

yo elimine, se elimina en tiempo real.

Obviamente esto es persistente y si yo cierro

sesión e inicio sesión nuevamente en la

cuenta que acabo de crear, debiera

retomar las tareas que se quedaron

guardadas. Adicionalmente

incluimos un servicio de autenticación

con algún proveedor, en este caso Google.

Pero pueden añadir el que deseen: Facebook,

GitHub, Twitter, los que deseen. Vamos a hacer

click en iniciar sesión con Google y

fíjense que nos lleva a la cuenta que

tengamos sesión iniciada. Y aquí nos crea

los usuarios. Y me vengo aquí a la

pestaña de autenticación, tengo el que

cree, que me indica que fue con correo. Y

tengo el de "lasfito", el original, que me

indica que fue por algún proveedor. En

este caso Google. Si les interesa lo que

estamos por crear, que también tenemos un

poquito de almacenaje, tenemos la

base de datos como ya vieron. Si les

interesa acompáñenme en este vídeo y aprendan

de manera completa todo acerca de la

nueva versión de Firebase.

Muy bien, lo primero es crear un proyecto

con React. Para ello abrimos nuestra

terminal, yo voy a crearlo en el

escritorio. Corremos el comando "npx-

create-react-app", le ponemos su nombre. Yo lo

llamaré tutorial 09 sdk.

Esto nos va a crear nuestro proyecto de

Firebase. Mientras tanto, lo que tenemos

que hacer es: visitamos Firebase.

google.com. Hacemos clic en "ir a consola"

o "get started". Aquí nos va a dar la

opción de crear un proyecto.Hagamos clic

aquí. Elegimos el nombre de nuestro

proyecto.

Decimos que no a las analíticas. Creamos

el proyecto. Firebase nos aprovisiona

espacio, recursos y servicios.

Continuamos.

Dentro de nuestro panel iniciamos los

servicios que utilizaremos. El primero: la

base de datos de Firestore.

Crear base de datos. Comenzar en modo

prueba y habilitar.

Una vez que se haya creado la base de

datos, deberíamos tener listo el

almacenamiento también. Esto se crea por

defecto y solo nos harían falta dos cosas.

La primera,

comenzar el servicio de autenticación.

Hacemos clic en comenzar y elegiremos

dos proveedores los más sencillos correo

electrónico habilitar guardar

agregar proveedor nuevo google habilitar

aquí vamos a ponerle un nombre que va a

aparecer al público vamos a nombrarlo

tutorial sdk 09

y en correo elegimos el que nos dé

guardar

con estos dos sencillos pasos ya hemos

comenzado o ya tendremos acceso a estos

proveedores de autenticación y solamente

restaría crear una aplicación dentro de

nuestro proyecto de fires si no están

familiarizados con fire veis esto es

llamémoslo el proyecto y al interior de

cada proyecto hay aplicaciones nosotros

crearemos un haciendo clic en el engrane

configuración hacemos clic aquí para

crear una aplicación web pueden verlo

tus apps tenemos apps para ios android

web

le ponemos título

registrará

y lo siguiente es instalar

el paquete de fire beige y tomar en

cuenta o copiar mejor dicho estas

credenciales notarán si ya habían

utilizado ferrys antes que esto es

distinto de las versiones anteriores la

8 las 7 y demás la versión 9 como indica

aquí utiliza un sistema por módulos de

modo que se pueda reducir el tamaño

regresemos a nuestra terminal

y hace terminado de instalar o descargar

mejor dicho nuestro proyecto de ryan así

que abramos lo nuestro editor favorito y

utilizar el biess code

y habiendo abierto el proyecto lo que

sigue es eliminar todo el relleno y

volver play que viene por defecto por

ejemplo esto de aquí

pruebas

css

este logo los vitales y estoy acá

debiera quedarnos únicamente en source

up e index y dentro de cada uno

eliminamos esto de aquí que nos sirve

terminamos esto de acá

dejamos una ola y en index eliminamos

esto de aquí ya no existe

esto de acá y esto debiera quedarnos

únicamente esto y esto para comenzar con

el menor código posible está envié

scouts corran la terminal integrada y

ejecutamos en bienestar para revisar que

esté todo en orden

se abrirá o se creará mejor dicho un

ambiente de desarrollo y aquí debiéramos

ver ahora está todo corriendo al 100

perfecto

adicionalmente yo instalar red bulls rap

para tener un poquito de estilo en este

tutorial no es necesario no tienen que

hacerlo pero si desean tener la misma

versión que yo visiten

break beats rap hip hop punto a joe &

start y aquí tenemos el comando para

instalarlo

de vuelta en bi scout abrimos una nueva

terminal

corremos el código o el comando mejor

dicho y adicionalmente tenemos que

incluir el estilo que está aquí

lo copiamos y lo vamos a importar como

dice aquí puede ser en index o n

yo lo voy a colocar aquí en index

pegamos guardamos y estamos listos para

comenzar

lo primero que haremos es que en app

vamos a integrar nuestro sistema de

autenticación la idea es que si alguien

tiene cuenta pueda acceder a un

componente home y si no tiene cuenta sea

dirigido o se le muestre un componente

de crear cuenta o iniciar sesión

para ello vamos a importar react

y vamos a ocupar también

state y effect guardamos y vamos a crear

un

estado global que llamaremos usuario

global noten que el estado lo iniciamos

con null y aquí en el return en lugar de

regresar un día regresamos un fragmento

dentro del cual vamos a estipular que si

el usuario existe se muestre en caso

contrario no existe se muestre un

componente de bloqueo y estos

componentes no existen vamos a crear los

sensores crearemos una carpeta llamada

componentes

dentro de la cual vamos a crear un punto

js

le volvemos un componente normal

y también lo veo punto j s los nombres

pueden llamarlos como ustedes deseen

habiendo los creados los importamos en

nuestra app

y si regresamos a nuestra aplicación

vemos que al tener el usuario en nube

nos muestra el componente de bloqueo

como pueden ver aquí iniciación en lugar

de home que dice hola lo que haremos a

continuación es crear un formulario

donde el usuario pueda registrarse crear

cuenta o acceder a través de google

para ello voy a importar

desde red bulls trap un stack un

container

conforme un varón y desde su

documentación

voy a copiar un formato o un formulario

mejor dicho

de vuelta en lo que o colocó un

container un stack tengo el formulario y

además fuera del formulario pondré a

otro botón que será para acceder con

google para ello copio esto de aquí

y simple y sencillamente pegó de vuelta

y cambiamos el texto

acceder con google

guardamos y revisemos nuestra aplicación

debiéramos tener algo así ahora la idea

es que el usuario pueda crear cuenta o

iniciar sesión todo desde el mismo

componente para ello utilizaremos un

estado añadimos state

y creamos un estado que revise si la

persona se está registrando o no es

decir un villano

estar registrándose lo comenzamos en fox

lo cual significa que por defecto estará

iniciando sesión utilizaremos este

estado para renderizar texto

dinámicamente por ejemplo en submit

vamos a crear un regístrate o inicia

sesión

para ello si está registrándose entonces

colocaremos

regístrate

caso contrario colocaremos inicia sesión

copiamos

y colocamos un título acorde

y ahora está abajo añadiremos un texto o

botón para que la persona pueda cambiar

/ registrarse e iniciar sesión para ello

copiamos este botón

aplicamos y aquí vamos a condicionar el

texto si está registrándose

escribiremos

ya tienes cuenta

inicia sesión

caso contrario

no tienes cuenta

regístrate y la idea es que al hacer

clic aquí

la gente pueda alternar entre estas

vistas de registrarse e iniciar sesión

para ello corremos una función

que nos va a cambiar el estado

guardamos revisamos nuestra aplicación y

noten cómo al hacer clic aquí me cambia

los textos inicia sesión inicia sesión

iniciación si no tienes cuenta

regístrate bueno

regístrate regístrate ya tienes cuenta

iniciación genial lo que sigue es poder

crear las cuentas e iniciar sesión a

través de el servicio de ferrys pero

antes vamos a ajustar un poquito los

estilos

eliminamos esto de aquí

eliminamos esto acá cambiamos el ancho

de los botones cambiamos los colores

y estamos listos para trabajar con fire

veis regresando a nuestra pestaña con

nuestras credenciales copiamos esto de

aquí y dentro de nuestro proyecto

crearemos un archivo llamado

credenciales punto j s

pegamos guardamos y ahora lo que sigue

es instalar el paquete de fires para

ello desde nuestra terminal ejecutamos

en esto fire veis esto nos va a

descargar todos los componentes o

módulos que utiliza fireplace

y habiendo pegado las credenciales e

instalado el paquete lo que haría falta

es exportar esta aplicación que estamos

inicial izando para ello ocupamos un ex

por default les recomendó también que

cambien el nombre yo lo voy a cambiar a

fair beige up y esto de aquí lo cambió

por

airways

qué es lo que está pasando aquí les

explico instalamos todo el código del

fire veis a través del pie de este

código retomamos una función que se

llama inicial eyes up inicializar la

aplicación desde esta ubicación

a esta función le vamos a pasar nuestras

credenciales que guardamos aquí en fire

veis conflicto de modo que la función

tomar las credenciales

inicia la aplicación de fire page y la

guarda en esta constante que hemos

llamado fire veis

esta constante la vamos a exportar y

cada módulo o componente o página que

requiera conectarse a fire page va a

estar importando esta aplicación y

adicional a importarla va a ir añadiendo

los servicios que requieran por ejemplo

aquí en lo que vamos a requerir

servicios de autenticación como funciona

muy sencillo lo primero es importar

llamémoslo la aplicación diagonal

credenciales para ello escribo import

barbies up y lo importamos los

siguientes añadir el servicio que vamos

a requerir en este caso autenticación

todos los servicios importan de manera

igual lo primero es importar dejamos

aquí unos brackets en blanco y decimos

desde qué ubicación todas las

ubicaciones son similares fire beige

diagonal lo que requiere mos en este

caso out de autenticación

y todos los servicios que estamos

añadiendo vamos a inicializar los por

así decirlo con una función llamada get

más el nombre del servicio para hoy por

ejemplo sería get off

esta función la corremos con nuestra

aplicación y la guardamos en una

constante por ejemplo count of es igual

a get off y le pasamos la aplicación que

creamos

de modo que ahora el servicio de

autenticación esta inicial izado con la

aplicación y nuestras credenciales muy

importante antes lo que se hacía era

algo al estilo de estos punto este no sé

qué bla bla bla punto blanc y así pero

ahora lo que tenemos que hacer es ir

corriendo función tras función además de

importar las desde aquí

la primera función que importaremos es

la función de crear una cuenta o crear

un usuario

para ello ponemos create y usher email

password

ya que la importamos podremos utilizarlo

la idea es que el usuario no tenga

cuenta y se registre dejando su correo y

alguna contraseña al hacer clic en

registrarse nuestro formulario deberá

tomar esos datos utilizar la función de

crear cuenta de fire page y crearla para

ello desde el formulario vamos a ocupar

la propiedad con submit y vamos a correr

una función llamada submit ander que es

una convención bastante popular ésta es

una función que vamos a registrar aquí

arriba dado que estaremos interactuando

con fire page de manera síncrona es

importante que definamos esta función

como asíncrona para poder ocupar la

palabra a weight

dentro de la función vamos a recibir un

argumento que es el evento del submit y

lo primero que haremos es detener que la

página se actualice o se refresque como

digan algunos con esto de aquí evento

punto problem default lo siguiente es

guardar el dato de correo y contraseña

para ello también utilizaremos el evento

y los haitís de cada campo aquí tenemos

form basic email from basic password

entonces los guardamos de la siguiente

manera

correo es igual a targets revisa el

formulario luego metemos el aire form

basic email punto de audio lo mismo para

la contraseña esto lo cambiamos lo

guardamos como contras y aquí sólo hay

que cambiar el aire informe basic

password

para ver que esté todo bien los logramos

en consola correo contra

y vamos a hacer la prueba desde la

aplicación

aquí colocamos el correo 1 2 3 4 5 6

como contraseña y hacemos clic vemos que

no se está refrescando y al revisar la

consola nos está imprimiendo los datos

lo cual significa que ya los tenemos

guardados de forma correcta lo siguiente

es ocupar estos datos y crear una cuenta

para crear la cuenta utilizaremos la

función que acabamos de importar

si pasan el ratón por encima su editor

deberá indicarles qué argumentos recibe

el primero es un este objeto o el

segundo es el correo y el tercero es la

contraseña el objeto se refiere a este

de aquí que definimos para ocupar el

servicio de autenticación es muy común

que tengan que estarlo pasando a cada

rato en las distintas funciones entonces

decimos el correo contra

y esto de aquí nos va a generar una

promesa que podemos esperar con wait

para que se se resuelva

y después

guardarlo en alguna constante por

ejemplo usuario

una vez que ésta haya resuelto vamos a

imprimir en pantalla

este resultado que obtenemos desde fire

veis

muy bien realizamos a la aplicación

nos registramos

y aquí está esto lo que recibimos de the

fire veis que nos indica que ya tenemos

la cuenta creada y esto puedo revisarlo

y yendo a la pestaña del proyecto aquí

ya podemos ir a la consola y en

autenticación

encontramos este usuario que acabamos de

crear o la arroba las fit

ahora que tenemos la cuenta la idea es

permitir que la persona pueda iniciar

sesión iniciar sesión con este correo

para ello importaremos otra función que

es iniciar iniciar sesión con cuenta y

contraseña perdón corre contraseña desde

aquí desde hoy importamos sign in with

email password y funciona exactamente

igual

llamamos la función le pasamos un por un

correo y una contraseña que son los

valores que estamos guardando aquí de

vuelta a nuestra aplicación recordemos

que las personas puedan iniciar sesión o

crear cuentas y esto tenemos que

diferenciarlo en la lógica de esta

función

para ello voy a correr un statement que

va a evaluar si se está registrando

entonces aquí vamos a correr el código

de si se registra

y ponemos esto de aquí crear cuenta

en caso contrario que no esté

registrándose si está iniciando sesión

vamos a correr esto de aquí ya está y

ahora adicional a esto si la persona

inicia sesión lo está haciendo ante los

ojos de google como como podemos ver

aquí pero fire beige o google no están

indicando a nuestra aplicación de riad

que la persona ya inicia sesión y esto

se debe a que en app nuestra manera de

evaluar el inicio de sesiones con este

estado que el momento permanece en un y

no hay nada que lo haga cambiar para

ello utilizaremos una función de fair

race que va a estar revisando cada vez

que haya un cambio de sesión para ello

desde app importamos nuestra aplicación

de fair face

importamos

nuestro servicio de autenticación

y desde aquí jalamos el get off

y también utilizaremos una función que

va a estar revisando estos cambios de

decisión que se llama on of state change

muy bien como ya saben

pero lo vamos inicializar con los datos

de la aplicación y nuestras credenciales

y lo guardamos en una constante llamada

off

y este on of state james lo vamos a

correr dentro de la aplicación funciona

más o menos así

recibe como primer argumento la

constante de ok

y como segundo argumento le vamos a

indicar qué hacer cuando detecte un

cambio de sesión

cuando hay un cambio de sesión le vamos

a pedir que revise si se inició sesión o

si se cerró sesión para ello vamos a

colocar aquí que reciba este argumento

llamado 11 llamarlo usuario fire veis

y una vez que lo haya recibido va a

evaluar si existe este usuario fire veis

vamos a poner aquí

código en caso de que haya sesión

iniciada

en cambio si no existiese vamos a poner

aquí código

en caso de que no haya sesión

iniciada

o sea bueno recibe el objeto evalúa si

existe y si existe que deberíamos hacer

cambiar este estado del usuario global

de esta manera ser usuario global y lo

ponemos con usuario de fire veis

en caso contrario en caso de que cierre

sesión por ejemplo el ser usuario global

lo ponemos en nulo de esta manera desde

la aplicación central estamos midiendo u

observando los cambios de inicio de

sesión y actualizando nuestro estado de

manera correcta mientras que en lo que o

lo que estamos haciendo es

registrando usuarios o iniciando sesión

de acuerdo a si está registrándose o no

revisamos nuestra aplicación

fíjense que cuando yo cambio

automáticamente ya me detectó la sesión

iniciada ya no demuestra el componente

de lo que ahora me muestra el componente

de home el componente que definimos aquí

que dice hola vamos a ponerle o la

sesión inicial

aquí está ahora la idea es que habiendo

iniciado sesión podamos cerrar sesión

también para ello y desde home como jazz

era costumbre vamos a importar la

aplicación de fire beige y vamos a

importar el servicio de autenticación

desde fire diagonal o con el guero y la

función que utilizaremos aquí es la

función de cerrar sesión que se llama

sign up que es estar aquí como siempre

inicializa moss helguero lo guardamos en

una constante con nuestra aplicación

como argumento más o menos así que vamos

a poner un botoncito

vamos a ponerlo vamos a cambiarlo por un

container de trap

vamos a ponerle un h 4

y añadimos un botón

también desde este

buster vamos a ponerle cerrar sesión

y al hacer clic en este botón la idea es

utilizar esta función para hacer

recepción es muy sencillo ocupamos el un

clic

pasamos una función de flecha llevamos

simple y sencillamente cerrar sesión con

un único argumento la constante de off

este botón me hace falta hablar de trap

y muy bien aquí está

tenemos el botón con un clic cerramos

sesión e indicamos que es sesión que

debemos cerrar esto es importante porque

por confuso que pueda sonar dentro de

cada aplicación web pueden tener acceso

a distintos proyectos de fires por ello

es que siempre al ocupar los servicios

es buena práctica indicar a qué proyecto

oa qué creencia les nos estamos

conectando

muy bien aquí el regreso a la aplicación

hago clic en cerrar sesión me trae de

vuelta vamos a iniciar sesión con la

cuenta que creé

iniciar sesión y me llevan perfecto ya

podemos crear cuentas iniciar sesión y

cerrar sesión respectivamente lo

siguiente es incorporar el acceso con

google google los distintos proveedores

como como facebook el twitter

este creo que estaba

interés vamos a revisarlos hay quien

agregar

proveedor nuevo todos estos proveedores

no llevan a cabo este dos pasos como

crear cuenta e iniciar sesión de dar

cuenta e iniciar sesión estos

proveedores automáticamente te crean una

cuenta en caso de que no la tengas es

decir es un solo paso y amplio el paso

de acceder y para ello si queremos

acceder con google vamos a llamar una

función dentro de nuestro componente de

lo que la función

necesita dos partes primero la función

que vamos a llamarla sign in which

direct también tenemos el sign in with

pop-up pero esto es más sencilla y

adicional a esta función necesitamos

indicar con qué proveedor vamos a estar

trabajando en este caso vamos a trabajar

con google

hablamos esté aquí google a probar

la idea es que cuando la gente haga clic

en hacer en acceder con google

ejecute esta función y esta función se

alimenta de el proveedor le indicamos

con quién queremos acceder pero ojo

porque este proveedor hay que guardarlo

en una constante al igual que el loft

para ello decimos const vamos a llamarlo

google provider es igual a new

google of provider que recibe nada

la guardamos y listo buscamos el botón

de acceder con google y aquí al hacer

clic

ponemos un clic vamos a correr una

función de flecha

qué va

sign in which lawyer ect

sainz

aquí está

y esta función recibe dos argumentos el

love y el provider que acabamos de

guardar aquí pasamos al usamos google

provider

muy bien aquí está sign in war of gold

provider y aquí está nuestro proveedor

que guarda muy bien tenemos los dos

pasos la función y el proveedor

regresamos aquí hago clic en acceder con

google

me pide que elija una cuenta voy a

elegir estar acá

me regresa me detecta el cambio de

sesión y me da acceso a la página de

home si yo reviso mis usuarios aquí

desde la pestaña

why users veo que la cuenta que tenía de

la suite o con correo me la cambia a

google y esto es un punto muy importante

esto no es nuevo dlc de acá el cde

casero 9 sino que esto es algo de toda

la vida si tu usuario tenía una cuenta

con llamémoslo este proveedor clásico o

proveedor nativo si tenía alguna de

estas tres y luego inicia sesión con

alguna de estas lo que google o fair

race hace es que te las transforma

entonces mucho ojo con esto en la manera

en la cual lidian con su aplicación con

su business logic para que puedan prever

estos casos aquí ya me lo cambio de

hecho si yo intento iniciar sesión con

este correo nueva marca el error pero

aquí lo importante es que ya podemos

crear cuenta iniciar sesión y y acceder

con kurt primer paso listo

la idea es que el usuario inicia sesión

y se encuentre con un listado de tareas

que tiene puede agregar las tareas y que

todas éstas estén conectadas

la base de datos lo primero es crear una

colección que llamaremos a usuarios

y la idea es que aquí automáticamente

voy a ponerlo así de relleno para que me

permita crear la colección la idea es

que cuando alguien cree una cuenta de

este lado también se cree un documento

enlazado a este usuario y la idea

también es que cuando alguien inicie

sesión y ya tenga tareas registradas la

idea es que la aplicación busque el

documento con las tareas y las muestre

por aquí para ello antes de meternos con

fire store

vamos a preparar el código de nuestra

aplicación

ya podemos cerrar esto de aquí

credenciales index

y desde home vamos a estar mostrando los

componentes ustedes puede trabajar de

manera distinta y utilizaré dos

componentes un componente para agregar

tarea y un segundo componente donde nos

muestran el render hice todas las tareas

que tenemos actualmente

para ello voy a colocar aquí un hr

que es una regla horizontal y voy a

registrar dos componentes uno que se

llame agregar tarea

y uno más que se llame lista de tareas

obviamente estos componentes no existen

así que voy a crear los

agregar tarea

punto j s corremos un documento un

documento un componente de maromas poner

aquí agregar tarea

guardamos y un segundo componente que se

llamaba listado tareas si no me equivoco

js lo mismo

aquí ya me equivoqué era el rap se

le ponemos aquí el listado tareas estos

2 naturalmente hay que importarlos desde

home

aquí importamos el agregar tarea

e importamos el listado de tareas y

hasta por lo tanto si me regreso a la

aplicación

y actualizamos

agregar a mira aquí sigue mal escrito

guardamos listo la magia de los errores

tipográficos muy bien aquí hasta la idea

es que aquí tengan la opción de agregar

una tarea y aquí tengan en lista muy

bien regresamos a este componente del

listado y vamos a comenzar desde aquí

muy bien aquí la idea es que

nos lea la base de datos y nos indique

este nos indique cuántas tareas hay que

renderizar entonces aquí vamos a recibir

un dato que se va a llamar llamémoslo

array

tareas

que metemos un poquito de estilo con

whatsapp vamos a meter un container

y vamos a meter un stack

que tenga un poquito de formato vertical

y la idea es que añada o que reciba un

array tareas y que lo mate y la idea es

que por cada

objeto tarea

va a correr una función que nos va a

regresar

que se nos va a regresar

monroe esto es de whatsapp no se

preocupen mucho por estas etiquetas

y nos va a regresar tres columnas

la primera va a ser la descripción vamos

a agregar objeto tarea punto

descripción y luego aquí vamos a agregar

un botón

que diga ver archivo

y luego otro voto aunque diga eliminar

tarea

bien esto aquí lo eliminamos y

debiéramos tener algo así

la descripción

botón y eliminar tarea tres componentes

esto hay que jalar lo desde buscar aquí

no me sirve vamos a jalar

container row com

y ahora la idea es que este listado de

tareas reciba efectivamente esta

información de dónde la va a recibir

desde su componente padre desde home

estoy aquí tantito home listado de

tareas entonces aquí ha listado tareas

le vamos a pasar las tareas que habíamos

definido como rey tareas y vamos a

comenzar de momento con algo falso con

llamarlo fake de ir a este fake de ira

vamos a definirlo desde aquí

const fake deira

es igual a una rey con distintos objetos

que vamos a llamar un haití

01 una descripción de ponerle tarea

falsa 1 una url para descargar este las

imágenes que un buen servicio que les

recomiendo es el de tics un punto foros

que indican qué tan grande las queremos

aumentar de 400 420

\[Música]

y listo

ahora esto hay que repetirlo

vamos a comenzar con tres tareas falsas

vamos a meterle un 2

13 cambiamos esta información falsa

y liszt ok entonces de momento no nos

estamos conectando con fire veis de

momento lo que estamos haciendo es

comenzar con una información falsa aquí

escrita como dirían en inglés hardcore

et esta información falsa la pasamos al

componente del listado tareas y listado

tareas lo que hace es que la recibe y

nos la ha mapea para regresarnos unos

componentes gráficos regresamos a la

aplicación

y aquí esta tarea falsa aún no te había

faltado es tarea falsa 3 con sus

botoncitos si acaso

al final del uruguay que meterle un hr y

todo esto hay que meterlo en un

fragmento si no conocen los fragmentos

son básicamente una manera de organizar

su código sin estar metiendo etiquetas

demás como algún este no se dice sección

main y todo eso

aquí me está marcando error por alguna

extraña razón es que esto no lo tengo

cerrado

y listo

ok aquí está agregar tarea muy bien pero

ya tenemos esto acá ahora la idea es que

esto en lugar de recibirlo

de aquí con el código que estábamos

metiendo nosotros lo reciba desde fire

store y aquí es donde comienza lo bueno

porque quieres the home vamos a estar

haciendo la conexión con fire store

ok lo primero es importar el servicio de

fires que es idéntico al servicio de

autenticación

comenzamos con un importe

desde fair face diagonal fair store

y desde aquí vamos a jalar la función de

get

firestone

esta función la guardamos en una

constante vamos a llamarla fire store es

igual a

firestone y por argumento le vamos a

pasar la aplicación diagonal a

credenciales con las cuales estamos

trabajando que es estar aquí que

importamos desde el documento de

creencia es idéntico a lo que hemos

estado haciendo muy bien ahora viene lo

bueno

la idea es crear una función cuando

primera que entender cuál es el problema

el problema es el siguiente me voy a

regresar aquí a la aplicación

aquí pueden pasar dos cosas lo primero

que puede pasar es que alguien no tenga

cuenta viene registra su cuenta es la

primera vez que usa el producto y al ser

la primera vez pues no hay nada escrito

acerca de esta persona

entonces caso número 1 primer usuario o

primera vez que entró al usuario el

segundo escenario es cuando a alguien

que ya ha estado con la aplicación

inicia sesión y por lo tanto debiera

tener sus propias tareas segundo

escenario el usuario recurrente el

usuario que regresa y debemos prever

estos dos casos la idea o la lógica

cuando colom se trabaja es que se accede

a home y la aplicación va a preguntar a

fire store oye tienes

acerca de este usuario si o no

sí sí lo tiene pues recibe la

información del usuario si no lo tiene

crear algo acerca de este usuario y cómo

lo vamos a identificar muy sencillo de

vuelta aquí en la aplicación

regresemos a

fíjense que cuando hay un inicio de

sesión el usuario global nos guarda

toda la información acerca del usuario

de firefox y dentro de esta información

de usuario de fire veis hay una

propiedad que se llama email correo la

idea es pasar este correo a home para

que home sepa con quién está tratando

entonces aquí vamos a pasarle como

propiedad vamos a pasarle algo que se

llame correo usuario es igual a

usuario global punto email

guardamos y ahora desde home vamos a

acceder con la llamamos vamos a acceder

a correo usuario

aquí en el campo de aprox colocamos que

queremos

estructurar

correo de usuario y vamos a lograrlo en

pantalla que les pares

correo usuario

y hasta si yo me regreso a la aplicación

pueden ver que estoy iniciando sesión

con la arroba la citó vamos a crear otra

cuenta llamarla las fi todos

nos registramos y ahora estoy iniciando

sesión con este es este la csf y todos

muy bien entonces con este correo vamos

a estar haciendo las búsquedas

me regreso aquí al código ya podemos

quitar este con solo

y vamos a crear una función esto ya lo

podemos cerrar lo podemos cerrar no me

gustan las cosas abiertas vamos a crear

una función que va a ser asíncrona

porque se va a estar conectando con fire

veis que se va a llamar a buscar

el documento

crear documento

esta función va a recibir un haití de

documento porque el haití es esto acá

que distingue cada uno de los documentos

de modo que nos va a buscar este dique

le pasemos y qué es lo que va a ser va a

ser lo siguiente

primero va a crear una

referencia al documento

luego va a revisar si existe en caso de

que sí exista va a generar o va a hacer

si es ciertas cosas en caso de que no

exista va a ser algo distinto muy bien

entonces ya tenemos aquí nuestro acceso

fire store pero no estar trabajando con

ciertas funciones la primera es la

función para crear una referencia

entonces desde aquí vamos a importar dos

y la segunda es ver si existe y vamos a

importar get dock muy bien

primero la referencia al documento vamos

a crear una constante llamada de red que

va a ser igual a 2 y desde aquí nos pide

tres argumentos primero la constante de

fair store segundo el path dije tres

quise decir dos aquí el pad funciona

como su explorador de archivos

regresemos a fire store este esta

colección de usuarios pueden verlo como

una carpeta

luego cada documento pueden verlo como

un archivo de modo que tendríamos

usuarios diagonal el haití del documento

o para llamarlos nombre del documento

entonces de vuelta aquí en el pad vamos

a indicar que ingresaremos a usuarios

diagonal y aquí vamos a poner de manera

dinámica el light y que queremos buscar

y para que esto funcione nuestro string

hay que cambiarlo

este lo que en inglés llaman back times

y esto es lo que llaman un string

template o algo así digámoslo un string

dinámico muy bien entonces primer paso

listo ya ya sabemos qué documento

queremos buscar lo siguiente es buscar

lo vamos a poner aquí un paso extra para

que esté todavía en documentado

buscar documento como lo buscamos lo

buscamos con la aplicación la función de

get down

qué edad recibe con una referencia en

este caso es locura

y esto de aquí vamos a enseñar una

promesa y vamos a guardarlo en una

constante es decir el resultado de la

búsqueda lo vamos a guardar en una

constante para poder estarlo checando

para ello vamos a decir con test a

consulta es igual a white y aquí

indicamos a white para que se espere a

que la promesa o esta búsqueda haya

completado muy bien y ya la guardamos

aquí pero fíjense que aquí con fire

suceda algo muy chistoso cuando es

chistoso

si el documento existe o el documento no

existe en ambos casos vamos a recibir un

objeto

no recibimos una dónde find no recibimos

un nube no recibimos un error recibimos

un objeto y la manera de saber si el

documento existe o no es a través de una

propiedad dentro del objeto que estamos

recibiendo la propiedad o método mejor

dicho es existe este es un método dentro

del objeto y aquí vamos a revisar si si

existe o no existe entonces qué ponemos

si esto nos arroja verdadero

entonces corremos el código de que si

existe caso contrario que nos arroje

false false o corremos el código de que

no existe muy bien supongamos que sí

existe supongamos que estamos buscando

el documento que se llama este hola a

las fit porque está iniciando en acción

o la roba la suite o si el documento si

existe la idea es

regresarlo como resultado del llamado de

esta función por lo tanto sí sí existe

uno podría pensar que vamos a

a regresar esta consulta pero consulta

es un objeto medio raro que no tiene la

información

exacta de nuestro documento la

información hay que revelar la con un

método que se llama de ir a este método

nos revela la información vamos a

guardarlo en info docu es igual a revela

me la información de la consulta

pero ojo que bueno aquí depende de cómo

estructura en su base de datos yo dentro

del documento voy a crear

voy a crear aquí un campo que se llame

tareas que va a ser este un array

entonces no voy a regresar la info lo

que voy a regresar

info docu punto el campo de tareas ya

está esto en caso de que si existe en

caso de que sí exista revela me la

información devuélveme sólo el punto

tareas muy bien ahora qué pasa si no

existe

si consulte hacemos la consulta

el punto xxi nos arroja falso lo que

tenemos que hacer entonces es crear el

documento para crear el documento vamos

a importar una función que se llama set

dock esté aquí

muy bien entonces caso de que no exista

vamos a hacer lo siguiente

vamos a crear el documento y esto recibe

los argumentos primero la referencia qué

documento quiere es crear vamos a ocupar

do courel en lo segundo es qué

información quieres colocar al interior

del documento yo al integrar el

documento quiero crear

una propiedad que se llama reacciones

que va a ser igual

el fake de ira que tenemos aquí arriba

entonces estamos haciendo lo siguiente

indicamos que nos cree el documento el

integral de cómo entendemos este campo

dentro del cual

como se dice ocupamos el experto por

aitor y guardamos esta información falsa

para que tengamos algo con lo cual

comenzar a esto vamos a esperarle su

buena wait para que termine y ya que

creamos el documento adivinen que vamos

a hacer la consulta nuevamente entonces

esta la pasamos para acá ya que hicimos

la consulta sabemos que si existe por lo

tanto por podemos

y revelar la información de la consulta

y regresar a este apartado de tareas

muy bien muy bien

ahora ya tenemos esta función que revisa

si existe nos lo crea y al final lo que

importa es que esta función no se está

regresando este apartado de tareas que

haremos con esta función lo que haremos

con esta función es correr la con un

news effects cada vez que se monte este

componente es decir al inicio que

comienza esta parte de la aplicación

para ello ocuparemos un news effect que

voy a importar desde aquí

y también existe un estado y state

ok muy bien

lo primero es crear este efecto

el dios efecto va a correr únicamente al

inicio y va a ejecutar la siguiente

función de flecha no server y función de

flecha prevé llamar la función ok dentro

de esta función de flecha muy importante

esto aquí es a 5 entonces lo que haremos

dentro del jucio effect es crear una

función que se llame obtener documentos

u obtener tareas y guardar el resultado

de esa función que va a correr está acá

dentro de un estado entonces aquí

también vamos a correr vamos a crear un

estado que se llame

al rey tareas

a rey

tareas y en un principio va a ser igual

va a ser igual a aunque estoy haciendo

va a ser igual a noble

este estado tendremos las tareas va a

comenzar siendo 9

y aquí dentro de delius effect hacemos

lo siguiente

fecha tareas

es igual a

buscar documento o crear documento que

documento quiero que busques o que crees

el documento correspondiente a el correo

del usuario que está iniciando sesión

aquí decimos correoso y recordemos que

esta función nos regresa las tareas

entonces lo que hago es que esto lo

guardo en tareas fechadas es igual a a

white

y ya que tengamos este tareas fichadas o

tareas externas y obtenidas qué sé yo lo

guardamos dentro del estado set al rey

tareas con tareas fechas

y ahora ya que definimos esta función de

fechas tareas lo que hay que hacer es

correr

fechas tareas

muy bien lo que va a suceder es lo

siguiente el componente se monta se

corre al yusef act nos busca las tareas

las guarda en el estado y ya debiéramos

tener acceso a las tareas a través de

este estado

entonces aquí en mi componente de lista

de tareas en lugar de pasarle el fake de

ira vamos a pasarle el estado que se

llama array y tareas

muy bien entonces se monta las busca las

pasa aquí y desde aquí las recibe y las

va a renderizar cambiamos a la

aplicación y aquí hay un error y les

diré qué es lo que pasa fíjense que dice

no se puede no se pueden en las

propiedades de null

y nos indica que el error está en el

listado tareas al parecer aquí array

tareas es nulo y no nos puede renderizar

nada y esto es un error y no se

preocupen esto es normal y es que sucede

que aquí al listado de tareas le pasamos

array tareas pero estando entonces en un

principio que intenta leer esto con uli

esto es un error lo que hay que hacer es

esperar a que recibamos la información y

para ello vamos a hacer lo siguiente

desde home vamos a condicionar esto de

aquí vamos a condicionar así diciendo

solamente

renderizan esto y pásale la info

a rey tareas ya tiene información ya es

un un valor verdadero si ya rey tarea ya

es verdadero y no es nulo corre en este

caso contrario no me corras nada

regresamos a la aplicación y ya no hay

error ok aquí ya tenemos acceso pero no

se muestran las tareas

vamos a revisar que la base de datos y

efectivamente tenemos aquí todo creado

por lo tanto significa que hay un

problema con el código vamos a revisar

aunque esté aquí estamos matando en las

tareas

y aquí en home

ok aquí está el error vean hemos dicho

que lo guarde como reacciones y luego

aquí pedimos que devuelva tareas no sé

por qué escribir reacciones debí haber

escrito tareas

voy a guardar este código y aquí en fair

race vamos a eliminar esto de aquí

porque me lo guardo como como reacciones

borramos esto

borramos esto y vamos a simular que es

la primera vez que ingresamos entonces

desde aquí cierro sesión

se da con google

y ya está muy bien ya nos los está

generando y vean que aquí me crea el

documento con mi correo me crea este rey

de tareas dentro del cual hay objetos

con descripción haití y url aquí está

muy bien y si yo vengo cierro sesión

e inició su sesión con el segundo aquí

no tengo nada

1 2 3 4 5 6 iniciar sesión

aquí está el re detecta que no está me

lo crea y me lo traen there is allí está

la csf y todos muy bien perfecto ahora

ya tenemos la parte de la de de no que

estoy siendo al aire lectura ahora lo

que sigue es poder eliminar estas tareas

y añadir tareas y la parte del

almacenamiento

muy bien para poder eliminar la tarea lo

que vamos a hacer es que al hacer clic

en este botón se corra una función que

detecte el haití

venga aquí a fire store no se elimine el

objeto con dicho

nos actualice el estado y por lo tanto

esto de aquí desaparezca

muy bien para ello dentro del código voy

a cerrarlo

aquí en lista de tareas tenemos este

botón de eliminar tarea la idea como les

dije es cuando se haga clic se corre una

función vamos a ponerle aquí

un clic ejecuta me

una función que se llame

eliminar tarea que reciba este

el light y entonces vamos con el objeto

o tarea punto y recuerden que este

objeto tarea lo está recibiendo de acá

del mapeo y dentro del objeto tareas

está lady muy bien ahora esta función

hay que definirla para ello ya cerramos

esto de aquí y desde acá vamos a

definirla como sin función

era eliminar tareas cierto que reciba a

un ied y tarea iba a correr lo siguiente

lo primero es generar un nuevo rey de

las tareas es decir cómo quedaría la rey

si éste se eliminase pero vamos a decir

con este nuevo

al rey

tareas es igual a la antigua rey tareas

que ya estamos recibiendo desde aquí

pero filtrando

esté filtrando cada objeto de tarea

donde vamos a regresar

únicamente

el objeto tarea

cuyo haití sea distinto de el aire y

tarea que queremos queremos eliminar

un tanto confuso pero pero echen un

vistazo a filtro en caso de que se hayan

confundido si no aquí está filtra me y

devuélveme solamente aquellos objetos

cuyo aire sea distinto de la editar ya

que queremos eliminar que vamos a

ponerle allí tarea a eliminar para que

quede más claro

a eliminar

muy bien ya tenemos aquí el nuevo rey

vamos a

entonces a dos cosas lo primero

actualizar la base de datos en fire veis

y lo segundo actualizar en la red global

de tareas para ello es importante que

desde acá recibamos el correo usuario y

recibamos la función de actualizar

estado que sería set a red y tareas

y esos vamos a pasarlos desde aquí desde

home

vamos a pasarle no desde a home

este sí les dejo será rey tareas y

correo usuario nos venimos aquí a este

listado de tareas vamos a pasarle

esto de aquí como

y tareas y también vas a pasarle el

correo usuario como

correo

usuario de modo que este componente

tiene acceso al estado tiene acceso a

modificar el estado y tiene acceso al

correo del usuario para poder

interactuar con fire store entonces de

vuelta aquí lo que haremos es enlazar

nos con fire page para ello importamos

fires up importamos desde fire with fire

store

la función para iniciar que sería el

fire store

y vamos a importar una función que se

llama

update ok y también doc para generar la

referencia inicial izamos fire store en

fire store iguala

firestone que estoy haciendo

firestone fire veis

muy bien entonces aquí dentro de la

función de eliminar tarea vamos a ir

poniendo este comentarios primero

crear nuevo

rey de tareas muy bien lo siguiente

actualizar base de datos

para ello creamos la referencia que

sería

do courel es igual a

2 donde pasamos fire store

y el path que como habíamos visto es

igual a esta edad que vamos a copiarlo

para no perder tiempo

muy bien

pegamos el path

y ya tenemos la referencia al documento

que queremos actualizar lo siguiente es

ocupar la función de actualizar

documentos de jack layton

recibe desde la referencia y los datos

actualizados que pasamos de ocurrir y

qué datos queremos actualizar que vamos

a actualizar el apartado de tareas el

cual va a ser igual a este nuevo array

de tareas

\[Música]

y lo siguiente no tenemos que esperar a

recibir respuesta porque vamos a estar

trabajando con el estado global

bueno no es probar propiamente pero aquí

vamos a poner actualizar

state y simple y sencillamente decimos

que se está tarea es igual al nuevo rey

tareas

listo muy bien

a mí aquí esto ojo con esto casi se me

escapa que vamos a ponerle correo

usuario

ya está perfecto realizamos a la

aplicación

vamos a eliminar este de aquí y me marca

error

y el error está el error está a ningún

lado simplemente hay que actualizar

eliminamos y ya está vean elimine la 1

elimine la 2 y si me vengo aquí a la

base de datos creo que estoy aquí verdad

ya solo me queda la 3

muy bien entonces nuestro botón de

eliminar funciona ahora lo que sigue es

poder agregar tareas es decir la parte

de create para ello vamos a regresar al

código

nos venimos a home y aquí tenemos

nuestro componente de agregar tareas

vamos a trabajar con él aquí la idea es

tener un formulario donde la gente pueda

poner la descripción de la tarea cargar

un archivo y luego un botón para añadir

este esta tarea

ok primero vamos a crear este formulario

que les digo vamos a trabajar con un

container

vamos a trabajar conforme con él

para que sea esto mucho más rápido aquí

ponemos un container

pero escrito mal

container

el centro del cual vamos tener un

formulario

un formulario dentro del cual vamos a

tener

tres columnas una columna para el texto

una columna para el archivo y una

columna para el botón entonces aquí

ponemos un road

y tres columnas esto lo explicamos muy

bien la primera columna sería un input

para el texto entonces que ponemos input

cuando voy a revisar cómo sería el input

en woods trap aunque seríamos menos así

fueron punto control describe tu tarea

lo siguiente sería un input para el

archivo entonces aquí en tipo cambiamos

a file

ok file y en place holder vamos a poner

añade archivo

y por último un botoncito

que sea del tipo submit

type igual a submit y vamos a ponerle

agregar tarea y hasta regresamos a la

aplicación

la marca que no importa el botón clásico

ok aquí está describe tu tarea

seleccionar archivo agregar tarea vamos

a cerrar esto de aquí

muy bien y ahora la idea es que yo aquí

pueda escribir esto y agregar la tarea

de momento va a saltar la parte del

almacenamiento

entonces cuando haga clic en agregar

tarea debiera número uno evitar que se

refresque número dos actualizar la base

de datos y número tres actualizar el

estado y es lo que haremos regresemos

aquí en agregar tarea entonces que vamos

a ponerle land submit

vamos a ponerle una función que se llame

añadir

esta función no existe vamos a definirla

desde aquí corremos a 5 function añadir

tarea que va a recibir el evento lo

primero es

event default para que no se actualizan

lo segundo es actualizar base de datos

para poder actualizar la base de datos

necesitamos cierta información lo

primero es el correo y lo segundo es

conectarnos a fire page entonces qué

vamos a ponerle que esté el componente

recibe el correo de usuario mismo que le

vamos a pasar desde aquí vamos a pasarle

todo esto de una vez

en agregar tarea vamos a pasarle todos

estos prox mira me recomienda

y todos estos vamos a estructurar los

aquí era ese rey

como era

era zp y tareas y reitere as

muy bien

entonces actualizar la base de datos

vamos a conectarnos con fire store como

siempre en port fire y sap

importamos desde fire with fire store el

qué

firestorm lo guardamos en la constante

de fire store

con el argumento de el fenerbace up y

también vamos a ocupar el famosísimo

update doc muy bien

entonces bueno antes de actualizar la

base de datos vamos a crear nuevo rey

de tareas

lo mismito que la anterior nuevo rey

tareas es igual a una re vacío dentro

del cual vamos a recuperar que la red

que ya tenemos

y además vamos a añadir un nuevo objeto

con haití con descripción

con url para descargar el archivo y ya

está en haití la idea es que sea una

idea que no se repita que sea único para

ello podemos ocupar new dates para crear

este o crear un timestamp que nos

indique cuántos milisegundos han pasado

desde 1970 y lo convertimos al número

new day ya está en descripción vamos a

pasarle la descripción que haya puesto

el usuario y no rl de momento vamos a

pasar una https una ubicación falsa

dixon punto foros diagonal 4 inc

esta descripción hay que crearla para

ello es decir con esta descripción

es igual a target y jalamos en haití

no tiene vamos a ponerle hay 10 igual a

ponerle forma descripción

fue un descripción punto valió ya está

lo siguiente es actualizar la base de

datos primero con la referencia de

ocubre efe es igual a 2

dónde vamos a pasar

no lo traje

que me conviene

a esta vamos a pasarle el off

y luego el paz el paz ya sabemos cuáles

es el de toda la vida

usuarios correo usuario

muy bien creamos la referencia y luego

vamos a actualizarlo con la referencia y

la información vamos a decir tareas es

igual a este rey donde m

suelta asome expande es el nuevo rey

tareas perfecto y lo siguiente es

actualizar estado y para ello decimos

que se derrita áreas es igual al nuevo

rey tareas perfecto vamos a ponerlo a

prueba regresamos a la aplicación

actualizamos a mí aquí me faltó

que me faltó

ya aquí me equivoqué puse off cuando

había haber puesto fire store

muy bien ya está regresamos y vamos a

añadir las tareas vamos a ponerle

probando añadir

agregar tarea

me regreso aquí a la base de datos y

aquí está probando añadir vamos a

agregar una más vamos a ponerle un fin

sé que no se eliminó vamos a ponerle

como añadir 2

muy bien y aquí está probando añadirlos

esto de que nos eliminado que nos

faltó aquí vamos a ponerle como último

limpiar form entonces decimos que

este de aquí

es igual a

entonces si yo vengo y agregó esto de

acá

listo se limpia y nos está creando las

tareas y si yo vengo y cierro sesión

estaba con el 2 e inició sesión con el 2

aquí están todas muy bien ya podemos

eliminar

podemos añadir

y podemos leer y crear la idea ahora es

incorporar la parte de almacenamiento

todo vamos a modificar un poquito los

estilos aquí por ejemplo el listado

tareas la parte de

eliminar tareas vamos a ponerla como

peligrosa variante igual a danger

aquí en ver archivo vamos a ponerle

variante iguala

\[Música]

santander y esto es parte de red bulls

red

y por último que vamos a tener un

poquito de margen y un hr porque no en

la parte de agregar tarea entonces aquí

en el road

en class name vamos a meterle un botón

margin 5

bueno creo que lo puse al revés era

margin-bottom al revés

aunque aquí está

h por qué no después de acá

ya está perfecto muy bien entonces ahora

sí vamos a ver la parte de el

almacenamiento el almacenamiento lo

vamos a ver en dos lados en el botón de

ver archivo y en la parte de seleccionar

archivo esto es la parte de agregar

tarea entonces vayamos para allá

a quien agregar tarea tenemos este input

de tipo file

y aquí la idea es que cuando alguien

suba un archivo el input detecta que

hubo un cambio y nos lo va a cargar al

servicio de storage de fires para ello

vamos a decir un change corre en esta

función que se llame file hand hardware

entonces más bien por convención puede

llamarlo como deseen

handler y aquí cerramos esto acá y vamos

a definirla como

sin función

ander que va a recibir

este un evento

y vamos a hacer lo siguiente

lo primero es detectar el archivo

detectar archivo

lo segundo es cargarlo a fire face tórax

y lo tercero es obtener url de descarga

para detectar el archivo hacemos lo

siguiente diremos con archivo local es

igual a target que en este caso de

target sea el input y que hay una

propiedad que se llama files si

tuviésemos múltiplos e múltiplos ser

múltiplos múltiples archivos tendríamos

muchos pero ahora sólo tenemos una

entonces dentro de la raíz indicamos que

queremos el cero

lo siguiente descargar los fibers torres

y para ello necesitamos naturalmente

importar el servicio de almacenaje o

almacenamiento no sé cómo se diga from

fire veis

diagonal storage y aquí como siempre

vamos a llamar la función de get storage

y vamos a llamar la función de red para

crear referencias y la función d

se llama

blood bites x

cloud bites muy bien entonces cargarlo y

ojo muy importante

inicializar el storage dentro de una

constante que se llame storage

gates tórax y le pasamos el fire sab

confort momento muy bien entonces vamos

a cargarlo como funciona muy sencillo no

la referencia decimos cons red más pone

el archivo red es igual a led y funciona

igual a fire store pasamos en la

constante de storage

y pasamos un paz en paz vamos a

guardarlo en una carpeta que se llame

documentos dentro de la cual vamos a

pasarle el nombre de que será bueno

vamos a pasar el nombre del archivo para

decimos archivo local punto name y para

que esto funcione hay que cambiarlo

a un template string no mejor cómo se

llaman éstos back text muy bien entonces

guardamos el archivo local y el paz

donde lo guardaremos en fire bises la

carpeta documentos con el nombre del

archivo que estamos cargando ya que

tenemos la referencia lo que sigue es

cargarla y para ello decimos

vamos a

a este a esperar que se cargue que se

cargue a través de load bytes

y aquí pasamos un do courel

que sería el chivo ahora es la

referencia y luego el archivo en sí que

sería el archivo

entonces le decíamos cargarme en esta

dirección

este archivo de aquí esperamos a que se

cargue y porque vamos a esperar a que se

cargue para obtener la url de descarga

entonces diremos algo como

con este url descarga es igual aquí

jalamos la función de get down load y

barral

obtener el enlace de descarga y decimos

qué

nicky simple y sencillamente pasamos la

referencia que sería archivo ref

y ya está ahora vamos a estar cargando

archivos y vamos a generar wireless de

descarga y la idea es que aquí en lugar

de guardar esta url es de que nos

sacamos de la manga tome estar acá

entonces para ello vamos a borrar esto

de aquí

y esta url de descarga vamos a definirla

afuera de las dos funciones de url

descarga

y entonces

desde aquí vamos a pasarle

url

descarga ya está

muy bien

y ahora desde el listado tareas pasos

finales en el botón de ver archivo lo

vamos a envolver en un angol tag

los cerramos

y es tan corta que debiera llevarte el

surf es igual a objeto tarea

punto url ya está muy bien

entonces

recapitulando

cuando se modifique el input de archivo

nos corre esta función que detecta el

archivo lo carga en el storage obtiene

la url y esta duele la va a leer la la

acción de leer la de cargar la 3

revisamos nuestra nuestra aplicación

vamos a llamarlo tarea con archivo

qué archivos seleccionaremos vamos a

poner esta imagen de aquí

abrir

y quien marca un error

o que aquí nos dice que este no se pone

las propiedades de dónde find me parece

aquí leer name de archivos locales es

inadecuado muchas veces se ve que es

tratar algún error de actualizar vamos a

intentar nuevamente vamos a ponerle

tarea con archivo

seleccionamos nuestro archivo

vamos a poner este de aquí

y fíjense qué

aquí en la parte de storage

ya nos creó esto de aquí y ya nos cargó

el archivo que acabó justo de poner acá

como pueden ver documentos escaneados

por lo tanto lo deben agregar tarea y

aquí me dice

custom promise object

dice que meter promesas es un campo

inválido lo cual significa que estamos

intentando guardar una promesa en añadir

tarea lo cual no tiene sentido a menos

que sea por la el archivo y aquí está

esto de aquí esto aquí es ese sin crono

entonces tenemos que esperar a que se

resuelva si no estaríamos guardando una

promesa agregamos a wait para esperar a

que nos dé la url y una vez que tengamos

ya bien la url la guardamos aquí misma

la cual es accedida desde acá desde la

parte de añadir está área muy bien ahora

sí

tarea con archivo al escanear vamos a

seleccionar otro el 8

estaría con archivo escanear 8 teníamos

aquí al storage

y aquí hasta el 8 y yo le puedo dar a

agregar tarea y listo luego si le doy en

ver archivo me va a llevar para acá

y muy bien

perfecto pues ya está aquí podemos poner

este no lo sé tarea con archivo 3

seleccionamos esta imagen cita le doy a

abrir de la carga vamos a ver aquí vamos

a actualizar aquí está y si lo voy a

agregar tarea me agrega ver archivo me

lleva la imagen cual documento y así

sucesivamente aquí este pues ya

estaríamos trabajando con los tres

elementos

autenticación

a base de datos y almacenamiento

aquí en cuestiones a tomar en cuenta

número uno este tendrían que hacer

muchas validaciones aquí la idea es

mostrarles cómo trabajar con fire veis

no cómo trabajar con formularios y

aplicaciones pero tengan en cuenta que

aquí tendrán que validar que no se pueda

añadir la tarea menos que se haya

cargado el archivo por ejemplo o

tendrían que validar qué pasa si éste

intentó iniciar sesión con correo siendo

que ya estoy con google por ejemplo

error no cuestiones así pero bueno eso

ha sido todo el día de hoy espero que

les haya gustado el vídeo que les haya

sido útil y como siempre les recomiendo

que número uno que visiten la

documentación número dos que practiquen

número tres que visiten el sitio web

para encontrar más tutoriales como éste

que les ha gustado déjenme me gusta

suscriban y es más dejen en los

comentarios qué tipo de tutoriales les

gustaría ver y yo con gusto se los

comparto hasta la próxima

\[Música]

nunca
