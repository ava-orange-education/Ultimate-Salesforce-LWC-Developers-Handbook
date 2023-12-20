import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import JSLib from '@salesforce/resourceUrl/ExternalJS';
import ImageRes from '@salesforce/resourceUrl/ImageResource';

export default class StaticResourcesComponent extends LightningElement {
    imageSrc = ImageRes;
    a = 5;
    b = 3;
    result;
    
    renderedCallback() {
        loadScript(this, JSLib).then(() => {
            // eslint-disable-next-line no-undef
            this.result = externalJS.doTheSum(this.a, this.b);
        });
    }
}