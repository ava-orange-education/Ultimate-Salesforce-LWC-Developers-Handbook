/* eslint-disable @lwc/lwc/no-inner-html */
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    renderedCallback() {
        let h1Content = this.template.querySelector('h1');
        h1Content.innerHTML = "Updated title!";
    }    
}