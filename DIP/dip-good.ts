// depency inversion principle

interface IPaymentService {
    pay(amount: number): void;
}


class Paypal implements IPaymentService {
    pay(amount: number) {
        console.log("Paying amount using Paypal");
    }
}

class Stripe implements IPaymentService {
    pay(amount: number) {
        console.log("Paying amount using Stripe");
    }
}

class PaymentProcessorGood {
    private paymentService: IPaymentService;

    constructor(paymentService: IPaymentService) {
        this.paymentService = paymentService;
    }

    processPayment(amount: number) {
        // DIP: PaymentProcessorGood class is not dependent on any concrete class
        this.paymentService.pay(amount);
    }
}


console.log("DIP Good:")

const payingPaypal = new PaymentProcessorGood(new Paypal());
payingPaypal.processPayment(100); // Paying amount using Paypal

const payingStripe = new PaymentProcessorGood(new Stripe());
payingStripe.processPayment(100); // Paying amount using Stripe