import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
import defaultTemplate from './multipleHTMLTemplates.html';

export default class MultipleHTMLTemplates extends LightningElement {

    templateCounter = 1;

    render() {
        if(this.templateCounter % 3 === 1) return templateOne;
        else if(this.templateCounter % 3 === 2) return templateTwo;
        return defaultTemplate;
    }

    increaseCounter(){ 
        this.templateCounter++;
    }
}