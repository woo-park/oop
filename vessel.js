export default class Vessel{
    //object inheritance
    constructor(material, type) {
        this.type = type;
        this.material = material;
        this ingredients = [];
        print(`Created ${this.material} ${this.type}`);
    }


    calories() {
        const reducer = (acc, ing) => acc + ing.calroies;
        let sum = this.ingredients.reduce(reducer, 0);

        print(`there are ${sum} calories in ${this.material} ${this.type}`);

    }

    add(ingredient) {
        this.ingredients.push(ingredient);
        print(`added ${ingredient.name} to ${this.material} ${this.type}`);
    }

    cook() {
        console.log(`cooking in ${this.material} ${this.type}`);
    }
}   //closing export default class vessel

class Pan extends Vessel{
    constructor(material) {
        super(material, "frying pan");
    }
};

class Pot extends Vessel {
    constructor(material) {
        super(material, 'cooking pot');
    }
};

class Tray extends Vessel {
    constructor(material) {
        super(material, 'baking tray');
    }
};

export { Vessel, Pan, Pot, Tray };
