//oven polymorphically added to Range

class Oven {
    constructor() {
        this.tray = null;
    }

    add(tray) {
        this.tray = tray;
        print(`tray with ${this.tray.ingredients} added!`);
    }
    on() {
        print(`Oven turned on!`);
    }
    off() {
        print(`Oven turned off!`);
    }
    bake() {
        print(`oven bakes...`);
    }
}

import print from "./print.js";
import { Burner, BurnerIndex, convert} from "./burner.js";

const RangeType = {
    Electric: "Electric",
    Gas: "Gas"
}

export default class Range {
    constructor(type, stove) {
        //by default oven is not installed
        this.oven = null;

        //RangeType.Electric, or RangeType.Gas
        this.type = type;
        
        this.burners = [new Burner(BurnerIndex.UpperLeft),
                        new Burner(BurnerIndex.UpperRight),
                        new Burner(BurnerIndex.LowerLeft),
                        new Burner(BurnerIndex.LowerRight)];
        
        if (type == RangeType.Electric) {
            // ..
        }
        if (type == RangeType.Gas) {
            // ..
        }

        console.log(`created ${type} range!`);
    } //end of constructor

    install_oven() {
        //polymorphism - in action 

        this.oven = new Oven();
        print('installed oven just now!');

    }

    //Range.install_oven()

    //Range,place(index, vessel)

    place(index, vessel){
        this.burners[index].vessel = vessel;        //putting vessel on top of the indexed burner
        print(`placed ${vessel.material} ${vessel.type} on range index ${index}.`);
    }

    // Range.run(minutes)

    run(minutes) {
        
        this.burners.forEach(item => convert(this.type, minutes));
        
        this.burners.forEach(item => {
            
            item.vessel ? item.cook() : null
            
        });
    }





}