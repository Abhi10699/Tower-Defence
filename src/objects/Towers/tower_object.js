import Phaser from 'phaser';
import Bullet from '../Bullet';

const { Vector2 } = Phaser.Math;

export default class Tower extends Phaser.GameObjects.Sprite{
  constructor(scene){

    super(scene,100,100,'turrent');

    // Variables

    this.offset = 30;
    this.parentScene = scene;
    this.muzzle = new Muzzle(scene,this.x +
      (this.width/2) * 2 +
      this.offset,this.y )

    this.range = 100;

    // Setting properties
    this.setOrigin(0,0);
    this.setOrigin(0,0.5);
    this.setScale(3,3);

    scene.add.existing(this);
    scene.add.existing(this.muzzle);
  }

  followMouse(){
    this.muzzle.rotation = Phaser.Math.Angle.
    Between(this.x,
      this.y,
      this.parentScene.input.activePointer.x,
      this.parentScene.input.activePointer.y
    );
  }

  checkDistance(x,y){
    let enemy_vector = new Vector2(x,y);
    let turrent_vector = new Vector2(this.x,this.y);


    if(turrent_vector.distance(enemy_vector) < this.range){
        this.shoot();
    }
  }

  shoot(){
    let spawnX = this.muzzle.x + (this.muzzle.width) * 2 + this.offset;
    let spawnY = this.muzzle.y;
    let tempBullet = new Bullet(this.parentScene,spawnX,spawnY,600,600);
  }
}

class Muzzle extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y){
    super(scene,x,y,'muzzle');
    this.setOrigin(0,0.5);
    this.setScale(3,3);
  }
}
