basic.forever(function () {
    serial.writeValue("E", pins.analogReadPin(AnalogPin.P0))
})
