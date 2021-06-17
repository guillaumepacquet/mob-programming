export abstract class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    decreaseQualityBy(number: number) {
        this.quality -= number;

        if (this.quality < 0) {
            this.quality = 0;
        }
    }

    increaseQualityBy(number: number) {
        this.quality += number;

        if (this.quality > 50) {
            this.quality = 50;
        }
    }

    isExpired() {
        return this.sellIn < 1;
    }

    abstract agedItemByOneDay(): void;
}
