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
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            this.updateItemQuality(item);
            
            this.upodateSellIn(item);
        })
            
        return this.items;
    }

    updateItemQuality(item: Item) {
        if (this.isNotAgedBrie(item) && this.isNotbackstage(item)) {
            if (item.quality > 0) {
                if (this.isNotSulfuras(item)) {
                    if(this.itemExpired(item)) {
                        item.quality = item.quality - 2
                    } else {
                        item.quality = item.quality - 1
                    }
                    
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1
                if (this.isbackstage(item)) {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }

                    if (item.sellIn < 1) {
                        item.quality = 0;
                    }
                }
            }
        }
    }

    upodateSellIn(item: Item) {
        if (this.isSulfuras(item)) {
            return;
        }

        item.sellIn -=  1;
    }

    isNotAgedBrie(item: Item) {
        return item.name != 'Aged Brie';
    }

    isNotbackstage(item: Item) {
        return item.name != 'Backstage passes to a TAFKAL80ETC concert';
    }

    isbackstage(item: Item) {
        return item.name == 'Backstage passes to a TAFKAL80ETC concert';
    }

    isNotSulfuras(item: Item) {
        return item.name != 'Sulfuras, Hand of Ragnaros';
    }

    isSulfuras(item: Item) {
        return item.name == 'Sulfuras, Hand of Ragnaros';
    }

    itemExpired(item: Item) {
        return item.sellIn < 1;
    }
}
