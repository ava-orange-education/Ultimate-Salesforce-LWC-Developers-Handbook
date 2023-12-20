import { LightningElement } from 'lwc';

export default class LwcTestingExample extends LightningElement {
    welcomeMessage = "Bienvenue!";

    handleClick() {
        this.welcomeMessage = "Welcome!";
    }
}