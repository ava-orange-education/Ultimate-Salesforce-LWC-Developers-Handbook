import xyz from './module1.js';
import {getBedrooms as gBeds, getType as gType, someConstant as myCons} from './module1.js';

const house = new xyz();

console.log(house);
console.log(gBeds(house));
console.log(gType(house));
console.log(myCons);
