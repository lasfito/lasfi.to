---
type: tutoriales
url: crud-logs-firebase-cloud-functions
enlaceyt: https://www.youtube.com/embed/eG0jOOlkyVg
date: 2022-03-11T00:26:34.669Z
title: Tutorial CRUD + Logs con Cloud Functions en Firebase y React
metaDescription: "Aprende cómo crear una aplicación CRUD con autenticación y
  Logs con Firebase, React y Google Cloud Functions #tutorial #webdev #react
  #firebase  #crud"
tag:
  - Firebase
  - React
autor: Adrián Salgado
introThumbnail: "Aprende cómo crear una aplicación CRUD con autenticación y Logs
  con Firebase, React y Google Cloud Functions "
keyword: firebase crud logs
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/18-crud-firebase-cloud%2F18-crud-firebase-cloud.png?alt=media&token=25a39777-94b2-4de2-b8f6-b9d1dc69644b
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy vamos a aprender cómo crear un

panel de administrador con fire race y

react y la idea es que este panel tenga

funcionalidad cruz y que gestione una

base de datos en este escenario estamos

gestionando un almacén de una tienda

puede ser lo que ustedes deseen y como

creo podemos crear productos aquí vamos

a añadir entonces abritas a 12 99 en

almacena y 200 y el código de xavi

estará acá podemos crear entradas como

pueden ver podemos eliminar vamos a

eliminar

este de aquí podemos editar también este

agua vamos a ponerlo en oferta va a

estar entre 799 aquí se cambia como

pueden ver y adicional a esta

funcionalidad cruz también tenemos un

buscador donde podemos realizar

consultas bien sea por el código aquí me

arroja la leche cuando no el agua perdón

también puedes buscar por título por

ejemplo sabritas me arroja este de aquí

es este un panel de administrador que

tiene autenticación ahora mismo tenemos

sesión iniciada con este correo de acá

por ser recesión puedo ingresar

nuevamente colocó mi contraseña y como

pueden ver la base de datos persiste y

persiste porque estamos trabajando con

fair isaac y tenemos los productos esto

se actualiza en tiempo real y la mejor

parte es que vamos a trabajar con cloud

james jones al ser un panel de

administrador que trabaja con

información sensible a lo mejor son

usuarios son salarios no no sé qué que

van a utilizar

necesitamos saber quién está haciendo

cambios en la base de datos para vamos a

ocupar estas funciones que dentro de la

misma base de datos nos van a crear un

sistema de logs de entradas aquí podemos

ver por ejemplo que

el usuario hola a las fito eliminó este

producto de acá en tal mecha o que lo

mejoró la las citó creó este producto

que se llama lotes en tal fecha de modo

que siempre sepamos quién está haciendo

los cambios estos cambios se generan

automáticamente de modo que es un panel

bastante completo y si les interesa

aprender cómo hacerlo acompáñenme

[Música]

vale y antes de comenzar a recordarles

dos cosas la primera es que encuentran

el código de ese tutorial en la

descripción la segunda invitarlos a que

se suscriban a mi boletín para recibir

cada semana consejos que los ayuden a

mejorar como desarrolladores habiendo

dicho esto vamos a comenzar lo primero

que hay que hacer es abrir una terminal

y desde allí hay que dirigirnos al lugar

donde queramos trabajar y tenemos dos

opciones la primera es trabajar con el

ex rey ya cap y con las que se instale

instalen fire veis en ella con la

segunda que yo recomendaría es utilizar

mi plantilla la cual la encuentran

colocando en github puntocom diagonal as

fito diagonal react fibers esta

plantilla ya viene preparada y aquí

vamos a indicarle que la guarden la en

la carpeta tutorial admin por ejemplo

presionamos ente esto nos va a clonar

esta plantilla este repositorio y lo que

sigue es introducirnos en ella tutorial

admin e instalar las dependencias con en

pie instó

una es que se ha descargado todo abrimos

la carpeta con nuestro editor favorito

yo trabajaré con beats code cerramos la

terminal y desde aquí desde el editor

abrimos la terminal integrada y yo

adicional a esto voy a instalar bus trap

para no tardar tanto con este tutorial

si quiero hacer lo mismo lo que tendrían

que hacer es dirigirse a red bulls tras

hacer clic en get stoned copiar el

comando que nos instala el pin

y una vez que se ha instalado también

tenemos que añadir los estilos añadir

los estilos se tiene un apartado que nos

da la instrucción de cómo importarlo y

esto lo podemos colocar en nuestro

archivo de index js por ejemplo aquí

guardamos y lo último revisar que esté

todo bien cuando íbamos a correr en pie

start y debiéramos tener en nuestro

navegador algo similar a lo que están

por ver en pantalla está aquí un hola y

un botón que no hace absolutamente nada

bueno habiendo hecho esto ya podemos

comenzar y la idea detrás de nuestro

panel de administrador es que detecte si

hay sesión iniciada o no si hay sesión

dirija a la persona al panel si no hay

sesión dirija la persona a iniciar

sesión en alguna pantalla de login por

ejemplo para ello vamos a crear aquí en

nuestro archivo de app vamos a crear un

estado que vamos a llamar usuario que

vamos a inicializar en tu después lo que

vamos a hacer es importar desde boots

rap vamos a importar un componente que

se llama container

y aquí lo que vamos a regresar es un

contenedor

que sea fluido y al interior vamos a

utilizar un aparador terciario y hacer

lo siguiente si el usuario existe si los

ha iniciado sesión entonces estamos que

nos lleve a un home caso contrario

queremos que nos lleve a un login por

ejemplo y estos componentes naturalmente

no existen bloque hay que crearlos para

ello aquí en sours voy a ir a crear una

carpeta llamada views dentro de la cual

vamos a crear un punto js aquí vamos a

devolver de momento algo muy sencillo

que diga por ejemplo bienvenido y

también vamos a crear el componente o la

vista de lo que hacemos lo mismo donde

solamente vamos a regresar un inicia

sesión por favor y una vez habiendo

hecho esto regresamos a app y estos dos

hay que importarlos el home ya login

para ello aquí avanzado como importar

home desde view sounds lo mismo para el

login y ahora si visitamos el navegador

podemos ver que nos redirige a iniciar

sesión por favor y esto es porque de

entrada nuestro usuario está en no vale

y ahora lo queremos es trabajar esta

ventana de blogging para ello nos

dijimos a login y aquí también nos

importar unos cuantos componentes de

busturia vamos a importar un container

un form y un botón

y aquí no va a regresar un día

regresamos un container y al interior

vamos a tener este texto de inicia

sesión por favor el cual va a estar

dentro de un h 1 además de este título

requerimos nuestro formulario para ello

ocupamos form

y al interior de forma vamos a ocupar un

grupo en el cual vamos a recoger el

correo en la etiqueta que diga correo y

el tipo con ello podemos cerrar este

grupo vamos a tener otro grupo también

para la contraseña para ello ocupamos

los mismos componentes grupo etiqueta el

input y cerramos y por supuesto un botón

que sea de tipo submit que va a decir

iniciar sesión cerramos este botón vamos

a cambiar las etiquetas por el texto en

español correo

contraseña y muy importante asegúrense

de que agreguen haití a sus inputs en

este caso este y lo vamos a nombrar en

forma correo y este lo vamos a llamar

forma contra guardamos regresamos al

navegador y como pueden ver tenemos ya

iniciación por favor correo y contraseña

lo que sigue es obviamente que cuando yo

ponga aquí mis datos bueno vamos a

ponerlos bien yo haga click en iniciar

sesión e inicie sesión y que no se le

reinicia la página o se actualice para

ello y antes de continuar necesitamos

crear nuestro proyecto de files lo

tenemos que hacer entonces es dirigirnos

a fire page punto google.com desde ahí

100 sesión iniciada nos vamos a la

consola y hacemos clic en crear proyecto

yo llamaría para este tutorial llamaría

tutorial admin youtube damos continuar

no requerimos analíticas creamos el

proyecto y le damos unos cuantos

segundos de fires para que la provisión

de recursos y servicios para nosotros

una vez listo hacemos clic en continuar

nos lleva a la pantalla de inicio del

proyecto y muy importante vamos a

trabajar con tres servicios distintos el

primero el servicio de autenticación por

lo tanto hay que inicializar luego

comenzarlo hay distintos proveedores

para iniciar sesión vamos a trabajar con

correo por lo tanto hacemos clic en

habilitar y guardamos es todo lo que

requerimos lo segundo la base de datos

de fire store para ello hacemos lo mismo

creamos la base de datos muy importante

que esté en modo prueba siguiente

elegimos la ubicación y hacemos clic en

