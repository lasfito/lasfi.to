---
template: tutoriales
url: algoritmo-primer-positivo-faltante
enlaceyt: https://youtube.com/embed/tSykFigZeLo
date: 2022-04-28T19:26:52.087Z
title: Entrevista Técnica en Uber - Primer Positivo Faltante
metaDescription: 'Aprende cómo resolver este problema técnico (algoritmos) paso
  a paso y prepárate para tu próxima entrevista en Uber #leetcode #algoritmos '
tag:
  - Algoritmos
  - JavaScript
autor: Adrián Salgado
introThumbnail: 'Aprende cómo resolver este problema técnico (algoritmos) paso a
  paso y prepárate para tu próxima entrevista en Uber '
keyword: Algoritmo Primer Positivo Faltante
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/34-primer-positivo-faltante.png?alt=media&token=51c39bdd-e754-4e1f-a107-ccf44a756d71
---

En este video, resuelvo el problema "Primer positivo faltante" (First Missing Positive). Este es un problema difícil planteado en muchas empresas de tecnología (FAAMG), incluidas Amazon, Uber, Google y muchas más. Este problema se consideraría fácil/medio si no existiera la restricción de que debemos tener una solución con espacio adicional constante.

En el enfoque de "fuerza bruta", podríamos añadir todos los números que tenemos en nuestro array a un set. Luego, realizamos un ciclo de 1 a N donde N es el número de elementos que tenemos en nuestro array y verificamos si el número está presente en el set. Si el número en el que estamos no está en el conjunto, encontramos nuestro primer positivo faltante. El enfoque de fuerza bruta implicó una complejidad lineal de tiempo Y espacio, por lo tanto no se cumple la restricción. Ahora, en el enfoque optimizado, se necesitan 3 pasos para resolver este problema. Para el paso 1, debemos convertir cualquier número negativo y mayor que N en 1 (o cualquier otro número arbitrario).

Esto se hace para restringir nuestro rango de números. Para el paso 2, usamos el rango de números como índices de nuestro array y realizamos una búsqueda para cambiar el signo del elemento en el índice. Esto significará que hemos visto el número positivo. En el paso final, buscamos el primer número no negativo, si encontramos uno, el índice + 1 es el primer positivo faltante; sin embargo, si no lo encontramos, sabemos que la respuesta será N + 1.

## Transcripción

hola chicos que tan bienvenidos al día

lo vamos a resolver este problema

llamado pérez missing positive o primer

positivo faltante es un problema que

sólo aparecen entrevistas técnicas de

empresas grandes como por ejemplo über y

si quieren practicar lo encuentran en el

lead code es un problema difícil y va

más o menos así dado un reino

desordenado de números enteros les

devuelve el entero positivo faltante que

sea el más pequeño es decir si tenemos

varios enteros positivos faltan tenemos

que devolver el más pequeño de todos

ellos y viendo aquí vemos varios

ejemplos y tenemos este rey desordenado

qué valores tienen su interior tiene el

valor cero tiene valor 1 y el 2 que

cuente los positivos hacen falta hacen

falta el 3 55 6 678 muchísimos y ahora

de todo estos entre los positivos que

faltan cuál es el más pequeño el 3 lo

mismo acá tenemos

13 4 y menos 1 cuáles frente al positivo

faltante más pequeño el 2 porque si bien

falta el 56 mil 78 etcétera el más

pequeño de los que falta cientos y lo

mismo por acá 7 8 9 11 12 falta el 10

falta el 6 al del 5 problemas tenían que

falta es el 1 que y este es el problema

y ahora tienen una primera instancia

podría parecer que es fácil yo pues ya

está no es muy fácil se cicla quizás nos

podrían saltar a la mente pero lo

difícil

viene con esta restricción que dice bien

simplemente a un algoritmo que corran en

tiempo lineal y que además ese espacio

extra constante que esto de aquí nos va

