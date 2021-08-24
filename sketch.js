const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgim;
var iron;
function preload(){
  bgim=loadImage("image.png");
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  iron=new Ironman(400,350,100,100);
  Engine.run(engine);
}

function draw() {
  background(bgim);
  iron.display(); 
  //drawSprites();
}