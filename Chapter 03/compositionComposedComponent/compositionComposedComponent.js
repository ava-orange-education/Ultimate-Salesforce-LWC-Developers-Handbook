import { LightningElement, api } from 'lwc';

export default class CompositionComposedComponent extends LightningElement {

    @api title;

    @api doTheCalculation(type, a, b) {
        switch(type) {
            case 'add': return parseInt(a,10)+parseInt(b,10); 
            case 'subtract': return parseInt(a,10)-parseInt(b,10);
            case 'multiply': return parseInt(a,10)*parseInt(b,10);
            case 'divide': return parseInt(a,10)/parseInt(b,10);
            default: return null;
        }
    }
}