---
type: tutoriales
url: 6-maneras-estilos-css-react
enlaceyt: https://youtube.com/embed/J-hGXVPyT-Y
date: 2022-04-27T19:45:36.702Z
title: Las 6 maneras de aplicar estilos CSS en React
metaDescription: "Conoce cómo aplicar estilos CSS en tu aplicación de
  React#tutorial #webdev #react #css "
tag:
  - React
  - HTML/CSS
autor: Adrián Salgado
introThumbnail: Conoce cómo aplicar estilos CSS en tu aplicación de React
keyword: estilos css react
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/21-estilos-react%2F21-estilos-css-react.png?alt=media&token=17c5331d-d7bf-492a-bfff-de5a3e0b529e
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo es que ustedes

pueden utilizar es decir darle estilo a

sus aplicaciones de React para ello tengo

aquí una aplicación muy básica tenemos

un index desde el cual importamos app en

el que no estamos únicamente importando

los componentes son idénticos cada

componente consta de un botón y si yo

ejecuto en fin estoy debiéramos tener

algo más o menos como esto de aquí botón

1 y botón 2 ok y vamos a revisar les voy

a enseñar cómo que ustedes pueden darle

estilo son seis maneras distintas son

todas las maneras posibles y la primera

de ellas es el famosísimo css en línea

como pueden ver aquí realmente no se

tiene algún requisito es relativamente

fácil pero ojo que es el peor y les diré

por qué y les diré en qué consiste pero

vamos a cerrar esto acá vamos quedarnos

únicamente con el componente 1 y el

componente 2 los estilos en línea pueden

hacerse de dos maneras la primera es que

aquí accedamos a la propiedad de estilo

y le pasamos un objeto la diferencia con

el css tradicional es que aquí vamos a

escribir un css internet gris es decir

que en lugar de escribir background

lo que haremos es escribir en gran color

todo junto con una mayúscula y vamos a

ponerle por ejemplo red y guardamos si

yo visito mi aplicación verán que el

voto en un nuevo láser red esta es la

primera manera y la segunda manera que

haré aquí en el componente dos es que en

lugar de escribirlo aquí directamente en

lugar de poner doble este llave lo que

vemos aquí pasó una referencia y puedo

deseado como no lo sé este estilo es

punto vettel y lo que voy a hacer es que

aquí voy a crear esta constante de

estilos la cual va a ser un objeto que

va a ver albergar distintas propiedades

y ve tienes una de ellas y la pasamos

vamos a pasarle todo esto ward

anunciaron que va a suceder es que éste

btn hace referencia a esta acá pero es

exactamente el mismo funcionamiento aquí

vamos a actualizar mi normal error o es

que lo tengo duplicado vale y aquí está

guardamos ya que lo tienen pero pero ojo

que he comenzado con este método de

inline y de puesto que es el peor por un

motivo y es que los estilos en líneas

son siempre una manera de mostrar que lo

que está pasando aquí si me voy a

elementos si yo expand oeste root vean

que los estilos se añaden

en el elemento html este botón tiene los

tiros en iniciados analizados las dos

líneas son muy malos o no son

recomendables porque son los estilos con

mayor prioridad es decir que si tuvieran

algún otro estilo corriendo algo algo

global algo del layout lo que sea que

esté aquí lo va sobreescribir pero yo

que no se recomiendo además de que esté

pues agrega muchos blogs mucho relleno a

su documento html y esto es simple y

sencillamente no es una buena práctica

sin embargo es algo que se ve muy común

en tutoriales porque y relativamente

rápido de hacer como puede ver aquí

escriben sobre el mismo componente

entonces estas son las dos maneras con

referencia al objeto aquí o al interior

vale y ahora vayamos al segundo método

el segundo método son el csc regular el

css de toda la vida y cómo es que

funciona muy sencillo vengamos de vuelta

para acá voy a borrar esta parte de

estilo voy a borrar esta parte de acá

también

echamos un vistazo y estamos de vuelta

aquí los botones originales está segunda

manera funciona con usted están

acostumbrados y escribiendo un

transfondo este tradicional y clásico

html css y javascript para entonces que

voy a crear un cómputo 20 1 puntos ese

es un archivo css y que diré que lo que

tenga clase de bt n tendrá estas

propiedades y lo que voy a hacer ahora

aquí en el componente 1 fíjense que es

componente 1 importó este estamos

diciendo algo como componente 1.11 ss y

ahora simple y sencillamente como aquí

