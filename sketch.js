const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var spaceShip;
var meteor;
var laser;
var meteorIMG;
var s;
var lg;
var backgroundIMG;
var laserIMG;
var mg;

function preload(){
  laserIMG=loadImage("laser.jpg");
  backgroundIMG=loadImage("background.webp");
meteorIMG=loadImage("meteor.png");
s=loadImage("spaceship.png");
}

function setup() {
  createCanvas(600,700);

background=createSprite(0,0,600,700);
background.addImage(backgroundIMG);
background.scale=4;

  engine=Engine.create();
  world=engine.world
  spaceShip=createSprite(100,600,10,10)
  spaceShip.addImage(s);
  spaceShip.scale=0.2

  lg=new Group();
  mg=new Group();
}

function draw() {
background.velocityY=1;
if (background.y < 0){
  background.y = background.height/2;
}

  spaceShip.x=mouseX;

  SpawnMeteor();
  if(keyDown("space")){
    SpawnLaser();
  }

  if(lg.isTouching(meteor)){
    meteor.destroy();
    lg.destroyEach();
  }
  drawSprites();
}
 
function SpawnMeteor(){
if(frameCount %30===0){
  meteor=createSprite(100,0,10,10);
  meteor.x=Math.round(random(10,550));
  meteor.addImage(meteorIMG)
  meteor.scale=0.2
  meteor.velocityY=3;
  meteor.lifetime=1000;
  mg.add(meteor);
}
}

function SpawnLaser() {
//if(frameCount %30===0){  
  var laser= createSprite(100, 100, 10, 10);
  laser.shapeColor="red"
 laser.y = 360;
  laser.x=spaceShip.x;
  laser.velocityY = -4;
  laser.lifetime = 100;
   lg.add(laser);
//}
  }

