class Test{
constructor(){
 this.sprite=createSprite(random(0,800),0,random(1,5),random(1,15));
 this.width=random(1,5);
 this.height=random(1,15);
 this.sprite.velocityY=9;
 this.sprite.depth=random(1,5);
}
}