import { LightningElement, api, wire } from 'lwc';
import getCurrentAccount from '@salesforce/apex/updateRecordController.getCurrentAccount';
import { updateRecord } from 'lightning/uiRecordApi'; 
import ACCOUNT_ID_FIELD from '@salesforce/schema/Account.Id';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class UpdateRecordFunction extends LightningElement {

    @api recordId;
    currentAccount;
    @wire(getCurrentAccount, {accountId: '$recordId'}) wiredFunction({error, data}) {
        if(data) {
            this.currentAccount = data;
        }
        else if(error) {
            console.log("Error occurred while decorating the 'wiredFunction'.");
            console.log(error);
        }
    }
    
    handleUpdate() {        
        const fieldValues = {};
        fieldValues[ACCOUNT_ID_FIELD.fieldApiName] = this.currentAccount.Id;
        fieldValues[ACCOUNT_NAME_FIELD.fieldApiName] = this.template.querySelector('[data-name="name"]').value;
        fieldValues[ACCOUNT_WEBSITE_FIELD.fieldApiName] = this.template.querySelector('[data-name="website"]').value;

        const recordData = {
            fields : fieldValues
        };

        updateRecord(recordData)
            .then(updatedAccount => {
                console.log("Account is updated successfully!");
                console.log("New Account Name = "+updatedAccount.fields.Name.value);
                console.log("New Account Website = "+updatedAccount.fields.Website.value);
            })
            .catch(errorObj => {
                console.log("An error occurred: "+errorObj.body.error);
            });
    }
}