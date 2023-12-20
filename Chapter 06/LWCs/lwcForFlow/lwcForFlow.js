import { LightningElement, api } from 'lwc';

export default class LwcForFlow extends LightningElement {
    @api accName;
    @api firstname;
    @api lastname;
    @api phone;
    @api email;
}