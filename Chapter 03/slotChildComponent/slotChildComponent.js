/* eslint-disable eqeqeq */
import { LightningElement } from 'lwc';

export default class SlotChildComponent extends LightningElement {
    handleSlotChange(event) {
        const slot = event.target;
        console.log("slot change event is triggered! "+slot.name);
        if(slot.name == "slot1") console.log("Slot 1 is updated!");
        if(slot.name == "slot2") console.log("Slot 2 is updated!");
    }
}