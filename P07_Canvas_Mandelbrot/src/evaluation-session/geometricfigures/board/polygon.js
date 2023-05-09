/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Polygon class
*/
/** @desc Polygon abstract class */
export class Polygon {
    /**
     * @desc Create a new Polygon object
     * @param color
     * @param borderColor
     */
    constructor(color, borderColor) {
        this.color = color;
        this.borderColor = borderColor;
    }
}
