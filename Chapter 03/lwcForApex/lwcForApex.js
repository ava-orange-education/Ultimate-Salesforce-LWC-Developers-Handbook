import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/simpleApexClass.getAllAccounts';

export default class LwcForApex extends LightningElement {
    accounts;

    connectedCallback() {
        getAccounts().then(result => {
            this.accounts = result;
        })
        .catch(error => {console.log(error)});
    }

}