while (true) {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        music.playMelody("G - E - G - E - ", 330)
        music.playMelody("A A E B - D E E ", 330)
        music.playMelody("A A D - F# - D - ", 330)
        music.playMelody("A A E B - E G E ", 330)
        music.playMelody("G - E - G - E - ", 330)
        music.playMelody("A A E B - D E E ", 330)
        music.playMelody("A D F# D A -  F# - A F# ", 330)
        music.playMelody("B B B B  D B ", 330)
        music.playMelody("G - E - G - E - ", 330)
        music.playMelody("A A E B - D E E ", 330)
        music.playMelody("A A D - F# - D - ", 330)
        music.playMelody("A A E B - E G E ", 330)
        music.playMelody("G - E - G - E - ", 330)
        music.playMelody("A A E B - D E E ", 330)
        music.playMelody("A D F# D A -  F# - A F# ", 330)
        music.playMelody("B - - - - - - - ", 330)
    } else {
        basic.showString("YOU DON'T HAVE PERMISSON TO WATCH")
    }
}