a complicar toda la existencia ya como

lo resolveríamos

[Música]

tengo aquí ya este rey con los valores

235 1 - 306 5 y 22 lo primero disculpen

mi terrible letra space lleva ya lo sé

pero se entiende aquí es driver y ahora

como lo resolveríamos si no tuviéramos

la restricción que nos da el problema

algo muy sencillo que podríamos hacer es

tomamos este rey lo convertimos en un

set para eliminar valores duplicados

recuerden que no admite valores

duplicados y entonces tendríamos casi

todo el contenido de acá y simple y

sencillamente lo que podríamos hacer es

ciclar a través de este ser ok y tiramos

y vamos a comenzar con un valor de y

igual a 1 y entonces simple y

sencillamente en cada paso en la

decoración vamos a revisar si el valor

de ahí está al interior de ser desde el

set entonces ahora mismo y vale 1 el 1

está dentro del set sí aquí está bueno

ahora la identificación y vale 22 está

dentro del set sí aquí está ahora y vale

33 está dentro del set sí aquí está y

ahora vale 44 está dentro del set no no

está entonces la respuesta sería 4 que

está y haciendo la respuesta x es igual

a 4 y esto lo resolveríamos así si no

tuviéramos la limitante las

restricciones de entonces la pregunta es

bueno y con las restricciones como

podríamos resolverlo

bueno pues para eso si quieren

intentarlo pueden pasar el vídeo en este

punto y si no quieren intentarlo ya lo

intentaron y sólo quieren la respuesta

quieren un poquito de ayuda entonces

continuamos miren lo primero que hay que

hacer es algo que yo siempre yo

recomiendo que yo hago es intentar

encontrar este patrón es este y

comenzamos por analizar el dato de

presentado con el corriente con el que

comenzamos y ahora mismo tenemos este

rey que tiene ocho elementos ok podemos

montar aquí n es igual a ocho elementos

y ahora tenemos una radio ocho elementos

cuando menos aleatorio tenemos 2 351 13

pero qué pasaría ojo qué pasaría si en

lugar de tener estos valores tuviéramos

una rey igual de ocho elementos pero que

le dieran la casualidad de que los

valores sean 12

4 5 6 7 y 8 qué pasaría si fuera este el

caso en este escenario

cuál sería el entero positivo faltante

más pequeño todos estos son enteros

positivos y el faltante más pequeño

obviamente sería el que sigue de acá ya

que sigue acá es un 9 ok y ahora en este

escenario la respuesta sería el que

sigue del último 9

como bien podemos verlo 9 sigue de 8 y 8

es la misma cantidad de elementos que

tenemos entonces esto qué quiere decir

pensar un poquito lo que quiere decir

esto es que la respuesta del problema va

a estar siempre en un rango en un rango

que va de 1

ah

lo que sea que tengamos como valor de n

más uno entonces que sería de 1 a n más

1 ok y para este caso en concreto para

este caso que vamos a resolver la

respuesta el valor que estamos buscando

tiene que estar entre 1 a 9 no hay más

nuestra respuesta no puede ser ni es

nuestra respuesta no puede ser 11

nuestra respuesta tiene que estar

forzosamente entre este rango y es esta

la señal que tenemos que tomar porque

esto nos indica que la respuesta tiene

que ser alguno de estos valores y el

valor que no esté en este rango podemos

deshacernos de él por ejemplo este menos

13 vamos a deshacernos de él este menos

5 vamos a deshacernos de él lo mismo

este 22 porque están fuera del rango

pero no puedo simplemente ir por la vida

eliminando valores entonces lo que voy a

hacer en lugar de simplemente

eliminarlos es sustituirlos por algún

valor que esté dentro de este rango para

este escenario voy a escribir un 1

y ahora si todos los valores que están

en mi array son valores que pueden ser

alguna probable respuesta y ahora esto

lo primero que hay que hacer aquí vamos

