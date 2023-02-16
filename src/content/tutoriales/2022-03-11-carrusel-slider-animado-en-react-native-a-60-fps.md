---
template: tutoriales
url: carrusel-slider-animado-react-native-60-fps
enlaceyt: https://www.youtube.com/embed/hD5Hi_XG4lc
date: 2022-03-10T23:56:35.529Z
title: Carrusel (slider) Animado en React Native a 60 FPS
metaDescription: 'Aprende cómo crear un carrusel (slider) animado en React
  Native con desempeño de 60 fps #tutorial #webdev #reactnative  '
tag:
  - React Native
  - Misceláneo
autor: Adrián Salgado
keyword: carrusel animado react native
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/16-carrusel-animado%2F16-carrusel-animado.png?alt=media&token=2c00d7de-d4e5-4be6-8714-c7bedc363067
---

## Transcripción

hola chicos que tal bienvenidos en este

vídeo aprenderemos cómo crear un

carrusel animado en ryanair y de modo

que al momento de deslizar ocurran dos

efectos como pueden ver en pantalla el

primero es que el elemento de enmedio

que vayamos mostrando se va a ir

levantando en ese primer efecto y el

segundo es que tendremos de fondo unas

vistas que irán cambiando al mismo

tiempo que deslizamos este efecto

funciona tanto en azul como en android

como pueden apreciar y lo mejor de todo

es que es un efecto muy sencillo y que

además tiene muy buen desempeño siguió

activo aquí este panel para ver

desempeño ver los frames por segundo

pueden ver que a pesar de que es liso y

hay muchas animaciones en juego el

desempeño permanece óptimo si les

interesa aprender cómo crear este

carrusel acompañen vale lo primero que

hay que hacer es abrir alguna terminal

en su equipo y previo a esto deben de

haber instalado el zelai de expo si no

habían instalado basta buscar xbox click

aquí viene cómo instalarlo de manera

global en su equipo muy bien ya tiene

está instalado abren su terminal y lo

que haremos es primero dirigirse al

folder desde el cual quieren trabajar yo

voy a trabajar desde mi escritorio y una

vez allí escribimos explained para

arrancar un proyecto de aquí nos

preguntara cómo queremos llamarlo yo lo

nombraré tutorial carrusel animado lo

aquí nos pregunta qué plantilla queremos

utilizar escogemos la que nos da por

defecto la primera tabla presionamos

enter aquí nos prepara todo el proyecto

nos instala las dependencias le damos

unos segundos no suele tardar mucho

bueno depende un tanto de su conexión a

internet y de su equipo

muy bien aquí ya está instalado y lo que

tenemos que hacer es dirigirnos al

folder que se acaba de crear en mi caso

este de aquí para ello vamos a escribir

cd y desde aquí abrimos el proyecto

abrimos el folder en nuestro editor

favorito yo escogeré de scout bar ya

estamos aquí voy a hacer esto más grande

no hace falta modificar mucho vamos a

trabajar todo desde este archivo de

abyei es ya cerramos esto y bueno antes

de cerrarlo vamos a revisar que esté

todo correctamente instalado para ello

abre en la terminal integrada de su

editor y ejecutamos expo

esto nos va a correr este ambiente de

desarrollo este metro y desde aquí

podemos revisar que esté todo en orden

lo pueden hacer abriendo una pestaña del

navegador

que es lo que yo haré ahorita para para

breve

y ésta funciona perfectamente sin

embargo lo que vamos a hacer es para

dispositivos móviles entonces lo que yo

haré es abrir voy a cerrar esto lo que

yo haré es abrir un simulador de app más

adelante al final abrirá también el de

android para revisar que esté todo orden

lo de mientras un emulador basta de

vuelta a nuestro editor pero puede ser

más pequeño voy a cerrar el panel esto

lo extendemos

y desde la terminar en cualquier momento

si presionan a hoy van a acceder a el

simulador en apple o el android abrir el

de apoyo que sé que tengo aquí abierto o

cuando tengo aquí al lado va a revisar

que esta aplicación que se bajó de

export la tiene por defecto esté

funcionando correctamente

muy bien todo perfecto ya podemos

comenzar a trabajar todo está

funcionando lo primero que hay que hacer

