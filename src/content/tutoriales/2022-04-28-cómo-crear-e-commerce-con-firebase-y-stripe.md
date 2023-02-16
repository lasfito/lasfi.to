---
template: tutoriales
url: crea-ecommerce-firebase-stripe
enlaceyt: https://youtube.com/embed/ScJ7FdHufm8
date: 2022-04-28T18:38:38.567Z
title: Cómo Crear E-Commerce con Firebase y Stripe
metaDescription: 'Aprende cómo crear una tienda e-Commerce con Firebase y Stripe
  en cuestión de minutos #react #firebase #stripe #ecommerce'
tag:
  - Firebase
  - React
autor: Adrián Salgado
introThumbnail: 'Aprende cómo crear una tienda e-Commerce con Firebase y Stripe
  en cuestión de minutos '
keyword: e-commerce firebase stripe
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/32-ecommerce-stripe.png?alt=media&token=84d120a4-5435-4c3b-84de-b10551d1774d
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy les traigo un tutorial que les va

a encantar mucha gente no ha pedido y se

trata de cómo hacer un y comencé con

pair beige en este caso además de fair

beige estaremos utilizando strike y de

hecho ya la tienda la tengo aquí montada

puede encontrar la url en la descripción

y es una tienda bastante sencilla en

cuanto a estilos pero tiene todas las

funciones fundamentales de un hombre se

le hecho a uns a ser una breve

demostración por ejemplo aquí tengo ya

mis productos vamos a visitar el tomate

y encuentro todos sobre el tomate vamos

a añadir los carritos y fíjense que aquí

se prende una notificación vamos a

comprar también unos buenos pepinos ya

que están en oferta los añadimos al

carrito

y ahora aquí vamos a hacer clic en

comprar y lo que va a pasar es que la

tienda va a notificar nuestra jpp y

strike nos va a enviar una url para

hacer check out fíjense que aquí esta

ventana de checa bastante comunes

seguramente la habrán visto alguna que

otra tienda esta ventana en realidad

proviene de check out punto strike

puntocom lo que ya que vamos a poner

nuestros datos utilizar mi tarjeta

espero que no me roben dinero es una

prueba de esto son tarjetas de prueba

por si intentan robar y vamos a poner

aquí mis datos nombre la tarjeta el

poder lo

hicimos las fito

y en dirección vamos a poner avenida 1

con calle 2 y barrio 58 en el 0 1 2 3 4

ciudad de matamoros

estado de campeche aquí podríamos

guardar nuestros datos y todo esto está

provisto por strike esta no es

información que nosotros manejamos lo

cual es bastante seguro le da una muy

buena apariencia a nuestra tienda

llegamos a hacer clic en pagar aquí se

procesa el pago

en breve recibimos la confirmación

algunos segundos aquí ya procedió el

pago y aquí lo que sucede es que somos

enviados este a la sección de perfil y

aquí aparecen todas las compras que yo

he hecho en mi cuenta por ejemplo ahora

mismo estoy en tres robots es hecho

compras por 350 ml y ahorita la más

reciente fue por 30 en donde compré un

tomate y unos pepinos frescos ok

entonces es esta la tienda y funciona

con fire beige y extra piso los puede

mostrar aquí en en el proyecto en la

base de datos tenemos aquí los usuarios

que han comprado en esta tienda hasta

ahora sólo yo los productos por ejemplo

todo está aquí en plus y realizamos a

este usuario estos son los datos aquí

podemos ver todos los pagos que ha hecho

por ejemplo esta persona ha comprado

tres cosas los tres pagos que les mostré

acá como pueden ver

y todo esto todo va bien en cuanto a

pagos tarjetas y validación todo ello se

encarga extra y por lo tanto es muy muy

cómodo créanme que es muy sencillo hacer

un único mes de esta manera van a ver

que sólo toma solo toma de hecho sólo

toma de chott 23 funciones de 23

funciones y ya con el socio y comer

funciona 100% pero bueno basta de bla

bla bla vamos a comenzar si les interesa

acompañen

[Música]

vale y antes de comenzar chicos

recordarles que todo puede ser en este

tutorial absolutamente todo el código lo

encuentran en la descripción del vídeo

junto con mis demás tutoriales y hora

antes de comenzar tenemos que entender

qué es lo que vamos a hacer y cómo es

que funciona un sitio web ecommerce con

fireplace y que hay tres elementos el

sitio web airways strike lo que va a

ocurrir es que toda la magia y todo lo

pesado lo va a realizar airways en

conjunto con streep ellos van a estar en

constante comunicación y nosotros vamos

a recibir esta comunicación a través de

su gestor toda la comunicación se

abordará aquí en strike nosotros vamos a

crear productos y esos productos que

creamos aquí a través de un web web book

fair race los va a replicar en nuestra

base de datos de modo que la información

esté siempre sincronizada si alguien que

navega por nuestro sitio web quiere

comprar un producto

nosotros creamos un documento en fair

store donde dejemos los datos a la

persona que quiera comprar x productos a

equis precio en tal fecha y bla bla bla

creamos el documento y automáticamente

como ellos dos se están comunicando a

través de cloud functions y puntos de

entrada stripes entera stripes nos da

una ventana para hacer chacao y nosotros

enviamos al usuario aquí acaba check out

en un ambiente proveído o bueno provisto

por strike

una vez que la persona haya terminado de

pagar stream

modifica fire store para dejar sentado

que el pago fue exitoso entonces es así

como funciona es una especie de

triángulo amoroso la verdad es que es

muy sencillo muy sencillo de hacer

creando el van a ver y todo esto gracias

a que fire veis que la magia viene de

fires porque fire race tiene una

extensión en la cual ya nos da acceso a

todas estas funciones con strike ok pero

cuando basta de bla bla bla vamos a

comenzar lo primero que queremos es

dirigirnos a nuestra consola de fire

veis vamos a crear un proyecto yo lo

llamaría como lo llamaremos llamaremos i

comerç drive

parís

ahí está continuar no nos interesa

creamos proyecto le damos un segundo

seno que aprovisiona todo lo que se

requiere y ahora no lo expliqué bueno lo

dije aquí sentado obviamente con fire

veis vamos a ocupar estos tres servicios

fire store cloud foundations y off

aunque entonces ahora que se haya creado

el proyecto vamos a inicializar o

aprovisionar estos servicios el primero

de ellos fire store y vamos a venir para

acá crear base de datos lo ponemos modo

prueba siguiente elijamos la ubicación

yo voy a escoger los ángeles y west west

dos dous lo habilitados y le damos unos

segundos es el primer paso fire store lo

segundo la autenticación con lo cual

aquí unos segunditos que termine

ok habiendo creado la base de datos

falsos los sintes la autenticación

y vamos a comenzar para que sea más

rápido este tutorial es utilizar el buen

correo y contraseña

guardamos y por último cloud foundations

que está por

acá unións ahora muy importante para

utilizar functions cloud foundations en

su proyecto de fire veis tienen que

actualizar a la modalidad place y la

diferencia entre la modalidad place que

es de prepago con la modalidad inicial

es que cuando ustedes lleguen a cierto

nivel de uso fair ways les va a cobrar

pueden ver todos los detalles aquí en

este enlace para que sepan cuáles son

los límites gratuitos y cuáles ya

empiezan a costar por ejemplo aquí les

en hasta 10.000 autenticaciones 20 mil

eliminaciones por día 50 mil de lectura

etcétera entonces tenemos que

actualizar a place aquí le va a dar

comprar obviamente no les van a cobrar

nada mientras estén en estas cuotas

gratuitas

habiendo hecho esto aquí podemos darle

clic en comenzar que nos dan las

instrucciones de cómo hacerlo no vamos a

hacer nada de esto sino que lo que sigue

lo que sigue es realizar esta esta

simbiosis entre fire beige y strike o

que como lo hacemos muy sencillo bar

beige tiene o que se llaman extensiones

que están aquí abajo

vengan a carmen o de extensiones hay

varias extinción que son con una especie

de plugins o que son como código ya la

borrado para ciertos decimales solamente

son escenarios comunes como por ejemplo

enviar correos de buscadores y pagos con

straight ok ahora que vamos darle clic

en instalar y obviamente obviamente

antes de poder instalar stripes

necesitamos tener una cuenta de strike

yo ya tengo la mía aquí está mi cuenta y

muy importante para crearla sólo se van

a dar word punto strike puntocom dicho

si yo copio esto y lo hará una ventana

de incógnito deberá salir me aquí algo

para crear una vale entonces aquí pueden

crear una cuenta es muy sencillo correo

o contraseña teléfono y ya está ok pero

ojo ojo ojo ojo cuando ustedes creen su

cuenta es muy importante que llenen

estos datos que le pongan algún nombre

de cuenta le pongan un nombre público

porque estos datos son necesarios para

poder utilizar la extensión pero viendo

creado su cuenta y habiendo llenado

estos datos le dejen en nombres públicos

no menos de la cuenta ahora sí podemos

venir para acá la extensión aquí nos

dice que nos viene nos dice que nos va a

cobrar por ciertas tarifas no se

preocupen es mínimo lo que cobran aquí

nos dice qué es lo que va a utilizar

esta extensión de nuestro proyecto por

ejemplo utilizar cloud functions

utilizar secret manager

este ciclo en ayer por ejemplo se me

olvidó habilitarlo vamos a habilitarlo

le damos unos segundos

y habiendo hecho esto hacemos clic en

siguiente nos dice que va a utilizar

todo esto no se preocupen aquí les da

explicación de por qué utiliza esto es

una extensión segura creada por la misma

compañía de script donde deberán confiar

y ojo que aquí éste nos va a decir que

va a estar utilizando en fire store por

ejemplo cloud fans es donde queremos

tenerlas desplegadas yo las voy a

desplegar en

y ves west 2 hasta aquí los ángeles y

nos dice que va a crear estas

colecciones en fire store o juega crea

una colección sin el prox una colección

se llama costo merz y una colección se

llama configuration lo que aquí nos da

más opciones de cómo queremos llevar a

cabo esta sincronización que tanto

queremos sincronizar por ejemplo nos

pregunta si queremos sincronizar los

usuarios de entre strip y cloud fair tom

selleck si y si queremos que elimine los

la información de strike cuando se

elimina la que vamos a decirle que no

llegó aquí nos pide que le demos nuestra

app y que nuestra llave app y de dónde

sacan esta ti muy fácil ya que tengan su

cuenta y ojo mucho ojo con esto poner

los datos acá en desarrolladores hay una

sección se llama claves de apple y aquí

viene entonces pueden tomar la llave

secreta en la pichi que viene como por

defecto en la estándar o si son muy

meticulosos y si son gente que no te

quiere riesgo pueden crear una clave

restringida aquí ustedes definen de fin

definen los en

los a

los recursos y permisos y accesos que

quieran proveer a esta llave y una vez

que hayan terminado de personalizar todo

la crean y mantener algo más restringido

yo lo que va a hacer es tomar la que

está acá vamos a copiar la idea vuelta

acá vamos a pegarla y le damos en crear

secreto

le damos unos segundos y le damos en

instalar la extensión esto lo vamos a

hacer más adelante mientras damos clic

en instalar la extensión pues yo lo que

va a ocurrir es que estoy a tomar entre

3 y 5 minutos tiempo que vamos a ocupar

ocupar a utilizar para comenzar nuestro

proyecto con riad para lo cual esto

vamos a minimizarlo y aquí vamos a abrir

