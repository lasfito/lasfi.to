---
type: blog
slug: js-undefined-vs-null
date: 2021-07-06T13:55:31.554Z
title: ¿Cuál es la diferencia entre Null y Undefined en JavaScript?
tag:
  - JavaScript
  - Desarrollo 101
autor: Adrián Salgado
keyword: diferencia null y undefined
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/null-undefined-destacada.png?alt=media&token=f73233b8-ffa9-4665-8b12-e34cec8bdabe"
---

JavaScript es bastante confuso cuando se trata de una variable que no tiene un valor porque puede ser tanto `null` como `undefined`. Esto genera mucha confusión, por lo que en este artículo analizaré las diferencias que existen entre `null` y `undefined`.

## Null y Undefined

Para empezar, me gustaría explicar qué tienen en común `null` y `undefined` ya que son muy similares. Tanto `null` como `undefined` significan que no hay valor. Si una variable se establece en `null` o `undefined`, no tiene valor y si una función devuelve `null` o`undefined`, entonces nos está diciendo que no tiene ningún valor para devolver. Lo más probable es que ya lo entiendas.

Estos valores son en realidad tan similares que se consideran iguales cuando se comparan con dobles iguales (`==`), mas no iguales con triple igual (`===`).

```javascript
console.log(null == undefined);
// true
console.log(null === undefined);
// false
```

Debido a esto, cuando quiero verificar si una variable tiene un valor o no, casi siempre uso la comparación doble igual, ya que devolverá verdadero si la variable es `null` o `undefined`.

Sin embargo, aquí es donde terminan las similitudes.

### Null

Es más fácil comenzar con `null` cuando se comparan las diferencias entre `null` y `undefined` ya que`null` es muy sencillo. Si una variable es `null`, significa que la variable no tiene valor y que el programador la estableció explícitamente para que no tuviera valor. Una variable nunca será `null` a menos que en algún lugar del código un programador establezca una variable en `null`.

Es importante saber esto, ya que cuando veas un valor `null` , sabrás que el programador que escribió ese código te está diciendo que no hay ningún valor explícitamente. Un gran ejemplo de donde `null` es útil es algo así como una función de búsqueda que consulta una base de datos en busca de una entrada. Si no existe ninguna entrada, tiene más sentido devolver `null` ya que se está indicando que no se ha encontrado ningún valor.

### Undefined

Por otro lado, `undefined` significa que no hay ningún valor porque todavía no se ha establecido ningún valor. Por ejemplo, si creas una variable y no le asignas un valor, entonces estará `undefined`.

```javascript
let a;

console.log(a);
// undefined
```

Donde esto se vuelve un poco confuso es el hecho de que se puede establecer una variable con valor de `undefined`.

```javascript
let a = null;

console.log(a);
// null

a = undefined;
console.log(a);
// undefined
```

Una razón por la cual querrías hacer esto es esencialmente restablecer o resetear una variable. Al establecer una variable en `undefined`, se está transmitiendo el mensaje de que la variable ya no contiene información útil, mientras que si el valor es `null`, se está diciendo específicamente que el resultado de alguna acción no tiene valor.

Técnicamente, ambos no indican ningún valor, pero transmiten ese mensaje de formas ligeramente diferentes.

## Conclusión

En general, no es muy importante conocer las diferencias entre `null` y `undefined`, con la salvedad de saber cómo interactúan con dobles y triples iguales, pero si eres diligente en el uso de `null` and `undefined`, puedes escribir un código más limpio que puede hacer uso de la naturaleza implícita / explícita de `null` and `undefined`.
