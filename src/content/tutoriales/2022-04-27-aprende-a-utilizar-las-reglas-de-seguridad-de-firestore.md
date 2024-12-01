---
type: tutoriales
slug: aprende-reglas-seguridad-firestore
enlaceyt: https://youtube.com/embed/PQc4aVuSr48
date: 2022-04-27T20:39:47.325Z
title: Aprende a utilizar las Reglas de Seguridad de Firestore
metaDescription: "Aprende cómo configurar reglas de seguridad y proteger tu base
  de datos de Firestore en Firebase #tutorial #firebase #firestore  "
tag:
  - Firebase
  - Desarrollo 101
autor: Lasfito
introThumbnail: "Aprende cómo configurar reglas de seguridad y proteger tu base
  de datos de Firestore en Firebase "
keyword: reglas seguridad firestore
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/25-reglas-seguridad-firestore%2F25-reglas-seguridad-firestore.png?alt=media&token=6d0e5b17-715d-4dd6-964a-c0ac4744cedf
---

## Transcripción

él es pancho pancho es un desarrollador

web muy listo que utiliza fire race como

back-end para sus aplicaciones y lograr

mucho dinero gracias a sus bajos costos

pero olvidó configurar reglas de

seguridad y ahora sus datos fueron

modificados y robados el día de hoy te

mostraré cómo puedes configurar reglas

de seguridad para lanzar tu app a

producción sin perder el sueño por las

noches

[Música]

partiremos de que tienes una aplicación

conectada a fire race y que utilizas la

autenticación y base de datos para este

tutorial utilizaremos una app de

inventario de productos en la cual los

usuarios que gestionan inician sesión y

con ello pueden leer y modificar la base

de datos cuando creamos una base de

datos far store nos pregunta si

planeamos desarrollar o lanzar la

producción si elegimos producción toda

la lectura y escritura de datos estará

prohibida caso contrario en modo de

desarrollo se permite que cualquiera que

cualquiera ojo pueda escribir leer datos

siempre y cuando no hayamos llegado a

cierta fecha el problema de punch es que

con sus reglas en modo desarrollo y con

ello expuso completamente toda su

información para configurar reglas de

seguridad hay dos opciones hacerlo desde

la pestaña de reglas aquí en el apartado

de firestone o hacerlo directamente

desde el código de tu aplicación para

esta segunda opción es necesario haber

instalado las herramientas de fire race

en la terminal una vez que las hayas

instalado es necesario iniciar sesión

ejecutando fire veis

y después inicializar hemos fair race en

nuestra aplicación de modo que podamos

acceder a ciertos servicios desde aquí

desde la comodidad de nuestro código

para ello escribiremos airways init aquí

nos pregunta qué servicios queremos

gestionar desde este proyecto desde este

pool de para lo cual nos moveríamos con

las flechas y escogeremos firestorm

haciendo clic en espacio bueno presiona

la tecla de espacio y luego presionando

enter aquí vamos a preguntar si queremos

crear un nuevo proyecto utilizar o no ya

existente en nuestro caso utilizaremos

este que ya está en funcionamiento para

el cual elegiré ocupar utilizar un

proyecto existente y elegir el que se

llama reglas seguridad por último nos va

a preguntar este como queremos llamar a

estos archivos para lo cual basta

presionar enter una y otra vez para que

esté todo listo notarán que se generan

varios archivos entre ellos está

carísima fires arq

jarvis jason fuerte store index es jason

y fire store los para trabajar y

gestionar nuestras reglas de seguridad

nos enfocaremos en este archivo aquí el

the fire store rules

por último podemos o si así lo desean

instalar la extensión de valer 6 para

que tengamos marcado de código y

sugerencias pero bueno basta de todo

esto y es momento de ponernos manos a la

obra para ello voy a cerrar todo esto de

acá y vamos a estar trabajando en el

archivo de firestone rose ok y lo

primero es importante aprender que todas

las reglas se crean a través de una

combinación de elementos el primero es

un scout o de limitación a ciertos

documentos el segundo es una condición

