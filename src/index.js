import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
}

function update() {
}
