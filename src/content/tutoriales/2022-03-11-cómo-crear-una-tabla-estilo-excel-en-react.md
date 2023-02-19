---
type: tutoriales
slug: como-crear-tabla-excel-react
enlaceyt: https://www.youtube.com/embed/hZUwj5pz-yc
date: 2022-03-11T00:17:03.947Z
title: Cómo crear una tabla estilo Excel en React
metaDescription: "Aprende cómo crear una tabla / hoja de datos estilo Excel en
  tu aplicación de React con Handsontable #tutorial #webdev #react
  #desarrolloweb  "
tag:
  - React
  - Misceláneo
autor: Adrián Salgado
introThumbnail: Aprende cómo crear una tabla / hoja de datos estilo Excel en tu
  aplicación de React con Handsontable
keyword: tabla Excel en React
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/17-excel-react%2F17-excel-react.png?alt=media&token=ccbaf909-19b4-4e6a-b8fd-c76d26b14cf5
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy aprenderemos cómo pueden tomar

información que tienen alguna a pie

mostrarla en alguna tabla estilo excel y

trabajar con ella y modificarla por

ejemplo yo podría tomar estas dos celdas

unirlas podría tomar este erving

arrastrar y modificar todo lo demás

podría cambiar este por louis este por

lucas y este por leonel podría hacer

clic derecho insertar filas clic

insertar abajo podría eliminar incluso

podría este deshacer podría modificar y

todos estos cambios y modificaciones que

están haciendo a la información porque

esta es información que obtuvimos de

aquí todos estos cambios que hagan

después pueden guardarlos en algún

archivo y dicho archivo va a tener la

información tal cual como esta pueden

ordenarla incluso vamos a ordenarlo por

correo ciencia aquí los hay y son

distintos le doy de descargar y si yo

abro el archivo notarán que todos estos

cambios este signo de forma interactiva

y gráfica como simplemente al excel

permanecen aquí con la distinción de que

esto está en una aplicación de break en

su navegador y si les interesa aprender

cómo hacerlo acompañen

[Música]

el primer paso es abrir nuestra terminal

y desde ahí nos vamos a dirigir a la

ubicación desde la cual queramos

trabajar en el caso yo estaré trabajado

en el escritorio y una vez allí

ejecutaremos en pie

riad up y el nombre de nuestro proyecto

yo lo llamaría tutorial excel

no dejamos que se ejecute esto va a

descargar todas las dependencias y todo

el código que se requiera para nuestro

proyecto

y una vez que hemos terminado de

descargar todos los lo que se requiere

para el proyecto ingresamos a él y lo

abrimos con este proyecto al favorito en

mi caso yo trabajaré con 10 scouts y

aquí lo tenemos vamos a estar trabajando

todos los días para no complicarnos

mucho aun con ese caso vamos a borrar

todo esto voy a poner un día y vamos

poner un hola gente ok y ahora vamos a

ver que esté todo funcionando

correctamente y para ello desde la

terminal ejecutamos en pie story esto va

a iniciar el ambiente desarrollo y

abrirá en nuestro navegador una pestaña

desde la cual podremos ver que nuestra

aplicación está efectivamente

funcionando que este es el primer paso

tendrá nuestro proyecto nuestro fold

desde riad ahora déjenme regresamos al

editor

y desde aquí lo que haremos es importar

react y el segundo paso es tener

información con la cual trabaja

necesitamos información para mostrarla

en nuestra tabla de excel y para ello lo

que haremos es utilizar ese efecto

entonces aquí dentro de la aplicación

antes del retorno utilizaremos los

effect

y esto lo vamos a ejecutar una sola vez

por esos que tenemos estos corchetes

para que se ejecute en una sola vez

cuando se monta el componente ahora que

queremos hacer cuando se monta completa

el principio de todo bueno lo que

queremos hacer es buscar información a

lo mejor estoy en ramos una app y lo que

haré es precisamente eso y para y voy a

definir una función llamada khedira la

cual va a utilizar este enlace de aquí y

luego esta información la vamos a

ejecutar aquí en dentro del ibex effect

primero la definimos y luego la

ejecutamos dentro de los efectos pero

esto lo queremos guardar en un estado

entonces diremos algo como constante

usuarios y set

usuarios es igual a punto y state y

entonces aquí entre nuestra función de

