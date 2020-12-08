
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    wall1 = new wall (550,600,20,140);
	wall2 = new wall (700,600,20,140);
	wall3 = new wall (625,570,150,20);
	


	//Create the Bodies Here.

	//ball = createSprite(50,650,25,25)
	ball1 = new ball (100,200)

    ground1 = new ground(400,680,800,10)
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball1.display()
  ground1.display()
  //wall1.display()
  //wall2.display()
  wall3.display()
  drawSprites();
 
}

function keyPressed()  {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-55})
	}
}




