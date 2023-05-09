/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 07 2023
 * @desc Class Triangle
 */

'use static';

/** @desc Triangle class */
export class Triangle {
  /**
  * @desc Triangle class constructor
  * @param firstSide - first side length
  * @param secondSide - second side length
  * @param thirdSide - third side length
  */
  constructor(private firstSide: number,
              private secondSide: number,
              private thirdSide: number) {
  }

  /**
  * @desc Checks if the triangle is equilateral. All three sides has the same length.
  * @returns 'true' if is equilateral
  */
  get isEquilateral(): boolean {
    return( this.checkValidTriangle() &&
        ((this.firstSide === this.secondSide) &&
           (this.thirdSide === this.firstSide) &&
           (this.thirdSide === this.secondSide)));
  }

  /**
  * @desc Checks if the triangle is isosceles. At least two sides has the same length;
  * @returns 'true' if is isosceles
  */
  get isIsosceles(): boolean {
    return( this.checkValidTriangle() &&
          ((this.firstSide === this.secondSide) ||
           (this.thirdSide === this.firstSide) ||
           (this.thirdSide === this.secondSide)));
  }

  /**
  * @desc Checks if the triangle is equilateral. All three sides has different lengths.
  * @returns 'true' if is scalene
  */
  get isScalene(): boolean {
    return(this.checkValidTriangle() &&
          ((this.firstSide !== this.secondSide) &&
           (this.thirdSide !== this.firstSide) &&
           (this.thirdSide !== this.secondSide)));
  }

  /** 
  * @desc Checks if all sides length of the triangle are higher than 0.
  * @returns 'true' if all sides length are higher than 0.
  */
  private checkValidTriangle(): boolean {
    return ((this.firstSide > 0) &&
            (this.secondSide > 0) &&
            (this.thirdSide > 0) &&
            (this.firstSide + this.secondSide >= this.thirdSide) &&
            (this.secondSide + this.thirdSide >= this.firstSide) &&
            (this.firstSide + this.thirdSide >= this.secondSide));
  }
}
