/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc CanvasView
 */
/** @desc CanvasView class */
export class CanvasView {
    /**
     * @desc Create a new CanvasView object
     */
    constructor() {
        this.BORDER_SPACE = 50;
        this.POINT_SIZE = 5;
        this.COLORS = ['Aqua', 'Aquamarine', 'Blue', 'Chocolate', 'Orange', 'Red',
            'Brown', 'CadetBlue', 'BlueViolet', 'Cyan', 'Crimson', 'Coral',
            'DarkRed', 'DarkMagenta', 'DarkSalmon', 'DeepPink', 'ForestGreen', 'Gold',
            'Fuchsia', 'Green', 'Yellow', 'Khaki'];
        this.CANVAS = document.getElementById('mainCanvas');
        this.CONTEXT = this.CANVAS.getContext('2d');
        this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
        this.WIDTH = Number(this.CANVAS.getAttribute('width'));
    }
    /**
     * @desc Draw the stored points
     * @param point - point object with coordinates
     * @param color
     */
    drawPoint(point, color) {
        this.CONTEXT.beginPath();
        this.CONTEXT.fillStyle = (color) ? color : 'black';
        this.CONTEXT.ellipse(point.getCoordinateX(), point.getCoordinateY(), this.POINT_SIZE, this.POINT_SIZE, Math.PI / 4, 0, 2 * Math.PI);
        this.CONTEXT.fill();
        this.CONTEXT.closePath();
    }
    /**
    * @desc Draw a line given two points
    * @param firstPoint
    * @param secondPoint
    */
    drawLine(firstPoint, secondPoint, lineWidth, color) {
        this.CONTEXT.beginPath();
        this.CONTEXT.strokeStyle = (color) ? color : 'black';
        this.CONTEXT.lineWidth = (lineWidth) ? lineWidth : 1;
        this.CONTEXT.moveTo(firstPoint.getCoordinateX(), firstPoint.getCoordinateY());
        this.CONTEXT.lineTo(secondPoint.getCoordinateX(), secondPoint.getCoordinateY());
        this.CONTEXT.stroke();
        this.CONTEXT.closePath();
    }
    /**
    * @desc Draw a given text on a given position
    * @param position
    * @param text - text to write
    * @param fontSize - on pixels (px)
    * @param color - color of the font
    * @param rotation - degrees
    */
    drawText(position, text, fontSize, color, rotation) {
        this.CONTEXT.beginPath();
        this.CONTEXT.fillStyle = (color) ? color : 'black';
        this.CONTEXT.font = `${fontSize}px Rubik`;
        this.CONTEXT.textAlign = "center";
        this.CONTEXT.textBaseline = "middle";
        if (rotation) {
            this.CONTEXT.save();
            this.CONTEXT.translate(position.getCoordinateX(), position.getCoordinateY());
            this.CONTEXT.rotate(rotation * Math.PI / 180);
            this.CONTEXT.fillText(text, 0, 0);
            this.CONTEXT.fill();
            this.CONTEXT.restore();
        }
        else {
            this.CONTEXT.fillText(text, position.getCoordinateX(), position.getCoordinateY());
            this.CONTEXT.fill();
        }
        this.CONTEXT.closePath();
    }
    /** @desc Makes the canvas responsive. */
    resizeCanvas() {
        this.WIDTH = window.innerWidth * 0.975;
        this.HEIGHT = window.innerHeight * 0.75;
        this.CANVAS.setAttribute('height', this.HEIGHT.toString());
        this.CANVAS.setAttribute('width', this.WIDTH.toString());
        this.adaptObjects();
    }
    /** @desc Remove all the canvas content */
    cleanCanvas() {
        this.CONTEXT.beginPath();
        this.CONTEXT.fillStyle = 'black';
        this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.CONTEXT.closePath();
    }
    /**
     * @desc Draws the background of the canvas
     * @param color
     */
    drawBackground(color) {
        this.CONTEXT.fillStyle = (color) ? color : 'black';
        this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    }
    radialGradient() {
        let gradient = this.CONTEXT.createRadialGradient(this.WIDTH / 2, this.HEIGHT / 2, this.HEIGHT / 10, this.WIDTH / 2, this.HEIGHT / 2, this.WIDTH / 2);
        gradient.addColorStop(0, 'gray');
        gradient.addColorStop(0.85, 'darkgray');
        return (gradient);
    }
    /**
     * @desc Getter method for a random color
     * @returns random color
     */
    getRandomColor() {
        return (this.COLORS[Math.floor(Math.random() * this.COLORS.length)]);
    }
    /**
     * @desc Getter method for the Canvas element
     * @returns stored canvas
     */
    getCanvas() {
        return (this.CANVAS);
    }
}
