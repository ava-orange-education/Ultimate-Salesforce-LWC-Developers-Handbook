import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_PHONE_FIELD from "@salesforce/schema/Account.Phone";
import ACCOUNT_WEBSITE_FIELD from "@salesforce/schema/Account.Website";

const FIELDS = [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_WEBSITE_FIELD];
// const FIELDS = ['Account.Name', 'Account.Phone', 'Account.Website']; --> 2nd way for defining the FIELDS by using an array of strings

export default class GetRecordWireAdapter extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    @wire(getRecord, {recordId : '$recordId', fields: FIELDS})
    accountRecord;

    get name() {
        return this.accountRecord.data ? this.accountRecord.data.fields.Name.value : 'Data error1';
    }

    get phone() {
        return this.accountRecord.data ? this.accountRecord.data.fields.Phone.value : 'Data error2';
    }

    get website() {
        return this.accountRecord.data ? getFieldValue(this.accountRecord.data, ACCOUNT_WEBSITE_FIELD) : 'Data error3';
        // return this.accountRecord.data ? getFieldValue(this.accountRecord.data, 'Account.Website') : 'Data error3'; --> 2nd way for using a field
    }
}