import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EventPublisher extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    message = "This message is sent from the publisher!";

    publishEvent() {
        fireEvent(this.pageRef, "myPubSubEvent", this.message);
    }

}