import { AgedItem } from './aged-item';
import { BackstagePassesItem } from './backstage-passes-item';
import { ConjuredItem } from './conjured-item';
import {GildedRose} from './gilded-rose';
import { LegendaryItem } from './legendary-item';
import { NormalItem } from './normal-item';

describe('gildedrose updateQuality', () => {
    const gildedrose = new GildedRose();

    test('normal items quality are lower by one', () => {
        const items = gildedrose.updateQuality([
            new NormalItem('normal', 10, 50)
        ])

        expect(items[0].quality).toBe(49)
    });

    test('normal items sellIn are lower by one', () => {
        const items = gildedrose.updateQuality([
            new NormalItem('normal', 10, 50)
        ])

        expect(items[0].sellIn).toBe(9)
    });

    test('Once the sell by date has passed, Quality degrades twice as fast', () => {
        const items = gildedrose.updateQuality([
            new NormalItem('normal', 0, 50)
        ])

        expect(items[0].quality).toBe(48)
    });

    test('One the last day of sellIn the quality should degrades by one', () => {
        const items = gildedrose.updateQuality([
            new NormalItem('normal', 1, 50)
        ])

        expect(items[0].quality).toBe(49)
    });

    test('The Quality of an item is never negative', () => {
        const items = gildedrose.updateQuality([
            new NormalItem('normal', 1, 0)
        ])

        expect(items[0].quality).toBe(0)
    });
    
    test('"Aged Brie" actually increases in Quality the older it gets', () => {
        const items = gildedrose.updateQuality([
            new AgedItem('Aged Brie', 1, 30)
        ])

        expect(items[0].quality).toBe(31)
    });

    test('The Quality of an item is never more than 50', () => {
        const items = gildedrose.updateQuality([
            new AgedItem('Aged Brie', 1, 50)
        ])

        expect(items[0].quality).toBe(50)
    });

    test('"Sulfuras", being a legendary item, never decreases in Quality', () => {
        const items = gildedrose.updateQuality([
            new LegendaryItem('Sulfuras, Hand of Ragnaros', 1, 20)
        ])

        expect(items[0].quality).toBe(20)
    });

    test('"Sulfuras", being a legendary item, never has to be sold', () => {
        const items = gildedrose.updateQuality([
            new LegendaryItem('Sulfuras, Hand of Ragnaros', 1, 20)
        ])

        expect(items[0].sellIn).toBe(1)
    });
    
    test('"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;', () => {
        const items = gildedrose.updateQuality([
            new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 11, 20)
        ])

        expect(items[0].quality).toBe(21)
    });

    test('"Backstage passes", quality increases by 2 when sellIn is equal to or under 10', () => {
        const items = gildedrose.updateQuality([
            new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 10, 20)
        ])

        expect(items[0].quality).toBe(22)
    });

    test('"Backstage passes", quality increases by 3 when sellIn is equal to or under 5', () => {
        const items = gildedrose.updateQuality([
            new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 5, 20)
        ])

        expect(items[0].quality).toBe(23)
    });

    test('"Backstage passes", quality drop to 0 after the concert(sellIn = 0)', () => {
        const items = gildedrose.updateQuality([
            new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 0, 20)
        ])

        expect(items[0].quality).toBe(0)
    });

    test('conjured items quality are lower by two', () => {
        const items = gildedrose.updateQuality([
            new ConjuredItem('Conjured', 10, 50)
        ])

        expect(items[0].quality).toBe(48)
    });

    test('Once the sell by date has passed, conjured item Quality are lower by four', () => {
        const items = gildedrose.updateQuality([
            new ConjuredItem('Conjured', 0, 50)
        ])

        expect(items[0].quality).toBe(46)
    });
})
