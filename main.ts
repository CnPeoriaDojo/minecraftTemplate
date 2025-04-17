controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerOne.isHittingTile(CollisionDirection.Bottom) && !(controller.A.isPressed() || controller.B.isPressed())) {
        playerOne.vy = -150
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(playerOne, 0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(playerOne, 0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.right.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
    } else if (controller.left.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
    } else if (controller.up.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), false)
    } else if (controller.down.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
    }
    controller.moveSprite(playerOne, 100, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.right.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), sprites.castle.tilePath5)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), true)
    } else if (controller.left.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), sprites.castle.tilePath5)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), true)
    } else if (controller.up.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), sprites.castle.tilePath5)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), true)
    } else if (controller.down.isPressed()) {
        tiles.setTileAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), sprites.castle.tilePath5)
        tiles.setWallAt(playerOne.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), true)
    }
    controller.moveSprite(playerOne, 100, 0)
})
let playerOne: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
playerOne = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(playerOne, 100, 0)
scene.cameraFollowSprite(playerOne)
playerOne.ay = 300
