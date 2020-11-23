
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,groundObject,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	

	paperObject=new Paper(200,560,80);
	groundObject = new Ground(600,580,1200,20);
	dustbin1 = new Dustbin(1000,560,300,15);
	dustbin2 = new Dustbin(840,420,15,300);
	dustbin3 = new Dustbin(1160,420,15,300);
	
	

   
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-45})
	}
}

