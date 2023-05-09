/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 9 2022
 * @desc ISBN Verifier
 *       The function ask for a string with format 1-234-56789-0 and will return 'true' if it
 *       is a valid ISBN-10.
 */

/**
 * Verifica que el ISBN proporcionado es válido.
 * @param number ISBN
 * @returns {true | false}
 */
export function isValid(number) {
  let isValid = true;
  let sum = 0;
  let multiplier = 10;

  if (!validLength(number)) {
    return(false);
  }  

  for (const digit of number) {
    if (digit === '-') {
      continue;
    }
    else {
      if (testInput(digit)) {
        if ((digit === 'X') && (multiplier === 1)) {
          sum += (10 * multiplier);
        }
        else {
          sum += (Number(digit) * multiplier);          
        }
        multiplier--;
      }
      else {
        return(false);
      }
    }
  }

  if (sum % 11 !== 0) {
    isValid = false;
  }
  return(isValid);
};

/**
 * Verifica que la longitud del numero sea 10
 * @param answer - número
 * @returns {true | false}
 */
export function validLength(number) {
 let numberWithoutDash = number.replaceAll('-','');

 if (numberWithoutDash.length !== 10) {
   return(false);
 }
 else {
   return(true);
 }
}

/**
 * Verifica que el parámetro sea un número
 * @param answer - número
 * @returns {theNumber | Error} - el número, o en su defecto lanza un error
 */
 export function testInput (answer) {  
  let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {  // It is a number
    return (true);  
  }
  else {
    if (answer === 'X') {
      return(true);
    }
    else {
      return(false);
    }
  }  
};
