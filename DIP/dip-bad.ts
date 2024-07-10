

// a dependecy:
class PaypalService {
    constructor() {}

    payAmount(amount: number) {
        // Pay amount using Paypal
        console.log(`Paying amount $${amount} using Paypal`);
    }
}



class PaymentProcessor {
    // dependency injection
    private paypalService: PaypalService;

    constructor() {
        // what if we want to change the payment service to something else?
        // Our code is tightly coupled with PaypalService
        // and is dependent on a service. let's invert it!
        this.paypalService = new PaypalService();
    }

    processPayment(amount: number) {
        this.paypalService.payAmount(amount);
    }
    
}


console.log("DIP Bad:")
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100); // Paying amount $100 using Paypal