estoy dando estilo a una clase lo que

hago acá es asignarle clases ni mi hijo

que es clase porque como estos llamas

virtuales ya está reservada consigue que

la clase esté de tn guardo

vengo para acá dijo que quier escribir

con mayúscula componente 1 y aquí lo

tienen botón 1 ya está estilizado y

fíjense que aquí no tiene el estilo un

año tiene tiene una clase asignada y si

no vengo aquí a head

pueden ver que quien heads está

importando estos estilos estilo de dtn

con colores pero pero esto es muy

sencillo este esto es como pueden ver

pasen sus estilos ekin css lo importante

en el componente y ya está pero hay un

problema y el problema como indicó aquí

es que el name space se mezcla y es que

sucede que cuando ustedes importan sus

estilos así al final todos los estilos

que hayan importado se van a combinar en

uno solo en un estado seed global y les

voy a mostrar si yo vengo ya componente

2 bueno si yo aquí en tensor se creó

componente dos puntos s ese y vamos a

agarrar vamos a darle el mismo estilo

pero aquí vamos a poner un fondo rojo ok

guardamos esto es tan componente 2 y

componente 1 es verde componente 2 de

rojo la componente 2 quiero que sea

color rojo vamos a importar entonces

componente 2

tiene la mayúscula y vamos a darle el

ras name de bt son distintos archivos

cierto btn betenu no debe de ser verde

otra de rojo pero fíjense lo que va a

ocurrir es que me los combina y sé sobre

escriben entre sí este botón 2 sobre

escribió al botón 11 ya que era verde y

es que sucede que se combina este

espacio de variables y todo porque

caímos en el error descuido o accidente

esto pasa muy seguido que aquí ocupe una

clase bueno aquí ocupe una clase que ya

existía de antes entonces esto es un

problema porque usted tienen que estar

pendientes de qué clases ya utilizaron y

obviamente aquí podrían recurrir a algo

en sistema de de un sistema bien para

intentar tener un poquito más de orden

pero aún así aún así esto es peligroso

lo cual nos lleva al siguiente método

queremos evitar que estas variables y

estos estilos que estamos creando para

cada componente se mezclen y aunque

puede darnos es el siguiente método

siguiente método se conoce como si es

ese

y ahí es el css javascript ok y esta es

una manera muy peculiar de trabajar yo

creo que es el equivalente al gis xxi es

decir a utilizar el sistema dénia

básquet bueno el equivalente es utilizar

css en jazz y hay distintas formas

aseguran que han escuchado de estado

componiendo james jones motion etcétera

ok y aquí los requisitos es que bueno

varían por método esto es como que en

términos sombrilla pero solamente van a

tener que requerir algo vamos a instalar

algún paquete la dificultad es media

relativamente y la recomendación es

decente es igual que ésta si acaso un

poquito mejor al final es decente más un

poquito mejor que ésta porque no nos

combina el deimos space pero hay un

problemilla con las clases que ya

veremos lo primero es instalar esta

composición si este enlace aquí vamos a

tener el comando que debe hacer en pie

esto está componente está con los 28 de

vuelta a nuestra aplicación accedemos a

la terminal y vamos a instalarlo

que le damos unos segundos y mientras se

instalan vamos a borrar este archivo y

este archivo de aquí en componente 1 y 2

ya no les requerimos ni esto ni

esto lo mismo para instar aquí vamos a

empezar otra vez de cero si visita mi

aplicación verán que tengo aquí mis dos

botones y ahora cómo funciona este

concepto de css y javascript varía más o

menos por implementación pero este

componente que hacemos popular funciona

más o menos así lo primero que hay que

hacer es importar style desde estado

components claro que van a ser así deben

que pensar distinto es cambiar la forma

de programar yo pensé como dirían

algunos y es que en lugar de utilizar

etiquetas html en lugar utilizar esto

que viene por defecto lo que nosotros

haremos es crear nuestras propias

etiquetas con el estilo ya declarado y

para llevar algo como telecom su botón

no lo sé este extra largo diré es igual

hay aquí fíjense que tenemos que acceder

a style y le diremos qué tipo de

etiquetas html queremos crear en este

caso queremos crear un botón y aquí

vamos a comenzar a declarar

ss después de un banquete

entonces vamos a colocar las propiedades

por ejemplo estoy acá estoy aquí

agregamos las propiedades en css normal

aquí no hay que hacer nada raro

terminamos de declarar con el back tic y

ahora este botón extralargo extra la vía

extra largo que es un botón normal con