una terminal

y vamos a crear un proyecto en para lo

cual yo me voy a dirigir a mi escritorio

y vamos a llamarlo se llama en create

leer es si no me equivoco siempre me

confundo si aquí está con falla mayo lo

llamaré ecommerce

igual que el proyecto de fair beige voy

a trabajar comunidad react accedemos

aquí

instalamos las dependencias y vamos a

abrirlo con nuestro editor ok ahora como

se ve nuestro proyecto de vida por

defecto se ve más o menos más o menos

así así es como tendría que verse

obviamente esto esto es puro a boyle y

pura puro código que no vamos a utilizar

entonces lo que haremos es eliminar lo

que no nos sirva y ahí está tenemos

simplemente cuatro archivos ahora para

este tutorial yo voy a estar utilizando

tale win aunque éste se puede utilizar

cualquier sistema de estilos que deseen

quiero utilizar para que sean más breve

este tutorial que no tiene más tiempo

entonces lo que haré es instalarlo

vengamos de vuelta caminata sigue

instalando entonces lo que haremos es

revisar la arquitectura del sitio web

para la arquitectura vamos a trabajar

con dos cosas muy importantes la primera

contexto contexto de riad y la segunda

rutas ok entonces lo queremos primero es

instalar react roberto aquí en su

consola déjenme les regalo un poquito

más de tamaño de letra

hoy aquí en la consola vamos a instalar

en riad reuters dom

en la versión at six ok esto lo

instalamos y ya está vamos a darle un

poquito de formato aquí a la estructura

voy a crear una carpeta que se llame a

virus

y naciones y ahora lo que sigue es que

aquí en maine que me vendría siendo así

como index a quien me y no queremos es

importar browser reuters desde el break

rotterdam y lo queremos es reemplazar

estas de acá por

browser road browser baures entonces va

a envolver a up y quien en lugar de

volver hello world lo que haremos es

devolver nuestras rutas ok cómo funciona

si no conocen robaron muy sencillo una

etiqueta rounds dentro de la cual

definimos cada ruta a través de un pad

el pad de inicio el pad de producto y

ojo que a quien producto utilizamos un

páramo fíjense que está que comienza con

un doble punto hay lee ojo con esto más

gran tranquilizado perfil carrito checa

blogging y cuántas páginas ustedes

deseen también tenemos un pack para no

found y obviamente estos pads y éstas en

sus elementos hay que crearlos yo los he

creado aquí en views tenemos esta

carpeta de views junto con componentes

con nuestro demás y aquí tengo cada una

de las vistas por ejemplo un home de

buenos amigos la world no hay más y

tengo un archivo index desde el cual

importó todos los componentes y después

los exportó para no tener mucho lío como

pueden ver aquí en en lo que voy a hacer

entonces

estos elementos

como si fueran módulos normales decimos

producto perfil

carrito check out login

not found

y todo esto desde

el virus

guardamos y si yo modifico componemos

hello world

aquí está ok ahora si yo visito por

ejemplo perfil aquí está perfil y si yo

visito el login aquí está lo que aunque

entonces así es como lo manejaremos en

todas las rutas y en en todos los

contextos del primer contexto es el de

browser raúl el segundo contexto que

vamos a crear es precisamente un

contexto que tendremos aquí en la

carpeta de context que llamaremos user

frontex

y aquí vamos a importar el break y

también nos ha importado news state news

contexto y el

context desde riad ok entonces lo

primero queremos es crear un clúster

context con este esta función que

estamos jalando y luego vamos a vamos a

crear al proveedor entonces vemos que

ellos el context provider

es una función que recibe como proxy el

dren y aquí dentro del proveedor vamos a

crear un estado

que se llame y usher y set y usher

vamos a llamarlo si yo ser y ser que

inicializa mohsén no y luego vamos

también a

devolver un looser contexto punto

provider este que creamos acá después lo

devolvemos o bueno devolvemos el

provider the end user context y ahora

quien valió vamos a pasar al giuseppe y

al cedió ser ojo que lo estamos pasando

en objeto aunque muy importante pasarlo

a un objeto ahora estas ambas hay que

exportar las

sports y por último vamos a crear un

pequeño hook un ganchito para poder

acceder a esto muchísimo más fácil

entonces haremos algo como

yus y usher con texto

el cual

y va a ser una función

pero vamos a consumir el contexto iremos

con contexto es igual a houston tex y

accedemos a este valor de acá y ahora

esto acá tendría que guardar algo

si no lo guardan es porque hay un error

entonces que revisamos si no hay

contexto arrojamos un error que diga oye

esto tiene que ser utilizado al interior

de un probable caso contrario sí sí hay

contexto lo que haremos es devolverlo

ok entonces ya consigamos nuestro primer

contexto entonces este contexto lo que

haremos es de vuelta aquí en main vamos

a envolver la aplicación para que pueda

acceder al contexto entonces yo creo que

aquí lo hacemos así

primero hay que importarlo

ok y ahora que ya le dimos un poquito de

estructura al proyecto con las carpetas

de componentes con texto fire

disfunciones vistas y ahora que tenemos

el sistema de rutas en lugar lo que

sigue es continuar con la extensión de

strike ok aquí nos dice que ya se

instaló vamos a ver aquí en comenzar

aquí en todas las instrucciones que

debemos seguir para poder utilizar esta

atención y no se preocupen sé que parece

que es mucho sé que parece que es

agobiante pero es muy sencillo lo

primero que hay que hacer es modificar

nuestras reglas de seguridad no es

propiamente requisito pero si es más que

necesario es de tener seguridad en

nuestra base de datos entonces vayamos a

la base de datos y aquí en reglas lo que

haremos es tomar estas que vienen por

defecto

borrarlas y pegar las que nos provisión

a la extensión y realmente no es nada

fuera del otro mundo fíjense que aquí

este lo que va a hacer es el siguiente

lo primero es que para poder leer datos

de algún usuario solamente ese mismo

usuario va a poder hacerlo fíjense aquí

que el wide y del ricoh es tienen que

ser igual al wide y de los datos del

usuario lo mismo para los datos del

checa o suscripciones los pagos los

productos cualquiera los pueden el

mensaje si ruiz entre los precios

también cualquiera nos puede leer lo

mismo los faxes que entonces esto es

algo como que algo sencillo para dar un

poquito de seguridad su aplicación aún

así les recomiendo que las lean a fondo

y personalice en los casos que requieran

pero bueno habiendo hecho esta parte de

las reglas lo que sigue es el web

recuerden que

esta comunicación mágica se da a través

del cloud foundations y un hueco web y

está hay que crearlo entonces ahora

mismo nuestra extensión no tiene web y

lo que haremos es tomar esta url

aquí la extensión nos da un enlace si no

les funciona el enlace es muy sencillo

aquí en desarrolladores hay una sección

se llama web books y aquí vamos a crear

un punto de conexión pegamos la url

vamos a ver una descripción que sea

tienda fire veis y aquí la extensión nos

dice que eventos necesitamos porque nos

dice que bueno hay que entender qué es

lo que va a suceder lo que va a suceder

es que cuando estos eventos ocurran

strike va a estar comunicando como con

fire race y actualizando la información

en la base de datos entonces por eso es

muy importante seleccionar los eventos y

quienes dicen por ejemplo para productos

nos pide 3 entonces hay que buscar aquí

producto

aquí está producto y seleccionamos craig

del líder

mientras serían todos y así con cada uno

de estos permisos price lo mismo con

price

seleccionamos todos ok de hecho lo que

pueden hacer que no hay nada malo con

hacerlo así pueden venir acá y

seleccionar todos estos de acá pueden

ponerle todos y se ahorran tener que

estar seleccionando uno por uno que

igual éste si tienen tiempo agreguen uno

por uno que no son muchos pero yo voy

con prisa entonces yo elijo todos y una

vez habiendo hecho esto lo que hacemos

es aquí abajo agregar eventos y entonces

vamos a

hasta el final darle click en

agregar punto de conexión ok ya con eso

configuramos nuestro weblog y con esto

ya vamos sobrados

bueno no lo olvidaba aquí cuando creamos

un web food strike nos da un secreto

entonces este vamos a revelarlo

lo copiamos muy importante copiamos este

secreto del web

y de vuelta aquí en la extensión lo que

haremos es

configurarlo una vez más aquí en

configuración volver a configurar y

recuerden que éste nos había hecho falta

entonces

pegamos este secret del web de street le

damos clic aquí en crear

una vez que hayamos hecho esto guardamos

los cambios y la extensión se va a

volver a configurar

completamente entonces démosle entre 3 y

5 minutos y mientras se configura la

extensión lo que haremos es conectar el

proyecto de ryan el código con fire

louis completo the fire bis entonces

aquí en el engrane configuración del

proyecto vamos a crear una aplicación

vamos a llamar la web

la registramos

y aquí vamos a copiar estas credenciales

de vuelta aquí en aplicación en fire

veis voy a crear un archivo que se llame

credenciales

y aquí vamos a primar lo que nos

provisión a baires fíjense que lo que

hacemos es muy sencillo en caso de que

no estén familiarizados

importamos esto para inicializar pasamos

nuestros datos e inicial izamos con

nuestros datos adicionalmente como estar

trabajando con fire store y con

autenticación lo que yo haré es importar

get fire store desde fire face

ayrton y lo mismo que desde fire beige y

ahora aquí después de haber inicial

izado nuestra aplicación inicial izamos

estos dos diciendo algo como base de

datos no están es así esto será así

antes base de datos es igual a get by

nestor y le pasamos como argumento

lo siguiente

autenticación es igual a 0 y lo

empezamos como argumento la

y ahora todos estos hay que devolverlos

hay que exportarlos lo que haré es

exportar de forma default la aplicación

y esto nos van a ser como una

exportación

ok y para que todo esto funcione

obviamente hay que instalar como

dependencia

by luis en pie en esto fire veis y listo

podemos cerrar

esto ya podemos regresar a la consola y

vamos a revisar si estoy en ser

terminado

vamos a revisar las extensiones se sigue

instalando y vamos a esperar a que esto

se instale ok y ahora ya que se instaló

la extensión ya que tenemos nuestra

cuenta de strike ya que configuramos

nuestro website ya que enlacemos la

aplicación con fire veis y ya que

tenemos nuestro sistema de rutas con

grover dom pero lo que sigue es crear

nuestros productos desde strike ok

entonces aquí hay una sección que se

productos y aquí vamos a agregar los

y aquí en nombre vamos a vamos a vender

pinos vinos frescos de ponerle

deliciosos pepinos con limón y sal y en

imagen vamos a poner esta imagen de acá

aquí es muy importante pueden este extra

les da mucha información le pueden

configurar cómo quieren que se vean en

resumen bancario aquí la unidad cómo es

que lo venden yo lo voy a vender por por

caja una caja y ojo aquí en metadatos

vamos a agregar las características de

este producto de modo que sirva para que

lo clasifique en lo personal y dicen y

todas las variantes pueden agregar por

ejemplo no los detalla ch de chico no o

color verde oa lo mejor categoría aquí

ponemos frutas y todos estos datos test

más adelante los van a poder utilizar

luego aquí en precios aquí podemos

definir distintos tipos de precios vemos

en el tarifa estándar pueden vender por

paquete a lo mejor por cada 10 unidades

estamos al precio a lo mejor por este

ciertos números esto es como cuando

compran mb son cuestiones así o por

volumen incluso yo voy a vender