es deshacernos de todo este relleno a un

sabor realista de aquí

vamos a esconder estoy acá y ya está

nuestra aplicación muy bien podemos

comenzar a trabajar en el carrusel lo

primero que hay que hacer es definir las

imágenes que queremos mostrar esto puede

ser que lo saquen de alguna app y que lo

saquen de algún este jason qué sé yo yo

en mi caso simpre sencillamente voy a

pegar unas imágenes que ya tenía

guardadas ojo todo esto va dentro de una

radio gay va adentro una red para poder

ciclar o limpiar como dicen algunos esto

lo primero lo segundo es que vamos a

importar desde ryanair y ciertos

elementos con los cuales estaremos

trabajando el primero de ellos es flat

list

el segundo y el tercero dimensions el

cuarto 62 y el quinto animated

vamos a dar la gana con todos estos

componentes y lo tercero sería definir

ciertas constantes que utilizaremos para

nuestros estilos pero primero

utilizaremos dimensiones para obtener

las dimensiones del dispositivo en el

cual estemos de modo que nuestra

aplicación sea 100% responsiva para ello

basta decir algo como constante ancho es

igual a dimensiones punto get windows y

luego ancho lo mismo para la altura

muy bien esta es la primera parte la

segunda parte es definir ciertas

constantes de estilo las cuales o bueno

la idea es que tenemos que definir qué

porcentaje de la pantalla queremos que

ocupe cada elemento del carrusel para

ello dirá algo como constante hay

constante un espacio contenedor y sixto

mayúsculas para simbolizar que no

debemos modificarlo y cada contenedor

deberá medir lo que sea que tenga de

ancho el dispositivo x vamos a decir

algo como puntos 7 puntos 7 es una vida

aproximadamente aquí vamos a poner una

de espacio para fines decorativos

digamos que esto es igual a 10

ahora lo siguiente es mostrar todas

estas imágenes en un carrusel aquí en la

aplicación para ello utilizaremos flat

list

pero bueno antes vamos a modificar este

vídeo por un safe si no lo conocen esto

nos garantiza que nuestra aplicación no

choque con esta parte de los teléfonos y

vamos a asignarle

unos cuantos estilos

utilizaremos esta jms punto container y

obviamente estos estilos no existen por

lo tanto hay que definirlos aquí abajo

de la aplicación bueno se me olvidaba

que al utilizar este la plantilla de la

expo ya nos asigna bueno ya tiene este

estilo creado por mera casualidad pero

ya que estamos aquí trabajando con los

estilos vamos a crear el estilo para el

elemento que va a ir al interior de cada

carrusel vamos a ver cualquier nombre y

yo lo llamaré no lo sé toaster image lo

que sea y dentro de aquí en los estilos

que pondremos o cualquier recomiendo que

utilizaré son los siguientes un ancho de

el 100% luego una altura que sea igual

al ancho del contenedor por 1.2 de modo

que siempre sea rectangular y más alta

bueno que se va sí que tenga esta

proporción siempre la doca misma de

proporciones y no todas las imágenes

tendrán esta proporción debemos de

asegurarnos que al momento de que sea

como de la imagen sea bajo modo cover

por último vamos a darle un radio de

unos 24 un margen de 0 y hacia abajo

vamos a meterle

margen de 10 y es una muy bien tengo los

estilos y ahora sí vamos a mostrar todas

estas imágenes en nuestro carrusel aquí

dentro de la aplicación lo que haremos

es poner un flat les vamos a quitar

vamos a

cerrarlo para que no haya problemas y

flis lo que hace es que recibe

información y la mapea y al mapear la

nos escupe o nos regresa a la retorna el

cualquier componente que nosotros

queramos regresar entonces es muy

importante en este paso paso con la

información que necesita flat list lo

primero la información por supuesto de

ira en nuestro caso vamos a ocupar este

array que previamente definimos bajo el

nombre de imágenes aunque esto para de

ir a lo siguiente es indicarle a flat

list cómo queremos que asigne los keys o

llaves para que cada elemento que escupa

o que regrese tenga este un haití único

preocupamos el extractor y le decimos

que utilice el mismo nombre de la imagen

en este caso el string de las imágenes

por último tenemos que indicarle qué

