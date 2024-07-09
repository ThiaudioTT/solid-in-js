export interface IPaymentStrategy {
    validatePayment(): boolean;
    processPayment(): void;
}