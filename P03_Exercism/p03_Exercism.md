# Práctica 3. Programas simples. Exercism.
### Factor de ponderación: 4

### Objetivos
Los objetivos de esta práctica son:
* Conocer y configurar el entorno de trabajo de Exercism
* Ser capaz de desarrollar programas simples en JavaScript en el entorno Linux de la VM de la asignatura usando
  Node.js

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El alumnado debe ser capaz de subir la solución a un problema de Exercism a esa plataforma
* El alumnado ha de acreditar que es capaz de desarrollar y ejecutar programas simples de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la Guía de Estilo de Google
  para Javascript
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* El alumnado ha de acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

## Exercism
[Exercism](https://exercism.io/) 
es una plataforma orientada a aprender a programar o también a mejorar las
capacidades de cualquier programadora.
El objetivo de la plataforma es servir como medio para aprender a programar en un determinado lenguaje, y para ello se propone
hacerlo mediante la resolución de ejercicios que otros usuarios han planteado. 
Lo que se persigue es que tanto quien resuelve el problema como quien lo planteó aprendan al mismo tiempo. 
Además, la interacción con el resto de la comunidad podrá llevar a debates para determinar cuál sería la mejor solución para un determinado problema.

La plataforma se basa en una una aplicación de línea de comandos disponible para diferentes sistemas
operativos (Linux, Mac, Windows).
Usando esa aplicación, un usuario puede descargar una serie de ejercicios de programación disponibles en la
plataforma y realizar los correspondientes programas hasta que consiga pasar los diferentes tests unitarios que se
suministran con cada ejercicio.

La plataforma puede ser usada en "modo práctica", en cuyo caso no existe la opción de mentorización (solicitar
que una experta le ayude con sus ejercicios), pero aún
así merece la pena practicar los múltiples ejercicios que hallará en la plataforma.

### Primeros pasos en Exercism
Comience por [registrarse en Exercism](https://exercism.io/users/sign_up). 
usando su cuenta de GitHub, si aún no dispone de una cuenta en la plataforma.
Una vez disponga de una cuenta, configure lo básico de la misma y elija un "track" (un lenguaje) en el que
desee practicar.
Comience por elegir el track correspondiente a JavaScript.

Propóngase a continuación resolver el problema 
["Hello World"](https://exercism.org/tracks/javascript/exercises/hello-world).
En la página de ese problema (o de cualquier otro) hallará Ud. un enlace que indica 
[Learn more about solving exercises locally](https://exercism.org/docs/using/solving-exercises/working-locally).
Si sigue ese enlace le llevará a la página *Working Locally* que explica cómo trabajar con la plataforma en su
máquina local.
Desde esa página (*Installing the CLI*) se accede al enlace
[Welcome to the Exercism installation guide!](https://exercism.org/cli-walkthrough)
donde hallará instrucciones sobre cómo instalar `Exercism` en su máquina.
En este documento se propone instalarla en la máquina virtual de la asignatura.
Eligiendo la opción *Linux* y a continuación la opción *Using snap* se le pedirá que ejecute
```
$ sudo snap install exercism
```
Ese comando instalará en primer lugar `snap` y a continuación `exercism`, que es lo que se persigue.
También en esa página se indica que se compruebe que la instalación es correcta con el comando
```
$ exercism version
```
[`snap`](https://blogubuntu.com/que-es-ubuntu-snap) es un mecanismo alternativo al ya conocido
`apt-get install` para instalar aplicaciones en Ubuntu Linux.
Si quiere Ud. saber más sobre `snap` puede consultar
[esta referencia](https://snapcraft.io/docs/getting-started),
aunque ello no es necesario para el trabajo que se propone realizar con Exercism.

Una vez instalada la aplicación `exercism` el siguiente paso es configurar su interfaz de comandos (CLI).
Para ello se pide que se ejecute:
```
$ exercism configure --token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
donde el *token* que figura en el comando anterior se encuentra (es específico de cada usuario) en la 
[página de configuración](https://exercism.io/my/settings) 
de la cuenta de usuario que se ha creado.
Basta copiar de esa página el token y colocarlo en el comando anterior.

El comando una vez ejecutado indica:
```
You have configured the Exercism command-line client:

Config dir:                       /home/usuario/snap/exercism/5/.config/exercism
Token:         (-t, --token)      xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Workspace:     (-w, --workspace)  /home/usuario/snap/exercism/5/exercism
API Base URL:  (-a, --api)        https://api.exercism.io/v1
```
A continuación se puede elegir un problema para pasar a resolverlo.
Se propone, como ya se ha dicho, elegir el problema 
["Hello World"](https://exercism.org/tracks/javascript/exercises/hello-world).
En la página de ese problema figura una descripción precisa del problema y en la parte derecha de
esa página figuran las instrucciones para:
* Download. Descargar el problema mediante el comando `exercism download --exercise=hello-world --track=javascript`
* Solve. Para resolver el problema se propone usar Visual Studio Code
* Submit. El comando para subir a la plataforma la solución que el usuario proponga.

Si se ejecuta el comando para descargar el problema el sistema responde:
```
exercism download --exercise=hello-world --track=javascript

Downloaded to
/home/usuario/snap/exercism/5/exercism/javascript/hello-world
```
indicando el directorio donde ha colocado el código necesario para trabajar en ese problema.

Revise los ficheros que exercism ha descargado.
En particular el fichero `HELP.md` contiene instrucciones sobre cómo instalar las dependencias del proyecto usando `npm` o 
[yarn](https://yarnpkg.com/)
(otro gestor de paquetes para JS), la forma de pasar los tests del problema 
e instrucciones sobre cómo enviar una solución a la plataforma.

### Solución del ejercicio

El siguiente paso consiste en editar el programa (en el caso del problema *Hello World* el fichero a editar es
`hello-world.js`).
Edite ese fichero hasta que considere que tiene una versión operativa.

Si se analizan los tests del problema *Hello World* que figuran en el fichero `hello-world.spec.js`
se observa que la función que los test evalúan es `hello()`.

En la plantilla que Exercism ofrece para la función, ésta se implementa como:

```js
export function hello() {
  return 'Goodbye, Mars!';
}
```

Además de la función que evalúan los tests (`hello()` en el caso de este problema) puede Ud. usar cuantas
otras funciones crea conveniente.
La solución de un determinado problema de Exercism no tiene porqué basarse en una única función (depende de la complejidad del programa).
El módulo que contiene la solución (fichero `hello-world.js`) solo exporta (de ahí la sentencia `export`)
hacia otros módulos las funciones necesarias para evaluar los tests.

Para los módulos, Exercism utiliza 
[sintaxis ES6](https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7)
mientras que NodeJS utiliza sintaxis 
[CommonJS](https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG).
Es por ello que el programa que se realice no puede ejecutarse directamente en node.
Si se ejecuta, en el caso del problema *Hello World* con Node se obtiene un error:

```
node hello-world.js

export const hello = () => {
^^^^^^

SyntaxError: Unexpected token 'export'
```

Para poder ejecutar los programas de Exercism con la sintaxis de módulos de ES6, una posibilidad es usar 
[babel-node](https://babeljs.io/docs/en/babel-node).

[Babel](https://babeljs.io/)
es un 
[transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)
de Javascript. 
Babel se suele utilizar para escribir código JS con características modernas que pudieran no estar
contempladas en NodeJS, como ocurre con la sintaxis ES6 para módulos.

El fichero `package.json` del proyecto Hello World de Exercism ya contempla la dependencia de Babel, de modo
que el paquete habrá sido instalado para el proyecto, de modo que el programa puede ejecutarse usando:
```
npx babel-node hello-world.js
```

pero previamente habrá que incluir la línea 
```
{

  "type": "module"

}
```
en el fichero `package.json` para permitir la carga de módulos ES6.

A partir de este punto se debiera desarrollar de forma incremental la solución del problema planteado y se
puede usar `console.log()` para evaluar provisionalmente la corrección de los resultados que se están
obteniendo.

### Ejecución de los tests para un determinado problema
Una vez finalizado su programa, el siguiente paso consiste en pasar (superar) los tests del código.
Cada ejercicio de Exercism va acompañado de una serie de tests que el programa debe superar para ser
considerado válido.

Tal como se explica en la página [Running the Tests](https://exercism.io/tracks/javascript/tests), cada problema va
acompañado de sus tests unitarios.

Para comprobar su solución ejecute:

```
$ npm run test
```

Cuando su solución al problema pase todos los tests y esté Ud. satisfecha con la misma, puede remitirla a la
plataforma.
Utilice para ello el comando `exercism submit` que hallará Ud. en la página correspondiente al problema.
Una vez que haya enviado su solución a Exercism recibirá un mensaje similar a este:
```
Your solution has been submitted successfully.
You can complete the exercise and unlock the next core exercise at:

https://exercism.io/my/solutions/xxxx
```
A partir de este punto puede ya ver las soluciones que otras usuarias hayan dado al mismo problema o bien
avanzar con otros problemas de ese mismo "track".

### Ejercicios de Exercism
Siga a continuación con el conocido problema
[Two Fer](https://exercism.org/tracks/javascript/exercises/two-fer)
(*Two for one*).
En este caso la función que hay que codificar es una
[arrow function](https://javascript.info/arrow-functions-basics):
```js
export const twoFer = () => {
  throw new Error('Remove this statement and implement this function');
};
```

La plantilla que proporciona Exercism para esta función, lanza un error utilizando el operador
[Throw](https://javascript.info/try-catch#throw-operator).
Esta primera versión puede ser útil para aprender cómo lanzar una excepción en un programa Javascript, que
sería la forma más adecuada de abortar su ejecución ante una situación de error.

[Collatz Conjecture](https://exercism.org/tracks/javascript/exercises/collatz-conjecture)
es otro ejercicio que no debiera costarle resolver puesto que ya lo ha resuelto en Jutge.

[Esta página](https://exercism.org/tracks/javascript/concepts) 
de Exercism muestra un posible itinerario de aprendizaje que podría Ud. seguir para ganar experiencia con
Javascript.
Los diferentes programas de la plataforma se van desbloqueando conforme va Ud. resolviendo problemas cada vez
más complejos.

Para cubrir los objetivos de esta práctica, resuelva al menos **5 problemas de la plataforma** aparte de los
anteriores y a partir de ese punto, desarrolle todos los ejercicios de Exercism que sea capaz.

## Ejercicios de Jutge
Desarrolle programas que solucionen los siguientes problemas:

1. [P11916](https://jutge.org/problems/P11916_en) Approximation of e
2. [P67268](https://jutge.org/problems/P67268_en) Reverse of sequences
3. [P50497](https://jutge.org/problems/P50497_en) Is Palindrome
4. [P76024](https://jutge.org/problems/P76024_en) Sum of fractions
5. [P17179](https://jutge.org/problems/P17179_en) Statistical measures

## Referencias
* [Exercism](https://exercism.io/)
* [JavaScript Fundamentals](https://javascript.info/first-steps)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2022-2023/PAI-class-code-examples.git)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
