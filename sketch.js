
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;



function setup() {
	createCanvas(1250, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,665,2000,24);
	
	oneSide = new Dustbin(770,650,200,20);
	twoSide = new Dustbin(700,650,20,175);
	
	
	paper = new Paper(50,610,17);

	launcher = new Launcher(paper.body,{x:150,y:300})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  oneSide.display();
  paper.display();
  launcher.display();

  
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	launcher.fly();
	}
	


