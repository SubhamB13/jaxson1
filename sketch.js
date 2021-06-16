var path,edges;
var boy,boy_walking;
var pathImage;
var invisibleBoundary1;
var invisibleBoundary2;
var leftBoundary;
var rightBoundary;

function preload(){
  //pre-load images
boy_walking = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=2;
  path.scale=1.2;

  boy = createSprite(200,350);
  boy.addAnimation("walking",boy_walking);
  boy.scale=0.05;

  //invisibleBoundary1 = createSprite(368,200,70,400);
  //invisibleBoundary1.visible=false;

  //invisibleBoundary2 = createSprite(38,200,70,400);
  //invisibleBoundary2.visible=false;

  leftBoundary = createSprite(0,20,100,800);
  leftBoundary.visible=false;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible=false;
  
}

function draw() {
  background("black");

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

boy.x=mouseX;

//oy.collide(invisibleBoundary1);
//boy.collide(invisibleBoundary2);


if(path.y > 400){
  path.y = height/2;
}


  drawSprites();
}