únicamente en tarifa estándar y aquí

fíjense que este precio les da para que

sea recurrente esto para suscripciones

constructive airways podemos vender

suscripciones a lo mejor suscripciones

tiempos con lee evans por ejemplo o las

suscripciones tipo a you de mí ustedes

sabrán cómo utilizar iguales y que éstos

de uso único pero tan recurrente tienen

la periodicidad ok y si se mide o no el

uso de esto acá hay muchísimos más datos

lleva a ponerle como venta único y el

pepino fresco lo vamos a vender a diez

pesitos aquí pueden configurar la moneda

y la descripción de precios para uso

interno pueden agregarle varios precio

por ejemplo yo podría venderlo a 10

pesos el pepino pero podría agregar otro

precio en el cual ya venda por volumen

bueno si me compras este 5 kilogramos ya

te lo bajó a 5 que son o cosas así

entonces de mientras voy a guardar y voy

agregar más productos

ahora ya que han terminado de agregar

sus productos y al reggae tres pepinos

tomates y un auto lo que va a suceder es

esta maravilla recuerden stripes se da

cuenta de que ustedes agregaron

productos y lo que va hacer es notificar

a fire beige y nos va a crear estos

productos en nuestra base de datos de

hechos yo me vengo aquí a fire beige y

si yo visito functions van a ver que por

automático en la extensión ya nos creó

todas estas funciones estas funciones

son puntos a pisón son en point que van

a estar escuchando cuando el web se

dispare entonces está ya se disparó ya

notificó y de hecho aquí pueden ver esta

se llama

report a wing esta se llama joseph

create este se llama web events y éste

se llama cheque obsesión y costumbre

entonces sé quién está de websense si yo

entré aquí y veo los registros

le damos con los segundos

pueden ver que aquí ya se disparó todo

fíjense aquí se agrega un documento a la

colección de productos aquí estás agregó

este y esto fue a successful we are el

documento socks school y es obsesión y

entonces ya se comunicaron y siguiente a

mi base de datos

aquí ya tengo esta colección que yo no

cree ya tengo estos productos y aquí lo

pueden ver gente que aquí tengo este

producto que se llama de descripciones

burn rommel son la imagen la meta de la

categoría color talla y el nombre es

autores de torito y aquí quiero que

tengan mucho con lo siguiente tenemos la

información del producto y aquí está el

documento del producto pero al interior

del producto hay una colección que se

llaman aina su colección se llama price

es y aquí en pride price es van a estar

todos los precios que nosotros agregamos

y tenemos un precio único y un precio de

volumen y un precio este de de tanta

cantidad de que van a estar todos

entonces ojo con este formato luego se

confunden pero aún así lo va a hacer

mucho hincapié en lo que queda del vídeo

para que logren entender que hay una

separación tenemos el documento del

producto con su información y la sub

colisión pero no basta de blablabla

ahora que tenemos estos productos vamos

a mostrarlos en nuestra tienda en la

página de inicio la misma inicio estamos

uniendo el logo entonces aquí lo que

vamos a hacer es lo siguiente primero

cerrar todo esto acá y vayamos a home y

aquí en home vamos a mostrar todos estos

productos entonces lo que yo haré es

guardarlos en un estado vamos a crear

vamos a importar state y vamos a crear

un estado que se llame productos y su

función de ser

productos y esto va a ser aún y usted

qué inicializa mos en organizamos una

función para traernos estos productos

vamos a crear la que la carpeta de

functions vamos a crear la función que

se llame get y active parks ok entonces

aquí vamos a importar cómo vamos a

trabajando con la base de datos y tamos

importar debe él desde nuestro archivo

de credenciales que está aquí en fair

list recuerden que en credenciales

inicial izamos debe de firestone debe de

dar bis y aquí vamos a importar las

funciones que estaremos utilizando la

primera conexión la segunda a get dogs

y la tercera momento son todas y esto lo

vamos a importar desde el módulo el

paquete fire beige diagonal first y

ahora nuestra función

es por default a 5 función este va y va

a traernos estos documentos lo primero

que hay que hacer es

crear una referencia a la colección y

ahora de mario collection red es igual a

conexión y que le pasamos de be y el

nombre de la colección pros lo siguiente

extraer estos productos entonces diremos

constan documentos

en este mapa

aprox

álbum de ley 22 es igual a get back si

la pasamos nuestra referencia pero ojo

aquí voy tengo que entender entre la

base de datos y la aplicación entre esto

acá y la información acá hay un punto

medio entonces esto que estamos viendo

acá en lugares más los de axxion

llamarlo snaps estos snap hay que

convertirlos en información entonces lo

que yo haré es crear un rey que se llame

productos que va estar vacío y entonces

agarramos snaps y digamos que por cada

snap vamos a enviar a la red el de

idénticas nap que aquí lo mismo les dan

pueden llamarle doc

vale entonces

y aquí que me falta

y aquí este semana va pasando cerrarlo

ok entonces ahora lo que haremos es

devolver este rey de productos bueno

vamos a vamos a lograrlo en pantalla

para que vean este cómo es que se ve

todo este asunto entonces de vuelta lo

que haremos es importar que active

clorox y aquí vamos a ejecutarla

y entonces si me vengo aquí a mi

aplicación y abro la consola podemos ver

que active prox nos está trayendo o nos

devuelve un array de tres productos vean

aquí está activo nombre pepinos frescos

ese es el cero luego tenemos tomate y el

buen auto de torito ok pero ojo

enseguida algo muy importante que es

sucede que aquí van a estar todos los

productos sean activos o no entonces

tenemos que filtrar y no estar mostrando

al cliente productos que no sean activos

amos los activos porque los retiraron se

quedaron sin stock o qué sé yo entonces

para eso aquí de vuelta en que active

clorox estado antes antes de obtener los

documentos wave

antes tener los documentos vamos a crear

un filtrado entonces que importamos

query y where vamos a crear un filtrado

un cuadro entonces diremos algo como

filtrado filtrar activos es igual a un

cuadro a la cual vamos a pasar

collection red y donde queremos que la

propiedad aquí bien sé que la propiedad

se llama active entonces vamos a filtrar

deseamos un pueblo a esta referencia de

la colección donde la propiedad de

active sea igual a script y entonces

aquí en lugar de que dos de la colección

vamos a obtener los docks desde el

cuerpo y que llamamos filtrar activos y

ahora sí me vengo para acá y actualizó

todo debe seguir funcionando a la

perfección perdió en detalle que

recuerden que esta información del

documento no nos muestra los precios

porque recuerden que los precios están

en una sub colección dentro del

documento entonces qué podemos hacer

aquí muy pero que muy sencillo vemos

algo algo muy avanzado y de hecho unos

sencillos avanzado vamos a hacer un loop

dentro de otro loop que van a ser ambos

asíncronos entonces cómo lo hacemos bien

vamos a comentar esto de acá entonces ya

tenemos los snaps ok los snacks es la

información 36 pero que todavía no es

elegible recuerden que para que sea

legible tenemos que acceder al método de

vía ok pero vamos a hacer es que estos

snaps vamos a limpiarlos con un force of

a white o bueno son four weight of

de entrada este rey si no lo tenemos por

acá y ahora qué vamos a hacer vamos a

decir por a wait y aquí vamos a pasar un

elemento que sea y te hable en los

snacks al ser una rey es inter hable

entonces diremos que no está nada

entonces diremos que vamos a entrar

vamos a asignar por cada snap dentro de

snacks y ahora comprada snap que es lo

que queremos hacer lo primero que

queremos hacer es leer su información

entonces diremos algo como con su

producto es igual snap punto de ira lo

mismo que hicimos aquí recurrente -que y

cada snap se llama nodos y exhibimos han

de ir lo mismo aquí estamos iguales el

bloque sigue ahora es a este producto

vamos a asignarle un aire que vendría

siendo la idea de cada snap

es decir el nombre de cada documento

sólo para que esté de manera tradicional

y podemos utilizarlo en nuestro sitio

web para buscar y navegar etcétera ahora

lo que sigue antes lo que hemos hecho es

que aquí sacamos información y lo

enviamos a la red no ahora lo que sigue

es ya que estamos dentro de cada

documento dentro de casas nahb vamos a

irnos a la sub colección de precios

vamos a tener todos los precios y vamos

a pasarnos también de productos entonces

que estamos aquí lo queremos es crear

otro snap lo mismo que hicimos acá pero

ahora para los precios yo diré algo como

precios bueno precio snap howard precios

naps es igual a 10 box y aquí tengo que

pasarle la referencia donde queremos

sacar lo bueno queremos sacarlo desde la

siguiente colección y aquí podríamos

ponernos a escribir todo el caminito

todo este caminito de acá fíjense el

caminito de productos luego el documento

luego precios luego tablas no es muy

largo muy tedioso todo que vamos a hacer

es utilizar una taza aquí para la

referencia diremos toma toma el snap en

el cual estés y tiene que saber que los

snacks tiene una propia que se llama red

snacks punto red apunta al documento y

ya que estamos en el documento del

producto lo que sigue entonces es irnos

a la conexión de bueno su colección de

raíz es un tanto confuso pero no tan

tómense tiempo de entender que acaba de

ocurrir aquí tan sólo obtenemos los

documentos de la sub conexión de price

es y su colección de países está al

interior de este documento

sería este producto de acá bien se vale

no hay mucho lío ahora ya que tenemos

estos snaps al igual que hicimos aquí de

obtener su información haremos lo mismo

pero para los precios entonces vamos a

asignarlo a producto yo diré

punto price va a ser igual a precio

snaps y bajos recuerden que este va a

ser un array si ustedes solo tienen un

precio por producto pueden hacer como yo

y acceder a el valor cero de terry lo

voy a hacer así para que sea más rápido

pero ustedes tienen varios precios lo

que tienen que hacer es tomar eso en

cuenta yo solo tengo uno entonces accedo

al precio cero él reveló su información

ya que esto era un stand y este esto lo

estoy asignando a este objeto que creé

acá vale y ahora ya al final de este

foro de este look vamos a empujarlo o

enviarlo al rey y ahora éste full este

por esther este ciclo va van a

realizarse de forma asíncrona iba a

esperar cada uno de estos de estos

procesos y ahora si yo al final imprimo

productos y me vengo para acá

y actualizo

me dice que esto es un error y es un

error porque snaps

considerable propiamente sino que lo que

es y ter hable es su propiedad de docs

ok y entonces aquí lo vamos actualizamos

a ponerles docs

y ahora me dice que no se puede leer la

propiedad donde find no se puede leer de

ida y normal que no se pueda leer la

propiedad de ira porque aquí también me

he comido el box entonces que le ponemos

docs y hasta entonces los snacks para

acceder a la parte el iter hable a la

parte que se puede bloquear cliente

acceder a docs lo mismo aquí docs que es

la única diferencia pero todo lo demás

la explicación la aplicación que les

dije es lo que está sucediendo y ahora

si unimos para acá y revisamos el rate

veremos que en nuestro primer objeto

además de tener los datos del producto

tenemos aquí el campo de precio y aquí

en préstamos toda la información de las

unidades la moneda cómo se vende

etcétera vale y ahora esto este rey

obviamente en lugar de denominarlo

inventario lo que haremos es devolverlo

ok entonces aquí devolvemos productos y

ahora esta función la vamos a llamar acá

pero no aquí en el inicio no hay en home

lo queremos en llamarla a través de un