habilitar una vez que se ha de terminar

una es que se haya terminado de

habilitar la base de datos el tercero

tercer servicio que vamos a trabajar son

las round functions o funciones este

lambda también es como que nación en así

y para ello muy importante tienen que

actualizar su plan de fire with fire y

si tiene dos planes de plan

completamente gratuito y el segundo plan

que es plan semi gratuito porque les

incluye la parte gratuita y si excede en

esa parte gratuita entonces ya les cobra

bajo ciertas tarifas para ello lo que

tiene que hacer es aquí en el panel

izquierdo hacen clic en actualizar y

eligen el plan de prepago obviamente

deben tener ya guardado algún método de

pago éste le damos que sí

y el listo que hemos creado una letra

que me avise cuando haya accedido a los

cinco dólares muy bien y ya con ello si

nos dirigimos aquí a functions notarán

que este podemos hacer clic aquí en

comenzar y nos da las instrucciones o lo

haremos más adelante también atrás lo

que importa es que estén en el plan de

prepago pero no se preocupen no van a

pagar absolutamente nada mientras éste

no se excedan de estas cuotas pero bueno

habiendo terminado esto ampliando

terminado de configurar el proyecto lo

que sigue es crear una aplicación para

ello venimos aquí a configuración

deslizamos aquí sale crear aplicación yo

elegiré crear crear aplicación web y la

nombraré de denuncia web app youtube

admin qué sé yo la registramos y aquí lo

que nos interesa es lo siguiente las

credenciales que nos arroja aquí vamos a

copiar desde a pic y hasta hyde y

copiamos y de vuelta en nuestro proyecto

si utilizaron mi plantilla hay una

carpeta que se llama fire list el

interior están credenciales y aquí lo

que hay que hacer es reemplazar esto acá

por lo que copiaron estas son las

credenciales para su aplicación de su

proyecto ok incluyen que estamos

haciendo es importar una función que

inicializa fire beige e inicializar la

con nuestras credenciales y esto lo

exportamos para poder utilizarlo en lo

largo y ancho de nuestro proyecto

habiendo hecho esto lo que sigue

entonces es regresar al login y aquí nos

interesa poder iniciar sesión para ello

vamos a crear una carpeta más llamaremos

plans jones qué sé yo y aquí vamos a

crear un archivo que se llame el login

email password

basware no sé escribir y aquí lo que nos

interesa es crear esta función que

inicie sesión en cualquier parte

entonces ojo muy importante siempre que

quieran trabajar con fire reid lo

primero que hay que hacer es importar

esto de aquí que estamos exportando está

fire visa y después lo que sigue es

importar los servicio que quieran

utilizar por lo tanto yo voy a trabajar

con autenticación por lo tanto voy a

importar desde fuera lo primero que dado

muy importante esto siempre es importa y

luego las funciones que requieran yo voy

a importar la de iniciar sesión con

iniciar sesión con correo y contraseña y

lo tercero es inicializar esto de aquí

entonces diríamos count of es igual a 0

y le pasamos nuestras credenciales y

ahora sí vamos a crear esta sesión esta

sesión esta función va a ser asíncrona y

la vamos a llamar

login con email en password que va a

recibir un correo va a recibir una

contraseña y con estos argumentos lo que

va a hacer es ejecutar la función de

fires entonces aquí vamos a no podemos

hacerlo así vamos a guardar el resultado

en una web bueno pues lo más sencillo

a deshacernos de todo esto esto sería lo

idóneo pero como mucho más sencillo

sería siempre sencillamente correr

sangin with y medio en password que

recibe como aumentos por correo y

contraseña ok guardamos la exportamos y

de vuelta a quien login vamos a crear

una función que va a manejar lo que pasa

o lo que pase cuando ya haga clic en

cuando aquí es tengo un error pero qué

pasa cuando haga clic aquí en este

iniciar sesión entonces aquí en el

formulario voy a decirle que cuando

alguien haga clic en submit me corra la

función que se llame submit camber vale

y esta función no existe hay que

definirla

entonces aquí lo queremos es crear esta

función que se llame submit under que va

a recibir el evento y lo primero que

hará es prevenir que

dicho evento se ejecuta en este caso que

se actualice la página lo siguiente

queremos es guardar los datos de correo

y contraseña para ello vamos a decidir

con su correo es igual a documento de

télam en vaya aquí y utilizamos el aire

o también lo que pueden hacer de otra

manera es contraseña es igual a punto

target punto contrapunto valió pero ojo

que esto de aquí son los aires y

nosotros los llamamos

form contras y éste lo llamamos form

corre o dos tienen dos maneras distintas

esto lo que hace es aprovechar el evento

que se activa con el formulario esto lo

que hace es buscar el aire vale y ahora

para que esté funcionando lo queremos es

lograrlos en pantalla

para ello voy a abrir aquí está mi

consola y vamos a crear a escribir mejor

dicho el correo de hola las vito

hacemos clic acá y noten que no se

actualiza y que me los imprime en

pantalla por lo tanto significa que ya

tenemos estos datos y ahora lo que sigue

es pasar estos datos a nuestra función

que inicia sesión vale y para ello lo

que tenemos que hacer primero es

importar desde aquí desde el login vamos

a importar login y password y aquí en

esta función que gestiona el summit lo

que haremos es el login y password y le

pasamos el correo y la contraseña y ya

con esto podríamos estar iniciando

sesión entonces cerramos este archivo y

cerramos credenciales y la pregunta es

bueno ya iniciar sesión en fire y soy

asociación edición sesión en fire veis

que es lo que sigue lo que sigue es que

quien la app se detecte este cambio de

sesión y por lo tanto nuestro estado en

lugar de que éste no ya tenga algún

valor para ello desde aquí les daremos

exactamente lo mismo que hicimos en la

función de login y para ello vamos a

importar

a las credenciales vamos a importar este

servicio de autenticación

y vamos a importar esta función ambas

desde fire soft y muy importante tercer

paso inicial izamos esto con esto vale y

entonces aquí lo que nos hace es lo que

a su ser es lo siguiente vamos a correr

está funcionando state change que va a

recibir este objeto que inicializa amos

se lo iba a recibir una función que

queramos que corra cada vez que hay

algún cambio decisión y qué es lo que

queremos que ocurra cuando haya

contaminación dos cosas la primera si es

que existe y aquí me faltó en que

recibimos el usuario de firefox en caso

de existir y aquí si es que existe este

usuario de fibers lo que vamos a hacer

es que nuestro estado tenga la

información del usuario de firefox caso

contrario en caso de no existir lo que

haremos es definir el usuario en nulo

por lo tanto ahora que ya estamos

escuchando guardando y redirigiendo si

yo regreso al navegador y coloco mi

correo a pero ojo muy importante esto

dice iniciar sesión dado que es un panel

de administrador los usuarios deberán

ser creados por el súper administrador

únicamente es lo que vamos a hacer aquí

de vuelta en fire veis vamos a la

consola vamos a autenticación y vamos a

agregar a un usuario esto tiene que ser

aprobado por el súper alguien

y vamos a crear este usuario con

contraseña 1 2 3 4 5 6 hacemos clic en

agregar usuario y ahora sí de vuelta

para que siguió intento iniciar sesión

con este 1 2 3 4 5 6 fíjense que se

detecta la sesión y me llevan a

bienvenido lo cual significa que todo

esto aquí está funcionando correctamente

guardamos los datos lo pasamos a nuestra

función y desde app se detecta el cambio

y dice sabes que ya no te muestra login

ahora te muestro un perfecto entonces

vamos a trabajar en home lo primero que

haremos es añadir un botón que nos

permita cerrar sesión para ello vamos a

esté aquí el botón vamos a poner cerrar

sesión

y lo que haremos es aquí en funciones

crear otra función más que signifique o

que diga saint out

js y como siempre vamos a importar a

fire y sap importamos nuestro grado y

una función que se llama sign auto alas

desde fire show e inicial izamos esto de

aquí y nuestra función aunque se va a

llamar hijo les cuento el mismo nombre

se llamará cerrar sesión

bah

va a correr y estará en el fire race y

con esto cerramos la sesión y escucha

que se cerró la sesión y me devuelve

español por lo tanto me va a mostrar

esto aquí hagamos la prueba aquí

importamos

sainz out desde

bones jones

y vamos a hacerle que en el on click

no se ejecute

sainz av

ahí lo tienen

ok aquí hay un problemita vamos a

cambiar el nombre está aquí

cerrar sesión

y nos faltó exportarla por supuesto es

por default cerrar sesión

ahí lo tiene entonces de vuelta en home

habiendo la importado desde acá desde

esa recesión si me vengo al navegador y

