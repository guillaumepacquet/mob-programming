const Controller = require('./controller')

test('Can request the lift', () => {
    const controller = new Controller()
    controller.request(3)
    expect(controller.liftPosition()).toBe(3)
})
