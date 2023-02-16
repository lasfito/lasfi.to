---
template: tutoriales
url: como-crear-pwa-react
enlaceyt: https://youtube.com/embed/kMucD68rkio
date: 2022-04-28T18:25:08.582Z
title: Cómo Crear PWA con React — Mega Tutorial
metaDescription: 'Aprende cómo convertir tu sitio/aplicación web en una
  Aplicación Web Progresiva #webdev #react #tutorial #pwa'
tag:
  - React
  - Desarrollo 101
autor: Adrián Salgado
introThumbnail: Aprende cómo convertir tu sitio/aplicación web en una Aplicación Web Progresiva
keyword: 'tutorial react pwa '
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/31-pwa%2F31-pwa-react.png?alt=media&token=99d5e05d-ea32-4903-97d8-8a6061576cf3
---

## Transcripción

hola llegados que está bien venidos el

día de hoy aprenderemos cómo convertir

su sitio o aplicación hechos con rihanna

de w una pelea en caso de que no las

conozcan es una aplicación web

progresiva o progressive worth

application y básicamente son lo mejor

de dos mundos lo mejor de los sitios web

y lo mejor de las aplicaciones nativas y

les muestro ahora mismo yo tengo este

sitio en el cual tengo mis páginas tengo

una cerca tengo una galería y este sitio

web yo lo puedo instalar como si fuera

una aplicación gracias a que este sitio

web es a su vez una p w por ejemplo

ahora mismo si hago clic aquí en

descargar la aplicación de sant esta

ventana instaló la aplicación y ahora

fíjense que continúa en el sitio pero ya

no estoy en el navegador ahora continuó

en una aplicación propia lo pueden ver

aquí en el título esta es una aplicación

propia lo mismo si hiciera esto desde

este simulador de android aquí estoy

navegando por el sitio web para hacer

clic en descargar la aplicación confirma

instalación y lo agrego a mi página de

inicio

y ahora este sitio web además de ser

sitio web es a su vez una aplicación si

me vengo acá a la página de inicio

notarán que aquí tengo esta aplicación

se llama b&w de prueba con el icono de

luego en la suite y si yo abro aquí

estamos de vuelta misma función misma

apariencia pero con la ventaja de estar

instalada y proveer esta experiencia

como si fuera una aplicación nativa y

bueno eso es lo que estaremos

aprendiendo a ser el día de hoy paso a

paso este es un tutorial muy porque muy

detallado y si te interesa aprender cómo

hacerlo acompañando

[Música]

valley antes de comenzar dos cosas la

primera recordarás que encuentran el

código de este tutorial de este vídeo en

la descripción junto con todos mis demás

tutoriales la segunda es invitarlos a

que se suscriban en el camino latín para

que semana tras semana reciban consejos

como este y lo 30 se que dicho quedan

dos cosas bueno el tercero es que van a

estar trabajando con este artículo que

yo he redactado entonces si no son tanto

de ver vídeos y son más de leer pueden

leer este artículo aquí en el paso paso

lo que vamos a estar haciendo y también

lo encuentran en la descripción del

vídeo vale entonces ya sin tanto bla bla

bla vamos a comenzar lo primero que

necesitamos obviamente obviamente es una

aplicación en riad en este caso yo estoy

utilizando club real pero puede ser una

aplicación de una cura o puede ser ganso

y puede ser next puede ser

cualquiera que sea el framework o

herramienta de su preferencia que en

este caso yo tengo esta aplicación que

les había mostrado tenemos una ni un

inicio una cerca una galería es una

aplicación muy muy muy sencilla entonces

vamos a comenzar la pregunta es cómo

podemos convertir esta aplicación

fíjense ahora mismo este botón no hace

nada la pregunta es cómo podemos

convertir esta aplicación en una doble y

no una w siempre de componente del

progressive web application muy sencillo

son 67 pasos aunque aunque yo me dieron

67 pasos pero tienen que saber que el

concepto básico detrás de una peruana

son dos elementos de primer elemento es

un service worker service worker es un

código que se ejecuta en el fondo de

manera independiente y el service worker

es quien porque está y agenda y organiza

todo el asunto para que el p doble

función es el primer elemento del

service worker es un elemento es un

archivo llamado web manifestó manifiesto

web en este manifiesto que está hecho

jason vamos a describir cómo queremos

que se comporta nuestra aplicación como

queremos que se vea cómo queremos que

luzca ok es más o menos la parte iba en

la parte gráfica

ese es el word manifest y esta vez

worker es la parte lógica la parte

funcional pero ya basta de charla vamos

a comenzar aquí tenemos nuestro primer

paso instalación de un work box ok vamos

a tomar esto de aquí lo voy a copiar de

quien la terminal de nuestra aplicación

de ojos una aplicación común y corriente

no hay más bueno aquí en nuestra

aplicación

vamos a pegarse comando y vamos a

instalar todas todos estos paquetes que

piensa que todos son de word box wall

box score works exploration world

speaking picassiano application como se

diga y de pronto no yo lo hice porque

instalamos tantas cosas the works bueno

esto es el prefacio es la introducción

la preparación y el elemento de service

workers world box es un open source de

google y tanto google como facebook y

liza un word box y es algo así como que

un estándar todo mundo lo utiliza y es

algo muy muy sencillo de incorporar que

primer paso completo segundo paso

creación de web manifest vamos a crear

este web manifest se llama manifest

punto jason y usualmente dependiendo de

si es crear apps y svyt si es gasto si

es next va a depender lo que estoy para

hacer funciona para crear y funciona de

forma estándar para html puro por así

decirlo también bueno html clásico

extreme él es ese se llama escrito pero

para camps lo vamos encontrar aquí en la

carpeta de public o la carpeta pública

usualmente ya viene creado un archivo de

manifest esto viene de plantilla viene

por defecto como pueden ver el nombre

real

campo viene todo esto por defecto ok si

están con gadafi y si están con next si

están complete al final al final al