estos estilos lo vamos a utilizar aquí

diremos botón extraer y si yo voy de

vuelta a mi aplicación verán que hay

efectivamente los estilos están

aplicando y quiero que pongan atención

al voy a repetir este mismo proceso lo

voy a repetir en componente 2 aquí en

componente 2 declaró este botón extra

largo lo utilizo en mi componente el

orden de erizo y fíjense qué

ya que me faltó importar style

y ahora sí fíjense que a pesar de que en

ambos tengo el mismo del mismo botón con

las mismas propiedades a pesar de ello

aquí en aplicación notarán que tienen

clases distintas no se suscriben el uno

al otro y esto lo hace automáticamente

por nosotros está con conciencia que

aquí genera estos números y este código

es bastante único la idea es que sea al

azar y de esta manera evitamos este

evitamos contaminar name space y quienes

nos importan de los distintos estilos

como pueden ver

y este es el método de leyes es no si es

es ingleses luego consta compones pueden

hacer varias cosas yo les decía que

tuvieran ojo con las clases que luego

utilizó el clases es que son un tema

pero pero una ventaja tan vale la pena

mencionar es que aquí podemos asignar

propiedades por ejemplo podríamos decir

que el background color en lugar de que

sean siempre azul encima como sabes que

diremos que ya que es las propiedades

accedas a la propiedad de color y ponle

cualquier color que te pasen como pero

entonces yo equipo venir y decirle qué

color es igual a print por ejemplo y de

vuelta en aplicación verán que es verde

equipo decirle que es no sé cc y si

debiera ser gris esta es una ventaja que

es la idea detrás del css javascript que

nos combina el csc y la griega esta

parte dinámica compone vamos a hacer a

propiedades podemos extender clases

vamos a extender componentes entonces

vale la pena echarle un vistazo habíamos

revisado este método pasamos al

siguiente módulos css y módulos css es

exactamente lo mismo que esta parte del

css regular pero lo que hace es que no

soluciona este problema de que el nine

space se mezcla ok y cómo funciona muy

sencillo vamos a borrar todo esto aquí

utilizamos de vuelta el botón

mismo para acá

echamos un vistazo y estamos aquí de

cero ok ahora cómo funcionan los módulos

ceses y cómo es que solucionan este tema

del myspace bueno vamos a crear de nuevo

nuestro archivo de componente 1 punto se

s con la diferencia de que antes de

entrar al punto css vamos a agregarle

punto motion

y ahora sí aquí podemos definir nuestras

clases fácil que éste tiene todo esto de

acá

creamos componente 2.8 punto css vamos a

darle las mismas propiedades

pero aquí el fondo vamos a ponérselo

en negro

ok y ahora aquí lo que haremos es lo

mismo agregamos el clases name debe

tener un componente 1 importamos estos a

este componente

1 punto

css pero fíjense que aquí yo le importo

le doy la clase debe tener y no pasa

nada y si tú lo que tenemos que hacer es

en lugar de importarlo así vamos a

importarlo de manera completa 2 zile que

los estilos importe de aquí y lo back in

clases ni diremos que la clase es igual

a los estilos punto 20 n es decir nos

crea una suerte de objeto donde cada

clase o cada este es el lector es un

objeto entonces ahora ya me mete los

estilos como pueden ver aquí y fíjense

que si yo hiciera lo mismo para mí

componente 2 cheque importó el cssd

componente 2 y aquí le agrego el clases

name y pasamos y class nimes iguales

estilos punto btn recuerden que uno era

uno era verde y el otro era negro y de

vuelta acá no me los combina a pesar que

es la misma clase petén en ambos casos

bill inspección eficiencia aquí la clase

al final queda así el componente 1 vtn y

un código único para evitar que se

mezclen entre sí de esta manera

mantenemos el css es separado por

componente y esto es útil porque solo se

van a importar las clases que estén en

uso en la pantalla de modo que está

optimizado lo cual pareciera ser que es

una muy buena solución y de hecho que

como pueden ver es relativamente

dificultad media por el hecho de tener

que estar escribiendo esta parte extra

pero pero aquí es dificultad media

porque tienen que hacer cierta

configuración previa a menos que esté en

una aplicación con friulana que ya nos

trae todo preconfigurado para aceptar

módulos si ustedes están en en relación

a algún otro método tienen que

configurar su web para que para que les

acepte los módulos

y buena combinación es buena y podrían

preguntarse no solo que puede ser mejor

que esto que nos muestra twist lo mejor

