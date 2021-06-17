import { Item } from './item';

export class GildedRose {
    updateQuality(items = [] as Array<Item>) {
        items.forEach(item => {
            item.agedItemByOneDay();
        })
            
        return items;
    }
}
