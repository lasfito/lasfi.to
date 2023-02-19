---
type: tutoriales
url: correr-contenedores-google-cloud-run
enlaceyt: https://youtube.com/embed/TVm_Qaw41HU
date: 2022-04-28T16:33:54.272Z
title: Cómo correr contenedores en Google Cloud Run
metaDescription: >
  Aprende cómo correr tus contenedores Docker en "la nube" de forma serverless
  gracias a Google Cloud Run #docker #tutorial #googlecloud
tag:
  - Google Cloud
  - Desarrollo 101
autor: Adrián Salgado
introThumbnail: Aprende cómo correr tus contenedores Docker en "la nube" de
  forma serverless gracias a Google Cloud Run
keyword: contenedores google cloud run
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/26-google-cloud-run%2F26-google-cloud-run.png?alt=media&token=c1cc65d3-f9e9-45ce-8a14-9c694473991d
---

## Transcripción

hola chicos que tal bienvenidos seguro

que les ha pasado que ya tienen una

imagen de alguna aplicación y se

preguntan qué es lo que sigue dónde

pueden mandar la producción cómo pueden

utilizar las bonanzas de la famosísima

nube bueno pues el día de hoy les

mostraré cómo se pueden tomar sus

imágenes cargarlas a google cloud y

hacerlas correr con cloud front verán

que es una de las maneras más sencillas

de trabajar con contenedores y ya verán

por qué lo provoqué necesitamos es una

cuenta en google cloud platform si no

tienen cuenta aprovechen que dan de

pruebas gratis de tres meses y una vez

que hayan creado su cuenta necesitamos

tener un proyecto desde el cual

trabajaremos en este caso yo va a crear

un proyecto nuevo el cual llamaré tuto

clown

vamos a llamarlo así en este proyecto y

haremos clic en crear y mientras se crea

se preguntarán qué es cloud ground es

algo como ocurre neri es usado como ella

abriese mastican trainer no nada listo

cabrón es una manera de correr

contenedores de manera servirles lo cual

significa que todo el lío y toda la

configuración la gestión a google y

ustedes no tienen que preocuparse por

absolutamente nada si acaso tienen

bastante libertad para personalizar el

servicio pero es muy pero que muy

sencilla de usar ahora ya que se ha

creado nuestro proyecto vamos a

seleccionarlo y fíjense que aquí arriba

tenemos este proyecto seleccionado el de

tuto clau don fito ok ahora lo primero

que hay que hacer es enviar la imagen

que tenemos aquí en nuestra máquina en

local enviarla a google clave y ahora lo

óptimo lo profesional sería utilizar las

herramientas de comando de google cloud

pero es un tanto tedioso instalarlas y

una muy buena alternativa y bastante

rápida también es la siguiente lo que

haremos es que esta imagen que tenemos

en local cambiar el 2° para ello también

algo como docker 2 y esquís y si

escogemos el nombre de la imagen que

queremos enviar al hub de lo que lo que

lo que yo hago es tomó esta imagen la

envió a uocra job el historia está

disponible ahora lo siguiente que haré

es desde aquí desde mi consola de cloud

de google cloud accederá a klaus ya que

no es ni más ni menos una terminal para

gestionar todos mis proyectos y recursos

aunque aquí esté fíjense que el nombre

de la terminal concuerde con su proyecto

en mi caso no concuerda y lo que haré es

es cerrar esta acá y tras haber abierto

una nueva ya concuerda pero bueno

dejando de lado aquí pueden ver que

concuerda también lo que haremos es lo

siguiente esta terminal se está

ejecutando en una máquina remota que

tiene acceso a todos nuestros recursos

entonces lo que haremos es primero

hablamos la imagen desde doctor hopp y

lo que yo haré es eso precisamente

docker pulgas fito

trap y cierto

y hablamos la imagen a esta computadora

que tiene este privilegios y lo que

haremos es renombrar la y porque la

vamos a renombrar la tenemos que

renombrar para poderla enviar al

registro de imágenes privados de google

en su propio registro de imágenes y

ensayado tenemos que enviar la nuestra

para ello escribiré algo cómodo crack un

amigo que imagen quiero renombrar quiero

renombrar estar aquí

y la quiero cambiar a ojo muy importante

que esto es

la nomenclatura adecuada o necesaria

primero escribimos gsr punto y yo que

significa google clave registry luego en

una diagonal vamos a colocar el light y

del producto con el cual va a estar

vinculada en este caso dije producto que

si proyecto no se exige por el producto

proyecto growth of maryland y el

proyecto que encontramos aquí para el