que se evalúa en verdadero o falso

lo que vemos es de momento borrar esta

regla preexistente y vamos a crear una

regla que aplique a nuestra colección de

productos que producto si venimos aquí a

fair reixa el panel de administrador

notarán qué productos tiene dos

documentos de momento tiene estos dos

documentos y este es el path para este

documento en la 08 y el path para el

documento hasta las 123

escribamos más para comenzar nuestra

regla y lo vamos a escribir el pad de la

colección de productos y el documento al

cual queremos aplicar dicha regla

entonces que vamos a hablar como como

productos

y luego pondríamos el nombre del

documento que eran esas las 123 pero

aplicar una regla un solo documento no

tiene sentido salvo ciertos escenarios

lo que queremos es que esta regla

aplique a todos los productos que están

en la colección de productos para lo

cual vamos a utilizar una escritura

variable para ello vamos a colocar dos

llaves y al interior el nombre que

queremos dar a esta variable dado que

nos encontramos en la colección de

productos escribamos algo como producto

lo que ustedes están viendo es que este

camino va a aplicar a cualquier

documento en este caso producto que esté

al interior de la colección de productos

esta parte que está escrita en llaves

que es una variable lo que va a

solucionar es que al momento en que se

ejecute esta regla de seguridad esta

parte de producto va a ser reemplazada

con el nombre del documento en este caso

por ejemplo estas 1 2 3 pero no

regresemos lo así y ahora vamos a abrir

llaves y al interior gracias vamos a

colocar la condición que queremos

evaluar para saber si vamos a permitir

algún tipo de acceso a estos documentos

que están

y ojo solo vamos a tener acceso a los

documentos que explícitamente señalamos

en nuestras reglas de seguridad por

ejemplo que yo podría ser algo como

permitir lectura y escritura si esta

condición es verdad es que bueno al

poner troupe nuestra condición va a ser

siempre verdadera que es un pequeño

atajo que pueden hacer si quieren acabar

como pancho con una base de datos

probada y manipulada por extraños y ojo

fíjense que quienes están en esta regla

de seguridad que está afectando a estos

productos tengo combinados lectura y

escritura para una misma condición dado

que yo podría hacer es es separarlos

permitir lectura si tales de condición

por ejemplo o podría decir permitir

escritura si tal otra condición sucede y

además podemos ser más específicos grid

la lectura por ejemplo se puede separar

en get y en list que es cuando queremos

leer un solo documento y list es cuando

queremos leer los varios documentos por

último write podemos separarla en create

delete y kate de modo que podemos

permitir ciertas condiciones ciertas

reglas para eliminar documentos y

ciertas otras reglas para crearlos o

actualizarlos pero bueno habiendo

explicado esto vamos a ayudar al buen

amigo pancho lo primero que pancho puede

hacer es bloquear la lectura y escritura

o a partir de ahora diré manipulación lo

primero que pasó para hacer es bloquear

la manipulación en la base de datos a

quienes no tengan sesión iniciada

recuerden que en nuestra aplicación

estamos haciendo uso de la autenticación

y es iniciamos sesión y cerramos sesión

acordemente cuando pues utilicemos esto

para nuestras reglas de seguridad

para escribir

diremos

lectura y escritura sí

a solicitud este objeto de request

representa en la solicitud de manipular

los datos sea para leer sea para

escribir request lo vamos a utilizando

mucho en este caso lo que hacemos es

evaluar si la solicitud de manipular

datos tiene la propiedad de oz' en ella

y es que sucede que quienes inician

decisiones airways y mandan a manipular

datos en fire store bueno

automáticamente esta mente se mandan la

información de quién tiene la sesión

iniciada tengo muy sencillo que podemos

hacer políticas es revisar que quien

manda la solicitud tenga sesión iniciada

comparándolo o con el operador de

diferencia y diciendo que no sea igual

andulo al interior de esta propiedad de

hoy también tenemos acceso como les dije

a todos los datos de la persona que

inició sesión y que está enviando la

solicitud de manipular los datos por

