---
type: tutoriales
slug: zoom-pellizco-pinch-react-native
enlaceyt: https://youtube.com/embed/tbZAgA-qH74
date: 2022-04-27T20:30:17.465Z
title: Zoom con Gesto de Pellizco (Pinch) en React Native
metaDescription: >
  Aprende cómo realizar zoom con el gesto de pellizco (pinch) en React Native
  #tutorial #reactnative
tag:
  - React Native
  - Desarrollo 101
autor: Lasfito
introThumbnail: Aprende cómo realizar zoom con el gesto de pellizco (pinch) en React Native
keyword: zoom imagen react native
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/24-react-native-imagen-zoom%2F24-pincha-zoom-react-native.png?alt=media&token=b9606c6c-8844-4551-8ffc-f604f5bb4870
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo crear un efecto

dinámico de zoom en ryanair y es

dinámico porque a diferencia de otros

tutoriales donde sólo podemos hacer zoom

en la parte de en medio en este tutorial

podremos hacer zoom en cualquier parte

de la pantalla que nosotros elijamos

esto funciona tanto en papel como en

android por ejemplo hagamos zoom en el

pie de la niña

y además estaremos trabajando con lo

último de reanimar el primer jet 2 y lo

último y más reciente de brückner y

extra hardware que es la versión 2.0 y

bueno si les interesa aprender a hacer

este efecto dinámico de zoom acompáñenme

[Música]

vale y antes de comenzar dos cosas la

primera recordarles que encuentran el

código de esta aplicación en la

descripción del vídeo junto con todos

mis tutoriales y la segunda invitarlos a

que se suscriban a miwa littín habiendo

dicho esto vamos a abrir una terminal yo

trabajaré desde el escritorio y una vez

aquí vamos a ejecutar expo init nos va a

preguntar un nombre yo le colocará su

react neira y nos pide qué tipo de

plantilla la primera está bien la camisa

blanca presionamos enter y ahora lo que

va a suceder es que se van a instalar

todas las dependencias necesarias para

expo y react mail

con el que se ha instalado abrimos la

carpeta con nuestro editor favorito en

mi caso yo trabajaré con vigueses code

ya podemos cerrar esta terminal y antes

de continuar lo antes de abrir la

aplicación vamos a instalar dos

servicios con los cuales estaremos

trabajando el primero y bueno por el

primero escribimos en nuestra terminal

vamos a escribir expo instó

ryanair y ya está

amber esto es para poder trabajar con

gestos en pantalla como hacer zoom es de

mover a arrastrar etcétera y el segundo

ejecutamos expansión

ryanair y ryan email de éstos para poder

trabajar con animaciones y tengamos una

interfaz mucho más

más suave por así decirlo y ahora para

plural y merece además de ejecutar esto

aquí debe instalar la paquetería y como

pueden ver ya está acá además de yo

tenemos que irnos a nuestro archivo de

configuración de babel y aquí vamos a

escribir en plugins utilice white night

live animated diagonal blogging aunque

esto es necesario para que funcione

correctamente y ahora lo que haremos es

ejecutar o abrir nuestra aplicación pero

en lugar de correr expuestas vamos a

hacer expo r- se vale para que elimine

cualquier caché que pudiera tener y

ejecuta todo desde cero ahora para poder

ver nuestra aplicación en tiempo real es

necesario tener algún simulador en mi

caso yo voy a tener abierto uno de up y

aquí lo que haremos es bien sea desde la

terminal o desde esta pantalla de

internet aquí pueden presionar en este

botón una determinada puede presionar la

tecla y para apple

a android y presionar en la tecla y mira

lo que sucederá es que me abrirá esta

aplicación en el simulador para

verificar que esté todo en orden

valeri como pueden ver en pantalla ya

tenemos la aplicación que viene por

defecto conexpo lo cual significa que

todo ha ido de maravilla y ahora vamos a

comenzar a trabajar pero y vamos a

cerrar todo esto de aquí vamos a

trabajar todo dentro de nuestro archivo

de app para que lo tengan en cuenta y lo

primero que haremos es eliminar esto

eliminar el status vaart y de ryanair y

vamos a importar una imagen y bueno

imagen y dimensiones

ok aquí la idea es que vamos a tener una

imagen cuadrada que tenga el ancho del

teléfono por lo tanto vamos a ocupar

dimensiones para obtener cuál es el

ancho del dispositivo actual pero ya

veremos algo como weeds es igual a esto

de aquí y luego vamos a crear constantes

para las dimensiones de la imagen y

abran más adelante porque es que esto es

útil puede mientras llegamos algo como

ancho imagen es igual a el ancho del

teléfono y haremos algo como alto imagen

también es igual a el ancho del teléfono

ahora lo que sigue es que borremos esto

