import Ingredient from "./ingredient";

export default class Fridge {
    constructor(ingredients) {
        this.items = ingredients;
    }

    get(type) {
        return this.items.filter(i => i.type == type, 0);   //runs thru all the ingredients and get types that are the same as given types - i.e. ingredients.vegetable
    }
};

const ingredients = [water, olive_oil, broth, mushroom, carrot, potato, egg, cheese];

// creating a new refrigerator and storing ingredients in it
let Myfridge = new Fridge(ingredients);

let vegetable = Myfridge.get(Ingredient.vegetable);

console.log(vegetable);