elemento queremos que vaya regresando

entonces aquí de estructuramos el aire

en que recibe de de ira y además vamos

indicarle que queremos que también tenga

en cuenta

aquí vamos a correr una función que

regrese para nuestro caso va a regresar

primero a un view y este view debiera

tener por ancho el ancho de contenedor

que habíamos definido este va a ser el

contenedor máximo por así llamarlo

ok y ahora al interior de este vio bueno

esperar un segundo aquí me aquí me he

confundido este vamos a llamarlo vamos a

ver el nombre mejor ancho contenedor ok

ancho contenedor ancho contenedor y aquí

me faltó un pequeño

paréntesis bueno es paréntesis son un

break probado como les decía este view

va a ser o va a evitar que los elementos

cubran más espacio del que hemos

definido y ahora al interior vamos a

anidar otro view cuyo estilo debiera ser

más o menos más o menos así lo primero

es meter un poquito de margen horizontal

ya que ocuparemos espacio la constante

que hemos definido en parís también

vamos a meter el espacio que son 10

píxeles en radio de borde vamos entre 34

habíamos ido 24 más 10 34 vamos a

meterle un background color de blanco y

una line on line aire mes de centre ok

ahora sí dentro de este segundo view que

está anidado dentro del contenedor

máximo vamos a escupir no sé por qué me

ha dado por decir escupir en este vídeo

cumplir una imagen ok y la fuente tiene

que venir de cada elemento de la rey que

estamos limpiando en mi caso aquí en la

fuente vamos a meterle aire como fuente

y en estilo un estilo vamos a

pasarle el estilo que hemos definido

antes que si no me equivoco se llamaba

ahora estamos punto póster image y ya

está aquí están nuestras imágenes

como pueden ver podemos deslizar y esto

se debe a que por defecto flatley nos

aparece en vertical vamos a cambiar eso

déjenme primero le disgustó aquí y ahora

sí vamos a cambiar eso de vuelta aquí en

plan línea que estamos retornando a

nuestro carro sea vertical vamos a hacer

ciertas modificaciones para que carrusel

sea mejor lo primero volverlo horizontal

esto es podemos como otro lo segundo es

ocultar es esta barra de deslizamiento

que aparece aquí para ello diremos shows

esto lo tenemos en falso para evitar el

estilo no ocupamos style sino que

ocupamos content containers esto y aquí

pasamos los estilos para el flat list de

mientras solamente le vamos a meter un

parking top para que sea más fácil

trabajar con él lo veamos encargamos del

tema del tamaño y por último fíjense que

cuando yo deslizo puedo deslizar muy

rápidamente bueno aquí no no lo puedo

simular en teléfonos y deslizar así de

rápido se continuaría deslizando hasta

el final como que toma impulso para ello

vamos a indicarle que aquí queremos éste

evitar eso con una propiedad que se

llama

no mentiras concede cash the celebration

rate y aquí le vamos a pasar 0 y por

último queremos que cuando llegue a

cierto deslizamiento

el elemento

automáticamente se queden listas se

quede en medio y para ello vamos a decir

ocupar mejor dicho snap

winter y aquí le vamos a pasar como

argumento el ancho del contenedor solo

ancho del contenedor y esto quiere decir

que cuando hayamos llegado a cierto

ancho automáticamente nos acomode la

imagen company del cliente si yo aquí la

suelto se acomoda se acomoda lo cual es

bastante útil y casi lo olvido para

asegurarnos que tengan muy buen

desempeño vamos a utilizar una propiedad

que se llama escrow event road extra que

vamos a usar el 16 ustedes no pregunten

solo gocen

son cosas y déjenos citar este no es un

tutorial de extensión del plan listing o

de carrusel deben trabajar con estos son

los que no tienen un carrusel que se

bastante bien pero vamos a animar llegar

la parte parte buena del tutorial gente

horas

recuerdan que habíamos importado

animated bueno pues anime nos permite

animar quien había imaginado elementos o

componentes propios de ryanair para ello

vamos a tomar este clan list donde es

donde está aquí y vamos a escribir antes

de dar list animated vamos a pasar un

punto y ya con esto nuestro plugin es

animado bueno es propenso o puede ser

animado una vez que hemos hecho esto

