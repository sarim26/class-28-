
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage
var mango1,mangoImage
var mango2,mangoImage
var mango3,mangoImage
var mango4,mangoImage
var mango5,mangoImage
var mango6,mangoImage
var mango7,mangoImage
var mango8,mangoImage
var mango9,mangoImage
var mango10,mangoImage
var stone,stoneImage
var tree,treeImage
var slingShot

function preload()
{
	treeImage=loadImage("Pm/tree.png")
boyImage=loadImage("Pm/boy.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")
mangoImage=loadImage("Pm/mango.png")

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	
tree=createSprite(590,480,40,20)
	tree.addImage(treeImage)
	tree.scale=0.35

	mango1=createSprite(520,390,40,20)
	mango1.addImage(mangoImage)
mango1.scale=0.1

mango2=createSprite(470,420,40,20)
	mango2.addImage(mangoImage)
mango2.scale=0.1

mango3=createSprite(590,390,40,20)
	mango3.addImage(mangoImage)
mango3.scale=0.1

mango4=createSprite(640,320,40,20)
	mango4.addImage(mangoImage)
mango4.scale=0.1

mango5=createSprite(710,400,40,20)
	mango5.addImage(mangoImage)
mango5.scale=0.1

mango6=createSprite(650,400,40,20)
	mango6.addImage(mangoImage)
mango6.scale=0.1

mango7=createSprite(540,320,40,20)
	mango7.addImage(mangoImage)
mango7.scale=0.1

mango8=createSprite(700,480,40,20)
	mango8.addImage(mangoImage)
mango8.scale=0.1

mango8=createSprite(600,450,40,20)
	mango8.addImage(mangoImage)
mango8.scale=0.1

mango8=createSprite(540,320,40,20)
	mango8.addImage(mangoImage)
mango8.scale=0.1



boy=createSprite(150,630,40,20)
boy.addImage(boyImage)
boy.scale=0.1
	
slingShot=new Slingshot(boy.body,{x:56,y:78})


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  background(255);
  slingShot.display()
  drawSprites();
 
}



