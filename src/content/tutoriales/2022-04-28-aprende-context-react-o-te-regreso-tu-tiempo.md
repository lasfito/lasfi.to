---
type: tutoriales
slug: aprende-context-react-regreso-tiempo
enlaceyt: https://youtube.com/embed/dmxVjrSdOAY
date: 2022-04-28T22:07:18.517Z
title: Aprende Context (React) o te regreso tu Tiempo
metaDescription: "Aprende de una buena vez todo sobre Context - el hook de
  React. Si no aprendes te regreso tu tiempo :v #webdev #react #tutorial"
tag:
  - React
  - Desarrollo 101
autor: Lasfito
introThumbnail: "Aprende de una buena vez todo sobre Context - el hook de React.
  Si no aprendes te regreso tu tiempo :v #webdev #react #tutorial"
keyword: context react
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/38-context-react.png?alt=media&token=adb5fc7e-f579-45d5-931a-582ac298591c
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy vamos a aprender cómo utilizar

contexto o contexto en riad ok y para

qué sirve ok es context primero para qué

sirve context sirve para resolver un

problema que a más de uno nos han pasado

cuando comenzamos a descubrir el

maravilloso mundo real imaginemos que

tenemos esta aplicación en donde el

componente a en su interior tiene el

componente b hib en su interior de nace

en su interior de i d en su interior

tiene el componente

\[Música]

ahora imaginemos cuando imaginamos

vengamos aquí a nuestro código que

tenemos nuestro index mostramos y aquí

en componentes

imaginemos que en a tenemos esta

información generar y deira y esta

información la queremos o necesitamos

mostrar la cne vale para eso qué es lo

que tendríamos que hacer lo que

tendríamos que hacer es pasar se la ve

como un propio propio propiedad vamos a

decirle jenner y deira y de luego debe

la tenemos que atrapar en props y pasar

la cee tal como hicimos con y luego en

se repetimos el proceso

y así hasta llegar a ahora y recibe esta

información aquí la atrapamos en props y

la mostramos o la hacemos y la mostramos

en el componente y ahora si me vengo

para acá la información original desde

el componente a llega hasta el

componente ok pero para esto que tuvimos

que hacer tenemos que hacer todo un lío

tuvimos que estar haciendo algo que en

inglés se conoce como prop reading o la

excavación de props no lo sé prop link

que así aprendan lo libro berlin es esto

que a pesar de que b c y d no necesitan

esta información la tuvimos que hacer

pasar por ellos lo cual nos llena de

líneas el código o lo vuelve menos

legible y es un tedio es un problema en

este escenario es una aplicación con

cinco componentes probable que tienen

más complejas que tendrían que hacer

esto en una cadena de 7 10 15

componentes y eso es terrible es la

muerte bueno pues contexto contexto

surge para solucionar esto

y lo que hace contexto es lo siguiente

toma toma el valor original que en este

caso es destaca en nuestro valor

original está en aaa y lo que hace es

que en lugar de que esta información se

guarde en los componentes para estarlo

pasando lo que hace es que los saca del

árbol de componentes lo saca

completamente de acá y lo guarda en un

lugar aislado separado y luego de esta

manera todos los componentes van a tener

acceso a esta información ok y vamos a

hacerlo miren muy sencillo primero vamos

a quitar esto de acá y vamos a borrar

esto de acá

y vamos a ahorrar todo este propio

berlin que acabamos de hacer

y vamos a crear nuestro contexto aquí en

la aplicación por convención o por

normas notaran que esto sucede muy

frecuentemente crearemos una carpeta

llamada context y aquí crearemos y lo

llamaremos de irak context porque así se

llamaba nuestra variable

ok y aquí en de ira context vamos a

importar

\[Música]

create context desde ring ok esto es

esto nos va a permitir crear un contexto

dentro del cual guardaremos nuestra

información y después nuestros

componentes van a poder acceder a esa

información que es el primero que

tenemos que ser los primeros importar

create context lo segundo es utilizar

esta función para crear un contexto yo

lo llamaré de ir a context vale y aquí

ejecutamos la función y lo que

ejecutemos se guarda aquí ahora

ahora se preguntarán bueno louis y si

guardan la información del contexto cómo

es que los componentes van a poder

acceder a ella bueno muy sencillo van a

poder acceder a ella por qué

lo que haremos es agarrar todos los

componentes que queremos que tengan

acceso a la información y envolverlos

con un componente especial y guarda al

contexto que el contexto es entonces un

componente especial que envuelve a otros

componentes y dichos componentes que

están en su interior tendrán acceso al

contexto entonces no tendremos que

preocuparnos que de la pasarlo al ver y

al pse no cualquiera directamente va a

poder acceder porque van a estar

envueltos entonces continuando lo

primero es crear el contexto y lo

segundo es crear este componente que