news effect entonces diremos algo como

yusuf ect

con una función aquí vamos vamos a hacer

una función

que se llama get products y aquí lo que

haremos es vamos a llamar a la función

de garantía projects esperamos a que se

resuelva guardamos el valor aquí y luego

esto lo pasamos al estado y ahora aquí

en lugar de regresar un día lo queremos

regresar una lista y que la lista vamos

a revisar si ya tenemos

productos entonces lo que queremos hacer

es

cambiarlo o bien enviarlos y por cada

producto queremos devolver un link aire

y al interior queremos mostrar el nombre

de cada producto y ahora si no tenemos

esto lo que haremos es no hacer nada y

por último que vamos a pasar de un buen

key porque vamos a pasar del aid y de

cada producto y ahora aquí vamos a

actualizar la página y no pasa nada

vamos a ver aquí además que nos manda un

error lo cual nos hace pensar que

aquí está todo bien y aquí pasó un

clásico rol de novatos el error es que

por ejemplo aquí no estoy aquí definido

la función pero no lo hago llamar qué

problemas hay que ejecutar la función y

por último que el juz effect tenga una

red de dependencias para que sólo se

ejecute al inicio donde aquí podemos

venir y actualizar y vale aquí están

nuestros productos pequeños frescos

tomate y el auto de puerto tal como lo

estamos mostrando aquí ya para que sea

un poquito mejor nuestra en nuestra

lista de productos vamos a crear aquí en

componentes un archivo que sigue a mi

aita card punto j s x y aquí lo que

vamos a hacer es crear una tarjeta

una carta que digo tarjeta carta y aquí

ya ver y que vamos a utilizar esto muy

rápidamente con win entonces vamos a

darle un max with

a menos 400 píxeles queremos que sea

flex en dirección vertical queremos que

esté todo centrado también queremos

darle un sarao y unos curvas en los

bordes aquí el aire que va a recibir

todo el producto entonces vamos a poder

mostrar una imagen cuya fuente sea cuya

fuente se aprobó punto y manches creo

que se llama y vamos a pasarle la

posición 0

de hecho vamos a revisarlo y nos venimos

de vuelta que los productos podemos ver

qué imágenes efectivamente una red donde

mostrar la primera

height 64 no vamos a ponerle automático

para que sea

max wef

el

automático vamos a pasar un h 3 desde

donde mostramos el primer punto name

está vamos a darle una clase si está de

de que sea boat y por último vamos a

pasarle el precio

program

punto price

punto es unit

a mount y uned

creo que se llama así vamos a revisarlo

price es y está este y se llama y un

ítem aun no había puesto al revés y uned

y un bajo amount seguido de producto

punto price punto corren si guardamos

entonces quien no en lugar de volver

este list aire vamos y vamos a devolver

y al interior en lugar de pasarle esto

vamos a pasar el aire mccarthy cuyo

producto sea igual a peor este de roncar

no lo hemos importado vamos a importarlo

por aidima card guardamos y aquí

deberíamos haber algo más o menos así ok

pepino me cuesta ojo ojo el vídeo no

cuesta mil pesos y aquí mucho cuidado

porque la unidad nos la da con sin

centavos cine de punto decimal perdón

entonces hay que tomar eso en cuenta y

aquí en el aire mejor éste y un german

vamos a dividirlo en tres

y ahora deberá verse más o menos así 10

pesos 20 pesos y

350 mil que de hecho aquí lo que podrían

hacer por ejemplo para que tenga comas

podemos utilizar el intel y darle forma

que no lo haré porque este esto es un

ejercicio relativamente rápido pero aquí

ya estamos viendo los productos ahora la

idea es cuando yo haga clic en un

producto me lleve a la vista de detalles

de ese producto entonces acá vamos a

importar

desde riad perdón y lo queremos

desenvolver este tipo en link que nos va

a llevar a producto diagonal y aquí

vamos a irnos

a punto para que esté bien tiene que ser

con back click y tiene que necesitamos

que ponerlo

sí

esto hay que terminar de envolverlo

guardamos y yo visito esta página me

lleva a la vista

si visito esta página de pepinos fíjense

que llevan producto diagonal problable

bla bla bla y aquí no se ve nada aquí

tendríamos que ver la información del

producto y eso hay que trabajarlo no

desde aquí desde arrancar ni desde home

ni desde la atención sino que tenemos

que irnos a nuestras vistas a la vista

desde el producto y aquí vamos a

importar

yus

para ams desde una cura del don y lo que

haremos es

obtener el aire del producto vamos a

lograrlo

y si yo actualizó esta página y abro la

consola aquí en imprime en pantalla la

misma dirección que estoy teniendo el de

acá ok y ahora ojo muy importante

fíjense qué quiere para arms george

extraje haití porque en mi navegación a

quien así estoy llamando a este a esta

parte de la url esta parte laboral se

llama haití y por eso que puedo hacer

esta de estructuración pero bueno ahora

con este aire y lo que yo tengo que

hacer es ir a fire store y traer la

información de este producto con lo cual

voy a crear una función que se llame get

producto

by heidi y aquí vamos a hacer cuando

vamos a empezar de cero vamos a importar

dar a veis

y vamos a importar

doc

collection y que todo desde el beige

bares tour es decir que a 5 conexión que

rock band aid y va a recibir el light y

aquí vamos a decir que la colección red

es igual a

esto acá lo diremos que de ocurrir es

igual a colección red y el documento

cuyo nombre sea igual al aire que

estamos recibiendo que estamos

recibiendo desde acá desde paramos

aunque entonces después debemos decir

que con snoop dogg es igual a que don

tetto curet y luego producto es igual a

obtener el de ira de este snap doc

snoop dogg

y esto vamos a devolverlo

víctor un producto y ya es para que el

hecho está acá tendría que ser llevar su

buena weight para que nos valga una

promesa y entonces aquí al final le

exportamos de forma default estoy acá

woods y aquí en la vista de producto

vamos a traernos esta función de product

by haití y aquí también vamos a importar

vamos a importar y usted un buen news

effects y aquí vamos a crear un estado

que se llame producto info se probaron

enfoque va a ser igual a yunís ius éste

que va a estar en nou por defecto y lo

mismo que hicimos en combo estamos en un

caso el mismo patrón que podría estar

utilizando alguna librería por ejemplo

query que es y ya están muy comunes muy

útil pero voy a intentar mantenerlo

sencillo de ellas que ustedes sepan cómo

funcionan en groso modo una tienda y

comercia ustedes pues lo van

personalizándolo manteniendo con sus

librerías con frameworks obviamente en

estilo elemento en lo que deseo que

podamos detener los sencillos sencillos

en sí entonces

patrón y creamos un efecto que nos va a

correr una función que llamaremos sin

función llamaremos get loud' info y aquí

lo que va a ser es que nos va a traer

esto acá lo metemos en este estado y al

final vamos a decir que esto sea solo

al inicio cada vez que light y cambia ok

y ahora por último aquí en lugar de

pasarle producto al producto

producto info punto y esto sólo si

existe ya si vengo para acá y actualizó

y yo otra vez pasó lo mismo aquí definir

la función pero no la mandó a llamar

clásico clásico clásico los aquí está el

producto es pepinos frescos vale y si yo

me voy al inicio y visitó la página de

tomate producto es tomate

y si yo me vengo para acá y visitó el

auto de torito el producto es auto de

toretto que entonces esto ya está

funcionando si can sale un poquito más

de de hermosura esto da acá porque

ponerlo así está de gran libre chicos

entonces el día vamos a darle por

clasecitas queremos que ocupe toda la

pantalla lo mismo en esto de acá no

queremos que esté en buen flex que esté

en vertical

vamos a darle background no sea azul 300

que estoy diciendo azul blue y

esto vamos a que sea un h 1 por temas

deseo chicos utilicen bien sus etiquetas

th1 obviamente queremos que sea

5 extra largo fútbol ver line

y vamos a pasarle aquí una buena imagen

cuya fuente sea igual a producto info

punto y mayer con el que esto es una red

esta terrible esta imagen

en clase y vamos a ser lo más que

quitamos a tenerle que max with sea

igual a un tercio

y vamos a decir que el margen en

horizontal sea automático o que ya está

y por último vamos a poner un botón en

gigante que diga necesitamos dos botones

uno que diga añadir a carrito y otro que

diga

comprar ahora gay y ahora

en añadir al carrito vamos a entrar un

background a black y text white

guau qué bonita es esta página vamos a

meterle aquí algo así y lo mismo para

comprar ahora vamos a meterle un vagón

red unos 600 para que esté oscuro y en

texto guay también

ahí lo tienen ahora

y ya podemos navegar por la página

este pero qué pasa ahora tenemos que

poder comprar los productos cierto en

próximo vengo para acá vamos a pepinos

frescos mi equipo era con extraña razón

no me está cargando aquí y este bueno

hay un pequeño truquillo antes de ir no

usar el carrito pueden agregar este

símbolo de admiración si no quieren

estar revisando aquí aquí yo lo estoy

imprimiendo pantalla directo ok si no

quién está revisando si hasta el estado

que puede hacer es que para cada campo

le agregan este símbolo de interrogación

para quizá el option changing y si esto

no existe no busquen esto y nos manda

error entonces así si el internet va

lento y no carga rápido el contenido lo

que va a pasar es que no va a haber

ningún error por ejemplo que yo siento

tomate ahí está añadir a carrito y

comprar pero bueno vamos a ver el tema

del carrito

bueno y para el carrito lo que vamos a

hacer es crear otro contexto que

entonces aquí en contexto además del uso

de tom text que vamos a copiar

particiones rápido nos señala que hay

decir el carrito

contex punto j s x y ella es ex copiamos

esto de por acá y aquí en lugar que sea

yo sé el context va a ser carrito

contexto

i

el perrito set carrito o carritos el

perrito carrito contexto rito condis

provider a mira aquí el nombre

carrito context provider y listo ok

ahora ya que tenemos este contexto de

carrito tenemos que pasarlo a nuestra

aplicación de aquí en maine donde

queremos es importar lo rito context

provider y vamos a envolver nuestra

aplicación con carrito context pro fire

lo puse al revés ahí está y ahora

fíjense que imaginemos que nuestro valor

inicial dijera

hola bueno gol a las acciones que este

es nuestro valor inicial del carrito yo

me vengo aquí a la vista de producto lo

que puedo hacer es importar ese juego

este gancho diciendo just carrito

context y entonces aquí en la función de

producto en esta vista de producto lo

que haré es de estructurar y decir que

carrito y se te rito es igual hay un

carrito context entonces yo aquí podría

poner o imprimir en pantalla

lo que dice el perrito y ahora quiere

decir el fíjense hola ok es así aquí

está es así como estar trabajando

nuestro carrito de compras entonces que

lo que haremos aquí mismo dentro de

productos para poder ocupar el gancho el

hud recuerden los books los ganchos sólo

puede utilizarse dentro de componentes

de brian' no dentro de algo más y sólo

puede ser aquí en esta primera parte del

top netbook entonces aquí en el tacle

book

causa grande función función que se

llame a su kart que va a recibir

en producto cuando el ser que lo reciba

ya que estamos aquí mismo donde queremos

es que ser carrito vamos a que este rito

va a ser igual a una rey en el cual

vamos a conservar lo que sea que ya

tuviéramos y lo vamos a agregar él

inf ok no sé por qué tú vienes de

android products inc y ahora aquí en el

en el añadir a carrito vamos a agregar