vamos a poder acceder a una nueva

propiedad que se llama un scroll y aquí

lo que haremos es utilizar un evento

propio de anímales este animar el evento

recibe distintos argumentos y lo que

haremos es tomar el evento que se genera

al deslizar de dicho evento récord en

los eventos registran muchísimas cosas

bueno de este evento que estamos tomando

vamos a estructurar únicamente

espacio que se ha deslizado el carrusel

y dentro de este espacio que se ha

deslizado vamos a tomar el valor en x

cuanto se ha deslizado el valor en x y

dicho deslizamiento lo vamos a abordar

en una constante que se llama crowd text

adicionalmente este animal es diferente

esta función vamos a pasarle a otro

argumento en el cual indicamos que

queremos utilizar naked driver

nuevamente no pregunten sólo gestionó y

vamos a cerrar esto de aquí

estoy aquí ahora que nos va a indicar

que hay un error que no encuentra esta

constante esta constante hay que

definirla previamente para ello de

vuelta aquí en nuestras constantes y

variables diremos que es pro x es igual

a un valor animado que va a empezar

desde cero y este valor animado lo vamos

a envolver en un esté en una referencia

del break de modo que sea constante y

que no se pierda conforme vayamos

renderizando para ello todo esto lo

envolvemos

en un paréntesis y aquí le vamos a poner

que esto sea un break punto web

y por último le pasamos el la propiedad

de actual jardín y de momento pareciera

que no hemos hecho nada fíjense que el

carro se funciona se puede deslizar

efectivamente no hemos hecho nada más

que guardar el deslizamiento en x en

esta constante que va a permanecer

gracias a ellos wayne y ahora lo que

haremos es tomar este valor de cuánto se

ha deslizado x para saber en qué

diapositiva un elemento estamos y

levantarlo hacia arriba meterles

animación esa animación delantal

animación guapa y para ello es muy

sencillo vayamos a que a nuestro flat

list recuerden que estamos mapeando y

renderizando estos virus los cuales al

interior está una imagen ok bueno pues

antes de retornar el view dentro de la

función de mapeo vamos a definir dos

este constantes la primera es una

constante que llamaremos input range ok

sting paul raines es uno de los

argumentos con los cuales se animaremos

las diapositivas las comenzaría a mariah

positivas creo que es más fácil

llamarlas así bueno pues este

importantes como pueden asumir recibe un

rango nosotros utilizaremos tres valores

este que está aquí este que está acá y

este otro que está aquí les explicó la

idea es que vamos a tomar en cuenta el

índice de cada diapositiva y de acuerdo

al índice vamos a tener siempre presente

cuál fue el elemento anterior cuando el

elemento en curso y cuál es el elemento

que sigue y con base en esto y con base

en el ancho que hemos definido conforme

vayamos deslizando estos anchos en

concordancia con los índices iremos

levantando las las diapositivas entonces

este es el primer valor y el segundo

valor es el autor

en el cual definiremos cómo queremos

animar las diapositivas de acuerdo a de

acuerdo a donde estemos

por lo tanto diremos que el anterior

queremos que esté donde estaba

queremos que la última esté donde esté o

donde estaba donde vaya a estar la b

roly y la que esté en medio la que esté

en curso pediremos que se desplace 50

hacia arriba por los que está en medio y

ya con estos valores podemos correr o

crear nuestra función para ir ajustando

la altura para ello crearía una

constante más que lo llamaremos

translate

y esta es una propiedad de 100 se le

diremos lo siguiente toma el valor que

tenemos guardado aquí en scroll ex toma

este valor e intercala lo extrapola lo

interpol al 11 consigan espanyol y haz

lo siguiente

toma el input game que tenemos definido

y escupe el autor y ya con esto podemos

cerrar esta constante y ahora simple y

sencillamente vamos a pasar esta

propiedad como estilo a nuestra imagen

no al mala imagen al view donde aquí

diremos algo como transform y le vamos a

pasar este valor de acá translate y pero

para que funcione tenemos que convertir

este view en un animation dado que

estamos trabajando con valores propios

del email recuerden que scroll ex es un

valor de animal y aquí en pantalla me

marcó un error dice que el juego que

estoy utilizando tiene que ser

