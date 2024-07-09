import { IPaymentStrategy } from "./IPaymentStrategy";

export class CreditCard implements IPaymentStrategy {
    validatePayment(): boolean {
        // Credit card validation logic
        console.log("Validating credit card payment");
        return true;
    }

    processPayment(): void {
        // Credit card payment processing logic
        console.log("Processing credit card payment...");
    }
}