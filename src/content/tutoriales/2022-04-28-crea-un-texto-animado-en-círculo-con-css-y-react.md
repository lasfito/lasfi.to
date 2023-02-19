---
type: tutoriales
slug: crea-texto-animado-en-círculo
enlaceyt: https://youtube.com/embed/SxcnmmoioN8
date: 2022-04-28T18:17:26.148Z
title: Crea un Texto Animado en Círculo con CSS y React
metaDescription: >
  Aprende cómo darle forma de círculo a tu texto y animarlo en rotación #webdev
  #css #tutorial
tag:
  - React
  - HTML/CSS
autor: Adrián Salgado
introThumbnail: Aprende cómo darle forma de círculo a tu texto y animarlo en rotación
keyword: texto animado css
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/30-texto-animado%2F30-texto-animado.png?alt=media&token=983fbca7-971a-4a8a-9b0a-9be0b60a880a
---

## Transcripción

hola chicos qué tal bienvenidos

el día de hoy aprenderemos cómo crear un

texto curvo en círculo como lo que están

viendo en pantalla y cómo animarlo de

modo que esté girando sobre sí

continuamente esto lo haremos a manera

de componente en React y la verdad es que

es muy sencillo toma unas cuantas líneas

de código y si les interesa aprender

cómo hacerlo acompañen

[Música]

antes de comenzar recordarles que

encuentran el código de este tutorial en

la descripción desde el vídeo habiendo

dicho esto vamos a comenzar para lo cual

ya tengo aquí una aplicación en real

tengo un mail que viene siendo un index

en el cual les estoy renderizando app y

equina pero lo único que encontramos es

un buen hola como pueden ver aquí tengo

unos cuantos estilos pero son solamente

para centrar mi contenido en pantalla y

que este tutorial sea más fácil pero

basta de charla vamos a comenzar lo que

necesitaremos obviamente es un

componente el cual yo llamaré spinning

text

y va a ser terminación j s x aquí vamos

a hacer un componente tradicional un

componente clásico en este caso sólo

vamos a regresar este texto y lo que

haríamos es aquí importarlo en nuestra

app diciendo como por spinning text aquí

en lugar de mostrar el hola vamos a

regresar el spinning text y serra no

sobre nada fuera de lo normal esto es

muy sencillo procedimiento estándar aquí

estamos ahora vamos a comenzar a

trabajar nuestro componente se va se va

a integrar de de tres partes un 1 a un

rapper un dip de texto y al interior del

texto una serie de de letras que van a

estar giradas van a estar modificadas

para lo cual vamos a hacer entonces

primero nuestro div wrapper para el cual

en clases name vamos a ganar común

pinging ex rapero ok ahora al interior

un segundo 10 cuya clase va a ser

spinning

spinning text ok

llevamos dos días y al interior un buen

parrafito en el cual vamos a poner el

momento buenas tardes y vamos a guardar

y aquí está ok ahora aquí vamos a

encontrarnos nuestro primer problema

antes de meternos en css y jugar con

esto queremos que nuestro componente sea

reutilizable por lo tanto lo idóneo

sería que este texto en lugar de meterlo

aquí con código lo recibamos como prop

entonces aquí vamos a recibir como text

mismo que viene desde acá y mismo que le

vamos a pasar por aquí diciendo texto es

igual a o laden le suscribirse

excepcional

ok aquí está un fondo como prop y aquí

lo atrapamos y porque queremos hacerlo

así porque el truco o el meollo del

asunto es que cada una de estas letras

la h la ola l la cada una de ellas se va

a ir girando cierta cantidad de grados y

estos grados tienen que estar

distribuidos de tal manera que cuando

que cuando empieza aquí sea a 0 grados 5

grados 10 grados y cuando terminé con mi

texto lleguemos a hacer una vuelta

completa es decir

360 grados ahora esto sería muy

complicado si no tuviéramos que poder de

hans christian que se lo manual entonces

lo queremos aquí al principio de la

sección es lo primero y saber cuantas

letras tiene el texto entonces ya se ha

montado como con am legend es igual a

text puntualmente ok si un texto tiene

