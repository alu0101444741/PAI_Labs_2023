/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 15 2023
 * @desc Clase ComplexNumber
 * @module complex-number
 */
/** @desc ComplexNumber class */
export class ComplexNumber {
    /**
    * @desc Create a new ComplexNumber
    * @param real - real part coefficient
    * @param imaginary - imaginary part coefficient
    */
    constructor(real, imaginary, color = 'rgb(0,0,0)') {
        this.real = real;
        this.imaginary = imaginary;
        this.color = color;
        //this.validateInput(real, imaginary);   
    }
    /**
    * @desc Create a new complex number as a result of adding two of them.
    * @param complexNumber - second operand of the operation
    * @return result on a new instance
    */
    add(complexNumber) {
        return (new ComplexNumber(complexNumber.real + this.real, complexNumber.imaginary + this.imaginary));
    }
    /**
    * @desc Create a new complex number as a result of the substraction of two of them.
    * @param complexNumber - second operand of the operation
    * @return result on a new instance
    */
    subtract(complexNumber) {
        return (new ComplexNumber(this.real - complexNumber.real, this.imaginary - complexNumber.imaginary));
    }
    /**
    * @desc Create a new complex number as a result of the multiplication of two of them.
    * @param complexNumber - second operand of the multiplication
    * @return result on a new instance
    */
    multiply(complexNumber) {
        let realPart = this.real * complexNumber.real + (this.imaginary * complexNumber.imaginary) * -1.0;
        let imaginaryPart = this.real * complexNumber.imaginary + this.imaginary * complexNumber.real;
        return (new ComplexNumber(realPart, imaginaryPart));
    }
    /**
    * @desc Create the conjugate of the current complex number.
    * The conjugate is that which has a different sign on the imaginary part.
    * @return conjugate on a new instance
    */
    conjugate() {
        return (new ComplexNumber(this.real, this.imaginary * -1.0));
    }
    /**
    * @desc Absolute value of the current complex number
    * @return result
    */
    abs() {
        return (Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary)));
    }
    /**
    * @desc Create a string with the information of the current complex number
    * @return {String} string as 'a+bi', 'a', 'bi' o '0'
    */
    toString() {
        if ((this.imaginary === 0) && (this.real === 0)) {
            return ('0');
        }
        let imaginary = '';
        let real = '';
        if (this.imaginary !== 0) {
            imaginary = (this.imaginary + 'i');
        }
        if (this.real !== 0) {
            real += this.real;
            if ((this.imaginary !== 0) && (this.imaginary > 0)) {
                real += '+';
            }
        }
        if (this.imaginary < 0) {
            return (`${real}${imaginary}`);
        }
        return (`${real}${imaginary}`);
    }
    /**
    * @desc Validate the given values for the complex number.
    * Will throw an error if one of the parts is not a number.
    * @param real - real part coefficient
    * @param imaginary - imaginary part coefficient
    */
    /*private validateInput(real: number, imaginary: number): void {
      this.real = Number(real);
      this.imaginary = Number(imaginary);
      if ((Number.isNaN(this.real)) || (Number.isNaN(this.imaginary))) {
        throw new Error('Given input were not a number');
      }
    }*/
    /**
     * @dec Getter method for the imaginary part
     * @returns imaginary part coefficient
     */
    getRealPart() {
        return (this.real);
    }
    /**
     * @dec Getter method for the imaginary part
     * @returns imaginary part coefficient
     */
    getImaginaryPart() {
        return (this.imaginary);
    }
    /**
     * @dec Getter method for the color assigned
     * @returns color in RGB
     */
    getColor() {
        return (this.color);
    }
    /**
     * @dec Setter method for the color assigned
     * @param color in RGB
     */
    setColor(newColor) {
        this.color = newColor;
    }
}
