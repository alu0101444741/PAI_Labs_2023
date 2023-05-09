
/**
* @desc Test para comprobar que el argumento proporcionado es un número en un rango determinado.
* Si no se proporciona alguno de los límites del rango, no se comprobará esta parte.
* Lo convertirá de string a Number.
* @param number - número a comprobar
* @param minimum - mínimo valor permitido
* @param maximum - máximo valor permitido
* @returns el número.
*/
export function testInput(number : number | string, minimum : number | undefined = undefined, maximum : number | undefined = undefined) : number {
  let theNumber : number = Number(number);  
  if (!Number.isNaN(theNumber)) {  // It is a number
    if ((minimum !== undefined) && (number < minimum)) throw new Error(`La entrada debe ser un número mayor que ${minimum}`);
    if ((maximum !== undefined) && (number > maximum)) throw new Error(`La entrada debe ser un número mayor que ${maximum}`);
    return theNumber;
  }
  else {
    throw new Error("Error. La entrada no era un número.");
  }  
}
