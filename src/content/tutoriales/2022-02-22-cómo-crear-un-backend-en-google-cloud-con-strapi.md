---
template: tutoriales
url: crea-backend-google-cloud-strapi
enlaceyt: https://www.youtube.com/watch?v=BHly5BDJ04s
date: 2022-02-22T00:09:02.438Z
title: Cómo crear un backend en Google Cloud con Strapi
tag:
  - Programación
  - Google Cloud
autor: Adrián Salgado
publicoObjetivo: ''
keyword: strapi google cloud
thumbnail: /assets/11-strapi-google-cloud.png
---

\## Transcripción automática

hola chicos que está bien venidos les

voy a mostrar cómo desplegar o cómo

andar a correr con un backend esté aquí

en google platform y aunque lo voy a

está haciendo aquí en esta plataforma de

google o cierto es que debiera ser muy

similar en cualquiera de los otros dos

grandes proveedores de nube que son el

dobles amazon y asur de microsoft si no

están familiarizados con su rap y

básicamente su rapidez es en esencia un

administrador de contenidos un sms que

nos permite además de crear contenido y

organizarlo en bases de datos además de

ello éste nos expone y nos permite crear

puntos de entrada apuntó xavi para

utilizarlo con alguna aplicación por

ejemplo en este caso yo estoy simulando

que se va a atender de una tienda de

e-commerce en la cual tengo aquí unos

productos con sus características y

strap y expone por nosotros son puntos

de entrada para que podamos consumir

esta información es solicitando la como

pueden ver aquí mandan get yo tengo la

información y no sólo ello también

podemos este ejemplo que el otro para

productos aquí vamos a crear productos

probados a través de un post le doy a

enviar y listo ya me lo creo si yo me

regreso para que haya actualizado la

página verán que aquí está producto

prueba 22 22

además de ello éste vamos a crear este

aquí también

además de ello con contrapié a través de

usuario podemos crear documentación de

modo que quede documentado venga valga

la redundancia en nuestros apis nuestros

puntos de entrada y por si fuera poco

también podemos hacer gestión de

contenido multimedia por ejemplo poner

aquí y cargar algún archivo vamos a

cargar este gato loco le damos cargar

extra y gestiona todo esto no hay que

escribir código no hay que escribir nada

de código para crear este las

colecciones quedan las apis crea los

tipos de contenido y lo mejor es que es

trap y se integra completamente con

todos los servicios éste nativos desde

la nube por ejemplo lo vamos a integrar

con una base de datos en este caso

posibles puede ser si cue puede ser

mongodb y lo vamos a integrar con este

un servicio de almacenaje o

almacenamiento nunca he aprendido cómo

se dice por ejemplo aquí y actualizó y

vean que la foto que va a subir de gato

loco aquí está el gato loco en normal

alguien pequeño y esto nos expone un una

url para ver los archivos y mostrarlos

en nuestra aplicación que podría ser una

tienda con sufren gol favorito pues

sería activo etcétera en fin creo que

viable demasiado este sí les interesa

pues acompáñenme en este vídeo

\[Música]

vale el primer paso bueno antes que nada

recordarles que voy a estar tecleando un

par de comandos en este tutorial todos

los comandos que utilice para la consola

los van a encontrar en la descripción

del vídeo lo primero es visitar cloud

punto google.com esta es la página de

entrada una página de ventas de la

plataforma de nube de google y aquí van

a poder comenzar gratis les va a pedir

que accedan a su cuenta les van a dar 90

días de uso gratuito y adicional al uso

gratuito les van a regalar creo que son

300 dólares en caso de que utilicen

cosas que no son gratuitas entonces no

se preocupen pueden pueden dar a correr

sus suban gente de forma gratuita

aprovechen oferta de hecho no no es

propia de google todos los grandes

proveedores de nube pues en este periodo

de pruebas bueno ya que hayan creado su

cuenta gratuita y ya que hayan esté

configurado todo este tema van a acceder

a la consola entonces aparecerá la

consolación esperan algún botón como

éste o pueden teclear con su punto

cloud.com puntocom ok y aquí la idea es

que les va a pedir que hagan algún

proyecto este espero entendido que capaz

de volver

entramos a cannes o punto a punto de

goal.com

y aquí vamos a crear un proyecto vale

estos son proyectos que yo tengo voy a

desde aquí arriba debería decirle

selecciona un proyecto o crea un

proyecto vamos a crear un nuevo y vamos

a llamarlo yo lo llamaría

llamarlo tutorial youtube

rápido basta con que coloquen el nombre

del proyecto crear aquí nos va a

aprovisionar todo este espacio y

servicios para el proyecto como ya saben

no voy a tomar mucho tiempo lo

seleccionó lo puede seleccionar desde

desde la notificación o desde aquí en

todo momento que entren a la consola que

entren a home

debiera aparecer lees algo más o menos

así entonces desde aquí pueden escoger

sus proyectos de mente sólo tengo este y

aquí no se puede ir añadiendo más el

primer paso ha completado crear un

proyecto ahora qué es lo que haremos

extra pinos nos gestiona y nos facilitan

nos ahorra escribe el código para tres

grandes este elementos de un valle en el

primero las apis no tenemos que tocar

nada de código podemos generar las apis

y los tipos de contenido con un

administrador gráfico y lo segundo rap y

también gestiona los documentos y

archivos y cargas y todo eso es lo

segundo y lo tercero es trap y también

gestiona nuestra base de datos por

nosotros no hay que escribir este como

si dice consultas decir guau de decir

live from usted y todo eso no hay que

hacer lo único que hay que hacer es

propiciar strap y el ambiente necesario

para que corra estas tres funciones para

ello aquí en google cloud platform de

este lado encuentran del medio de

navegación podrán que muchísimos

servicios lo que les recomiendo que

hagan es lo siguiente vamos a éste a

fijar los servicios con los cuales

estaremos trabajando para fijar los

servicios es muy sencillo abre el menú y

vamos a buscar primeramente computing y

aquí hay un pequeño pin para fijarlo lo

siguiente es si con bases de datos y lo

ponemos y lo tercero es almacenamiento

en cloud storage que debiera estar por

lo que menos alta y gentes

roasters son buenos servicios hizo que

es de los que menos tiene amazon en

verdad es un laberinto muy bien que

piden ya si ue y claus estrés fijados

para que noten estar navegando y lo

primero es crear una instancia de

máquina virtual lo que vemos es lo

siguiente vamos a habilitar la api

aquí nos esperamos a que cargue lo

queramos es lo siguiente el código de

este va a quien tiene que estar

corriendo en alguna computadora y

obviamente no puede ser la nuestra

porque la nuestra la pagamos y

utilizamos para otras cosas en estas

siempre encendidas siempre corriendo

para ello es que estas compañías

microsoft este amazon google oracle y