que tengan y en lugar de lograrlo en

pantalla lo que haremos es

guardarla en este estado

muy bien

y ahora con esta información lo que

haremos es mostrarle aquí dentro de la

aplicación para ello haremos algo como

si usuarios existe mapea lo y por cada

usuario

por cada usuario imprime en pantalla un

párrafo con su nombre

ahí está ahora antes de continuar quiero

mostrarles cómo se ve esta información

que estamos jalando

ahora como pueden ver nuestra aplicación

funciona va por la información la guarda

un estado y luego ya que está en ese

estado la mapea pero obviamente este

tutorial no es de cómo maquillar

información es como mostrar esta

información en una tabla de excel pero

que va mostrarles cómo se ve lo que

estamos buscando es una red de objetos y

que abarque todo tiene distintas

propiedades cuando las mismas

propiedades entre ellas un haití y

nombre y username email y piense que la

address el andrés de la dgrss es un

objeto anidado es un objeto dentro de

otro objeto y luego en guión es un

objeto dentro de un objeto dentro de

otro objeto cuando todo esto lo vamos a

mostrar en en este en una tabla de ese

propio no tiene que saber cómo se ve la

información con la cual están trabajando

y qué información de esto quieren

mostrar entonces de vuelta aquí a la

aplicación vamos a instalar

una de un paquete y para ello vamos a

escribir en esto

fans en facebook y también vamos a

instalar en el segundo que es hans un

table diagonal riad

ahora muchísimas muchísimos paquetes y

librerías para para poder trabajar con

excelente react pero están siendo de

alguna mi favorita la que yo recomiendo

y siendo alguna también una de las más

populares entonces grande que con este

paquete no pueden equivocarse ahora ya

que lo instalamos vamos a importarlo

dentro de nuestra aplicación para ello

iremos al como import desde que avanza

vamos a importar dos componentes

distintos el primero es es el concepto

general de la tabla de excel entonces

escribimos hub facebook y el segundo es

son las columnas con las cuales

estaremos trabajando por lo tanto

escribimos a colom y esto lo vamos a

importar desde

hanson seibo diagonal rayando esto es lo

primero y lo segundo para que nuestra

tabla dexia tenga todas las funciones y

plugins y todo lo que se requiere vamos

a importar lo siguiente escribimos

register of models y esto es igual bueno

no es igual esto es desde hanson seibo

diagonal registry

muy bien perfecto ahora ya que los

importamos esta función hay que

ejecutarla vamos a poner

a ejecutar

para obtener

todas

ahí está entonces ahora si quitamos

reister o muchos

con esto venimos de vuelta aquí y en

lugar de

mapear en unos párrafos lo que haremos

es

mostrar esta tabla de excel

para ello vamos a utilizar el componente

hot seibo

y al interior de cal de hollywood vamos

a definir que cocca información y que

este filas queremos mostrar pero antes

quien observó muy importante necesitamos

decirle cuál es la información con la

cual queremos trabajar nuestra

información se llama usuarios y luego lo

segundo este este paquete de archivo

tiene un lado comercial entonces hay que

indicarle que nuestro uso no comercial

para que no haya problema con eso puede

ocuparlo para hobby sprites personales

cuestiones así pero de vuelta aquí a las

columnas que vamos a definir hot code y

aquí le diremos qué información queremos

mostrar en este caso queremos mostrar el

nombre que austria el email también

porque no con fondo no existe pero vamos

a mostrar en su lugar

a 3 y piense que para objetos anidados

información ani nada para utilizar este

sistema 'android' street porque si bien

recuerdan aquí nuestra información es

android si lo tenemos street lo tenemos

ir y vamos a demostrar el haití y el

username y la ciudad también

esto lo duplicamos

aunque mostramos siri

y aquí vamos a mostrar eso name y un

buen haití

guardamos y de vuelta a nuestra

aplicación

vemos que no hay nada

y no hay nada porque aquí nos dará aquí

es de ira

borramos todo esto

guardamos

y aquí está nuestra tabla

pero notarán que no está muy bonita

precisamente y esto es porque le hacen

falta los estilos que hanson chivo nos

provee para ello vamos a importarlos

aquí escribimos import vamos a hanson

table de un antiguo punto full punto css

y guardamos

y ahora le echamos un vistazo y estar

