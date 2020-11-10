function setup() {
  createCanvas(800,400);
 A= createSprite(400, 200, 50, 50);
 A.shapeColor="blue"
 b=createSprite(400,200,100,100);
 b.shapeColor="red";

 
}

function draw() {
  background(255,255,255); 
  b.x=mouseX
  b.y=mouseY
  if (b.x-A.x<b.width/2+A.width/2&&
    A.x-b.x<A.width/2+b.width/2&&A.y-b.y<A.height/2+b.height/2&&b.y-A.y<b.height/2+A.height/2){
    
    A.shapeColor="green";
    b.shapeColor="green";
  }
  else{
    A.shapeColor="blue"
    b.shapeColor="red"
  }
  drawSprites();
}