demás ellos de rentan computadoras por

así decirlo para que corras tico dio

este concepto es es uno de los pilares

detrás de la famosa nube y lo queremos

vamos a rentar una computadora a un

servidor mejor dicho para que corra el

código de estar aquí y funcione como

nuestro back en el cual vamos a estar

consultando y realizando conexiones

cuando lo que toca es esperar a que se

habilite está a pie para poder crear una

instancia de máquina virtual muy bien

una vez que han habilitado la app y les

deberá aparecer una ventana más o menos

así que de hecho algunas veces ya bien

habilitada por defecto alguna vez es lo

que va a pasar es que cuando hagan clic

acá en instancias de bm automática

andrés aparezca esta ventana damos clic

en crear instancia vamos a crear vamos a

configurar qué características queremos

que tenga esta computadora que vamos a

restarle a google vale entonces yo lo

voy a llamar siempre es una idea que

utilicen o buenos lógicamente colocar a

las siglas o prefijo del servicio que

utilizando y lo voy a colocar

del proyecto para que ocupa en este caso

de m2 con semana extra

google funciona por regiones y zonas la

idea es que coloquen sus servicios lo

más cerca posible de quienes vayan a

estar utilizando estos servicios en mi

caso pues no hay ningún no tienen nada

en méxico tiene con chile y hembras yo

me parece y lo voy a correr en los

ángeles y la zona al interior de los

ángeles vamos a escoger la de bueno o la

bdb aquí configuramos qué tan potente

queremos que sea la computadora vamos de

cargamento los tienen por defecto que

una estimación de cuánto costaría a

rentar este espacio dice que de 30

dólares al mes

y después el sistema operativo esté aquí

podemos cambiarle podemos cambiarlo a

otros sabores de linux tenemos 102

verdad ubuntu tenemos windows server

windows es carísimo así comiendo

proyectos también debían 10 está de

maravilla y ojo este que bueno google

tiene varios servicios y estos servicios

que bolt tiene este máquinas virtuales

bases de datos almacenamiento adicional

en todo ello todos los servicios pueden

comunicarse entre ellos usando la red

privada de google esto es siempre y

cuando nosotros lo aprobemos o no lo

aprobamos para dicho servicio aquí

fíjense que por defecto esta computadora

este servidor esta máquina virtual tiene

ciertos accesos

determinados y aquí viene que pueda ser

de forma predeterminada lo que queremos

hacer lo que debemos hacer mejor dicho

si queremos utilizar sin mayor problema

esta máquina es darle acceso a todas las

apis de google cloud y por último vamos

a permitir el tráfico http esto para

poder acceder y realizar las consultas

entonces de reconciliación con el coche

tp todas las apps de bien 10 y una

región cercana a ustedes cuando le damos

crear y nos va a generar esta esta

instancia esta máquina virtual vamos a

darle un par de minutos y vale aquí está

nuestra máquina y como permitimos el

acceso http google nos provisión a una

ip externa ip pública esta ip vamos a

copiarla vamos a tenerla aquí abierta

piensa que momentos intentos será la

computadora no hay nada no me permite

dice que es inaccesible y bueno esto es

normal lo que sigue es ya que tenemos la

máquina en donde va a correr el código

es preparar la base de datos a la cual

le daremos acceso extra para para que

gestione todo el contenido de la

información por nosotros para que

vayamos así web aquí probablemente

fabric activamos la app y nos declara

instancia yo voy a trabajar con post

bears

ok aquí está y bueno aquí lo que sigue

es definir las características de esta

instancia de de postres y ojo que aquí

no estamos configurando la base de datos

todavía estamos configurando el ambiente

es gestionado por google esto no es en

sí una recensión a la base de datos es

un darth vader management no sé qué cosa

significa que google se encarga de

aprovisionar recursos en caso de que tu

proyecto lo requiera lo cual está

bastante generamos llamarlo de instancia

vamos a llamarle psico guiones trap y en

contraseña esto es para el usuario

predeterminado siempre nos va a tener un

site para terminar llamado post verse

aquí lo indica y voy a escribir

123456 versión volver es la última está

bien y aquí dice que disponibilidad

queremos que tenga esta base de datos

este ambiente basta de momento comisión

a zona única pero no va estar mucho y

aquí fíjense que podríamos crearla pero

que hay un tema recuerdan que los

servicios de google se pueden comunicar

entre sí bueno pues aquí por defecto

cuando queramos es esta instancia del

ciclo no permite conexiones entrantes de

ningún lado lo que hay que hacer es

crear la instancia desigual e indicarle

qué las conexiones que vengan desde

nuestra computadora desde nuestra

máquina virtual para ello aquí vamos a

demostrar opciones de configuración y

aquí en conexiones vamos a agregar una

red aquí nos dicen autorizar ninguna

retraerse conocer control hablar vamos a

hacerlo ya sabes que vamos a permitir

conexiones que vengan tomamos la

dirección ip que habíamos guardado estas

de nuestra máquina recuerden

lo dejamos así

y vamos a llamar la conexión bm scrap

tenemos que listo entonces al momento de

crear esta esta instancia mos a permitir

que se conecte o que admita conexiones

desde la máquina virtual pues al crear

instancia y esto para que vean estos

síntomas más tiempo que la máquina

virtual esto debía tomar unos 45 minutos

yo voy a pulsar vídeo y regresó

enseguida vale aquí ya está se ha creado

la instancia del ciclo vamos sin

cometidos y ojo como les dije esto no es

una base datos apenas es del ambiente y

lo que sigue es configurar lograr la

base de datos usuarios y demás lo

primero es guardar esta dirección ip

está la dirección ip para acceder a la

base that somos poner aquí base de datos

es estar acá y lo siguiente en un caso

de que al momento de crear la instancia

se les haya pasado a agregar la conexión

aquí pueden permitirles bueno caso que

quieran añadir más a lo mejor más

adelante agregan más máquinas o qué sé

yo aquí en conexiones vienen agregarle

el nombre de la red y de dónde es que va

a provenir esta conexión ok también com

pueden ver está autorizado para que si

tiene algún poder con app engine y puede

acceder lo siguiente es crear un usuario

no vamos a utilizar que no por defecto

de post bears voy a crear un usuario que

sea

extra y en contraseña voy a utilizar mi

poderosísima

123456 agregar y además del usuario lo

que haremos es crear la base de datos

aquí este expediente que viene por

defecto para sacar una base datos que se

llama be the script

entonces nos va a crear la base de datos

y nos va actualizar todo este tema y ya

con ello hemos terminado el segundo

pilar de streep y el primero siendo la

máquina dónde va a correr el segundo la

base de datos que va a utilizar y lo

tercero es darle acceso a almacenamiento

en la nube para ello aquí desde mi menú

iré a klaus torres navegador ya quiero

aparecer esta ventana lo que tenemos que