actualizó me dice qué botón no está

definido y es que utilice mayúsculas qué

torpe ahí lo tienen ok aquí dice

bienvenido tengo obsesión iniciada y

llegó clic en cerrar sesión en cierra la

sesión ingresamos una vez más y no se te

que una vez más y cerramos y esto

funciona perfectamente muy bien entonces

ya que funciona el iniciación vamos a

trabajar la parte de esta parte de

gestión de bases de datos

regresamos aquí al editor y vamos a

trabajar el home para ello vamos a

importar ciertos componentes desde boots

draft para ello hacemos esto de canales

de rían woods trap y lo que importamos

será un container un stack un botón y un

ford vale este día cambiamos lo por un

container y lo queremos es que este

botón y este bienvenido vamos a decir

vamos a envolverlos dentro de un stack y

aquí luego cerramos entonces este

bienvenido lo envolvemos en un párrafo

y al párrafo vamos a meterle un poquito

de estilo algo como font-size un 24 que

sea bienvenido y el varón vamos a

cambiarlo por uno de muestra y aquí si

queremos mostrar el correo con el cual

está iniciando sesión lo que tendremos

que hacer es que home debiera recibir

el usuario y aquí lo queremos entonces

es mostrar usuario punto email y este

email existe porque es lo que recibimos

desde el fire list y esto lo estamos

bordando en el usuario entonces luego

que faltaría es decir algo como usuario

es igual a usuario

guardamos y de vuelta aquí en el

navegador dice bienvenido hola la

necesito vale si cerramos esto de aquí

notarán que

este botón tendrá que estar aquí y es

que nos faltó que en esta que estamos

importando tenga dirección

horizontal

ahora

entonces aquí tenemos esta primera parte

y aquí en contra vamos a volverlo fluido

sigue igual lo que tenemos que hacer hoy

lo que tenemos que hacer entonces es que

en up el container instant fluye también

que raro cuando le damos importancia

continuamos trabajando con el home esto

sería la primera parte la de arriba

vamos a separarlas con un hr lo vamos a

ponerlo así y luego lo que sigue es el

buscador donde puede hacer las consultas

para ello vamos a cómo es un buscador

vamos a utilizar un formulario key y al

interior del formulario vamos a poner un

stack que de misma manera sea horizontal

igual que el anterior

y entonces lo que haremos es dentro de

este estaca horizontal ir colocando los

campos para ello vamos a poner aquí este

un grupo dentro del cual va a ir un

input que va a decir buscar ok y muy

importante fíjense de colocar una y de

mi caso yo lo estoy poniendo como

búsqueda adicional colocamos un botón de

tipo submit que diera buscar y vamos a

poner otro botón más que diga reset o

recipiente para que no nos tachen de

iremos aquí vamos a decir que este

variante va a ser de no lo sé light

guardamos y de vuelta en el navegador

tenemos el input este que nos va a

actualizar la página porque está dentro

de un foro y este resetear que no hace

absolutamente nada y para arreglar esto

de aquí lo que haremos es en este stack

el primer hito en clases name

vamos a utilizar una clase de whatsapp

que es si no me equivoco flex 99 justify

count en junín

guardamos y ahí lo tienen para lo que

sigue es colocar otro más y tener

nuestra tabla donde van a mostrar los

resultados por lo tanto éste está lo

podemos cerrar este foro lo podemos

cerrar y vamos a trabajar la siguiente

parte que es el h

el hr para separar y que vamos a

trabajar a colocar una tabla y esta

tabla nos hizo falta importarla destaca

la importante y lo que haremos es lo

siguiente lo primero es trabajar en el

tíbet ok dentro en dije vamos a colocar

los campos del número y bueno depende de

su caso o cuántas este columnas quieran

y entonces vamos a poner que vamos a

colocar cinco de éstas

vamos a ver modificarlas una vez va a

ser número el número de haití vamos a

colocar el título

esto lo duplicamos título a presión

conseguir cantidad y el buen es que hay

antes colocan cuántas columnas deseen y

muy importante una más que va a ser en

acciones que nos aplicar los botones de

editar y eliminar esto va para la parte

de indigente la cabeza y lo que sigue es

el chivo en donde vamos a colocar todos

los datos y obviamente aquí en datos lo

único que haremos es o no lo queremos es

mapear la información que recibamos de

mientras vamos a colocar uno falso vamos

a poner esto de aquí

cuántos son 34 563 46

esto lo cerramos

los cerramos y cerramos el chivas di

sueco o que ya lo tienen más que había

puesto ahí está regresamos al navegador

y es así como se estaría viendo título

precio cantidades que voy acciones

entonces esta información hay que

traerla de badghis ok vamos a trabajar

vamos a comenzar con nuestra tablita

esto lo primero que haremos trabajar la

tabla y para ello y antes que nada vamos

a crear aquí en la base de datos un

producto falso nuestra colección se

llamará productos

y aquí vamos a colocar este campo de

aquí va a ser el scoop

vamos a añadir título

de prueba

y en precio muy importante que sea

nombre 1999 cantidad habrán unos 580

lo que ya tenemos nuestro primer

producto y vamos a traerlo para acá en

esta tabla de aquí para ello aquí en

home o bueno mejor dicho en función lo

que haremos es crear una función que se

llame get out louds punto js y aquí como

siempre vamos a importar las

credenciales vamos a importar nuestro

servicio en este caso desde fair face

firestone y los servicios a funciones

que traeremos son the fire with fire

store estoy diciendo vamos a traer

collection y get dots ok entonces cómo

es que funcionan bueno el tercer paso

siempre es base datos es igual seguir

porque como que funcionamos a crear esta

función que se llame out project y lo

que haremos es esto de aquí vamos a

guardar

esta información en productos

vamos a traer estos productos desde la

colección de productos y los vamos a

devolver pero ojo que estos productos en

realidad debieran llamarse deberán

llamar se deben llevar se producirá de

marsé snapshot y les diré por qué lo que

fair game nos devuelve es una

información que no está completamente

legible entonces lo tenemos en los

siguiente crearemos una red que se llame

productos es igual a una raya en vacío

vamos a agarrar este snapshot y lo que

haremos es snapshot punto for each y

vamos a empujar

vamos a empujar dos punto

y cerramos entonces cómo funciona esta

función me trae mis productos de

firestone los guarden snapshot el

snapshot los revisamos y convertimos la

información en información legible la

metemos en este rey y devolvemos este

rey desde productos con ello vamos de

vuelta ya home y vamos a importar esta

función de get out works deseamos este

importe get out products y aquí en

aquí vamos a trabajar un estado donde

vamos a guardar estos productos no ser

productos ser productos de entrada son

arriba cio y entonces aquí dentro de

este activo ali de la tabla en lugar de

devolver esta información falsa lo que

haremos es lo siguiente

vamos a dejar esto aquí lo queremos de

los dientes vamos a decir si productos

existen entonces mate ame productos

recibe el producto y el index y lo que

quiero que devuelvas

lo siguiente quiero que regreses

un chip road

porque el index y lo vamos a ir

regresando la información esto va para

el número de esto va para el título

luego sigue el precio luego sigue la

cantidad luego sigue el escudo y luego

en acciones lo que haremos es regresar

dos botones uno de editar y otro de

eliminar serranos está a 15 ramos el

tiro y ya está esto completa borramos

esto

guardamos

y entonces lo que sigue es como

conectamos esta función como guardamos

los productos en este estado para ello

utilizaremos un efecto el cual va a

correr al inicio entonces hemos algo

como al inicio necesito que me

guarde esto de aquí en el estado y para

ello vamos a crear una función especial

aquí adentro que se llama la de de mago

como mansión

actualizar estado productos y lo que era

es lo siguiente vamos a llamar esta

función de get old broads y luego

recibimos los productos y los guardamos

en el estado

por lo tanto que al inicio cuando se

monta el componente llamamos esta

función de actualizar estado producto

por lo tanto si yo me vengo para acá y

y actualizó me manda un error y es que

me dice que no se puede mandar a llamar

con un vacío lo cual me hace dudar de

como la llame la llame bien productos lo

que hay que ser entonces es regresar

este de aquí y vamos a quita esta

referencia no me está tomando donde

queremos es con su colección red es

igual la conexión

productos y luego snapshot va a ser

igual

collection red

listo venimos para acá y aquí lo tienen

fíjense que ya me manda a llamar o me

trae toda la información de mi base de

datos que de momento es un solo producto

entonces esta parte de lectura ya está

funciona lo que aumentó esto no hace

nada y solo tenemos un producto

agregamos un botón para añadir más

productos nos regresamos aquí al editor

cerramos esta función no cerramos esta