a contar lo primero es eliminar los

valores fuera del rango que hemos de

poner el rango

muy muy fea mlegta ahora lo segundo ya

que eliminado en los valores del rango

lo segundo que hay que hacer es tirar a

través buenos y clara a través de este

rey e ir llevando un registro de los

enteros positivos que veamos tenemos que

llevar un registro de los enteros

positivos que si están dentro de la

riqueza existen entonces haríamos esto

empezamos acá vemos que hay un 2 el 2

existe lo registramos aquí vemos el 2

que existe luego el 3 el 3 si existe

luego el 5 el 5 si existe luego el 1 el

1 si existe ya que hayamos terminado

venimos para acá echamos un vistazo a

nuestro registro y aquí vamos a ver que

nos hacen falta el 4 decimos oye pues el

4 no fue registrado esta es la respuesta

ok entonces dónde vamos a registrar esto

claramente no podemos registrarlo en

otro rey no podemos registrarlo en otra

variable porque ya no cumpliríamos con

la restricción de espacio extra

constante por ello es que lo que haremos

es registrarlo dentro de este mismo

harry ok y antes de continuar con este

registro que quiero que agregamos los

índices tenemos aquí el índice cero el

índice 1 índice 2

456

estos son los límites de la red y lo que

sigue es registrar lo que vamos a poner

aquí regis

como lo vamos a registrar imaginemos que

ya comenzamos a

hace claro que vamos a comenzar aquí

comenzamos obviamente desde el índice

cero qué número tenemos acá tenemos el

número dos por lo tanto en dos si está

en el rey si existe y no es la respuesta

donde lo registramos lo vamos a

registrar en los índices de la ley y

quiero que vean esto dos en son dos o

que no hay pierde y dos qué posición

ocuparía en los índices ahora mismo el 2

ocupa la posición cero sí por qué pero

porque así es como viene en la red lo

que tenemos que hacer es pensar que

estos índices son números cardinales que

tenemos primera posición segunda

posición en tercera posición cuarta

posición y entonces lo que haremos es

irnos a la segunda posición que sería y

esta de acá y esta es la segunda

posición y para registrar que el 2 para

registrar que la segunda posición que el

2 si existe en la red lo que haremos es

tomar cualquiera que desea un honor que

esté aquí e invertirle su signo y

entonces ahora cuando yo vea la segunda

posición de la rey sabré que como es la

segunda posición sabré que el número 2

si existe continuamos

ahora estamos acá en el 3 y estoy acá

veo al número 3 me doy cuenta de que el

3 si existe que si está en la red vamos

a registrarlo donde lo voy a registrar

si es el número 3 lo registra una

tercera posición que sería 1 2 3 la

tercera posición entonces al valor que

esté en tercera posición le cambia el

signo y ahora cuando yo vea este signo

en la tercera posición se abre que el

número tres si existe en la red ok y

ahora continuando pasamos acá al 5 veo

al 5 en 5 si existe en lo que tengo que

hacer es modificar la quinta posición o

para más sencillo para no estar hablando

además voy a modificar el valor del

número actual menos 1 para dar con el

índice porque recuerden que los índices

comienzan de cero entonces 5 menos 14 me

voy al índice 4 ya este índice 4 le

cambió el signo leo acá

el 1 si existe uno menos 10 me voy al

índice 0 le cambió el signo acá 11 menos

10 muy bien si 0 yo quiero tiene

cambiado no hago nada 66 menos 15 el

índice 5 le cambia el signo 1 lo mismo

ya lo tengo acá y el 1 lo mismo ya lo

tengo acá ok entonces con eso ya terminé

mi registro ya revise todos mis valores

y registre cuáles si están dentro de la

red y ahora el tercer paso lo que sigue

es integrar una vez más y encontrar el

primer número que no tenga un símbolo

menos entonces y tramos buenos y claros

una vez más tiene siempre lo menos sin