hacer es crear un box deben de saber que

los sistemas de 9 no se manejan como

como este explorador de archivos como su

computadora sino que funciona por lo

kitsch lo que queremos es nombrarlo

luego hay además bucket jones rápido y

ojo que este nombre tiene que ser

globalmente único aquí sucede que hay un

ya me lo gano la última los boquetes

trap y y te youtube continuar este lo

mismo que la base de datos aquí tenemos

que definir cuán disponible queremos que

esté este servicio de almacenamiento

para el caso de la base de datos

escogimos únicamente región y queremos

lo mismo le diremos que lo queremos en

webs webs los ángeles continuar aquí nos

dice qué tipo de servicio de

almacenamiento queremos fíjense que

dependiendo de cada uno varían los

costos este es el almacenamiento

estándar es decir cargo frecuente retiro

frecuente y como pueden ver este es se

accede en menos de una vez al mes menos

una vez por trimestre menos una vez al

año entonces vamos a \[ \_\_ ] estándar

continuar y aquí por último cuando nos

por último aquí vamos a escoger a la de

muchos casos sólo hagamos clic en

uniforme continuar y aquí vamos a darle

en crear no creamos este versiones de

objetos y hablaré de ello más adelante

muy bien aquí está nuestro bucket creado

pero ojo ojo ojo ojo que que hace falta

añadir un detallito extra fíjense que si

yo subo un archivo puede subir al gato

loco gonzález abrir se comenzó a subir

aquí ya está dátolo cargado fíjense que

esté aquí en acceso público no no hay

manera de acceder a este archivo es

decir que si yo quisiera mostrar esta

imagen en la aplicación web en algún

sitio wap y yo no hay manera de

mostrarlo porque no tiene acceso pública

no tiene este enlace público que para

verlo de hecho si yo hago clic aquí en

el archivo quedan todos los datos del

gato loco y fíjense aquí huele pública

no hay y adicionalmente hay una url pero

es dice autenticar si yo quisiera copiar

esto y abrirlo en internet así

directamente me va a pedir que me

identifique es decir no lo puede ver la

gente es normal o la gente sin acceso lo

que hay que hacer es cambiarlo para ello

me voy a regresar a mí porque aquí estoy

en taiz the bucket aquí en permisos aquí

podemos agregar permisos abajito de

momento esto es un resumen general vamos

a agregar un permiso para quien para out

y users aquí sé quién va a aplicar este

permiso users y lo que haremos es aquí

en función nos deslizamos hacia storage

está aquí y le decimos que todos los

usuarios o los usuarios puedan

visualizar estos objetos que yo cargué

entonces odio ser visualizar objetos

guardar y aquí me dice oye si haces esto

se va volver público tuvo que para

lectura ojos sólo para lectura te digo

que que sí que está bien que no pasa na

y aquí piensa que ya me está advirtiendo

que esté porque tiene hoy users como

permiso añadía entonces si yo me regreso

aquí objetos amigo en gato loco de

quitina una url pública la copio abre

una ventana la pego y aquí está mi gato

loco libre y disponible para que

cualquier persona con el enlace pueda

ver entonces

tercer paso completa tenemos la máquina

la base de datos y el espacio para

almacenar archivos y demás lo que sigue

es configurar es rápido para ello en

cumplir en bien vayámonos a instancias

aquí vamos a ocultar esto vamos a quitar

esto y lo tenemos que hacer es

conectarnos a esta computadora si notan

mucho habilitados con la nube usualmente

lo que hacen en su equipo es que desde

su equipo abren una terminal y desde

aquí corren sus comandos y enseñó hoy y

ejecutan y demás bueno dado que ahorita

estamos rentando esta computadora este

equipo lo que hay que hacer es acceder a

ella y accedemos mediante ssh que es

seguir show esto nos va a dar una

conexión con la computadora para

manipularla y utilizarla a nuestro gusto

y antojo aquí vamos algunos segunditos

no deberá tomar más

y aquí estamos muy bien ojo que esto de

aquí es una computadora corriendo linux

si vienen de windows o mac este

probablemente hay un par de cositas que

deben que aprender pero no se preocupen

como les dije todos los humanos que yo

escriba van a estar disponibles en la

descripción de este vídeo

lo primero que hay que hacer es entender

que el linux funciona con con un tema de

administrador y permisos y para no

correr riesgos siempre es buena práctica

correr sudo antes de cualquier comando

significa que yo soy el el administrador

y que no quiero que la máquina oponga

alguna queja o restricciones al comando

que quiera correr lo primero es

actualizar el sistema operativo de

debian entonces corro su app update y

aquí en actualiza todo esto muy bien lo

siguiente es instalar git nos vamos a

ocupar pero siempre hay que instalar

nuestro hub y néstor git y bien sé que

este comando me va a instalar git desde

digamos que la copia oficial que también

tiene de entonces damos inter que me

pregunta que va a añadir todo este

espacio extra lo que sí que está bien

con el problema esperamos a que lo

instale

instalac y ahí está y si yo corro kit v

mentira kit doble guión versión me dice

que el instalado es el 2.20 muy bien

hagamos lo siguiente a lo mismo con know

the nose si lo requerimos para instalar

este extra pie y para correr el código

como servidor entonces vamos a hacer lo

mismo y tozudo up in store no chilles me

pregunta que si quiero continuar le doy

a enter pero aquí va a haber un problema

y les diré cuáles sí yo corro naut john

v me dice que la versión de nube que

instaló es la de 10.24 y este es un

problema y les diré por qué si yo voy a

la documentación extra pienses travis

punto a joe quien documentación en

developers

y aquí en installation no mentira se va

de aquí está me dice que para no se

requiere la versión 12 mínima y para en

piense en la versión 6 como un mínimo si

no me equivoco no va a cultivar en la

versión 16 o 17 ellos te piden la 12

mínimo pero nuestra computadora necesita

la 10 y es que está la versión a la cual

tiene acceso este sistema operativo lo

que hay que hacer es instalar un out no

desde aquí desde la forma digamos

oficial sino que vamos a instalar un out

desde un archivo de versiones de nube

para ello vamos a acceder aquí a depp

know the words esta es nuestros archivos

que te guardan las distintas versiones

de algún programa y te los pones

disponibles aquí están disponibles para

en sistemas que cobran en debian ubuntu

acentos y fedor escriben las

instrucciones y lo que hacen es muy pero

que muy sencillo yo lo voy a cerrar

porque ya las tengo listas y esto lo

queremos

o qué es lo primero es crear una

referencia a la versión que queremos

utilizar esta referencia es corriendo un

comando más o menos así accedemos a la

librería a este archivo de versiones le

indicamos que la versión queremos llegar

a la versión 12 y luego descargamos o

hacemos la referencia al archivo de

instalación entonces aquí vengo pegó

presionó enter

