import { LightningElement } from 'lwc';

export default class EventChildComponent extends LightningElement {

    constructor() {
        super();
        this.template.addEventListener('tag_dispatch', this.handleTagDispatch);
    }

    handleTagDispatch() {
        console.log('We detected an event from lightning-formatted-text tag!');
    }

    renderedCallback() {
        this.template.querySelector('lightning-formatted-text').dispatchEvent(new CustomEvent('tag_dispatch', {bubbles:true}));
    }

    sendCustomEvent(event) {
        console.log(event.target.tagName);
        this.dispatchEvent(new CustomEvent('mycustomevent', {detail: 'Hey! I am the child component!'}));
        this.dispatchEvent(new CustomEvent('mycustomevent2', {bubbles:true}));
    }

}