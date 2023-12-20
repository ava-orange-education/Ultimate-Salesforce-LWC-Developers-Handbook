import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/simpleApexClass2.getAllAccounts';

export default class LwcForLghtOutVFPage extends LightningElement {
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
}