tuto cloud round fito lady es éste voy a

copiarlo y voy a negarlo por acá y ahora

una diagonal y el nombre que le queremos

dar la imagen así como en la etiqueta o

tag que queremos asignarle yo le

llamaría costo más rápido con la

etiqueta de vamos a ponerle

v 1

los renombrados y ahora si revisamos

nuestras imágenes verán que tenemos está

aquí

contact 1 pues muy bien lo que haremos

es tomar esta imagen

vamos a limpiar la consola y vamos a

empujar esta imagen ya renombrar con la

nomenclatura oficial la vamos a empujar

y automáticamente la estaremos enviando

al registro rival ok vamos a presionar

aquí enter

y como pueden ver aquí me dice que está

re intentando enviar está intentando

enviar esta imagen al registro privado

pero no lo logra y no lo va a lograr

porque por defecto todo proyecto nuevo

tiene las apis y recursos limitados para

protegernos de no incurrir en gastos que

no planea vamos por ello lo que tenemos

que hacer antes de poder enviar aquí voy

a detener esto antes de poder enviarlo

tenemos que activar la app y del

registro privado de google muy sencillo

aquí en el menú principal vamos a

deslizar hasta

hasta con scheiner registry que está

aquí y quiero decir qué sorpresa

sorpresa no está activado vamos a

habilitarlo y una vez habilitado ya

podremos enviar imágenes al registro

privado de google on sale unos cuantos

segundos no toma más y podemos revisar

las notificaciones

y listo ya está está disponible aquí

puedo si acaso puedo actualizar la

página y ya debía aparecer me una

interfaz distinta habilitada volvamos a

abrir el cloud show

estamos aquí en tuto clausuran fito y lo

que haremos es una vez más empujar

nuestra imagen renombrada con la

nomenclatura al registro privado de

google vamos a presionar enter y ahora

noten como ya va a funcionar ya cargar

todo como debe ser de unos segundos en

lo que se envía y mientras tanto pueden

darle me gusta y suscribirse para seguir

recibiendo más contenido como éste

una vez que se haya enviado nuestra

imagen ya está disponible en todos los

recursos de google cloud estas se

preguntarán oye pero las pitó si tu

imagen ya estaba en doctor hopp porque

tenías que enviarla a google cloud

también al registro privado bueno lo

tienes que ser así porque un club no

puede jalar imágenes de lucro y

solamente dejar la imágenes desde su

propio registro pero bueno ya que está

cargada ya que tenemos el chat de

confirmación ya podemos cerrar este

klaus ya en esta terminal y aquí en el

menú vamos a dirigirnos a claro yo aquí

ya lo tengo fijado pero lo encuentran

aquí abajo junto a

junto a lo que no se repite

aquí están sin servidores servirles aquí

está claro hagamos clic en él y por

defecto como es un proyecto nuevo

tenemos que habilitar los servicios muy

bien ya que está habilitado mantener

esta ventana que es para poder lanzar

nuestras imágenes a producción de manera

servirles con cloud room y como verán es

son muy muy poquitas opciones las que

tenemos es muy poco lo que tenemos que

trabajar y vamos a comenzar lo que ya ya

este es el paso 1 ahora sí paso 1

oficial tenemos dos opciones de lanzar

nuestras imágenes la primera es con un

contiene con una imagen en en google

registry es la primera opción o la

segunda opción es integrar un proceso

continuo de construcción de imágenes de

momento vamos a revisar la primera

revisaremos ambas pero comenzamos por la

primera aquí me pide la imagen para

crear el contenedor y al hacer clic en

seleccionar aquí aparecen todas las

imágenes que tengo en mi registro de

este proyecto vamos a hacer clic en este

en expandir y dónde escoger este de aquí

que es el tag b1 le asignamos la

selección lo siguiente es darle un

nombre al servicio vamos a llamarlo

custom streep y anne imagen no vamos a

ponerle registro la región donde quiero

correr de forma servirla es este

contenedor vamos a correrlo en las vegas

y ahora al ser tecnología servirles lo

que ocurre es que los contenedores los

procesos no se están ejecutando de forma

continua esa es la magia de servirles

que sólo se van a ejecutar cuando se

requiera y por ellos que tenemos dos

maneras de pagar por este servicio la

primera la extra por defecto es

efectivamente sólo paga cuando se

ejecute su contenedor la segunda manera

sabes que quiero que esté siempre el

acepte o asignada por si tengo un flujo

muy pesado por si se tiene mucho tráfico

en este preparado vale nosotros nos

quedaremos con la primera dependiendo de

aplicación alguna puede ser mejor que

