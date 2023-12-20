import { LightningElement, api } from 'lwc';

export default class LightningRecordEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;
}