// Lift functions

const Lift = require('./lift');


const floors = [0, 1, 2, 3]

test('lift default position is ground floor', () => {

    const lift = new Lift(floors)

    expect(lift.position).toBe(0);
});

test('lift goes up', () => {
    const lift = new Lift(floors)
    const currentFloor = lift.position

    lift.up()

    expect(lift.position).toBe(currentFloor + 1)
});

test('lift goes down', () => {
    const lift = new Lift(floors, 1)
    const currentFloor = lift.position
    lift.down()

    expect(lift.position).toBe(currentFloor - 1)
});

test('Lift cannot go into basement', () => {
    const lift = new Lift(floors)
    expect(() => lift.down()).toThrow();
});

test('Lift cannot fly', () => {
    const lift = new Lift(floors, floors.length - 1)
    expect(() => lift.up()).toThrow();
})
