import {GildedRose, Item} from './gilded-rose';

describe('gildedrose updateQuality', () => {
    test('normal items quality are lower by one', () => {
        const gildedrose = new GildedRose([
            new Item('normal', 10, 50)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(49)
    });

    test('normal items sellIn are lower by one', () => {
        const gildedrose = new GildedRose([
            new Item('normal', 10, 50)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].sellIn).toBe(9)
    });

    test('Once the sell by date has passed, Quality degrades twice as fast', () => {
        const gildedrose = new GildedRose([
            new Item('normal', 0, 50)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(48)
    });

    test('One tha last day of sellIn the quality should degrades by one', () => {
        const gildedrose = new GildedRose([
            new Item('normal', 1, 50)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(49)
    });

    test('The Quality of an item is never negative', () => {
        const gildedrose = new GildedRose([
            new Item('normal', 1, 0)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(0)
    });
    
    test('"Aged Brie" actually increases in Quality the older it gets', () => {
        const gildedrose = new GildedRose([
            new Item('Aged Brie', 1, 30)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(31)
    });

    test('The Quality of an item is never more than 50', () => {
        const gildedrose = new GildedRose([
            new Item('Aged Brie', 1, 50)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(50)
    });

    test('"Sulfuras", being a legendary item, never decreases in Quality', () => {
        const gildedrose = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 1, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(20)
    });

    test('"Sulfuras", being a legendary item, never has to be sold', () => {
        const gildedrose = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 1, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].sellIn).toBe(1)
    });
    test('"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;', () => {
        const gildedrose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(21)
    });
    test('"Backstage passes", quality increases by 2 when sellIn is equal to or under 10', () => {
        const gildedrose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(22)
    });
    test('"Backstage passes", quality increases by 3 when sellIn is equal to or under 5', () => {
        const gildedrose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(23)
    });

    test('"Backstage passes", quality drop to 0 after the concert(sellIn = 0)', () => {
        const gildedrose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
        ]);

        const items = gildedrose.updateQuality()

        expect(items[0].quality).toBe(0)
    });
})