ejemplo regresando a nuestra base de

datos además de esta colección de

productos tenemos una colección de

usuarios y fíjense que tenemos al

interior de usuarios documentos cuyo

nombre es el y whitey de los usuarios

por ejemplo aquí tengo este usuario que

tiene el rol de súper admin

qué tiene este wajdi y si yo reviso mi

lista de usuarios registrados notarán

que éste you why they pertenece a la

suite o bueno aunque podemos hacer es

acceder a esta propiedad de wajdi en la

solicitud para revisar por ejemplo o

para crear una regla que permita que

solamente la suite o pueda modificar la

información de su documento lo mejor

aquí tenemos datos sensibles o buenos

datos personales como edad

este país qué sé yo y no queremos que

nadie salvo las fito edite estos datos

en esta colección de usuarios bueno para

ello vamos a crear otra regla más y como

bien saben comenzamos las reglas con

match seguido del path en este caso el

pan es usuarios y queremos que apliquen

a cualquier usuario y diremos que vamos

a permitir la escritura por ejemplo

si ojo si el request y el love y el wide

y son exactamente iguales

el wide y del usuario aquí en la

colección aquí vamos a poner usuario y

automáticamente cuando esta regla se

ejecute lo que va a suceder es que esta

variable estamos definiendo de aquí de

la colección de usuarios va a tomar el

nombre que le corresponde al documento

en este caso este dakar buena ya que iba

a decir buena y va a evaluar que el wide

in esquinas de la solicitud sea igual a

buena en este caso si la solicitud las

elas fito que tiene este wide y va a

permitir la escritura caso contrario lo

va a bloquear otra manera que tenemos

para implementar reglas es evaluando la

información del documento voy a ahorrar

esto acá y esto de aquí y supongamos

regresemos a nuestra base de datos

esta es la información que tenemos en

cada producto cantidad precio es q y

título pero supongamos que además

tuviéramos un campo un valor que se

llame es editable y aquí vamos a tener

un julián por ejemplo lo que podemos

hacer con este este campo d es editable

crear una regla de modo que sólo podamos

modificar los productos que tengan este

valor con mucho para ello podemos

acceder a la información del documento

que queremos someter a esta regla de

seguridad y aquí haríamos algo como

allowed

update si ojos y

research

punto de ira y ojo que este resort se

refiere al documento a la información

del documento al cual estamos atacando y

deidad como pueden suponer nos da acceso

a la información entonces ya que podría

colocar resorts de ira es evitable

y dis preguntando que si estos

verdaderos entonces vamos a permitir la

actualización

u otro caso por ejemplo hablando de

productos imaginemos que no queremos

eliminar productos que sean muy muy

caros entonces que podríamos decir

permite eliminar sólo si el precio

es menor que 100 por ejemplo y entonces

si nuestro producto tiene de precio 500

esta regla ya no va a permitir que se

elimine y así como podemos acceder a la

información del documento la información

que ya existe con tres puntos de ira

otra cosa que podemos hacer es evaluar

la información que la que el usuario

está mandando a la base de datos por

ejemplo aquí tenemos este producto que

vale 24 pesos ya lo mejor la espíritu se

mete al hub y hace una modificación para

que ahora cueste 100 pesos bueno con

fire veis podemos tener acceso a esta

información que viene llamémoslo hacia

la información que viene y evaluarla

para ver esta información que viene en

lugar de acceder a research puntos de

irak lo que haremos es acceder como les

había dicho hace rato a request request

tiene esta propiedad de resource que

también tiene la propiedad de ira y nos

da acceso a estas propiedades que la

persona está enviando a la base de datos

y por ejemplo lo que podríamos hacer una

regla que dijera bueno vamos a permitir

el cambio

este no lo sé a lo mejor el precio es

igual al precio que ya teníamos antes

esta regla lo que hace es esto evalúa el

nuevo precio que viene en la solicitud

lo evalúa con el precio que ya teníamos

bueno que no sé por qué puse este 100 si

los dos son iguales va a permitir que se

actualicen por ejemplo

