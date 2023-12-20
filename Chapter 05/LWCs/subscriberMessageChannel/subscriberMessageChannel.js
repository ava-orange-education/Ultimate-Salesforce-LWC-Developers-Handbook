import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import FIRST_CHANNEL from '@salesforce/messageChannel/OurFirstMessageChannel__c';

export default class SubscriberMessageChannel extends LightningElement {
    @wire(MessageContext) mesCon;
    subscription = null;

    subscribeToMessageChannel() {
        console.log('Subscribing...');
        if(this.subscription) return;
        this.subscription = subscribe(this.mesCon, FIRST_CHANNEL, (message) => {
            console.log(message);
        });
    }

    unsubscribeFromMessageChannel() {
        console.log('Unsubscribing...');
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}