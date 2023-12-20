import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import FIRST_CHANNEL from '@salesforce/messageChannel/OurFirstMessageChannel__c';

export default class PublisherMessageChannel extends LightningElement {
    @wire(MessageContext) mesCon;

    sendMessage() {
        const message = {
            recordId: '12345678',
            name: 'Test name'
        }

        publish(this.mesCon, FIRST_CHANNEL, message);
        console.log('Message is sent to the channel...');
    }

}