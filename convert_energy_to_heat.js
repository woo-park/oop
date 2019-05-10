import print from "./print.js";
import { RangeType } from "./range.js";
//return one unit of energy based on stove implementation

const convert_energe_to_heat = function (source_type, minutes) {
    let energy = 0;
    
    if (source_type == RangeType.Electric) {energy = 1;}

    if (source_type == RangeType.Gas) {energy = 2;}
    
    let E = energy * minutes;
    print(`Range generated ${E} units(s) of energy`);
    
    //return energy generated

    return energy * minutes;
}

//shorthand
const convert = convert_energy_to_heat;