o algo mejor que estos módulos son es

trabajar con pre procesadores o dos

procesadores y yo recomiendo ampliamente

trabajar con esas tasas

al igual que los módulos requiere este

cierta configuración de wet a ojo que

creería que ya viene preconfigurado y

adicional necesitamos instalar el

paquete de esas que es este está en

pantalla vengo de vuelta abro mi

terminal y la instala hasta aquí vale y

una vez instalado que es lo que tienen

que hacer en caso de cuando conozcan

suns o que no demos en este mundo de

procesadores de css en resumen lo que

hacen es lo siguiente trabajan ustedes

como si estuvieran trabajando con ccs de

toda la vida pero la diferencia es que

estos procesadores nos dan acceso a

funciones extra por ejemplo pueden meter

enraizado con sting en su declaración de

destinos pueden utilizar este funciones

avanzadas como mick ins puede hacer este

curso de de lógica condicional por

ejemplo si silván gran color es muy

oscuro quiero que el color sea blanco

pero si esto acá es muy clarito está

automáticamente lo automáticamente

cambios muy es una manera avanzada la

ccss y el no tienen por qué espantarse

realmente pueden comenzar con lo que ya

saben y de hecho voy a mostrarles lo

único que tienen que hacer para acceder

a estas funciones extra es que sus

componentes en lugar de que sean css

agregamos una dice antes de estas lo

mismo para el otro voy a cambiarlo si

ese no es ese ss hasta que compuso y

ahora quienes componentes actualizó el

import lo mismo para acá y fíjense que

si yo guardo vamos ahora esto yo guardo

funciona exactamente igual me sigue

dando nombres este específicos no lo sé

para las clases para no contaminar me lo

sigue estilizando pero ahora yo puedo

acceder por ejemplo a enraizar y decirle

una lo que tenga de tn aquí y que

adicional tenga el extra largo quiero

que tenga estos otros estilos como estoy

acá y entonces ya se evitan tener que

escribir otra línea aquí y todo todo

todo un lema hoy ante esto no es lo

único pero quiero que sepan que con esto

pueden acceder a funciones avanzadas y

ahora hay dos maneras hay dos maneras

vale la pena aclarar dos maneras de

trabajar con sas es la primera es así es

esencia es que es lo más similar a el

css de toda la vida ok por la segunda es

que trabajen con archivos esas la

diferencia está en el en la sintaxis que

en sabes no utilizamos llaves

pensando que vamos a utilizar es la

identidad y en sas tampoco utilizamos

este punto y coma o que entonces esa es

la diferencia en función de ver todo

esto donde depende de cómo se acomoden

si quieren trabajar hacia lo mejor

viendo un trasfondo que esto es más

cómodo aquí actualizo me importa más y

fíjense que funciona exactamente

exactamente ese caso que cambió por las

cosas que borre pero es así como pueden

acceder a este método y crean de que la

recomendación está buenísima bueno que

existe tenía buena este tiene buena más

ok y aquí bajo con elaborarse porque de

veras que este es el método que prefiere

a la gente con más experiencia y nos

está diciendo que trabaja con este

vuelva mejor pero sí que vuelve todo el

trabajo mucho más fácil y por último en

la última forma de meter estilos aquí en

alguna aplicación de unidad es con

librerías o frameworks de estilos voy

hablar de dos en particular

woods trap y tv voy a comenzar con t

gwynn porque yo creo que tengo años lo

más similar a trabajar con css entonces

para ello vamos a borrar esto de aquí

borramos esto de acá y vamos a borrar

estos inputs todo esto logramos

debiéramos comenzar como estábamos en un

principio

dos botones así sencillos ahora cómo

funciona ten wing con función de buscar

bueno pues para ello cada una trabajada

su manera y si los requisitos dependen

de cada servicio solamente se trabaja

con algún paquete en el pie suelen ser

relativamente fáciles de usar

la recomendación es buena pero aquí

vamos con el blog y les mostraré

principalmente con edwin vayamos a the

wind

y aquí vengamos a la parte media que

estará instalado relativamente sencillo

copiamos estos comandos de queda que se

va a instalar ciertas dependencias

ejecutemos las lo quitemos el comando

aquí

y una vez que se ha instalado lo que

sigue es que nos va a crear un archivo

de win config tenemos que indicarle aquí

el contenido queremos que acceda a estas

clases y estos estilos de tv aquí nos

recomiendan que le demos acceso a todo y

es lo que haremos aquí ente win config

