import { LightningElement, api, track } from 'lwc';

export default class DecoratorsComponent extends LightningElement {
    @api myProperty = 'Default child text';
    @track myObject = {
        property1 : 'Some value',
        property2 : 5
    };
    @track myArray = [1,2,3];

    changeObject() {
        this.myObject = {
            property1 : 'Some new value',
            property2 : 8
        };
    }

    changeArray() {
        this.myArray = [4,5,6];
    }

    changeObjectProp1() {
        this.myObject.property1 = 'We updated only property1!';
    }

    changeArrayEl1() {
        this.myArray[0] = 1000;
    }

    @api myMethod() {
        console.log('I am called from the parent component.');
    }
}