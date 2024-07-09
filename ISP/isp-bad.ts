// npx ts-node ISP/isp-bad.ts 

interface IDelivery {

    deliverDrinks(): void;

    deliverFood(): void;

    deliverDesserts(): void;

    // This method is not used by the Food delivery service
    deliverEletrodomestics(): void;
}


class FoodDeliveryService implements IDelivery {

    deliverDrinks(): void {
        console.log('Delivering drinks');
    }

    deliverFood(): void {
        console.log('Delivering food');
    }

    deliverDesserts(): void {
        console.log('Delivering desserts');
    }

    // Food delivery service does not deliver eletrodomestics
    deliverEletrodomestics(): void {
        throw new Error('I do not deliver eletrodomestics');
    }
}


const foodDeliveryService = new FoodDeliveryService();
foodDeliveryService.deliverDrinks();
foodDeliveryService.deliverEletrodomestics();