colocamos una imagen cuyo tamaño sea

igual a estilo img este estilo no existe

vamos a crearlo diremos que img es igual

a esto de acá con esto acá y con esto

debiera bastar por ancho le damos el

ancho que definimos aquí y por al túnel

damos el alto que dejemos acá ahora para

que la imagen muestra que tenemos que

darle algo que mostrar para lo cual en

el atributo de eso les vamos a pasar un

doble objeto bueno vamos a ver vamos al

objeto mejor dicho porque estas llaves

son de la propiedad y aquí vamos a

colocar un rey y vamos a colocar alguna

url que tengan de alguna imagen yo tengo

una copiada vamos a pegarla y lo que nos

haría falta es cerrar este componente de

imagen y ahora fíjense que hay un

problema que nos dice que no puede

encontrar esta variable y es que sucede

que ancho imagen y alto imagen lo

definimos al interior de up pero estilos

está afuera pero yo vamos a tomar estos

estilos y ponerlos al interior de de

nuestra función de vamos a colocarlos

guardamos y ahora deberíamos tener una

imagen como ésta con el ancho del ancho

del teléfono y con la altura de el mismo

ancho pero esto es algo muy sencillo que

seguramente ya sabían hacer ahora la

pregunta es cómo podemos darle un poco

de zoom para ello vamos a comenzar a

trabajar con los gestos y entonces vamos

a importar dos componentes el primero

que se llama jester y el segundo que se

llama gestor

detector o los detector y esto lo

importamos desde ryanair y esther under

ok guardamos y ahora si ya tienen

experiencia con esto de acá deben de

saber que sale una nueva versión la

versión 2 con la cual es muchísimo más

sencillo de trabajar con gestos en

pantalla de dispositivos es muy fácil lo

que tenemos que hacer es definir qué

tipo de gesto queremos estar

persiguiendo para ello vamos a crear

este gesto en nuestro caso queremos

trabajar con un gesto de dos dedos que

hagan como un pinchazo en pantalla así

lo llamaremos pinchazo pantalla como

vamos a poner el príncipe pincha su

pantalla es igual a iniesta ponemos un

pone aquí están todos los tipos de

gestos que tenemos

nuestro caso nos interesa pinch y luego

a quien pincha vamos a definir que

queremos que ocurra en distintos

escenarios por ejemplo diremos que

cuando esté actualizándose este gesto

vamos a correr una función que de

momento lo enfocará es imprimir en

pantalla y chacho pantalla momento es lo

único que hará guardamos y ahora ya

tenemos definido qué tipo de gesto

queremos queremos incorporar vale pero

ahora tenemos que enlazar o tener una

manera de escuchar este gesto para ello

vamos a ocupar el detector de gestos y

es más decía pero antes de continuar en

lugar de un view vamos a trabajar con un

6

y esto vamos a actualizarlo

y ahora lo que vamos a hacer es este

detector vamos a ponerlo aquí vamos a

envolver a la imagen con él con el

detector de gestos

envolvemos la imagen

ok y ahora adicional desde el detector

tenemos que indicarle qué gesto queremos

escuchar en esta pantalla para ello

accedemos a la propiedad de gestur aquí

vamos a pasarle nuestro buen pinchazo

pantalla de manera que le estamos

indicando a este detector oye quiero que

estés escuchando este pinchazo de

pantalla y hagas lo que sea que te haya

dicho que quiero que hagas

ok

ahora que nos manda un error que dice

bueno ya desapareció

tan pronto yo haga aquí este pinchazo

este detector me lo va a captar porque

el pinchazo va a correr va a ocurrir en

la imagen y la imagen está el interior

del detector que nosotros le dijimos que

imprimirá en pantalla esto aquí vamos a

ver si funciona

aquí en la terminal vamos a hacer un

pinchazo y fíjense que me imprime en

pantalla esto de aquí cuando yo hago así

lo cual sería que está todo funcionando

de maravilla es así de fácil cómo

funciona la versión 2d y streamer y

ahora vamos algo más interesante que

imprimir en pantalla lo que haremos es

que al hacer este pinchazo weight no lo

que vemos es que hacerte pinchazo

queremos que la imagen incremente de

tamaño y para ello es muy muy muy

sencillo lo que haremos es comenzar a

animar cosas para ello vamos a importar

animated desde adivinaron correctamente

desde ryanair email ok y ahora vamos a

hacer esto vamos a hacer lo siguiente

cuando yo haga el pinchazo aquí vamos a

escuchar qué tan grande es este pinchazo

que estoy haciendo y dependiendo de qué

tan grande sea el pinchazo vamos a

escalar la imagen de manera proporcional

ok entonces aquí en el en el ocde en

lugar de imprimir en pantalla el

pinchazo pantalla lo que haremos es

primero revisar qué tan grande es este

