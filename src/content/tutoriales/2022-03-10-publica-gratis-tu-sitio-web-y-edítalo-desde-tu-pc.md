---
type: tutoriales
url: publica-gratis-sitio-web-edita-desde-PC
enlaceyt: https://youtube.com/embed/dW7BDrJbzz0
date: 2022-03-10T23:41:16.194Z
title: Publica gratis tu sitio web y edítalo desde tu PC
metaDescription: "Aprende cómo publicar tu proyecto en internet (producción) y
  editarlo desde tu computadora (local) con GitHub y Netlify #tutorial #webdev
  #github #netlify "
tag:
  - Desarrollo 101
  - Misceláneo
autor: Adrián Salgado
publicoObjetivo: ¡Cualquiera puede seguir este tutorial!
keyword: publicar sitio web gratis
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/15-codigo-prod%2F15-codigo-prod.png?alt=media&token=aae02a4a-66fd-4d2c-b9ea-4f02df43f7c4
---

## Transcripción

hola chicos que tal bienvenidos

imaginamos el siguiente escenario en el

cual ya terminaron de construir algún

sitio web con html y css o bien ya

terminaron de construir alguna

aplicación con ryan y la pregunta es

como publicamos esta página web o esta

aplicación en línea de modo que las

demás personas puedan acceder al sitio

web ya la aplicación es lo primero y lo

segundo es cómo hacemos que los cambios

que hagamos aquí en nuestra computadora

se reflejen en la versión en línea de

modo que la versión en línea esté

siempre actualizada bueno pues eso lo

que aprenderemos en este vídeo y se les

interesa acompáñenme

muy bien el primer paso es naturalmente

tener algún proyecto bien sea algún

sitio web html alguna aplicación con

riad con view con angular etcétera lo

que importa es que ya esté listo y

desean publicarlo en internet es el

primer paso el segundo paso es que

tengan instalado git sino como sing it 7

es un programa que nos permite bueno

software mejor dicho que nos permite

llevar seguimiento y administrar las

versiones que vayamos generando de

nuestra aplicación o de nuestro sitio

pero mejor la primera versión el color

es rojo y lo cambiamos de opinión y lo

pasamos a azul bueno azul sería la

segunda versión para instalar git es muy

sencillo desde algún buscador buscan git

y hay una sección dice descargas se

puede instalar en cualquier sistema

operativo sea windows mac o linux y una

vez que lo hayan instalado le dan

siguiente a todo no se preocupen

siguiente sí en siguiente finalizar y

una vez que lo hayan instalado hay que

cerciorarnos de que esté correctamente

instalado y para ello desde nuestra

terminal vamos a correr

dos guiones versión si les da cualquier

número significa que está todo en orden

si es la primera vez que instalan git

algo que seguramente tendrán que hacer

es configurar su identidad no se

preocupen es muy sencillo basta con

escribir git config guión global y

username y entre comillas ponen su

nombre y les muestro cómo funciona voy a

copiar esto que está aquí de vuelta en

la terminal lo voy a pegar y luego entre

comillas voy a decir que yo quiero que

me llamen las fit listo ahora cómo puedo

cerciorarme de que esto se guardó muy

fácil corremos git config john l y me

dice que mi nombre es la escrito y que

mi correo es o la arroba la suite bueno

entonces lo que tendrían que hacer es

configurar que correo quieren quedar

registrado y ya está muy bien primer

paso de instalación de que completado

ahora el segundo paso que más da

cerramos la terminal y de vuelta a

nuestro código ahora que tenemos

instalado que ya podemos comenzar a

utilizarlo para ello voy a comenzar aquí

con la con el sitio web en html voy a

ser más grande y lo que tenemos que

hacer los siguientes están envíes code

abrimos la terminal integrada y tenemos

que comenzar git dentro de este proyecto

para ello corremos git y nik ya está

aquí en el texto nos va a decir cuál es

el nombre de la rama que se creó y

fíjense que actualmente nos crea una

rama llamada master no hay mucha

importancia sólo tiene que recordar en

qué rama están ahora este no es un

tutorial de link así que será

relativamente rápido con estos comandos

ya que iniciamos git el siguiente paso

es indicarle a git que queremos crear

nuestra primera versión y para crear una

versión necesitamos indicar qué archivos

