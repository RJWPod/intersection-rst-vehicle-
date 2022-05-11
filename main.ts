input.onButtonPressed(Button.A, function () {
    Ambulance += -1
    if (Ambulance != 0) {
        Ambulance += 1
        if (Ambulance == 0) {
            Ambulance += -1
            radio.sendNumber(7)
            basic.pause(5000)
        }
    }
})
function ambulance () {
	
}
let Ambulance = 0
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
radio.setGroup(177)
Ambulance = 1
