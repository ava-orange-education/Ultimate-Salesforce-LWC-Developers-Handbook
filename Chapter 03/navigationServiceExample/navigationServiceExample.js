import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServiceExample extends NavigationMixin(LightningElement) {
    
    url;

    connectedCallback() {
        this.accountListViewPageReference = {
            type:   'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        };

        // eslint-disable-next-line no-return-assign
       this[NavigationMixin.GenerateUrl](this.accountListViewPageReference).then(listPageUrl => this.url = listPageUrl);
    }

    handleClick() {
       this[NavigationMixin.Navigate](this.accountListViewPageReference);
    }
}