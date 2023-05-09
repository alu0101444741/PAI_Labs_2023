/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 08 2023
 * @desc BarChart class
 */
import { MyChart } from "./mychart.js";
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
// import Chart from 'chart.js'
/** @desc BarChart class */
export class BarChart extends MyChart {
    /**
     * @desc Create a new BarChart object
     * @param DATA - dataset on a object
     */
    constructor(DATA) {
        super(DATA);
        //private chart: Chart;
        this.axisXVariable = 'anio';
        this.axisYVariable = 'total';
        this.axisXValues = [];
        this.axisYValues = [];
        this.year = '';
        this.initializeData();
        if ((this.axisYVariable === 'anio') || (this.axisXVariable === 'anio'))
            this.year = '2019';
    }
    /** @desc Initialize values on both axis of the chart. */
    initializeData() {
        let anObject = this.DATA[0];
        let propertyYear = 'anio';
        let propertyCount = 'total';
        this.barCharData = {
            labels: this.DATA.map((row) => { return row[propertyYear]; }),
            datasets: [{
                    // label: 'Acquisitions by year', // The name that will appear in the legend
                    data: this.DATA.map((row) => { return row[propertyCount]; }),
                    backgroundColor: this.DATA.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`),
                    // An Array of Colors for each Bar in the Chart. This color represent the inside of each bar
                    borderColor: this.DATA.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`),
                }],
        };
        const OPTIONS = {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true // Enable the display of a stack bar chart 
                },
                x: {
                    stacked: true,
                    reverse: true // Display the information from the last DataObject to the first one
                },
            },
            plugins: {
                title: {
                    display: true,
                    color: 'black',
                    text: 'Turistas totales por anio (2010-2019)',
                    font: {
                        size: 30,
                    }
                }
            },
        };
        const CONFIG = {
            type: 'bar',
            data: this.barCharData,
            // that is going to be displayed and their respective options
            options: OPTIONS // All the general options of the chart
        };
        //this.chart = new Chart(this.CONTEXT, CONFIG);
        console.log(this.barCharData);
    }
    /** @desc Draw method for the bar chart */
    update() {
        //this.chart.render();       
    }
}