declararon declarado el interior y lo

que haré es declararlo precisamente que

al interior de esta función

y vemos que ya está en curso este efecto

de ir levantando la diapositiva en curso

vean qué precioso

lo que está ocurriendo es que nada más

se ve la gente en curso y la siguiente y

así se ve bien podrían dejarlo así pero

lo que haremos es darle un poquito de

espacio para que se vean las tres

siempre para ello vamos a definir este

otro valor otra constante que llamaremos

espacio lateral y lo queremos es lo

siguiente vamos a tomar el ancho que

tenga nuestro dispositivo le vamos a

restar el ancho del contenedor y lo

vamos a vivir entre dos de modo que lo

que quede vamos a meter aquí y acá de

vuelta aquí en el flat list en el

counter container además del parking

vamos a meterle un parking este horizon

no margin horizontal y con valor el

espacio lateral

y listo nuestro carrusel está animado y

ahora que nuestro carrusel está está

animando se funciona el siguiente paso

es este meterla aquí un fondo que vaya

cambiando conforme deslizamos y hago en

lo cual no hice mucho en fácil siquiera

que podemos pensar quizá podría causar

errores es de hacer notar que la red

cada elemento es un enlace de imagen ok

por ello es que en el flat list puedo

hacer algo como indicarle que tome el

aire y que la fuente de la imagen sea el

aire pero si usted estudian un james

jones y jason algún llamado alguna api

lo único que hacen es puedes poner aquí

en fuente el aire en punto punto imagen

o de lenovo algo así pero bueno lo que

importa que ya funciona esto que veamos

a la segunda parte esta parte de aquí

este fondo animado en inglés o bueno es

algo que he visto mucho suelen llamarlo

back group y vamos a crear un componente

que se llama mcgraw

aquí dentro de nuestra misma aplicación

vamos a crear una función llamada

function back drop que va a recibir

va a recibir como dato el scroll hex

y aquí lo que haremos es regresar

cumbio

dicho view muy importante hay que

únicamente al estilo lo primero aquí

vamos a meterle un array de estilos lo

primero es que tenga cierta altura

queremos que no creamos ocupe todo

queremos que ocupe cierta altura y para

ello vamos a crear una constante más

vamos a llamar la altura by rob y esto

va a ser igual a lo que sea que mida

nuestro dispositivo por punto 5 entonces

aquí dentro de los estilos diremos en

altura toma la altura del factor

lo siguiente en ancho queremos que tome

el ancho completo del dispositivo por lo

tanto lo podemos dejar así según surjan

de una manera más rápida de definir este

las propiedades y por último en posición

creamos absolute y lo vamos a ubicar

desde el top 0 y hasta ahora al interior

de este view vamos a tomar nuestras

imágenes nuestro rey de imágenes lo

vamos a mapear y retornar imágenes

naturalmente pero yo diremos algo como

imágenes map donde mostró marca de

imagen y su índice y vamos a correr una

función que regrese

que regrese una imagen cuya fuente sea

igual al

a éste y los demás

cuya imagen o fuente sea igual a cada

uno de los elementos de la red

ahora que adicionalmente hay que meterle

en estilos que mira el ancho del

dispositivo y por altura la altura del

backup que hemos definido algo más o

menos como esto

si podemos copiar y pegar y ya lo que

estamos olvidando para lo cual hemos

puesto este a raya aquí en la parte en

este año es el segundo estilo el cual

utilizaremos estados y punto absoluto

field object y ya con esto en mente de

vuelta a nuestra aplicación

vamos a colocar aquí nuestro queridísimo

back road

muy bien y así es como tenemos el carrús

ya tenemos el fondo ya que quiero que

noten es que la imagen que aparece aquí

es la última imagen que está acá y esto

se debe a que todas las imágenes están

apiladas estén apiladas porque estamos

ocupando el posicionamiento absoluto

y agua que no toque que está mal es el

hecho de que esta imagen no sale

completa y esto se debe a que aquí en el

estilo del animated marlies

en lugar de meterle margin vamos a

meterle un jardín

y ahora si ya está completa i'm not

margin mala mía pero vale de vuelta aquí

al back drop ahora lo que sigue es que

conforme vayamos deslizando la imagen