de aquí y aquí en home lo que haremos

entonces es primero deshacernos de esta

información falsa y lo que sigue es

después de table vamos a crear un botón

que diga añadir producto ok y aquí al

hacer clic

con clic lo que haremos es ejecutar la

función que se llame añadir producto

aunque muy importante hablan porque está

funcionalmente no existe por lo tanto

vamos a crearla

aquí vamos a esta función que se llama

añadir producto home

y vamos a guardar esto así ok lo primero

es crear la función en fair face

entonces quien functions venimos para

acá y vamos a crear esta función se

llama añadir producto punto j s lo mismo

toda la vida importamos las credenciales

importamos los servicios desde fire with

fire store y aquí vamos a importar get

fire store vamos a importar corrección y

doc y docx ok y vamos a inicializar

nuestra variable de dar aviso entonces

idea que nos estamos es asíncrona

función añadir añadir producto va a

recibir va a recibir los siguientes

elementos que dice va a recibir lo

primero en la información del producto

info producto ok y de mientras eso nos

basta entonces que lo que haríamos con

esta función primero creamos una

referencia a la colección collection red

es igual a dar a beige y productos

porque recuerden que así se llama

nuestra colección luego lo siguiente

vamos a recibir o vamos a crear una

referencia alto mento que queremos crear

y notarán que bueno ustedes van a variar

lo pero mis documentos los estoy

nombrando con el mismo dato que el scoop

porque este es un dato único en teoría

por lo tanto que diré que la referencia

deberá ser igual al info producto punto

es q y con ello en mente lo que sigue es

crear un documento a guardar la

información en esta referencia con la

información del producto ok y ya está y

esto hay que exportar lo es por default

es igual a añadir producto

pero este añadir producto donde lo vamos

a mostrar lo vamos a mostrar en un modal

la idea es que aquí al hacer clic en el

botón éste se pone sale error al hacer

clic en el botón de añadir producto me

salga uno darle una ventana emergente y

desde ahí añada los datos y este modal

vamos a crearlo para ello aquí en souls

lo que haría es crear otra carpeta más

que se va a llamar componentes

y aquí lo que haremos es añadir este

modal modal añadir modal añadir sonar

bien y lo creamos que quiere mientras

vamos a devolver este componente de

model añadir el cual vamos a crear con

beats rap para ello vamos a importar

moda de esta forma varón varón varón

desde

captura y aquí ojo ojo que modal añadir

va a recibir dos primero y

es modal añadir y el segundo set es

modal añadir vamos a hacerlo esto así y

este día vamos a cambiarlo entonces por

modal pero ojo que como funcional modal

es así tenemos que indicarle cuándo se

va a mostrar y cuando nos preocupamos

una propia acción a show y aquí vamos a

pasar lo mismo del añadía

y vamos a tener una propiedad que se

llama un height que esto lo que va a

ocurrir cuando alguien haga clic afuera

del modelo lo que haremos es ponerlo en

falls para que no se vea aquí aquí vamos

a comenzar con un modelo heather dentro

que vamos a meter un taller aunque diga

añadir producto lo que sigue es un modal

bar y dentro de que vamos a meter un

fondo dentro del cual vamos a meter un

stack ok y aquí dentro del staff vamos a

ir pasando los inputs gran formulario de

modo que pongamos la información que

queremos añadir título cantidad precio

etcétera es muy importante que tengan un

haití para poder identificarlos y que

tengan un play holder vamos con el

título

y esto vamos a oeste éste no es este

grupo deberá decir control y pasarle

también un tipo este va a ser de tipo

texto

ok y lo que sigue es

no vamos a

cerrarlo

esto vamos a duplicarlo

título

precio

presión y cantidad

cantidad y por último el scoop

y para precio vamos a ponerle de tipo

number y lo mismo para cantidad

aunque ahora este forma hay que cerrarlo

y por último después del body sigue un

formato forma un modal punto führer aquí

vamos a pasar dos botones uno para

cancelar y otro para guardar el producto

y cerramos este modal y ahí lo tienen

añadir y cancelar ahora fíjense que este

modal recibe estas propiedades esta es

propia de las va recibir desde home

desde cuando queremos es lo siguiente

venimos para acá aquí vamos a vamos a

importar cómo se llama modelo añadir y

vamos a crear un estado que se llame is

modal añadir y set ismo de añadir y lo

que sigue es que este modal lo colocamos

aquí en cualquier parte y le pasamos

estos datos mod al año de iris model

añadir set mismo daniel perfecto y ahora

lo que sigue para que tu función es que

nuestro botón de añadir producto cuando

ocurre está box esta función esta

función lo que tiene que hacer es

cambiar el estado y para ello diremos

algo como set list model añadir intur

regresamos al navegador y actualizamos

siempre pasa esto hacemos clic en añadir

producto y ahí lo tienen título precio

cantidad y es como muy precioso si acaso

lo que podríamos hacer como extra

y es que estos fueron controles tengan

como class name margin varón 1

copiamos y vamos a pegarlo por acá para

que no estén tan pegados

ok ahí está muy bien añadió productos yo

les me salgo por acá se cierran sino de

cancelar se cierran ahora la idea es que

aquí yo ponga los datos del producto y

que al darle en añadir me lo añadan

naturalmente lo que que hacer es que

tenemos que crear una función para

gestionar este formulario entonces quien

submit 11.000 perdón diremos cuando

morán

pero bueno esto esto funcionaría

pensándolo bien esto sólo funcionaría si

mi botón fin sé que mis botones están

afuera del formulario entonces esto aquí

no nos va a servir lo que tenemos que

hacer es agregar una función a este

botón de añadir es aquí lo tenemos que

agregar la función entonces iremos en un

clic un clic lo queremos descubrir la

función de añadir producto modal en

google y éste añadir producto modal hay

que crearla por lo tanto vamos a crear

dicha función function añadir producto

modal

y lo que va a ser lo que tenemos que

hacer es obtener la info del formulario

ok entonces iremos constitu lo es igual

a

esto ex obtenemos el valor a través del

haití y hacemos lo mismo para precio

para cantidad y para él es como ok ya

tenemos la información del formulario lo

que sigue es enviar la información a

fire page y para ello vamos a importar

la función que creamos aquí de añadir

producto entonces decimos import o

import añadir productores de functions y

recuerden que añadir productor recibe un

solo objeto

entonces aquí tenemos que primero crear

la información diremos cons info

producto es igual a este objeto con esta

información y con esta información ya

podemos correr la función y que enviamos

la información y lo que toca es cerrar

el modal y entonces diremos set es modal

añadir en fox así de fáciles y sencillo

pero ojo e igual no pero vamos a

probarlo venimos para acá vamos a

abrirlo y diremos como prueba 2 1 2 3 1

2 3

y este es mi escudo lo clic en añadir y

me sale un error es que tal parece que

no se pueden las propiedades de nul tal

parece que esto de aquí no me está

jalando la información como creí que lo

haría

lo cual indica que hay un problema con

mis idish vamos aquí de vuelta y vamos a

echar mitad así que el problema es que

si utilizamos esto de aquí nuestros

aires los declaramos únicamente con

haití esto es un temita de muchos chicos

no no le den mayor importancia están

ocupando inputs normales no deben tener

este problema problema probamos una vez

más prueba 2 la bola añadir

me lo agrega me lo cierran y si me vengo

para que en la base de datos fíjense que

aquí lo tenemos prueba dos personas

arroja un problema y es que no se está

actualizando que tendría que suceder

aquí lo que tendría que suceder es que

nuestra función desde actualizar estado

productos tendría que ejecutarse una vez

más lo que haremos es pasársela nuestro

modal

en nuestro modal la recibimos

aliza ha estado productos y antes de

cerrar nuestro modal lo que haremos es

actualizar

dicha información ahí lo tienen probemos

una vez más agreguemos el prueba 3

le damos en añadir ya lo tienen lo

agrega se actualiza y aquí está

instantánea y funciona de maravilla ya

podemos crear ya podemos añadir lo que

sigue es editar y eliminar consumos pero

es más fácil eliminar para ello vengamos

aquí ya podemos cerrar este modal

cerramos esta función y en home fíjense

que aquí en nuestro mapeo con estamos

mapeando regresamos este botón de

eliminar lo que tenemos que hacer es

agregarle una función de que al un clic

vamos a correr eliminar

eliminar producto home y eliminar

producto home debiera recibir el

producto ahora esta función no existe

lo que tenemos que hacer es crear y para

ello quien functions vamos a crear

eliminar producto

js

y aquí vamos a trabajar con fire face

debemos importar nuestras credenciales

debemos importar

fire with fire store el jet fire store y

vamos a ver importar una función que se

