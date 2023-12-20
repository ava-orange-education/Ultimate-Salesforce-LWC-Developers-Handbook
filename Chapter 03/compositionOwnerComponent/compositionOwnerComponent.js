import { LightningElement } from 'lwc';

export default class CompositionOwnerComponent extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    options = [
        {label:'Please Select', value:'0'},
        {label:'Addition', value:'add'},
        {label:'Subtraction', value:'subtract'},
        {label:'Multiplication', value:'multiply'},
        {label: 'Division', value:'divide'}
    ];

    updateNumbers(event) {
        if(event.target.name === 'first-number')
            this.firstNumber = event.target.value;
        else if(event.target.name === 'second-number')
            this.secondNumber = event.target.value;
    }

    handleChange(event) {
        const calculationType = event.target.value;
        if(this.firstNumber !== undefined && this.firstNumber !== null && this.firstNumber !== '' && this.secondNumber !== undefined && this.secondNumber !== null && this.secondNumber !== '') {
            this.template.querySelector('c-composition-composed-component').title = event.target.options.find(opt => opt.value === event.detail.value).label + ' Result = ';
            this.result = this.template.querySelector('c-composition-composed-component').doTheCalculation(calculationType,this.firstNumber,this.secondNumber);
        }
        else {
            this.template.querySelector('c-composition-composed-component').title = 'Please enter both numbers, then select the calculation type!';
            event.target.value = '0';
            this.result = '';
        }
    }
}