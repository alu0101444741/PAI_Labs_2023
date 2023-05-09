# Práctica 13. La arquitectura MVC. El juego Halma
### Factor de ponderación: 10

### Objetivos
Los objetivos de esta tarea son poner en práctica:
* El diseño de una aplicación conforme al patrón MVC.
* Conceptos de Programación orientada a eventos en TypeScript.
* Conceptos de Programación Gráfica en TypeScript usando la API Canvas.
* Metodologías y conceptos de Programación Orientada a Objetos en TypeScript.
* Principios y Buenas prácticas de programación Orientada a Objetos.
* El uso de elementos HTML básicos.
* El uso de algunas propiedades básicas de CSS para dotar de estilo a una página web simple.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El comportamiento del programa debe ajustarse a lo descrito en este documento
* Capacidad de la programadora de introducir cambios en el programa desarrollado
* Se valorará una correcta implementación del patrón MVC y la conformidad a los principios de la OOP.
* Se acredita conocimiento y puesta en práctica de principios y buenas prácticas de programación orientada a objetos
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Ser capaz de desarrollar programas simples en TypeScript en el entorno Linux de la VM de la asignatura usando
  `ts-node`
* Ser capaz de generar documentación para sus programas TS utilizando
  [TypeDoc](https://typedoc.org/)
  y de visualizar dicha documentación en un servidor web
* Acreditar que conoce las etiquetas de 
  [JSDoc](https://jsdoc.app/)
* El alumnado debe ser capaz de resolver problemas tanto en JS como en TS en la plataforma Exercism subiendo sus soluciones a la misma
* Ser capaz de desarrollar tests unitarios para sus programas utilizando
  [Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
  [ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code
* El alumnado ha de acreditar que es capaz de desarrollar programas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de las Guías de Estilo de Google para 
[TypeScript](https://google.github.io/styleguide/tsguide.html)
y/o
[JavaScript](https://google.github.io/styleguide/jsguide.html)
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio Code

### Indicaciones de caracter general
La aplicación que desarrolle ha de ser orientada a objetos.
Ponga en práctica en su desarrollo los fundamentos, principios y buenas prácticas de la OOP así como los
conocimientos que haya adquirido en el uso de patrones de diseño.

Configure adecuadamente ficheros `package.json` y `tsconfig.json` en el directorio raíz de su ejercicio, 
de modo que ejecutando `npm install` queden instaladas todas las dependencias del proyecto.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos públicos.

Utilice un fichero distinto para el código de cada una de las clases que intervienen en su programa.

Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

Configure para la práctica una página web que sirva de índice para mostrar la documentación generada por
Typedoc para esta práctica.

Todo el código estará ubicado en el directorio `src` del proyecto. Use subdirectorios de éste si le resulta conveniente.

Antes de comenzar a desarrollar su programa dedique el tiempo necesario a diseñar la estructura de clases que
utilizará en su programa, así como las relaciones existentes entre las mismas.
Desarrolle un diagrama UML para esas clases, que ha de añadir a la página índice de esta práctica.
Asegúrese de la corrección de su diagrama.
Una aplicación para la realización de diagramas UML como
[Mermaid](https://mermaid.live/edit#pako:eNptkU1PwzAMhv9KlBOI9Q9UuyC2SRx22m2KhNzEdFbzAfnQBKP_nbSlYXT4ZD-OX72xL1w6hbzmUkMIG4LWgxGW5Xi0ZECz9VdVsU2S3S3dUTjd0iM2Hv7gmj2QjQxaXOJD9GRb1qJV6K-bw0jYg8np3f2iYSDiDEfbo73LBFgRbRC6J6edL41wJjMP5vI9gezmur_WGz5W9KrBe6BPfLY7xFiwBLuF-O_8uIJfQ41zmlF4OZNWBfpkF7Nz8BU36A2QyncZVQSPJzQoeJ1Tha-QdBRc2D4_TW8q72OrKDrP6-gTrjik6A4fVs719ObnuhPsvwES3pny)
puede resultarle útil para esta finalidad, aunque puede usar cualquier otro programa que conozca, 
o simplemente papel y bolígrafo.

Realice, como siempre, un diseño incremental del programa comprobando cada una de las funcionalidades que añade, siguiendo un
desarrollo TDD.

### El juego Halma
Halma es un antiguo juego de mesa del cual existen muchas variantes.
La aplicación que se propone crear es una versión para jugar en solitario con 9 piezas en un tablero de 9x9. 
Al comienzo del juego, las piezas se sitúan formando un cuadrado de 3x3 en la esquina inferior izquierda del tablero. 
El objetivo del juego es mover todas las piezas para que formen un cuadrado de 3x3 en la esquina superior derecha 
del tablero, en el menor número de movimientos.

En 
[esta página](https://diveinto.html5doctor.com/canvas.html#halma)
puede consultar las reglas del juego y dispone asimismo de 
[otra página](https://diveinto.html5doctor.com/examples/canvas-halma.html)
en la que puede jugar interactivamente.
El código fuente de la aplicación está
[también disponible](https://diveinto.html5doctor.com/examples/halma.js).

En esta práctica se propone desarrollar una aplicación web `halma.ts`.
La aplicación se diseñará utilizando clases que modelen el juego e implementen el patrón MVC.
Antes de proceder al desarrollo, tómese el tiempo necesario para identificar objetos, clases, métodos y
relaciones entre estas entidades.

### Interfaz gráfica del programa

La visualización de la ejecución del programa se realizará a través de una página web alojada
en la máquina IaaS-ULL de la asignatura y cuya URL tendrá la forma:

[1] `http://10.6.129.123:8080/einstein-albert-halma.html`

en la que se incluirá un elemento HTML canvas para el juego.
Sustituya *Albert Einstein* por su nombre y apellido en la URL de su página
y la dirección IP anterior por la correspondiente a su máquina IaaS.

Utilice código HTML y CSS para lograr una página funcional y visualmente correcta.

Del mismo modo que en la 
[página de referencia de Halma](https://diveinto.html5doctor.com/examples/canvas-halma.html)
su página debiera mostrar en todo momento el número de movimientos que se han realizado.

Diseñe asimismo otra página HTML simple 

[2] `http://10.6.129.123:8080/index.html`

que sirva de "página índice" para los ejercicios de la sesión de evaluación de la práctica.
La página [1] será uno de los enlaces de [2] y a su vez [1] tendrá un enlace "Home" que apunte a [2].
Enlace también en la página índice [2] la página que contiene la documentación de su proyecto generada con
Typedoc.

Incluya una tercera página

[3] `http://10.6.129.123:8080/uml.html`

que muestre el diagrama UML de las clases que intervienen en su aplicación.

Utilice lo que haya aprendido de CSS para dotar de estilo propio a las páginas HTML que
desarrolle.

### Presentación de resultados de todas sus prácticas
Esta es la última práctica de la asignatura en el este curso.
Al efecto de tener todas sus prácticas centralizadas en un único repositorio, organice todas las prácticas que
ha realizado en la asignatura (las haya evaluado o no) en un único proyecto que las incluya todas.
Organice convenientemente el código y recursos de cada práctica en directorios diferenciados dentro del
proyecto.
Consiga que todas aquellas prácticas que hayan consistido en el desarrollo de una aplicación web sean
accesibles a través de una web `prácticas-PAI-2022-2023.html` accesible desde una URL pública en su máquina IaaS de la
asignatura.

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

## Referencias
* [Halma](https://en.wikipedia.org/wiki/Halma)
* [Modelo-vista-controlador](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2022-2023/PAI-class-code-examples)
* [The Modern Javascript Tutorial](https://javascript.info)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [ESLint](https://eslint.org/)
* [TypeDoc](https://typedoc.org/)
* [JSDoc](https://jsdoc.app/)
