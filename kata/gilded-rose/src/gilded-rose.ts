export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    updateQuality(items = [] as Array<Item>) {
        items.forEach(item => {
            this.updateItemQuality(item);
            
            this.upodateSellIn(item);
        })
            
        return items;
    }

    updateItemQuality(item: Item) {
        if (this.islegendaryItem(item)) {
            return;
        }

        switch(true) {
            case this.isAgedBrie(item):
                this.updateAgedBrieItemQuality(item);
                break
            case this.isbackstagePasses(item):
                this.updateBackstagePassesItemQuality(item);
                break
            case this.isConjured(item):
                this.updateConjuredItemQuality(item);
                break
            default:
                this.updateNormalItemQuality(item);
        }
    }

    upodateSellIn(item: Item) {
        if (this.islegendaryItem(item)) {
            return;
        }

        item.sellIn -=  1;
    }

    updateAgedBrieItemQuality(item: Item) {
        this.increaseItemQualityBy(item, 1);
    }

    updateBackstagePassesItemQuality(item: Item) {
        if (item.sellIn < 1) {
            this.decreaseItemQualityBy(item, item.quality);
            return
        }

        if (item.sellIn < 6) {
            this.increaseItemQualityBy(item, 3);
            return
        }

        if (item.sellIn < 11) {
            this.increaseItemQualityBy(item, 2);
            return
        }

        this.increaseItemQualityBy(item, 1);
    }

    updateNormalItemQuality(item: Item) {
        if(this.itemisExpired(item)) {
            this.decreaseItemQualityBy(item, 2);
            return;
        }

        this.decreaseItemQualityBy(item, 1);
    }

    updateConjuredItemQuality(item: Item) {
        if(this.itemisExpired(item)) {
            this.decreaseItemQualityBy(item, 4);
            return;
        }

        this.decreaseItemQualityBy(item, 2);
    }

    decreaseItemQualityBy(item: Item, number: number) {
        let quality = item.quality - number;

        if (quality < 0) {
            quality = 0;
        }
        
        item.quality = quality;
    }

    increaseItemQualityBy(item: Item, number: number) {
        let quality = item.quality + number;

        if (quality > 50) {
            quality = 50;
        }
        
        item.quality = quality;
    }

    isAgedBrie(item: Item) {
        return item.name == 'Aged Brie';
    }

    isbackstagePasses(item: Item) {
        return item.name == 'Backstage passes to a TAFKAL80ETC concert';
    }

    islegendaryItem(item: Item) {
        return ['Sulfuras, Hand of Ragnaros'].includes(item.name);
    }

    itemisExpired(item: Item) {
        return item.sellIn < 1;
    }

    isConjured(item: Item) {
        return item.name == 'Conjured';
    }
}
