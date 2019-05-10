import print from "./print.js";
import Ingridient from "./ingredient.js";

export default class FoodFactory {

    constructor() {}
};

FoodFactory.make = function() {
    return new Ingredient(what.name, what.type, what.calories);
};