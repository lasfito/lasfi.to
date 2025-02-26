---
type: blog
slug: como-usar-array-reduce
date: 2021-07-20T18:53:43.961Z
title: ¿Cómo usar array reduce?
tag:
  - JavaScript
  - Desarrollo 101
autor: Adrián Salgado
keyword: como array reduce
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/reduce-array-destacada.png?alt=media&token=2d10aa5f-3dae-48d0-85bc-cb8cda828df8"
---

El método de `reduce` de `array` es definitivamente el más confuso de todos los métodos de array de JavaScript. Es por eso que este artículo te enseñará de una vez y por todas lo que necesitas saber acerca de este método. Créeme, cuando hayas terminado de leer este artículo será un experto en el método de reducción (reduce).

## ¿Qué hace `reduce`?

El método de reducción (reduce) en realidad tiene un nombre bastante explicativo, ya que todo lo que hace es tomar un `array` de elementos y **reducirlo a un solo valor**. Este valor puede ser cualquier cosa, como un número, un objeto o una cadena (`string`).

## ¿Cómo usar `reduce` ?

El método de reducción en su forma más simple toma dos parámetros. El **primer parámetro es una función**, generalmente llamada reductora, que será llamada/invocada en cada valor del `array`. El segundo parámetro de reduce es el **valor inicial** que se utilizará en la función reductora.

Ahora, **la función reductora toma dos parámetros**. El primer parámetro es el acumulador, que es el "valor" que irá atrapando el resultado de la función reductora, de modo que el acumulador será a lo que se reduzca el `array`. El segundo parámetro de la función reductora es el elemento actual en el array.

Esto es, como habrás notado, bastante difícil de explicar en texto. Así que será mejor que veamos un ejemplo de código en el que intentamos obtener **el precio total** de una lista de artículos.

```javascript
const items = [
  {nombre: "Arroz", precio: 5},
  {nombre: "Libro", precio: 20},
  {nombre: "Pollo", precio: 10},
  {nombre: "Monitor", precio: 100},
];

const precioTotal = items.reduce((total, item) => {
  return total + item.precio;
}, 0);
console.log(precioTotal); // 135

// precioTotal también puede ser escrito así:
const reducer = function (total, item) {
  return total + item.precio;
};
const precioTotal = items.reduce(reducer, 0);
console.log(precioTotal); // 135
```

Como puedes ver, nuestra función reductora tiene una variable total que es el acumulador y una variable de elemento que es el valor actual de nuestro `array`. Luego, dentro de esa función, solo estamos agregando el total actual al precio del artículo y devolviéndolo.

Este valor devuelto de la función reductora se usa luego como el valor del total en la siguiente iteración de la función reductora. Sin embargo, para la primera iteración, el valor inicial, que establecemos en 0, se usa como el valor del total. Después de la iteración final del reductor, el valor de total se devuelve desde la función de reducción y se establece en `precioTotal`.

Sí, nuevamente confuso. **Quizá debamos probar con una tabla:**

| Iteración | total | item.precio | retorno |
| --------- | ----- | ----------- | ------- |
| 1         | 0     | 5           | 5       |
| 2         | 5     | 20          | 25      |
| 3         | 25    | 10          | 35      |
| 4         | 35    | 100         | 135     |

Como puedes ver, el total comienza en nuestro valor inicial y luego siempre es solo el retorno de la iteración anterior.

Este es el caso de uso más simple para reducir, pero puede volverse un poco más complejo. Uno de los casos de uso más comunes para reducir es crear un grupo por función que agrupe todos los objetos en una matriz que tengan el mismo valor para una clave específica.

```javascript
const gente = [
  {nombre: "Mateo", edad: 26},
  {nombre: "Marcos", edad: 31},
  {nombre: "Lucas", edad: 42},
  {nombre: "Juan", edad: 42},
];

const genteAgrupadaPorEdad = gente.reduce((genteAgrupada, persona) => {
  const edad = persona.edad;
  if (genteAgrupada[edad] == null) genteAgrupada[edad] = [];
  genteAgrupada[edad].push(persona);
  return genteAgrupada;
}, {});
console.log(genteAgrupadaPorEdad);
/*
  {
    26: [{ nombre: 'Mateo', edad: 26 }],
    31: [{ nombre: 'Marcos', edad: 31 }],
    42: [
      { nombre: 'Lucas', edad: 42 },
      { nombre: 'Juan', edad: 42 }
    ]
  }
*/
```

La función anterior de reducción toma un `array` de personas y las reduce a un solo objeto que tiene claves para todos los valores de edad y un array de personas que tienen esa edad coincidente como valor para cada clave.

## Otras funciones de reducción

Lo que hemos cubierto hasta ahora cubrirá el 95% de todos los casos de uso de reducción, pero hay algunas cosas adicionales sobre la reducción que debes saber.

El primero de ellos es que **la función reductora** en realidad **puede tener hasta cuatro parámetros**. Estos son los siguientes:

El acumulador
El valor actual
El índice de la iteración actual
El array sobre el cual se está llamando el `reduce`

A continuación se muestra un ejemplo de la salida de un `array` simple.

```javascript
const numeros = [13, 2, 5];

const sum = numeros.reduce((total, numero, index, array) => {
  return total + numero;
}, 0);
console.log(sum); // 20
```

| Iteración | Total | numero | index | array     | retorno |
| --------- | ----- | ------ | ----- | --------- | ------- |
| 1         | 0     | 13     | 0     | \[13,2,5] | 13      |
| 2         | 13    | 2      | 1     | \[13,2,5] | 15      |
| 3         | 20    | 5      | 2     | \[13,2,5] | 20      |

Otra cosa interesante de la reducción es que el valor inicial es opcional. Si no pasamos el valor inicial, el primer valor del total será el primer valor del array.

```javascript
const numeros = [13, 2, 5];

const sum = numeros.reduce((total, numero, index, array) => {
  return total + numero;
});
console.log(sum); // 20
```

| Iteración | Total | numero | index | array     | retorno |
| --------- | ----- | ------ | ----- | --------- | ------- |
| 1         | 13    | 2      | 1     | \[13,2,5] | 15      |
| 2         | 20    | 5      | 2     | \[13,2,5] | 20      |

Observa cómo la primera iteración tiene un total de 13 y el número es 2. Dejamos el total al primer valor del array y nunca ejecutamos la función reductora para este primer valor. Honestamente, esto es un poco confuso en mi opinión, por lo que recomiendo establecer siempre un valor inicial.

Otra razón para establecer siempre un valor inicial es ue si no establece un valor inicial y luego intentamos llamar a `reduce` en un array vacío, se arrojará un error.

```javascript
const reducer = (total, numero) => total + numero
[].reduce(reducer) // Error
```

## Conclusión

La función de `reduce` es una función increíblemente versátil que puede tomar código complejo basado en bucles y convertirlo en una forma mucho más simple. Una vez que comprendas cómo funciona, las aplicaciones que tendrá reduce serán ilimitadas.