final al final vamos a ver aquí post w7

al final vamos a revisar qué hay que

hacer mientras no adelanten no se vayan

esto funciona para todos esto es lo

básico estos conocimientos chicos tomen

y utilicen o probando ya vamos a darle

creación de web manifestó son jason y

estas son las propiedades que puede

llevar no todas son obligatorias me

equivoqué empleo obligatorio no no todas

son obligatorias pero aportan ok yo voy

a ir agregando todas o casi todas

entonces y lo que voy a hacer es voy a

borrar esto

y vamos a comenzar la primera gran color

que es background que es un color

background color no es el color que

queremos que tenga la aplicación

mientras está cargando que la aplicación

saber como su sitio web la aplicación

esté durante estilo como si fuera el

sitio web es el sitio web en sí entonces

va con color es como que nos está la

aplicación mientras carga esto lo vamos

a tomar más adelante con un splash

screen si no saben que es una expansión

más adelante lo vemos de mientras que

colo quieren que tome yo les recomiendo

que tengan más mención mismo color el

fondo de su aplicación explicaciones

blancas metan aquí blanco ok listo

siguiente categorías aquí en categorías

vamos a colocar precisamente las

categorías a las cuales creemos que

pertenece nuestra aplicación que tienen

las categorías recomendadas por el w3c

world wide web consortium si no me

equivoco y éstas son las que recomienda

entonces los vamos a pasar como un array

lo que voy a venir y voy a decir que

esta aplicación va a pertenecer a la

categoría de lifestyle y de música

y hasta no hay más categorías listo

descripción descripción o bueno

discusión es precisamente eso aquí vamos

a ponerle

wv de prueba para mi gente

youtube listo descripción no hay más

siguiente decir que es tire dié se

refiere a dirección hay ciertos campos

de este manifiesto que describe nada por

ejemplo la descripción por ejemplo el

nombre por ejemplo el nombre corto

entonces en algunos idiomas escribe

derecha a izquierda y otros de izquierda

a derecha a quien le decimos al

navegador como debe leer esto izquierda

a derecha o derecha izquierda nuestro

caso ltr electoral ok siguiente campo

display aquí en display recuerden que a

mí me gusta llamar o me gusta decir que

una pedrada es un navegador fingiendo

ser una app nativa entonces aquí en

display está escrito mal vamos a

determinar o establecer como queremos

que se vean esta aplicación cuando sea

abierta queremos que sea como navegador

lo que vemos es ahora como aplicación

nativa hay cuatro valores screen

browser donde varios navegadores

exactamente el mismo navegador sin sin

mejoras sin nada y están leones

algo así lo más cercano nativo de tantos

fui como estos son los más cercanos a ti

vamos a poner aquí stand alone porque

hay algo que aclarar chicos

recuerden una pueblo hace el navegador

acción se pasa por una aplicación nativa

pero no es lo mismo que yo abran o que

instale esta aplicación como chrome aquí

ni sale con safari poco de mozilla

firefox o que cada navegador tiene sus

propios estándares y cada navegador

interpreta o no ejecuta de forma

distinta en este manifiesto bebés es

algo triste pero es la realidad cada uno

hace lo que quiere entonces hay

navegadores que a lo mejor no tienen

stand alone ellos dicen hoy estando con

que se son uno los ebro entonces por

defecto si te pones full screen it y el

navegador no lo tiene se va a pasar

hasta el domund y si no tienes tanto

vamos a pasar al mínimo igual no tiene

mínima vida y se va a pasar habrá 20 que

hay es una cadenita de valores a full

back ok se me fue la palabra en español

pero es como de repuesto en caso de

tecnología tienen que tener esto en

mente para uno de los campos que sigue

más adelante por cuando de mientras

display es estando long y de hecho esta

propiedad fin puede acceder a ella desde

los media cordis de modo que si su

aplicación es tan fan screen le metan

ciertos estilos y si es tan sana lo

alimentan otros estilos y si están en

bauser metan otros estilos para que

ustedes tengan control absoluto de cómo

se va a ver su sitio a cómo saber su

aplicación que esto va para display lo

siguiente display alright aquí está

imaginamos que ponemos stand alone pero

vamos si la no tiene stand alone y no

queremos que se vaya la mínima que

queremos que se vaya full screen bueno

pues para esto nos sirve display

overdrive o que esté display drive aquí

lo que vamos a hacer es vamos a usar una

red de cuáles son los modos de display

que queremos que el navegador considere

antes de llegar a display entonces aquí

tenemos stand alone queremos que antes

que primero revise stand alone y si no

tiene stand alone no queremos que se

vaya a minimal queremos que se vaya

full screen por ejemplo equipos deja

estándar un también por si las moscas

siguiente ayer ayer sin rating de esta

casaca que es que si esto está acá el

high art

arts

es una clase coalición internacional de

que determinan las edades que son aptas

para una aplicación un sitio web si es

un sitio para adultos

la edad será 18 + por ejemplo sea

violencia el amor será dos demás en fin

si usted vienen acá y consiguen una

calificación para su app ellos van a dar

un código van a dar algo como

como como esto entonces le ponen aquí en

su app en su manifiesto y ya está

nosotros no lo tenemos nos lo vamos a

saltar y vamos a lo bueno y con los

iconos iconos y con los papás aquí en

itunes

y vamos a poner vamos a poner un array

de objetos ok aquí no nos vamos a dar a

poner los iconos que queramos que se

muestre para nuestra aplicación cuando

se instala para distintos tamaños y

contextos por ejemplo si yo tuviera esta

imagen

y bueno aquí tenemos el objeto del icono

tenemos una propiedad de search de dónde

está saliendo la imagen

saiz es para qué tamaño queremos que

utilice esta imagen y tipo qué tipo de

archivo es este ok entonces lo que

tienen que hacer todo esto fíjense el

manifest está en la carpeta de pública

lo que tienen que hacer es colocar aquí

sus iconos de hecho por defecto creíble

