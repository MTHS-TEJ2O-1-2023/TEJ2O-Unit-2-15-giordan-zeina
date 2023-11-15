/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Nov 2023
 * This program ...
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let loopCounter1 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(500)

// When "A" is pressed, the pixels move 
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter1 <= 3) {
    sprite.move(1)
    loopCounter = loopCounter + 1
    basic.pause(500)

    while (loopCounter >= 4) {
      sprite.turn(Direction.Right, 90)
      loopCounter1 = loopCounter1 + 1
      basic.pause(500)
      loopCounter = 0
    }
    
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

