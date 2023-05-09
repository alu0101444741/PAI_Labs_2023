# Práctica 13. Programación Gráfica Orientada a Eventos. Modelo-Vista-Controlador. Juego de Poker.
### Factor de ponderación: 10

### Objetivos
Los objetivos de esta tarea son poner en práctica:
* Una primera aproximación al diseño de una aplicación conforme al patrón MVC 
* Conceptos de Programación orientada a eventos en JavaScript.
* Conceptos de Programación Gráfica en JavaScript usando la API Canvas.
* Metodologías y conceptos de Programación Orientada a Objetos en JavaScript.
* Principios y Buenas prácticas de programación Orientada a Objetos.
* El uso de elementos HTML básicos.
* El uso de algunas propiedades básicas de CSS para dotar de estilo a una página web simple.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen.
* El comportamiento del programa debe ajustarse a lo solicitado en este documento.
* Capacidad de la programadora de introducir cambios en el programa desarrollado.
* Conocer y poner en prácticas los principios y buenas prácticas de programación orientada a objetos.
* El programa debe ajustarse al paradigma de Orientación a Objetos.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Acreditar que se sabe generar informes de cubrimiento de código utilizando tanto 
[Jest](https://jestjs.io/)
como
[CodeCov](https://docs.codecov.com/docs)
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Ser capaz de desarrollar tests unitarios para sus programas utilizando 
[Jest](https://jestjs.io/)
* Acreditar que sabe depurar sus programas usando Visual Studio Code.
* Acreditar su capacidad para configurar y utilizar 
[ESLint](https://eslint.org/)
  y que es capaz de trabajar con la misma en Visual Studio Code.
* El código ha de estar documentado con 
[JSDoc](https://jsdoc.app/). 
  y ha de acreditarse la capacidad de generar documentación para sus programas utilizando la herramienta.
  Haga que la documentación del programa generada con JSDoc esté disponible a través de una web alojada en su máquina IaaS de la asignatura.
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la 
[Guía de Estilo de Google para Javascript](https://google.github.io/styleguide/jsguide.html).
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de 
[GitHub](https://github.com/ULL-ESIT-PAI-2021-2022).
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

### Indicaciones de caracter general
* Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos públicos.

* Utilice un fichero distinto para el código de cada una de las clases que intervienen en su programa.

* Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

* Configure para la práctica una página web que sirva de índice para mostrar la documentación generada por
JSDoc para todos los ejercicios de la práctica.

* Todo el código estará ubicado en el directorio `src` del proyecto. Use subdirectorios de éste si le resulta conveniente.

* Configure un fichero `package.json` en el directorio raíz de su repositorio de modo que ejecutando 
`npm install` queden instaladas todas las dependencias de su proyecto.

### Interfaz gráfica del programa. 
Desarrolle una página `poker.html` que muestre el viewport de su navegador dividido 
en dos mitades, superior e inferior. 
En cada una de las dos mitades (dos filas) ha de ubicar espacio para mostrar 5 cartas de 
póker (una mano en cada fila, 10 cartas en total) y por debajo de estas dos mitades ha de 
colocar sendos botones `Deal Hand1`, `Deal Hand2` que al ser pulsados produzcan la 
visualización de una mano (5 cartas) asignadas a cada jugador.
El programa ha de indicar cuál de los dos jugadores gana: jugador número uno, al que correponden 
las cartas de la primera fila el número dos, a quien se asignan las cartas de la segunda fila.

### Presentación de resultados
La visualización de la ejecución del programa se realizará a través de una página web alojada
en la máquina IaaS-ULL de la asignatura y cuya URL tendrá la forma:

`http://10.6.129.123:8080/einstein-albert-poker.html` [1]

en la que se incustará un canvas para dibujar las manos de la partida de poker.
Sustituya *Albert Einstein* por su nombre y apellido en la URL de su página.

Utilice código HTML y CSS para lograr una página funcional y visualmente correcta.

Diseñe asimismo otra página HTML simple 

`http://10.6.129.123:8080/index.html` [2]

que sirva de "página índice" para los ejercicios de la sesión de evaluación de la práctica.
La página [1] será uno de los enlaces de [2] y a su vez [1] tendrá un enlace "Home" que apunte a [2].
Enlace también en la página índice [2] las páginas que contienen los informes de documentación y de
cubrimiento de código de su proyecto.
