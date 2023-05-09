# Práctica 2. Introducción a JavaScript.
### Factor de ponderación: 4

### Objetivos
Los objetivos de esta práctica son:
* Ser capaz de realizar programas simples en JavaScript en el entorno Linux de la VM de la asignatura usando
  Node.js
* Conocer la plataforma Jutge para utilizarla como fuente de ejercicios de programación
* Conocer y poner en práctica las recomendaciones de la Guía de Estilo de Google para JavaScript

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El alumnado ha de acreditar que es capaz de resolver problemas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la guía de estilo de
  referencia en la asignatura
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran 
  alojadas en repositorios privados de GitHub
* El alumnado ha de acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

### Jutge
Cuando se inscriba Ud. en el curso `PAI - 2022-2023` de 
[Jutge](https://jutge.org/),
hallará una lista de problemas de programación de diferente dificultad.

El objeto de esta práctica es que comience Ud. a desarrollar algunos de esos ejercicios y resuelva todos los
que sea capaz: cuantos más resuelva más mejorará sus capacidades como programadora.

A la hora de resolver los problemas que se le proponen, trate de usar exclusivamente las características de
JavaScript que ha estudiado en clase o bien en el material que se le ha pedido que estudie.

Descarte soluciones avanzadas y nunca utilice código que no sea Ud. capaz de comprender y explicar a otra
persona.

En el directorio `first-numbers-P37500` de esta práctica encontrará el fichero `first-numbers-P37500.js`
que es una posible solución al problema 
[P37500 First numbers](https://jutge.org/problems/P37500_en)
de Jutge.

Utilice ese programa como ejemplo de cómo debieran ser los programas que desarrollará en PAI.

Para ejecutar el programa, comience por instalar en el directorio base de su proyecto los paquetes 
necesarios:

```
$ npm install
```
y observe el efecto de la ejecución del comando anterior.

A continuación ejecute el programa utilizando `node`:

```
node first-numbers-P37500.js
```

En el programa observe los siguientes aspectos:
* El nombre que se le ha puesto al fichero del programa: es un nombre descriptivo.
* El comentario de cabecera del fichero explica varias cuestiones relativas al programa.
* La sentencia `use strict;`. Se incluirá en todos los programas JS que realice. Estudie esa sentencia en el
[tutorial de referencia de la asignatura](https://javascript.info/strict-mode#use-strict).
* La sentencia `require` se utiliza para cargar un módulo (en este caso un módulo *CommonJS*). Estudie 
  los módulos de JS en el
[Capítulo 10 de Eloquent JavaScript](https://eloquentjavascript.net/10_modules.html). Inicialmente se
trabajará con módulos *CommonJS* y más adelante se usarán en la asignatura los *ES modules*.
La dependencia de este programa con respecto a ese módulo se indica en el fichero `package.json` que se
encuentra en el directorio raíz del proyecto.
Estudie el artículo
[El archivo package.json](https://lenguajejs.com/npm/administracion/package-json/) 
para conocer la finalidad y estructura de ese fichero.
* Todas las sentencias de código del programa se encuentran encapsuladas (incluídas) en diferentes funciones.
  De este mismo modo se deberá proceder en todos los programas que se diseñen en la asignatura.
* En JS la función "de entrada" de un programa no tiene porqué llamarse *main()*.
Aquí se ha usado ese nombre por seguir la tradición, pero puede cambiar el nombre de esa función de entrada.
La comprobación `require.nain === module` (que no está disponible para módulos ES) se utiliza en este programa
para indicar que el mismo se va a ejecutar directamente desde *Node.js* (y no en un navegador).
* El código del programa cumple los requisitos de estilo que se utilizan en PAI.

### Guía de Estilo
Los programas que escriba han de seguir **fielmente** todas las indicaciones de la 
[Guía de estilo de Google para JavaScript](https://google.github.io/styleguide/jsguide.html).
Estudie esa guía omitiendo todo lo que se refiera a características avanzadas del lenguaje que no haya Ud.
estudiado aún.
Preste particular atención a los siguientes aspectos:
* [Reglas](https://google.github.io/styleguide/jsguide.html#naming-rules-common-to-all-identifiers)
  para nombres (identificadores) de diferente tipología (constantes, variables, parámetros, funciones, ...).
  *Todos* los identificadores que utilice en sus programas han de ser significativos y
  en particular, nunca se utilizarán identificadores "de una sola letra" salvo, tal vez, de forma excepcional
  (contador en un bucle).
  Siga los consejos que se indican en esta entrada del
  [Google Testing Blog](https://testing.googleblog.com/2017/10/code-health-identifiernamingpostforworl.html)
* [Formateo](https://google.github.io/styleguide/jsguide.html#formatting) del código
* Utilización de los
  [espacios en blanco](https://google.github.io/styleguide/jsguide.html#formatting-horizontal-whitespace)
* Comentarios de ["cabecera"](https://google.github.io/styleguide/jsguide.html#jsdoc-top-file-level-comments) para sus programas. 
Esa guía de estilo (junto en el futuro con la de TypeScript) es la de referencia en la asignatura y la 
conformidad de todos los programas presentados como prácticas es un requisito en la evaluación de los mismos.

### Comentarios de cabecera
Una buena práctica en el ámbito de la documentación del código consiste en incluir un bloque de comentarios al comienzo
de todos los ficheros de un proyecto de desarrollo de software.

Para este aspecto se recomienda utilizar una "plantilla" base de comentarios que incluya información tal
como: Universidad, Titulación, Asignatura, Proyecto, Autor, Fecha, ... que irá siempre seguido de una
descripción más o menos exhaustiva del programa en cuestión

El siguiente es un ejemplo de comentario de bloque que debería incluirse al comienzo de todos los ficheros
(`*.js`) de sus proyectos de programación:

```
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Alan Turing
 * @since Feb 16 2022
 * @desc First numbers
 *       The program reads a number n, and prints all numbers between 0 and n.
 * @see {@link https://jutge.org/problems/P37500_en}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
```

Todo fichero debiera contener (etiqueta `@desc`) una breve descripción del contenido del fichero.
Si fuera necesario se incluirá a continuación una descripción más detallada.
Obviamente el comentario específico así como el nombre del fichero debieran particularizarse para cada caso
concreto.

Incluya siempre un bloque de comentarios similar al anterior en **todos** sus ficheros.
Preste cuidado a la práctica habitual de "copiar y pegar" estos comentarios de un proyecto a otro, puesto que parte de la
información cambiará.

En proyectos de desarrollo de software de cierta entidad es común que este bloque de comentarios de cabecera de los ficheros
incluya además la licencia de software bajo la que se publica el programa en cuestión.
A título de ejemplo, 
[consulte el texto](https://www.gnu.org/licenses/gpl-3.0.html)
que se debiera incluir en los ficheros para publicarlos bajo licencia GPLv3.


### The modern mode, "use strict"
Incluya siempre en sus programas la directiva 
['use strict';](https://javascript.info/strict-mode)


### Consideraciones adicionales
El programa `first-numbers-P37500.js` utiliza el módulo *readline-sync* para leer entrada desde el teclado de forma síncrona.
Estudie la documentación de ese módulo.

Alternativamente los programas podrían (y así se recomienda hacerlo para los ejercicios de Jutge) tomar la
entrada a través de sus parámetros en línea de comandos.

Estudie 
[esta referencia](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) 
para aprender a trabajar con parámetros pasados en línea de comandos a un programa ejecutado con Node.js.

Entre los ejemplos de código que se usan en la asignatura puede hallar
[este ejemplo](https://github.com/ULL-ESIT-PAI-2022-2023/PAI-class-code-examples/blob/master/src/T1A-IntroJS/command-line-parameters.js)
que ilustra cómo pasar parámetros por línea de comandos.

Al igual que se hace en el programa `first-numbers-P37500.js`, organice sus programas en torno a diversas
funciones.
Mientras que en Javascript no tiene porqué haber función `main()` al estilo de C o C++, sí se recomienda que
los programas de la asignatura usen una función (se puede usar *main()* o cualquier otro identificador) que
será el punto de entrada inicial al programa.

### Ejercicios de Jutge
Desarrolle programas que solucionen los siguientes problemas:

1. [P48107](https://jutge.org/problems/P48107) Integer division and remainder of two natural numbers
2. [P29973](https://jutge.org/problems/P29973) Triangle
3. [P90615](https://jutge.org/problems/P90615) Maximum of three integer numbers
4. [P70955](https://jutge.org/problems/P70955) How many seconds are they?
5. [P34279](https://jutge.org/problems/P34279) Add one Second.
6. [P51352](https://jutge.org/problems/P51352) Elementos.
7. [P51126](https://jutge.org/problems/P51126) Intervals (I)
8. [P33839](https://jutge.org/problems/P33839) Sum of Digits 
9. [P97969](https://jutge.org/problems/P97969) Counting a's (I)
10. [P80660](https://jutge.org/problems/P80660) The sequence of Collatz

### Referencias
* [JavaScript Fundamentals](https://javascript.info/first-steps)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2022-2023/PAI-class-code-examples/tree/master/src)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
* [CommonJS vs ES Modules](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/)
* [The Modern JavaScript Tutorial](https://javascript.info/)
* [Eloquent JavaScript](https://eloquentjavascript.net/)