otra la norma es que elijan esta y luego

aquí nos dice oye tu aplicación cuánto

quieres que escale cuántos contenedores

máximos puedes esperar aquí podemos ir

sabes que quiero que

deténgase pero no me preocupa tener

algunos siempre corriendo y como máximo

33 a lo mejor sólo quiero 15 para que no

sea que pase algo y termine pagando de

más y ya por último si nuestra

aplicación es pública escogemos permitir

todo el tráfico y permitir invocaciones

sin autenticar sus aplicaciones para los

internos en alguna empresa que tengan su

propia red que tengan algunos proyectos

en google cloud puede jugar con esta

configuración para delimitar permisos y

accesos presionas el caso así como da

por defecto basta y por último como les

dije tenemos cierto nivel de

personalización en estas opciones

podemos configurar los detalles de cómo

queremos que se estén corriendo estas

estos contenedores por ejemplo podemos

asignar un puerto podemos asignarle un

comando vamos a asignar argumentos lo

mismo que ustedes harían aquí en local

para el famosísimo doctor o lo mismo

expresarían acá lo pueden hacer aquí y

pueden asignar este variables de

entorno

aquí para agregar variables para su

aplicación pueden pasar secretos podemos

modificar las conexiones y seguridad

pero aquí en caso que se van a conectar

así tiene alguna virtual private

connection que sigue que sigue que quise

yo pero también muy importante al ser al

ser server les podemos definir cuánto

poder computacional queremos que se

asigne al momento de que se ejecute en

contenedor cuando alguien lo solicite en

mi caso vamos a poner aquí componer

mucho sufriendo de ponerle 2 gigas de

memoria y un 7 está bien y listo con

esto podemos hacer clic en crear y ahora

lo que va a suceder es que básicamente

estamos yendo a google google quiero que

esa imagen que yo te pase quiero que

vayas creando contenedores conforme la

gente vaya está accediendo a una

aplicación que mucha gente accediendo

quiero que llegues a correr hasta máximo

15 contenedores porque si no pusimos y

si no hay gente accediendo quiero que no

me corras nada por eso dejé cero

contenedores y esa y eso es lo

beneficioso de servirle es que realmente

es pagar por lo que se usa a diferencia

de quizá a correo el contenedor es una

máquina virtual que la máquina virtual

está siempre ejecutándose aquí

terminamos hablando un poquito dinero

dependiendo de cómo funcione su

aplicación

y ahora qué va a suceder es que golpeó

este me está preparando todo este

servicio este servicio de cabrón y me va

a asignar una url para mi aplicación

otra maravilla es que estas urls ya

traen integrado un tlc que básicamente

nos da una conexión segura va lento así

que vamos a darle unos cuantos segundos

y listo

ahí lo tienen y aquí como pueden ver

este ya me asignó una url y ahora mismo

si yo me vengo para acá aquí estás y yo

accedo al servicio

notarán que aquí están las métricas

ahora mismo no hay nada ocurriendo y

recién vamos a comenzar de que está la

url que me asignó google si yo hago clic

en ella me va a dirigir a mi aplicación

pero notarán que de momento no aparece

nada y no aparece nada porque había

configurado que si no hay gente

extendiendo quiero cero contenedores

entonces este tiempo que tardan acceder

es el tiempo en el cual google me lanza

un contenedor en la orquesta todo y

listo ya puedo acceder y ahora este si

por ejemplo me vengo para acá y

actualizó este panel deberíamos de ver

que aquí se va a registrar una solicitud

contará un poquito en agarrar vamos a

acceder unos cuantos más tiempo y aquí

está y como pueden ver es conexión

segura google nos asigna una url y un

tlc sin tener que ser absolutamente de

acceso lo cual diferencia bastante

respecto a otras plataformas que es muy

muy muy gestionado por google plan

tenemos bastante libertad en cuanto a

ciertas configuraciones

como les dije hay dos maneras de llevar

sus imágenes en local a google cloud

from esta es la primera

tenemos nuestra imagen la enviamos a

google cloud a través del doctor hopp y

luego la enviamos al registro privado

desde google pero qué pasa por ejemplo

voy a voy a limpiar esto

qué pasa por ejemplo si ustedes están

trabajando una aplicación que tiene

constantes cambios y que a través de

esos cambios están generando imágenes

una y otra y otra vez por ejemplo que yo

tengo esta carpeta que se llama costo

image a la cual voy a acceder

y vamos a abrirlo en nuestro editor en

caso webs en mi caso

y aquí lo tenemos

o que tenemos esta aplicación en la cual

yo estoy haciendo cambios estoy