venimos le decimos que queremos que

estiliza todo lo que estén sobre todos

los tipos de archivos y por último

requerimos importar un ccs un archivo

aquí vamos a ponerle index que se hace

en el cual importemos todo esto de acá y

obviamente hay que enlazar los el csc lo

enlazamos aquí desde el index js

expresión

y ahora por ejemplo si tomamos

este comando de aquí donde está en este

ejemplo vamos a copiarlo

vengamos aquí al componente 1 y en lugar

de volver un botón vamos a regresar este

ayuno y fíjense que las clases éstas no

las brinda t gwynn

boots

qué está pasando de la universidad es

que el inglés lo metía fuera de la

carpeta aquí

guardamos y ahora sí fíjense que aquí

está bueno no no me lo está tomando

completamente por qué

hoy vamos a detener y vamos a volver a

lanzar enfría néstor

y aquí está esta gran calor viene

subrayado bien subrayado porque así lo

he definido en las clases

pasamos todos estas clases de under my

phone boat y aquí el voto podría

cambiarlo a thin guardar y vean que

ahora ya está en fin y así es como

funcionaria win ustedes trabajan sus

componentes tranquilamente lo que van a

hacer es ir agregando estas clases de

utilería así es como se llaman porque

cada clase tiene un fin específico por

ejemplo el fin de esta clase es subrayar

y no hace nada más en esta clase es que

sea delgada y no hace nada más entonces

esto es un problema porque si ustedes

quisieran tener una apariencia con un

estilo relativamente complicado use un

botón con tanto de padrino y con tanto

de margen usted termina escribiendo

muchísimas muchísimas muchísimas clases

y en sus aunque los detractores de

tiwintza encima que al final terminan

con mucho blog y es que este laudo estas

clases terminan viniendo acá

los elementos todo esto entra en el html

pues bien es cuestión de preferencias y

la última manera que vamos a revisar es

el clásico buscar mucho tiene su versión

clásica la versión variant que yo

recomiendo esta versión del real

instalarlo es muy sencillo copiamos este

comando aquí en la terminal lo

instalamos

y adicional al igual que te wing

requiere que importemos ciertos estilos

yo voy a importarlos desde el index aquí

de vuelta en index vamos a importar los

estilos de bus trap y ahora como

funciona mucho la industria es un tanto

distinto a lo que hemos visto el word

que todos estos métodos ustedes tienen

control absoluto que ustedes defienden

sus clases definen sus estilos de tienen

cómo quieren que se vean sus componentes

con según también utilizamos clases

utilería para ir definiendo el css bulls

ahora por otro lado lo que hace es que

nos da ya ciertos componentes

reconstruidos y no sólo en cuestiones de

ccs sino en cuestiones del html y del

código de javascript y por ellos que

aquí este sería le pondría si acaso aquí

una un asterisco porque funciona

relativamente distinto les voy a mostrar

aquí en componentes lo que yo voy a

hacer es ir importando que quiero

utilizar ese mucho por ejemplo que

utilizar un botón entonces aquí pasó un

botón

tenemos bus track

y bueno que tendrían que utilizar un

fragmento

y si yo voy a una aplicación verán que

este botón es de buscar y nos da

muchísimas opciones de personalización

por ejemplo aquí podría decirle que yo

quiero que sea en realidad

creo que es variante

por ejemplo

a las clases que nos quisiera creo que

era extra largo cuando me cambia tamaño

pero entiendo el punto que nos da

ciertas opciones ya pre construidas a

las cuales nosotros podemos acceder

técnicamente es posible personalizar

estas opciones ya reconstruidas pero es

todo un tema entonces estas son las

maneras que sepan cuáles son las que

existen desde las peores en mi

consideración hasta las mejores entonces

sólo como repasamos el online que puede

ser directo en objetos el css regular

que nos combinan de space el css en

javascript que nos borra esta línea de

separación muchos logran a muchos lo

odian tenemos los módulos que es la

versión digamos correcta y buena porque

no se combinan los links page tenemos

los procesadores que es el siguiente

nivel y tenemos las librerías que nos

evitan estar en cierta manera pensando y

nos dan a nuestra disposición ciertas

herramientas bueno ahí lo tienen chicos

el vídeo del día de hoy se les ha

gustado dejen me gusta suscriban se para

ver más contenido así y como siempre en

los comentarios pueden decirme que

tutoriales les gustaría ver por este

canal entonces habrán más contenido de

mi canal y no sé en la próxima
