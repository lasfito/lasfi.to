---
type: blog
slug: como-usar-flat
date: 2021-08-02T14:43:47.806Z
title: ¿Cómo usar array flat?
tag:
  - Desarrollo 101
  - JavaScript
autor: Adrián Salgado
keyword: array flat
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/arrayflatthumbnail.png?alt=media&token=825d8af7-c594-4c70-b180-50bcf62fd70d"
---

El método `flat` puede parecer realmente simple a primera vista, pero lo cierto es que hay que tener siempre presente los casos en los cuales flat sobresale para poder aprovecharlo al máximo.

## ¿Qué es `array.flat`?

Imagina que tienes un array anidado como este.

```js
const arr = [1, [2, 3], [4], [5, 6, 7], 8];
```

Si deseas convertirlo en un `array` que no esté anidado, podrías usar el método `flat` en el array.

```js
const arr = [1, [2, 3], [4], [5, 6, 7], 8];
console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8]
```

Esta es la forma más básica de usar el método `flat` y todo lo que hace es aplanar los arrays anidados dentro un array para generar otro array. **Pero seguro que esto ya lo conocías**. Si esto es todo lo que conoces de 'flat', entonces puede que lo siguiente te tome por sorpresa:

```js
const dobleArr = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(dobleArr.flat());
// [1, 2, [3, 4], 5, 6, 7, 8]
```

Nota que el array \[3, 4] está anidado 2 niveles adentro del array principal, lo que significa que el método `flat` no consigue "aplanarlo", ya que por defecto **"flat" solo aplanará un array en un nivel de profundidad**.

## Cómo usar flat para arrays multianidados

Si deseas "aplanar" un array que tenga 2 niveles anidados, como el ejemplo anterior, puedes pasar el valor 2 como argumento al método `flat`. El número que pasas a flat le dice al método cuántos niveles de anidación te gustaría aplanar.

```js
const dobleArr = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(dobleArr.flat(2));
// [1, 2, 3, 4, 5, 6, 7, 8]
```

Al hacerlo, ahora hemos aplanado completamente el array anterior, pero ¿qué pasa si tienes que aplanar un array y no sabes cuán anidado está ? Por ejemplo, en el caso de que recibas dicho dato por alguna API. En ese caso, puedes pasar como argumento la palabra **Infinity** y `flat` aplanará todos los arrays que estén anidados al interior del array principal.

```js
const dobleArr = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(dobleArr.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8]
```

## Eliminar agujeros

Otra característica realmente útil de `flat` es que puede eliminar los espacios vacíos de un array. Estos espacios pueden ser causados por utilizar `delete` para eliminar algún elemento de un array, por ejemplo, o cuando insertas un elemento en un índice que está más allá del "final" del array, por lo tanto se crean espacios entre el "final" y la posición del nuevo elemento.

```js
const arr = [1, 2, 3, 4, , 6, 7, , 9];
console.log(arr);
// [1, 2, 3, 4, empty, 6, 7, empty, 9]
console.log(arr.flat());
// [1, 2, 3, 4, 6, 7, 9]
```

Esto es algo que la mayoría de la gente no sabe acerca de `flat` que puede ser muy útil en ciertas situaciones.

## flatMap

Por último, quiero hablar de una combinación de dos métodos de array: `flat` y `map` . Dado que es muy común realizar un mapa en un array que debe ser aplanado, los desarrolladores de Javascript crearon el método `flatMap`. Este método funciona exactamente igual que si se llamara `arr.map().flat()`.

Una consideración especial respecto a flatMap es que solo nos permite "aplanar" un nivel de anidación, por lo tanto, si deseas aplanar más de un nivel tendrás que utilizar los métodos `map` y `flat` por separado.

```js
const gente = [
  {name: "Juan", favNums: [1, 2, 4]},
  {name: "María", favNums: [6, 8, 9]},
];
console.log(gente.map((p) => p.favNums));
// [[1, 2, 4], [6, 8, 9]]
console.log(gente.map((p) => p.favNums).flat());
// [1, 2, 4, 6, 8, 9]
console.log(gente.flatMap((p) => p.favNums));
// [1, 2, 4, 6, 8, 9]
```

## Conclusión

Pese a tratarse de un método relativamente simple, no deberíamos subestimar las capacidades de `flat` y por ello no aprovechar al máximo su potencial. En mi experiencia, he aprendido a pensar inmediatamente en "flat" cada que veo algún array con niveles de anidación. Quizá sería recomendable que generes el mismo nivel de asociación.