y carpetas queremos al interior de esta

versión en este caso queremos que esté

todo en la primera versión para ello voy

a correr git adss seguido de un punto y

ejecutamos lo siguiente ya que agregamos

todos los archivos es crear nuestra

primera versión que 'no más que versión

deberíamos llamarlo con meet para ello

vamos escribir git comité guión m

nuestro referente al mensaje y entre

comillas vamos a dejar alguna

descripción un nombre para esta para

esta versión yo lo llamaré commit

inicial guión primera

cerramos comillas y presionamos centrar

ahora fíjense que nos muestra todo este

texto y si queremos ubicar que esté todo

en orden escribimos git staruss y nos va

a decir que estamos en la rama master en

esto es normal y que no hay nada por

añadir estamos perfectos muy bien ahora

haré lo mismo para la aplicación de

break

muy bien ya tenemos guardada la primera

versión de nuestro sitio web y

aplicación ahora ojo esta versión este

tema de git se va a guardar al interior

de la carpeta de cada proyecto es decir

se guarda aquí en nuestra computadora de

forma local lo que tenemos que hacer es

enviar nuestro código con la información

de la versión en curso al internet para

que después podamos publicarlo y la

gente lo pueda visitar para ello

utilizaremos vídeo que seguramente lo

habrán escuchado en más de alguna vez

visitamos git hub puntocom si no tiene

en cuenta registren 6 gratis no se

requiere mucho y una vez que estemos

aquí en este dossier en este panel de

bienvenida notarán que en la barra

superior hay un símbolo de más si

hacemos clic ahí nos da distintas

opciones a nosotros nos interesa crear

un repositorio en línea de modo que

nuestro código que está la computadora

lo mandamos aquí al internet comenzaré

por crear un repositorio para el sitio

web lo llamaré repo sitio html muy

importante asegúrense de que esté

público y le damos clic en crear

aquí nos da las instrucciones de cómo

enviar nuestro código y la información

de git a este repositorio línea dado que

nosotros ya inicializa moss ya tenemos

nuestra primera versión nos iremos

directamente a estas instrucciones aquí

nos dan los comandos a seguir el primer

comando sirve para indicarle a nuestra

versión local de indicarle que nuestro

código va a estar alojado también en

internet de modo que lo podamos estar

checando y revisando que no haya

diferencias entre lo que está en la

computadora local y lo que está en

internet remoto ok para ello voy a

copiar este comando me voy a venir aquí

a scout vamos a comenzar con el sitio

web en html voy a limpiar la terminal y

lo siguiente es pegar el comando que

acabamos de copiar

presionamos enter y ya está ya le

indicamos que este código va a tener una

copia en internet y va a estar en este

enlace lo siguiente éste nos lo podemos

saltar fíjense que aquí

bueno nos lo podemos saltar si la rama

de nuestra versión local es la misma la

misma que la rama que nos da aquí en

línea es probable que ustedes les de la

rama main principal entonces si aquí

tienen main y aquí tienen master que

puede haber un lío por ahí de que se

confundan entonces si éste es distinto

al que tienen acá lo que tienen que

hacer es copiarlo y pegarlo y ejecutar

yo no lo haré porque en mi caso son

igual una vez que estén iguales lo

siguiente es copiar el último comando

y pegarlo y darle enter lo que estamos

haciendo es lo siguiente estamos

indicando aquí que la versión la última

versión que hayamos creado la envíe a

esta versión en link lo pueden ver aquí

envía o empuja bueno a la versión en

línea presionamos entero

esperamos a que cargue

y una vez que haya terminado

podemos revisar que si cargo todo y que

ya todo está aquí actualizando la página

y ahora yo actualizo y fíjense que en

este repositorio que hice en línea está

exactamente el mismo código que tengo

aquí en local en mi computadora

bueno ahora lo que haré es exactamente

lo mismo pero para la versión de riad

vale ya cargue también el código de riad

y ya con eso hemos cumplido este paso de

transferir nuestro código local a un

repositorio en línea el siguiente paso

es como publicamos entonces nuestro

sitio web en nuestra aplicación demo que

estén disponibles al público en general

a través de internet para ello tenemos

dos opciones primera opción es utilizar

el mismo cuidado ok y dejar nos da esta

facilidad de que el código que tengamos