configurando aquí puntos de entrada a ti

este estoy haciendo cambios etcétera

esta es mi aplicación la cual yo estoy

envolviendo imagen con un archivo de

docker find hago mis cambios la vuelvo

imagen hago mis cambios la buena imagen

como puedo hacer para ahorrarme todo es

el proceso de estar si no lo cree joven

y todos muy muy tenso bueno pues para

eso google cloud nos brinda una segunda

manera de trabajar con cloud en lugar de

tener que venir acá y escoger imágenes

que estén a nuestro registro lo que

podemos hacer es decirle a cloud en

google cloud que él se encargue de las

imágenes a través de un repositorio

fuente para lo cual mi aplicación de acá

tiene que estar en algún depósito el

remoto lo más común dibujo por ejemplo

como pueden ver este ya tenemos aquí

nuestro comité vamos a enviarlo a un

repositorio que estoy por crear

el cual llamaremos

vamos a llamarlo tuto cloud

y vamos a ver lo público

y vamos a enviar lo que tenemos aquí

desde local

a un repositorio remoto ok ya está y

aquí tenemos un enlace como pueden ver

aquí está nuestra aplicación y recuerden

esta aplicación está siendo cambiada

constantemente y aquí tenemos un archivo

de docker file para generar imagen bueno

pues con esto lo que haremos es venir

aquí es el google camp sabes que quiero

crear una instancia de claro pero que

sea continua progresamos que quien será

witthaut beauty y aquí tenemos que como

es un proyecto nuevo habilitar las apis

naturalmente vamos a habilitar estar acá

vamos a ver unos cuantos segundos y

mientras tanto si les ha gustado

olvidado si les está gustando l me gusta

o dejen los comentarios algún tutoría

que les gustaría ver puerta pero bueno

ya que se habilitó a lápiz vamos a

escoger de donde queremos este estar

creando continuamente las imágenes pues

hemos quitado el repositorio que se

llama tu top coat room vamos a buscar

cada tutor

cabrón sí sí sí entendemos esto aquí

opciones avanzadas este no nos interesa

siguiente

y aquí nos pregunta en qué rama nuestro

caso estamos en máster

y por último nos pregunta oye cómo

quieres hacer esta construcción de

imágenes pues a través de un rocker file

que como indicamos aquí está en el

directorio raíz del fallo

bueno habiendo hecho esto vamos a darle

click en guardar ya hemos configurado

nuestra secuencia de vigo así es como se

llama esta función este servicio vamos a

ponerle

con bout igual lo mismo algo como los

ángeles a que igual ser instancias

máximos y en todo tráfico sin autenticar

para que sea público y en memoria vamos

a pasarle 2 gb habiendo hecho esto nos

hace clic en crear iba a suceder

exactamente lo mismo que hace rato con

la diferencia de que ahora lo primero

que hará google es construir una imagen

con primero aquí son más pasos los que

hay que esperar para que esté corriendo

nuestra aplicación en la nube de manera

servirles

y una vez que se ha terminado de crear

ya podemos acceder a la aplicación aquí

con el enlace lo cual como hace rato si

no tenemos ningún contenedor si no

estamos empezando de frío curva tengo

que crear este primer contenedor para

recibir esta solicitud que acabo de

hacer y así poder acceder a la

aplicación pero como pueden ver y

comprar lo bueno con convive funciona

exactamente igual con la diferencia de

que por ejemplo si yo vengo aquí a mi

aplicación y hago cambios por ejemplo en

esta parte de acá no se cambió todo esto

de acá cuando lo que yo podría hacer es

venir a actualizar mi repositorio en

github esto se actualiza con los cambios

entonces google cloud detecta estos

cambios y me crea una nueva versión con

los cambios más recientes con las

modificaciones mejor dicho y algo muy

general es que como les dije podemos

administrar el tráfico y que podríamos

hacer pruebas y sabes que envía 50% de

tráfico a la nueva versión y 50% a la

versión anterior esto para hacer pruebas

y como pueden ver es muy sencillo tiene

muy fácil de gestionar y si acaso

requerirán más control en cualquier

momento pueden transferir todo lo que

tienen claro no lo pueden transferir a

gobernar y para que tenga más detalle

fin bueno con esto es que terminamos

este vídeo del día de hoy espero que les

haya gustado regalen me gusta y

suscriban separan más contenido en caso

de que hayan aprender algo nuevo y por

último encontrarán en pantalla dos

vídeos

sobre mi canal que espero que puedan

seguir revisando para que continúen

aprendiendo más sin relleno como nación

en este canal nos vemos
