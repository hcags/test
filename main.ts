let inputValue = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    inputValue = (pins.analogReadPin(AnalogPin.P1) + 1) * 100 / 1024
    led.setBrightness(inputValue / 100 * 255)
})
