var ship, ship_running,edges;
var seaImage;
var sea;


function preload(){
ship_running=loadAnimation ("ship1.png","ship2.png","ship3.png","ship4.png");
seaImage = loadImage("sea.png")


}

function setup(){
  createCanvas(600,200);
  // creating ship
  ship = createSprites()
  ship.addAnimation("running",ship_running)
  edges = createEdgeSprites()

  //adding scale and position to ship
  ship.scale =1
  ship.x=40

  //creating sea 
  sea =createSprites(300,180,600,50)
  sea.addImage ("sea",seaImage)
}

function draw() {
  background("white");

  sea.velocityX =-2

if(sea.x<0)
{sea.x =sea.width/2}

 drawSprites
}