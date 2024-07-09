// RUN:
// npx ts-node OCP/ocp-good.ts 

import { Bitcoin } from "./payment-methods/Bitcoin";
import { CreditCard } from "./payment-methods/CreditCard";
import { IPaymentStrategy } from "./payment-methods/IPaymentStrategy";

class PaymentProcessorGood {
  processPayment(payment: IPaymentStrategy) {
    payment.validatePayment();
    payment.processPayment();
    console.log("Payment processed successfully!");
  }

  // adding a new payment method is as simple as creating a new class that implements the IPaymentStrategy interface
}


console.log("OCP Good:")

const paymentProcessorGood = new PaymentProcessorGood();
// paymentProcessorGood.processPayment(new CreditCard());
// paymentProcessorGood.processPayment(new Bitcoin());