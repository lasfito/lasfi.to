---
type: blog
slug: diferencias-entre-node-y-element
date: 2021-07-16T21:55:12.171Z
title: ¿Cuál es la diferencia entre Node y Element?
metaDescription: En este artículo, repasaré estas diferencias exactas explicando
  la diferencia entre nodos(node) y elementos(element).
tag:
  - JavaScript
  - Desarrollo 101
autor: Adrián Salgado
keyword: diferencia node element
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/diferencia-node-element.jpg?alt=media&token=934b640b-3381-4fac-af57-f98bd3973bb8"
---

Si has trabajado/manipulado el DOM en JavaScript, probablemente hayas notado que hay varias formas de acceder al mismo elemento. Por ejemplo, `nextSibling` y `nextElementSibling`. Esto es realmente confuso ya que no es obvio cuál se debe usar o incluso cuáles son las diferencias entre ellos. En este artículo, repasaré estas diferencias exactas explicando la diferencia entre nodos(node) y elementos(element).

## Elementos vs nodos

De los dos, los **elementos** son los más fáciles de entender, ya que son solo elementos HTML - como una etiqueta `div`, `span` o `body`. Generalmente, cuando se trabaja con el DOM, estarás trabajando con **elementos**, ya que la mayoría de las veces se desea interactuar con elementos HTML.

Los **nodos**, en cambio, son la versión más genérica de un elemento. Un nodo podría ser un elemento HTML, pero también podría ser cualquier otra cosa en un documento HTML, como texto o comentarios. Esto hace que sea más difícil trabajar con los nodos, ya que la mayoría de las veces, cuando se trabaja con DOM, no nos importan cosas como los nodos de texto o los nodos de comentarios y solo nos importan los nodos de los elementos. Personalmente, suelo evito trabajar con nodos por esta razón. A continuación te muestro una lista de todos los tipos de nodos _importantes_.

1. Nodo de elemento
2. Nodo de texto
3. Nodo de sección CData
4. Nodo de instrucción de procesamiento
5. Nodo de comentario
6. Nodo de documento
7. Nodo de fragmento de documento

Cuando navegues/manipules el DOM, te recomiendo que siempre elijas el método que selecciona elementos en lugar de nodos. Por lo general, estos métodos tienen la palabra `element` en el nombre, o en su defecto, encontrarás que la contraparte lleva la palabra `node` en el nombre.

## HTMLCollection frente a NodeList

Al navegar por el DOM, a veces se nos devolverá (o como dirían muchos en el mundo Tech: _se returneará_ ) una colección de elementos / nodos. Tal colección puede ser una `HTMLCollection` o una `NodeList`.

Una `HTMLCollection` es bastante simple de entender, ya que **solo puede contener elementos**. Los métodos como `getElementsByClassName` y `children` devuelven una HTMLCollection. Estas colecciones son muy similares a los `array`, por lo que es posible que ni siquiera te des cuenta de que estás trabajando con una HTMLCollection, pero una cosa que los `array` tienen que las HTMLCollections no, son todas las funciones de orden superior (_high order functions_). Cosas como `forEach`, `map` y `reduce` no están disponibles en una HTMLCollection. Además, **las HTMLCollections se actualizan en vivo**. Esto significa que si tienes una HTMLCollection de 10 elementos con X clase y agregas un nuevo elemento al DOM con esa clase, este elemento agregará automáticamente a la HTMLCollection. Personlamente, encuentro esto un poco molesto, ya que puede causar errores inesperados.

Una `NodeList`, por otro lado, puede contener cualquier tipo de nodo, incluidos elementos. Las NodeLists también son similares a los `array`, pero nuevamente carecen de la mayoría de las funciones de orden superior. La **única función de orden superior en una NodeList** es la función **forEach**. Algunos ejemplos de métodos que devuelven NodeLists son `querySelectorAll` y `childNodes`. Las NodeLists también se actualizan en vivo de manera similar a HTMLCollections, pero solo en algunos casos. Por ejemplo, `querySelectorAll` no es una lista de actualización en vivo, pero `childNodes` sí es una actualización en vivo. En general, trato de evitar `NodeLists` ya que pueden contener elementos que no son HTML. Dado que `querySelectorAll` solo devolverá **elementos** dentro de una NodeList, puedes apostar que es "seguro" usar `querySelectorAll` constantemente.

## Conclusión

Los nodos y los elementos son muy similares, pero hay algunas diferencias sutiles que debes comprender. En general, prefiero trabajar con elementos dentro de una NodeList siempre que sea posible, ya que, en mi opinión, son los más fáciles de trabajar.
