import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DisplayNotifications extends LightningElement {
    async handleAlertClick() {
        await LightningAlert.open({
            message: 'This is the error message in the alert box.',
            theme: 'error', 
            label: 'A Simple Alert Example' 
        });
    }

    async handleConfirmClick() {
        // eslint-disable-next-line no-unused-vars
        const result = await LightningConfirm.open({
            message: 'It is where we write the confirmation message',
            variant: 'headerless'
        });
    }

    handlePromptClick() {
        LightningPrompt.open({
            message: 'Your answer please:',
            label: 'A Simple Prompt Example', 
            defaultValue: ''
        // eslint-disable-next-line no-unused-vars
        }).then((result) => {
            // put the actions to be done here after the user responds
        });
    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: 'A Simple Toast Notification Example',
            message: 'It is successful!',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}