pero eso no me lo esperaba

aquí está de más

entonces les decía lo que hay que hacer

es crear esta referencia a la versión y

al archivo de instalación dicho creo que

pueden inferir luego con leyendo esta

que quise ser app entonces vamos a pegar

con el enlace de la versión y el archivo

entera muy bien ya tenemos la referencia

el siguiente paso es ejecutar este

archivo de instalación para que nos

prepare todo para la versión que

queremos instalar para ello voy a pegar

sudo boots aquí lo pongo para que lo

vean sudo base lou schorsch será esto lo

que hace es que no se ejecuta este

script nos prepara todo para instalar la

versión y al final nos dice que ya para

instalar la versión hace falta correr

este comando de que copiamos suda pies

de náuseas entonces vamos a instalar no

bienes pero con la versión que

aprovisionados y pego le doy enter y me

va instalar tanto un out como en pie y

ahora fíjense que si yo ejecuto no

diagonal diagonal guión v-me sistema la

versión 12 y si hago lo mismo con el pie

tema la versión 6 las cuales cumplen con

lo necesario para instalar extra

entonces ya están listos pensar es

rápido aquí en western guide viene el

comando para instalarlo en pie escritura

crisis rápida y el nombre de la

aplicación no pongan quick start porque

nosotros queremos configurarlo con

nuestra base de hagamos esto entonces

regresemos aquí a la terminal en pie que

relate extra pick up qué nombre le

queremos dar yo lo voy a llamar tutorial

y presionamos entre lo que va a ser que

pensar a los archivos nos va a preguntar

si queremos hacer una instalación rápida

un quick start o si queremos

configurarlo a nuestra a nuestra manera

y aquí está quick start acosta vamos a

dar el costo enter si queremos hablar un

día le digo que no

aquí nos dice qué tipo de base de datos

queríamos utilizar bien tiene 5 light

post bears mainz y kuo e incluso tienen

mongodb y nosotros va a utilizar post

bears cómo se llaman la base de datos

bueno para ello voy a regresar aquí al

menú she wolf y la base datos si no me

equivoco se llama debe guión extra que

probamos a revisar dónde está de más se

llama be de base de datos y amstrup

pongamos vez de guiones trap y nos

pregunta dónde está alojada hasta

tenemos aquí la base de datos está en el

35 226 que cualquier forma lo podemos

ver acá en descripción general aquí está

35 26 vamos a copiarlo

pegamos en el puerto este se tiene por

defecto en el inter y usted name sino

méxico que era usuario rápido en saberlo

usuario que nuestra pins correcto

y en contraseña y poderosísima 1 2 3 4 5

6 y de aquí le decimos que no y lo que

va a hacer es trap y antes de seguir

instalándose es revisar que esta

conexión a la base de datos sea correcta

para que esta pila para utilizar y se

encargue de todo y nos lo guarde nuestra

base de datos sin que nosotros debamos

preocuparnos por absolutamente nadie es

lo maravilloso de hecho si buscan este

cms es como extra pi berankis rapids de

lo más popular y lomas lomas famosito 1

porque es gratis 2 porque es muy

conveniente y muy útil y muy completo

entonces aquí sigue realizando la

conexión en la conexión exitosa y nos va

a terminar instalar todo lo demás

que no sale unos cuantos segundos

mientras tanto se les olvidó brindarle

me gusta y dejen en los comentarios que

tutoriales más les gustaría ver en este

tema que hacemos de todo todo que venga

con desarrollo aquí lo trabajamos dejen

en los comentarios que les gustaría ver

o cualquier duda adelante ahí estaría

respondiendo

mientras instalábamos a cerrar esto de

aquí estoy acá y estoy aquí

muy bien ya está lista nuestra nuestra

instancia de strip y como boyer otro

proyecto este pueden ver que se trabaja

con envíe scripts en brand y vall

d'hebron estarán bien brownfield lo

primero que haremos es crear el panel de

administrador quien envíen bromvich pero

ojo no se les vaya a pasar siempre damos

poner sudó para este tipo de cuestiones

sólo ven pgjem brownfield estamos a

construir la interfaz

y aquí me marcan un error

aunque ya que el error es error de

novatos es que me aceleré y olvidé

acceder primeramente a mi carpeta del

tutorial piensa que yo estoy en la

máquina virtual de google truck que si

la nombre yo si yo ejecuto de ese mix

que tiene esta máquina virtual tenemos

este archivo y esta carpeta es aquí

podemos acceder con un cd tutorial

y ahora sí estando en tutorial vamos a

correr sudo en brown y esto nos va a

crear la interfaz del administrador y

una vez que lo hayamos creado vamos a

andar a correr

en este astro aquí para que podamos

acceder a él desde nuestra máquina

virtual desde la ip pública mejor dicho

porque ya estamos en la máquina de hecho

mientras se se crea el de la mini el

panel administrador

vengamos acá el menú cumplir engine

instancias de evm y aquí vamos a abrir

la ip una vez más

fíjense que aquí este marca que no hay

nada y es normal porque no estamos

corriendo nada todavía vamos para que se

conserve el panel y luego andar a correr

para que vean que ya vamos a poder

acceder

o que ahí está pero antes de lanzarlo

algo que quiero que revisemos aquí en

tutorial si yo muestro qué es lo que hay

dentro hay varios archivos y varias

carpetas una de estas carpetas es config

vamos a acceder a conflict y aquí vamos

a ver qué archivos hay hay un archivo de

dar veis un archivo el server in europe

está de fonz jones orientará veis están

guardadas las credenciales para acceder

a la base de datos que configuramos aquí

en google y aquí en server está

configurado donde queremos ejecutar y el

servidor de scratch vamos a abrirlo con

sudán o server punto y ella si no conoce

nada no es es un editor como si fuera

edil por un poquito más sencillo y aquí

fíjense que actualmente está configurado

para correr en el puerto 1.337 esto

significa que si yo lo andará o yo lo

propusieran dar lo ejecutará tendría que

venir acá en la dirección y escribir dos

puntos 1.337 lo cuales es una lata

ok lo que hay que hacer es cambiar ese

1.337 por 80 porque en caso de que no lo

conozcan 80 ese puerto para conexiones

http lo cual significa que si eligen 80

no hace falta poner nada y accedemos

directamente así es aquí borramos 37 por

80 y lo guardamos como se guarda enano

muy sencillo presionamos control aquí

nos dice que no va a guardar en este

decimos enter y lo brindamos contra el x

para salir y ahora si regresamos a la

carpeta raíz al tutorial y aquí vamos a

correr sudo en pie and develop vamos a

darle enter y aquí nos va a ejecutar

esto en modo de desarrollo

vamos a ver unos segunditos

y ya está nos indica que está corriendo

un puerto 80 y que para acceder al panel

de administrador lo hacemos con diagonal

