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
import { BarChart } from "./barchart.js";
/** @desc TouristsIncreaseChart class. Extends BarChart class.  */
export class TouristsIncreaseChart extends BarChart {
    /**
     * @desc Create a new TouristsIncreaseChart object
     * @param DATA - data as an object
     * @param minimumYValue
     * @param maximumYValue
     * @param startYear - from which year must start
     * @param endYear - last year to show on the chart
     */
    constructor(DATA, minimumYValue, maximumYValue, startYear, endYear) {
        super(DATA, maximumYValue, minimumYValue);
        this.DATA = DATA;
        this.minimumYValue = minimumYValue;
        this.maximumYValue = maximumYValue;
        this.axisYName = 'Year';
        this.axisXName = 'Tourists';
        // console.log(this.DATA);
        this.initializeData(startYear, endYear);
    }
    /**
     * @desc Initialize the values on both axis of the chart.
     * @param startYear - from which year must start
     * @param endYear - last year to show on the chart
     */
    initializeData(startYear, endYear) {
        let years = [];
        let tourists = [];
        for (let i = startYear; i <= endYear; ++i) {
            tourists.push(0);
            years.push(i);
        }
        let anObject = this.DATA[0];
        let propertyNation = 'nacion';
        let year = 'anio';
        let totalTourists = 'total';
        for (const data of this.DATA) {
            if (data[propertyNation] === 'TOTAL') {
                for (let i = 0; i < years.length; ++i) {
                    if (years[i] === Number(data[year])) {
                        tourists[i] = Number(data[totalTourists]);
                        break;
                    }
                }
            }
        }
        this.axisXValues = [...years];
        this.axisYValues = [...tourists];
    }
}
