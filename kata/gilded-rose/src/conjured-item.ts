import { Item } from './item';

export class ConjuredItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    agedItemByOneDay() {
        this.updateQualityOnDayPass();

        this.sellIn -=  1;
    }

    updateQualityOnDayPass() {
        if(this.isExpired()) {
            this.decreaseQualityBy(4);
            return;
        }

        this.decreaseQualityBy(2);
    }
}