admin entonces ya vengo para acá le doy

actualizar fíjense que ya puedo acceder

aquí porque pusimos el puerto 82 equipos

2 puntos

82 enter me mandan aquí mismo me lo

borra entonces vamos a bloquear

administradores rap y nos pide que en la

primera conexión creemos un usuario de

de admin para gestionar todo este asunto

entonces qué vamos a registrarnos yo

pondré adrián salgado o la arroba las

fito contraseña aquí sí hay que poner

algo más elaborado no nos permite poner

algo sencillo y listo

tenemos que nunca y ya está este es el

panel de administrador de extra pit y

grande que es una maravilla es una

chulada nos permite crear puntos up y

sin mayor problema de hecho por defecto

ya trae una colección de datos que

serían usuarios

nosotros vamos crear nuestro propio tipo

de contenido aquí nos gestionan los

archivos multimedia este tiene a carlos

plugins instalados buenos acceder a más

plugins esto vamos a cerrarlo y aquí

viene la parte de configuración primero

primero vamos a ver que esté funcionando

correctamente hoy vamos a hacer una

prueba aquí en creador de tipos de

contenido es donde definimos qué

colecciones queremos crear aquí tiene el

momento y otros permissions rose y

usuarios vamos a crear un nuevo tipo de

contenido

vamos a simular que que este es un

registro de personas ok vamos a llamarlo

persona

continua y aquí vamos a decir qué datos

queremos guardar respecto a cada persona

es como si creamos una tabla y que ésta

fuera una columna entonces entra vamos a

ponerle el nombre completo y que nos da

distintos tipos de características para

guardar texto tenemos acceso a

configuración avanzada que si es

obligatorio que si longitud máxima echen

siempre un vistazo a este campo de

configuración avanza créeme que

muchísimas cosas útiles no te lo voy a

dejar así vamos a crear otro campo a ojo

que no puede llevar espacio

vamos a meterle un número la edad de la

persona x este tipo de número entero

vamos a guardar de fecha de nacimiento

quizá vamos a ponerle fecha de

nacimiento y qué tipo de fecha queremos

guardar solo fecha aquí viene este valor

por defecto si acaso queremos no ninguna

y vamos a guardar que será bueno el

género este buen sexo

aquí en generación vamos a llamarle sexo

masculino fm

con esto tenemos suficiente está la

información que queremos guardar de

nuestras personas gonzález guardar esto

nos va a crear a los puntos a pie para

este tipo de contenido y para ello

necesitará reiniciarse aquí pueden ver

que se está reiniciando service or

historia ya está listo y funcional

nuevamente me caroline fo y aquí está

usuarios no usuarios no en personas ok

vamos a crear una persona es crear tres

personas el nombre completo luis salgado

edad 26 fecha de nacimiento no se los

voy a regalar en sexo masculino y

guardar y fíjense que es rápido por

defecto trae un sistema de publicaciones

de gestionar auditoría más como llamarlo

tengo tengo que guardar y después

tenemos que publicar lo cual es

excelente para un cms en ocupar algún

blog para alguna tienda en línea hay en

cargar los datos y luego alguien ha

probado ya los publica aquí puede jugar

con los roles y permisos y todo eso sí

muchas personas ya está louis habla

vamos a crear otra persona un señor lo

juanito alimaña 19 él nació

primero de julio masculino guardar y

publicar

aquí está y de hecho vamos a hacer algo

más y vamos a crearle otro dato aquí a

persona vamos a crearle no vamos a

crearles nacionalidad pero vamos a hacer

qué nacionalidad en la persona esté

ligada a una lista de todas las

nacionalidades para que va a crear otro

tipo de colección que llamaré

nacionalidad nacionalidad continuar y va

a tener únicamente el texto que va a ser

ponerle país terminar a que nos puede

llevar acentos

guardar y ya verán a qué me refiero

vamos para que se cree este tipo de

contenido y luego este es nuestro

aunque ya está aquí en nacionalidades

vamos a crear una que sea de méxico

guardamos y publicamos

y vamos a crear otra que sea de colombia

guardamos y publicamos los fines aquí

tenemos la colección de nacionalidades

dentro de la cual tenemos stands los

tenemos la colección de personas dentro

de la cual tenemos estas dos personas

vamos a modificar personas cualquiera no

puede modificar eliminar editar me

regreso aquí al creador de tipos de

contenido voy a agregar otro campo a

persona y en persona vamos a crear una

relación vamos a decirle que en persona

vamos a crear este campo que se llama

nacionalidad y lo vamos a enlazar con la

colección de nacionalidad que éste hemos

creado que podemos enlazarlo con más

vamos a hacerlo aquí de modo que una

persona tiene una nacionalidad como sé

que una persona tenga varias

nacionalidades así que quizá simplemente

una nacionalidad

le damos en terminar

guardamos esto nos va a actualizar las

personas se reinicia el servidor y ahora

piense lo que estamos para hacer en caso

de que no tengan un conocimiento en base

de datos sin si cuento de ello creo que

los transversales es una maravilla

lo que aquí estamos regresemos a

personas vamos a editar a luis salgado y

vamos a ir que de nacionalidad queremos

que tenga en mexico guardar

entonces lo que vamos a hacer a esta

moción es enlazar estos dos estos dos

contenidos están sus colecciones y aquí

pueden jugar por qué no se ha visto

algún sitio de blog aquí para jugar con

categorías con temas con autores es así

como funciona porque ahora luis salgado

es una referencia hacia méxico y si yo

aquí en méxico tuviera más datos luis

salgado tendría como que una relación un

acceso a todos estos datos tenemos lo

mismo que con juanito alimaña agreguemos

la nacionalidad de colombia guardar y ya

está bueno estos otros datos que

requerimos para hacer nuestras pruebas

lo que sigue es mostrarles cómo exponer

estos puntos up y otras aplicaciones a

lo mejor quieren hacer algún from con

riad con frank con view gatsby next qué

sé yo aquí en configuraciones

vamos a ir a roles y permisos hay que

entender algo esté muy claro desde un

principio tenemos los roles y usuarios

para este panel de administración es

esta parte gráfica y tenemos tenemos

roles y permisos y usuarios para

consultar las apis ok vengo aquí a roles

y permisos para las apis y de momento

hay dos roles un rol que significa hacer

la consulta de forma autenticada y un

rol conocemos la consulta así sin

autenticar

voy aquí a editar esta consulta pública

y aquí me dice oye si alguien hace una

consulta pública sin autenticar a quien

quiere es dar acceso y aquí vamos a

darle acceso a nacionalidad y a persona

vamos a dar acceso a que cuente y

encuentre cada una de estas y aquí bien

sé que ya nos generó los puntos apps si

yo corro esta esta hasta consultas de

recuesta me va a mostrar todas las

nacionalidades tengo que así vamos a

