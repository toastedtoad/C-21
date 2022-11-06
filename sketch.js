
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friciton:0,
		density:1.2
	}


	//Create the Bodies Here.

ball = Bodies.circle(260,100,20,ball_options)
World.add (world,ball)
groundObj = new Ground(width/2, 620,width,20);
leftSide = new Ground(1100,550,20,120);
rightSide = new Ground(1200,550,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,20,20) 

groundObj.display()
leftSide.display()
rightSide.display()
}

function keyPressed() {
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})


}





}