agravia nuestra y estos dos iconos de

192 y 512 entonces lo que tendría que

hacer es colocar aquí sus iconos y en

estar los acá entonces yo poder ser como

logo 192 punto png quiero que se utilice

cuando se requiere un icono de 192 y ya

está ok y ahora tomo esto vamos a

duplicar lo íbamos a pasar el de

512 le digo que tome este archivo que se

llama 512 punto png le indicó que lo

utilice cuando requiera y con los de 512

y es de tipo imagen pen y usualmente

usualmente con 502 y 192 tienen

cubiertos un buen espectro de

dispositivos y contextos y escenarios

pero pero pero pueden ustedes ser mucho

más específicos pueden poner tantos y

buenos como deseen y de hecho yo lo que

va hacer ahorita es agregar unos cuantos

iconos con el logo de la suite o y los

voy a añadir acá en este manifiesto para

que vean cómo queda y lo van a ver

ahorita con la magia de la edición no he

vuelto

aquí están los iconos como pueden ver

tengo bienvenida

29 48 50 y tengo muchísimos y aquí es

como se agregan logo 20 este tipo imagen

y utiliza este archivo para con textos

de 20 x 20 y lo mismo para todos estos

acá no es necesario tener tantos mira

aquí puse mil unidades puesto 100

entonces no se preocupen no hay

cantantes pero sí son todos bienvenidos

ok desprenderán ahí project tengo tiempo

para estar si no todo esto muy sencillo

aquí en el artículo les dejo visitar el

artículo os dejo esta herramienta en la

cual ustedes la visitan y aquí agregan

su imagen de 1024 x 1024 y esta página

de tener a todos estos iconos ok

entonces no tienen que ser realmente

mucho pero bueno ya está el tema de los

iconos vamos a tener aquí su comida y

vamos a pasar a la siguiente propiedad

las cuales hay de ok el haití es una

forma de identificar a la doble plate la

web la médula y aquí en haití usualmente

lo que se hace es pasar alguna a alguna

url ok entonces podemos poner aquí algo

como versión 1 y esto se va a agregar a

la url de su aplicación

entonces ella no lo sé de las fit o de

una de 1 y entonces de esta manera el

navegador sabrá qué versiones están en

este manifiesto tenemos de manifiesto la

b1 tiene esta descripción pero luego

cambió la descripción bueno puedo darle

otra idea y decir que es v2 ok pero para

la primera versión podemos saltar donde

es necesario pero conozcan lo siguiente

es la pnc y aquí vamos a indicar la cndh

del lenguaje junto con dirección va a

indicar cómo deben leerse estas cosas de

izquierda a derecha a derecha a

izquierda que vamos a ponerle expresión

al buen guión mx porque somos mexicanos

chicos mexicanos for life lo siguiente

lo siguiente lo siguiente lo siguiente

en name y aquí vamos a llamar esta

estaban llamarla p w las fito

test qué sé yo hoy estoy aprendiendo en

fin sé que es obligatorio si no me

equivoco los únicos son obligatorios es

name y hay que si no me equivoco lo

siguiente orientación y no es

orientación sexual orientation sino que

es como queremos que se vea la

aplicación si queremos que esté de pie

en vertical horizontal a distintos

valores tenemos n para cualquier

orientación si queremos que tenga modo

landscape si queremos que el landscape

ser primario aquí está antes que el

primario pero que también admita otro

que demostró esta combinación yo os digo

no se compliquen pueden poner en y si

quieren que pérez admita cualquiera o

pueden tener yo voy a poner por trip

pero aquí están todos los para los

chicos inician el artículo lo siguiente

preferred applications es decir prefiere

aplicaciones relacionadas no

relacionadas similares una imagen no

sería o el verdadero evaluar y aquí aquí

es cómo funciona esta p doble imagínense

que ésta es una pena blé goudé one y

marc ok y alomejor walmart sacó esta p

doble ua para ciertos escenarios si tu

dispositivo tiene un poco espacio

utiliza la problema no se contrae

utiliza la aplicación nativa por ejemplo

entonces en este caso aquí igual mar

puede indicar que es que ellos desean

que esta piedra lugar sea la segunda

opción acción de alternativa y para ello

pondría el título y después indicarían

que aplicaciones quieren que se prefiera

imaginemos aquí pone mostró me voy a

saltar este protocolo lo bueno y para

que siga tipos y que true lo que sigue

es indicar cuáles son estas aplicaciones

te recomiendo por encima de la película

y bojan si yo ni con la plataforma si

están play estoril si están itunes si

está en cualquier otro lado indicó el

haití de la aplicación y después indicó

am indicó

la url para llegar a ella aquí viene

para formar en haití platform y bar por

ejemplo ok y esto solamente en caso aquí

lo pone troupe pero en mi escenario yo

voy a poner post por lo tanto esto de

aquí lo voy a quitar

regresando a ésta que me salte esta

propiedad de pronto handlers aquí en

provocó

porque en leyes

aquí lo que vamos a hacer es pasar un

rey de protocolos que queremos que esta

gestión y de qué estoy hablando qué

significa esto de aquí wey estoy

hablando funciona así

ustedes pueden asignar un protocolo o un

esquema super w de modo que cuando haya

algún enlace que comience con este

esquema o protocolo en lugar de que ese

enlace lo abra el navegador será su

aplicación quien habrá dicho nas esto es

como el famosísimo deep links si saben

de desarrollo móvil ok un ejemplo si

ustedes abren un enlace de facebook si

lo abren desde su celular lo más

probable es que en lugar de que lo abra

el navegador lo va a abrir la aplicación

o qué es lo mismo si abren twitter en

lugar de que lo abra el navegador lo

abre la aplicación lo mismo youtube esto

lo que vamos a hacer aquí ok en este

caso yo no lo voy a hacer pero sepan que

existe y que es así en la estructura

entonces esto lo eliminó continúan de de

maxwell de aire de scoop escupes cap

haitien scope o alcance vamos a indicar