llama delete por último inicializa moss

dará veis con esto de aquí

y vamos a crear esta función que se

llama eliminar producto home tiene

barcelona y va a recibir el producto y

lo que tenemos que hacer lo primero es

crear una referencia

a productos luego creamos una referencia

a este producto

qué bueno aquí esto está mal esto no

funciona si esto es colección

que le pasamos dar veis aquí pasamos dos

y le pasamos

conexión red le vamos a pasar no el

producto haití sino el producto punto

bien aquí se me está buscando el

spanglish

conexión red y ya que tenemos esta

referencia al documento a través del

escudo lo que sigue es eliminar este

documento y ahí lo tienen muy bien

entonces eliminar producto

nos va eliminar el producto vamos a

dejarla aquí y ojo que si yo lo

eliminará tendríamos que actualizar

entonces aquí en un clic lo queremos lo

siguiente vamos a pasarle una función

y aquí además de eliminar el producto

vamos a actualizar esta dos productos

muy bien vengamos de vuelta a pero esta

función no la ha importado vamos a

importarla

desde aquí

compasión y lo que no están definidos

respectivamente

actualizamos ok vamos a terminar en la

primera prueba

eliminado me vengo para acá y ya no está

vamos a mirar la segunda

y aquí está eliminado y aunque fíjense

que me lo actualizo tan rápido aquí me

lo actualizo tan rápido dónde están

esto me lo utiliza tan rápido que no

alcanzo a leer que lo había eliminado

entonces lo que podríamos hacer es lo

que podríamos hacer es esperar hay que

eliminar producto nos conteste porque

cuando yo ejecuto esta función me me

contestaron todos vamos a decir conste

eliminado es igual a weight y para que

esto funcione tendremos que agregarle

aquí en la 5 ya que me contesta que lo

eliminó lo regresamos

y entonces lo que haremos aquí es que

una vez que recibamos la confirmación

entonces vamos a eliminar o mejor dicho

actualizar este estado de productos y

ahora si no me los actualizar sino hasta

que reciba la confirmación de que se

eliminó

venimos para acá y vamos a agregar otro

producto este de aquí estoy acá de aquí

vamos a eliminarlo ya lo tienen perfecto

lectura creación y eliminación lo que

sigue es editar y evitar es un tanto

complejo y es complejo porque

necesitamos pactar únicamente el

producto que queremos editar

naturalmente y para ello lo que haremos

es lo siguiente vamos a cerrar todo esto

y aquí en componentes vamos a duplicar

este modal de añadir y eso lo que aquí

lo vamos a llamar modal editar

guardamos y modalidad va a recibir o va

a funcionar más o menos de la misma

manera va a recibir este si debiera

mostrarse o no va a recibir un estado

para que podamos cambiar si se muestra o

no iba a recibir esta parte de

actualizar estado productos pero

adicionalmente va a recibir el producto

a editar ok esto lo que va a hacer

recibiera este producto esté dañado

producto modal vamos a cambiarlo por

editar producto mod al igual recibimos

la misma información que tengamos en

nuestros inputs y esto vamos a

actualizarlo el añadir lo cambiamos por

editar lo mismo este de aquí

añadir producto lo cambiamos por editar

producto

todo esto lo dejamos esto se cambia por

editar

y esto lo cambiamos por editar y esto

por editar todo se cambia por editar ok

esto también se cambia por editar y

ahora si todo debiera estar funcionando

en orden cambiamos el nombre del

componente model editar regresamos el

modal editar y lo que sigue es que en

home vamos a importar dicho modelo

entonces hemos algo como import mode al

editar vamos a crear un estado para

revisar si se muestra uno con sismo de

al editarse es modern editar y aquí

abajito vamos a agregar lo

y va a recibir

esto de aquí estoy acá y estoy acá y

guardamos y ahora cuando hagamos clic en

editar

dónde está

aquí en editar cuando hagamos clic en

editar lo que tenemos que hacer es

mostrar el modal de editar

vamos a poner aquí set es modal editar

en su

guardamos pero esto para que no corran

infinito lo que tenemos que hacer es

pasarle un aro function y ahora sí con

el aro font son a la función de flecha

teníamos para que actualizamos y si hago

clic en editar se va a mostrar el modal

de editar producto pero la idea es que

si yo quiero editar prueba 3 y hago clic

aquí tendría que decir me la información

del producto y para ello para ello

tenemos que crear otro estado

en el cual vamos a seguir el producto

seleccionado

en buenos producto editar es un buen

nombre también producto editar set

producto editar y aquí al momento de

hacer clic en editar aquí

vamos a correr además de correr

espérame tantito esto es un lío

pero bueno a ver aquí al hacer clic en

el botón de editar además de mostrar el

modal vamos a decir qué producto quiero

editar por lo tanto hago algo como set

producto editar lo vamos a pasar el

producto que estamos recibiendo desde el

mapeo ok y para que no haya ningún

problema porque en un principio este

modal está en vacío lo que vemos aquí es

pasarle el producto editar como

productor y tal y éste lo vamos a

mostrar únicamente

si producto editar

existe un producto

si producto a editar existe entonces le

pasamos nuestro estado y ahora dentro de

modal editar como ya estamos recibiendo

este producto editar lo que haremos es

aquí ponerle unos valores

predeterminados porque podremos poner

valió es igual a producto editar punto

título hagamos la prueba tenemos para

que

actualizamos

eloy editar y estilo tienen prueba 3

pero fíjense que ahora como yo le puse

por valió el título el bario hace

siempre este y no puedo evitarlo y para

evitarlo tenemos que dar un poquito con

estados entonces lo que era aquí dentro

del modal de editar vamos a crear un

estado

aquí vamos a decir algo como con este

producto ser producto y en un principio

va a ser igual a este que estamos

recibiendo desde hong kong nos lo pasa

como propio recuerden que los próximos

se pueden editar si como funciones react

deben ser este funciones puras esto nos

evita lo que se edita son los estados

recibo el prop lo guardo en el estado y

aquí en value diremos en lugar de

producto editar diremos pero no

confirmamos es el producto estado set

producto

y aquí en bali vamos a ponerle producto

esta y lo que haremos es que cuando se

cambie el valor vamos a decir que

sed producto estado

el set producto estado el estado va a

ser igual lo que teníamos antes con la

diferencia de que

el título va a modificarse con lo que

estemos cambiando los change y para que

esto funciona tenemos que correr una

función que reciba el evento de cambio

tenemos el cambio se recibe la función y

cambiamos

todo todo queda igual excepto el título

ibra que es nadie

claro es que aquí estoy diciéndole adiós

stein cuando no tengo react

pero veamos una vez más estamos clic en

editar y ahora no recibe el título que

está pasando a ver a ver qué pasó lo que

pasa es que aquí en nuestro estado

cuando recibimos el producto editar lo

idóneo es de estructurar lo dentro de un

nuevo estado aunque guardamos esto de

aquí

probemos una vez más quiero editar

prueba 3 ya lo tienen y ahora puedo

cambiar los valores podría llamarlo pero

el a4 por ejemplo y aquí este debiera

ser lo mismo para los demás vamos a

actualizar los demás este baile 'gestión

change vamos a copiar los aquí me faltó

hasta acá y para conti para precio

haremos lo mismo sólo que en lugar del

título ponemos precio y aquí título lo

cambiamos por precio lo mismo para

cantidad con los cambios requeridos en

cantidad y cantidad

y lo mismo para el esquí

esto lo cambiamos por school y esto lo

cambiamos por

muy bien entonces que lo estamos

haciendo recordatorios que al cambiar

modificamos el estado preservamos los

mismos valores que teníamos antes con la

diferencia de el valor que estemos

modificando en cádiz y ahora para ver

que esto funciona vamos a hacer una

programas de prueba 4 podríamos

cambiarlo a esto de acá esto de aquí

perfecto funciona mira la idea es

ponible aquí en editar me lo edite y

aquí lo que hizo que me añadió otro

producto porque aquí tenemos esta

función de editar producto donde lo

tenemos que hacer es crear esta función

de editar producto o actualizar producto

y aquí ya tenemos algo que teníamos

copiado del otro modal el modal de

añadir

y si se fijan realmente no es muy

distinto a lo que tenemos que hacer para

evitar el producto primero tenemos que

recopilar la información lo tenemos que

crear un objeto y aquí lo que hace esta

función es que me añade un producto con

esta información se actualiza el estado

y me cierra el modal y de hecho esto de

aquí nos funciona mientras nosotros no

modificamos el scoop cuenta cómo editar

y les diré por qué por qué quien añadió

producto set dock funciona tanto para

crear como para editar nosotros tenemos

