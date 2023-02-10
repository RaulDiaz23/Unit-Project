controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
function Endgame1 (num1: number) {
    scene.setBackgroundImage(assets.image`WinGlobe`)
    game.splash(p1name)
    if (num1 == 0) {
        Endgame2()
    }
}
function Endgame2 () {
    light.showAnimation(light.rainbowAnimation, 1000)
    game.splash(p2name)
}
let Asteroid: Sprite = null
let p2name = ""
let p1name = ""
scene.setBackgroundImage(assets.image`Space1`)
p1name = game.askForString("Player 1 Name")
p2name = game.askForString("Player 2 Name")
let Player1life = 4
let Player2life = 4
while (Player1life + Player2life > 4) {
    Asteroid = sprites.create(assets.image`Asteroidprojectile`, SpriteKind.Projectile)
    Asteroid.setPosition(randint(0, 100), randint(0, 100))
    Asteroid.setVelocity(5, 50)
    pause(500)
}
let PlayerSprite1 = sprites.create(assets.image`P1`, SpriteKind.Player)
let PlayerSprite2 = sprites.create(assets.image`P2`, SpriteKind.Player)
PlayerSprite1.setPosition(133, 51)
PlayerSprite2.setPosition(13, 51)
if (Player1life == 0) {
    Endgame1(1)
}
if (Player2life == 0) {
    Endgame1(0)
}