a lo mejor presión o no es un ejemplo

hoy muy útil pero hablando de productos

tenemos un dato que sea más como que es

el valor único para identificar a lo

mejor las fit o viene acá vamos a

iniciar sesión

el aspecto va a agarrar este producto ve

y le dan editar y a lo mejor la suite o

por accidente modificó el esquí no

queremos eso verdad entonces lo que

podemos hacer aquí es decir sabes que si

el esquí que viene en la solicitud

request es idéntico al scoop que ya

estaba aquí guardado entonces si te

permite que actualices si no rebota la

solicitud pero bueno si como podemos

acceder a el documento a la información

que ya existía así como podemos acceder

a la información que viene en camino en

request otra cosa que podemos hacer es

acceder a documentos en ubicaciones

distintas del path para el cual estamos

trabajando nuestra regla pero lo que

estamos hablando de documentos en la

colección de productos pero que podemos

hacer por ejemplo es

crear una regla que sólo permita

eliminar

productos si la persona que hace la

solicitud tiene el rol de super admin

aquí en usuarios tenemos este usuario

con tal de edad cuyo rol es súper admin

y supera min es la única persona que

puede eliminar productos como

implementaríamos muy fácil venimos acá

creamos esta regla que era aplicar a

productos y decimos que va a ser posible

eliminar si por ejemplo quien solicita

tiene el estatus de súper admin para

ello vamos a borrar esto y vamos a

ocupar get para jalar un documento

natural a vamos a jalar un documento y

ojo aquí vamos a pasar la ubicación haya

mostrado como usuarios y aquí pondríamos

en la idea de la persona que solicita

por ejemplo supongamos que quien está

solicitando es el aspecto como obtenemos

su ied y muy fácil recuerden que podemos

acceder a request punto o punto y white

y ya esta manera vamos a acceder al wide

y de la persona que solicita y buscarlo

en la colección de usuarios pero ojo ojo

ojo que cada vez que trabajemos con get

y lo punto aquí cabe que trabajemos con

10 y que trabajemos con existe y habrá

más ahorita para qué sirve teníamos que

pasar el pad completo y cuál es el paz

completo ustedes pensarán hoy pero aquí

en tu base de datos quieras editar este

es el path que te dan ahora no hay más

no en realidad hay un pad aún más

completo que este y asia que nos arroja

aquí airways por defecto que note el

caso sería todo esto acá antes de la

colección entonces simple y

sencillamente lo copiamos

y lo ponemos antes del pad de la

colección y ahora un último dato y es

que cada vez que utilicemos que existe

la parte de las variables tiene una

sintaxis distinta en lugar de trabajarlo

con llaves lo vamos a envolver en

paréntesis y lo vamos a vamos a poner un

símbolo de dinero

antes de estos paréntesis entonces aquí

para acceder a de wajdi de la persona

que está mandando la solicitud haremos

lo mismo y envolvemos en paréntesis

y ahora aquí lo que estamos haciendo es

que estamos obteniendo este documento lo

que estaríamos obteniendo es el

documento cuyo nombre corresponda al

haití de la persona que está haciendo la

solicitud de momento es todo lo que

estamos haciendo lo que faltaría

entonces es acceder a la información de

dicho documento accedemos a la propiedad

de rol porque así es como aquí lo hemos

definido y vamos a revisar que sea igual

a super admin por ejemplo y entonces

ahora mismo esta regla que aplica

productos va a permitir eliminar

productos si

existe en usuarios

en un documento cuyo nombre sea igual a

la de la persona que solicita y que

además tenga por error súper admin sí

que son un tanto complicado pero tomarse

su tiempo para procesar lo que ven que

esto es muy pero que muy útil otra cosa

muy pero que muy útil además de gates es

el existe a lo mejor no queremos hacer

tanta validación y supongamos que todos

los que están aquí ya son súper hermits

no es necesario evaluar esta parte de

error basta con que alguien está aquí en

esta colección para saber qué es alguien

con derechos de eliminar en este caso en

lugar de get utilizaríamos existe para

