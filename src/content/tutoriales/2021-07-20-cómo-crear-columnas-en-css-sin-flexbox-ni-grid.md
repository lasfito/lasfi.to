---
template: tutoriales
url: como-crear-columnas-css
enlaceyt: https://www.youtube.com/embed/QbliZCG4Rtg
date: 2021-07-20T04:15:46.099Z
title: Cómo crear columnas en css sin flexbox ni grid
tag:
  - Desarrollo 101
  - HTML/CSS
autor: Adrián Salgado
introThumbnail: '¿Sabías que puedes crear columnas con tan solo 1 propiedad?
  Spoiler alert: no se trata de flexbox ni grid. '
keyword: columnas en css
thumbnail: /assets/columnas-css-thumb.png
---

Hola, en este breve tutorial te mostraré cómo puedes crear columnas de texto con CSS sin utilizar flexbox ni grid. En realidad es bastante sencillo y créeme cuando te digo que después de leer este artículo jamás volverás a sufrir cuando tengas que generar un layout de columnas.

## Column-count

La manera más rápida y sencilla de generar columnas con css es a través de `column-count`. Como habras inferido por el nombre en inglés, a esta propiedad le asignamos un número como valor y obtendremos tantas columnas como dicho número. Revisa este ejemplo:

https://codepen.io/lasfito/pen/qBXRmML

## Column-width

La segunda manera de crear columnas es a través de `column-width`. Con ella no requieres especificar cuántas columnas quieres como sucede con column-count, sino que tú defines que tan anchas deseas tus columnas y CSS se encarga del resto. Revisa este otro ejemplo:

https://codepen.io/lasfito/pen/xxLgdWJ

Usar column-width tiene sus ventajas por encima de count debido a que podemos conseguir columnas responsivas.

## Count y Width

Si te encontrabas preguntándote cuál debieras elegir, no temas, puedes utilizar ambas al mismo tiempo. Al usar las las 2, el navegador intentará respetar el número de columnas que le hayas brindado siempre y cuando no vaya en contra del ancho que hayas definido

```css
.columnas {
	column-count: 3;
	column-width: 250px;
}

<!--también puedes utilizar este 'shorthand' -- > .columnas {
	columns: 3 250px;
}
```

## Rule y gap

Imaginemos que deseas añadir una línea entre las columnas. Podrías intentar con la propiedad border, pero créeme, solo perderás la cordura. Para ello contamos con column-rule y column-gap. Rule funciona exactamente igual que border puesto que debes especificar estilo, color y grosor para la línea. Revisa este otro ejemplo.

https://codepen.io/lasfito/pen/PoKWmLZ

## Span

Por último, si deseas que algún fragmento de tu texto no forme parte de las columnas sin tener que modificar el "markup" puedes utilizar `column-span: all` y con ello lograrás tu cometido.

### Conclusiones

Y ahí lo tienen, amigos, la mejor manera de generar columnas de texto en CSS sin recurrir a trucos raros.