una función

vamos a decir que un clic queremos

ejecutar a tocar

vale y ya está y ahora si hago clic acá

si hago clic por acá demanda lo que está

pasando

[Música]

ocurrió un error objetos no son válidos

como hijos de brad se encuentra un

objeto

ok a ver

ay ay ay ay ok sí sí sí es que piense

que aquí estábamos en el título estamos

imprimiendo el carrito y ahora el

carrito ya son la raíz entonces no

podemos hacer esto entonces ya agregamos

el tomate a nuestro carrito entonces

vamos a la vista del carrito y vamos a

trabajar aquí en la vista del carrito

vamos a importar el mismo gancho de

ellos carrito con texto o si es que está

mal importado aquí tenemos que subirnos

un nivel medio dentro del carrito vamos

a decir que el carrito es igual a tal

y aquí lo que haremos es que vamos a

a devolver un carrito mar donde por cada

producto queremos mostrar elemento de

mostrar un solo texto que diga

producto punto name

ok aquí vamos a hacerlo

así ya está y ahora si yo vengo aquí a

mi sitio y visitó diagonal carrito

me encuentro con qué

vamos a vamos a imprimir en pantalla

carrito para ver cómo se ve y aquí vamos

a mientras esto vamos a comentarlo y

vamos a devolver un hola

visitemos white

visitemos la consola

esto vamos a regresarlo al nodo

con texto y es porque refrescamos la

página hace rato y porque estamos

cambiando de dirección entonces vamos a

volver para acá al inicio

venimos a tomate de hecho ahora que lo

pienso aquí en carrito que un producto

después de esto

bueno no aquí sino que vamos a agregar a

arriba junto al título vamos a tener

esto vamos a vamos a envolverlo en un

día y vamos a poner un botoncito que

diga carrito el día tiene que ser

obviamente

flex

justified

y el carrito vamos a bueno este botón

vamos a darle un background

orange 600 que tengo existe así si

existe y vamos a

volverlo bien

carrito

y obviamente el link hay que importarlos

desde

right roberto

aunque ya está y ahora piense qué

bueno este botón

vamos a meterle padding de 10

un padre de tres así ok ahora si yo le

agrego al carrito y luego me vengo a

carrito

notarán que dice hola por qué porque

aquí los incremento en pantalla mira me

dice que es nulo es no hay nada

y es que me dice que carrito no existe

hable y si yo reviso el contexto es

porque me inicializa nudo que debía

haberlo puesto como una red vacía

ok ahora si yo me regreso acá lo agrego

al carrito y luego visitó el carrito

aquí en el carrito ya puedo ver que

tengo este objeto de acá ok ahora lo que

tenemos que hacer es obviamente ya que

lo tenemos acá mostrarlos

aquí está vamos a ponerle aquí tu

carrito

y tenemos tomate y por ejemplo vamos a

darle más tener aquí abajo un botón que

diga

no vamos a poner un texto a el home

que diga volver al inicio

y esto hay que importarla no sé por qué

vino - está importando de forma

automática

aunque piense tomate añadía el crédito

visitamos el perrito quedamos el tomate

volver al inicio pepinos frescos añadir

a carrito estamos el perrito tomate y

pepinos frescos volver al inicio el auto

de toretto añadir a carrito estamos a

crédito y tenemos los tres y ahora sí

obviamente debemos tener un botón que

digan comprar ok y qué pasa con comprar

bueno pues aquí es donde viene lo lo lo

chido que íbamos a pasarle en flash name

vamos a ponerle un background slate 90 y

800 y un parking de 5 y en vertical un 3

y obviamente un buen texto white ok

ahora ya que tenemos aquí nuestro

carrito como podemos comprar lo que esté

a nuestro carrito bueno pues para eso

regresamos aquí lo que tenemos que hacer

es crear un documento en fair store que

diga al usuario quiere comprar tales

objetos creamos el documento strike es

notificado de esta intención de compras

y tenemos que refieren sella payment

intent y luego cuando éste se entere nos

va a enviar o cuando va a crear una una

ventana de checkout misma que el usuario

usuario va a utilizar para comprar desde

un ambiente provisto por stream y

nosotros no nos complicamos ahora aquí

hay hay que hay un problema ustedes

podrán serlo y es que esto es facilísimo

es es increíble cuán fácil es porque

meramente es muy facilitarle lo que toca

ser además es crear un documento y ya

tiene que ver algo malo no tiene que ver

un caché como dice en inglés what's the

cage lo cual es el precio a pagar por

todo esto que quiere entrar precios

bajísimos que si incurrimos en ciertos

gastos y superes es nulo

ahora el touch es que

la persona tiene que estar autenticada

en nuestra aplicación que porque de

hecho no es mucho caché no es muy

difícil lo que haremos aquí al momento

de comprar lo que haremos es llevar a la

persona a una ventana este de

confirmación de compra en la cual le

pediremos que éste nos deje su correo y

este una contracción que se registre

para poder continuar con la compra

entonces hagamos eso al momento de

comprar vamos a revisar si la persona

tiene sesión iniciada o no y ahí ahí

entra en juego este contexto que hayamos

creado de user context aquí de momento

lo tenemos en nube entonces lo que

haremos aquí es en comprar ahora en un

clic vamos a

corre una función que se llame es

auténtica y esta función vamos a crear

la unión es auténtica y de aquí vamos a

revisar gritar no hay que fijarse

primero vamos a jalar el gancho desde el

loser context entonces aquí diremos al

como en port news y usher context y aquí

vamos a definirlo y usted es igual a

estar acá y aquí vamos a revisar

el loser existe entonces vamos a vamos a

correr una función

correr función de comprar ok

y ahora si el usuario no existe lo que

haremos es

redirigir al login si podríamos

redirigir

si vamos a reducirlo bien

vamos a redirigir entonces aquí o no

mejor no saben que mejor vamos a mostrar

un model para que no sea tan mala

experiencia de usuario entonces aquí

dentro de nuestro producto tenemos todo

esto vamos a cerrarlo esto va a ser

relativo

y aquí vamos a nuestra pandit

cuya clase sea absoluta gonzález top 0

pero vamos a darle una gran ley

con 700 que sean transparentes unos 50

vamos a darle de ancho toda la pantalla

lo mismo de altura y un z de 30

un valor que

vamos a mostrar

un recuadro blanco que sea background

white with and medium la inserción lo

mismo la altura

y aquí va a decidir modal

aquí la pregunta es

por qué no me está mostrando este modal

vamos a cambiar a estar acá

tenemos tu carrito

aunque interesante o es porque estamos

en la página de producto aunque ya esto

vamos a sacarlo de acá

vayamos a la página de carrito y aquí es

donde lo vamos a poner y estoy aquí

debiera decir class name relativo aunque

ya ahora sí aunque ya aquí está nuestro

modal

te vamos a ponerle 10

y vamos a darle un buen flex

excolegio stephen center airén center

ok ahí está nuestro modal no más que

este destino y vamos a meterle más

siempre si vamos a dejarlo en 40 ok

ahora la gente le va a comprar y sale

este modal y este modal diversidad como

inicia sesión

o regístrate

vale

y esto tenemos a meterle un flex igual

flex gol y en arenys siente en justified

[Música]

y vendía

iniciá sesión o registrate y aquí lo que

vamos a hacer dentro de este modal

obviamente es iniciar sesión

registrarnos vamos a envolverlo en un h

3

ok vamos a crear un formulario

dos inputs

el primer tipo texto name va a ser igual

va a ser igual a email vamos a crear uno

que sea

de tipo contraseña y vamos a agregar un

botón que diga iniciar sesión

y que vamos a ponerle un play holder que

diga correo

lo mismo por acá debería decir

contraseña

y este formulario

vamos a ponerle flex y flex call y ahí

está y por último cuando yo haga clic en

submit se aplica casi me va a reiniciar

la página

qué bueno que me lo manda por acá piense

se reinician no queremos eso vamos a

pasarla aquí a un soft mit

queremos que se ocurre en la función de

un

elemento y ejecutar

la función se llama login

y a lo que le vamos a pasar como

argumento en el evento la función no

existe vamos a crearla entonces aquí

carrito vamos a crear esta función que

se llame lo bien que va a recibir un

evento y lo primero es prevenir que se

actualice la página nació me vengo para

que le doy a acá no pasa nadie ven pero

lo siguiente es obtener estos campos de

correo y contraseña como yo les puse el

nombre puede utilizar estos datos pues

ya o como con su correo es igual

y punto target punto

email punto vale lo mismo para paz

volvamos a bloquearlos en pantalla

si me vengo para acá y escribo en correo

o la roba la espíritu bien contraseña es

todo aclarado y aquí me salen estos de

acá muy bien y ahora con esto vamos a

iniciar la sesión a la persona entonces

vamos a crear una función acá en función

que se llame el login

email punto js y aquí que vamos a

trabajar con autenticación vamos a

importar el bueno desde credenciales y

vamos a importar el sign in which email

and password es de fair face of este

tiene que ser el tipo síncrona lo

habíamos llamado login email va a

recibir correo y contraseña y diremos

que el resultado del inicio de sesión es

igual a esperar lo que sea que esta

función nos devuelva después de haber

pasado por email y password y aquí vamos

a lograrlo en pantalla

y vamos a exportar las por default login

email entonces de vuelta aquí al carrito

vamos a importar

cómo se llamaban login email y aquí lo

que haremos es

correrla con estos datos que estamos

recibiendo desde el formulario yo me

vengo para acá estaría cometiendo un

error porque yo no tengo cuenta ok no

puede ser es rápidamente nada más para

probar esto voy a crearme una cuenta que

voy a agregar un usuario que se va a

llamar test

puntocom lo aconseja un dos tres cuatro

cinco seis y ojo que es muy importante

para que tengan problemas que para sus

pruebas no utilicen el mismo correo que

el correo que utilizaron para crear la

cuenta extra porque yo perdí como media

horas intentando ver cuál era el error y

luego descubrí que era ese donde no

utilicen el correo de la cuenta de

strike para hacer sus pruebas repito

pero que vamos a crear este usuario de

test de robotes y entonces vamos a rezar

acá y vamos a iniciar esta sesión test

en este punto com la contraseña 1 2 3 4

5 6 y aquí deberá decirme que se inicia

sesión socias full y aquí está esta es

la sesión de la persona dice que todo

bien todo en orden y que new ser me da

el you haití y tengo tiene air races

extra acá y ahora ya que la persona

inició sesión lo que tenemos que hacer

es

guardar esta información en el contexto

ok entonces como hacemos eso hay varias

maneras lo que podríamos hacer es como

aquí lo estamos

devolviendo como estamos viendo toda

esta información lo que podríamos hacer

es volver esta función de ellas

asíncrona

podríamos esperar el resultado

y guardarlo en el instante u otra cosa

que podemos hacer es más fácil

intentando un lío vayamos a la

aplicación y aquí en la aplicación vamos

a importar

of

desde las credenciales de fair face

credenciales

vamos a importar a ellos cómo se llama y

un

contexto y vamos a importar

unos

speight change desde fire beige diagonal

off para que hacemos todo esto por quien

aplicación donde gestionamos nuestras

rutas vamos a gestionar y vamos a

escuchar estos cambios decisión de

quique inicia sesión hubo un cambio

decisión estamos de acuerdo esos vamos a

escucharlos con esta función de fibers y

cada vez que ocurren esos cambios vamos

