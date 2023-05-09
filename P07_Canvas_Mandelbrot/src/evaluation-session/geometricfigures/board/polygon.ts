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
export abstract class Polygon {
  /**
   * @desc Create a new Polygon object
   * @param color 
   * @param borderColor
   */
   constructor(
    protected color: string,
    protected borderColor: string) {}
      
  /**
   * @desc Getter method for the amount of edges of the polygon
   * @returns amount of edges
   */
  public abstract getNumberOfEdges(): number;

  /**
   * @desc Getter method for the area of the polygon
   * @returns area
   */
  public abstract getArea(): number;

  /**
   * @desc Computes the perimeter of the current polygon
   * @returns perimeter
   */
  public abstract computePerimeter(): number;

  /**
   * @desc Draws the current polygon on a canvas 2D context
   * @param context
   */
   public abstract draw(context: CanvasRenderingContext2D): void;
}