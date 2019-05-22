// Import s cenes
import Test from './scenes/test';
import { Game } from 'phaser';

let width = innerWidth;
let height = innerHeight;

const config = {
  width,
  height,
  type:Phaser.AUTO,
  scene:[Test],
  physics:Phaser.Physics.ARCADE,
  pixelArt:true
}

const game = new Game(config)
