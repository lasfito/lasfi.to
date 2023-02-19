---
type: tutoriales
url: como-mejorar-rendimiento-react
enlaceyt: https://youtube.com/embed/AyuTxN2aj_0
date: 2022-04-27T20:02:56.711Z
title: Cómo mejorar el rendimiento de React
metaDescription: "Aprende cómo optimizar y mejorar el rendimiento de tu
  aplicación de React #tutorial #webdev #react  "
tag:
  - Programación
  - React
autor: Adrián Salgado
introThumbnail: "Aprende cómo optimizar y mejorar el rendimiento de tu aplicación de React "
keyword: mejorar rendimiento react
thumbnail: https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/22-mejorar-rendimiento-react%2F22-mejorar-rendimiento-react.png?alt=media&token=a10c0ea6-4c74-45aa-873e-4714354b129d
---

## Transcripción

hola chicos que tal bienvenidos el día

de hoy les mostraré cómo pueden

optimizar su aplicación evitando

renderizados innecesarios en caso de que

no lo sepan cuando un componente padre

se actualiza lo que ocurre es que éstos

se propagan hacia abajo hacia todos los

hijos que tengan directa o

indirectamente por ejemplo aquí tengo

alfa y estos son sus hijos bravos charly

page y todos estos acá y si yo actualizo

alfa lo que ocurre es que todo este

árbol de componentes se renderiza al

igual que alfa lo cual esto puede venir

en un pobre desempeño de su aplicación

por ello el día de hoy les mostraré tres

maneras distintas como pueden optimizar

su aplicación de modo que por ejemplo

cuando actualizamos alfa todos los hijos

no se rendirían nuevamente o por ejemplo

de modo que si el padre de un componente

se actualiza

no se actualice entonces vamos a

aprender cómo utilizar estos tres

métodos de desempeño para que puedan

aplicarlos en sus aplicaciones y si les

interesa aprender cómo hacerlo

acompáñenme

[Música]

vale y antes de comenzar recordarles dos

cosas la primera es que encuentran el

código de este tutorial en la

descripción del vídeo junto con todos

mis demás tutoriales y la segunda

invitarlos a que se suscriban a mi

boletín también encuentran el enlace en

la descripción habiendo dicho esto

regresemos a la aplicación y veamos cómo

funciona la verdad es que tengo este

componente de app y al interior de app

tengo todos estos hijos al fabra o

charly charly juniors page y page 2 como

pueden ver por aquí ahora estos

componentes son muy muy sencillos todos

son idénticos y constan de un contador

que es un estado un pequeño layout con

estilos eso no importa mucho lo que sí

importa es que al interior de cada

componente

tenemos un texto donde imprimimos el

estado y tenemos un botón para

incrementar

como pueden ver de modo que si aquí

tengo uno y hago clic en el botón se

cambia dos y esto se muestra en pantalla

y ahora vamos a comenzar con estos tres

consejos para optimizar sus aplicaciones

comencemos por alfa si vamos a alfa

tenemos lo mismo un estado el estado

aquí en texto y el botón ahora sí vamos

alfa tenemos que entender algo fíjense

esto alfa al interior del alba estamos

montando a brabo ok al interior de alfa

está brabo pero fíjense esto qué injusta

es la vida

si yo actualizó el estado

lo que ocurre es que este contador de

aquí se modifica cuando yo hago clic en

el botón esto se modifica

esto se modifica y esto se modifica lo

que no se modifica es bravo la pregunta

es por qué si brabo no se está

modificando porque se vuelve a

renderizar y bueno esto se debe a que ya

está concebido de esta manera cuando el

estado cambia al interior de un

componente en este caso alfa todo lo que

el componente esté regresando se vuelve

a renderizar no importa si cambio o no

porque sabemos que bravo no ha cambiado

brabo sigue teniendo 0 sin embargo se

vuelve a renderizar ahora la primera

manera de evitar esto es

abstrayendo el estado fíjense que aquí

el estado está en alfa y está en este

componente padre lo cual no es necesario

porque el único lugar donde lo ocupamos

es en esto de aquí lo que podemos hacer

entonces es abstraer esto dentro de otro

componente que llamaré

contador

de modo que ahora el estado ya no va a

estar en el padre sino que ahora el

estado estará únicamente

donde se necesita y esa es la idea que

no estén por la vida poniendo estados

donde no son necesarios entonces ya que

deduje esta lógica y este estado lo que

hago es insertarlo aquí coloco contador

y ahora no necesito estado en alfa alfaa

no lo requería lo meto aquí en contador

y lo que va a ocurrir es que lo único

que se va a modificar es esta parte de

aquí por lo tanto yo me vengo para acá

fíjense que no importa cuántas veces

cambia aquí los hijos se mantienen

intactos y a este método lo llamaremos

abstracción

ok

fíjense que con abstracción lo que

