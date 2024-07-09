// npx ts-node ISP/isp-good.ts

interface IDrinksDelivery {
    deliverDrinks(): void;
}

interface IFoodDelivery {
    deliverFood(): void;
}

interface IDessertsDelivery {
    deliverDesserts(): void;
}

interface IEletrodomesticsDelivery {
    deliverEletro(): void;

}


class FoodDelivery implements IDrinksDelivery, IFoodDelivery, IDessertsDelivery {
    deliverDrinks(): void {
        console.log('Delivering drinks');
    }

    deliverFood(): void {
        console.log('Delivering food');
    }

    deliverDesserts(): void {
        console.log('Delivering desserts');
    }
}

class EletroDelivery implements IEletrodomesticsDelivery {
    deliverEletro(): void {
        console.log('Delivering eletrodomestics');
    }
}


const foodDelivery = new FoodDelivery();
foodDelivery.deliverDrinks();
// foodDelivery.deliverEletro();  // not available


const eletroDelivery = new EletroDelivery();
eletroDelivery.deliverEletro();