qué páginas del sitio quiero que sean

afectadas no quiero que sean

involucradas o incluidas mejor dicho en

este manifest por ejemplo tengo tengo

aquí tengo aquí inicio tengo acerca y

tengo galería si yo lo dejo así todas

estas páginas van a ser incluidas en la

pelúa genial pero si yo pongo lo mejor

aquí acerca solamente las direcciones

las urls que comiencen con acerca van a

ser empleadas entonces con dio visita

cerca se va a ver mi pie doble pero si

yo he visto galería punto me saca de la

pelúa y me manda navegador no queremos

eso entonces que vamos a dejarlo así

como estaba

scott listo screenshots qué pasa con

screenshots

screenshots vamos a colocar una raíz

precisamente de capturas de pantalla

capturas de pantalla promocionales más

adelante cuando las peleas se pongan de

moda igual que ya haya ya de moda ya hay

tiendas de tenido lugar pero no más

adelante cuando haya muchísimas tiendas

de aplicaciones pues un lugar van a

utilizar en estas capturas de pantalla

para promocionar su aplicación entonces

qué ponen ya sabemos que las imágenes

imágenes decorativas que encuentran en

él apostó por un pleito etcétera aquí yo

no tengo decoración entonces lo voy a

eliminar en los siguientes yearning si

su nombre es muy largo y no cabe en

algunos contextos aquí pueden tener una

versión cortamos detenerle

la gestión turning y este es un nombre

completo los short cuts short cuts son

atajos short cuts

y aquí no están son la rey de kincher

cats vamos a pasar una raíz de atajos

que luce más o menos así es un array de

objetos de cada objeto es un atajo y los

atajos sirven para en lugar de que la

persona tenga que abrir su aplicación y

tenga que visitar por ejemplo aquí en

lugar que te abre la aplicación y tienen

que hacer quemado también de ser clic

acá no voy a hacer todo esto que

colocamos un atajo que diga por ejemplo

algo como el nombre va a ser y en la

sección de hacer que el ser name va a

ser acerca y la descripción vamos a

poner ahorra tiempo y vez para hacer acá

y ahora aquí en la url vamos a pasar la

url que queremos que se abra cuando la

persona utilice este atlas o que en

nuestro caso queremos que se visite

acerca por ejemplo

y entonces lo que va a pasar es que la

gente puede utilizar este atajo para que

abra la aplicación directamente aquí ok

es así como funciona esta parte yo lo

voy a omitir pero sepan que es así como

funciona que los siguientes start y work

y aquí vamos indicar es muy similar a

los atajos de concepto porque hemos

indicar que una l queremos que se

muestre al abrir la aplicación en

nuestro caso queremos que se abra la

página la url de inicio de gross a pasar

un truco un consejito que pueden poner

la dirección completa por ejemplo en mi

caso imaginemos no imaginemos la

dirección va a ser suya

pero evalúa tutor

punto

punto podemos pasar este está la página

de inicio estamos de acuerdo

bueno pues además además sale aquí

algunos parámetros que diga algo así

como módulo igual ap doble y entonces lo

que va a pasar es cuando la gente abra

su sitio web a través de la aplicación

de la pelea se va a registrar este para

mí este argumento y ustedes desde sus

analíticas sea google sea close sea lo

que sea van a poder llevar un conteo un

registro de cómo es que esté yendo a la

gente a su sitio web ok este es un truco

cortesía de su amigo las fit

yo no tengo esto implementado si quiero

voy a dejarlo de vuelta en externas lo

siguiente fame color y con eso

terminamos el manifest

vamos a pasar y color queremos que tenga

la aplicación en ciertos contextos por

ejemplo en el escritorio que lo que

coloquemos que tenga la esta barra song

el nombre como se llama o en android

como están cambiando de aplicaciones que

queremos que tenga cuando se hiciera

todo eso

color orange ok y cuando terminamos el

segundo paso que es el manifest vale

sencillos y sencillo esto lo más tedioso

de si ya llegan a este punto creen ya

estamos por acabar confirme confía de mí

pronto se manifestó el tercer paso son

las fans brindis más planes

principalmente ambiente con abren alguna

aplicación sale una imagen que dice

cargando o sale luego de la empresa sale

el nombre de la app que sea es una

explosión es algo que se muestra cuando

hay carga de aplicaciones del sitio

ahora lo que pasó lo siguiente todos los

navegadores como chrome firefox opera

heche samson dos opciones por dijeron

saben que para splash screen vamos a

ocupar el background color vamos a

ocupar el name y vamos a ocupar algún

icono que consideremos pertinentes de

modo que son los navegadores quienes te

generan splash screen clientes que

absolutamente nada con extensión acuerdo

excepto excepto ese precepto nuestro

amigo y queridísimo safari ok con safari

no funciona así con safari tenemos que

nosotros brindar la imagen que queremos

que escribir como splash screen y

tenemos que brindar la para tintos

tamaños cómo funciona no lo agregamos

aquí en el manifest tenemos que niños en

la carpeta pública y en index.html

aquí es donde vamos a agregar todo el

asunto de las casas queens entonces aquí

por ejemplo si yo tuviera aquí una

imagen que se llama a la explosión 23

qué sé yo como la agregó con estas

etiquetas aquí les dejo un ejemplo de

varios tamaños entonces vamos a poner

esto aquí y ya jo este tipo link la

etiqueta aquí en nuevo en religión sí

vamos a ponerle up touch start up y me

star game and se refiere a splash screen

a quien en media en media vamos a

decirle en qué tamaños de dispositivo

queremos mostrar esta imagen aquí nos

dicen sabes que quiero que si el

dispositivo tiene 414 píxeles de ancho

896 de altura y además tiene este pick

sonreído de 3 entonces muestra esta

imagen que tengo aquí a polonia bla bla

bla punto pene no la tengo pero si la

tuviera así es como lo entonces éste lo

que tendrían que hacer en fin se esto es

para el iphone x s max pero esperando un

