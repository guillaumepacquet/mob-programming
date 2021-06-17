import { Item } from './item';

export class LegendaryItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    agedItemByOneDay() {
        //legendary item does not aged.
    }
}
