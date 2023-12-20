import { LightningElement, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/simpleApexClass2.getAllAccounts';

export default class LwcForAuraComponent extends LightningElement {
    @api messageFromAura;
    accounts;

    @wire(getAccounts, {}) wiredFunction({error, data}) {
        if(data) {
            this.accounts = data;
            console.log(this.accounts);
        }
        else if(error) {
            console.log("Error occurred while decorating the 'wiredFunction'.");
            console.log(error);
        }
    }

    sendData() {
        let lwcmessage = "This message is from LWC!";
        this.dispatchEvent(new CustomEvent("senddata", {detail : {lwcmessage}}));
    }
}