lo cual significa que

el valor 1 si está dentro de la red me

voy a la segunda posición el segundo

valor el segundo valor tiene símbolo

menos sí entonces hace que el número dos

si está dentro de mi rey me voy a la

tercera posición en tercera posición

tiene signo negativo así entonces número

3 si está dentro de mi rey me voy a la

cuarta posición la cuarta posición tiene

el signo negativo no por lo tanto ya sé

que en mi cuarta posición o que mi

índice más uno que viene siendo cuatro

años y que este cuatro es el número que

no está dentro de la radio clic y éste

vendría siendo el entero positivo más

pequeño de de esterri vale y es así como

vamos a dar con esto de aquí y ahora

aquí cuando ya terminamos ya esto es

tiempo lineal y teramo y tramos si

quedamos varias veces pero sigue siendo

tiempo lineal y no generamos memoria

extra por lo tanto cumplimos con este

este requisito de espacio extra

constante y ahora que hay varios

escenarios por ejemplo lo primero cuando

uno escenarios llamémoslo x cage es vale

lo primero ahorita dio la casualidad

cuando para este ejercicio está cuarta

posición o lo que viene siendo el índice

más uno está cuarta posición no tenía

signos y por lo tanto 4 es la respuesta

pero pero pero qué pasaría si esto

tuviera signos y esto tuviera signo y

todos tuvieran signo en este caso como

todos tienen signo significa que la

primera posición el número uno si está y

el número dos y está y el número 3 y 4 y

5 6 y 7 y el 8 todos los números del 1

al 8 si están por lo tanto en este

escenario recuerden que la respuesta

siempre va a estar entre 1

un rango hacia un masón si aquí tenemos

ocho elementos y aquí todos estos

elementos tienen signo la respuesta

bueno descartamos entonces descartamos

toda esta parte del rango y sólo nos

quedaría el último cachito del rango que

sería el 9 en estos escenarios donde

todos tengan signo la respuesta va a ser

n + 1 entonces decía como que nuestro

caso hace como nuestra respuesta por

default predeterminada la respuesta va a

ser viene más o no en caso en que este

escenario se se suceda y ahora hace rato

cuando yo tenía acá cuando yo tenía

cuatro que tenía un 11 y creo que aquí

tenía un 22 y creo que aquí tenía un -5

hace rato que tenía al menos 5 y el 22 y

el 11 como estos valores estaban fuera

de mi rango de 1 además uno lo que hice

fue eliminarlos y lo sustituir porque lo

sustituye por un 1 ok esto fue un valor

arbitrario que yo me saqué desde el

rango y ahora qué hubiera pasado si

hubiera pasado por ejemplo tomando

tomando es de esta parte está p esta

primera parte hubiera pasado si hubiera

tenido un array

3 y 50

bueno pues aquí tenemos en es igual a 3

por lo tanto nuestro rango va de 1 a 4 y

todo lo que esté fuera del rango lo

tengo que sustituir voy a tomar este 50

y lo voy a sustituir por uno

y ahora fíjense qué está pasando aquí

antes de sustituir yo no tenía ningún

valor 1 antes de sustituir la respuesta

correcta es 1 porque un excelente lo

positivo faltante más pequeña pero ahora

cometí el error de sustituir este 50 por

11 y ahora resulta que la respuesta sea

sesgado se me ha modificado y al arribar

a la respuesta es 4 y esto claramente es

un error entonces hay que tomar en

cuenta esto al momento de implementar

nuestro código y ya verán cómo lo

haremos vamos a escribir la solución

vania estamos acá para escribir el

código escribir la función y aquí vean

que ya nos da por defecto esta función

que se llama prismas impositivo que

recibe como argumento ok y aquí nos dice

que el nombre debiera ser una ley de

números es lo que nos dice no obstante

aunque tenemos la garantía entre

comillas de que vamos a recibir una red