pinchazo pero yo vamos a acceder aquí al

evento hay una propiedad que se llama es

que yo aunque lleva una si yo hago un

pinchazos notarán que me dice o no vamos

a hacer esto más grande

1.32 1.2 puntos 3 4 5 7 etcétera y ahora

estos valores hay que pasarse los a la

imagen de manera dinámica y animada

para ello además de animated vamos a

importar tres términos momentos sólo los

vamos a importar y ser value used

animated

ok con este ser barrio lo que vamos a

hacer es crear una variable que lleve

seguimiento y que tan amplio fue mi

pinchazo y luego esta misma variable

compartirla con mi imagen para que

incremente en esa cantidad por ellos que

se llama ser baby porque es un valor

compartido y aquí vamos a definir algo

como a escala escala imagen es igual a

ser value que vamos a inicializar en uno

por qué y ahora con esta escala vamos a

animar y modificar la imagen para lo

cual vamos a ocupar just animated esta

hay una regla muy importante muchachos

cada vez que ustedes trabajen con algo

de animated con algo que sea animado van

a tener que hacer adecuaciones en toda

su app por ejemplo aquí esta variable de

escala es una variable que guardo en

algo animal es una variable animal

digámoslo así y para que mi imagen pueda

a este valor animado tenemos que volver

animada a la imagen para lo cual vamos a

venir aquí en imagen y vamos a colocar

animated punto image momento parece que

no sucede nada pero nuestra imagen ya

está lista para trabajar con cuestiones

animadas y para ello vamos a utilizar

esto de aquí vamos a crear un estilo

animado un estilo dinámico aquí después

de pinchar su pantalla buenos después de

estilos vamos a crear alguno que se va a

llamar estilo animado que va a ser igual

a giussani made style y lo que haremos

es

transformar la escala de la imagen para

ello aquí en esta función de retorno

vamos a devolver

una propiedad de transformación que

transforma y que queremos transformar

queremos transformar la escala queremos

que la escala de la imagen sea igual a

este valor animal

guardamos y bueno aquí tengo un lío con

esta declaración vamos a

vamos a borrar este junto con éste

y vamos a poner esto para acá

vamos a ponerlo así

bueno esto pasa todo el tiempo la verdad

es que es un lío y vamos a borrarlo y

vamos a comenzar de cero

ahí está perfecto ha estado unido muchos

paréntesis y estrellas pero van aquí

está este es nuestro estilo animado

quien se mostró en el estero animado es

igual a y uso en emails time el cual

como argumento recibe una función esta

función de flecha esta función de flecha

nos está regresando este objeto ok al

interior de este objeto tenemos los

estilos que queremos trabajar

dinámicamente y animadamente y el único

propio la única propiedad es si lo que

vamos a trabajar de momento es este de

transformar el cual reciba una red de

todas las cosas que tenemos transformar

de momento sólo queremos transformar la

escala de la imagen pero fíjense que si

yo hago pinchazo me detecta el que tan

amplio es pero no está pasando nada y es

que nos faltan dos cosas la primera es

decirle a nuestro gesto de pinchar sobre

decirles sabes que en lugar de en

primera en pantalla quiero que esto lo

asigne a este valor a este valor de

escala imagen

para ello vamos a decir que el valor de

escala imagen es igual a la escala del

evento del pinchazo ok y ahora lo que

sigue es que esta imagen de aquí en el

estilo vamos a decirle que además de los

estilos que teníamos definidos de antes

vamos a decirle que queremos que tenga

el estilo animal y es así de fácil y

ahora si me vengo para acá y hago un

pinchazo notarán que hace zoom ok

y esto funciona de maravilla y ahora

notarán que no importa dónde me ponga

siempre va a hacer zoom en medio y

notarán que el zoom permanece aunque

podemos hacer que algo que a mí me gusta

mucho y canadá muy común en aplicaciones

es que bueno además de actualizarse

queremos que al terminar

al terminar queremos que corra una

función desde la cual la escala la

regrese esta escala de aquí la regresé a

1

y ahora fíjense que si yo hago zoom y

suelto me regresa pero fíjense que es

muy rápido y esto se ve mal para lo cual

vamos a importar aquí desde animated

vamos a importar una función que se

llama width timing y como podrán deducir

lo que haremos es decirle sabes que este

valor que es animado regreso a 1 pero

con cierto tiempo demora t por favor

para que no se vea tan mal por defecto

ya trae un tiempo asignado como pueden

ver es no están mal pero aquí podemos

indicarle cuán lento o rápido lo

queremos en duración o basile que

queremos 500 milisegundos

yo hago zoom

ahí está vale vale y ya tenemos esto

funcionando al 100%

ahora vamos a solucionar este tema que

no importa donde yo haga el pinchazo