aquí en línea sea accesible a través de

internet al público para ello comenzaré

con el sitio web en html en cualquier

momento sin revisar todos los

repositorios que tienen pueden ser clic

aquí arriba en su perfil y luego visitar

sus repositorios

voy a ingresar a este depósito html y

bueno como logramos que esto esté en

línea para visitantes muy sencillo desde

su repositorio aquí en ajustes haremos

clic y del lado izquierdo hay una

sección que dice pages o páginas

después de ver hecho clic ahí

aquí nos indica que este que tenemos que

seleccionar qué rama queremos que

muestra el público por eso es muy

importante que tengan pendiente o que

tengan ojos y hiciera me hiciera master

o cualquier otra bueno quiero decir

sabes que quiero que este código de mi

sitio web muestres al público la rama de

máster y una vez que haya seleccionado a

la rama le doy guardar y aquí me indica

que mi sitio está listo para ser

publicado en este enlace de acá

si no nos gusta el enlace que nos ha

dado hip hop lo que podemos hacer es

escoger algún demonio demonio dominio

personalizado que ustedes hayan comprado

y aquí lo tecleamos a lo mejor yo compré

de www.google.com de ser así le doy

guardar y luego ya sigo las

instrucciones pero de mientras se va va

a ser publicado aquí haremos lo mismo

para la aplicación de break

vale ahora que he hecho lo mismo con

ryan vamos a echar un vistazo al enlace

del sitio web

aquí está este es el código que yo mandé

a good job y esta es la versión web la

versión que está abierta al público

cualquiera lo puede visitar y funciona y

todo en orden todo muy bien esto es sin

apoyos para un sitio web con html lo voy

a cerrar y lo que haría ahora es

ingresar al enlace de la aplicación del

rímac

y fíjense que aquí no está precisamente

la aplicación de briand esto se debe a

que quizá pages fue concebido con el

propósito inicial de hospedar sitios web

sencillos con html css y javascript no

precisamente con uría que como podemos

ver aquí esta no es la aplicación que yo

construí obviamente hay maneras de

desplegar de publicar su aplicación de

verdad con quizá pelos pero es un tanto

tedioso por ello es que vamos a revisar

la segunda opción de cómo publicar sus

proyectos sea sitio web o aplicación en

línea y bueno la segunda opción es net

live aid

para llegar a mi país estamos en el ifai

puntocom crean su cuenta una vez que

tenga en cuenta iniciamos sesión y

deberán ver algo más o menos así

desde aquí vamos a publicar nuestros dos

proyectos de entrada aquí encontramos un

botón gigante en verde 15 nuevos sitios

de seguir hagamos clic aquí aquí vamos a

[ __ ] nuestro proveedor del repositorio

en línea está aquí el hub que es la

misma que escogeremos ghirda obviamente

y a continuación nos pide que elijamos

cual repositorio queremos publicar en mi

caso yo voy a escoger

voy a comenzar con el sitio html

aquí me pide que elija qué rama al igual

que yo y luego le voy a dar en diploide

muy bien aquí nos indica que esto está

en progreso ya terminó y nos da el

enlace visitamos el enlace

aquí está nuestro sitio web ya está en

línea este es el enlace con el cual la

gente nos puede visitar y si queremos

podemos cambiar enlace aquí en domain

settings

podemos agregar un de un dominio

personalizado y ya está al igual que con

guido muy bien ahora regresamos al

dashboard y vamos a lanzar nuestra

aplicación de abril nuevamente en sitio

desde git git hub y vamos a escoger la

aplicación de verán aquí está este es el

repositorio

master y ojo fíjense que aquí nos

detecta que esta es una aplicación de

rayak y nos pregunta cómo queremos que

se construya así que no se preocupen

digamos los valores por el efecto

digamos que aquí en ley

nos dice que está en progreso

le damos unos segundos

y ya está ha terminado de cargarse que

nos da el enlace lo visitamos y vean que

aquí sí nos muestra la aplicación de

break sin haber tenido que hacer

absolutamente nada

y es así como puede comunicar su sitio

web o su aplicación ok ya tenemos

nuestro código aquí desde la computadora

y hasta línea pero la pregunta ahora es

qué pasa si yo quiero hacer cambios a

esta aplicación por ejemplo no quiero

que tenga esto quiero cambiar el color

