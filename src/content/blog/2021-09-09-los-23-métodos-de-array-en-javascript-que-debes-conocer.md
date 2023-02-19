---
type: blog
slug: metodos-array-javascript
date: 2021-09-09T02:02:46.452Z
title: Los 23 métodos de array en JavaScript que debes conocer
tag:
  - JavaScript
  - Desarrollo 101
autor: Adrián Salgado
keyword: Métodos arrays javascript
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/thinkingperson.jpeg?alt=media&token=a3467f73-8571-48e3-bbe8-c47ebe183cd1"
---

¿Cuán bueno dirías que eres tratándose de manipular arrays en JavaScript?
Es momento de averiguarlo. Para ello te mostraré los 23 métodos que debes conocer para cubrir un gran número de escenarios de programación. Créeme, si sabes cómo utilizar los siguientes métodos, tendrás ya un pie en alguna empresa FAAMG.

Tratándose de arrays, ¿qué quieres hacer?

## Agregar elementos al array

### 1. push

El método push () agrega uno o más elementos al final del array y _devuelve la nueva longitud del array_.

```javascript
let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 2. unshift

El método unshift () agrega uno o más elementos al comienzo de un array y devuelve la nueva longitud.

```javascript
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]
```

## Remover elementos del array

### 3. pop

El método pop () elimina el último elemento de un array y devuelve ese elemento. Este método cambia la longitud del array.

```javascript
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
```

### 4. shift

El método shift () elimina el primer elemento de un array y devuelve ese elemento eliminado. Este método cambia la longitud del array.

```javascript
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
//[2, 3]
```

### 5. splice

El método splice () cambia el contenido de un array, eliminando o reemplazando elementos existentes y / o agregando nuevos elementos en su lugar.

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserta el elemento en el primer índice
console.log(months);
//["Jan", "Feb", "March", "April", "June"]
```

## Otras mutaciones de array

### 6. reverse

El método reverse () invierte un array. El primer elemento del array se convierte en el último y el último elemento del array se convierte en el primero.

```javascript
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

### 7. sort

El método sort () ordena los elementos de un array y devuelve el array ordenado. El orden predeterminado es ascendente, que se basa en convertir los elementos en cadenas y luego comparar sus secuencias de valores de unidades de código UTF-16.

```javascript
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// [1, 100000, 21, 30, 4]
// Cuidado con "ordenar" números con .sort()
```

### 8. fill

El método fill () cambia todos los elementos de un array a un valor estático, desde un índice inicial (predeterminado 0) a un índice final. Devuelve el array modificado.

```javascript
const array = [1, 2, 3, 4];

// rellenar con 0 en los índices 2-4
console.log(array.fill(0, 2, 4));
// [1, 2, 0, 0]
```

## Computar un nuevo array

### 9. map

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```javascript
var numeros = [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]
```

## Nuevo array desde filtrado

### 10. filter

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```javascript
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
//[12, 130, 44]
```

## Cortar un array

### 11. slice

El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por "inicio" hasta fin (sin incluirlo). El array original no se modificará.

```javascript
var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);

//  ['Pedro','Miguel']
```

## Combinar arrays

### 12. concat

El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

```javascript
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// ["a", "b", "c", "d", "e", "f"]
```

## Aplanar arrays anidados

De estos dos métodos ya he hablado en [este artículo](https://lasfi.to/blog/como-usar-flat)

### 13. flat

El método flat() crea un nuevo array con todos los elementos de sub-array anidados hasta la profundidad especificada.

```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### 14. flatMap

El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map() seguido de un flat() de profundidad 1.

```javascript
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]
```

## Encontrar índices

### 15. indexOf

El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

```javascript
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
```

### 16. findIndex

El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// 3
```

## Encontrar elementos

### 17. find

El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
//  12
```

### 18. includes

El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.

```javascript
const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false
```

### 19. some

El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

```javascript
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));
// true
```

### 20. every

Determina si todos los elementos en el array satisfacen una condición.
Cuidado, que devolverá true si llamas este método en algún array vacío.

```javascript
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
```

## Crear un string

### 21. join

El método join() une todos los elementos de un array en una cadena (string) y devuelve esta cadena.

```javascript
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(""));
// "FireAirWater"

console.log(elements.join("-"));
// "Fire-Air-Water"
```

## Transformar en un solo valor

De reduce ya he hablado en [este artículo](https://lasfi.to/blog/como-usar-array-reduce)

### 22. reduce

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// 10
```

## Atravesar / "loopear" un array

### 23. forEach

El método forEach() ejecuta la función indicada una vez por cada elemento del array.

```javascript
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

//  "a"
//  "b"
//  "c"
```

## Conclusiones

Ahí lo tienen, los 23 métodos de array en JavaScript que sin duda alguna deberías conocer ya si tu meta es ser un desarrollador sólido. ¿Cuántos conocías ya?

No olvides que la práctica hace al maestro. [CodeWars](https://https://www.codewars.com/) es un lugar que recomiendo para poner a prueba tus habilidades.
