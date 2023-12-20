import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners, } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EventSubscriber extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    receivedData = "We're expecting data from the publisher component...";
    
    connectedCallback() {
        registerListener("myPubSubEvent", this.handleData, this);
    }

    handleData(data) {
        this.receivedData = data;
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}