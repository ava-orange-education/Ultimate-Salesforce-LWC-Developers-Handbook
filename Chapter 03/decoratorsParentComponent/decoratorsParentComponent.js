import { LightningElement } from 'lwc';

export default class DecoratorsParentComponent extends LightningElement {

    updateProperty(event) {
        this.template.querySelector('c-decorators-component').myProperty = event.target.value;
        this.template.querySelector('c-decorators-component').myMethod();
    }
    
}