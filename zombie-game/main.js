var game = new Phaser.Game(600, 600);
var zombie = {
  preload: function() {
    game.load.image('fond', 'assets/fond.png');
    game.load.image('player', 'assets/player.png');
  },
  create: function() {
    game.add.sprite(0, 0, 'fond');
    this.player = game.add.sprite(300, 500, 'player').anchor.setTo(0.5);
  },
  update: function() {
    
  }
};

game.state.add('zombie', zombie);
game.state.start('zombie');
