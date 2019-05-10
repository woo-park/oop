import Ingredient from "./ingredient.js";
import Fridge from "./fridge.js";
import { Burner, BurnerIndex } from "./burner.js";
import { Range, RangeType } from "./cookware.js";
import FoodFactory from "./foodfactory.js";

let Ing = Ingredient;

//define ingredients

const water         = new Ing("water", Ing.liquid, 0);
const olive_oil     = new Ing("olive_oil", Ing.liquid, 0);
const broth         = new Ing("broth", Ing.liquid, 11);
const red_wine      = new Ing("red_wine", Ing.liquid, 125);

//spices
const bay_leaf      = new Ing("bay_leaf", Ing.liquid, 6);
const peppercorn      = new Ing("peppercorn", Ing.liquid, 17);

//meats
const beef          = new Ing("beef", Ing.meat, 213);
const chicken          = new Ing("chicken", Ing.meat, 335);
const bacon          = new Ing("bacon", Ing.meat, 43);

//fruits

const pineapple     = new Ing("pineapple", Ing.fruit, 452);
const apple     = new Ing("apple", Ing.fruit, 95);
const blueberry     = new Ing("blueberry", Ing.fruit, 85);

// vegetables
const mushroom = new Ing("mushroom", Ing.vegetable, 4);
const carrot = new Ing("carrot", Ing.vegetable, 41);
const potato = new Ing("potato", Ing.vegetable, 163);
const pepper = new Ing("pepper", Ing.vegetable, 24);
const onion = new Ing("onion", Ing.vegetable, 44);

//eggs
const egg       = new Ing("egg", Ing.egg, 78);

// grain, other
const oatmeal = new Ing("oatmeal", Ing.grain, 158);
const rice = new Ing("rice", Ing.grain, 206);
const brown_rice = new Ing("brown_rice", Ing.grain, 216);
const cheese = new Ing("cheese", Ing.cheese, 113);
const sauce = new Ing("sauce", Ing.sauce, 70);

//creating electric range
let range = new Range(RangeType.Electric);

//create cooking vessels
let pan = new Pan("iron");
let skillet = new Pan("iron");
let pot = new Pan("stainless steel");
let tray = new Tray("aluminum");

//making beef stew
pot.add(water);
pot.add(red_wine);
pot.add(beef);
pot.add(potato);
pot.add(carrot);
pot.add(bay_leaf);
pot.add(peppercorn);
pot.calories();     // search thru all and compare with .. then add

//but we need another reference object
skillet.add(FoodFactory.make(mushroom));
skillet.add(FoodFactory.make(carrot));
skillet.add(FoodFactory.make(onion));
skillet.add(FoodFactory.make(potato));
skillet.add(FoodFactory.make(pepper));
skillet.calories();

// FoodFactory ensures all ingredients are unique object instances
pan.add(FoodFactory.make(egg));
pan.add(FoodFactory.make(egg));
pan.add(FoodFactory.make(egg));
pan.calories();

//placing pan pot on the burners
range.place(BurnerIndex.LowerLeft, pot);
range.place(BurnerIndex.LowerRight, skillet);
range.place(BurnerIndex.UpperRight, pan);

range.burners[BurnerIndex.LowerLeft].on();
range.burners[BurnerIndex.LowerRight].on();
range.burners[BurnerIndex.UpperRight].on();

range.run(1);

