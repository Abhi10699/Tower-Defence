import { Scene } from 'phaser';
import Tower from '../objects/Towers/tower_object';

export default class Test extends Scene{
  constructor(){
    super("testScene")
  }
  preload(){
    // this.load.setBaseURL('./');
    this.load.image('turrent','./assets/base.png')
    this.load.image('muzzle','./assets/pipe2.png')
    this.load.image('bullet','./assets/bullet.png')
  }
  create(){

    this.newTurrent = new Tower(this)

  }
  update(){
    this.newTurrent.followMouse();
    this.newTurrent.checkDistance(this.input.activePointer.x,this.input.activePointer.y);
  }

}