otra función en fire veis que se llama

update 2 pero ésta funciona cuando

nosotros editamos únicamente un solo

campo podríamos ocupar haití pero para

estos fines

funciona exactamente igual dicho por

venir acá puedo cambiar esto ha editado

11 11 dejamos el disco como tal y listo

que estaban funciona podemos editar

prueba 3 vamos a cambiarlo y fíjense con

esto yo hice clic acá y me sigue

mostrando el anterior y es que lo que

tenemos que hacer es que una vez que

hayamos terminado de editar debemos

devolver el estado anterior el estado de

producto a editar tenemos que devolverlo

a cero

entonces aquí por ejemplo es el producto

editar vamos a

vamos a estructurar lo

lo mismo para este y aquí voy a tener

modal en editar antes de salir nos

tenemos que

regresar en estado vacío

entonces tenemos que hacer es recibir

tenemos que recibir aquí en el mundo al

editar

además de producto y tardemos que

recibir el set producto editar venimos

aquí a moda al editar

recibimos el set producto editar y antes

de cerrar tenemos que regresarlo a él

para que no haya ningún problema tenemos

que revisarlo anula al cerrar el modal

por haber guardado o por haber editado

mejor dicho también tenemos que regresar

lo anuló cuando nos salgamos del modal

y también tenemos que regresar a la nube

cuando hagamos clic en cancelar

aquí lo tienen y ahora lo que va a pasar

es que vengo para acá si elijo este me

sale editado lo de celulares al error

porque

el válido ok

un mes al error porque aquí en value

intenta leer esto que están aun -define

lo cual no debiera suceder

en la línea 52

producto esta vamos a meterle aquí unos

unos signos de interrogación para que me

protejan contra espíritus santaneros y

dónde find bueno aquí de vuelta elijo

editado me dice editado si elijo prueba

3 no me dice nada

[Aplausos]

porque escogí mal el nombre bien sé que

aquí lo que regrese a null era lo del

interior y no le di tal clásico error de

battseck y ese producto editar lo

ponemos en él

esto también no es producto estado ese

producto evitar entonces recapitulando

lo volvemos a null cuando terminamos de

editar aquí lo volvemos a noel cuando

nos salimos con height y lo regresamos

en dulce cuando le damos en cancelar

entonces éste lo cambiamos por editar y

listo yo vengo para acá editado

prueba 3 editado ahí está prueba 3 y

editado por un momento me ha espantado

pero lo tienen fíjense

editado y prueba 3 y proba 3 vamos a

cambiarlo prueba 5 ahí lo tienen y se

van para acá no aparece editado tenemos

editado 2 editar vemos barca todo

funciona podemos eliminar este hoy vamos

a añadir esté acá con esto de acá y esto

acá añadir listo

voy taras las das y editar pruebas 5 muy

bien entonces ya podemos crear podemos

leer editar y eliminar lo siguiente es

implementar una búsqueda y esto al ser

muy pero que muy sencillo lo que hay que

hacer es venir cerramos esto cerramos

esto de aquí y de vuelta no home aquí no

tenemos un container no acá tenemos un

stack y dentro del estado tenemos un

formulario que dice buscar y resetear

aquí cuando hagamos clic en buscar lo

que tenemos que hacer es correr una

función que se llame se llame

filtrar buscar productos ok y esta

función vamos a crear la quien functions

o bueno pensándolo bien fíjense que este

botón está dentro de este formulario

entonces lugar de tener esta función

aquí en el botón lo que queremos es

crear una función para consumir en el

formulario

acudiremos búsqueda form and bear ok

esta función hay que crearla vamos a

crear aquí

sin formación búsqueda forma hunger que

va a recibir el evento y lo primero que

hará es prevenir que se refresque luego

lo que sigue es definir qué es lo que

está buscando la persona donde iremos

búsqueda es igual a lo que sea que tenga

la edad de búsqueda recuerden que

nosotros

así fue como llamamos al input y luego

lo que seguiría es el fair race buscar

esa información y regresarla aquí para

poder mostrarla entonces action

functions aquí si vamos a crear una

función que se llame no sé filtrar datos

qué sé yo que vamos a trabajar con la

las credenciales importamos get fire

store y vamos a trabajar con collection

y vamos a trabajar con cuero y vamos a

trabajar con web vamos a trabajar con

get box también ok y por último vamos a

inicializar la base de datos y vamos a

crear esta función las información que

se va a llamar

filtrar datos

que va a recibir un monstruo hing de

búsqueda lo que sea que estén buscando

vamos a tratar de encontrarlo en fire

race para ello primero mostrar una

referencia a la colección que vamos a

usar que es igual a la colección pero

ojo que colección recibe primero como

argumento la constante de base de datos

ok lo que sigue es crear una una

búsqueda ok un acuerdo y aquí cómo

funciona fire veis es que podemos hacer

una sola búsqueda a la vez una sola

cuerda y por campo o propiedad nos vamos

a crear el primero una cuerda y que sea

para título ok vamos a buscar en el

título podemos decir algo como cuerda

y aquí vamos a pasar a la colección

y esto aquí vamos a pasar un wire x

diremos la búsqueda va a ser en la

colección y queremos los documentos los

cuales subtítulo sea igual a el string

que estoy recibiendo desde búsqueda y

vamos a crear otra igual para buscar

dentro del escape where is q va a ser

exactamente lo mismo con la diferencia

que el único campo que vamos a buscar es

que podríamos hacer búsquedas compuestas

pero éstas son para y condicionales y no

para condicionales aquí nos importa o

que coincida el título o que coincida el

scoop y lo que tenemos que hacer es

buscar u obtener los datos que han sido

como const sería snapshot título es

igual a white jet box con el cuervo lo

mismo para el snapshot es q pero fíjense

que si hacemos esto si hacemos una

weight primero voy a buscar este este va

a estar esperando y hasta que regrese

este comienza a estar acá y lo esperamos

este es mucho tiempo pero día aquí

conviene muchísimo más correr estas dos

en paralelo para lo cual le diremos

promise out aquí vamos a pasarle una red

de

de promesas de búsquedas pasamos tanto

este no lo que estoy haciendo pasamos

no esperen vamos a aquí estoy todo

confundido avanza jetbox con webber y

título

y luego de docs con webber y es q y esto

lo cerramos

ahora promise lo que va a ser ya no lo

necesitamos lo que hace es que me va a

ir a buscar esto de acá deberá buscar

esto en paralelo y cuando terminé me los

va a regresar me va a realizar una red

con ambos resultados así como empezamos

una red de redes una red entonces yo

diré que constante al rey snapshots es

igual a esto la k

y después

vamos a lograr en pantalla este este a

raíz de snapshots ok

y vamos a probarlo bueno aquí filtrar

datos hay que exportarlo

filtrar datos

y entonces lo queremos aquí en home

es importar la función de filtrar datos

y aquí en el under ya que tenemos la

búsqueda vamos a pasarle dicha búsqueda

en filtrar datos con búsqueda como

string por lo tanto si me vengo para acá

abro mi consola vamos a limpiarla si lo

hay aquí en buscar no los esté vamos a

buscar a das

fíjense que aquí me regresa este rey con

estas con estos 2 snapshots tal como lo

estipula mos aquí que me regrese a un

array de snapshots bueno ya que tengamos

este raid snapshots lo que tenemos que

hacer es que éste esté a raíz de

snapshots hay que hay que éste convertir

la información de información legible

aquí lo que hay que hacer es primero

crear una red la cual vamos a meter los

documentos ya filtrados y

este elegibles

ok y ahora tenemos este rey de snapshots

que no son los documentos en sí lo

queremos entonces es la radio napster

vamos a hacer un freak donde por cada

snapshot vamos a hacer otro fritsch

donde por cada documento vamos a empujar

en este rey el documento ya legible pp

aquí puede ser que le prestamos cuando

la propiedad de irak aquí cerramos esto

cerramos esto y guardamos y entonces ya

después tocaría regresar estos dos

tratados

y antes de regresar nos vamos a

lograrlos en pantalla

yo me vengo para acá vamos a limpiar con

sol y vamos a buscar a las dadas y

fíjense que es un objeto que tiene una

raíz de objetos por el grado con su

objeto y nos regresó este de aquí que es

este que estamos buscando por lo tanto

nuestra función funciona como

esperábamos y ahora de white and home lo

que vamos a hacer es decirle que lo que

sea que nos regrese esta búsqueda lo

guarde en 12 nuevos focus es igual a

white y entonces lo que haremos es

el estado ponerlo como nuevos docus y

después vamos a ponerlo en prueba vamos

a cerrar esto de acá si yo busco estas

dadas

