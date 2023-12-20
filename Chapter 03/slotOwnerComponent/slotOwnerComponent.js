import { LightningElement } from 'lwc';

export default class SlotOwnerComponent extends LightningElement {
    addOneMoreChildComponent = false;

    handleAdd(){
        this.addOneMoreChildComponent = true;
    }
}