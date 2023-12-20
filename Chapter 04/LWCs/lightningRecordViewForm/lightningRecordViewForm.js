import { LightningElement, api } from 'lwc';

export default class LightningRecordViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
}