envuelve este componente que envuelve se

conoce como provider o proveedor

entonces que diremos algo como function

de ir a context provider

va a ser una función y ahora aquí en

este proveedor en este componente que

envuelve y al cual los componentes van a

tener acceso

es aquí donde pondremos la información

que queremos compartir hace rato lo

habíamos llamado

género gender aquí la voy a llamar

context de ira es igual a

58 ok ok está la información que

queremos este compartir con todos los

demás y entonces lo que haré es crear

otra constante que sea me valió y varios

va a ser igual a contex de ella porque

hago esto sólo por claridad por

legibilidad porque en nuestro proveedor

tenemos que especificar cuál es el valor

que queremos compartir ahora vamos a

terminar este este de la context

provider es devolviendo

devolviendo un componente en el cual

guardemos la información dicho

componente lo vamos a obtener de acá del

contexto que creamos con la función de

create context fíjense es muy sencillo

lo queremos es de ir a contestar como

los nombramos acá y luego con un punto

accedemos a provider y le damos un valor

que en este caso el value es el valor

que estamos definiendo mack para no

confundirnos vamos a llamarlo valor está

acá vamos a cambiarlo también a valor y

ahora recuerden la idea es que este

componente va a envolver a todo este

árbol de componentes cuando esté

provider van volverlos y para envolverlo

es necesario indicar acá que esté aun

que esté provider admite

componentes en su interior para llevar y

ha mostrado como propio punto children y

este profes punto children tenemos que

obtenerlo de acá desde el área de

propios de la función ok y es así de

sencillo ahora por último dado que este

contexto

vamos a estar utilizando junto con los

demás componentes es primordial bueno

más que primordial necesario exportar

tanto el contexto como el proveer ok y

ahora antes de antes de seguir les he

hecho mucho énfasis en que estoy probar

el envuelve a todos estos componentes y

esto es literal tenemos que tomar este

probar el esto que estamos devolviendo y

envolver nuestro árbol de componentes

para ello aquí en index y aquí es donde

nace todo como pueden ver aquí nace la y

él en su interior tiene ve lo que haré

aquí en index es importar probar haré

algo como de ir a context provider desde

context y simple y sencillamente lo

agrego por acá y ahora ya lo envolví y

ahora cualquiera de mis componentes va a

tener acceso a este valor que estoy

creando acá en el contexto vale este 58

como estaban tener acceso muy sencillo

vayamos al componente donde necesitamos

el valor y aquí lo vamos a importar para

ello para ello tenemos que desde react

importar una función llamada news count

ex esta función lo que nos va a decir

oye a qué contexto quieres acceder que

información necesitas y bueno para ello

tenemos que importar propiamente este

contexto por eso es que exportamos ambos

aquí de vuelta no vamos a importar

porque de ir a context desde donde desde

nuestra carpeta de context y ahora

simple y sencillamente dentro del

componente donde necesitamos la

información que en este caso el

componente puede ser como

const

contex de ira es igual ayush contexto

que viene de rayak y aquí lo usamos como

referencia el contexto que creamos en

nuestra carpeta de context es así de

sencillo y ahora aquí simple y

sencillamente pasamos con texto de ira

guardo y como podrán ver aquí mi

componente ya tiene acceso a la

información

58 maravilloso no tenemos que pasar lo

del alves no tuvimos que hacer nada de

eso pero pero pero ojo esto es un número

58 qué pasa si quiero hacerlo más

complejo bueno pues para ello con text

se presta y lo que podríamos hacer es

que en lugar de guardar un mero 58

podríamos guardar un estado de manera

que este estado sea compartido de forma

global con nuestra aplicación para ello

aquí voy a importar ius state

y esta constante la voy a convertir en

estado vamos a

vamos a hacerlo así set context deira y

este 58 va a ser de 2 state y lo hacemos

así ahora aquí el valor que yo le estoy

enviando a mi provider piense que solo

estoy enviando el context ella lo cual

no tendría sentido porque si hablamos de

estado global a lo mejor voy a necesitar

modificarlo en distintas partes de mi

aplicación para ello es importante que

en valor envíe tanto el estado como la

función que me modifica el estado

entonces aquí algo que me gusta hacer

hay distintas convenciones pero lo más

común es que vean que el valor es un

objeto y aquí en objeto vamos a enviar

el tanto el estado como set con text de

ella ok y ahora lo que tengo que hacer

es actualizar mi componente dado que

aquí ojo dado que aquí mi valor es un

objeto lo que tengo que hacer es de

estructurarlo yo ya sé que mi objeto

tiene este valor que se llama context de

jan aquí está entonces simple y

sencillamente aquí

voy a de estructurar context de ira y si

yo guardo notarán que me sigue mostrando

mis 58 y si aquí le pusieran los valores

iniciales 0 y guardo ahora mi valor

