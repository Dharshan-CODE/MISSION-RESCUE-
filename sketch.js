var helicopterIMG, helicopter, package,packageIMG;
var packageBody, packageBody_options,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadAnimation("h1.png","h2.png","h3.png","h4.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addAnimation("fly",helicopterIMG);
	helicopter.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody_options={
		restitution:0.25,
		isStatic:true
		
		}
	packageBody = Bodies.circle(width/2 , 200 , 5,packageBody_options );
	World.add(world, packageBody);
	
    var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10,ground_options);
 	World.add(world, ground);

    console.log(packageBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody, isStatic=false)
	
    
  }
}