15 letras lo que haremos a continuación

es dividir 360 grados entre esas 15

letras entonces quisiéramos como

y gris es igual a 360 / lente ok y ahora

antes de antes de meternos aquí a

modificar el texto vamos a comenzar con

los estilos de estos dos con el rapper y

el texto para lo cual aquí en este

archivo de index vamos a comenzar con

nuestra clase de spinning

6

ok lo primero es ver la deposición

relativo porque van a estar ocupando

hijos confusión absoluta

lo siguiente es darle ancho y altura

vamos a darle algo como 600 para ambas

anchura y altura y vamos a abrir de

momento nos sale un fondo ok de fondo a

meterle un agua para que sea

distinguible vamos también a volverlo

círculo para que podamos seguir en el

flujo del texto y por último vamos a

posicionar sus hijos al centro con un

buen posición lo que estoy diciendo

display

it y un place air and center o que con

esto vamos estar centrando su contenido

y vamos a dar un poco de estilo al texto

para lo cual debemos font-size 2 rain

porque no y un buen wave bolt

y hasta ahora esto es para el envoltorio

lo que sigue es propiamente el dif que

contiene el texto spinning text aquí con

spinning text es ligero lo que tenemos

que hacer

lo primero es

sacarlo vamos a sacarlo del flujo de

elementos con un buen position up sur

ok ahora lo siguiente es asegurarnos de

que este texto sea tan ancho como el

rapper para lo cual aplica vamos with

100% siempre significa que va a tomar

100% de sus padres los 600 píxeles lo

mismo con height la altura vamos a

quitarle los márgenes que creo que ya se

los hemos quitado por acá pero cuando

igual lo dejamos y por último bueno no

esto sería todo la animación viene más

adelante y ahora fíjense que al yo

meterla absoluto lo sacó del flujo y

este posicionamiento grid que no nos

entraba ya no aplica ok pero esto es

esto es temporal no se preocupen ahora

lo que sigue lo que sigue es trabajar el

texto convengamos para que este texto

vamos a modificarla lo primero que

haremos es esto es un texto por lo tanto

es de tipo string lo primero que haremos

es convertirlo en un array para después

poder mapear lo para convertirlo en una

red y haremos algo como split y le

diremos que para separarlo queremos

utilizar

espacios en blanco ok ahora ya que es

una rey si yo guardo este no pasa nada

ya que es una rey vamos a mapear los dos

y vamos a ir letra por letra y vamos a

hacer algo con estas letras donde aquí

ponemos más y vamos a recibir cada una

de las letras y la posición de estas

letras ya que tengamos esto que es lo

que queremos devolver o que es lo que

queremos regresar queremos regresar una

etiqueta de tipo scan ok y ahora esta

etiqueta de tipos para primero darle un

key aunque para que no se queje

recuerden que cuando hacemos ese tipo de

cuestiones programáticas hay que darles

keys y lo siento y lo más importante y

la clave de este truco de este efecto es

el estilo queremos regresar si las

mismas letras que teníamos pero habiendo

les ha aplicado un pequeño giro entonces

queremos decir que el spam en estilo

queremos transformar cada letra vamos a

efectivamente lo como está aquí vamos a

transformar la íbamos a

cuánto vamos a rotar cada letra muy

sencillo vamos a rotar las el número de

grados que habíamos definido aquí de

acuerdo a cuán largo era el texto y este

número de grados se va a ir

multiplicando por la posición de modo

que si está la posición 0 0 por 50 por

ejemplo y luego si viene la posición 11

por 55 2 por 5 días y así sucesivamente

aquí ademar carroll vamos a continuar

cerramos esto de aquí y aquí al interior

del spam vamos a poner entonces la letra

que vaya tocando ok ahora vamos a

guardar

y fíjense que no pasa y no pasa nada

todavía y no se preocupen es normal

porque lo que sigue es meterle estilo a

estos stands dentro del spinning text

para lo cual vengamos de vuelta aquí al

index tienen usado como spinning sexting

y aquí lo que haremos es nuevamente

vamos a darle posición absoluta vamos a

sacarlos del flujo y una vez que lo

