import { Item } from './item';

export class AgedItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    agedItemByOneDay() {
        this.increaseQualityBy(1);
        
        this.sellIn -=  1;
    }
}
