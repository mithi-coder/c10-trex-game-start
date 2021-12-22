var trex, trex_running, edges;
var groundImage;
var ground

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
//creat ground sprite
ground= createSprite(300,180,600,20)
ground.addImage("groundImage", groundImage)

}


function draw(){
  //set background color 
  background(200);
  
  //add velocity to ground
  ground.velocityX=-5
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  //condition to make ground image repeating
  if(ground.x<=0){
    ground.x= ground.width/2
  }
  trex.velocityY = trex.velocityY + 1;
  
  //stop trex from falling down
  trex.collide(ground )
  drawSprites();
}