a actualizar nuestro contexto de usuario

entonces que dentro de app vamos a decir

qué

consta

y usher estos dos vienen desde acá

y ahora qué vamos a decir un out state

change lo queremos primero es pasarle en

off importamos desde credenciales lo que

vamos a pasar la función que queremos

que ocurra cuando se escuchen estos

cambios de inicio de sesión entonces yo

voy a correr una función de flecha donde

voy a recibir el fair race el usuario de

fires y que haré lo siguiente si existe

el usuario de firefox es decir que la

persona accedió entonces en ese ser

vamos a pasarle el fair beige y usted

caso contrario si no existe si la

persona cerró sesión vamos a regresarlo

al ok ahora automáticamente cada vez que

hay en inicia sesión la aplicación nos

va estar actualizando el contexto vale

entonces aquí de vuelta ahí el carrito

la repiten muchas ventanas abiertas

aquí de vuelta al carrito este modal

tendría que ser éste tendría que ser un

modal tendiendo tendrá que estar visto

siempre entonces vamos a crear un estado

que diga is modal sep is modal aquí

vamos a

inicializar walls

vamos a importar y usted obviamente

y aquí en la función d

vaya parece que la función le había

agregado en la otra página en la página

del producto aquí es auténtica igual se

utiliza aquí y bueno vamos a ocupar aquí

pero de mientras me voy a quitar y vamos

a traernos la de vuelta al carrito que

no sé cómo no me di cuenta que están

producto novedad el carrito pero bueno

aquí en carrito ahora sí vamos esta

función de isoft en ticket y aquí al

darle comprar vamos a

ejecutar esta función de es gente que ya

tiene su auténtica red si no hay usuario

vamos a decir que el modal se muestra

ok y si hay usuarios mientras vamos a

imprimir algo que diga

comprar qué sé yo y entonces este modal

vamos a que sea moda al comprar para

poder identificarlo aquí en las clases

vamos a darle una clase este condicional

ok vamos a decir qué

al final vamos a decir qué

si camps es modal es verdadero

entonces vamos a mostrar

blog caso contrario vamos a mostrar

hidden ok ahora mismo están y giren no

se ve y ahora mismo yo tengo yo sé que

tengo sesión iniciada si lo de comprar

aquí me tiene que decir comprar mano que

me dicen el que son de rodillas que aquí

me dice que yo sé no está definido y

efectivamente no lo ha importado aquí en

carrito vamos a

vamos a importar nuestro gancho cues y

usar contexto desde

context diagonal news el contexto y

vamos a definir qué usuario es igual a

esto acá y ahora sí listo

si yo lo voy a comprar aquí me dice

comprar porque porque tengo sesión

iniciada vale pero

aquí de vuelta en home vayamos de vuelta

a home

a quien vamos a agregar un botón que

digan cerrar sesión

y aquí al hacer clic vamos a correr

aunque se llame cerrar sesión y ahora

esta función no existe vamos a definirla

y aquí vamos a correr sin out y le vamos

a pasar hoy ok yo ahora tanto off como

shine out hay que importar las hay no

llaman en portugués de fire beige pero

no me importa voz vamos a importarla y

recuerden que ellos lo estamos trayendo

desde nuestras

iniciales mira que le puso tres puntos

ok ahora sino hace clic aquí en cerrar

sesión

ya me cerró la sesión y yo agrego esto

al carrito y ahora visitó el carrito al

hacer clic acá me tendría que mostrar el

modal y aquí está el modo en que todo

funciona y ahora vamos a iniciar sesión

ya llamé cree al usuario desgarro baches

y tengo esto de acá

ustedes a robot es 123456

inició sesión y ahora al iniciar sesión

aquí de vuelta en carrito lo que tendría

que hacer es ocultar el modal

y aquí ya tendríamos que hacer la

función de compra lo mismo que acá con

función de compra es iniciar sesión y

ahora tendrá que hacer la función de

compra y cuál es esta función de compra

vamos a crear la que en funciones vamos

a crear

que se llame incluye check-out sesión

ok y aquí para crear a este intento de

compra y crear esta ventana de checando

tenemos que recordar que lo que estamos

haciendo es crear un documento aquí que

va a informar strike aunque entonces

donde solamente vamos trabajando con

fire store por lo cual importamos debe

desde nuestras credenciales y ahora

vamos a importar a collection vamos a

importar doc a dock y un snack chat

desde

desde fire with fire store y esto tiene

que ser desde desde el emf y antes de el

módulo aunque entonces no lleva estos

dos puntos de relativo ya que vamos a

llamar a hacer una función asíncrona que

llamaremos create checkout sesión y

ahora esta función tiene que recibir el

white de la persona que tiene comprar y

tiene que y ya no hay que recibir este

los los los los que el carrito de

compras farc vamos poner así card y

ahora qué es lo primero que tenemos que

hacer lo primero que tengo que hacer es

crear una una referencia a la colección

de checkout sessions y ahora cómo

funciona aún funciona así

aquí en home en

nuestra base de datos tenemos productos

y tenemos costumbres ok aquí tenemos

este costo ver que se llama testers de

esto lo hizo strike por automático ahora

aquí al interior de este de este

documento de este usuario al interior

hay una colección o habrá una conexión

se llama checkout sessions ellos lleva a

registro de todas las veces que usuario

intentó comprar para cesc el usuario

abre una ventana de checkout entonces es

aquí donde tenemos que llegar entonces

fíjense que el camino es costó merz

luego el haití del usuario y luego la

sub conexión de down

de chacao sessions entonces aquí vamos a

crear digamos cons collection red es

igual a collection le pasamos div y lo

pasamos el caminito que nuestro caminito

es customers diagonal

diagonal en higüey y que estamos

recibiendo de la persona y luego

diagonal checkout

sesión si es importante que sigan este

nombre donde me estoy sacando este

nombre nombre luisa que cuando rodríguez

sacado de la manga si se van a

extensiones y acceden a estar acá y van

a cómo funciona aquí van a ver que se

llama checkout sessions la colección que

tenemos que respetar esta nomenclatura o

no va a funcionar estoy acá y aquí pues

obviamente esto hay que ponerlo con

template

para que funcione bien porque marca

o es que quiere importe mala leche y

hasta ahora ya creamos la referencia que

sigue ahora lo que sigue es agregar el

documento en en esta ubicación de la sub

colección entonces vamos a decir que

vamos a agregar un documento ok en donde

en la colección red y aquí vamos a

pasarle todos los datos de este

documento este documento recuerden que

es para la ventana de compra y que tiene

que ver la ventana de compra primero si

es comprar un objeto sino es una

suscripción porque construir podemos

elegir en suscripciones y es un objeto

vamos poner en modo game en ok lo

primero lo segundo en caso de que la

ventana sea exitosa o en caso de que no

los hacemos que redirigir los a ciertas

ubicaciones lo que yo haré en caso de

que sea

exitoso lo que haré es enviarlos a

empezamos la web de le vamos a enviar

los a

al mismo sitio

window punto location punto origin ok

origin y ahora en caso de que no sea

exitosa en caso de que la persona se

arrepienta entonces que le pasamos algo

que sea canso subsedes y cansa quien

subsedes a lo mejor sería será más

conveniente enviarlo al inicio enviarle

una ventana de confirmación de compra de

mientras pongámoslo al mismo ahora lo

que sigue si quieren recolectar la

información de envío entonces aquí

pasamos la propiedad de colección no

connection colette shipping nature si

ponemos en true y luego aquí lo que

vamos a pasar en line adems vamos a

pasar

tengo que pasar un rodillo key

tenemos que pasar una red de todos los

productos que vamos a estar cobrando y

este rey va a hacer que se compone de

objetos y aquí lo tenemos que hacer es

pasar primero en la cantidad de cuánto

estamos cobrando de cada uno lo tenemos

que pasar el el haití del price del

producto y de qué estoy hablando que no

se preocupen todo esto está en nuestro

puesto de carne se han seguido el

tutorial hasta ahora pídale trabas y en

bolsillo aquí me vengo al auto de

toretto el auto de toretto tiene

recuerde que puede tener varios precios

varias tarifas de eventos sólo tiene una

y esta tarifa tiene este esté aquí es

estar acá ok entonces don como dice

price aquí se refiere a este código de

acá vale y esto se guarda en el objeto

de productos recuerden que así lo

hicimos para que estuviera al alcance

entonces aquí lo que vamos a hacer es

tomar nuestro carrito y vamos a devolver

únicamente estos datos y para ello vamos

a borrar este rey y vamos a decir que

vamos a arrancar punto más recuerden que

en mar tomó una ley va uno por uno y va

devolviendo lo que nosotros le digamos

que devuelva el global devolver en un

nuevo rey donde que basile que por cada

aire queremos que regrese

y dicho que te va a tener sólo dos datos

los dos datos que ya vimos en cantidad

de momento nosotros en esa entidad no

estamos rastreando este cantidad

entonces vamos a ponerle 1

y lo siguiente en price vamos a pasarle

el aire en punto es bueno no estoy

seguro si éste era el el dato correcto

ahora es que estoy seguro pero lo

revisamos de mientras piense que aquí al

haber puesto paréntesis cuando haber

puesto ya mis la nomenclatura y

javascript en saque en lugar de devolver

un objeto quiero que no a comenzar una

función entonces aquí vamos a decirle

return de que íbamos a pasarle esto de

acá

así y ya está ahora antes de continuar

que revisar que éste sea correcto

vayamos a carrito y aquí vamos a

imprimir en pantalla carrito sólo para

confirmar que no creo que se llame price

debe tener otro nombre pero vengamos

para que volvamos al inicio y vengamos

al tomate añadir a carrito vengamos al

carrito y veamos aquí como se ve el

carrito tenemos el tomate tenemos

qué raro no tenemos el precio

efectivamente no tenemos el precio y si

no tenemos el precio significa que en

algún punto se perdió porque si

regresamos aquí a home

si yo aquí imprimo en pantalla los

productos

donde él aquí está

productos son

aquí sí lo tenemos fíjense vamos a abrir

este el auto de tony ton y aquí en auto

de toretto tenemos price y sólo para

confirmar se llama

con tal parece que en órbita

killingholme si tenemos la propiedad de

price como pueden ver lo cual significa

que en algún punto en camino hacia

carrito se perdió ya lo revisamos pero

aún así revisando price no viene la idea

entonces significa que aquí cuando

obtenemos nuestros productos aquí

guardamos el aire del producto guardamos

el precio que posee este producto pero

pero hemos olvidado crear la propiedad

de prisa y de diremos price haydee y

éste haití lo vamos a tener de de este

mismo precio recuerde que ocupamos un

solo precio en caso que usted se ocupen

más después tiene que unificar esto pero

aquí accedemos a en lugar de acceder de

irán vamos a acceder acceder a haití

él lo mismito que hicimos aquí arriba de

grady de ira y aire aquí no teníamos aid

y para el producto nos vamos a guardar

aquí vamos a limpiar consola vamos a

actualizar y ahora

como aquí en junio los estoy imprimiendo

en pantalla con productos com si agarro

este dakar tengo price lo que tenía

antes y tengo el price side y éste es el

que hay que pasar entonces la pregunta

es por qué no lo tenemos en carrito pues

vamos a ver aquí en aire entonces

estamos pasando el producto

y si yo visito hay rencor

el estar siendo producto

ok

claro claro claro claro ya sé ya sé cuál

es el problema chicos el problema es que

