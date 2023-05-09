/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 11 2023
 * @desc Chart class
 */
import { CanvasView } from "../utilities/canvasview.js";
/** @desc Chart class */
export class MyChart extends CanvasView {
    /**
     * @desc Create a new BarChart object
     * @param DATA - dataset on a object
     */
    constructor(DATA) {
        super();
        this.DATA = [];
        console.log('The data');
        this.DATA = [...Object.entries(DATA)[0][1]];
    }
}