iphone x r también tienen que prever lo

que la difundida desde el iphone

matriculado 7.6 plans el iphone 8 todos

estos tamaños todas estas imágenes

ustedes tienen que incluir irlas ok

entonces esto un show si no quieren

complicar el también lo que pueden hacer

es quitar el media y lo dejan así y que

sea lo que dios quiera de la imagen no

se va a hervir no se va a ver en todos

los modelos pero también espalda yo no

tengo imágenes para sacar entonces lo

voy a eliminar lo siento para que nos

bajen mi aplicación contra bari pero es

así cómo lidiamos con las splash greens

ok tema un palomita completado ahora ya

que estamos aquí tenemos que hablar y

safaris el [ __ ] y por qué lo digo lo

digo porque safari no respetan las

convenciones no lo hace él le vale todo

entonces aquí tenemos nuestro hermoso

15 horas escribirlo aquí explicamos y

dejamos escrito como queremos que sea

nuestra aplicación es nuestro bebé

previenen que haga por estafar y le vale

tú manifest algunas cosas las toman unas

las respeta y otras no tanto entonces lo

que tenemos que hacer es

apegarnos a las reglas de safari

a lo mejor no lo sé pero lo que sí va a

ser bueno safari es leer

en tu

inglés leer tu index y leer tus

etiquetas aquí en head ok donde tenemos

que hacer unas cuantas modificaciones

para que nuestra aplicación sea bien en

safari con las pruebas modificaciones es

el icono entonces aquí tenemos que

nosotros pasar una etiqueta

para indicar qué iconos queremos que se

utilice en nuestra aplicación que de

hecho aquí aquí ya vienen una por

defecto

yale incluye x oye pues para apple

queremos que utilices esta imagen que se

llama logo 192 entonces pueden pueden

éste tomar esta que viene por defecto

ribera gap los guarda la espalda se nos

cuida pero también pueden ustedes

indicarle tamaños lo mismo que hicimos

en el manifest aquí vamos a hacerlo con

con etiquetas link las relaciones about

touch iphone y aquí entre pasamos seis

es para que tamaños queremos ocupar este

icono y haríamos lo mismo panel 192 500

2 86 etcétera mucho trabajo yo voy a

dejar únicamente estar acá y ya está

pero si ustedes quieren tomarse su

tiempo si una aplicación de producción

hagan lo pongan todos los tamaños y los

van agregando con esto entonces está la

primera modificación para los siguientes

planes screen y ya lo vimos cómo se hace

la modificación lo siguiente apta ero

so far y va a intentar respetar el tarot

que como queremos aquí el título

pero si quieren ustedes indicarles y

safaris toma este título como verdadero

temos que pasarle una etiqueta de tipo

meta

con nombre ap mobile web

jairo aquí vamos a indicar cómo queremos

que llamen la pedro bergua ante los ojos

de safari quien tenemos que hacer es

tenemos que agregar lo estén informados

los siguientes modo este andén

pero aquí tampoco me aparece tengo que

esto lo voy a corregir antes de que se

publique el vídeo palmones tengo para

indicarle que queremos que en nuestro

sitio web se vea como una aplicación

activa y no queremos que se vea como

como un navegador tenemos que ocupar una

etiqueta muy similar que es si no me

equivoco mera name es igual a appo

mobile

un web

gable quien contiende decimos que es y

es medir y es el ok y consideraba

respetar y va a ser que se vea bien y

por último en la barra de estado mira

aquí tampoco aparece para la barra de

estado hacemos lo mismito pero a quien

name meta sería me da

aquí está a poco va web apps status

schvarzstein y trayendo un hombre y hay

tres opciones default para que se vea de

la patada like para que sea elegante y

play

translucen

para que sea una mezcla

entre el donativo y navegador para que

se vea sea punto medio o que yo voy a

dejar estas modificaciones ya con su

terminamos todo lo de zafar anticipar y

nos hizo trabajar extra pero ya estamos

por acabar lo siguiente es la creación

del service work y esto ya no podemos

cerrar esta carpeta la podemos cerrar y

ahora el service walker es quien no

porque está todo es el la mente maestra

entonces lo queremos aquí en shorts voy

a crear un archivo que se llame service

worker muy importante que se llame así y

aquí vamos a orquestar todo este asunto

ok vamos a ir pegando los siguientes

fragmentos de código y funciona así lo

primero que hay que hacer es importar

todo lo que hemos instalado de word box

to box works volver es por box

y ojo muy importante este comentario

tiene que ir pegado esto es para que no

tengan un problema y al momento de

construir la aplicación entonces es cien

por ciento pónganse comentarios para

desactivar una regla del inter ok pero

desactivamos la regla e importamos esta

cosa y lo ejecutamos esta función que lo

que va a hacer es darle autoridad al

service work la edad control y si sabes

que haz lo que tengas que hacer amigos

eso es es un resumen muy muy muy chafa

muy sencillo pero si si no sabemos yo

service workers quédense con esta idea

aquí le damos la autoridad luego lo

siguiente es decirle al worker en curso

que comience a guardar memoria caché los

recursos a nuestro péndulo ok y ojo que

aquí hay dos maneras de actuar pueden

utilizar esta función de guardar cosas

en caché para lo cual utilizarían o

llamarían esta función con esto como

argumento eso lo primero y lo segundo si

no quieren que se guarden cosas sin

caché lo que tienen que hacer es esto

bueno este si esto lo borrarían lo

borrarían si lo tienen que hacer es esto

siempre tiene que aparecer en su archivo

entonces si no quieren tienes al caché

no ponen aquí y lo asignan a una

variable que no utilicen y ya con eso

están cubiertos pero yo yo si quiero

guardar cosas en caché entonces lo que

haréis es tenerlo mante comentado y esto

que esté en activo pero más tiempo

conseguir este link que lo siguiente

hay distintas arquitecturas para

aplicaciones pero del lugar así como

distintas arquitecturas para sitios web

