---
type: tutoriales
slug: como-crear-pestanas-navegacion-react-native
enlaceyt: https://www.youtube.com/embed/WMOPvJot0yI
date: 2021-10-04T18:17:24.872Z
title: Cómo crear pestañas de navegación en React Native
tag:
  - React
  - JavaScript
autor: Adrián Salgado
introThumbnail: Un clásico de la navegación móvil - ¡aprende cómo implementarla
  en tu próxima aplicación!
publicoObjetivo: "El siguiente artículo asume que tienes conocimientos básicos
  sobre React y React Native. No obstante, podrás comprender gran parte del
  contenido si tienes experiencia con JavaScript o algún lenguaje similar. "
keyword: navegación pestañas react native
thumbnail: "https://firebasestorage.googleapis.com/v0/b/lasfito-blog.appspot.com/o/07-react-native-tabs.png?alt=media&token=92204dc5-5ebc-4e4f-ab68-0a89387a39da"
---

Hola, el día de hoy aprenderemos cómo implementar un sistema de navegación por pestañas (tabs) en React Native/Expo.

Cómo siempre, podrás revisar el código del tutorial en [este repositorio](https://github.com/lasfito/tutoriales/tree/master/07-navegacion-pesta%C3%B1as-react-native).

Sin mayor demora, ¡comencemos!

## Requisitos

1. Tener instalado [Node](https://nodejs.org/es/)
2. Tener instalado Expo-CLI. Si no lo tienes ejecuta `npm install --global expo-cli` dentro de tu terminal (no olvides `sudo` en caso de estar en Mac)

## Preparación de la aplicación

Como **primer paso** es necesario crear un proyecto de React Native/Expo.

Si no estás familiarizado con ninguna de estas dos tecnologías, puedes entender a React Native como el "framework" para crear aplicaciones nativas en Android y iOS; mientras que Expo es un "asistente" para crear aplicaciones en React Native.

Desde tu terminal ejecuta `expo init`, esto iniciará un asistente en pantalla.
Elige el nombre de tu aplicación y en las opciones que te muestre para proyecto elige la opción superior que dice "blank".

El **segundo paso** será instalar [React-Navigation](https://reactnavigation.org/) y ciertas dependencias necesarias para nuestro tutorial. Dentro de tu terminal ejecuta los siguientes comandos:

1. `npm install @react-navigation/native`
2. `expo install react-native-screens react-native-safe-area-context`
3. `npm install @react-navigation/native-stack`
4. `npm install @react-navigation/bottom-tabs`

Después de ello abre la carpeta del proyecto en tu editor favorito y estaremos listos para comenzar.

## Comprendiendo el flujo de navegación en React-Navigation

Antes de entrar de lleno al código es importante comprender cómo funcionará el flujo de navegación dentro de nuestra aplicación.

Nuestra aplicación tendrá 2 pestañas inferiores o bien podríamos llamarlas 2 "menús".
En este caso los menús/pestañas serán Home y Settings. El término que utilizaremos para referirnos a ellas será <kbd> Tab </kbd>

A cada Tab corresponderán distintos grupos de vistas. Por ejemplo, Home podremos encontrar una vista llamada Home1 y otra más llamada Home2. Y podremos alternar entre cada una de ellas. Quizá en Home1 encontremos un feed y en Home2 encontremos un buscador. ¡Qué sé yo! Lo que importa aquí es entender que el "grupo de vistas/secciones" será un <kbd>Stack </kbd> y que cada vista/sección/pantalla será una <kbd>Screen</kbd>.

De modo que tenemos algo más o menos así:

Screens -> Stacks -> Tabs

Y este será precisamente el orden y elementos que utilizaremos.

Desde el editor crearemos una carpeta llamada src y al interior crearemos dos carpetas más. La primera la llamaremos **screens** y la segunda **stacks**.

## Creando nuestras pantallas (screens)

Dentro de screens añadiremos todas las pantallas que necesitemos (4 para este tutorial).

```javascript
import React from "react";
import {View, Text, Button} from "react-native";

const HomeScreen1 = () => {
  return (
    <View>
      <Text>Este es el home 1</Text>
    </View>
  );
};

export default HomeScreen1;
```

Una vez que tengas todas tus pantallas listas (aconsejo añadirles "screen" en el nombre de cada archivo) es momento de agruparlas en **stacks**. Solo para referencia, nuestra carpeta screens luce así luego de crear las 4 pantallas:

screens
├ HomeScreen1.js
├ HomeScreen2.js
├ SettingsScreen1.js
└ SettingsScreen2.js

## Creando nuestros stacks

Dirijámonos a la carpeta stacks. Agruparemos nuestras 4 pantallas en 2 stacks, de modo que cada stack contendrá 2 pantallas (Ya lo sé, soy el rey de las matemáticas). Dado que crearemos un stack, debemos entender que este tipo de componente es distinto de los componentes tradicionales. Esto es lo que haremos:

1. Comenzaremos creando nuestro archivo _HomeStackScreen_, dentro de este archivo importamos React y React Native, también **createNativeStackNavigator** desde *"react-navigation/native-stack"\*\* y nuestras 2 *HomeScreens\*. La parte superior de nuestro archivo debería verse más o menos así:

```javascript
import React from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
```

createNativeStackNavigator es una función que nos regresa un componente vital para el funcionamiento de nustro stack. Es por ello que debemos guardar valor de esta función en alguna constante:

`const HomeStack = createNativeStackNavigator();
`

Después, utilizaremos HomeStack para crear el "wrapper" que indica que nuestro componente es un stack:

<HomeStack.Navigator> </HomeStack.Navigator>

Y al interior de él añadiremos nuestras pantallas (screens) de la siguiente manera:

<HomeStack.Screen name="Home1" component={HomeScreen1} />

Deberías terminar con algo similar a esto:

```javascript
import React from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={HomeScreen1} />
      <HomeStack.Screen name="Home2" component={HomeScreen2} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
```

**Nota:** Recuerda que puedes revisar el código en [este enlace](https://github.com/lasfito/tutoriales/tree/master/07-navegacion-pesta%C3%B1as-react-native)

Repite el mismo paso para el stack de settings. Tu carpeta debería lucir así:

stacks
├ HomeStackScreen.js
└ SettingsStackScreen.js

## Creando nuestros tabs (pestañas)

El último paso es crear un tab para cada stack. Para ello, dentro de _src_ crearemos un archivo llamado Tabs.js Un Tab es muy similar a un stack, con la diferencia de que en lugar de utilizar `createNativeStackNavigator`, importaremos y utilizaremos `createBottomTabNavigator` desde "@react-navigation/bottom-tabs". Adicionalmente, importaremos NavigationContainer desde "@react-navigation/native" y nuestros 2 stacks.

El comienzo de Tabs.js debería verse más o menos así:

```javascript
import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import SettingsStackScreen from "./stacks/SettingsStackScreen";
import {NavigationContainer} from "@react-navigation/native";
```

De manera similar que con los stacks, llamamos la función createBottomTabNavigator y la guardamos en alguna constante como Tab.

Después, utilizaremos Tab para crear nuestro "wrapper" <Tab.Navigator></Tab.Navigator>.

Y también para definir qué irá asociado con el tab:
<Tab.Screen name="HomeMenu" component={HomeStackScreen} />

Por último, envolvemos a <Tab.Navigator> con un <NavigationContainer></NavigationContainer>. Tu comoponente Tabs.js debiera verse más o menos así:

```javascript
import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import SettingsStackScreen from "./stacks/SettingsStackScreen";
import {NavigationContainer} from "@react-navigation/native";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeMenu" component={HomeStackScreen} />
        <Tab.Screen name="SettingsMenu" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
```

## Comprobando la aplicación

Como paso final, reemplaza el contenido de App.js e inserta nuestro componente <Tabs />

```javascript
export default function App() {
  return <Tabs />;
}
```

Desde la terminal ejecuta `expo start` y debiera abrirse en tu navegador una pestaña que indica que el ambiente local de desarrollo está disponible. En esta pestaña encontrarás un panel lateral para abrir tu aplicación en tu navegador y/o en algún emulador android/apple que **tengas instalado**. Si tienes algún emulador instalado puedes escogerlo, caso contrario te recomiendo elegir la opción del navegador por comodidad.

## Navegación entre pantallas

Si todo ha ido bien, al ejecutar tu app desde el navegador deberías poder tocar cada tab en la parte inferior y con ello cambiar entre Home y Settings. Sin embargo, notarás que solo se muestra la pantalla Home1 y Settings1, siendo que también teníamos incluida una pantalla Home2 y Settings2.

Esto se debe a que dentro de un stack siempre veremos de forma predeterminada la pantalla que hayamos declarado primero. Para ver todas las demás es necesario indicar un cambio de navegación.

Para ello iremos al archivo de HomeScreen1 e importaremos {useNavigation} desde "@react-navigation/native". Después, al igual que con el StackNavigator y TabNavigator, ejecutamos este "gancho" (hook) y lo guardamos en la constante navigation al interior del componente de HomeScreen1.

Con este proceso podemos indicar cambio de navegación hacia otras pantallas.

Por ejemplo, añade un botón en el componente y en el atributo onPress ejcutaremos la siguiente línea `navigation.navigate("Home2")`.

El componente de HomeScreen1 debiera verse así:

```javascript
import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Este es el home 1</Text>
      <Button
        title="Ir a home 2"
        onPress={() => navigation.navigate("Home2")}
      />
    </View>
  );
};

export default HomeScreen1;
```

Lo que acabamos de hacer es indicar que queremos navegar hacia la pantalla llamada Home2.
Recuerda que en nuestro tutorial llamamos así a la pantalla desde nuestro archivo de HomeStackScreen:

```javascript
<HomeStack.Navigator>
  <HomeStack.Screen name="Home1" component={HomeScreen1} />
  <HomeStack.Screen name="Home2" component={HomeScreen2} />
</HomeStack.Navigator>
```

## Conclusiones

Y es así como podemos utilizar _React-Navigation_ para crear un sistema de navegación por pestañas/tabs. Puedes añadir tantas pantallas, stacks y tabs como desees, pero de momento esto te servirá como base inicial.

Te comiendo echar un vistazo a la documentación de [React-Navigation](https://reactnavigation.org/docs/getting-started) y si tienes alguna duda puedes escribirme en los comentarios aquí abajo.
