input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P13, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P13, 180)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P14, 60)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P14, 120)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
basic.showNumber(1)