hacerlo le voy a dar guardar para que se

agilicen estos permisos voy a tomar esta

dirección ip

y es que nacionalidad s vamos a pegar lo

vamos poner que diagonal nacionalidad s

y me dice que no lo encontró y es normal

que no lo ha encontrado porque soy

\[ \_\_ ] esto no nos lleva a que a

chicos estoy tonta un nivel de \[ \_\_ ]

es impresionante debe ser un \[ \_\_ ] de

clase hasta aquí nos ponemos

nacionalidades así nada más grande es el

tipo de de consulta pero aquí están

piense que nos muestra todas las

nacionalidades yo me vengo acá y pongo

personas me muestra todas las personas

es decir ya nos genera estos puntos de

entrada para que voy a otra aplicación

los consuma hizo está genial porque no

hemos tenido que tocar nada de código

cocinar todo como pueden ver aquí nos

genera este todo lo necesario para un

club y más entonces me va a hacer un par

de ejercicios déjenme abro pullman para

quien está escriben acá es muy curioso

chicos en pulmones es un programa para

llevar a cabo las consultas de forma más

fácil y sencilla aquí me abre este

programa me abre la cuenta este aquí no

sale de un save lo que aquí podemos

hacer nuestras consultas

venimos acá copiamos

pegamos

borramos este http ok si lo voy aquí

send modo que me dice babbitt

y esto es porque aquí tenía estaca de

género o \[ \_\_ ] mejor dicho

y ahora sí

es que lo había abierto para el vídeo de

introducción así que le doy la dirección

personas y que le dicen aquí están todas

las personas y aquí está más bonito que

esto está terriblemente bien entonces

como pueden ver extra pinos genera las

app pero recuerdan que todo gira en

torno a dos cosas bueno dos elementos si

la consulta es autenticada o no es

auténtica pensé que de momento ustedes

en una consulta pública porque no ha

dado ninguna creencia aquí le estoy

diciendo que no permita crear con post

crear si es público si yo vengo para acá

y le doy point y quisiera crear otra

persona y le doy a enviar me va a decir

forbidden está prohibido no tienes

acceso y aquí hay tres escenarios de

cómo podrían estar agregando contenido

en este caso personas para este tutorial

primer escenario

crean algún usuario para el panel

gráfico puede venir aquí y crear un

usuario

darle roles bien sé que este es de

superar min aquí tengo más roles editor

autor y superti yo puedo crear usuarios

para que los agreguen de forma gráfica

si es si son personas mejores algún blog

alguna tienda de comer si es algo

gráfico y es algo que no tiene

conocimientos de desarrollo creamos

usuario para el pan primera señal el

segundo escenario es que yo podría venir

aquí a roles y a la consulta pública

permitirle crear y eliminar y actualizar

y demás entonces ahorita común ya

actualice a no vertical de personas

verdad aquí persona también entonces

comentó que la consulta pública me

cambie todo de personas y esto es

peligroso porque cualquier gente que te

descubra tu papi te mueve todo y termina

tu base de datos y te vas a pasarla mal

pero hagamos un ejercicio este vamos a

poner aquí un get para ver el formato el

formato es más o menos así

entonces vamos a crear una persona aquí

lo cambio post y en cuerpo y corro el

jason y vamos a crear una persona

obviamente no podemos escoger el aire

vamos a llamarlo luis salgado júnior en

edad 69 y esto le pone delito esto lo

vamos a eliminar

y nacionalidad vamos a dejarlo

vamos a dejarlo marcaron

a mí me marcaron estar acá vamos a

proveer nacionalidad

vamos a dejarlo así bonito

vamos a verlo enviar y aquí ya está yo

acabo de añadir una persona de forma

remota con este punto a mí ya me genera

una imagen era louis juniors y si yo me

regreso a la aplicación me regresó a

personas aquí está luis june yo lo pude

crear sin haberme autenticado pero sí

comencé es un problema porque su vida

está expuesta expuesta y cualquiera les

puede arruinar todo todo lo que tenemos

que hacer es aquí en roles y permisos lo

común es que una consulta pública sólo

pueda leer

sin eliminados crear y actualizar

entonces que vamos a cambiar los

permisos las consultas públicas sólo van

a poder leer y para crear vamos a darle

permiso al rol de auténtica aquí en

autenticado

decirles que sí está autenticado tenga

permiso dato y vamos a guardar a la

pregunta del millón es cómo hago una

consulta autenticada a estos puntos

happiness trap y para ello para hacer

una consulta técnica tenemos que

recordar este principio el principio de

que existen usuarios para el panel de

administrador y además existen usuarios

y roles y permisos para estas aves lo

primero que hacer es tener un usuario

para estas apis los que quieren usuarios

momento no hay nada no puedo hacer

consultas auténticas voy a crear un

usuario para la tap y donde llamarlo la

escrito con correo de una la suite o un

password 1 2 3 4 5 6

blood of confirmado un guarda

y aquí en aquí en usuarios ya tengo alas

fito que puede hacer consultas

auténticas y para ello me voy a revisar

qué bousman si lo intentó mandar a luis

salgado júnior versión 2 como esta es

una consulta pública sin auténtica me va

a marcar full bien

lo que hace es una consulta autenticada

para ello cuando el usuario creado

tenemos que ser una consulta post a la

dirección ip

y aquí a la dirección ip además de que

sea pulse tenemos que acceder a la

diagonal local y aquí en bari en esta

consulta lo que vamos a mandar es un

jason y dentro del jason vamos a poner

identifier lo que así se escribían que

vamos a poner a las frito pueden poner

el nombre del usuario no pueden poner el

correo o cualquier de las dos es un

gerente fire y luego vamos a poner

password en el cuerpo aquí de la

consulta y voy a poner uno será que

pongan estreno 23 456 esto lo quitan

hacer entonces para autenticar que son

dos pasos primero mandamos esto aquí y

si la información es correcta nos van a

regresar un late dog lifting un ungüento

con james key donde vamos a enviar

y aquí está ellos reciben consulta

reciben mis datos verifican que lo que

está enviando es correcto y entonces ya

tengo está aquí james dabill token para

hacer consultas

auténticas pero aquí algo que me faltó y

tiene lapicito de editar aquí ojo que

ponga con los roles aquí yo a las fit o

lo agregue al rol de autenticado pero

pueden venirse aquí a configuraciones y

crear más roles para las apps lo mejor

alguna api que sólo pueda modificar de

personas alguna otra algún otro rol pero

lo que para modificar estas

nacionalidades y así sucesivamente

equipo en agregarle más roles con más

permisos y cuando eran sus usuarios les

asignan el rol y los permisos que hayan

ustedes configuran la situación

autenticado por lo tanto puede hacer

consultas autenticadas como las que yo

tengo aquí permitidas en oventic el que

me salió un usuario con esto y este

usuario puede hacer todo esto aquí

