let burner = new Burner(BurnerIndex.UpperLeft);
let skillet = new Pan("iron");
burner.place(skillet);
burner.on();
range.run(1);


//

export const BurnerIndex = {UpperLeft: 0, UpperRight: 1, LowerLeft: 2, LowerRight: 3};

export default class Burner {
    constructor(id) {
        this.id = id;
        this.state = Burner.Off;
        this.vessel = null; // later link to what's on the burner
        print(`created burner ${this.id} which is in Off state.`);
    }
    
    on() {
        this.state = Burner.On;
        print(`Burner ${this.id} turned on!`);
    }

    off() {
        this.state = Burner.Off;
        print(`Burner ${this.id} turned off`);
    }
};

//On and Off inside the class - is static keyword

Burner.Off = false;
Burner.On = true;