saber que existe y entonces bastaría con

esta parte de aquí

saber que existe y ya no es necesario

acceder a la información si este

documento existe y si esto es verdadero

va a permitir eliminar

muy bien continuando vamos a borrar esto

data que pasa por ejemplo imaginemos

aquí tenemos productos y tenemos este

producto de acá y tenemos este otro

producto que ojo al interior de este

producto tenemos una sub colección que

se llama devolución es quien está su

colección de devoluciones tenemos un

documento con cierta información si

revisamos el path notarán que para

llegar a este documento que trata sobre

devoluciones tenemos que acceder a

productos luego a un producto en

particular no accedemos a una colección

con su producción su colección llamada

devoluciones y lo accedemos a una

devolución en particular qué pasa con

esto que pasa con tenemos colecciones y

documentos enraizados en el famosísimo

testing y qué pasa si yo le aplicó por

ejemplo que pases yo aplico una regla

que a producto y resulta que este

producto tiene estas devoluciones la

regla aplica la respuesta es no las

reglas sólo aplican al documento preciso

que establezcamos acá no a lo que tenga

en su interior ya que vamos a hablar de

en este porque en lugar por ejemplo en

lugar tiene que escribir productos

producto este devoluciones y luego de

evolución en lugar tiene que escribir

todo esto lo que podemos hacer es

enraizar pads para este reglas por

ejemplo vamos a borrar está acá

y supongamos que yo tengo esto de aquí y

aquí tengo mi regla que dice sabes que

esta es mi regla para productos ya que

estamos al interior de esta regla

estando aquí podemos escribir más reglas

y enraizar las de nuevo que el pad de la

regla madre se concatena con el pasa de

la regla hija aquí podría escribir much

devoluciones de evolución y pongo mis

condiciones y ahora lo que va a suceder

es que esta regla está limpiar de

productos toma este paz y lógicamente

ejecutarse leonés todo acá para que sea

más cómodo escribir reglas aunque

cuidado porque lo hicieran si las estén

raíz en mucho las meten mucho creo que

como que confuso leerlas por importante

saber que se puede hacer otra cosa que

se puede hacer es utilizar comodines que

pasa por ejemplo

fíjense aquí tengo dos reglas que son

dos condiciones que son idénticas tengo

esta condición en la hija que es igual a

la condición en la madre

qué pasa si no quiero escribir doble

como hago que las reglas de quién el

producto apliquen de evolución para eso

podemos ocupar comodines y los comodines

lo que hacen es que permiten que la

regla que aplique el comodín aplique

para todo absolutamente todo lo que

tenga en su interior así sean 50.000 su

colección es casi casi y para ellos muy

sencillo lo que haremos es en la parte

de la variable agregarle un igual y dos

asteriscos y ahora lo que va a suceder

es que yo puedo borrar esta parte de

devoluciones

y esta regla llegando aquí a producto

comienza a aplicar a todo lo que

producto tenga hacia adentro y en este

caso producto tiene devoluciones y si

devoluciones tuviera otra colección

consigue tercera colección si tuviera

una tercera colección pues bien en que

también va a aplicar para esto de acá

vale porque desde desde productos se

suelta

algo a señalar acerca de los comodines

es que solamente podemos tener un

comodín por reglas pero podemos ponerlo

en cualquier parte del pad esto a partir

de la segunda versión de las reglas y

ahora tomando esto en cuenta de los

comodines

tenemos esta regla se aplica producto y

al ser comodín por ende también aplica a

devoluciones pero qué pasa si además de

esta regla que yo sé que aplica a las

devoluciones yo hiciera otra regla que

sea algo así como en productos el

producto

y luego tenemos

devoluciones de evolución

qué pasa si tengo esta regla que por el

comodín dice que así si se permite el

tour se aplica a devolución y qué pasa

si además tengo esta otra regla que dice

que en el bíceps y que yo sé que aplican

evolución cuál de las dos es la que gana

puedo o no puedo modificar manipular las

devoluciones la respuesta es sí podemos

porque lo que ocurre cuando dos reglas