quien producto recibimos el producto

completo que este producto completo

viene de home tiene toda la info price y

price aid y ahora que lo que hacemos es

que navegamos navegamos a esta ubicación

y en esta ubicación no llegamos con el

producto completo de hecho aquí cuando

visitamos la vista de view a quien

producto al llegar aquí al producto lo

que hacemos es que lo traemos de nuevo

lo traemos 915 away with provide y lo

traemos de nuevo y esta vez lo traemos

desde acá

y entonces lo que estamos trayendo es

únicamente la info del producto pero no

estamos trayendo la info de los precios

entonces lo que tenemos que hacer es

modificar o actualizar esta función del

producto de modo que detroit vaya sea

idéntica bueno muy similar a year active

brooks entonces aquí

aquí lo que haremos es que vamos lo

mismo aquí en get por beijing

estamos devolviendo el producto

únicamente con el de ira pero dónde está

la parte de precios ya tenemos qué

producto es igual a al día esto ya es un

objeto entonces antes de devolverlo lo

que haremos es acceder a los precios de

este documento entonces aquí simple y

sencillamente lo que haremos es copiar

esto de acá

lo pegamos aquí y es exactamente lo

mismo primero vamos poner el snap de los

precios obtenido todos los documentos de

la colección llamada precios que está al

interior de este documento el cual con

el cual estamos trabajando este es una

prueba viene de acá es que estamos

trabajando no lo queremos es que este

producto es objeto de producto le vamos

a agregar la propiedad de precio la cual

va a ser igual al snap de los precios

accediendo a docs el el primer hito de

lo mismo para el aire entonces ahora si

yo guardo vengo aquí a esto vamos a

volver al inicio

si yo agrego

aquí me marca errores nord y find

claro que nuestra -define porque aquí no

se llama snap aquí en active products se

llama es nada para que lo tengo ese

estar acá pero aquí el snap se llama en

realidad snap de

china

para que ayude a que veamos el pepino le

doy añadir el carrito visitó el carrito

y aquí en el carrito en pepinos frescos

veo que tengo en este rey donde tenemos

el price y el price haití perfecto ya

tenemos blind side' y en el contexto de

carritos y por qué estamos haciendo

estamos haciendo esto porque estamos

aquí en create checkout sesión y aquí lo

que vamos a hacer es pasar el price hay

de ok

muy bien y ahora tenemos esta función

que macri create seca obsesión que es la

función que vamos a ejecutar cuando

alguien quiera comprar y si tenga sesión

inicial vamos a agregar este documento

en el interior de costo en el sentir del

documento de la persona link en la

colección de chacao sessions y vamos a

agregar toda esta información porque

aquí estamos limpiando el carrito

estamos viendo como cantidad uno

obviamente esto tendría que ser dinámico

en su carrito deberían tener dos tres

cuatro o cinco objetos de ventas

detalles y aquí en price aid y estamos

pasando el price aid y de del objeto del

precio en específico creamos el

documento y ahora lo que va a pasar es

lo siguiente piense vamos a ver lo que

pasa voy a por default con y checa

obsesión

y aquí lo que vamos a hacer es de vuelta

a la vista de carrito aquí en la función

de compra vamos a importar import create

checkout sesión y aquí vamos a ponerle

create se cause acción recuerda que nos

pide el white y el carrito entonces se

dio ahí lo pasamos y usher punto white y

que recuerden que viene de acá del

contexto y lo vamos a pasarle el buen

carrito y carrito viene también del

contexto y esto lo vamos a ejecutar

tanto aquí en login

como acá en caso de que ya haya tenido

sesión inicial entonces ahora mismo como

yo tengo bueno no tengo sé si tengo

sesión inicial creo vamos a agregar

pepinos

vamos a ir al carrito en carritos de los

vinos frescos vamos

darle comprar y como ya tengo sesión

iniciada se ejecuta la función de compra

y esto me tiene que haber creado un

documento aquí me vengo post o merz me

vengo a este usuario te estés aquí tengo

mi su colección de check out sessions y

aquí tengo esta sesión este intento de

compra que acabo de hacer ahorita y bien

se la maravilla yo envió el documento

extra que está pendiente del documento

el fair si soy sabes que se acaba de

crear un documento con intento de compra

y lo que se extrae es que me lo modifica

yo envié nada más estos datos uno dos

tres cuatro cinco datos pero éste lo

modifica y me agrega y denuestos agrega

más me agrega sesión haití y me agrega

un y barrio está york eu- espera para

comprar entonces si yo la visito fíjense

que me va a salir esto de aquí pepinos

con limón y sal una maravilla muchachos

maravilla maravilla maravilla y

recuerdan este caso dívar yo quiero de

aquí sabes que llama repente mejor me

regreso me va a llevar a donde yo estaba

antes por eso le puse windows vacation

alguien vengo para acá y me trae aquí

en los trabajos 3000 ok entonces

ya le envíe el documento strike strike

ya me lo modificó ya me puse lo veré le

diga como yo como hago para enviar al

usuario a este checa windows muy muy muy

muy sencillo cuando sencillo es porque

cierto conocimiento sobre fire beige

presenció miren fire veis tiene esta

conexión snapshot con esta función lo

que nosotros hacemos es escuchar los

cambios de algún documento y en este

caso que va a escuchar los cambios de

que queremos escuchar cuando strike

agregue la url entonces aquí vamos a

después de haber agregado documento este

documento cuando se agrega nos devuelve

una información del documento entonces

nosotros diremos que el lighting del

documento es igual a lo que esto nos dé

bola aquí lo estoy de estructurando aquí

me devuelve documento yo lo estructuró

para sólo tener el aire bueno con eso en

mente vamos a escuchar en este documento

en específico entonces diremos un

snapshot y aquí tenemos que pasarle que

documento queremos escuchar yo voy a

escuchar el documento bueno sólo porque

también vamos a echar colección se iba a

escuchar un documento hay que pasar en

árabes no hay que pasarle él

el pan lo que ya tiempo vamos a irnos a

todos commerce diagonal con el de white

y de la persona

diagonal check out sessions

diagonal y vamos a escuchar el documento

de la sesión que acabamos de crear yo

creé esta que dice de 3 de x2 aquí vamos

a pasarle el aire y de este documento

que estamos obteniendo la que vale

clarísimo y ahora después de esto

después de pasarle que documento a

polución que va a escuchar hay que

pasarle a la función que queremos

ejecutar lo que cuando haya cambios

entonces yo aquí la ejecuta la función

que quiero ejecutar cuando haya cambios

va a ser una función de flecha y aquí

vamos a recibir el snapshot es decir

todos los cambios

entonces yo haré lo siguiente

vamos a decir que cada vez que haya

cambios cada vez que haya cambios quiero

que me asigne el valor de url

a la deidad del documento de la

propiedad r

es decir cada vez que haya cambios le

digo bueno a esta variable asignar el

valor de la propiedad de huele que

vendría siendo estar acá ok y entonces

lo que yo haré es bloquear en pantalla

url vamos a ponerle url desde snapshot

guardáns vale voy a guardar voy a

venirme para acá

vamos a agregar pepinos frescos otra vez

al carrito vamos al carrito y voy a

abrir mi consola

y dar compra lo que a pasar es lo mismo

me va a crear el documento obtengo shuai

de conesa y escucho los cambios del

documento y vamos a estar bloqueando en

pantalla la propiedad de url le doy

comprar

y aquí dice primero dice url de snapshot

on the fine y es que primero son de find

porque en los primeros cambios que

escuchan son los cambios que yo le envié

y aquí no hay url viendo más temas de

información blood and test on the fine

pero luego cuando strike me modifica el

documento sea hay cambios escuchó

nuevamente imprima nuevamente y ahora si

ya tiene valor esta url aquí está

entonces aquí en lugar de lograrlo en

pantalla lo que haré es lo siguiente voy

a decir si hay url quiero que me re

dirijas hacia esa ubicación ok pero

antes de redirigir nos aquí hay un

detalle este un lapso que está

escuchando constantemente son listener y

los listeners los observadores hay que

cancelar los entonces snapshot nos

devuelven la función para cancelar

función que hay que guardar una

constante entonces yo diré cancelar

streaming es igual a esto vale entonces

antes de irnos lo que yo haré es

cancelar string vale dicho que lo pueden

ver dice muy modernizada entonces esto

se puede hacer de forma recursiva no hay

problema y ya está ahora sí viene la

magia muchachos piense que tengo pepinos

frescos no saben que vamos a comprar

otro a comprar el coche de polito

añadirá carrito me vengo el carrito

tengo pequeños frascos y auto de toretto

si le doy comprar

me rendí y aquí me dice oye le vas a

pagar a las pitón y por eso es

importante ponerle el nombre porque esto

no te deja continuar sin ello

350.000 10 pesos por los siguientes

productos pepinos frescos deliciosos

pepinos con simon y sal auto de perdedor

brum aquí están mis datos ojo pueden es

utilizar cuentas falsas como estoy aquí

la mente sé que es nuevo de provecho

pamplonés tarjeta de verdad no les va a

pasar nada creo que este vamos a poner

42 32 42 42 42 y vamos a ponerle 00 25

puede ser 25 23 donde no traigamos

ponerle que te importa aquí vamos a

ponerle el dirección vamos a ponerle

calle jalisco mira que me lo busca esto

es la maravilla de estar en el ambiente

extra de su fin es la dirección es

checkout punto strike puntocom

los que vamos a ponerle todo esto bla

bla bla sí sí sí vivible y aquí vamos a

ponerlo en un disco lo que sea cualquier

cosa he estado mi amado jalisco

en la página de la que es más seguro que

voy a hacer vamos a darle en pagar

no

me lo procesa vamos algunos segundos

pensé que bonito y me envía a la

dirección que yo le provee ahora esté

aquí como estoy loca house este me va a

mirar siempre al inicio pero ustedes

podrían y cuando ya se se mande a

desplegar la aplicación ya les va a

funcionar las direcciones pero bueno

mientras ya pague y recibir la

notificación aquí en productos cuando

nos impulse a quienes stripes yo si me

vengo a clientes por revisar mis

clientes todos estos vamos a buscar a

test para ver qué test me acaba de pagar

350 mil pesos de forma exitosa aquí está

y le puedo reembolsar el pago no lo es

se lo envía un recibo y aquí tengo más

más este informe se juega lo

directamente aquí en saldos éste es

estos cifra en la vida real entendía

claro aquí en pagos y en todos los pagos

exitoso y los pagos incompletos estos de

unas pruebas que estaba haciendo antes

este exitoso vale y aquí sí voy a

productos por ejemplo el auto de toretto

y aquí podría llover este los

el equipo de las ventas cruzadas en caso

de que se haya combinado fíjense cómo

verlo así por ejemplo pero tienes el

punto es que para la parte de amd toda

la parte de

digestión de dinero los productos los

pagó los clientes con la gestión strike

lo vuelve muy sencillo de modo que éste

sólo se concentren en esto en su página

como pueden ver es sencillísimo lo único

que hicimos fue lo siguiente

crear un documento y ya está piense es

esto lo que hice aquí en create chacao

sesión creó este documento up doc y

luego escuchó los cambios y lo llevó a

la web facilísimo no hay que hacer más

extranet y fair game gestionan todo por

nosotros entonces es así como estaría

funcionando esta página

aquí está si me pregunta está feliz se

vaticina felicidad antes de continuar lo

va a dar unos pequeños toquecitos toques

