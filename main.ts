basic.forever(function () {
    if (edubitIrBit.isIrSensorTriggered()) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        edubitRgbBit.setPixelColor(3, 0xffff00)
        for (let index = 0; index < 50; index++) {
            edubitRgbBit.rotatePixels(1)
        }
    }
})
