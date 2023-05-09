"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 23, 2023
 * @description Program that reads JSON data from URL
 *
 * If you use fetch It produces an error
 * But when I load the page I Obtain this error:
 *   Access to fetch at  from origin  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 *   If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 *
 * This 0error occurs because of the CORS (Cross-Origin Resource Sharing) policy which is implemented by the server hosting
 * the resource you are trying to access. This policy restricts cross-origin requests made by web browsers, for security reasons.
 *
 * @see {@link
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
function fetchPopulationData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/data');
        const json = yield response.json();
        return json;
    });
}
const main = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchPopulationData();
        console.log(data);
    });
};
main();