lo que hay que hacer es tomamos este

este web toquen lo voy a copiar me

regreso a mi consulta de publicar

personas recuerde que me está en barco

prohibido sigue estando prohibido lo que

hay que hacer es en autorización pasarle

un tipo de autorización de deber toquen

y aquí estoy acá desde

pongo el token que me regresaron aquí y

entonces la consulta para que sea

auténtica da lo único que hay que hacer

es en autorización pasarle el token le

doy enviar y no ver de fourvière en me

va a crear a luis salgado juniors

versión 2 me regreso aquí a personas y

que está lo sagrado hay una versión 2

que nombre sito y es así como exponen

sus apis crean consultas autenticadas

que en consultas públicas definen qué

quiere que esté expuesto que quien está

expuesto y que quieren que no esté

expuesto y todo esto sin tocar una línea

de código que ojo este código extra pin

luz nos está generando aquí en en el

proyecto y les voy a mostrar si yo bueno

antes antes de mostrarles un plugin que

recomendó muchísimo instalar ya es el de

documentación books que vamos a

descargarlo este plugin de documentación

que hace es que nos va a revisar todos

contenidos tenemos todas las aves que

tenemos nos va a llenar una página de

documentación para que sepamos cómo se

las consultas en caso de que desean

informar y demás ahí tenemos estas

páginas y con suárez aires son servicios

relativamente popular si están el mundo

de basquetour entró conocen y si no pero

ya están informados de cómo funciona les

voy a mostrar en un segundo en lo que se

reinicia que nos dice que se está

instalando dando momento reiniciar y ya

vamos a poder acceder a la documentación

si le sale este mensaje de que tengo más

tiempo del esperado a veces suele pasar

así lo que sé es revisar aquí que que

efectivamente ya haya reiniciado si ya

reinicio y sale este mensaje actualizan

pero en mi caso no ha reiniciado a fines

de penas me está nuestra por reinicia

como saben todo reinicio tranquila

reinicio cuando les aparezca en cuadrito

con la forma de acceder al panel de

administrador aquí está ya me reinicio y

ya me cargo de los documentos que tuvo

que haber cargado aquí piense que solito

me actualiza todo esto ya está pero

bueno con este plugin de documentación

de schwager aquí me genera una entrada

documentación equipo de ver que ya me

generó la versión 1.0 el poder abrir y

este es el enlace para la documentación

que tiene como crear nacionalidades como

actualizar el personal lo mismo el mejor

si yo quiero crear una persona me dice

qué es lo que tengo que ver enviado

entonces aquí yo puedo copiar esto

podría venir a mi terminal que si yo

hago la consulta y hasta entonces estaba

muy pero que muy útil oyente pueden

configurar que quieren que se muestre

que quieren que no se muestre pueden

configurar todo esto pero de mientras ya

tienen documentación automática sin

haber hecho gran cosa

entonces eso es eso es lo primero y lo

segundo les decía aquí strapless general

a sapiens y el código de forma

automática y esto lo pueden ver que

vamos a correr control se para cancelar

esto acá en tutoriales en tutorial en el

proyecto si corremos ls hay una carpeta

que dice app vamos a acceder esta

carpeta de aquí y vamos a ver que en su

interior nos genera carpetas para los

tipos de contenido que estamos creando

nacionalidad y persona vamos a abrir

persona

y aquí al interior hay más carpetas con

este vamos a entrar a conflicto

y aquí están las rutas vamos a abrirlo

con nano brown jason en todas las rutas

es trap y lo genera por nosotros 110 el

que detesta el country y el pop viene

todo entonces grande que extra pies es

una maravilla pero bueno esto es para

pareces demostrarles que recogió si

existe y de hecho esto lo fabuloso extra

picks en algún momento deciden no

utilizar esta api para nada lo que hacen

es simple y sencillamente toman las

rutas y aquí en cloud tienen todo

hospedado en sí cuál es su base de datos

usted tienen completo control de ella en

completo control del servidor y también

en completo control del código de hecho

lo que hicimos aquí de crear personas y

agregarle datos y que si yo lo pidió en

haber hecho con código pero extra pinos

lo facilita de forma gráfica dichos

trata no va a cargar porque ya no estoy

corriendo en el servidor entonces hasta

aquí todo bien ya vimos cómo son las

apis como métricas con esas críticas

pero falta faltan dos detalles el

primero es el siguiente vamos a volver a

correr

vamos a ver a correr en el ambiente de

desarrollo mid hay un problema les diré

cuál es que si yo de este cargo algún

enlace o cargo algún archivo extra que

me va a guardar dicho archivo aquí en la

máquina virtual aquí donde me lo va a

guardar en una carpeta que se llama

aplaude si no me equivoco y esto es

porque nosotros configuramos la conexión

consigo el récord en que le dimos ahí el

ip de la del base de datos usado y

contraseña pero no hemos configurado la

conexión con el buque de almacenamiento

de modo que si ahorita vamos a

actualizar

de modo que si ahorita yo cargo en un

archivo como strip y no sabe dónde

guardarlo lo va a guardar en la máquina

y esto es un problema porque la máquina

virtual su función principal no es

guardar archivos puede guardarlos pero

uno no tiene mucho espacio y dos es

ineficiente guardarlos aquí lo que hay

que hacer es enlazarlo con este este

storage de google que para ello vamos a

venir aquí a la tienda y aquí nos dice

que echemos un vistazo todos los plugins

que tienes visto no son todo los que

tienen incluso pueden ver el equipo

activo no lo voy hacer ahorita si lo de

chequear now vamos a entrar a la

librería oficial de scripting deben ser

buena estrellita y tienen todos los

plugins a los cuales tienen acceso uno

de ellos es un plugin para conectar

scrap y con el claustros y para ello

vamos a buscar aquí control efe google y

aquí está en plugin conocer clic en el

que tienen las instrucciones de cómo

instalarlo lo primero que hay que hacer

es instalar el paquete con un pie vamos

a copiarlo

aquí de vuelta a nuestra máquina vamos a

cancelar esto de aquí vamos a pegarlo y

se va a instalar este plugin para google

cloud esperamos somos segundos

y ya está ahora esto ya nos genera el

código de cierta manera pero hace falta

indicarle cuál busquets queremos que

queremos que se conecte

si me regreso aquí me dice que debo

crear un archivo que se llame plugins

dentro de la carpeta de conflicto y es

lo que haremos vamos a entrar a

conflicto aquí no hay ningún archivo de

plugins vamos a crearlo con touch los

kings en plural punto j

si yo muestro qué archivos están esta

plugins que vamos a editar su contenido

con el editor nano con su don vamos a

quitar plugins de momento no hay nada

porque lo acabamos de crear y el último

paso es poner nuestros datos del boquete

en este archivo no tengo para acá pegó y

estamos indicando que este las cargas