me muestra este solo y ahora para que

este botón de resetear funciona hay que

agregarle una función que resetear donde

estamos aquí en reset y vamos a hacerle

con un click lo queremos es correr una

función

que me va a actualizar estado productos

para que me muestre todos y el input me

lo va a regresar a cero entonces diremos

que

const input es igual a este luego iremos

en punto barrio es igual a nada

aquí actualizamos si yo busco prueba 5

de muestra está la casilla de resetear

me muestra todos de vuelta y yo buscarse

por es q le doy enter me muestra este de

acá y se boy resetear muestra todos de

waldemar olimpia perfecto con terminamos

toda la parte de cruz y ahora viene que

es algo que sea muy interesante para

ustedes para mí lo es el tema de los

blogs el tema de las funciones de

declaró las funciones lambda cómo es que

funciona ok para hacer andar echar echar

andar las funciones de cloud fonseca en

fire page ya cambiamos nuestro plan de

prepago yo tenemos en prepago ojo éste

incluye el uso gratuito no se espanten y

entonces venimos acá a foundations ok

aquí hacemos clic en comenzar y nos va a

decir que tenemos que seguir lo que nos

quede es instalar las herramientas de

fire veis de manera global y ahora tengo

instaladas pero en su caso lo que

tendrían que hacer es desde la terminal

bien sea esta de viesgo o la terminal de

su computadora tendrían que venir pegar

y ejecutar vale y una vez que termina de

instalarse esto ojo si están en mac

tendrán que meter la acción sólo antes y

una vez que terminen de hacer esto aquí

nos indica que tenemos que inicializar

nuestro proyecto como un proyecto de

fire louis para ello venimos aquí a la

terminal vamos a matarla aquí vamos a

tenerla y vamos a correr fire face in it

aquí nos va a preguntar primero

desarrollo inicien sesión y una tengo

sesión iniciada bueno es que han

iniciado sesión es que les van a

preguntar qué funciones o servicios

requieren en nuestro caso requerimos

functions presionamos espacio lo

presionamos centre que nos pregunta si

queremos son algún proyecto nuevo alguno

existente uno existente naturalmente y

vamos a elegir en mi caso en esta

captura del minute uvb que fue el que

cree hace unos instantes nos pregunta si

vamos a escribir escribir en javascript

script iremos con javascript y para esto

le damos -entre de que le damos enter

esperamos y nos va a crear acá una

carpeta en el directorio raíz quiero

poner una carpeta que se llama functions

ojo no confundir con la que hicimos

nosotros en fuente en souls si salvamos

sol fíjense que tienen el directo y

realizamos esta carpeta que tiene sus

propios módulos y tiene un index es aquí

en este index donde vamos a escribir

nuestras funciones o que ya que nos trae

una función por defecto no nos interesa

nosotros lo que nos interesa es crear

blogs para cuando se modifiquen las

cosas entonces y aquí voy a abrir dos

terminales fíjense tengo estar aquí

arriba en el cual voy a correr en pin

start y lo tengo estar aquí abajo en la

cual voy a estar enviando este las

funciones

cómo funciona para lograr nuestro

cometido lo que tenemos que hacer es

además de esta de staying por el fire

fire functions tenemos que importar

admin en fair day sesión admin después

lo que haremos es admin punto

inicial

esto lo dejamos así y entonces ya

podemos comenzar a trabajar pero bueno

antes de antes de meternos de lleno les

explico esto nos inicia las funciones de

fair race esto nos da acceso a los

servicios de fires como administrador

aquí nos inicializa la aplicación como

lo hemos hecho aquí en soul y lo que

sigue es declarar ciertas servicios que

está trabajando igual como hemos hecho

antes aquí tenemos algo como debe es

igual a danny en punto fire store y

entonces lo queremos decir cuando las

funciones luego creamos una función para

registrar cuando se ha creado un

producto para gestar una función te vas

a escribir export y luego el nombre de

la función llamaría de creación producto

y esto va a ser igual a esto que estamos

importando functions nuevo punto fire

esto porque nos trabajar con fire store

y vamos a [ __ ] document y en documento

vamos a pasarle el path del documento o

sección que queremos estar escuchando en

este caso que escuchar la colección de

productos y queremos escuchar cuando se

cambie algún producto cualquiera ok esta

parte de producto y 10 dinámico lo que

haremos entonces es

haciendo referencia a este caminito

cuando ocurre algún a un cliente dice

cuando se cree algún documento lo que

haremos es correr esta función este snap

y este snack y snap es la información

que la información de esto que se crea

entonces digamos que producto es igual

no producto es igual a snap punto de ira

tal como lo hemos hecho cuando a como lo

hemos hecho en otros lugares y ya con

este producto lo que haremos es utilizar

esta base de datos quizá la cual

tengamos acceso como administrador para

lo cual diremos tv punto collection

productos no puede conexión logs punto

at y vamos a crear un documento que diga

de tipo de acción fue crear fecha va a

ser igual a new day por ejemplo y luego

un producto vamos a pasarle la

información que recibimos aquí en este

trigger vale lo que va a suceder si

cuando algún documento se han creado

aquí se va ejecutar esto de acá y se va

a escribir en esta colección que dice

buenas que tengamos esta función de

creación producto lo que tengo que hacer

es terminar escribir y escribir airways

diploide presionamos enter y nuestro

contenido de este archivo de index lo va

a revisar y lo cambiará para que corra

de manera este servirles mientras esto

sucede vamos a venir aquí a la

aplicación y bueno vamos a primero

esperar a que se envié

vale ya que se envió ahora si venimos

para cada bar veis la ciencia que

tenemos la función creación producto

pero antes vamos a venir aquí a la

colega las colecciones vamos a crear

esta colección que hemos definido que se

llama blogs y que vamos a poner

cualquier cosa

para poder crear la colección de logs y

es que aquí están sino que en esta

colección es donde queremos que agregue

el logo de lo que acaba de ocurrir y

vamos a ponerlo a prueba recuerden que

tenemos nuestra aplicación corriendo en

este de aquí entonces vas a crear un

producto que se llame se va a llamar

este producto función con 11 depresiones

de cantidad y 11 de scu le damos en

añadir y lo que va a suceder ahora es

que esta función que está corriendo agua

no está corriendo en sí pero que está

ocurriendo que estábamos escuchando

cuando se crea algún documento y cuando

esto ocurra es que se va a ejecutar esto

hay que crear una entrada en el blog

vale y para ello vamos a unos cuantos

segundos yo me vengo acá a blogs fíjense

que aquí ya me lo creo acción creación

fecha tal fecha y el producto fue

producto función ahí lo tienen y si yo

vengo y agregó otro producto vamos a

decir el producto función 2

no hay con este es q le damos en añadir

démosle unos segunditos más y lo que va

a pasar es que esta función se va a

ejecutar una vez más y que no tiene

producto función 2 es casi instantánea

es una maravilla y vamos a crear

entonces más funciones tenemos la

función de creación producto

vamos a crear

exports eliminación producto la cual va

a ser igual a

document déjenme cierro esto de aquí y

bajo esto de acá

document y queremos pasar el pan que más

igual a productos producto haití y que

le ponemos un til it's ok en eliminación

y lo queremos es que el producto va a

ser igual a snap monteira igual que

antes ya lo que haremos es escribir en

la base de datos en lo que vamos a crear

un documento que diga eliminación la

fecha y vamos a pasar la info

y aquí que me falta mi fuente estoy aquí

y por último un exports que diga la

actualización

producto que va a ser igual a document

le pasamos el path que va a ser aquí

vamos a pasar en un update que cuando se

actualice vamos a correr esta función

acá donde diríamos que consta el

producto previo va a ser igual a change

before punto de ir a estar acá y lo

diremos con un producto cual izado es el

after fíjense que aquí no solamente

recibimos snap snap aquí estamos

recibiendo nuestros recientes nada

estamos recibiendo change ok y change

tiene dos propiedades before jiatf er

bueno con esto lo que haremos entonces

es davi punto en la colección de los

amos agregaron una entrada que diga

actualización con fecha producto previo

y producto actualizado y lo que sigue

como ustedes asumieron es lanzar estas

funciones en producción con fair face

diploide presionamos enter y esperamos

una vez más a que se envíen

vale una vez que se ha enviado vamos a

ponerlo a prueba si venimos acá a

foundations fíjense ya tenemos corriendo

actualización producto y eliminación

producto vamos a ver si cierto el

producto función vamos a cambiarlo a

hacer la función

y lo editamos y luego producto función 2

vamos a eliminarlo ahí lo tienen de más

de unos cuantos segundos y entonces si

me vengo aquí a blogs

