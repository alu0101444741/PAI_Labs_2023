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
    /**
     * @desc Create a new Vector2D object.
     * @param componentX
     * @param componentY
     */
    constructor(componentX, componentY) {
        this.componentX = componentX;
        this.componentY = componentY;
        this.magnitude = 0;
        this.module();
    }
    /**
    * @desc Add a vector to the current one.
    * @param vector
    */
    addVector(vector) {
        this.componentX += vector.componentX;
        this.componentY += vector.componentY;
        this.module();
    }
    /**
    * @desc Substract a vector to the current one.
    * @param vector
    */
    substractVector(vector) {
        this.componentX -= vector.componentX;
        this.componentY -= vector.componentY;
        this.module();
    }
    /**
     * @desc Multiply the components of the vector by a real number.
     * @param multiplier
     */
    multiplyByScalar(multiplier) {
        this.componentX *= multiplier;
        this.componentY *= multiplier;
        this.module();
    }
    /**
     * @desc Scalar product of two vectors. The result overwrite the current one.
     * @param vector
     */
    multiplyByVector(vector) {
        this.componentX *= vector.componentX;
        this.componentY *= vector.componentY;
        this.module();
    }
    /**
     * @desc Dot product of two vectors.
     * @param vector
     * @return real number
     */
    dotProduct(vector) {
        return (this.componentX * vector.componentX + this.componentY * vector.componentY);
    }
    /** @desc Set the vector magnitude to 1. */
    normalize() {
        this.componentX /= this.magnitude;
        this.componentY /= this.magnitude;
        this.magnitude = 1;
    }
    /**
    * @desc Normalize to a given magnitude.
    * @param magnitude - new magnitude
    */
    setMagnitude(magnitude) {
        this.normalize();
        this.multiplyByScalar(magnitude);
    }
    /**
    * @desc Change the magnitud if is higher than a given maximum magnitude.
    * @param magnitude - maximum magnitud
    */
    limit(magnitude) {
        if (this.magnitude > magnitude)
            this.magnitude = magnitude;
    }
    /** @desc Set the magnitude to the module of the vector. */
    module() {
        this.magnitude = Math.sqrt(this.componentX * this.componentX + this.componentY * this.componentY);
    }
    /**
    * @desc Create a copy of the current vector.
    * @return copy of the vector
    */
    createCopy() {
        return (new Vector2D(this.componentX, this.componentY));
    }
    /**
     * @desc Return a string with the information of the vector
     * @return cadena en formato: {componenteX, componenteY}
     */
    toString() {
        return (`x:${this.componentX}, y:${this.componentY}`);
    }
    /**
     * @desc Setter method for the component X
     * @param newComponentX
     */
    setComponentX(newComponentX) {
        this.componentX = newComponentX;
        this.module();
    }
    /**
     * @desc Setter method for the component Y
     * @param newComponentY
     */
    setComponentY(newComponentY) {
        this.componentY = newComponentY;
        this.module();
    }
    /**
    * @desc Getter method for the component X
    * @return component X
    */
    getComponentX() {
        return (this.componentX);
    }
    /**
    * @desc Getter method for the component Y
    * @return component Y
    */
    getComponentY() {
        return (this.componentY);
    }
    /**
    * @desc Getter method for the magnitude
    * @return magnitude
    */
    getMagnitude() {
        return (this.magnitude);
    }
}
