# Práctica 6. Diseño Orientado a Objetos en TypeScript
### Factor de ponderación: 6

### Objetivos
Los objetivos de esta práctica son:
* Poner en práctica metodologías y conceptos de Diseño y Programación Orientada a Objetos en TypeScript.
* Poner en práctica Principios y Buenas prácticas de programación Orientada a Objetos.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* Capacidad de la programadora de introducir cambios en el programa desarrollado.
* Conocer y poner en prácticas los principios y buenas prácticas de programación orientada a objetos.
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Ser capaz de desarrollar programas simples en TypeScript en el entorno Linux de la VM de la asignatura usando
  `ts-node`
* Ser capaz de generar documentación para sus programas TypeScript utilizando
  [TypeDoc](https://typedoc.org/)
  y de visualizar dicha documentación en un servidor web
* El alumnado debe ser capaz de resolver problemas tanto en JS como en TS en la plataforma Exercism subiendo sus soluciones a la misma.
* Ser capaz de desarrollar tests unitarios para sus programas utilizando
  [Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
  [ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code.
* Acreditar que conoce las etiquetas de 
  [JSDoc](https://jsdoc.app/)
* Acreditar que es capaz de generar documentación para sus programas utilizando
  [TypeDoc](https://typedoc.org/)
y que es capaz de generar documentación para sus programas utilizando la herramienta.
* El alumnado ha de acreditar que es capaz de desarrollar programas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de las Guías de Estilo de Google
  para Javascript y/o TypeScript
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio Code

### Indicaciones de caracter general
Todos los programas que desarrolle han de ser orientados a objetos.
Ponga en práctica los principios de abstracción y encapsulamiento característicos 
de la OOP así como las buenas prácticas y principios que han sido expuestos en las clases de la asignatura.

Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos que desarrolle.

Configure para esta práctica una página web que sirva de índice para mostrar la documentación generada por
TypeDoc para algunos de los ejercicios de la práctica.

Configure adecuadamente ficheros `package.json` y `tsconfig.json` en el directorio raíz de su de cada uno de sus ejercicios, 
de modo que ejecutando `npm install` queden instaladas todas las dependencias del proyecto.

### Trabajo previo
Estudie las transparencias y ejemplos de los trabajos expuestos en clase sobre 
[Principios de Diseño Orientado a Objetos](https://campusingenieriaytecnologia2223.ull.es/mod/url/view.php?id=27637)
y
[Principios SOLID](https://campusingenieriaytecnologia2223.ull.es/mod/url/view.php?id=27638).

Estudie igualmente las secciones correspondientes a 
[Arrays](https://javascript.info/array),
[Array methods](https://javascript.info/array-methods),
[Iterables](https://javascript.info/iterable)
y
[Strings](https://javascript.info/string)
del Modern JavaScript Tutorial para repasar la forma de trabajar en JS/TS con estas estructuras de datos.

Cuando desarrolle los siguientes ejercicios, ante la presencia de cualquier bug (o incluso en ausencia de
errores) practique el uso del 
[depurador integrado en Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

1.- Clase `TicTacToe` que permita modelar el juego del 
[3 en raya](https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea#:~:text=Tres%20en%20l%C3%ADnea%3A%20Es%20una,moverse%20una%20intersecci%C3%B3n%20por%20turno.)
(*Tic-tac-toe* en inglés).

El siguiente pseudocódigo correspondería al bucle de juego de un programa principal que utiliza la clase
`TicTacToe`, y de él pueden deducirse algunos de los métodos que resultará conveniente implementar.

Para este ejercicio, genere con TypeDoc la documentación del programa en formato HTML y haga que dicha documentación 
sea accesible a través de un servidor web en su máquina virtual de la asignatura.
``` ts
export function main(): void { 
  const PLAYER_X: string = 'X';
  const PLAYER_O: string = 'O';
  const EMPRY_SQUARE: string = '.';
  let player:string = PLAYER_X;
  let ticTacToe = new TicTacToe();
  while (!(ticTacToe.isWinner(PLAYER_X) || ticTacToe.isWinner(PLAYER_O) || ticTacToe.isFull())) {
    ticTacToe.displayBoard();
    console.log(player + ', choose your location (row, column): ');
    let row: number;
    row = readInt();
    let column: number:
    column = readInt();
    while (ticTacToe.isValid(row, column) == false || ticTacToe.playerAt(row, column) != EMPTY_SQUARE) {
      if (!ticTacToe.isValid(row, column))
        console.logln('That is not a valid location. Try again.');
      else if (ticTacToe.playerAt(row, column) != EMPTY_SQUARE)
        console.log('That location is already full. Try again.');
      console.log('Choose your location (row, column): ');
      row = readInt();
      column = readInt();
    }
    ticTacToe.playMove(player, row, column);
    if (player == PLAYER_X)
      player = PLAYER_O;
    else
      player = PLAYER_X;
  }
  ticTacToe.displayBoard();
  if (ticTacToe.isWinner(PLAYER_X))
    console.logln('X is the winner!');
  if (ticTacToe.isWinner(PLAYER_O))
    console.logln('O is the winner!');
  if (ticTacToe.isCat())
    console.logln('The game is a tie.');
}

main();
```

2.- El
[Problema de las 8 reinas](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
es un pasatiempo famoso consistente en colocar ocho reinas en un tablero de ajedrez de modo que no se amenacen.

Desarrolle una clase `ChessBoard` que le permita modelar un tablero de ajedrez.

Utilice la clase `ChessBoard` para obtener una solución orientada a objetos del programa 
[Queens](https://jutge.org/problems/P16415_en) de Jutge.

Para este problema, desarrolle tests que comprueben el correcto funcionamiento de su programa para diferentes
valores de N.
El número de soluciones para diferentes valores de N puede consultarse en 
[esta referencia](http://www.durangobill.com/N_Queens.html)

## Referencias
* [3 en raya](https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea#:~:text=Tres%20en%20l%C3%ADnea%3A%20Es%20una,moverse%20una%20intersecci%C3%B3n%20por%20turno.)
* [Problema de las 8 reinas](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
* [TypeScript Tutorial](https://www.typescripttutorial.net/)
* [TypeDoc](https://typedoc.org/)
* [TypeScript track in Exercism](https://exercism.org/tracks/typescript)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
