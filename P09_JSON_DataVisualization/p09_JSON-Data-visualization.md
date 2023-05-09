# Práctica 9. JSON Data visualization
### Factor de ponderación: 8

### Objetivos
Los objetivos de esta tarea son poner en práctica:
* Gestión de ficheros remotos en formato JSON.
* Practicar con CSS básico.
* Manipulación, gestión, análisis y representación de datos.
* Conceptos básicos de Programación Gráfica en TypeScript usando la API Canvas.

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

La aplicación que desarrolle ha de ser orientada a objetos.
Ponga en práctica en su desarrollo los fundamentos, principios y buenas prácticas de la OOP así como los
conocimientos que haya adquirido en el uso de patrones de diseño.

Configure adecuadamente ficheros `package.json` y `tsconfig.json` en el directorio raíz de su ejercicio, 
de modo que ejecutando `npm install` queden instaladas todas las dependencias del proyecto.

### Lectura de datos en formato JSON desde un servidor remoto

En el directorio `read-JSON-app` de esta práctica puede hallar un ejemplo de aplicación que lee datos de un
fichero en formato JSON alojado en un servidor remoto.
Comience por ejecutar `npm install` para instalar los paquetes necesarios para la aplicación.

A continuación, ejecute `tsc` en el directorio `www` para compilar la aplicación `read-json.ts` de ese
directorio. 
La compilación generará el fichero `read-json.js` que se enlaza en la página `index.html` que se encuentra en
ese mismo directorio y que será el punto de entrada de la aplicación de ejemplo.

