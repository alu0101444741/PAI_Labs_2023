/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 26 2022
 * @desc Vector2D class
 */
 
/** @desc Vector2D class */
export class Vector2D {
  private magnitude: number = 0;
  /**
   * @desc Create a new Vector2D object.
   * @param componentX
   * @param componentY
   */
  constructor(
    private componentX: number,
    private componentY: number) {
    this.module();
  }

  /**
  * @desc Add a vector to the current one.
  * @param vector
  */
  public addVector(vector: Vector2D): void {
    this.componentX += vector.componentX;
    this.componentY += vector.componentY;
    this.module();
  }

  /**
  * @desc Substract a vector to the current one.
  * @param vector
  */
  public substractVector(vector: Vector2D): void {
    this.componentX -= vector.componentX;
    this.componentY -= vector.componentY;
    this.module();
  }

  /**
   * @desc Multiply the components of the vector by a real number.
   * @param multiplier
   */
  public multiplyByScalar(multiplier: number) {
    this.componentX *= multiplier;
    this.componentY *= multiplier;
    this.module();
  }

  /**
   * @desc Scalar product of two vectors. The result overwrite the current one.
   * @param vector
   */
  public multiplyByVector(vector: Vector2D) {
    this.componentX *= vector.componentX;
    this.componentY *= vector.componentY;
    this.module();
  }

  /**
   * @desc Dot product of two vectors.
   * @param vector
   * @return real number
   */
  public dotProduct(vector: Vector2D): number {
    return(this.componentX * vector.componentX + this.componentY * vector.componentY);
  }

  /** @desc Set the vector magnitude to 1. */
  public normalize(): void {
    this.componentX /= this.magnitude;
    this.componentY /= this.magnitude;
    this.magnitude = 1;
  }

  /**
  * @desc Normalize to a given magnitude.
  * @param magnitude - new magnitude
  */
  public setMagnitude(magnitude: number): void {
    this.normalize();
    this.multiplyByScalar(magnitude);
  }

  /**
  * @desc Change the magnitud if is higher than a given maximum magnitude.
  * @param magnitude - maximum magnitud
  */
  public limit(magnitude: number): void {
    if (this.magnitude > magnitude) this.magnitude = magnitude;
  }

  /** @desc Set the magnitude to the module of the vector. */
  public module(): void {
    this.magnitude = Math.sqrt(this.componentX * this.componentX + this.componentY * this.componentY);
  }

  /**
  * @desc Create a copy of the current vector.
  * @return copy of the vector
  */
  public createCopy(): Vector2D {
    return(new Vector2D(this.componentX, this.componentY));
  }

  /**
   * @desc Return a string with the information of the vector
   * @return cadena en formato: {componenteX, componenteY}
   */
  public toString(): string {
    return(`x:${this.componentX}, y:${this.componentY}`);
  }

  /**
   * @desc Setter method for the component X
   * @param newComponentX
   */
  public setComponentX(newComponentX: number): void {
    this.componentX = newComponentX;
    this.module();
  }

  /**
   * @desc Setter method for the component Y
   * @param newComponentY
   */
  public setComponentY(newComponentY: number): void {
    this.componentY = newComponentY;
    this.module();
  }

  /**
  * @desc Getter method for the component X
  * @return component X
  */
  public getComponentX(): number {
    return(this.componentX);
  }

  /**
  * @desc Getter method for the component Y
  * @return component Y
  */
  public getComponentY(): number {
    return(this.componentY);
  }

  /**
  * @desc Getter method for the magnitude
  * @return magnitude
  */
  public getMagnitude(): number {
    return(this.magnitude);
  }
}