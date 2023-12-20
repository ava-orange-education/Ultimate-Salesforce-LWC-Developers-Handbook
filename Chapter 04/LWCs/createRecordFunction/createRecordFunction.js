import { LightningElement } from 'lwc';
import { createRecord, getFieldValue } from 'lightning/uiRecordApi'; 
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class CreateRecordFunction extends LightningElement {

    handleSave() {        
        const fieldValues = {};
        fieldValues[ACCOUNT_NAME_FIELD.fieldApiName] = this.template.querySelector('[data-name="name"]').value;
        fieldValues[ACCOUNT_WEBSITE_FIELD.fieldApiName] = this.template.querySelector('[data-name="website"]').value;

        const recordData = {
            apiName : ACCOUNT_OBJECT.objectApiName,
            fields : fieldValues
        };

        createRecord(recordData)
            .then(newAccount => {
                console.log("Id of the recently created account = "+newAccount.id);
                console.log("Name of the recently created account = "+newAccount.fields.Name.value);
                console.log("Website of the recently created account = "+getFieldValue(newAccount,ACCOUNT_WEBSITE_FIELD));
            })
            .catch(errorObj => {
                console.log("An error occurred: "+errorObj.body.error);
            });
    }
}