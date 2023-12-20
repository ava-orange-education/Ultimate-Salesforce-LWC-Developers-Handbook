import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class LwcSLDS extends NavigationMixin(LightningElement) {

    newAccount(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
              objectApiName: "Account",
              actionName: "new",
            },
        });
    }

    openAllAccounts(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
              objectApiName: "Account",
              actionName: "list",
            },
            state: {
              filterName: "allAccounts"
            }
          });
    }

}