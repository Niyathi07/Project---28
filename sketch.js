
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5,mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15;

function preload()
{
 boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1200,20);
    tree=new Tree(800,500,100,100);

	stone=new Stone(140,600,20,20);

	boy=createSprite(200,940,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;
	
	mango1=new Mango(800,350,20);
	mango2=new Mango(850,200,20);
	mango3=new Mango(750,330,20);
	mango4=new Mango(820,275,20);
	mango5=new Mango(900,400,20);
    mango6=new Mango(950,330,20);
	mango7=new Mango(1000,175,20);
	mango8=new Mango(1000,250,20);
	mango9=new Mango(760,180,20);
	mango10=new Mango(500,350,20);
	mango11=new Mango(400,250,20);
	mango12=new Mango(600,150,20);
	mango13=new Mango(650,305,20);
	mango14=new Mango(550,200,20);
	mango15=new Mango(670,100,20);
  
    launcher=new Launcher(stone.body,{x:160,y:900});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  textSize(25);
  text("PRESS SPACE TO GET A NEW STONE",50 ,50);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();
 mango13.display();
 mango14.display();
 mango15.display();

 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);
 detectCollision(stone,mango11);
 detectCollision(stone,mango12);
 detectCollision(stone,mango13);
 detectCollision(stone,mango14);
 detectCollision(stone,mango15);

 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}


