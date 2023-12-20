import { LightningElement } from 'lwc';

export default class EventParentComponent extends LightningElement {
    constructor() {
        super();
        this.template.addEventListener('mycustomevent2',this.handleCustomEventProgrammatically);
    }

    handleCustomEventProgrammatically() {
        console.log("We caught the child component's event programmatically");
    }

    handleCustomEvent(event) {
        console.log(event.target.tagName);
        console.log("Custom event is fired from the child component");
        console.log('Here the data captured: '+event.detail);
    }
}