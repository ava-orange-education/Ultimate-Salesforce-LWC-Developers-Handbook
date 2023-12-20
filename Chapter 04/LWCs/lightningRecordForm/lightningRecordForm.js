import { LightningElement, api, wire } from 'lwc';

import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_PHONE_FIELD from "@salesforce/schema/Account.Phone";
import ACCOUNT_WEBSITE_FIELD from "@salesforce/schema/Account.Website";
import ACCOUNT_ACCOUNTSOURCE_FIELD from "@salesforce/schema/Account.AccountSource";

export default class LightningRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_WEBSITE_FIELD, ACCOUNT_ACCOUNTSOURCE_FIELD];
    // fields = ['Name', 'Phone', 'Website', 'AccountSource']; --> alternative version for determining the fields
    
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    get recordTypeId() {
       const rtis = this.objectInfo.data.recordTypeInfos;
       return Object.keys(rtis).find(rti => rtis[rti].name === "Direct Account");
    }

    handleSubmit() {
        console.log("The record is submitted.");
    }

    handleSuccess() {
        console.log("The record is successfully saved.");
    }

    handleError() {
        console.log("An error is occurred while saving the record!");
    }

    handleCancel() {
        console.log("Cancelled: No changes are done!");
    }
}