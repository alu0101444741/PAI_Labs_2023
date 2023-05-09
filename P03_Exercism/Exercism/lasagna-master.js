/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const EXPECTED_MINUTES_IN_OVEN = 60;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {string} the number of minutes remaining
 */
export function cookingStatus(actualMinutesInOven) {
    if (actualMinutesInOven == undefined) {
        return('You forgot to set the timer.');
    }

    if (actualMinutesInOven === 0) {
        return('Lasagna is done.');
    }
    else {
        return('Not done, please wait.');
    }
}

/**
 * (...)
 *
 * @param {string[]} layers
 * @param {number} minutesPerLayer
 * @returns {number} the number of minutes remaining
 */
export function preparationTime(layers, minutesPerLayer = 2) {
    return(layers.length * minutesPerLayer);
}

/**
 * (...)
 *
 * @param {string[]} layers
 * @returns {Object} grams of noodles and liters of sauce
 */
 export function quantities(layers) {
    let noodlesAndSauce = {noodles: 0, sauce: 0}
    for (let i = 0; i < layers.length; ++i) {
        if (layers[i] === 'noodles') {
            noodlesAndSauce.noodles += 50;
        }
        else if (layers[i] === 'sauce') {
            noodlesAndSauce.sauce += 0.2;
        }
    }
    return(noodlesAndSauce);
}

/**
 * (...)
 *
 * @param {string[]} friendsList ingredients
 * @param {string[]} myList ingredients
 */
 export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
    console.log(myList);
}

/**
 * (...)
 *
 * @param {Object} recipe
 * @param {number} portions
 */
 export function scaleRecipe(recipe, portions = 2) {
    let newRecipe = {...recipe};
    if (portions > 2) {
        for (let ingredient in newRecipe) {
            newRecipe[ingredient] *= (portions * 1.0 / 2 );
        }
    }
    else if (portions < 2) {
        for (let ingredient in newRecipe) {
            newRecipe[ingredient] = (newRecipe[ingredient] * portions * 1.0) / 2;
        }
    }
    return(newRecipe);
}