de acné grave me incrementa solo siempre

desde el medio ok y esto es un tanto

elaborado entonces nito que se sienten

bien y pongan mucha atención porque aquí

vamos trabajar un poquito con

matemáticas

los números no mienten y lo primero es

identificar que la imagen tiene un

centro ok en nuestro caso el centro de

la imagen es igual a la mitad del ancho

y la mitad de la altura aquí estaría más

o menos el centro que es precisamente

donde nos hace zoom por defecto pero

neil bueno vamos a vamos a llevar un

seguimiento

de este centro y vamos a crear aquí una

constante que llamaremos después de

pinchazos vamos a crear una constante

que se llamará centro centro imagen es

igual a en x él es igual al ancho entre

2 y en que es igual al alto entre 2 ok

este es el centro de la imagen pero

adicional tenemos que entender que

cuando estés hacen un pinchazo aquí

imaginen que cada punto es uno de sus

dedos si sus dedos están así el centro

de los dedos sería más o menos este

punto ahora si estamos acá y hacen al

buey si estamos acá

el centro sería más o menos esta parte

acá de la montaña si no vengo para acá

sería como que esta roca si vengo para

acá sería la colina el centro de los

dedos

bueno pues tenemos que dar un

seguimiento de este centro de los dedos

para lo cual vamos a crear aquí junto a

la imagen junto a la escala de imagen

vamos a crear otros dos valores animados

y compartidos compartidos para lo cual

digamos que el foco x es igual a 0 y

foco y es igual a 0 estos focos van a

guardar el valor de el punto entre los

dedos ok y ahora cómo va a funcionar

esta parte no queremos es lo siguiente

vamos antes antes de escalar la imagen

vamos a mover la imagen para que esté

entre el punto de los dedos y el centro

de la imagen de modo que lo con ktm y

haga el zoom donde tiene que ser no sé

que suena un tanto confuso

[Música]

pero quizá cuando vean esta parte acá la

entienda vengamos al estilo animado y

aquí en este rey de transform vamos a

pasarle todas las transformaciones que

queremos tener la primera transformación

vamos a decirle que se mueva tanto como

estén separados los dedos pero vamos a

decirle que se mueva en x

el valor de foco x punto vale ok y

también os decirle que se mueven y

translate y el valor que tenga poco ya

usamos una coma

entonces primero le decimos a la imagen

muévete tanto como usted en los dedos

separados ok pero adicionar gonzález que

compense esa distancia de los dedos con

el centro de la imagen para cuando no sé

si largo como en x vas a moverte

negativo del centro de la imagen resta

le saca la diferencia lo mismo para que

ok y ahora esto da acá por raro que

suene vamos a ponerlo después de la

escala lo vamos a pegar y vamos a

invertir los valores de modo que primero

se preparan para hacer un escalado en el

centro del pinchazo hace el pinchazo y

me regresa la imagen como tiene que

verse naturalmente un tanto confuso pero

confían en mí esto lo volvemos negativo

lo vemos negativo positivo positivo y

guardamos y ahora pareciera que está

todo en orden ok pero hace falta asignar

estos focos a nuestro pinchazo y en

lugar de agregarlos a quien habla y

porque esto es esto va escuchando

constantemente el foco debiera ser

modificado únicamente a línea el

pinchazo

se modifica erróneamente

por ejemplo no saca a la roca hagamos

zoom y me mueve y esto está mal entonces

aquí en el pinchazo asciende que con

start

quiero que me corras una función de

flecha recibas el evento y me vas a

decir que el valor del foco x es igual a

el punto focal esto es algo que viene

propio del evento lo mismo para poco y

guardamos y aquí vamos a vamos a hacer

son por ejemplo a esta malla de acá

se queda en la medianera una valla

ya vamos a hacer zoom en esta roca daca

y se queda en la roca ok ahora vamos a

hacer zoom en esto de acá y se queda ahí

muy bien y es así como tenemos nuestro

efecto son pero ojo no se vayan todavía

y es que esto que tenemos aquí sólo

funciona para appo tristemente si

quieren que mencionen android tienes

algo muy pero que muy complicado que

consta de venir para acá importar y

esther under view y este componente de

broadview tienen que ponerlo en el punto

más

afuera de su aplicación en nuestro caso

vamos a ponerlo aquí

cerramos envolvemos

y listo ahora ya funciona en el gesto no

dicen que sea agregar este componente y

bueno chicos es así como terminamos el

vídeo del día de hoy regalen un me gusta

y un suscribirse si quieren ver más

contenido como este y como siempre en

los comentarios puede indicarle qué

tutorial les gustaría ver por el canal y

yo con gusto lo realizar y así mismo

encuentro en pantalla dos vídeos más de

mi canal echemos un vistazo y nos

estamos viendo en la próxima ocasión
