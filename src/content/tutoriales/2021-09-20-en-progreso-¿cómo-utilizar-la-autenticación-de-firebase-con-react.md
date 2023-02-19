---
type: tutoriales
slug: como-utilizar-autenticacion-firebase-react
enlaceyt: https://www.youtube.com/embed/znf4CYedrJ4
date: 2021-09-20T22:15:16.561Z
title: "Cómo utilizar la autenticación de Firebase (con React) "
tag:
  - Firebase
  - React
autor: Adrián Salgado
keyword: autenticación firebase react
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/05-firebase-autenticacion-thumb.png?alt=media&token=8aa0f487-08a1-4099-b7e0-f7c781d7403b"
---

¡Hola, qué tal!

En este tutorial aprenderemos a utilizar el servicio de autenticación que Firebase ofrece. Para ello crearemos una mini-aplicación web con React y el objetivo es que un usuario pueda:

1. Crear una cuenta con correo y contraseña
2. Iniciar sesión en su cuenta con correo y contraseña
3. Acceder a contenido disponible solo para usuarios con sesión iniciada
4. Que la sesión persista a pesar de actualizar (refrescar) la página
5. Cerrar sesión

#### Repositorio y consideraciones

Antes de comenzar, es necesarios que sepas lo siguiente:

a) El código del tutorial lo encuentras en [este repositorio](https://github.com/lasfito/tutoriales/tree/master/05-firebase-autenticacion)
b) La versión escrita del tutorial es más concisa que el video. Por lo tanto, si requieres información más explicita debes ver el video que encuentras en la parte superior de este artículo.
c) Cierto conocimiento mínimo sobre React es necesario

## Primeros pasos

Antes de meternos de lleno al código y comenzar a programar es necesario realizar los siguientes pasos.

### 1. Crear proyecto en Firebase

Como era de esperarse, necesitaremos un proyecto en Firebase. Para crear uno dirígete a la [consola de Firebase](firebase.google.com), inicia sesión y colocále uno nombre.

### 2. Configura el proyecto de Firebase

Una vez creado el proyecto tendrás acceso a un panel lateral en donde encontrarás los servicios/módulos de Firebase. Desde ahí activa el servicio de autenticación y de entre la lista escoge correo. Al hacer clic en correo se abrirá un _modal/pop-up_ (¿por qué no tenemos palabras en español para esto?) en el cual tendrás que activar la casilla referente a **activar**.

![](/assets/captura-de-pantalla-2021-09-20-a-la-s-21.49.04.png)

Después, crea una instancia de Firestore y colócala en modo prueba.

### 3. NPX React

Desde tu terminal ejecuta <samp> npx create-react-app tu-proyecto </samp> para crear un proyecto de React. Una vez que se haya creado accede a él desde tu editor favorito (en mi caso utilizo VS Code).

## Conexión con Firebase

### 1. Firebase Init & Apps:Create

Para vincular React con Firebase es necesario correr dos comandos en la terminal. El primero es <samp> firebase init </samp> que nos va a preguntar los servicios/módulos que queremos utilizar. Dado que es obligatorio escoger uno por lo menos y como autenticación no lista entre las opciones, escogeremos firestore (de ahí que antes hayamos creado una instancia de la consola de firebase)

El segundo comando a correr es <samp> firebase apps:create </samp>, el cual nos preguntará que tipo de aplicación queremos crear. Como respuesta escogemos web y esperamos a que la terminal termine de procesar y nos genere un nuevo comando en pantalla.

Copiamos y pegamos el comando generado, y al ejecutarlo nos imprimirá en pantalla las credenciales de acceso para nuestra aplicación/proyecto. Copia esas credenciales y pégalas en un nuevo archivo con extensión js.

### 2. Archivo de credenciales

Las credenciales que hayas pegado en el nuevo archivo - asígnalas a una constante llamada app que además lleve el prefijo export. En ese mismo archivo importa firebase y el módulo de autenticacion. Más o menos así:

```javascript
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  projectId: "fb-auth-tutorial-2f164",
  appId: "1:802556503334:web:cba5a927f71ed9b5d9cde7",
  storageBucket: "fb-auth-tutorial-2f164.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyCsVeUq48zyoA0RrZj-fPHS-teoDyEOlGY",
  authDomain: "fb-auth-tutorial-2f164.firebaseapp.com",
  messagingSenderId: "802556503334",
});
```

No olvides instalar firebase con <samp> npm install firebase </samp>
Cuando algún componente requiera acceder a los servicios de firebase, deberás importar este archivo y tendrás todo listo.

## ¿Usuario con sesión iniciada o no?

Desde app.js establecemos un **state** en el cual se guarde la sesión de los visitantes. Por defecto será  `null`. Asimismo, si no existe sesión enviaremos al visitante a una pantalla de registro/inicio de sesión. Caso contrario, le mostraremos el "home".

```javascript
function App() {
  const [usuario, setUsuario] = React.useState(null);

  return <>{usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}</>;
}
```

Presta atención a cómo pasamos el setUsuario como prop al componente de Logueo.

## Pantalla de registro

Dado que en esta pantalla recibiremos a gente que inicia sesión o que se registra, crearemos un **state** booleano para determinar el propósito de la visita. Tal estado determinará el contenido de nuestros texto.

A la vez, tendremos un formulario en el cual recopilaremos correo y contraseña, mismos que serán tomados por una función "submitHandler". En esta función crearemos una cuenta en Firebase o bien, si el estado lo indica, iniciaremos sesión:

```javascript
import React from "react";
import {app} from "./fb";

const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div>
      <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField"> Correo </label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField"> Contraseña </label>
        <input type="password" id="passwordField" />
        <button type="submit">
          {" "}
          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
        </button>
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿No tienes cuenta? ¡Regístrate gratis!"}
      </button>
    </div>
  );
};

export default Logueo;
```

Dado que recibimos la función para actualizar el _state_ a través de los props, app detecta el cambio y al iniciar sesión/registrarnos nos da acceso al contenido que hayamos colocado en Home.

## El problema del "refresh"

Hay un problema con nuestra aplicación. Dado que en app inicializamos el _state_ con un valor de `null`, cada vez que actualicemos la página "perdemos" nuestra sesión ante los ojos de React. Aunque lo cierto es que la sesión con firebase perdura.

Para solucionar esto utilizaremos un useEffect para que cada que se monte el componente, revisemos si hay sesión iniciada con firebase y con ello cambiar el estado local de la aplicación.

```javascript
useEffect(() => {
  app.auth().onAuthStateChanged((usuarioFirebase) => {
    console.log("ya tienes sesión iniciada con:", usuarioFirebase);
    setUsuario(usuarioFirebase);
  });
}, []);
```

Asimismo, añadimos un botón para poder cerrar sesión desde el componente de Home:

```javascript
const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div>
      <h1>Bienvenido, sesión iniciada, wapetón.</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
```

## Conclusiones

Es así como creamos una aplicación básica con el servicio de autenticación de Firebase. A partir de aquí existen muchas posibilidades que puedes descubrir por ti o a través de futuros tutoriales.