hay servers ireland rendering hay klein

hay hay sitios estáticos hay incrementa

citostáticos incrementales etcétera

bueno pues en cuanto puedo blogs una de

las arquitecturas más comunes y más

usadas es la arquitectura de apps el ok

entonces aquí aquí vamos a tomar todo

esto y vamos a decirle al worker que

utilice esa arquitectura de apps ya lo

que hace es que

carga el mínimo código necesario para

que la se vea y funcione y conforme vaya

requiriendo más funciones va jalando más

código y todos en ruta desde el index o

que nos vamos aquí para hablar desde

service word que estamos aquí para

hablar de peleas entonces van a tener

que confiar en esto aquí aunque y por

último los últimos ajustes son estos de

acá en los cuales primero vamos a

defendernos un poquito contra recursos

que no que no puedan ser echados queda

un problema por ejemplo con con imágenes

aquí para tener mayor control y lo

segundo vamos a dejar el camino abierto

para un truco que veremos más adelante

que éste no se preocupen esto es

completamente seguro vengan local cuando

buscan lo que ya llegamos al sexto paso

antes siete pasos ya casi acabamos

chicos en este sexto paso lo que hay que

hacer es registrar al worker entonces ya

que lo declaramos aquí con todo esto

guardamos cerramos y vamos a crear otro

archivo que se va a llamar service

walker registración esto en javascript

entonces hemos service world querey

[Música]

gration y el service walker restricción

y aquí vamos a simple y sencillamente

vamos a copiar y pegar todo

todo esto

alimentarlo ok y ahora aquí hay dos

cosas lo ideal sería que su problema

funcione sin internet en modo offline y

para que mucho en modo offline tenemos

que tomar una actitud

[Música]

fuerte

enganche o ok si quieren super doble

base a offline y sea instalable vamos a

tener que registrar al word caso

contrario tienen la opción de

no registrar ok ustedes dirán oye pero

pues qué tontería claramente me conviene

registrarlos a por qué no lo

registrarían se estarán preguntando qué

dije qué pasa bueno les diré por qué no

lo registrarían y es que sucede con

ustedes registran a walker de morir toma

control de la aplicación toma control de

la red si tú quieres ver algo en

internet en tu aplicación en cualquier

decide si te muestran algo fresco

demuestra algo de caché y esto es un

problema porque imaginemos que ya está

aquí mi aplicación la la la la la y yo

soy un usuario que está aquí navegando

feliz de la vida y luego el equipo de

desarrollo lanza una nueva versión que

incluye aquí una cuarta sección una

cuarta sección de ccoo

bueno pues yo como usuario no voy a ver

esa sección por más que haga que la

página bueno que hice loops él no la va

a ver pruebas que recargue lo que

tendría que hacer el usuario es cerrar

la pestaña serrato a las personas que

han abierto este sitio web y volverla a

abrir y sólo entonces van a ver

contenido fresco y esto es un problema

para algunos escenarios entonces quedan

ustedes como optan pero bueno quedan

ustedes chicos pero ojo que hay una

alternativa hay un punto medio y vamos a

ver ese sweet sweet punto medio ok

entonces aquí ya tenemos todo listo para

registrar copiamos y pegamos no hay más

lo que vamos a hacer ahora hicieron su

index y aquí en index que es el punto de

entrada a nuestra aplicación lo que

haremos es importar este archivo de

registro que acabamos de crear venimos

para acá pegamos e importamos todo como

un servicio worker es traición y aquí

tenemos de dos como les dije podemos

registrarlo como podemos o podemos

registrar desde cero nada pero es que

siguió registrarlo pero no quiero que

tengamos este problema del contenido

fresco no se preocupen los escritores

tienen cubiertos tenemos una vía tercera

una tercera vía un punto medio aquí lo

que vamos a hacer es registrar el

workers sí pero con pequeños ajustes en

su séquito esto lo que hacemos lo

registramos sí pero cuando hay alguna

actualización lo que haremos es

de registrar al worker y luego vamos a

actualizar la página para forzar el

actualizado para que sea contenido

fresco y lo vamos a registrarlo una vez

más entonces lo quitó actualizo y lo

vuelvo a tener ok esto es como una

manera un tanto ahora pero que funciona

pueden hacerlo así pueden simple y

sencillamente ser no así o pueden no

registrarlo en primer lugar yo lo voy a

hacer así con su truquillo ok y ahora ya

que hice y este registro

el séptimo caso es como le doy a el

usuario la opción de descargar la

aplicación como lo hago como lo hago

para descargar aplicación es muy

sencillo explicar cómo funciona ustedes

abren el sitio web el navegador detecta

que el sitio web tiene manifiesto y que

tiene un worker asignado y por lo tanto

es una doble igual que se puede

descargar entonces navegador

hace todo lo que tiene que hacer y

cuando la aplicación ya se puede

descargar y el navegador con controlador

termina hacer la chamba el navegador

dispara un evento nosotros lo que

haremos en nuestra aplicación es

escuchar ese evento eso nos va a dar la

luz verde y entonces vamos a permitir al

usuario descargar la aplicación haciendo

clic en este botón el de descarga

entonces muy sencillo voy a venir aquí a

quien tengo mis rutas y llenar tengo un

componente que se llama el layout vamos

a revisarlo

ok en layout tenemos este botón que dice

descarga y aquí bueno que nos está

ocurriendo no salen bien

para que se vea

sale unos segunditos

lo que hay aquí está descargada

entonces el primer paso es escuchar el

evento ok

venimos aquí de vuelta al tutorial

primer paso escuchar el evento de

instalación el evento se llama before

instó técnica ya se puede descargar el

navegador hecho su chamba entonces aquí

en él en este layout voy a importar ese

efecto y lo queréis utilizar este efecto

para agregar un evento listener a la

ventana y además va a tener un estado

donde revise si el navegador ya ya

terminó su chamba y si ya podemos

descargar que yo tengo en haití for

kingston entonces vamos a copiar digamos

