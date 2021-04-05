sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    dough.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(5)
    info.changeScoreBy(1)
})
let dough: Sprite = null
scene.setBackgroundImage(assets.image`backround`)
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
forever(function () {
    if (info.score() >= 10) {
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
    if (info.score() == 20) {
        info.changeScoreBy(2)
    }
    if (info.score() >= 30) {
    	
    } else {
    	
    }
})