evitamos es que esta cadena de

renderizado se propague hacia abajo no

se está propagando hacia abajo sin

embargo la abstracción no nos defiende

de una cadena que venga de arriba por

ejemplo aquí tenemos a charly charly es

hijo de bravo ok si yo actualizo bravo

de charlie también css renderiza verdad

ahora como les decía esta abstracción no

nos defiende entonces les voy a mostrar

vendré aquí a charly

aquí en charly voy a poner este

componente de contador voy a borrar esto

que es tan contador y colocar el

contador en su lugar

fíjense que a pesar de que charly ya

tiene este método de abstracción

si yo cambio a brabo charlie también se

cambia de modo que abstracción lo que

hace es que evita que se propaga hacia

abajo como pueden ver aquí con charly

juniors pero no nos defiende de las

propagaciones que vienen de arriba para

ello si queremos defendernos de una

propagación desde arriba tenemos que

utilizar memo ok memo es algo que se

importa desde riad y memo viene de mimo

hay 6 jones si no me equivoco así es

como se pronuncia que básicamente alude

a memorizar el resultado o el valor

actual para utilizar memo lo que haremos

es bueno primero vamos a

y deshacernos de esto de aquí de esta

abstracción vamos a ahorrar lo

y esto vamos a traerlo de vuelta

a charly

entonces este contador lo borramos ok

aquí estamos de vuelta ahora para poder

utilizar memo es muy sencillo memo lo

que hace es que nos guardan memoria el

resultado de una operación en este caso

como los componentes son en realidad

funciones no se les olvide que son

funciones podemos guardar el resultado

de esta función para ello simple y

sencillamente envolvemos todo todo lo

vamos a envolver al interior de mí

vengo para acá lo envuelvo y ahora quien

método estamos utilizando menos si yo

vengo de vuelta aquí a mi aplicación

fíjense que si yo actualizo brabo

memo lo que hace es que me protege de la

propagación que viene desde arriba pero

a diferencia de abstraer el estado donde

se requiere memo no evita que se propaga

hacia abajo como pueden ver yo aquí

actualizo charly y charly juniors se

actualiza o se renderiza con él también

por último vamos a revisar a estos dos

de por aquí ya aprendimos abstracción

memo pero hay una tercera manera con la

cual podemos evitar esta propagación de

renderizados innecesarios

para ello vale la pena aclarar que memo

se suele aconsejar o se recomienda que

se use exclusivamente para componentes

que requieren digamos de mucha potencia

ok hay componentes que tienen una lógica

muy compleja que realiza una tarea muy

pesada para ello una alternativa a nemo

una alternativa es trabajar con props

vengamos de vuelta aquí a la aplicación

y vamos a revisar

fecha y fecha 2 sabemos qué fecha 2 es

el hijo de fecha aquí lo pueden ver al

interior de fecha esta fecha 2 ahora

cómo podemos evitar que page 2 como esto

es parte del turn cómo podemos evitar

que fecha 2 se rendiría cuando esta

lógica cuando este estado cambie bueno

pues sucede que la idea detrás de los

componentes y la idea detrás de los

propios es que sean funciones puras

relativamente hablando en términos de

las propiedades y esto funciona así

react cuando recibe props o propiedades

react asume que estos props no van a

estar cambiando en el transcurso de este

ciclo de vida por ello si a fecha 2 en

lugar de ponerlo aquí directamente si a

fecha 2

lo pasamos como un propio lo que va a

ocurrir es que riad

a confiar en que no ha cambiado y por lo

tanto no lo volverá a renderizar y les

muestro aquí recibimos props aquí

ponemos próximo y feig quien está al

interior de brabo vamos a buscar la

fecha le vamos a pasar como hijo

diríamos que el hijo es

seitz 2

ok y ahora lo que va a ocurrir es como

técnicamente feig lo está recibiendo

desde afuera como un pro cuando yo me

venga para acá por más que cambia fecha

page 2 permanece exactamente igual y

este método vamos a llamarlo aquí como

drops

de modo que de estas tres maneras

podemos evitar que esta cadena de

renderizados generada por un padre se

propague hacia abajo o evitar que nos

afecte desde arriba recapitulando

podemos abstraer el estado para evitar

que esto se propague hacia abajo lo

mismo comprobé lo abstraemos y lo

recibimos desde un prop es una propiedad

para evitar que se propague hacia abajo

o bien podemos defendernos desde arriba

con

vale pero recuerden que memo no evita

que se propague hacia abajo

y es así como concluimos el vídeo del

día de hoy se les ha gustado regalen un

me gusta

suscríbase para ver más contenido así o

bien van a ver en pantalla dos vídeos si

les ha gustado el vídeo de hoy pueden

sigue explorando mi contenido para que

sigan aprendiendo más sobre el

desarrollo nos vemos en la próxima