que voy a mostrarles a través del poder

de la magia de la edición para que no

tengan que perder tiempo viendo a

meditar todo esto y aquí está el chico

ya estamos de vuelta gracias al poder de

la edición no lo ha editado muchísimo

esto es un breve tutorial dejar la vida

aquí pero si después de unos cuantos

estilos este sermón como pueden ver

tengo aquí una parte superior

tengo un buscador que no funciona tengo

una vista de carrito podemos ver al

inicio que estamos de vuelta al inicio

tendremos un pie de página que mazda con

una vista de perfil donde este es el

usuario y bueno ya hemos visto que

podemos añadir productos el carrito por

ejemplo yo añado a quien sale la

notificación de que tengo este producto

y amigos que podemos comprar productos

pero ahora y para terminar lo que me

gustaría hacer es aquí en esta vista de

perfil y lo que sería que se mostrará

todas las compras que hemos hecho en

este caso todas las compras que te estés

puntocom ha hecho y recuerden que más

que recuerden tienen que saber que por

ejemplo aquí te cuentan costo merz cada

usuario tiene sus datos tienen sé qué

obsesión si tiene aquí payments entonces

es esta parte de pemex que podríamos

mostrar para que sepamos qué es lo que

ha comprado la presa por ejemplo en éste

payment de 350 mil lo que esta persona

compró fue vamos a ver tenemos chargers

vemos de ira

vemos aquí hay ítems esto lo que esta

persona compra por 150 me compro este de

acá que es de 10 pesos los pinos frescos

y tenemos en otro alimento este de 350

mil ok entonces vamos a traernos aquí en

este panel para que no esté panel de

cava que la persona de partido que ha

comprado entonces aquí de vuelta en

nuestro folder en funciones vamos a

crear una función que se llame get up

get game by you haití ok y aquí en ya

tenemos vamos a trabajar como siempre

con fire store por lo tanto vamos a

importar el buen dar veis y vamos a

importar

colección y que dos

sí

y de aquí vamos a traerlo desde fire

with fire store y ahora vamos a crear

esta función que va a ser asíncrona que

llamaremos get payments by wajdi y

actividades que recibamos un why did y

aquí vamos a tener los todos los pagos

que aquí solamente es uno de momento por

ellas que tengamos traigamos todos todos

y payments vamos a esperar que docs y en

windows pasamos dar a ver si pasamos la

colección pedimento este mal aquí vamos

a comenzar desde costo merz luego vamos

a pasarle

el wide y del usuario que es estar acá y

lo vamos a venirnos a 20 para que esto

funcione obviamente esto tiene que ser

un temple string nos ponemos el back

tech y aquí

y aquí esto esta amable lo ponemos así

bueno así no

y aquí están los primeros entonces vamos

a

a exportar esta función que nos va a

regresar una raíz de todo esto y ahora

hace falta adicional a esto acceder a

esta propiedad de ítems ok ay temps

entonces vamos a añadir esta función a

nuestros exports algo más que hice

ahorita que estaba editando

estos archivos para que sean más fáciles

trabajando con los imports entonces aquí

en perfil vamos

a importar a qué

dimensión y white

y de hecho esto está mal porque esto

vamos a ponerlo aquí en un segundo

aunque aquí estamos de vuelta vale

entonces ahora qué es lo que queremos

queremos que si haya usuario bueno si

hay usuario queremos traer sus pagos

entonces aquí en la función en este

componente de perfil en el estoy un

poquito más despacio damos aquí en esta

función en lo que se me ocurre que

podemos hacer es primero crear un estado

que llamaremos payments sed payments que

inicialmente estará en una rave un array

vacío ya que marca marca error porque

usted no está definido mira no sé qué

está pasando hoy 10 no me está

importando nada entonces estamos de

vuelta y ahora aquí también de una vez

aprovechando vamos a traernos un

efecto ok entonces aquí vamos a correr

una función

que va a ejecutarse cada vez que el dios

el cambio entonces y dentro de la

función vamos a crear a una otra función

que se llame

payments

aquí en get payment vamos a revisar

bueno primero vamos a revisar si si hay

un usuario vamos a poner si no hay

usuario nos regresamos antes se cancela

torton ejercicio y usuario podemos

continuar entonces veamos qué pedimentos

es igual a way get game by white y le

pasamos en giuseppe y white y entonces

guardamos esta información en este

estado por lo tanto aquí

vamos a hacer lo siguiente diremos si

pemex tiene más de 0 entonces lo que

vamos a mostrar en pantalla será será

será será

vamos a hacer esto un día

y al interior vamos a tener

no ahora que lo pienso no simplemente es

mayor a cero entonces vamos a limpiarlo

donde por cada payment vamos a regresar

una hora así

vamos a revisar que será bueno regresar

vamos a ver aquí los datos en pemex

tenemos

tenemos el método de pago tenemos los

precios

tenemos

no tenemos fecha cerraron vuelvo no

tenemos fecha aquí está create aunque

station times están muy probablemente

esta vez en las fechas y aquí vamos a no

vamos a pasar fecha entonces vamos a

vamos a pasar primer down

con sí sí vamos a hacerlo sencillo temen

a más

consiguiendo

[Música]

si aman entre cien

y vamos a dejarlo así aquí me marca

porque el marcador sabíamos

[Música]

regresamos

este destaca este desde acá entonces

estos están sobrando ok entonces de

vuelta aquí

si yo guardo y actualizo

mira no pasa nada

y es porque aquí no estoy llamando la

atención otra vez no creo que me haya

gustado tres veces seguidas en el mismo

vídeo dice on fire server formación

colección que nos dijo wong un tipo como

que se refiere a estar acá

collection es igual al costo merz pero

no las que llamando con un antifaz

cerrado

vamos a hacerlo entonces así camps

collection red es igual a

copiamos estuve acá y no tendría que

haber problemas y que vamos a pasarle

con o discogrande anti paz

lo cual significa que él no me está

grandoli white

white

vamos a ver si

vamos a ser por usar

y mira si tenemos si whitey

esto tendría que ser snap entonces lo

que haremos es

y claro aquí esto está mal esto va a

canje debe

aunque ya ahora sí

finales punto ese pnr formación es docs

aquí está ya perdón es que es noche de

este gran problema que tiene baby fue

modificado aquí pero hacemos una

referencia la colección dar veis el pad

lo traemos estos datos que son un snap

lose de snap accedemos a su propiedad de

docs loma pidamos para regresar el

deidad de cara snap y lo devolvemos aquí

entonces de vuelta acá en perfil lo que

estamos haciendo es que agarramos estos

payments reciclamos por ellos y

regresamos la cantidad que recordemos

aquí se pagó esto de aquí y entonces

aquí vamos a hacer algo más interesante

este tip además de regresar la cantidad

vamos a regresar aquí dentro del mes pan

aquí vamos a ciclar por la propiedad de

aire es entonces que diremos que un

empeine en punto aire punto más por cada

aire vamos a regresar un párrafo que

diga aire vamos a ver cómo era la

estructura

vamos a pasarle el tiene nombre no tiene

nombre

así descripción aquí está aire en punto

de script

ok guardamos y ahora aquí debiera decir

se pagó 350 mil por pepinos frescos y

auto de toretto y hacía caso a este día

vamos a darle un poquito estilo vente

wing diremos que sea más ancho que sea

flex con airam center y georges defy y

berlín

bueno tenemos que darle estilo es estar

acá next que ahí está

y a este vamos a pasarle un poco de

margen

y te vamos a envolverlo en un h 3

lo que no tenemos porque nos está

poniendo en filas separadas no creo que

sea por el espacio flex

cuando por alguna extraña razón no no me

no me está aquí arrestándolo pero no

importa lo que importa es que ya tenemos

un perfil en el cual mostramos el dinero

mostramos los objetos y ya nada más para

terminar vamos a hacer una última compra

vamos a comprar otro auto de teletón

vamos a añadirlo al carrito venimos para

acá le damos en comprar aquí por ejemplo

no estaría mal que darle comprar se

desactivará el botón en lo que esperamos

la url de strike entonces aquí vamos a

pasar otra vez los datos 42 cuenta 2 42

42 que vamos a hacer un

03 50 y en un 23

vamos a ponerle

sí sí sí

[Música]

baja california surge y le damos en

pagar decimos que no gracias a

procesando nuestro pago y una vez que se

ha confirmado

debiera de enviarnos de vuelta para acá

entonces qué bien esta parte donde

debiéramos enviar esta persona acá al

perfil y aquí piensa que ya tengo otro

pago tenía este de los pepinos frescos y

ahora tengo este otro pago de 350 mil

nueva con eso estaríamos terminando el

tutorial del día de hoy y ojo que ésta

podría ser una primera parte dependiendo

de desde que me digan porque muchísimas

cosas todavía por agregar por ejemplo

hace falta un buscador hace falta una

página que sea en categorías por ejemplo

y entonces hace falta un buscador lo

primero lo segundo una página de

categorías lo tercero hace falta que en

esta vista de productos tengamos aquí

una barra lateral en la cual podamos

filtrar por color por tamaño por precio

por categoría es lo tercero filtrado lo

cuarto creemos que no necesitamos que el

carrito sea persistente ahora mismo

tengo aquí en mi carrito este objeto

pero si lo actualizo la página sorpresa

sorpresa el carrito se pierde esto es

muy fácil de hacer lo hacemos con una

no costuras por ejemplo estos días lo

cuarto o quinto pues aquí el panel de

control que tenga más sentido

podríamos revisar el tema de los

descuentos este podríamos revisar qué

más tiene steam por ejemplo si entramos

a amazon

vamos a buscar aquí no lo sé tabletas

si por ejemplo tener estadísticas de

cuáles son los más vendidos por ejemplo

que tengamos una colección aquí y de

este en los productos se vaya

registrando el número de ventas que cada

que salga una venta se corra una función

y nos lo actualice por ejemplo esto lo

que les decía la página del panel de

filtrados reseñas hacen falta reseñas

por ejemplo que cuando tenemos algún

producto tengan su calificación de

reseñas podamos dejar reseñas eso sí que

hace falta y qué más podríamos añadir

una lista de deseos para los usuarios

que además de que me prefiere encuentren

sus a sus compras se encuentran a wish

list productos recomendados con base en

la meta de irán ya lamentará y recuerden

que los productos tienen aquí está meta

está la categoría color está ya estaría

genial que aquí no mostrarán bueno aquí

aquí lo mostramos en recomendados por

ejemplo y pues hay muchas cosas que

hacer obviamente está diseñando es para

nada responsivo puede tener este enlace

falta de este mucho trabajo pero pero

pero esto es una muy buena base y quiero

pararlo hasta aquí pero no porque ya ha

subido bastante largo y número dos

porque creo que bueno dependerá o

depende ya de ustedes cuánto

personalizar su tienda aquí en lo

importante y lo que estoy que llevar es

cuán fácil es tener a tienda en línea

con fair beige y strip ok entonces este

ha sido el día de hoy chicos y les ha

gustado por favor real me gusta

suscríbase para ver más contenido como

este y activen las notificaciones para

que no se pierdan ningún vídeo mío bueno

antes de irme antes de irme este me

gusta invitarlos a que se suscriban a mi

boletín 123 para de pge la dirección la

encuentran en la descripción del vídeo y

cada semana van a recibir consejos y

artículos personalmente seleccionados

por mí cuando ahora sí con los términos

biológicos nos vemos
