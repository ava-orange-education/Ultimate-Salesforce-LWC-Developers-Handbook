import { LightningElement } from 'lwc';
import xyz from './utils';
import {getBedrooms as gBeds, getType as gType, someConstant as myCons} from './utils';
import {sumTwoNumbers, multiplyTwoNumbers} from 'c/serviceComponentExample';

export default class FirstLWC extends LightningElement {
    house = new xyz();
    numberOfBeds = gBeds(this.house);
    houseType = gType(this.house);
    cons = myCons;
    total = sumTwoNumbers(5,3);
    result = multiplyTwoNumbers(5,3);
}