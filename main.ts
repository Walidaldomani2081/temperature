input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(2000)
        basic.showString("Hot")
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
    } else {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(2000)
        basic.showString("Cold")
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
