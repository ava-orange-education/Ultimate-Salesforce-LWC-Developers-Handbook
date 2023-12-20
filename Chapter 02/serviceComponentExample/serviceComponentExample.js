
// We export the functionality defined in another internal JavaScript file of this service component
export { multiplyTwoNumbers } from './multiply';

// We define only one function, and we do a "named export"
export function sumTwoNumbers(a, b) {
    return a + b;
}