esto venimos por acá y pegamos nos

tenemos este estado y sur y forestal de

que news effect en el primer rey deben

cuando carga aquí tenemos esto esta

dependencia la red los corchetes ácidos

en este primer render agregó le dan

listener cuando lo escuche

ya está en default

lo que va a hacer es prevenir que quizá

que una notificación que diga descargar

la aplicación si quieren que se muestre

pues esto siempre y sencillamente lo

comentamos yo no quiero que se muestre

lo voy a imprimir en pantalla esto de

que ya ya está listo y luego con muy

importante cuando yo escucho el evento

cuando reciba el evento el evento lo voy

a guardar en alguna variable

aquí lo que estoy haciendo es guardarlo

como una propiedad de windows porque

windows y son objeto global puedo

acceder a él desde cualquier parte esto

es por conveniencia ustedes pueden

guardar el evento en alguna variable en

algún estado que siga dependiendo de del

scop del alcance de sus variables y todo

suyo yo me complico lo guardo en ventana

en windows y además sesión y al ejemplo

en la página de google todas aquí es

donde lo guardo y luego pongo este

estado como otro ya está listo para ser

instalado entonces lo que puedo hacer es

este botón

condicionarlo y decir y spirit for en

esto sí sí entonces quiero que me

muestres

este botón mientras no quiero que me lo

muestres aquí está aquí no me está

mostrando nada ok ahora ya que ya que

guarda este evento ya aquí ya lo puede

instalar aquí sí que puedes crear una

función de descarga deben ser function

no tiene que ser a 5

information download

aquí qué vamos a hacer pues bueno no sé

por qué lo escribo cuando lo tengo acá

para que sigue sin instalar esta función

vamos a

vamos a tomar el evento que habíamos

guardado en la ventana y tenemos aquí lo

asignamos a una constante esto no además

por temas de legibilidad ya que bien

podría hacerlo aquí directo programa

signo acá

revisó que si hay algo guardado si no

hay nada guardado pues digo hay algún

problema y me salgo ahora ya que que me

garantice que si tengo algo guardado voy

a llamar a la propiedad de pronto bueno

al método de pronto dentro de este

evento esto lo que va a ser prompt es

expedir es mostrar en pantalla pues aquí

va a mostrar un cuadrito criollo quieres

instalar la aplicación sí o no escuchó

la decisión del usuario y ojo esta

propiedad sólo se puede llamar una vez

por sesión para no estar molestando sólo

se descarga miami se descargan ya que

descargan ya sólo se puede utilizar una

vez entonces después de haberlo

utilizado bien sea que el usuario haya

dicho que sí o que no lo que voy a hacer

es eliminar lo que tenía que guardar en

la ventana y éste lo regresó al box por

qué pues porque si entonces esto lo

copió

y aquí vamos a pegar

espera que pasó

download no se copió

copiar

esto lo borro y pegamos ok bueno esto lo

regreso fotos para que el botón ya no se

muestre actuando aquí esto está un

poquito mal porque lo mejor la persona

puede decir que no pero en todo caso ya

no puedo ver la descarga entonces si es

mejor ponerlo en fotos para que no se

muestra el botón una vez que haya

consumido esto porque sólo se muestra

una vez chicos ok ahora ya que tengo

esta función de download up lo que sigue

es asignarle a este botoncito con si le

queda un clic en un clic vamos a llamar

town load

y listón que lo tienen es así de fácil

como con buscar un botón personalizado

para bajar la aplicación entonces que yo

voy a recargar y notarán que nunca pasa

nada yo reviso aquí en mi

consola

no hay nada no se está recuerden que

teníamos estudios effects que cuando

escuché al evento me imprime esto en

pantalla bueno pues no hay nada y

efectivamente no va a hacer nada porque

ahora mismo estamos en modo de

desarrollo para que este evento se

dispare tenemos que conseguir 2 am tras

cumplir los requisitos el primero estar

en un ambiente de producción es lo

primero pero si no tenemos que tener una

conexión https

ahora mismo yo tengo https tengo http

normal aquí me lo hizo y esto es una

basura de conexión entonces no cumple

ninguno de los requisitos

vamos a pasarnos a modo pro y para ello

aquí voy a darle control más en mi

terminal y vamos a crear la versión vip

para lo cual vamos a ya no podemos ya

podemos errar vamos aquí a correr en pie

round beauty para que nos indique todos

los fondos y todo el código ya de

producción final

le damos unos segunditos

y una vez que tenemos la producción de

vino tenemos que mostrarla como si fuera

algo de pronto hay muchas maneras les

recomiendo que instalen en pie de forma

global instalen esto que se llama ser

nuestro tenga lista la vamos a correr

ser de forma estática la carpeta de

build ok y vamos a correrlo aquí está mi

soy está corriendo está haciendo servido

desde el 3000 vamos a abrirlo y aquí

fíjense que tampoco pasa nada si yo

reviso la consola me dice oye sí sí

estoy viendo tu service worker si veo

que está en modo caché veo que está en

modo offline pero no veo luz un tour que

no ve botón por el segundo requisito

chicos no sólo necesitamos que esté en

modo de prototipos que ejemplo porque ya

me está viendo el service worker sino

que además estamos que esté en modo

https en algunos casos y dependiendo el

navegador les va a dar chance en local

house en https mensualmente no lo hace

entonces para poner esta prueba tenemos

que enviar nuestro código

producción lo que voy a hacer es

enviarlo a live aid porque es gratuito

en el ifai nos otorgan por de manera

predeterminada siempre una conexión

https

ok dónde y por último se está olvidando

ustedes aquí en las herramientas de

desarrollo pueden visitar aplicación y

en la aplicación pueden encontrar todo

lo referente al service worker que me

soy pues tú service worker está en verde

está activado aquí está papá muy bonito

debemos revisar el manifest qué

información tiene el nombre ser name la

descripción el light y que le dio

fíjense este es el aid y le dio la vida

