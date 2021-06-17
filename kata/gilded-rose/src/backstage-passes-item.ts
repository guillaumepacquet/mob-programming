import { Item } from './item';

export class BackstagePassesItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    agedItemByOneDay() {
        this.updateBackstagePassesItemQuality()

        this.sellIn -=  1;
    }

    updateBackstagePassesItemQuality() {
        if (this.isAfterConcert()) {
            this.quality = 0;
    
            return
        }

        if (this.isFiveDayPriorToConcert()) {
            this.increaseQualityBy(3);
            return
        }

        if (this.isTenDayPriorToConcert()) {
            this.increaseQualityBy(2);
            return
        }

        this.increaseQualityBy(1);
    }

    isAfterConcert() {
        return this.sellIn < 1;
    }

    isFiveDayPriorToConcert() {
        return this.sellIn < 6;
    }

    isTenDayPriorToConcert() {
        return this.sellIn < 11;
    }
}