de números hay que hay que tomar

nuestras precauciones ok y aquí lo que

lo primero que vamos a hacer es un dark

box como lo llaman en inglés ungar culos

defensivo y vamos a prevenir que pasaría

sin nose lugares era una raíz fueran un

ok o qué pasaría si la longitud de este

lente para que lo escriban los deberes y

la longitud de este rey fuera igual a

cero en este caso si no tenemos números

o recibimos no sería el entero positivo

faltante más pequeño pues con este caso

y más pequeño sería el primer entero

positivo y regresamos 1 lo que esto lo

primero para lo siguiente tenemos que

llevar registro de nuestras maletas

diremos que n es igual a no es punto

line para saber cuántos elementos hay en

su interior pero lo primero que haremos

es el paso el primer paso que es

eliminar todos los valores que estén

fuera desde el rango posible de

respuesta es que va de 1 a n aquí lo

tengo en gigante el primer paso era esto

el rango como lo hacemos muy sencillo

muy sencillo vamos a ciclar vamos a a

este sí así claro entonces que voy a

poner un force citó un word donde

comenzamos con ni igual a cero por el

tema de los índices que están trabajando

con índices y vamos a continuar siempre

y cuando sea menos que n en cada

iteración sumamos 1

y ok pero ojo aquí ahorita que vamos a

estar cambiando los valores por algún

valor arbitrario que yo voy a usar uno

ahorita que vamos a hacer esto tenemos

que prevenir este escenario donde por

cambiar el valor modificamos la

respuesta y nos metemos la pata solids

una vez para esto basta con llevar un

registro basta con llevar una variable y

dar seguimiento a si originalmente la

red tenía el valor que nosotros nosotros

estamos introduciendo como yo voy a

introducir el 1 voy a crear aquí una

constante una variable que se llame con

times

y que originalmente va a ser falsa

primero voy a asumir que no contiene el

número 1 y entonces aquí vamos a ir

circulando y vamos a ir revisando el

valor de cada uno de las posiciones de

la ley y hay algo como esto voy a decir

si no es que es el rey y la posición que

es mi valor de 1 si el valor actual no y

ese valor actual es igual a 1 entonces

qué es lo que quiero hacer entonces voy

a decir que con times one es el

verdadero entonces se encuentre el 1

mientras estoy circulando cambio esto a

verdadero para llevar seguimiento y

luego hago lo siguiente si el valor

actual si el valor actual de no es menor

o igual a 0

si el valor actual de nubes

es mayor que en esto qué significa esto

es la parte del rango todo lo que esté

fuera de mi rango que voy a hacer lo

eliminó cambio por el 1 y es lo que

estoy implementando aquí si es menor o

igual a 0 o si es mayor que n entonces

que queremos hacer lo que queremos hacer

es cambiar el valor a la posición actual

y

cambiárselo a un vale lo que hicimos

antes entonces aquí vamos a reciclar

todos los valores los vamos cambiando a

1 si están fuera del rango voy revisando

si originalmente la red tenía 11 y

terminando de ciclar qué es lo que voy a

hacer terminado el ciclo voy a revisar

si si contenía 11 y aquí fíjense si

si termino de ciclar y me doy cuenta de

que no contenía un 1 terminó de revisar

la red y no encontré el número 1 que

significa eso significa que la respuesta

son entonces voy a devolver me voy a

regresar antes y le devuelvo un 1 ya

está y si si si esto seguía es y si esto

es verdadero significa que no pasa nada

por haber cambiado los valores ok aquí

lo tengo todo cubierto si había un nuevo

problema en cambiar los valores a uno y

sin novia a uno si hay problema por

haberlos amigo pero si no había uno ya

sé que la respuesta es una no nos

complicamos sencillo que entonces no

sería el paso 1 y ahora que sigue el

paso el paso 2 el paso lo recuerden que

es revisar y registrar qué valores hay

