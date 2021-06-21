function preload() {
  girli=loadImage("girl.png")
  boyi=loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
 girl = createSprite(400, 200, 50, 50);
 girl.addImage(girli)
 girl.scale=0.5
  boy = createSprite(100,100,20,30)
  boy.addImage(boyi)
  boy.scale=0.5
  ground=createSprite(400,320,800,20)
}

function draw() {
  background("yellow");  
  drawSprites();
}








