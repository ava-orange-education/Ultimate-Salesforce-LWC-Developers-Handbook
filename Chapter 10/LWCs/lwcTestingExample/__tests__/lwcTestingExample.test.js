import { createElement } from 'lwc';
import LwcTestingExample from 'c/lwcTestingExample';

describe('c-lwc-testing-example', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Testing the welcome message update after the user clicks on the button', () => {
        // Arrange
        const element = createElement('c-lwc-testing-example', {
            is: LwcTestingExample
        });

        // Act
        document.body.appendChild(element);

        element.shadowRoot.querySelector("lightning-button").click();

        // Assert
        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector('div');
            expect(div.textContent).toBe("Welcome!");
        });
    });
});