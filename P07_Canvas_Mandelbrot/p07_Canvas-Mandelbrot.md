# Práctica 7. Programación Gráfica en TypeScript. La API Canvas. El conjunto de Mandelbrot
### Factor de ponderación: 7

### Objetivos
Los objetivos de esta tarea son poner en práctica:
* Conceptos básicos de Programación Gráfica en TypeScript usando la API Canvas.
* Metodologías y conceptos de diseño y Programación Orientada a Objetos en TypeScript.
* Principios y Buenas prácticas de programación Orientada a Objetos.

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
* El alumnado debe ser capaz de resolver problemas tanto en JS como en TS en la plataforma Exercism subiendo sus soluciones a la misma
* Ser capaz de desarrollar tests unitarios para sus programas utilizando
  [Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
  [ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code
* Acreditar que conoce las etiquetas de 
  [JSDoc](https://jsdoc.app/)
* Acreditar que es capaz de generar documentación para sus programas utilizando
  [TypeDoc](https://typedoc.org/)
y que es capaz de generar documentación para sus programas utilizando la herramienta
* El alumnado ha de acreditar que es capaz de desarrollar programas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de las Guías de Estilo de Google
  para Javascript y/o TypeScript
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio Code

### Indicaciones de caracter general

Todos los programas que desarrolle han de ser orientados a objetos.
Ponga en práctica los principios de abstracción y encapsulamiento característicos 
de la OOP así como las buenas prácticas, principios y patrones que han sido expuestos en las clases de la asignatura.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos que desarrolle.

Configure para esta práctica una página web que sirva de índice para mostrar la documentación generada por
TypeDoc para el ejercicio que se propone.

Configure adecuadamente ficheros `package.json` y `tsconfig.json` en el directorio raíz de su ejercicio, 
de modo que ejecutando `npm install` queden instaladas todas las dependencias del proyecto.

En el desarrollo de esta práctica, utilice el depurador integrado en el navegador para confirmar que el flujo
de ejecución de su programa es el correcto.

### El conjunto de Mandelbrot

Como es sabido, un número complejo `c` puede representarse como un punto en un espacio bidimensional, el plano
complejo.
El 
[conjunto de Mandelbrot](https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot)
es un conjunto definido en el plano complejo.
La pertenencia de un número complejo `c` al conjunto se determina en función de la siguiente relación de
recurrencia:

`z = z^2 + c`

donde `z` y `c` son números complejos. 

La función tiene la condición inicial `z = c` siendo `c` es un número complejo cualquiera.
Lo que habitualmente se calcula es el número de iteraciones necesarias para que el módulo de `z` alcance algún valor umbral
que en el caso del conjunto de Mandelbrot es:

`|z| > 2.0`

Si, dentro de un número finito de iteraciones, se cumple la condición anterior, entonces se 
considera que el punto `c` está fuera del conjunto de Mandelbrot.

[Este vídeo](https://www.youtube.com/watch?v=1uT67l5STEw) 
puede ser un buen punto de partida para entender el conjunto de Mandelbrot y las tareas que en esta práctica se
propone realizar.

### La clase *Mandelbrot*
En esta práctica se propone desarrollar una clase `Mandelbrot` 
que posibilite la visualización del conjunto y calcular su área.

La visualización de la ejecución del programa se realizará a través de una página web alojada
en la máquina IaaS-ULL de la asignatura y cuya URL tendrá la forma:

[1] `http://10.6.129.123:8080/einstein-albert-mandelbrot.html`

en la que se embeberá un lienzo (canvas) para dibujar el conjunto.
Sustituya *Albert Einstein* por su nombre y apellido en la URL de su página
y la dirección IP anterior por la correspondiente a su máquina IaaS.

El valor del área y el error de la misma se imprimirán asimismo **gráficamente** dentro del canvas.
El resultado de dicha visualización debiera ser similar (a falta del área y error) al que muestra 
[esta página](https://math.hws.edu/eck/js/mandelbrot/MB.html).

No es necesario que invierta esfuerzo en la programación de los aspectos de esa página que no tienen relación
con TypeScript. 
Tanto HTML como CSS son aspectos que se estudiarán con cierto nivel de detalle en el futuro. 
No se requiere que dedique esfuerzo a esos aspectos en esta práctica.
Tampoco se propone en esta práctica que dote de interactividad a los elementos (botones, campos de texto,
selectores, etc.) que figuran en la página anterior, y que no son necesarios en su trabajo.

Diseñe asimismo otra página HTML simple 

[2] `http://10.6.129.123:8080/index.html`

que sirva de "página índice" para los ejercicios de la sesión de evaluación de la práctica.
La página [1] será uno de los enlaces de [2] y a su vez [1] tendrá un enlace "Home" que apunte a [2].
Enlace también en la página índice [2] la página que contiene la documentación de su proyecto.

## Visualización del conjunto

Para visualizar el conjunto basta recorrer todos los píxeles (puntos) del canvas asignando un color a cada
uno dependiendo del número de iteraciones que precisa el punto en cuestión para determinar si pertenece
o no al conjunto de Mandelbrot.
Es muy fácil hallar ejemplos de código que realizan este cálculo de diferentes formas.
Puede consultar 
[esta referncia](https://www.codingame.com/playgrounds/2358/how-to-plot-the-mandelbrot-set/adding-some-colors) 
(código en Python) a modo de ejemplo.
Nota: no imite Ud. la elección de identificadores que se hace en ese código de ejemplo en Python.

Pueden idearse estrategias para que la visualización del conjunto resulte fluída.
Un factor importante para conseguir fluidez es la optimización del código, puesto que se trata de una aplicación intensiva en cómputo.

## Cálculo del área
El cálculo del área del conjunto de Mandelbrot es un problema no trivial, ya que los resultados teóricos y 
numéricos obtenidos para este cálculo no concuerdan. 
Se propone usar el muestreo de Monte Carlo para calcular una solución numérica a este problema.
El método de Monte Carlo que que se propone implica la generación de un gran número de puntos 
aleatorios en el rango `[(-2.0, 0), (0.5, 1.125)]` del plano complejo. 
Cada punto será iterado usando la ecuación de recurrencia
`z = z^2 + c`
hasta un determinado límite (digamos hasta 10000). 
Ese número de iteraciones es el que se elige en el selector *MaxIterations* en la 
[página de referencia](https://math.hws.edu/eck/js/mandelbrot/MB.html).
Si dentro de ese número de iteraciones se cumple la condición de umbral, entonces ese punto se considera 
fuera (no perteneciente) del Conjunto de Mandelbrot. 
Al contabilizar el número de puntos aleatorios dentro del conjunto y los que están fuera, se obtiene
una buena aproximación del área del conjunto.
El algoritmo que se propone se describe a continuación:

1. Se genera un conjunto de `N` números complejos aleatorios en el intervalo `[(-2.0, 0), (0.5, 1.125)]`.
2. Realizar el muestreo de Monte Carlo iterando sobre los `N` puntos.  
Para cada punto:

 - Asignar `z = c[i]`

 - Iterar según la ecuación de recurrencia, probando la condición umbral en cada iteración:

 - Si no se cumple la condición del umbral, es decir, `|z| <= 2`, entonces repetir la iteración 
  (hasta el número máximo de iteraciones predeterminado). 
	Si después del número máximo de iteraciones la condición sigue sin satisfacerse, entonces 
	añada uno al número total de puntos dentro del conjunto.

 - Si se cumple la condición del umbral, entonces deje de iterar y pase al siguiente punto.
3. Una vez que todos los puntos han sido categorizados como dentro o fuera del conjunto, 
el área estimada y el error vienen dado por las siguientes expresiones:

> Àrea = 2 * 2.5 * 1.125 * N<sub>dentro</sub> / N

> Error = Área / sqrt(N)

Escriba el código para calcular el área y su error e imprima esos valores gráficamente (no en HTML) dentro del
canvas en una esquina del área de dibujo.

Nótese que el número de puntos `N` que el programa utilice para calcular el área es un parámetro
que de algún modo habrá que configurar.

Tenga en cuenta igualmente que el dibujo del conjunto y el cálculo del área son procesos independientes: para
dibujar el conjunto habrá que comprobar la pertenencia o no al mismo de cada uno de los puntos representado
por un píxel de su canvas (`W` x `H` puntos si `W` y `H` son las dimensiones del canvas).
El número de puntos utilizado para la estimación del área  es `N` pudiendo ser `N` un valor diferente de `W` x
`H`.
Cuanto mayor sea el valor de `N` elegido, mayor será la precisión que se obtenga en el cálculo del área.

## Referencias
* [El Conjunto de Mandelbrot](https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot)
* [El conjunto de Mandelbrot. Vídeo](https://www.youtube.com/watch?v=1uT67l5STEw) 
* [TypeScript Tutorial](https://www.typescripttutorial.net/)
* [TypeDoc](https://typedoc.org/)
* [TypeScript track in Exercism](https://exercism.org/tracks/typescript)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
