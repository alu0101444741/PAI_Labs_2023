/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc MovingObjectController class
 */
/** @desc MovingObjectController class */
export class MovingObjectController {
    /**
    * @desc Create a new MovingObjectController object
    * @param ANIMATION_VIEW
    */
    constructor(ANIMATION_VIEW) {
        this.ANIMATION_VIEW = ANIMATION_VIEW;
        this.objects = this.ANIMATION_VIEW.getObjects();
        this.CANVAS = this.ANIMATION_VIEW.getCanvas();
        window.addEventListener('resize', () => this.ANIMATION_VIEW.resizeCanvas());
        this.ANIMATION_VIEW.resizeCanvas();
    }
}
