/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 08 2023
 * @desc Client program for BarChart class
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TouristsIncreaseChart } from './touristsincrease.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const DATA = yield logJSONData(); // await fetchPopulationData();
        //console.log(typeof DATA, DATA);
        let populationIncreaseChart = new TouristsIncreaseChart(DATA, 0, 500000, 2010, 2019);
        populationIncreaseChart.update();
    });
}
main();
function fetchPopulationData() {
    return __awaiter(this, void 0, void 0, function* () {
        const RESPONSE = yield fetch('/data');
        const json = yield RESPONSE.json();
        return json;
    });
}
function logJSONData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('./barchart/tourism2019.json');
        const jsonData = yield response.json();
        return (jsonData['DATOS']);
    });
}
