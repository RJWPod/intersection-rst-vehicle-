input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
})
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
radio.setGroup(177)