aplican al mismo documento siempre y

cuando hay alguna que sea turn fire page

toma esa y ya se permite entonces ojo el

momento de escribir sus reglas no

terminen atacando o aplicando por error

a este un mismo conjunto de documentos

aunque yo que vamos a borrar esto y

vamos a continuar

regresemos aquí a la parte de productos

y supongamos un escenario donde la única

persona que puede actualizar un producto

queremos que número uno esté autenticada

y número dos que este no cambia el

school entonces nosotros pondríamos aquí

escribir nuestra regla por ejemplo

podríamos bla bla bla bla bla pues ya

están y luego qué pasa si esta es la

evaluación la repetimos en en otras

reglas que tenemos otra regla lo mejor

para match para usuarios

usuario y aquí sorpresa ocupamos la

misma regla si no queremos estar

duplicando código fair game soporta o

permite crear funciones para abstraer

esta lógica de evaluación pensaba que yo

podría ser es aquí arriba aquí arriba

creará una función y voy a crear una

función es muy sencilla ocupamos la

palabra reservada de omisión asignamos

un hombre la función puede recibir este

argumentos llegó que solamente puede

tener un solo punto de de devolución

solo

entonces que podría ponerlo como

opciones de evaluar x equipo de recibir

argumentos intentamos poner que no y

aquí yo podría poner esto acá ya no ojo

aquí retorno únicamente esta evaluación

ok de esta evaluación puede ser true o

puede ser fundo estamos de acuerdo

entonces yo guardo este ir en esta

evaluación y entonces aquí lo único que

aliens permitir lectura escritura si la

bla bla y evaluar x y aquí hago lo mismo

si evaluar x y ya está por ejemplo vamos

a vamos a darles algo concreto para que

no me reclamen queremos revisar

la persona que solicita que se quite y

esté registrado aquí en usuarios pues

aquí vamos a llamar esta función

es persona en colección usuarios que va

a recibir un white y entonces lo que

haremos es retornar si esta persona está

en la colección para lo cual ya saben

que podemos utilizar

existe y pasar el path d

de esta conexión recuerden que es un paz

completo existe y que requieren pads

completos con esto acá esta parte previa

luego ya accedemos a la colección de

usuarios y lo vamos a acceder al

documento cuyo nombre sea igual al igual

y que estamos recibiendo como argumentos

si esto existe va a devolver en caso

contrario va a devolver falls y ojo que

las variables van con paréntesis cuando

utilizamos que es y existe entonces esto

lo ponemos en paréntesis

y estar acá también lo ponemos en

paréntesis y ahora lo que voy a hacer es

que por ejemplo aquí para este mamar el

producto de gen esto lo vuelvo normal

para para permitir lectura y escritura

lo que voy a hacer es evaluar en lugar

de evaluar esto vamos a poner si

personas están colección de usuarios y

le pasamos el white y en este caso sería

request punto a punto

y aquí lo ponemos

y listo ahora lo que va a pasar es que

aquí en producto evaluó si existe

pasando en el wide y recibe como

argumento checa retorna verdadero o

falso y aquí está aplica aquí

ok continuando en nuestra misión

samaritana de ayudar al buen pancho que

no le vuelva a suceder esta terrible

tragedia algo más que podemos hacer es

garantizar la escritura mínima de

ciertos datos o prohibir la escritura

este de ciertos datos y obligar la

escritura mínima de todos los datos y sé

que es de zenawi compulsó lo que quiero

decir es que podemos acceder o que

existen estos métodos que se llaman hash

hombre

también tenemos el método de hash n y el

método de hash que como pueden deducir

aquí evaluamos que tenga únicamente tal

que tenga alguno de varios o que tenga

todos necesariamente por ejemplo por

ejemplo supongamos de aquí en productos

no queremos que alguien por accidente de

de alta un producto con solamente el

título queremos que obligatoriamente dé

de alta los cuatro datos cantidad de

precios como pitic en este caso lo que

podríamos hacer es crear una regla que

permita al know how great si la

información

después punto de ir a