como puede ver aquí las haga con el

proveedor de google cloud storage y aquí

lo pasamos él

le pasamos el nombre de nuestro agua que

tiene que evitar con esto siempre

siempre es mío porque nos preocuparemos

pero bueno aquí vas a pasar el nombre

del buque de nuestro se llama bouquet

construction 7 y veremos bouquet jones

trapig y un jet de un poco más vamos a

meterlo como tour para que sean públicos

y no uniforme lamentable como tour

porque este es es la opción que habíamos

escogido en nuestro porque pueden verlo

aquí entramos en paquetes trap y en

configuración pueden ver que es control

de acceso uniforme es uniforme entonces

ya está aquí la base lo pueden dejar así

control para guardar nos dice que vamos

a guardar aquí le damos enter se guardan

o poder aseguraron tres líneas control x

y ya está lista esta conexión con google

cloud storage entonces aquí puedo

ejecutar una vez más en pie

1

vamos a hablar unos segundos que corra

este ambiente a desarrollo y vamos a

hacer una carga de archivos para que

vean que ya está lista la conexión y

hasta entonces que puedo venir

vamos a abrir peque multimedia

y vamos a actualizarlo

para que nos quede todo como debe de ser

cuando quien está haciendo todas las

llamadas

y ya está vamos a subir un recurso

ciencia que tenemos en el boquete

tenemos formas y simoca tú lo que vamos

a cambiarle el nombre vamos a ponerle

gato sano cuento penique lo que hay aquí

de vuelta antes trap y vamos a cargar

este gasto sano buscar archivos en

escrita tenemos en gastos a no abrir

subir un recurso y me lo va a cargar en

mi boca de almacenamiento aquí está un

gato sano y yo vengo y actualizó

me crean gato sano el original a gato

sano en pequeño y artesano aun neo y

esto es porque es trap y otra maravilla

automáticamente te gestionan los tamaños

bien en la configuración si tenemos que

morir optimizar los temas me queda

distintas variantes de modo que si en tu

sitio web es una imagen chiquitita en

lugar de que te cargues el tamaño

original que mejor mide 2000 por 2000 de

carga el omnium automáticamente es una

maravilla pero bueno ya está les acaba

de mostrar que ya está conectado

almacenamiento base de datos y el código

todo funciona correctamente

ahora qué es lo que tendríamos que hacer

lo que tendríamos que hacer es correr

esto en modo este ya no en el nuevo

desarrollo sino nuevo normal sudó en

prestar al hacer esto lo que estamos

haciendo es que esta computadora remota

va a estar corriendo es rápido en forma

indefinida de modo que estaría siendo un

servidor porque esto lo que es es un

servidor y entonces cualquier persona en

cualquier parte del mundo que visite

vamos a ver con la dirección

cualquier persona que visite esta página

va a poderse encontrar con esto de aquí

creo que hay un problema chicos el

problema está en que si algo pasa si

pasa algún error si se actualiza o qué

sé yo

y esto que está ocurriendo se va a

detener entonces si queremos acceder no

va a ser posible acceder para ello lo

que tenemos que hacer es en lugar de

correrlo así normal que no es no es

adecuado lo recomendado es correrlo con

un administrador de procesos hay uno muy

bueno que se llama p m2

pm 2 carlos iii

se llama m2 y

aquí está

aquí está pm 2 en pie

lo que hay que hacer es instalar este

este proceso manager este administrador

de procesos lo que hace es administrar

es lo siguiente si tú estás corriendo tu

código ya coupage y el código se detiene

el administrador proceso lo que hace es

darse cuenta de que se detuvo y lo

vuelve a ejecutar inmediatamente de modo

que su servidor está disponible 24 7 365

sin interrupciones todo lo que vemos es

instalar este administrador de procesos

vengo para acá me resuena carpeta raíz

instaló de m2

y aquí le damos unos segunditos y

esperamos en cuanto más mientras tanto

ya estamos por terminar en el me gusta

si nos olvidó suscriban se activen la

campanita para recibir más vídeos como

éste directamente en su página y ya está

y esperamos pm2 ahora lo que hay que

hacer es con sudo vamos a correr pm 2

vamos a ponerle start y usualmente

después de estar vendría algún archivo

tipo de auto tipo javascript por ejemplo

apuntó js en nuestro caso no tenemos un

archivo así podríamos crearlo o podemos

correr en pie e indicarle que sea en

modo start damos enter

que nos

pasó y no lo encontró les diré por qué

porque cuando yo lo instale no lo

instale cónsul y además no instale de

forma global entonces para que vean qué

comercio utilicen sólo siempre y en

verdad utilizando siempre es hacerles

sudo en kingston de m2 de forma global

y ahora si me lo ventana global con

derechos de administrador no va a

presentar ninguna queja u oposición y

ahora sí una vez instalado vamos a

decirles sudo de m2 corre me en pie

me gusta más que ya está online y es que

si en algún momento pasa algo que se

detenga o algo así pm2 este process

management manager que se va a

ejecutarlo una vez más de modo que esté

siempre corriendo y de hecho si yo vengo

a la dirección ip

o sea copiar estoy acá en fin aquí está

si yo vengo y pego puedo acceder porque

porque ya está corriendo el y pm se

encarga de eso y vale con esto hemos

terminado el vídeo éste instalamos

rápido en una máquina virtual este la

dejamos corriendo de forma

ininterrumpida y conectamos una base de

datos pósters en este caso comentamos el

bloque de almacenamiento para que usted

tenga control absoluto de sus archivos y

que no se sature en su máquina virtual y

además les mostré cómo dejarla corriendo

de forma indefinida con un administrador

de procesos habéis empezado a decir en

qué momento está aquí puede entrar a

instancia pueden exportar sus sus datos

en caso de que se quieran mudar alguna

otra base de datos o quieran tener

alguna copia local que sea bueno así es

como terminamos aquí la idea principal

era eran dos la primera conexión es

rápida que conocieran cómo crear estos

puntos de entrada para que conozcan

todas las maravillas que nos ofrece y lo

segundo es que lo desplegará no

funcionan donde hay en google cloud la

verdad es que mucha gente que ha

platicado esto tiene miedo dentro de un

poquito una nube es un tanto complejo es

un tanto abrumador y yo los entiendo

este persona mente puedo decir que

también en mis principios o en mis

comienzos mejor dicho abrumado el grande

que gobierna platform es por lejos yo

creo que la más amigable bueno porque no

tiene tantos servicios como hay dobles

lo cual es bueno y malo y dos por el

diseño de la interfaz en sí creo que

creo que lo han hecho ya pero cuando no

son una promoción pagada a su primero

personal ya lo tienes el salto al vídeo

dije no me gusta suscriban siguiendo

comentarios dejan de saber que otros

tres autoridades por aquí nos vemos

\[Música]
