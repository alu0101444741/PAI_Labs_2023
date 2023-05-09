// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum = 0;
  let numberFound = false;
  let position = 0;

  while (!numberFound) {
    if (Number(array1[position]) === 0) {
      array1.shift();
    }
    else {
      numberFound = true;
    }
    ++position;
  }

  numberFound = false;
  position = 0;
  while (!numberFound) {
    if (Number(array2[position]) === 0) {
      array2.shift();
    }
    else {
      numberFound = true;
    }
    ++position;
  }

  for (let i = 0; i < array1.length; ++i) {
    sum += (Math.pow(10, array1.length - i - 1) * array1[i]);
  }

  for (let i = 0; i < array2.length; ++i) {
    sum += (Math.pow(10, array2.length - i - 1) * array2[i]);
  }

  return(sum);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let isPalindrome = true;
  let numberString = value.toString();
  let left = '', right = '';

  for (let i = 0; i < numberString.length/2; i++) {
    left = numberString.charAt(i);
    right = numberString.charAt(numberString.length - i - 1);
    
    if (left !== right) {
      isPalindrome = false;
    }
  }
  return (isPalindrome);  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if((input === undefined) || (input === null) || (input === '')) {
    return ('Required field');
  }
  else {
    let theNumber = Number(input);
    if (!Number.isNaN(theNumber) && (theNumber !== 0)) {
      return('');
    }
    else {
      return ('Must be a number besides 0');
    }
  }
  
}
