import Phaser from 'phaser';
export default class Bullet extends Phaser.Physics.Arcade.Sprite{
  constructor(scene,spawnX,spawnY,targetX,targetY){
    super(scene,spawnX,spawnY,'bullet');
    // this.setVelocity(targetX,targetY);
    // console.log(this)
    scene.add.existing(this);
  }
}
