input.onButtonPressed(Button.A, function () {
    Ambulance += 1
    if (Ambulance == 1) {
        radio.sendNumber(7)
    }
    Ambulance = 0
})
let Ambulance = 0
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
radio.setGroup(177)
Ambulance = 0