sacan del flujo entra en rigor la

transformación conforme aquí todos ha

rotado en el mismo sitio a miren bien

bien bien bien vean como ven como con

selecciones se ha marcando que ya están

girando pero ahora como podemos sacarlos

de aquí fíjense que están afuera de mi

círculo porque no se ha puesto un

absoluto entonces vamos a ponerlos aquí

en medio para lo cual veremos algo como

top 0 y luego en la red no pondrá un

cero en las creemos que esté exactamente

a la mitad para lo cual haremos left

50% ok y ahora lo que sigue es animarlos

vamos a animar el texto entonces quien

spinning text none el spam si no aquí en

el text vamos a decir que por animación

queremos utilizar una animación que

llamaríamos spin que va a durar unos

50 segundos que será alinear es decir

contiene hace mucho sobresalto y de

duración infinita ahora esta animación

hay que crearla para lo cual tendremos

que recurrir a nuestro buen amigo

frames

identifier vamos a colocar el nombre de

la animación y la animación se llama

woods y ahí está y ahora quién es bien

fíjense que comenzamos de cero por

ciento y vamos hacia 100 por ciento

donde el 100 por ciento es girar 360

grados sobre sí mismo

ok nos va a ir girando sobre sí mismo y

ya pueden ver que iba girando sobre sí

mismo pero el problema cómo pueden ver

cómo pueden deducir el problema está en

que están todas las letras en signadas

una de otras y cómo pueden solucionarlo

el problema tenemos que entenderlo el

problema viene de aquí y que nos estamos

rotando y al ser al ser absolutos todos

lo que rotamos todas las que estamos

volviendo si se rotan pero de forma

absoluta fuera del flujo entonces lo que

debemos hacer es cambiar esta rotación

queremos cambiar la manera de que se

aplique para lo cual sucede se tiene una

propiedad muy porque muy útil que pocas

personas conocen que es transform

transform

ok y aquí en transformar y le diremos

cómo queremos que se aplique la

transformación

definiendo desfases sobre los ejes sobre

los ejes de gx ghz en x no queremos nada

sino que el desfase lo queremos en y y

aquí en el truco dependiendo de cuán

grande sea su rapper vamos a desplazar

las letras la mitad ok entonces la mitad

de 600 serían 300 y cuando aquí yo le dé

guardar va a aparecer la magia

ahí está eso así de sencillo bien sé

hola denle suscribirse al canal y stan

nuestro texto y este como pueden ver

fueron unas cuantas líneas de código

pero pero pero podemos hacer que se vea

más probable y podemos ponerle aquí unos

contenidos al interior ok como hacemos

eso de vuelta aquí en nuestro componente

si queremos que nuestro componente tenga

cosas al interior

tenemos que aquí

pasarle el objeto de chino en fin sé que

aquí nuestro rapero tiene a su interior

este día que se llama spinning text

bueno además de spinning text queremos

que tenga más contenido como children

este children viene desde los profes por

lo tanto hay que definirlo aquí children

y guardamos ya lo que podemos hacer es

que aquí en lugar de cerrarlo vamos a

hacerlo así spinning takes

efe

y aquí entre esto podemos pasar lo mejor

una imagen yo tengo aquí ya esta imagen

mía esta imagen de la citó entonces lo

que haremos es aquí hacer imagen cuya

fuente sea vamos a importar la imagen

vamos a importar

desde

cómo se llama gat nius.pe ng entonces

quien fuente vamos a pasarle esto que

acabamos de importar

guardamos está muy gigante vamos aquí a

decir que todas las imágenes que estén

al interior del grupo pero queremos que

tengan por ancho un 80 por ciento y en

altura

altura automática

ok bueno 80 está muy gigante vamos a

meterle 75

y ya por último por último por último

vamos a quitarle este espantoso fondo

azul

y ahí está ahí está ahí lo tienen chicos

este ha sido el efecto que habíamos

prometido para este tutorial y si les ha

gustado regalen un me gusta si quieren

ver más contenido este tipo suscríbase

al canal y de mientras yo me despido y

nos vemos en el próximo vídeo hasta

luego