Ejecute `npm start` para iniciar la aplicación.
Un mensaje le indicará la URL en la que puede visualizar en un navegador la aplicación.
En la página que se abre (`index.html`) verá solamente una página con un texto explicativo.
Si abre (*Herramientas para desarrolladores*) la consola de esa página verá que en consola se está imprimiendo
un vector de datos de 1736 componentes.
Esos datos son los que figuran en 
[este fichero
JSON](https://www.tenerifedata.com/dataset/79477ca3-0ed1-4094-a386-b40e2505c8aa/resource/eafae0c8-6d48-4c3e-b2a0-802dac477022/download/poblacion-segun-sexos-y-edades-ano-)
disponible a través del portal 
[TenerifeData](https://www.tenerifedata.com/).

Estudie los comentarios que figuran en la cabecera de los ficheros `read-json.ts` (directorio `www` de la
aplicación) y `app.js` (directorio `web-server`).

El programa `app.js`, similar al que se utilizó en la práctica 1 de la asignatura, configura un servidor de
ficheros basado en Express, mientras que `read-json.ts` es el programa principal que consume los datos desde
ese servidor.
Tal como se explica en la documentación de estos programas, consumiendo los datos desde el mismo servidor en
el que se ejecuta un probrama programas se obvian ciertas restricciones de seguridad que imponen los navegadores a
la hora de consumir datos desde un servidor externo (política 
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)).

Ambos programas utilizan la API 
[Fetch](https://javascript.info/fetch).
En el caso del servidor Express, para leer el fichero JSON con datos de población de Tenerife desde una URL
externa, y en el caso de la aplicación cliente para leer el fichero JSON desde el *endpoint* `data` que
se configura en el servidor local.

El programa `read-json-ts` define la interfaz *PopulationData* (podría haberse utilizado una definición de
tipo en lugar de una interfaz) para caracterizar el tipo de datos presentes en el fichero JSON que se va a
leer.
Ha de tenerse en cuenta (a) que esta definición se introduce para disponer de un control de tipos de datos más
exhaustivo (b) que esa aplicación depende directamente del tipo de datos que se pretende leer y que habría que
conocer a priori.

No es un objetivo de esta práctica (ni de esta asignatura) el estudio de los protocolos de comunicación ni las
restricciones y características que intervienen en estas comunicaciones.

El objeto de estos fragmentos de código es ofrecer al alumnado un esqueleto simple que pueden tomar como punto
de partida para sus propios diseños, siendo el objetivo de esta práctica leer datos (de diverso tipo)
procedentes de una URL remota y representarlos y exponerlos gráficamente en un lienzo (canvas) de HTML.

La referencias
[Serving static files in Express](https://expressjs.com/en/starter/static-files.html)
y
[A Simple ExpressJS and TypeScript
Project](https://www.codemag.com/Article/2011021/A-Simple-ExpressJS-and-TypeScript-Project)
publicadas por un estudiante de PAI en el foro de discusiones de la asignatura pueden resultarle de interés para
aprender sobre un proyecto como el que aquí se propone, que involucre TypeScript y 
[Express](https://expressjs.com/).

### Una clase para la representación gráfica de datos

Desarrolle un programa `bar-chart-client.ts` que permita la representación gráfica de datos en formato
histograma (diagrama de barras).
Utilice como referencia para la apariencia de su aplicación
[este diagrama](https://data.oecd.org/chart/5RTs)
(datos de la OCDE) que representa el número de camas hospitalarias por cada 1000 habitantes para diferentes países.

Tenga en cuenta que los datos a representar pudieran ser éstos o cualesquiera otros susceptibles de
representarse mediante un diagrama de barras.
De la referencia anterior, lo único que ha de imitar es el aspecto: colores, disposición de los elementos de
la gráfica, etc. omitiendo los aspectos interactivos de la misma.

La aplicación que ha de realizar debe basarse en una clase *BarChart* que ha de desarrollar.
La interfaz pública de esa clase es la que ha de dibujar en el canvas un diagrama de barras.
Los datos que se presenten en la gráfica han de ser capturados por su aplicación desde un servidor externo a
través de alguna URL pública. 
Utilice para ello, como punto de partida la aplicación expuesta en el apartado
anterior.
Elija para los datos que represente su aplicación, algunos que sean de su interés: deportes, demografía, música, cine, geografía, ... 
Es muy fácil hoy en día hallar fuentes abiertas de diverso tipo de datos. Elija la que más se ajuste a sus
gustos o intereses.

Identifique en su aplicación las diferentes clases que intervienen en su diseño así como la relación
entre ellas y desarrolle un diagrama UML para esas clases, que ha de añadir a la página índice de esta
práctica.
Asegúrese de la corrección de su diagrama UML.

La visualización de la ejecución del programa se realizará a través de una página web alojada
en la máquina IaaS-ULL de la asignatura y cuya URL tendrá la forma:

[1] `http://10.6.129.123:8080/turing-alan-bar-chart.html`

en la que se embeberá un lienzo (canvas) para mostrar la gráfica de barras.
Sustituya *Alan Turing* por su nombre y apellido en la URL de su página
y la dirección IP anterior por la correspondiente a su máquina IaaS.
La web [1] mostrará un lienzo (canvas) que imitará en lo posible la página de referencia.
No se propone en esta práctica que utilice elementos interactivos (botones, campos de texto, selectores,
etc.).

Diseñe asimismo otra página HTML simple 

[2] `http://10.6.129.123:8080/index.html`

que sirva de "página índice" para los ejercicios de la sesión de evaluación de la práctica.
La página [1] será uno de los enlaces de [2] y a su vez [1] tendrá un enlace "Home" que apunte a [2].
Enlace también en la página índice [2] la página que contiene la documentación de su proyecto, generada con
Typedoc.

Incluya una tercera página

[3] `http://10.6.129.123:8080/uml.html`

que muestre el diagrama UML de las clases que intervienen en su aplicación.

Si le resulta útil, utilice lo que haya aprendido de CSS para dotar de estilo propio a las páginas HTML que
desarrolle.

## Referencias
* [Fetch](https://javascript.info/fetch)
* [Express](https://expressjs.com/).
* [TenerifeData](https://www.tenerifedata.com/).
* [TypeDoc](https://typedoc.org/)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
