---
type: blog
slug: hoisting-101-para-principiantes
date: 2021-07-10T03:03:53.289Z
title: Hoisting 101 para principiantes
tag:
  - JavaScript
  - Desarrollo 101
autor: Adrián Salgado
keyword: que es hoisting
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/hoisting-101-destacada.png?alt=media&token=b96796a0-8853-4ef6-a4a5-8d086c54a3f1"
---

**Hoisting.** Es la palabra que todo el mundo usa cuando se habla de JavaScript, sin embargo, nadie se toma el tiempo para explicar realmente qué es el _hoisting_, cómo funciona y por qué es importante. En este artículo, explicaré todo lo que se necesita saber sobre _hoisting_ para que la próxima vez que alguien lo mencione, puedas comprender exactamente lo que significa.

## ¿Qué es hoisting?

De entrada, hoisting, del inglés (to hoist) significa izar o levantar. En términos simples, el _hoisting_ es el mecanismo que te permite definir una función en la parte inferior de tu archivo y aún así usarla en la parte superior del archivo antes de que se defina.

```javascript
loguear("hola");

function loguear(texto) {
  console.log(texto);
}
```

Como puedes ver en el ejemplo anterior, el registro de la función _loguear_ se define después de su uso, pero no se generan errores. Esto es gracias a que JavaScript toma esa función y **esencialmente** la mueve a la parte superior del archivo por ti (de aquí el nombre de hoisting - izar, levantar). Si bien, técnicamente esto no es exactamente lo que sucede, para propósitos generales, puedes pensar en _hoisting_ como JavaScript moviendo algo a la parte superior del archivo.

Detrás de escenas, lo que realmente está sucediendo es que cuando **el navegador** está compilando tu código de JavaScript, **pondrá tu función en la memoria antes de ejecutar el código**, lo que significa que estará disponible como si hubiera sido definido al comienzo del archivo.

Lo más probable es que te hayas encontrado con este comportamiento antes sin siquiera darte cuenta de que el _hoisting_ era la razón detrás de eso. Sin embargo, hay algunas trampas de las que preocuparse al lidiar con el _hoisting_.

## Las partes complicadas del hoisting

Entonces, ya hemos determinado que el _hoisting_ moverá tus funciones a la parte superior del archivo, ¿pero qué pasa con las _arrow functions_ (funciones de flecha)?

```javascript
loguear("hola");

const loguear = (texto) => {
  console.log(texto);
};
```

El código anterior arrojará un error ya que las funciones de flecha no serán "alzadas" por el _hoisting_ de JavaScript. La razón de esto es bastante simple. JavaScript no "alza" variables `const` y `let`. Y dado que una función de flecha debe definirse como una variable, no se colocará en la parte superior del archivo como resultado del _hoisting_.

Esta es una de las razones principales por las que uso funciones normales en lugar de funciones de flecha en ciertas situaciones. Por lo general, me gusta tener definidas mis funciones auxiliares al final del archivo, ya que no son muy importantes de ver. Esto significa que las defino como funciones normales para que la parte más importante de mi código pueda estar en la parte superior del archivo y las funciones en la parte inferior del archivo (dado que serán "alzadas" por el _hoisting_ de JavaScript)

Si estás familiarizado con el _hoisting_, es posible que sepas que las variables definidas con la palabra clave `var` también son "alzadas". Podríamos entonces pensar que si declaramos una función de flecha con una variable `var` "alzaríamos" dicha función. Sin embargo, JavaScript no funciona de esa manera.

```javascript
loguear("hola");

var loguear = (texto) => {
  console.log(texto);
};
```

Esto volverá a arrojar un error, ya que mientras las variables definidas con `var` se "alzan", **los valores de esas variables no**. Básicamente, con el _hoisting_, el código compilado se parece un poco más a esto.

```javascript
let loguear = undefined;

loguear("hola");

loguear = (texto) => {
  console.log(texto);
};
```

Esto es más fácil de ver en el siguiente ejemplo.

```javascript
console.log(a);
// undefined

var a = 10;

console.log(a);
// 10
```

Como puedes ver, no se arrojan errores, pero la primera declaración de registro se imprime como `undefined` mientras que la segunda declaración de registro imprime como `10`. El valor de la variable `a` no se "alza". Solo se "alza" la variable en sí (_JavaScript in a nutshell_).

## Conclusión

El _hoisting_ es uno de esos conceptos de JavaScript que se está volviendo cada vez menos frecuente a medida que las funciones normales y `var` se vuelven menos utilizadas, pero comprender cómo funciona el _hoisting_ es increíblemente importante, ya que puede ser una herramienta poderosa para la organización del código al definir funciones.
