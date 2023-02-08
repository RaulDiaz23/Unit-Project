function NameSelection (P1name: string, P2name: string) {
    p1name = P1name
    p2name = P2name
}
let p2name = ""
let p1name = ""
scene.setBackgroundImage(assets.image`Space1`)
NameSelection(game.askForString("Player1 Name"), game.askForString("Player 2 Name"))
game.gameOver(true)
