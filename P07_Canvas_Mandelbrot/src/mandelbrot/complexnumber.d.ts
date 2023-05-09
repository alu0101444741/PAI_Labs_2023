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
export declare class ComplexNumber {
    private real;
    private imaginary;
    private color;
    /**
    * @desc Create a new ComplexNumber
    * @param real - real part coefficient
    * @param imaginary - imaginary part coefficient
    */
    constructor(real: number, imaginary: number, color?: string);
    /**
    * @desc Create a new complex number as a result of adding two of them.
    * @param complexNumber - second operand of the operation
    * @return result on a new instance
    */
    add(complexNumber: ComplexNumber): ComplexNumber;
    /**
    * @desc Create a new complex number as a result of the substraction of two of them.
    * @param complexNumber - second operand of the operation
    * @return result on a new instance
    */
    subtract(complexNumber: ComplexNumber): ComplexNumber;
    /**
    * @desc Create a new complex number as a result of the multiplication of two of them.
    * @param complexNumber - second operand of the multiplication
    * @return result on a new instance
    */
    multiply(complexNumber: ComplexNumber): ComplexNumber;
    /**
    * @desc Create the conjugate of the current complex number.
    * The conjugate is that which has a different sign on the imaginary part.
    * @return conjugate on a new instance
    */
    conjugate(): ComplexNumber;
    /**
    * @desc Absolute value of the current complex number
    * @return result
    */
    abs(): number;
    /**
    * @desc Create a string with the information of the current complex number
    * @return {String} string as 'a+bi', 'a', 'bi' o '0'
    */
    toString(): string;
    /**
    * @desc Validate the given values for the complex number.
    * Will throw an error if one of the parts is not a number.
    * @param real - real part coefficient
    * @param imaginary - imaginary part coefficient
    */
    /**
     * @dec Getter method for the imaginary part
     * @returns imaginary part coefficient
     */
    getRealPart(): number;
    /**
     * @dec Getter method for the imaginary part
     * @returns imaginary part coefficient
     */
    getImaginaryPart(): number;
    /**
     * @dec Getter method for the color assigned
     * @returns color in RGB
     */
    getColor(): string;
    /**
     * @dec Setter method for the color assigned
     * @param color in RGB
     */
    setColor(newColor: string): void;
}
