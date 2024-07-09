import { IPaymentStrategy } from "./IPaymentStrategy";

export class Bitcoin implements IPaymentStrategy {
    validatePayment(): boolean {
        // Bitcoin validation logic
        console.log("Validating Bitcoin payment")
        return true;
    }

    processPayment(): void {
        // Bitcoin payment processing logic
        console.log("Processing Bitcoin payment...")
    }
}