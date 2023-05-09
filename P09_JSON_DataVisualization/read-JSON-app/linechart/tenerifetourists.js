/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 11 2023
 * @desc TouristsIncreaseChart class
 */
import { Point2D } from "../utilities/point2d.js";
import { LineChart } from "./linechart.js";
/** @desc TenerifeTouristsChart class. Extends LineChart class */
export class TenerifeTouristsLinechart extends LineChart {
    /**
     * @desc Create a new TouristsIncreaseChart object
     * @param DATA - data as an object
     * @param minimumYValue
     * @param maximumYValue
     * @param startYear - from which year must start
     * @param endYear - last year to show on the chart
     * @param title
     */
    constructor(DATA, minimumYValue, maximumYValue, startYear, endYear, title) {
        super(DATA, maximumYValue, minimumYValue, title);
        this.DATA = DATA;
        this.minimumYValue = minimumYValue;
        this.maximumYValue = maximumYValue;
        this.title = title;
        this.nations = [];
        this.axisYName = 'Year';
        this.axisXName = 'Tourists';
        this.initializeData(startYear, endYear);
    }
    /** @desc Draw method for the bar chart */
    update() {
        this.drawLines();
        this.drawTags();
        this.drawAxis();
        this.drawTitle(this.title);
        this.drawHelp();
    }
    /**
     * @desc Initialize the values on both axis of the chart.
     * @param startYear - from which year must start
     * @param endYear - last year to show on the chart
     */
    initializeData(startYear, endYear) {
        this.initializeNations();
        for (const nation of this.nations)
            this.points.push([]);
        let years = [];
        let tourists = [];
        let zeroArray = [];
        for (let i = startYear; i <= endYear; ++i)
            years.push(i);
        for (let i = 0; i < years.length; ++i)
            zeroArray.push(0);
        for (let index = 0; index < this.nations.length; ++index)
            tourists.push([...zeroArray]);
        console.log(tourists);
        let anObject = this.DATA[0];
        let propertyNation = 'nacion';
        let year = 'anio';
        let totalTourists = 'total';
        for (const data of this.DATA) {
            let dataFound = false;
            for (let nationIndex = 0; (nationIndex < this.nations.length) && !dataFound; ++nationIndex) {
                if (data[propertyNation] === this.nations[nationIndex]) {
                    for (let yearIndex = 0; (yearIndex < years.length) && !dataFound; ++yearIndex) {
                        if (years[yearIndex] === Number(data[year])) {
                            if (tourists[nationIndex][yearIndex] < Number(data[totalTourists]))
                                tourists[nationIndex][yearIndex] = Number(data[totalTourists]);
                            //console.log('Added', tourists[i], 'to year', years[i])
                            //break;
                        }
                    }
                }
            }
        }
        this.axisXValues = [...years];
        this.axisYValues = tourists;
    }
    /** @desc Draw colors assigned to lines */
    drawHelp() {
        for (let i = 0; i < this.axisYColors.length; ++i) {
            this.CONTEXT.fillStyle = this.axisYColors[i];
            this.CONTEXT.fillRect(this.WIDTH - this.BORDER_SPACE * 2, (this.BORDER_SPACE / 2) * (i + 1), 10, 10);
            this.drawText(new Point2D(this.WIDTH - this.BORDER_SPACE, ((this.BORDER_SPACE / 2) * (i + 1)) + 5), this.nations[i], 10, 'black');
            // console.log('drawing', this.WIDTH - this.BORDER_SPACE / 2, (this.BORDER_SPACE / 2) * (i + 1))
        }
    }
    /**
     * @desc Search for every nation (or group of it) identifier
     * @returns array of identifiers
     */
    initializeNations() {
        let anObject = this.DATA[0];
        let propertyNation = 'nacion';
        let lineColorHex = 152535;
        let lineColor = `#${lineColorHex}`;
        let index = 0;
        for (const data of this.DATA) {
            if (!this.nations.includes(data[propertyNation]) && (data[propertyNation] !== 'TOTAL')) {
                this.nations.push(data[propertyNation]);
                //this.axisYColors.push(`#${lineColorHex + 111111 * index}`)
                //++ index;
            }
        }
        this.nations.shift();
        console.log(this.nations);
    }
}