aquí es nuestra tabla aunque como pueden

ver pues nos imprime light y el nombre y

username correo calle y ciudad y ahora

estos tan sólo comienzo chicos vamos a

ver muchísimas muchísimas cosas éste son

un paquete un servicio muy pero que muy

completo y de lo primero que haremos por

ejemplo es mostrar a qué se refiere cada

una de estas columnas entonces de vuelta

aquí en nuestro componente de out evo

aquí podemos pasarle un pro que sea

columna rogers igual a tur

y como pueden ver aquí ya está vamos a

hacer lo mismo para las filas con

reuters es igual y aquí lo tienen ahora

abc de como que no me dice mucho no sé a

qué se refieren bueno pues para ellos

podemos darles títulos personalizados a

cada una de estas columnas por ejemplo

aquí andan en los hot comes vamos a

ponerle cairo es igual a nombre y aquí

en internet jairo desigualdad usuario

por ejemplo y regresamos al equipo de

invertir ahora dice nombre y ahora este

de aquí dice usuario y también podemos

este organizar información que hemos

dado como sorting una columna sorting

igual a 0 y ahora si yo me vengo a mi

aplicación y hago clic aquí en usuario

voy a ordenar los de manera alfabética

cualquiera de ellas

una una tabla de excel y una tabla de

excel si no pudiéramos trabajar con ella

y resulta que sí podemos quiero que vean

algo muy interesante vamos ordenarlos

por haití mejor si yo hago doble clic

aquí

puedo cambiar la información entonces

este chico encima erving ahora se va a

llamar el aspecto júnior y pueden

moverse con sus teclas no con sus

flechas del teclado y desde equipo de

neiker ascendente por ejemplo hemos

llamar este

y ahora ojo algo muy pero que muy pero

que muy importante es el hecho de que

cuando ustedes modifican la información

aquí en pantalla en esta tabla lo que

están haciendo es también modificar la

información que le pasaron al componente

en este caso nosotros le pasamos esta

información de usuarios y lo que está

haciendo activo es que al modificar aquí

al escritor juniors por ejemplo vamos a

poner este no lo sé gustavo mito para

modificar esta información

archivo está tomando nuestro estado y lo

está modificando por nosotros y podemos

comprobarlo y haber esto vamos a meter

dentro de un h 2

y aquí vamos a poner un botoncito que

diga mostrar estado y en este botón en

el un clic lo que haremos es imprimir en

pantalla con sol punto vamos a imprimir

los usuarios ok nada más para que vean

que la información se modifica vamos

aquí a inspeccionar revisamos la consola

borramos todo esto nos hace clic en

mostrar está ahora mismo lo que muestra

aquí es al ingraham jeringuilla

clementine como pueden ver le vamos a

modificar esto por las frito

la csf y todos y no podías vendar el

buen aspecto 3

yo le hago clic en mostrar estado esto

de aquí es lo que está guardado en

usuarios entonces esto es muy pero que

muy útil porque la información que se ha

modificado aquí en pantalla de forma

gráfica de forma visual de activa que si

yo la información se guarda en el estado

se guarda en el set de data original

entonces luego ustedes pueden aquí poner

otro botón que diga enviar por ejemplo y

lo que va a suceder es que la

información modificada se vaya pero

porque esto también este puede ser

peligroso y hay que tener en cuenta cómo

funciona bien este hans antiguo por

ejemplo aunque podemos hacer es mezclar

o combinar celdas con dark souls iguales

yo regreso y si yo tomo estos dos y out

clic derecho no pasa nada y es que

tenemos que activar el menú contextual

ahora mismo con diego clic derecho se

activa el menú contextual de la mejor el

clásico clic derecho del navegador bueno

para ello vamos a regresar y aquí vamos

a meter un context medio es igual

y ahora sí outfielder hecho entre estas

dos podemos hacer clic aquí en el cels y

nos las combina como pueden ver y eso

funciona como un sencillo arrastro todas

estas personas van a pasar a hacer

clementine

y vamos a revisar cómo se ve nuestro

estado

mostrar estado ojo fíjense que todas

estas cambio clementine pero cuando

combinamos estas dos para el 1 el just

your name se pierde aunque intensa

demasiado cuidado con estas cuestiones

la idea es que prueben la herramienta

para que sepan que funciona y no tengan

