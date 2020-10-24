
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ball,ground,helicopter,helicopterIMG;
var engine,world
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  helicopter=createSprite(width/2, 170, 10,10);
  helicopter.addImage(helicopterIMG)
  helicopter.scale=0.9

  var options= {


    isStatic: true
  }
 
  ground = Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
console.log(ground)
console.log(ground.position.x)
console.log(ground.position.y)
var bounce={
  restitution:0.5
}
ball=Bodies.circle(200,200,30,bounce)
World.add(world,ball)
console.log(ball)

  
}


function draw() {
	background(0);  
	Engine.update(engine);
	rectMode(CENTER)
	rect(ground.position.x,ground.position.y,400,20)
	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,40,40)
  
  
  drawSprites();
       
}





