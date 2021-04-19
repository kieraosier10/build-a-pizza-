#sets code to move the pizza randomly when the sprites overlap 
#changes the countdown from 5 seconds to 3 seconds when the score hits 30 
#changes the score from counting by ones to counting by twos when the score hits 30 
def on_on_overlap(sprite, otherSprite):
    dough.set_position(randint(10, 160), randint(10, 120))
    if info.score() < 30:
        info.start_countdown(5)
    else:
        info.start_countdown(3)
    if info.score() >= 30:
        info.change_score_by(2)
    else:
        info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

#sets backround to pizza shop, lists the variables in the game, sets starting score to 0
dough: Sprite = None
scene.set_background_image(assets.image("""
    backround
"""))
spatula = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(spatula)
dough = sprites.create(img("""
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
    """),
    SpriteKind.food)
list2 = [dough, spatula]
info.set_score(0)

#changes the image from the dough to the fully made pizza when the score hits 15
#sets the game to when the score hits 50 the game is over and you win
def on_forever():
    if info.score() >= 15:
        dough.set_image(img("""
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
        """))
    if info.score() == 50:
        game.over(True)
forever(on_forever)