dentro de nuestro rey y aquí lo que voy

a hacer es vuelvo a tener otro cíclico

y aquí vamos a ir revisando el valor de

cada una de las posiciones pero ojo ojo

que como aquí estamos cambiando signos y

puede ser que no estemos moviéndonos de

aquí para allá tenemos que tomar valores

absolutos y eso es lo que haré por aquí

y drago como sabes que el índice del

elemento que quieres registrar porque

acuérdense que aquí teníamos el 2 nos

íbamos al índice 2 - 1 que sería el

índice

ok entonces el índice que queremos

modificar le su signo que queremos

invertir el signo es igual a el valor

absoluto

de la posición del valor que tiene saca

menos 1 porque recuerden que sería 2 - 1

índice 1 y esto tiene que ser en

absoluto entonces ya tenemos el índice

que tengo que ir a modificar qué bueno

igual es que tendría que ir por acá

sí sí tendría que por afuera

el índice que sigue ahora nos vamos a

ese índice vamos a buscarlo y decimos si

el valor que tienes en esta posición en

este índice es mayor que 0 significa que

no le he cambiado sigue sin mayor que

ser es positivo y si es positivo

entonces que quiero hacer cambiar el

valor diciendo que este mismo valor va a

ser igual al mismo valor ya tenemos ahí

multiplicado por un -1 ok si el valor

que tenga cada dispositivo bueno pues

este valor reasigna le lo que sea que

haya estado en informen son simple y

sencillamente le estamos cambiando el

signo y ya con esto termino mi búsqueda

y registro que vendría siendo el vaso

paso número 2 y ahora lo siguiente

cuáles los inter para su número 3 cuál

es el paso número 3 el paso número 3

buscamos que tenemos el registro para

sumar 13 es que número que posición no

tiene signo negativo la primera posición

de signo negativo es nuestra respuesta y

para ello nuevamente vamos a volver a

este estar circulando por acá

y

vamos a revisar si el valor actual es

positivo es decir si no tiene signo

negativo entonces vamos a devolver 1

vamos a devolver y más 1 por qué y más 1

porque recuerden que si este digamos que

este 5 digamos que no tiene símbolo no

tiene signo negativo su índice es 2 pero

este índice es base 0 entonces está que

es la tercera posición le sumamos 1 para

que nos dé 3 en la respuesta sería 3 es

lo mismo que hicimos acabando el índice

de 3 pero más 1 daba la cuarta posición

primera posición es una presión tercera

posición por depresión y la respuesta

era 4 por ellos que aquí regresamos

índice + 1 ok y con esto terminamos el

tercer paso pero recuerden teníamos 22

casos especiales de primer caso qué pasa

si al insertar unos estábamos todo y el

segundo caso qué pasa si todos nuestros

todas nuestras posiciones tienen signo

negativo que tengo tengo en donde es

orden aquí y qué pasa si todas estas

expresiones tienen signo negativo

habíamos dicho que en este caso el valor

por defecto sería n mazón esa sería la

respuesta entonces aquí al final de todo

esto sin ningún punto de esto regresamos

lo que haremos al final entonces es

devolver n más 1 ok y con ello

terminamos nuestro código con ello

estamos resolviendo ese problema

entonces lo que voy a hacer es vamos a

enviar esta solución

es

un éxito

claramente mucho margen para mejorar si

evaluamos por el porcentaje en velocidad

igual no es mucho son milisegundos pero

ahí está lo que importa es que está

resuelto es este el enfoque que pueden

tomar para resolver este problema de

crisis impositiva o primero positivo

faltante y con ello cumplimos el vídeo

chicos y les ha gustado regalen no me

gusta y suscriban se para ver más

contenido como éste recuerden que en los

comentarios por dejar sus dudas y kojo y

yo con mucho gusto los estaré asistiendo

y bueno ahí está nos vemos en la próxima

ocasión hasta luego
