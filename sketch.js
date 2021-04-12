var fixedRect, movingRect;
var r1,r2;
var r3,r4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  r1 = createSprite(100,20,50,50);
  r1.shapeColor = "yellow";
  r1.velocityY = 5;

  r2 = createSprite(100,700,50,50);
  r2.shapeColor = "blue";
  r2.velocityY = -5; 

  r3 = createSprite(200,200,60,60);
  r3.shapeColor = "grey";

  r4 = createSprite(500,200,60,60);
  r4.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,r4)){
  movingRect.shapeColor = "red";
  r4.shapeColor = "red";
 }

else{
  movingRect.shapeColor = "green";
  r4.shapeColor = "purple";
}
bounceOff();
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;

}
}
function bounceOff(){
  if ( r1.x-r2.x < r2.width/2 +r1.width/2 &&
    r2.x-r1.x < r2.width/2 +r1.width/2  ){
      r1.velocityX = r1.velocityX* (-1);
      r2.velocityX = r2.velocityX* (-1);
    }
    if ( r1.y-r2.y < r2.height/2 +r1.height/2 &&
      r2.y-r1.y < r2.height/2 +r1.height/2  ){
        r1.velocityY = r1.velocityY* (-1);
        r2.velocityY = r2.velocityY* (-1); 
}
}