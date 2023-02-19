---
type: blog
slug: diferencia-entre-library-y-framework
date: 2021-08-09T13:41:22.451Z
title: ¿Cuál es la diferencia entre library y  framework?
tag:
  - Desarrollo 101
  - Misceláneo
autor: Adrián Salgado
keyword: diferencia library y framework
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/thinkingperson.jpeg?alt=media&token=a3467f73-8571-48e3-bbe8-c47ebe183cd1"
---

Los desarrolladores a menudo usan los términos "library" y "framework" de manera intercambiable, cual si fueran términos que significan lo mismo. Y aunque son muy similares, lo cierto es que hay una diferencia.

Muchas veces, al aprender a programar, recomiendo tener presente el significado de las palabras con las que se trabaja. Para este caso, es necesario saber que **library** en inglés significa biblioteca.

Aunque hoy día mucha gente traduce library como _librería_, lo cual es erróneo semanticamente. Pero qué se le va a hacer cuando hay palabras peores en el mundo del desarrollo, como returnear (de return - devolver) o deprecar (de deprecate - desaprobar/rechazar).

Por otro lado, **framework** en inglés signifca "estructura conceptual", "marco estructural" o "marco de referencia".

Tanto **framework** como **library** son códigos escritos por otra persona que se utilizan para ayudar a resolver problemas comunes.

Por ejemplo, supongamos que tienes un programa en el que planeas trabajar con _strings_. Decides mantener tu código SECO ( del inglés DRY - Don't Repeat Yourself) y por ello escribes algunas funciones reutilizables como estas:

```javascript
function obtenerPalabras(str) {
  const palabras = str.split(" ");
  return palabras;
}
function crearOracion(palabras) {
  const oracion = palabras.join(" ");
  return oracion;
}
```

**Felicidades.** Acabas de crear una biblioteca.

No hay nada mágico en los frameworks o bibliotecas. **Ambos** son código reutilizable escrito por otra persona. Su propósito es ayudarte a resolver problemas comunes de una manera más sencilla.

## Diferencia en analogía

Es común encontrar el uso de una casa como metáfora en el mundo del desarrollo web. Este artículo no será la excepción:

Imagina que estás construyendo una casa, pero necesitas un poco de ayuda con los muebles. No tienes ganas de crear tus propios muebles desde cero. Una biblioteca es como ir a [Ikea](https://es.wikipedia.org/wiki/IKEA), muebles Troncoso o cualquier otra mueblería. Tu puedes elegir diferentes cosas para tu hogar - a lo mejor tienes ganas de una sala de piel y combinarla con un centro de jade. **Tú tienes el control**.

Un framework, por otro lado, es como comprar una casa de algún fraccionamiento o desarrollo residencial. Tienes opciones limitadas cuando se trata de **arquitectura y diseño**. En última instancia, el contratista tiene el control de la construcción de las casas y solo te pedirá tu opinión con respecto a cuestiones menores (con o sin alberca, con o sin jardín, garage para dos coches o uno, etc).

## Diferencia técnica

La diferencia técnica entre framework y library radica en un término llamado **inversión de control**.

Entendamos esta inversión de control con más detalle.

Cuando importas una biblioteca, debes llamar a los métodos o funciones específicos de tu elección, y depende de ti cuándo y dónde llamar a la biblioteca.

Aquí, tú estás a cargo del flujo.

Por otro lado, el framework es el que realiza la llamada a tu código y te proporciona algo de espacio para escribir detalles.

Entonces, mientras uses un framework, será él quien esté a cargo del flujo.

En la biblioteca, tu código llamará a la biblioteca, mientras que, en un framework, tu código será llamado por el framework.

## Restrictividad

A menudo escucharás que los frameworks y las bibliotecas se describen como **restrictivos** u **opinionated** (en inglés). Estos términos son en realidad subjetivos. Cuando la comunidad los utiliza, está intentando definir el nivel de libertad que tiene un desarrollador al estructurar su código.

Los frameworks son, relativamente, más restrictivos, ya que, por definición, la inversión del control requiere una concesión de libertad de diseño de aplicaciones.

## Conclusión

Aprender la diferencia entre framework y library es una de esas cosas que no necesariamente te vuelven un mejor desarrollador, pero que sí te vuelven un mejor desarrollador, ¿lo entiendes?

Espero que haya quedado clara la diferencia. De ser así, ¿por qué no te pones a prueba y **me dices en los comentarios** cuáles en esta lista son un biblioteca y cuáles un framework?

1. Vue
2. Angular
3. React
4. Express
5. Django
6. JQuery
7. Next
8. Gatsby
9. Axios
10. Redux