que está aquí vaya cambiando y

corresponda con el área positiva para

ello haremos exactamente lo mismo que

hicimos con este efecto de levantar pero

en lugar de jugar con la posición en que

lo queremos es jugar con la capacidad de

cada imagen para ello aquí en imágenes

en esta parte del mapeo una función que

regresa antes de regresar componentes

vamos a copiar los mismos valores que

tenemos aquí el input range el out games

y esta función que tras la paho

extrapola o no se conocerían pero que yo

lo investigado antes de comenzar este

tutorial pero no aquí tenemos nuestros

valores el input range que refiera lo

mismo anterior que en curso y siguiente

con la diferencia de que aquí en el

output range en lugar de decir que la

que está en curso se juegue o se mueva

50 aquí le pondremos 1 porque vamos a

trabajar con opacidad tengo que lo

anterior tenga 0 la que esté incurso

tengan uno de opacidad se vea y la

siguiente no se ve

y ya esto de aquí vamos a nombrarlo

fácil

y aquí en estilos dentro del estilo de

la imagen

diremos que

aquí vamos a transformarlo y en lugar de

esquel

queremos que en lo fácil tenga el valor

de opacidad

y aquí me marca error número uno porque

estamos trabajando con valores the

animated recuerden que escribe ex es un

valor en made por lo tanto esta imagen

hay que cambiarla animated tonto y match

y segundo me está marcando error porque

o paz shirín o no pertenece a

transformar y simple y sencillamente

diremos algo como copasir y es igual a

sí misma y ya está de modo que ahora

conforme vamos deslizando la imagen va

cambiando cuando la opacidad del fondo y

es así como tenemos nuestro carrusel por

último punto que quedaría lo que hace

que se vea bastante bien no tengo como

aquí este fondo está delimitado donde

comienza y dónde termina eso lo podemos

cambiar con un pequeño gradiente y para

ello vamos a instalar aquí un componente

que se llama

línea creyente

y este componente de linear green se

importa desde aquí pero ojo que está

este paquete no lo hemos instalado expo

lineal bien para ello de vuelta que

nuestra terminal haremos algo tan

sencillo como es enviar instó expo línea

creyente

una vez instalado dentro de nuestro

background la parte que va aquí atrás de

fondo dentro del río dentro del

contenedor vamos a devolver

además de las imágenes este lineal

creyente y que vamos a pasarle distintas

propiedades lo primero cóvers colores

tiene que ser una ley en el cual

indiquemos qué colores queremos utilizar

en nuestro caso vamos a trabajar desde

transparente hacia blanco

y lo segundo es indicar el destino en

cuanto a estilo queremos que en altura

tenga la altura del bad drop en ancho

queremos que tenga el ancho de la

pantalla en posición queremos que sea en

absoluto igual que todo lo demás y que

comience desde hacer guardamos y aquí

bueno se hace creación la aplicación no

hay problema quiere terminar volvemos a

correr y para abrirla y ver nuestro

resultado final

y aquí lo tienen vean como ahora el

fondo se pierde esta imagen siempre

tarda en cargar no sé por qué y si acaso

lo que podemos hacer también para que

sea un poquito más pero a este fondo

ningún tanto consejo personal es meterle

un poco de iluminación o desenfoque

mejor dicho

aquí en la imagen que estamos retornando

en la propiedad que se llama se llama

blog beirut y vamos a ponerle algo

tranquilo un 10

pero tienen chicos es así como termina

nuestro proyecto final y para que vean

que no he hecho trampa o que no cumplir

con que funcionaba tanto en android como

napo vamos a correr un simulador de

android y vamos a ejecutar esta misma

aplicación en android para que vean y

cercioren que funciona para comer pronto

mientras tanto se les ha gustado vídeo

suscriban se dejen me gusta y como

siempre los comentarios pueden indicar

me qué contenido les gustaría ver por

aquí aquí de vuelta en la terminal

presionamos para ejecutarlo la

aplicación de android le damos unos

segundos o que exista funciona

exactamente

cuando lo tienen chicos el tutorial de

hoy en pantalla van a ver dos vídeos uno

y recordado por youtube otro es mi vídeo

anterior si os interesa con un clic y

nos vemos en la próxima