inicial es 0 y como les dije este este

contexto puede ser accedido por

cualquiera de los componentes que estén

al interior del provider que entonces

por ejemplo yo podría irme al componente

b

y aquí vamos a importar

houston tex

vamos a importar nuestro contexto se

llama de ir a context

y dentro de la función recuerden que

vamos a decir que con texto

de ira es igual a houston tex la función

de riad con la referencia del contexto

que acabamos de crear por lo tanto es de

aquí yo viniera y pulsera o como datos y

luego con text leira debiera mostrarse

también en mi componente ve aquí está 0

y 0 pero pero pero la magia no termina

acá la maravilla de context es que al

estar compartiendo un estado con todo

nuestro árbol de componentes cualquiera

de ellos puede modificar el estado y

estos cambios se van a reflejar en todos

los lados donde estemos mostrando el

estado fíjense les muestro vengamos aquí

al componente y vamos a agregar un botón

que les parece

que vamos a ponerle sumar 1 y ahora al

hacer clic en el botón lo que haremos es

bueno primero primero recuerden que

quien dirá context en el valor estamos

enviado tanto el estado como el set

context era como la función que modifica

el estado entonces aquí en y lo que haré

es estructurar ambos basile de este

objeto me interesan

los dos hilos de estructura y ahora sí

aquí en mi botón lo que haré al hacer

clic es correr una función de flecha

me sumé uno en mi estado y si me vengo

para acá fíjense aquí tengo cero y acá

tengo cero

yo le sumó 1 el valor se refleja en

ambos

y esto es esto es una maravilla

maravilla de contex que nos toma una

información nos toma un estado los

sacará acá lo envía al contexto lo vean

proal provider que envuelve y

mágicamente todos pueden acceder a esta

información evitando unos líos y ahora

por último antes de cerrar antes de

cerrar todo mostrar algo fíjense que

aquí en vamos aquí al ve aquí también

estamos importando nuestro discount text

estamos trayendo el de ir a contexto la

referencia esto es mucho los chicos

estos son dos líneas y no tenemos tiempo

para escribir dos líneas por ello algo

muy común que van a encontrar es que en

este mismo contexto en este archivo de

irak con text vamos a crear

cook personalizado un gancho

personalizado

para facilitar esta este acceso al

contexto ok para ello aquí voy a crear

una función que se llame news de ir a

context no vamos a llamar la comsión

y ahora aquí qué vamos a hacer aquí en

newsletter context lo que haremos es lo

mismo que estamos haciendo aquí vamos a

acceder al contexto o que ese es el

primer paso

entonces fíjense

estoy por acá

y lo que haremos es decir qué

con texto es igual a news

contex ojo este contexto tenemos que

importarlo

tal como lo hicimos acá en estos

componentes recuerdan los contextos lo

importamos y steus con tecla vamos a

pasar la referencia del contexto en este

caso la referencia está en este mismo

archivo aquí y luego ojo aquí hay que

aclarar algo recuerden que para que mis

componentes puedan acceder a la

información del contexto tiene que estar

al interior del provider el proaire

tiene que estar los envolviendo y hago

comunes y revisar que si tengamos el

provider puesto como una suerte de

prevenir errores para ello vamos a

revisar si esto daca si tiene algún

valor de los que diremos si no hay

contexto vamos a generar un error que

diga oye esta función tienes que usarla

dentro de un provider vale caso

contrario si sea el contexto vamos a

devolver ok y este ellos de ir a context

vamos también a exportar

lo exportamos y ahora por ejemplo aquí

en be en lugar de importar esto acá y

luego la referencia simple y

sencillamente

vamos a importar este jugo personalizado

diciendo import

yus de irak con text y aquí estoy acá

simple y sencillamente ejecutamos

nuestro look vale y notarán ahora que en

b se sigue mostrando mi dato y esto

funciona de la misma manera pero ya nos

ahorramos una línea y este juego es

mucho más conveniente porque resulta más

más práctico es más legibles la

tendencia chicos que les puedo decir es

lo que se usa vale y bueno con eso

terminamos como pueden ver con texto es

muy poderoso es muy muy útil facilita

bastante compartir información entre los

componentes y ojo no tienen por qué

limitarse a un solo context a un solo

contexto en red algo muy común es que

utilicen context para distintos

propósitos uno quizá para información de

usuario otro para información de algún

estado global otro para información del

tema y es común de hecho que en las

aplicaciones que vean este nivel no lo

sé profesional industrial terminan acá

con varios probar a lo mejor 2 y luego

probar el 3 y así sucesivamente vale

pero

con esto pero en aquí logré con esto

terminamos espero que les haya gustado

el vídeo que haya sido útil que han

aprendido y si les ha gustado regale un

me gusta suscriban se para ver más

contenido como éste y nos vemos en la

próxima hasta luego
