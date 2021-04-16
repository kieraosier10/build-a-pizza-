// sets code to move the pizza randomly when the sprites overlap 
// changes the countdown from 5 seconds to 3 seconds when the score hits 30 
// changes the score from counting by ones to counting by twos when the score hits 30 
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    dough.setPosition(randint(10, 160), randint(10, 120))
    if (info.score() < 30) {
        info.startCountdown(5)
    } else {
        info.startCountdown(3)
    }
    
    if (info.score() >= 30) {
        info.changeScoreBy(2)
    } else {
        info.changeScoreBy(1)
    }
    
})
// sets backround to pizza shop, lists the variables in the game, sets starting score to 0
let dough : Sprite = null
scene.setBackgroundImage(assets.image`
    backround
`)
let spatula = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
controller.moveSprite(spatula)
dough = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
let list2 = [dough, spatula]
info.setScore(0)
// changes the image from the dough to the fully made pizza when thescore hits 15
// sets the game to when the score hits 50 the game is over and you win
forever(function on_forever() {
    if (info.score() >= 15) {
        dough.setImage(img`
            d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d 2 2 2 2 2 2 2 2 2 2 2 2 d d 
                        d d 2 1 1 1 1 1 1 1 1 1 1 2 d d 
                        d d 2 1 2 1 2 1 2 1 2 1 1 2 d d 
                        d d 2 1 1 2 1 2 1 2 1 2 1 2 d d 
                        d d 2 1 2 1 2 1 2 1 2 1 1 2 d d 
                        d d 2 1 1 2 1 2 1 2 1 2 1 2 d d 
                        d d 2 1 2 1 2 1 2 1 2 1 1 2 d d 
                        d d 2 1 1 2 1 2 1 2 1 2 1 2 d d 
                        d d 2 1 2 1 2 1 2 1 2 1 1 2 d d 
                        d d 2 1 1 2 1 2 1 2 1 2 1 2 d d 
                        d d 2 1 1 1 1 1 1 1 1 1 1 2 d d 
                        d d 2 2 2 2 2 2 2 2 2 2 2 2 d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d
        `)
    }
    
    if (info.score() == 50) {
        game.over(true)
    }
    
})
