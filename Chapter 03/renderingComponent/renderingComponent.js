import { LightningElement } from 'lwc';

export default class RenderingComponent extends LightningElement {
    isBlue = false;
    isRed = false;
    isGreen = true;
    isOrange = true;
    tableKey = 't1';

    contacts = [
        {
            Id: 1,
            Name: 'Jack Jones',
            Title: 'Product Manager',
        },
        {
            Id: 2,
            Name: 'Michelle Taylor',
            Title: 'Sales Manager',
        },
        {
            Id: 3,
            Name: 'Tim Wine',
            Title: 'Chief Marketing Officer',
        },
        {
            Id: 4,
            Name: 'Cécile Dubois',
            Title: 'International Sales Executive',
        },
    ];
}