eventos inesperados pero esto puede ser

un problema también porque lo mejor no

queremos que el usuario esté modificando

nuestra información a lo mejor no

queremos que él esté manejando nos

cambie todo bueno para eso podemos

pasarle a nuestro objetivo un pro que se

llama grid omni y esto lo vamos a poner

como tour de modo que nuestra tabla sea

de sólo lectura entonces como pueden ver

si yo hago doble clic ya no puedo

modificar la información pero aquí hay

un problema si yo hago clic derecho para

quitarle este back y sorpresa ya puedo

estar modificando de nuevo incluso puedo

hacer clic en la columna y desactivarlo

todo esto bueno activarlo nuevamente y

aquí ya vengo y te cambio la información

bueno para eso para eso jajaja table nos

da la oportunidad de definir qué

queremos que se muestra que indica que

varias funciones por ejemplo podemos

insertar filas y estas filas agregan

aquí vamos a ponerle aquí

fila

fila extra nuevamente suelo demostrar

estado

notarán que aquí se agregó fila extra se

agrega cualquier cosa que vamos una

tabla de excel se va a ir agregando

obviamente a todos los datos disponen a

menos que nosotros los estemos añadiendo

pero como les decía que en el contexto

medio tenemos la opción de eliminar

podemos eliminar esto de aquí podemos

agregar podemos hacer control z pero

bueno la idea es que si queremos evitar

que la gente no se active esto para

modificar y nos esté cambiando la info

podemos indicarle el archivo que

queremos mostrar en este menú contextual

para ello voy a regresar a la aplicación

en context medio en lugar de pasarle un

truco lo que haremos es pasar una red

con las funciones que queremos por

ejemplo nada más queremos agregar arriba

abajo

y ya lo mejor queremos no mezclar el

mezclar es muy peligroso vamos a dejar

nada más

vamos a hacer nada más

estas dos robaba y robbie gould regreso

a una aplicación mi tabla sigue en solo

lectura y ahora se haga clic derecho no

puedo activarlo de vuelta si acaso lo

puedo agregar información y aquí pues

iría poniendo mis datos pero ojo que

pues ahorita está desactivado entonces

otra cosa que podemos hacer es lo mejor

en lugar de bloquear todo de ponerle un

candado aquí esto vamos a poner en fox

lo que podríamos hacer es bloquear la

información por columna lo mejor el

haití definitivamente no queremos que la

gente lo modifique porque de ello

depende toda nuestra aplicación al aire

y le ponemos como ri tong y regresamos a

la aplicación y todo lo vamos a poder

modificar excepto el like que si hago

doble clic no me dejáis intento con

click derecho tampoco porque he puesto

únicamente estas dos dos funciones y

ahora si ustedes son son como yo y no

les gusta trabajar con aplicaciones en

otro idioma tiene que estar en inglés

que se esté no sé qué significa lo que

pueden hacer es traducirlo al español y

para eso de vuelta aquí en nuestra

aplicación vamos a importar

22 elementos más el primero es

register language diccionari y el

segundo es el código de idioma en este

caso si están escuchando este vídeo

probablemente hablen español entonces

para españoles es mx

y esto lo importamos de hansen facebook

diagonal hay 18 en el que ustedes es una

abreviatura de internacionalización que

es todo un tema pero ya que lo hayamos

importado al igual que como hicimos aquí

vamos a registrar este idioma en es mx y

una vez habiéndolo registrado aquí en

hot se lo vamos a decir te language es

igual a

es igual a es mx

muy bien regresamos a la aplicación y

ahora si yo hago clic derecho sigue en

inglés a ver a ver qué pasó y eso se

debe a que como pueden ver aquí le pase

un objeto este esto es un objeto se me

olvidó que adicional al smx vamos a

poner la multitud y ahora sí guardamos y

regresamos y si yo hago clic derecho

fíjense que ya me sale en español y esto

aplica para todo si yo devuelvo esto de

aquí a como estaba hecho

sólo quiero que vean que absolutamente

todo está traducido eliminar fila

en el celdas podemos aquí jugar con la

alineación de ponerlo derecha todo tiene

que ser con casi todo casi todo aquí

anda entonces es un componente muy bueno

una paquete muy pero que muy útil y por

último en lo que ya trabajamos con la

