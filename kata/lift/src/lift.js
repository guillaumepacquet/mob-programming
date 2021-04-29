class Lift {
    constructor(floors, defaultPosition = 0) {
        this.floors = floors;
        this.position = defaultPosition;
        this.defaultPosition = defaultPosition
    }

    up() {
        if (!this.canGoUp()) {
            throw new Error('Lift cannot fly')
        }
        this.position += 1;
    }

    down() {
        if (!this.canGoDown()) {
            throw new Error('Lift at bottom floor');
        }

        this.position -= 1;
    }

    canGoDown() {
        return this.position > this.floors[0];
    }

    canGoUp() {
        return this.position < this.floors[this.floors.length - 1]
    }
}

module.exports = Lift;
