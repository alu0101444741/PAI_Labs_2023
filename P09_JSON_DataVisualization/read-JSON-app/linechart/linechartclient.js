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
import { TenerifeTouristsLinechart } from './tenerifetourists.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const DATA = yield logJSONData(/*'../barchart/tourism2019.json'*/ 'https://datos.tenerife.es/ckan/dataset/4a803657-75ec-4e78-b123-b9f4749199cb/resource/38bbc40a-a007-4379-819d-2cef95787f7e/download/turistasalojadossantacruz.json');
        let tenerifeTourists = new TenerifeTouristsLinechart(DATA, 0, 12000, 2009, 2019, 'Tourists visiting Tenerife (2010-2019)');
        tenerifeTourists.update();
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
function logJSONData(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(path);
        const jsonData = yield response.json();
        return (jsonData['DATOS']);
    });
}