info aquí vamos a cerrar esto de acá y

otra hamsun a info y ahora qué pasa si

en lugar de que ya que se borra la info

tenemos un botón que diga enviar qué

pasa si en lugar de eso queremos

permitir al usuario que descargue la

información bueno para eso también

podemos hacerlo con archivo vamos a

trabajarlo aquí de vuelta en app se lo

voy a regresar a como estaba vamos a

importar

cual vamos a importar nada primero hay

que crear una referencia a nuestro

componente de archivo para ello diremos

que red es igual a vamos a llamar la cbo

component ahora está esta referencia no

existe quedamos acá error hay que

definirlo para ello aquí dentro de

nuestra función de app diríamos const

diego componen es igual a react puntojus

red y los dejamos en

ahora este botón en lugar de mostrar el

estado vamos a ponerle

descargar

archivo

ok y en lugar de que imprima en pantalla

lo que haremos es

es ejecutar una función que se llame

descargar

archivó y obviamente esta función no

existe hay que definirla para ello aquí

arriba diríamos con descargar archivos

descargar archivo

es igual a

y aquí ojo hay que hacer dos cosas

primero hay que trabajar con el plugin

de descarga y hay que indicarle este

plugin como que vamos a esperar

información porque hanson según nos da

tres maneras de escalar la primera en

algún archivo se sube la segunda

diciendo un formato blog la tercera sea

un formato de strings nosotros interesa

el archivo y es la que voy a mostrar

aquí en pantalla entonces lo que hacer

es tomar esta referencia al componente

de hollywood y utilizar su plugin de

descarga por ello diremos que este

plugin descarga es igual a observo

componen esta referencia el actual por

instantes get login download file y

ahora vamos a tomar este plugin de

descarga para descargar

va a utilizar su propia descarga de

descarga de archivos decimos que este

tipo se sube le decimos cómo queremos

que se llame dicho archivo esto lo

guardamos regresamos aquí y fíjense que

si yo modificó la info vamos a mandar a

escrito el grande

denle un like paranacito grande ya

sabemos de ponerle la citó también ya

que hayamos hecho esto voy a hacer clic

en quien descargar archivo y me marca

error pues esos bastardos ver me niego a

que me marca un error on the fine y esto

se debe probablemente a quien no utilice

la sintaxis adecuada aquí dentro de este

objeto de opciones que le estamos

pasando download find bueno estaba este

método en este plugin que sacamos aquí

bueno este en este objeto de opciones en

lugar de llamar los usuarios puntos

estuvieron se llama los usuarios y lo

vamos a decirle que el fallo extensión

excesiva y el doble digamos que el mind

type

es igual a text s v este plugin de

descargas no se llama download file se

llama export file ok entonces chicos muy

importante siempre la documentación no

se preocupen son cosas que pasan export

file y con ello en mente vamos a decir

ahora si esta es la buena hacemos clic

en descargar archivo y ahí lo tiene nos

descarga el archivo de usuarios no estas

gran escritorio salario guardar así

damos clic en ahí lo abrimos y como

pueden ver ahora si esta es la buena y

aquí pues no me incluye los nombres de

columnas y esto se debe a que no lo

configuramos así en nuestro aunque todas

opciones que podríamos poner por ejemplo

coachers decimos que es true y si lo

vuelvo a descargar

y no habrá nuevamente no bueno esta

nueva versión aquí tampoco menos incluye

y esto se debe a que una vez más hemos

utilizado el nombre incorrecto aquí nos

cogerse que nos abreviado como en el

componente aquí si es completo entonces

escribimos commerce tour y por lo tanto

de vuelta para que descargar archivo no

parece que la tercera siempre si es la

web lo abrimos y aquí está fíjense que

no carece abc y df dice a nombre bueno

porque no lo pueden ver

a nombre de usuario de ellos y estos son

los mismos nombres de columna que

tenemos aquí nombre de usuario son los

únicos que hemos colocado y bueno chicos

ahí lo tienen este fue el tutorial del

día de hoy se les gustado dejen me

gustan suscríbase para ver más contenido

como éste como siempre en los

comentarios puede indicar me qué tipo de

tutoriales gustaría ver y si les ha

gustado vídeo bueno pues en pantalla

verán dos vídeos más 3 interesa con

harán clic y nos vemos la próxima vez
