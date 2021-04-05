def on_on_overlap(sprite, otherSprite):
    dough.set_position(randint(10, 160), randint(10, 120))
    info.start_countdown(5)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

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

def on_forever():
    if info.score() >= 10:
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
    if info.score() == 20:
        game.over(True)
forever(on_forever)
