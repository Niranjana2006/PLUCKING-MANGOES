
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy,boyImg;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy = createSprite(200,615);
	//boy.addImage(boyImg);
	//boy.scale = 0.1;
	tree = new Tree(650,500,30,300);

	ground = new Ground(400,670,800,20);

	mango1 = new Mangoes(650,400,15);
	mango2 = new Mangoes(600,380,15);
	mango3 = new Mangoes(650,370,15);
	mango4 = new Mangoes(630,450,15);
	mango5 = new Mangoes(670,430,15);
	mango6 = new Mangoes(670,420,15);
	mango7 = new Mangoes(670,410,15);


	stone = new Stone(150,550,20);
	shot = new Shot(150,550,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
  background("lightgreen");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();


  stone.display();
  shot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

  drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    shot.fly();
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		shot.attach(stone.body);
	}
}


