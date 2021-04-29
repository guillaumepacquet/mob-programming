const Lift = require('./lift')

class Controller {
    constructor() {
        this.lift = new Lift([0, 1, 2, 3, 4, 5])
    }

    request(destinationFloor) {
    }

    liftPosition() {
        return this.lift.position;
    }
}

module.exports = Controller
