// Open Closed Principle (OCP)
// Open for extension, closed for modification

// DON'T:

class PaymentProcessor {
    constructor() {}

    processPayment(payment) {
        if (payment.type === 'creditCard') {
            console.log('Processing credit card payment...');
            setTimeout(() => {
                console.log('Credit card OK!');
            }, 3000);
        } else if (payment.type === 'paypal') {
            console.log('Processing PayPal payment...');
            setTimeout(() => {
                console.log('Its all okay with paypal!');
            }, 3000);
        } else if (payment.type === 'bitcoin') {
            console.log('Processing Bitcoin payment...');
            setTimeout(() => {
                console.log('Payment of bitcoin processed in!!!');
            }, 3000);
        } 

        // pix, boleto, ...
    }
}

payment = new PaymentProcessor();

payment.processPayment({ type: 'creditCard' });
// payment.processPayment({ type: 'paypal' });
