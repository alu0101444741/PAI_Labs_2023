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

interface PopulationData {
  Year: number;
  Age: string;
  Male: number;
  Female: number;
}

async function fetchPopulationData(): Promise<PopulationData[]> {
  const response = await fetch('/data');
  const json = await response.json();
  return json;
}

const main = async function () {
  const data = await fetchPopulationData();
  console.log(data);
};

main();