cualquier cambio como hago los cambios y

cómo hago que se reflejen aquí en línea

muy bien para ello vamos a hacer cambios

voy a tomar aquí el sitio web comenzaré

por el sitio web

y vamos a cambiar

el título vamos a ponerle segunda

versión ok y esto ya fue el cambio que

hice y ahora quiero que esto se refleje

en línea porque si yo esté visito por

ejemplo esto de aquí vean que el título

es speed lo que yo creo que hace una

versión como lo hacemos ya lo también mi

computadora como que se va a internet

muy sencillo lo primero que tenemos que

hacer es desde la terminal integrada

crear una nueva versión en git de hecho

fíjense que como yo hice cambios aquí si

yo escribo kickstart me dice que hubo

cambios en este archivo bueno lo que voy

a hacer es lo mismo que hicimos hace

rato lo primero que de lo segundo git

cómic con guión m y entre comillas el

mensaje vamos a llamarle segunda versión

le va a poner cambie el título with

presionamos enter y ya está acabo de

crear una segunda versión en git y ahora

lo que toca es informar aquí todos

tenemos que informar aquí lo que hice

cambios de modo que el mismo código que

tengo aquí en local lo tenga en internet

no voy a regresar si me vengo para acá

fíjense que la última versión que están

en github es la primera versión cuando

estamos en primera versión chicos ya

estamos en segunda versión y para ello

todo lo que tengo que hacer es ir bus

origin seguido de la rama que sea su

este su repositorio el mismo comando que

ocupamos hace rato lo volvemos a

escribir y ya con esto se envía a

internet seguido lo recibe si yo

actualizo van a ver que aquí va haber

cambios en el index actualizó y el index

y me dice segunda versión ya está y

ahora si yo visito me voy a ajustes me

voy a page es y voy al enlace del sitio

web notarán que que no se ha actualizado

entonces porque sigue diciendo speed

tenemos de unos segundos

y bueno aquí a quitarla tarda un tantito

en actualizarse pero podemos revisar la

versión de tenerife me voy a venir al

dashboard aquí está mi sitio web puedo

dar clic aquí en la flechita para ver

detalles y me dice que la última versión

se publicó a la 135 y aquí me dice que

la última versión fue la segunda versión

que dice publicado entonces si yo visito

el enlace notarán que aquí el título

dice segunda versión revisemos la

versión de pages ip que sigue diciendo

speed a qué se debe esto a que pages es

un tanto más limitado está arrancando

más en actualizarse mientras que el ifai

como pueden ver es más rápido los

cambios que hice en local que envía aquí

dijo ya están en de disponer rifa

mientras que no están en guido hagamos

lo mismo con la aplicación de biak lo

mismo para acá vamos a cambiar el texto

vamos ponerle aquí

segunda versión está de vuelta a mi

terminal los mismos comandos que al

principio

quitad con un punto y coma inm y entre

comienzan a poner segunda versión

cambia de texto y lo último es enviarlo

a la quijada

lo enviamos aquí

vamos a venir aquí aquí dijo vamos al

repositorio aquí estamos en el

repositorio de break y fíjense que aquí

ya se actualizó segunda versión también

texto por lo tanto si yo vengo al

dashboard en el ifai y visitó mi

aplicación aquí puedo ver que esta

segunda versión la está construyendo

actualmente está publicada la primera y

la segunda está en construcción de más

de unos segundos

y mientras tanto vamos a revisar si ya

se actualizó el título del sitio web que

tengo en without page y el listo aquí ya

está actualizado un poquito tarde pero

no podemos pedir mucho si es un servicio

gratuito verdad

de vuelta en el ifai vamos a darle unos

segundos más

y listo la segunda versión ya fue

publicada veamos si es cierto aquí ésta

es mi aplicación voy a actualizar

segunda versión para push y es así como

número 1 publican sus sitios webs y

aplicaciones en línea y número 2 es así

como todos los cambios que vayan

haciendo aquí en local en su computadora

se van a ver reflejados en internet y es

así como concluimos chicos si les gustó

el vídeo el de me gusta suscriban si

para más contenido así y como siempre en

los comentarios díganme qué tutoriales

gustaría ver porque en pantalla habrán

dos vídeos hagan clic en alguno si les

interesa y nos vemos la próxima vez