tres puntos research puntos de ira

tiene

todos estos campos que yo le voy a pasar

en este caso sería nombre precio este es

q y cantidad solo voy a permitir crear

los silos y lo que él me está mandando

tiene todos todas estas propiedades

aunque piense que las pasamos en una red

o también podríamos decir sabes que te

voy a dar chance de crear un documento

si el documento que me creas tiene por

lo menos alguno de estos con que tenga

alguno ya estás o por ejemplo imaginemos

que alguien algún despistado por

accidente me manda un campo que yo no

necesito para mi aplicación este campo

no me sirve es un campo basura que a lo

mejor está me arruina la aplicación este

campo se llamas destadas bueno en este

caso yo podría decirle te voy a permitir

que me crees algún producto siempre y

cuando la información que me mandes

tenga solamente alguno después si tiene

alguno que no caiga aquí entonces no te

lo permite por ende si la persona manda

en una propiedad que sea más de las

astas no está aquí y no se le va a

permitir

el documento ya por último ya que

estamos hablando de esta validación de

ciertas propiedades de los datos algo

más que podemos hacer con con reglas de

seguridad es prevenir combinación de

tipos de datos por ejemplo notarán que

me up este la cantidad es un entero y mi

código de la aplicación está pensado de

modo que asume que la cantidad va a ser

siempre un entero pero qué pasa si por

accidente alguien no lo agrega como

entero la griega como string en este

caso una aplicación se rompe y nos

metemos en un lío pues para ello las

reglas de seguridad también pueden

ayudarnos y es que

podemos definir que permita que

únicamente ciertos datos por ejemplo el

precio o la cantidad correspondan a

cierto tipo en este caso entero

para ello podemos evaluar el request lo

accedemos a risaralda recuerden que esto

nos da acceso a la información que viene

en camino a punto de ser registrada en

la base lados bueno pues aquí vamos a

evaluar esta cantidad por cantidades

parte del día así se llama en mi base de

datos así hasta aquí cantidad miren que

aquí están string donde está el entero

pero bueno aquí vamos a evaluar que esto

sea del tipo entero ok y además vamos a

evaluar qué

este precio

preciosa del tipo entero por ejemplo

y además vamos a evaluar que esté el

nombre sea de tipo string por ejemplo y

podemos evaluar más podemos evaluar que

sea string que sea éste flow que sea

este mapa para este que sea esté lista

maps sería para objetos de javascript y

lista sería para reid de javascript

tenemos más también timestamp que es un

objeto de tipo de fecha

también tenemos de tipo paz

veamos muchísimos se les invitó a que

los busquen en la documentación nos

vamos a estar todos aquí y ojo que

imaginemos por un momento que aquí

tenemos un campo que se llame no sé a

raíz y este rey es de tipo rey no hay

tiene dos valores

ok aquí tenemos nuestro rey si queremos

evaluar que estos valores el valor

alguno específico sea de cierto tipo

aquí podemos hacerlo aquí posible sabes

que queremos queremos evaluar que el

dato en la propiedad que se llama rey en

la posición 0 sea del tipo string por

ejemplo esto lo podemos hacer o en caso

de que no fuera una rey en caso de que

sea no lo sé un mapa aquí podemos

también acceder a la información dentro

de matrices sabes que lo que tenemos en

este mapa que se llame cantidad que sea

del tipo entero porque es el tipo floyd

vale yo también conocer con las reglas

de seguridad garantizar los tipos de los

datos

y ahora supongamos que ya tenemos que ya

tenemos todas nuestras reglas sobre

tenemos surf tenemos 500 500 casos de

reglas y muchísimas escenarios y tenemos

previsto todo a la pregunta es cómo

hacemos para que estas reglas de

seguridad comiencen a aplicar nuestra

base de datos porque fíjense que esto

esté aquí en local si me vengo para acá

a pesar de que guarden a pesar de que

guarde y me vengo aquí a reglas estas

reglas no han cambiado siguen aquí pues

en este caso lo que tendríamos que hacer

es desde nuestra terminal

