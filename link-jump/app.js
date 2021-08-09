const config = {
  width: 500,
  height: 300,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

var game = new Phaser.Game(config);
let dude
let cursors

function preload() {
  this.load.image('dude', 'images/dude.png')
}

function create() {
  dude = this.physics.add.image(100, 100, 'dude')
  dude.body.collideWorldBounds = true

  cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  dude.setVelocityX(0)

  if(cursors.up.isDown){
    dude.setVelocity(0, -300)
  }
  if(cursors.right.isDown){
    dude.setVelocity(300, 0)
  }
  if(cursors.left.isDown){
    dude.setVelocity(-300, 0)
  }
}
