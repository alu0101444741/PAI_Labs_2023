# Práctica 5. Programación Orientada a Objetos en TypeScript
### Factor de ponderación: 6

### Objetivos
Los objetivos de esta práctica son:
* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos en TypeScript.
* Poner en práctica Principios y Buenas prácticas de programación Orientada a Objetos.
* Practicar la depuración de programas TypeScript usando Visual Studio Code.

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
En esta práctica y las siguientes se promoverá el uso del paradigma orientado a objetos.
Los programas han de organizarse en torno a clases que se han de implementar en TypeScript,
poniendo en práctica los principios de abstracción y encapsulamiento característicos 
de la OOP así como los principios y buenas prácticas que han sido expuestos en las clases de la asignatura.

Vigile siempre el tipo de visibilidad que elige para los atributos (properties) de sus clases
y tenga en cuenta tanto las reglas de 
[estilo](https://google.github.io/styleguide/tsguide.html)
como las 
[etiquetas Typedoc](https://typedoc.org/guides/overview/)
relacionadas con la documentación de clases.
Los
[ejemplos de TypeDoc](https://typedoc.org/example/)
pueden servirle de guía.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos que desarrolle.

Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

Configure para la práctica una página web que sirva de índice para mostrar la documentación generada por
JSDoc para uno de los ejercicios de la práctica.

Configure un fichero `package.json` en el directorio raíz de su de cada uno de sus ejercicios, de modo que ejecutando 
`npm install` queden instaladas todas las dependencias del proyecto.

### 1.- La clase *Racional*
Un 
[número racional](https://en.wikipedia.org/wiki/Rational_number)
tiene un numerador y un denominador de la forma `p/q` donde `p` es el numerador y `q` el denominador.
Por ejemplo, 1/3, 3/4 y 10/4 son números racionales.

Un número racional no puede tener denominador 0, pero sí puede ser cero el numerador.
Todo número entero `n` es equivalente al racional `n/1`.
Los números racionales se utilizan en cálculos precisos que involucran fracciones.
Por ejemplo, `1/3 = 0.33333 ...`.
Este número no puede ser representado de forma precisa en formato de punto flotante.
Para obtener resultados precisos es conveniente usar números racionales.

Desarrollare un módulo que implemente una clase `Racional` para representar y operar con números racionales.

Desarrolle un programa cliente `racionales.ts` que permita operar con números racionales y haga uso
de la clase `Racional`.

Las siguientes deben tomarse como especificaciones del programa a desarrollar:
* La clase `Racional` incluirá al menos métodos para:
    * Escribir un objeto de tipo `Racional`.
    * Leer (por teclado o desde fichero) un objeto de tipo `Racional`.
    * Sumar dos objetos de tipo `Racional`.
    * Restar dos objetos de tipo `Racional`.
    * Multiplicar dos objetos de tipo `Racional`.
    * Dividir dos objetos de tipo `Racional`.
    * Comparar objetos de tipo `Racional`.
* El programa cliente ha de permitir probar todas las posibles operaciones desarrolladas para números
racionales.

Desarrolle test para probar todas las funcionalidades que implemente en su clase `Racional`.

Para este ejercicio, genere con TypeDoc la documentación del programa en formato HTML y haga que dicha documentación 
sea accesible a través de un servidor web en su máquina virtual de la asignatura.

### 2.- La clase *MySet*
En este ejercicio se propone desarrollar un módulo que implemente una clase `MySet` 
para representar 
[conjuntos](https://en.wikipedia.org/wiki/Set_(mathematics)) 
de números naturales.

Obviamente, si en alguna ocasión se precisa utilizar conjuntos, lo que ha de hacerse es utilizar la clase 
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
de JavaScript.
No obstante en este ejercicio práctico la implementación de la clase `MySet` no ha de usar en modo alguno objetos 
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
de JavaScript.

La clase ha de contener al menos métodos (y/o atributos) que implementen las siguientes operaciones con conjuntos:
* `toString` Devuelve una cadena que representa el conjunto. Los conjuntos se imprimirán en pantalla con sus
  elementos incluídos entre llaves, de modo que el conjunto vacío se representa por `{}`.
* `size` Devuelve el cardinal del conjunto
* `union` Unión de conjuntos
* `intersection` Intersección de conjuntos
* `difference` Complemento relativo
* `contains` Determina si un elemento pertenece al conjunto
* `empty` Determina sin un conjunto es vacío
* `subset` Determina si un conjunto es subconjunto de otro 
* `disjorint` Indica si dos conjuntos son disjuntos
* `eql` Indica si dos conjuntos son iguales 
* `add` Añade un elemento a un conjunto

Para la definición de estas operaciones consulte 
[Wikipedia](https://en.wikipedia.org/wiki/Set_(mathematics)) 
así como los métodos y ejemplos de la clase
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 
de JavaScript.

Incluya discrecionalmente cualesquiera otras operaciones que considere adecuadas como métodos en la clase
`MySet`.

Desarrolle un programa cliente `sets.ts` que permita operar con conjuntos y haga uso de la clase `MySet` que diseñe.
El programa cliente realizará operaciones similares a las que figuran en la página MDN correspondiente a la
clase
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 
de JavaScript, por ejemplo:
```javascript
const mySet1 = new MySet()

mySet1.add(1)           // Set {1}
mySet1.add(5)           // Set {1, 5}
mySet1.add(5)           // Set {1, 5}
mySet1.has(Math.sqrt(25))  // true

const mySet2 = new MySet([1, 2, 3, 4])
mySet2.size                    // 4
```

Observe que el constructor de la clase toma como parámetro un array en el que figuran los elementos con los
que se inicializa el conjunto.

Por simplicidad asumiremos que los números que intervienen en los conjutos son todos mayores o iguales que 1.

Para representar internamente los conjuntos se pueden utilizar diversas ideas y se propone aquí una que podría
usarse, si lo consideran conveniente, y que se expone a continuación:

Para representar un conjunto de números (enteros positivos) se utilizarán los bits de un número. 
Si el bit i-ésimo está a 1 ello indicará que el número *i* pertenece al conjunto. 
Si ese bit está a 0, ello indica que el número *i* no pertenece al conjunto. 
De este modo se puede representar conjuntos con tantos números naturales como bits tiene la representación
binaria del número.

### Ejercicios de Exercism
Resuelva los siguientes problemas ejecutando los tests correspondientes a cada uno de ellos hasta conseguir
que todos pasen correctamente. 
Una vez que lo logre, suba su solución a Exercism.

3.- [Robot Name](https://exercism.org/tracks/typescript/exercises/robot-name)

4.- [Robot Simulator](https://exercism.org/tracks/javascript/exercises/robot-simulator)

## Referencias
* [Introduction to TypeScript](https://github.com/alu0101329888/Introduction-to-TypeScript)
* [TypeScript Tutorial](https://www.typescripttutorial.net/)
* [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
* [TypeDoc](https://typedoc.org/)
* [TypeDoc Tutorial](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/docco/src/index.html#:~:text=TypeDoc%20is%20an%20API%20documentation,HTML%20documentation%20website%20for%20you.)
* [TypeScript track in Exercism](https://exercism.org/tracks/typescript)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