ejecutar airways

y aquí lo que va a suceder es que vamos

a enviar fire veis todo lo que hayamos

modificado que bien pueden ser reglas de

seguridad que puede ser este que

tengamos austin este excel entonces que

vamos a ver la gente

bueno aquí me mandó error porque es aquí

donde bien con con las reglas que cree

vamos a

vamos a dejar únicamente este

y vamos a dar nuevamente el display

y es que sucede que me falta una llave

dentro y tenemos uno dos tres que además

tenemos dos no habían ido el mensaje de

error ahora si guardamos y la tercera es

la buena parís deploy vamos a mandar

estas reglas y aquí nos confirma y este

que ya están funcionando

bueno aquí manda error porque es cierto

lo había olvidado chicos es que este

fíjense que este proyecto está en el

plan gratuito que es por el plan

gratuito les dé acceso a ciertas cuotas

ciertos es del espacio de almacenamiento

cierto número de sesiones etcétera y fue

revisiones dos planes gratuitos el spark

y el place que es el de prepago si

quieren poder acceder a esta parte de

personalización de reglas de seguridad y

enviarlo desde la línea de comandos es

necesario que actualicen en su proyecto

al método de place

y una vez que lo hayan hecho ustedes

ejecutan no lo va a hacer ahorita

tendría que crear un método de pago una

vez que lo hayan hecho

le dan aquí en diploide y se envía y van

a aparecer aquí en las reglas de

seguridad aquí van a aparecer todas sus

reglas ahora estuvimos trabajando con

nuestro proyecto sino trabajando local y

como puede ver es muy bonito está la

extensión nos sirve bastante con el

marcado de código y el autocompletado

pero una ventaja que tenemos aquí desde

este lado desde el panel de control en

el navegador es que aquí podemos

comenzar a hacer pruebas antes de

lanzarlas por ejemplo si aquí yo

cambiara esta fecha al 28 aquí le puedo

dar en desarrollar y realizar pruebas y

aquí podemos este abrir una simulación

de cómo sería mi base de datos con estas

reglas que acabo de asignar algo más que

tenemos desde aquí es que una vez que

hayamos aplicado las reglas por ejemplo

podemos revisar cuántos bloqueos ha

habido cuántos errores lo mejor es que

teníamos un problema de escritura y ya

lo solucionamos con rechazar bajo

ciertas condiciones

y en caso de que no quieran este trago

tan complicado como están acá que sé que

puede parecer muy abrumador pueden

pueden más rápido y sencillo desde aquí

una vez que haya metido sus reglas

simular bueno y qué pasa si yo quiero

actualizar algún documento que estén

productos

producto por ejemplo qué pasa si quiero

acceder aquí

bueno pues vamos a darle en ejecutar me

va a decir que ahora mismo si yo intentó

acceder acá sin haberme autenticado

puedo modificar hacer este tipo de

acción y qué pasa yo quiero eliminar ojo

con esto dice que también se puede

eliminar y es que se puede eliminar

porque mis reglas de seguridad aníbal

que las de panchos son una completa

basura pero bueno alguien chicos está

sido olvidado de reglas de seguridad fue

una relativamente introducción básica

aunque vimos cuestiones un tanto

compleja solamente más cosas que pueden

adentrarse como por ejemplo pueden

utilizar éste vip para crear este un

mapa de diferencias entre la información

que viene la información que llega

podemos quedar reglas de seguridad con

base en cuernos no vimos cuervos

coherencia es un tanto complicado pueden

bloquear este ciertas consultas si una

persona que son la consulta no limitó la

cantidad de resultados pueden bloquear

consultas y este el orden no es el

adecuado si no es número en alfabético

etcétera porque esto con esto ya

arrancamos bien y con estos adaptamos de

un buen lío a pancho bien chicos este

regla no me gusta si les ha gustado y en

los comentarios escríbanme

tutorial les gustaría ver por aquí y por

último encuentran en pantalla dos vídeos

míos que sí han pasado bien hoy los

invito a que sigan viendo mi contenido

hasta luego