de mewar l la loca bajos donde está

corriendo un tanto mar aquí soy yo pues

es que no especifica este y como no

específicas te tome la url el home

tenemos aquí el color el icono en todas

estas chicas hasta ya son muchísimos

igual este muchacho muy guapos de está

la cita ya que lo pueden revisar que

para que lo tengan en cuenta y también

lo que pueden hacer que vamos haciendo

más adelante es poner a prueba su

celular pero bueno basta de cháchara

vamos a enviarlo a net live hay amigos

muy muy bonito muy sencillo tengamos

para acá esto lo voy a detener pero

vamos a crear un comité y vamos a ver

cómo estamos tenemos todo esto vamos a

agregar todo vamos a hacer el commit

vamos a llamarlo comité final

y ahora tenemos que crear un repositorio

en línea al cual mandarlo para

publicarlo con el ifai vamos a crear

estas son las herramientas de hip-hop

vamos a crear un repositorio

que llamaremos

que llamaremos

guau qué difícil vamos a llamarlo

w

bolivariana les vamos a llamar sin

descripción va a ser privado para que no

estén durmiendo lo voy a agregar a este

repositorio y vamos a enviar los cambios

hay un vengo para acá jetstar es todo en

orden muy bien ya podemos enviar todo

esto del ifai tengamos para que

visitemos nuestro buen amigo en el ifai

si no lo conocen se lo recomiendo es

buenísimo yo lo amo vamos a iniciar

sesión y vamos a crear un nuevo sitio

desde edad o que haya que iniciamos

sesión y lo habíamos llamado pro w

cierto

y promperú a está aquí muy bien

aquí hay dedos algunas veces en el ifai

que toma este este comando como el

correcto y algunas veces te pide que le

agregues sea igual a esto vamos a vamos

a ponerle el 6 y si no se lo eliminamos

si queremos que se vaya bild le damos en

triple

aquí nos dice que está comenzando vamos

a ver los blogs que me dice que está

instalando van sale unos cuantos

segundos

y aquí está nuestro sitio está en vivo

amigos listo me tomaba unos cuantos

segunditos venimos para acá y aquí está

la dirección de nuestro sitio web

entonces vamos a visitarlo

y ahora

vamos a ver los logs

y ahora aquí está listo trino se

escuchaba el navegador ya había

espantado el de no voy a mentir ya ni

espantado dije guau es funky con este

tutorial pero no aquí esta tarde como

pueden ver tarda en lo mejor no tiene

que hacer muchísimo trabajo el worker

tiene que work a lot y aquí está

entonces lo que yo puedo hacer es puedo

descargar desde este botón o desde aquí

sigo click en el botón me sale esta

ventana lo instalo y aquí está fíjense

aquí está mi aplicación qué bonito qué

y lo mejor es que esta aplicación como

como bien nos dice aquí webs aquí en

consola donde no me lo dice pero esta

aplicación funciona offline ok y si no

tengo tan en en application aquí está el

manifest aquí me dice que la idea es

estar acá nuestro toma de la dirección

raíz la url tiene todo este tema y como

les decía ya por último vamos a poner la

prueba vamos a ver qué tan buena es esta

aplicación de que tan que tanto que

también lo configuramos y para eso vamos

a venir nos saca a lighthouse lighthouse

de google puede poner a prueba nuestra

nuestra p w john silver sabes que quiero

que la pongas a prueba

seleccionamos pedrosa le damos en el

reporte para calentar un poquito todo

aquí hubiera puesto de stop bueno da

igual le damos unos segundos está

haciendo todas las pruebas en este caso

y nos dice que

que si se puede instalar que tenemos

esto correcto esto correcto esto

correcto y aquí tenemos un problema y

soy tú manifestó tiene ninguna y con que

sea de tipo más campo

y es que aquí me faltó ok qué bueno que

hicimos este examen le faltó a decirles

que aquí en itunes vengamos de vuelta

para que vengamos de vuelta en manifest

vengamos de vuelta y comes me faltó

decir es que quién itunes podemos

pasarle una propiedad que se llame por

tres o propósito y aquí hay varios

valores puede ser n puede ser más capo y

puede ser mono lo recomendable es que

todos les pongan propósito en ok para

que el navegador puede hacer con ellos

lo que requieran o pueden ponerle más

que para que sean transparentes programa

que aquí me faltó si hubiera añadido

estuviéramos pasado todas las pruebas de

lighthouse bueno ahí lo tienen chicos lo

hicimos en nuestro sitio web es una

atadura que puede ser instalada en modo

offline está preciosa pero se necesitaba

olvidándose me estaba olvidando no les

dije o no les mostré qué hacer si están

si no están concluye y apps están con

gas beige están con next están con beat

y bueno de hecho esto viene aquí en el

artículo

es exactamente lo mismo son los mismos

elementos el manifest el am service

worker y los ajustes de safari ok pero

la diferencia está en que estos

frameworks y esta herramienta de fit no

exponen en la carpeta pública no exponen

este un punto de entrada para el service

el service worker entonces lo que hay

que hacer con ellos es utilizar plugins

oficiales que usted proveen por ejemplo

cats piter probe catsuit plugin manifest

para él manifestó el web manifestó

obviamente y te ofrece el gatsby point

of line para registrar el service worker

next et y tiene un plugin que se llama

next table bay y fit tiene también un

plugin se llama be the walking dead

audio y entonces con ellos hay que usar

plugins pero es exactamente el mismo

concepto de hecho éste yo tengo más

experiencia con gas y en el plugin de

gatsby en el manifest lo mismo que

pusieron aquí juana quien éste manifestó

jason lo copian y lo ponen ahí en el

apartado del catsi confía en él blogging

de

manifest entonces es son los mismos

conceptos es la misma lo que vimos hoy

sirva caso lo que se aplica a diferente

a través de sus plugins pero bueno ahora

sí habiendo dicho esto así ya voy a

retirar que nos vemos en el próximo que

sea chicos hasta luego
