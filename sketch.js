const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var platform1,platform2,ground;
var sling,polygon;
var gameState = "onSling";

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,395,1200,10);

  platform1 = new Ground(600,350,250,10);
  platform2 = new Ground(900,200,250,10);

   block1 = new Block(600,320);
  block2 = new Block(570,320);
  block3 = new Block(900,150);
  block4 = new Block(540,320);
  block5 = new Block(510,320);
  block6 = new Block(630,320);
  block7 = new Block(660,320);
  block8 = new Block(690,320);
  block9 = new Block(600,290);
  block10 = new Block(570,290);
  block11 = new Block(540,290);
  block12 = new Block(630,290);
  block13 = new Block(660,290);
  block14 = new Block(600,260);
  block15 = new Block(570,260);
  block16 = new Block(630,260);
  block17 = new Block(600,230);
  block18 = new Block(870,150);
  block19 = new Block(840,150);
  block20 = new Block(930,150);
  block21 = new Block(960,150);
  block22 = new Block(900,120);
  block23 = new Block(870,120);
  block24 = new Block(930,120);
  block25 = new Block(900,90);

  polygon = new Polygon(200,200,50,50);
  sling = new Slingshot(polygon.body,{x:200,y:200});
}

function draw() {
  background("white");
  Engine.update(engine);  
  
  ground.display();
  platform1.display();
  platform2.display();

  sling.display();
  polygon.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("pink");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block25.display();
  fill("green");
  block14.display();
  block15.display();
  block16.display();
  block22.display();
  block23.display();
  block24.display();
  fill("grey");
  block17.display();
  textSize(35);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged(){
  if (gameState==="onSling"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(polygon.body);
  }
}
