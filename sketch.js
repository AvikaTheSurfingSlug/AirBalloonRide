var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database
var position

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var BalloonHeight = database.ref('Balloon/Position')
  BalloonHeight.on("value" , readThePositionFromTheDatabase )
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown("A")){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    moveRite(-10,0)
  }
  else if(keyDown("D")){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    moveRite(10,0)
  }
  else if(keyDown("W")){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    moveRite(0,-10)
  }
  else if(keyDown("S")){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    moveRite(0,10)
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function moveRite(x,y){
  database.ref('Balloon/Position').set({
    x: position.x+x,
    y: position.y+y
  })
}
function readThePositionFromTheDatabase(data){
  Position = data.val();
  balloon.x = Position.x
  balloon.y = Position.y
}
