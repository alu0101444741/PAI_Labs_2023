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
  private barCharData!: object;
  //private chart: Chart;
  private axisXVariable: string = 'anio';
  private axisYVariable: string = 'total';
  private axisXValues: string[] = [];
  private axisYValues: string[] = [];
  private year: string = '';
  /** 
   * @desc Create a new BarChart object
   * @param DATA - dataset on a object
   */
  constructor(DATA: object[]) {
    super(DATA);
    this.initializeData();

    if ((this.axisYVariable === 'anio') || (this.axisXVariable === 'anio')) this.year = '2019';    
  }

  /** @desc Initialize values on both axis of the chart. */
  private initializeData(): void {

    let anObject = this.DATA[0];
    type ObjectKey = keyof typeof anObject;
    let propertyYear = 'anio' as ObjectKey;
    let propertyCount = 'total' as ObjectKey;

    this.barCharData = {
      labels: this.DATA.map((row) => { return row[propertyYear]; }), // Names that are going to be shown in the Y axis.
      datasets: [{ // An array of DataChart objects containing the basic information for the chart
        // label: 'Acquisitions by year', // The name that will appear in the legend
        data: this.DATA.map((row) => { return row[propertyCount]; }), // An array of Objects, Numbers or Strings
        backgroundColor: this.DATA.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`), 
          // An Array of Colors for each Bar in the Chart. This color represent the inside of each bar
        borderColor: this.DATA.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`),
          // An Array of Colors for each Bar in the Chart. This color represent the lines of each bar
      }],
    };

    const OPTIONS = {
      responsive: true,           // Respond to size changes in the canvas
      maintainAspectRatio: false, // Deactivates the AspectRatio
      indexAxis: 'x',             // Change it to y to make a horizontal bar Chart
      scales: {
        y: {
          beginAtZero: true,      // It makes the chart begin from 0 instead of the min value of the data
          stacked: true           // Enable the display of a stack bar chart 
        },
        x: {
          stacked: true,          // Enable the display of a stack bar chart 
          reverse: true           // Display the information from the last DataObject to the first one
        },
      },
      plugins: {
        title: {                  // Activate the Title of the chart
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
      type: 'bar',      // The type of the chart
      data: this.barCharData,      // The ChartData object that contains all the information
                       // that is going to be displayed and their respective options
      options: OPTIONS // All the general options of the chart
    };

    //this.chart = new Chart(this.CONTEXT, CONFIG);
    console.log(this.barCharData);
  }

  /** @desc Draw method for the bar chart */
  public update(): void {
    //this.chart.render();       
  }
}