cambio fíjense que aquí ya tengo el de

actualización me dicen que el producto

función se cambió a función tal como lo

hice y aquí debiera estar el de vamos a

actualizar aquí está

eliminación eliminé producto función 2

tal como lo hice entonces como pueden

ver esto es ajeno al código de la

aplicación esto ocurre de manera

servirles y esto también es un problema

y les diré por qué se habrá notado se

darán cuenta de que no dice quién hizo

la modificación no nos dice quién lo

creó no nos dice quien eliminó no nos

dice quién actualizó y es que sucede a

que estas funciones corren en un entorno

ajeno a nuestra aplicación por lo tanto

a estas funciones no tienen manera de

saber quién es la persona que ha

iniciado sesión

ok no no tiene manera de saberlo

entonces no pueden saber quién está

haciendo los cambios aunque técnicamente

sí se puede saber pero es todo un lío

todo un lío poder incluir aquí en este

código la persona que ha iniciado sesión

entonces lo que ustedes desean es que

aquí diga actualizado por hola roba las

citó o por juanito arroba hotmail lo que

tienen que hacer es en lugar de utilizar

estas funciones servirles estas cloud

foundations lo que tendrían que hacer es

crear ustedes una función que escriba

logs un tanto manual y es lo que vamos a

hacer para cumplir este vídeo entonces

quienes vayan functions vamos a una

función que se llame escribir lo punto

js y este escribir lo que va a escribir

precisamente un log aquí en esta parte

de fire store para lo cual vamos a

importar fire risa

no vamos a importar fire rise up desde

fire face diagonal credenciales vamos a

importar get firestone collection

2 y 6 2

desde fire with fire store y por último

vamos a inicializar debe como que fire

store punto fire veis aquí lo queremos

es crear una función

que vamos a exportar de manera default

escribirlo y aquí lo que va a suceder lo

siguiente va a recibir qué tipo de

acción fue y el producto para lo cual

vamos a hacer lo siguiente primero crear

una referencia a la colección para

cualquier amos colección ref es igual la

colección le pasamos de ve aquí como

primer argumento

luego vamos a crear una referencia al

documento do courel será igual a dos

alcohol vamos a pasar la referencia a la

colección y el nombre del documento que

queremos entonces aquí como nombre vamos

a poner new that your eyes string ok

vamos a nombrar nuestros documentos por

fecha y entonces único que faltaría es

ese

a crear la información que queremos

escribir para lo cual diremos qué acción

es igual a la acción que estamos

recibiendo fecha es igual a la fecha y

producto es igual al producto pero

también vamos a recibir el autor autor

será igual a autor y luego lo que

haremos es con esta referencia que

creamos vamos a guardar la información

que estamos definiendo aquí y aquí

también faltaría recibir el autor desde

los cambios y ahí lo tienen con esto en

mente o bueno con esto ya corriendo lo

que sigue es utilizar esta función de

escribir logs para cuando hagamos

cambios por ejemplo vengamos aquí a

añadir producto añadir producto va a

crear un blog para lo cual vamos a decir

aquí vamos a importar

como se dice escribirlo

ok entonces una vez que hayamos escrito

vamos a escribirlo con recuerden que

escribirlo recibe la acción producto y

autor reacción sería creación el

producto sería info producto que estamos

recibiendo aquí y el autor nos haría

falta recibirlo aquí en añadir producto

ok y entonces esta función si no me

equivoco la ocupamos aquí en el modal de

añadir

aquí añadir producto modal

añadir producto hay que pasarle el autor

ok

el usuario y para recibir el usuario que

minimizó esto

para recibir el usuario en mode al

añadir y que éste se lo pueda enviar

añadir producto para escribirlo para que

esto suceda hay que pasárselo desde home

aquí en home estamos recibiendo usuario

pues hay que pasarlo a los modales

diremos usuario es igual a usuario tanto

para agregar como para añadir

usuario ahí lo tienen y ahora aquí nos

obtenemos la parte de eliminar producto

y eliminar producto home le pasamos un

producto esta función además de recibir

el producto de debiera recibir el

usuario lo que haremos entonces es

importar escribirlo

y aquí vamos a escribir poner escribirlo

con eliminación producto y usuario y

entonces nos haría falta aquí en home

pasarle el usuario ok crear y eliminar

ya está y lo que sigue es la parte de

ética aquí en modal editar vamos a

recibir el usuario en añadir estamos

recibiendo no

usuario y usuario que bueno desde quien

evitar ya estamos diciendo el usuario

desde ese hombro pueden ver aquí y

entonces lo que haría falta es que aquí

al momento de editar producto y aquí en

añadir producto vamos a pasarle el

usuario y lo que tendríamos que hacer

aquí es crear otra función esta función

de añadir producto vamos a copiar la

duplicarla y vamos a nombrarla editar

editar productos hay tal productora

exactamente lo mismo que está haciendo

ahorita con la diferencia equivocar de

creación de medición que se vale y

entonces quien modal editar en lugar de

utilizar añadir producto utilizaremos

editar productos

y lo que hay que hacer es importar lo

que importamos editar producto desde

aquí está ya la podemos eliminar esto no

sé qué hace aquí

y ahora lo que sucede es que crear y

editar y eliminar ya nos van a estar

creando blogs con el usuario que estamos

recibiendo en ambos modales que estamos

pasándole desde home pero ojo fíjense

que aquí le estamos pasando el usuario

completo ya nosotros lo que nos interesa

es el email entonces aquí para eliminar

para eliminar tendríamos que pasarle

punto email

y crear productos

para crear producto tendríamos que

pasarle también el usuario punto email y

en

editar

producto también tendríamos que pasar el

gel y me vale crear editar y eliminar y

vamos a ponerlo a prueba si yo ahora

mismo tengo 345 debiera tener 7 ahorita

que cree uno vamos a le crear vamos a

ponerle el autor

le damos a añadir ya que manda un error

y es que tal parece que en añadir

producto tengo un problema con la

referencia tal parece que esta

referencia nombre está tomando la

constante entonces venimos aquí a añadir

producto

y es que sucede que nos faltó pasarle

estas las credenciales de quién editar

el producto lo mismo cuando ya está

funcionado anteriormente otra cosa que

vamos a esto es un error un tanto común

es mover esto aquí al interior de la

función vamos a pasarlo al interior de

la función y si probamos nuevamente le

doy en añadir me manda error una vez más

y es que dice que el primer argumento de

colección debiera ser una referencia

fire store

aquí en añadir producto como pueden ver

en el primer argumento es efectivamente

débil que es una referencia en get high

el estor lo queremos es la vieja y

confiable de detener nuestro servidor

y vamos a

tenemos alguien añadir producto

abc123 123

añadir y ahí lo tienen producto añadido

me creo el producto abc y ahora como

tengo corriendo esta función y además

añadir la parte de crear los de forma

manual aquí deberá tener 7 3 4 o 5 fines

aquí está el manual que yo hice lo

pueden ver por el nombre del documento

hola robarlas vitoria tiene el autor y

está en el producto y acá me acaba de

hacer el otro título aves este es el de

cloud functions título abc y este es el

manual título abc con autor vale y si yo

vengo para acá y eliminó vamos a

eliminar a veces lo que va a suceder es

que me va a crear este de acá que dice

eliminación el autor fue las vitolas

fito eliminó el producto abc y también

lo que va a pasar es que el cloud

functions me va a crear la entrada de

eliminación aquí esta eliminación ha de

irse y si yo vengo para acá y editó

función lo cambió a funciona a veces no

sale editar

aquí este no se actualizó aquí esta

función a veces si yo hago eso me vengo

para acá tengo una tercera entrada que

dice

edición y la edición la hizo la escrito

y me doy crédito el producto función abc

y aquí también alguna parte debe estar

el cloud function aquí está creo que es

este función lo cambió a función abc

entonces es así como pueden crear un

sistema del 2 obviamente tienen que

sopesar si requieren dejar sentado quién

fue quien realizó la acción de ser así

este cloud function se quedaría un

poquito corto porque pasarle la

información de quien tiene sesión

iniciada es un tanto complejo que es es

difícil vale entonces lo que pueden

hacer es algo manual como lo que yo hice

y esto también funciona y también pues

cumple su función vale vale y es así

como terminamos este vídeo desde por

favor en el me gusta y suscriban en caso

de que les haya gustado y en los

comentarios pueden decirme qué tipo de

tutorial les gustaría ver por acá en

pantalla van a ver dos vídeos uno

recomendado por youtube otro que es mi

último vídeo si les ha gustado el

contenido continúan revisando mi canal

para que sigan mejorando de sus

habilidades chicos y bueno nos vemos en

el próximo vídeo
