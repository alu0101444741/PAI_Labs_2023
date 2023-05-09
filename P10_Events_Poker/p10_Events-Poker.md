# Práctica 10. Programación Gráfica Orientada a Eventos. Juego de Poker.
### Factor de ponderación: 9 

### Objetivos
Los objetivos de esta tarea son poner en práctica:
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

### El juego del Poker
En esta práctica se propone desarrollar una aplicación web `poker.ts`
La aplicación se diseñará utilizando clases encapsuladas en diferentes módulos.

Tendrá que representar 
[cartas de la baraja francesa](https://en.wikipedia.org/wiki/Standard_52-card_deck), mazos de cartas, manos y jugadas del Póquer.
Consulte
[Wikipedia](http://en.wikipedia.org/wiki/Poker), 
para un conocimiento básico de este juego, en caso de que no lo conozca.
Este documento explica todo lo que se precisa para la aplicación que ha de realizar.

A pesar de que este documento está escrito en español, se propone que los identificadores 
que se usen en el código TypeScript utilicen la terminología en inglés para las entidades que ha de 
modelar en su programa: cartas (cards), mazo de cartas (deck), etc.

### La clase *Card*
Se propone desarrollar en el módulo `card.ts` una clase `Card` que permita representar cartas de la barja francesa.
La baraja francesa está dividida en cuatro palos (en inglés: *suit*), dos de color rojo y dos de color negro:

* ♠ Spades (picas).
* ♥ Hearts (corazones).
* ♦ Diamonds (diamantes).
* ♣ Clubs (tréboles).

Cada palo está formado por 13 cartas, de las cuales 9 son numerales y 4 literales. 
Se ordenan de menor a mayor "rango" de la siguiente forma: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K. 
Las cartas con letras (figuras), se llaman Jack (J), Queen (Q), King (K) y Ace (A).
Dependiendo del juego, un As puede ser más alto que el Rey o más bajo que 2.

Si se quiere definir una clase para representar una carta de juego, 
es obvio cuáles deben ser los atributos mínimos imprescindibles: valor, palo y la imagen asociada con la carta.
Cualquier implementación que se elija para los atributos ha de permitir comparar cartas para determinar cuál tiene un valor o palo más alto.
El directorio `img` de este proyecto contiene ficheros gráficos correspondientes a todas las cartas de la
baraja francesa.

Defina una clase `Card` para representar las cartas.
Si no se especifica algo diferente, al crear un objeto de esta clase se crearía un 2 de tréboles.

A efectos de depuración es posible que le resulte útil desarrollar un método `toString()` que permita imprimir en consola un objeto `Card`.
Las cartas han de poder imprimirse de forma que sean legibles para un humano.
Así en pantalla esperamos encontrar textos como:

```
Ace of Diamonds
9 of Hearts
Jack of Spades
```

Y debería poderse escribir:

```typescript
const jackOfHearts = new Card(HEARTS, JACK);
console.log(jackOfHearts);  // -> Jack of Hearts
```

También resulta necesario un mecanismo que permita comparar cartas.
El orden de las cartas no es obvio. 
Por ejemplo, ¿qué carta es mejor, el 3 de tréboles o el 2 de diamantes?
Una tiene un valor más alto, pero la otra tiene un palo más alto. 
Para comparar las cartas, ha de decidirse si es más importante el valor de la carta o el palo.
La respuesta puede depender del juego que se esté jugando, pero para simplificar, 
se hará la elección arbitraria de que el palo es más importante. 
Se asumirá la siguiente ordenación para los palos:

`Clubs < Diamonds < Hearts < Spades`

así que, por ejemplo, todas las picas superan a todos los corazones, y así sucesivamente.

### Mazos. La clase *Deck* 
Una vez diseñadas las cartas, el siguiente paso será definir un mazo (baraja completa). 
Puesto que un mazo está compuesto de cartas, es natural que cada mazo contenga como atributo un conjunto de cartas.
Defina una clase `Deck` para modelar un mazo de cartas. 
El constructor de esa clase deberá inicializar el mazo con el conjunto estándar de 52 cartas.
La clase `Deck` ha de disponer de un método que permita imprimir el mazo:

```
Ace of Clubs
2 of Clubs
3 of Clubs
...
10 of Spades
Jack of Spades
Queen of Spades
King of Spades
```

Para gestionar el mazo y poder repartir cartas se precisan métodos para
* Eliminar una carta del mazo y devolverla. `popCard()`
* Añadir una carta determinada al mazo. `addCard()`
* Barajar (mezclar) las cartas del mazo de modo que al sacar una carta del mazo, 
  ésta no esté predeterminada por la configuración del mismo (aleatoriedad). `shuffle()`
* Resulta también conveniente disponer de un método `sort()` que ordene las cartas del mazo.

### Manos de cartas. La clase *Hand*.
Para avanzar en el diseño de la aplicación propuesta se precisa también una clase 
para representar las manos (las cartas asignadas a un jugador).
Una mano (*Hand*) es similar a un mazo: tanto un mazo como una mano están formados 
por un conjunto de cartas, y ambos requieren operaciones como añadir y quitar cartas.
Una mano también es diferente de un mazo puesto que hay operaciones necesarias para las manos que no tienen sentido para un mazo. 
Por ejemplo, en el póquer podríamos comparar dos manos para ver cuál gana. 
El método que inicialice una mano debería inicializarla con un conjunto vacío de cartas:

```typescript
hand = new Hand('new hand')
console.log(hand.cards);	// -> [ ]
console.log(hand.label);	// -> new hand
```
La clase `Hand` también ha de disponer, como se ha expuesto, de métodos `popCard()` y `addCard()`:

```typescript
let deck = new Deck();
let hand = new Hand();  // Creates an empty hand
let card = deck.popCard();
hand.addCard(card);
console.log(hand);	// -> King of Spades
```

Un paso adicional es disponer de un método `moveCards()` que toma dos argumentos: una mano y el número de cartas a repartir.
`moveCards()` toma el número de cartas a repartir del mazo y las coloca en la mano.

En algunos juegos, las cartas se mueven de una mano a otra, o de una mano al mazo. 
Se podría usar `moveCards()` para cualquiera de estas operaciones.

Escriba un método de `Deck` llamado `dealHands()` que toma dos parámetros: el número de manos y el número de cartas por mano. 
Debe crear el número apropiado de manos, repartir el número apropiado de cartas por mano y devolver una lista de Manos.

En el póker las manos son de 5 cartas. 
Desarrolle una clase `PokerHand()` que representará una mano de Póker.
Las siguientes son las posibles manos en el póquer, en orden creciente de valor y decreciente de probabilidad:
* *Pair* (Pareja): dos cartas con el mismo valor.
* *Two Pair* (Doble par): dos pares de cartas con el mismo valor.
* *Three of a kind* (Trío): tres cartas con el mismo valor.
* *Straight* (Escalera): cinco cartas con valores en secuencia (los ases pueden ser altos o bajos, 
  así que el Ace-2-3-4-5 es una escalera y también lo es el 10-Jack-Queen-King-Ace, pero el Queen-King-Ace-2-3 no lo es).
* *Flush* (Color): cinco cartas con el mismo palo.
* *Full House* (Full): tres cartas con un valor, dos cartas con otro.
* *Four of a Kind* (Poker): cuatro cartas con el mismo valor.
* *Straight Flush* (Escalera real): cinco cartas en secuencia (como se definió anteriormente) y con el mismo palo.

Añada a la clase `PokerHand` métodos llamados `hasPair()`, `hasTwopair()`, `hasThreeOfaKind()` etc. 
que devuelven Verdadero o Falso según si la mano cumple o no los criterios pertinentes. 
Su código debería funcionar correctamente para manos que contengan cualquier número de 
cartas (aunque 5 y 7 son los tamaños más comunes).

Desarrolle un método `classify()` que determine la clasificación 
de mayor valor para una mano y establezca un atributo de esa mano (valor de la mano) en consecuencia. 
Por ejemplo, una mano de 5 cartas podría contener un trío y un par; debería ser etiquetada como "Three of a
kind" (trío) puesto que esa es la jugada de mayor valor.

### Interfaz gráfica del programa

En toda la lógica expuesta anteriormente para la representación de elementos del juego del poker se ha omitido
la representación gráfica de los diferentes elementos.
Ha de añadir la lógica correspondiente para mostrar gráficamente en el navegador esos elementos: cartas,
manos, etc.

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

[1] `http://10.6.129.123:8080/einstein-albert-poker.html`

en la que se incustará un lienzo (canvas) para dibujar las manos de la partida de poker.
Sustituya *Albert Einstein* por su nombre y apellido en la URL de su página
y la dirección IP anterior por la correspondiente a su máquina IaaS.

Utilice código HTML y CSS para lograr una página funcional y visualmente correcta.

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

## Referencias
* [Poker](http://en.wikipedia.org/wiki/Poker)
* [TypeDoc](https://typedoc.org/)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2022-2023/PAI-class-code-examples)
