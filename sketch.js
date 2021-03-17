const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
ground1=new Ground(400,305,250,20);
ground2=new Ground(775,230,200,20);
ground3=new Ground(500,390,1000,20);
//tower1 layer1
block1=new greyBlock(400,150);
//tower1 layer2
block2=new greenBlock(370,190);
block3=new greenBlock(400,190);
block4=new greenBlock(430,190);
//tower1 layer3
block5=new pinkBlock(340,230);
block6=new pinkBlock(370,230);
block7=new pinkBlock(400,230);
block8=new pinkBlock(430,230);
block9=new pinkBlock(460,230);
//tower1 layer4
block10=new blueBlock(310,270);
block11=new blueBlock(340,270);
block12=new blueBlock(370,270);
block13=new blueBlock(400,270);
block14=new blueBlock(430,270);
block15=new blueBlock(460,270);
block16=new blueBlock(490,270);
//tower2 layer1
block17=new pinkBlock(775,115);
//tower2 layer2
block18=new greenBlock(745,155);
block19=new greenBlock(775,155);
block20=new greenBlock(805,155);
//tower2 layer3
block21=new blueBlock(715,195);
block22=new blueBlock(745,195);
block23=new blueBlock(775,195);
block24=new blueBlock(805,195);
block25=new blueBlock(835,195);
//polygon
polygon1=new Polygon(200,200,20)
//slingshot
slingshot = new Slingshot(polygon1.body,{x:200,y:200});
}

function draw(){
    background(155);
    Engine.update(engine);
    textSize(24);
    fill("green");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 110, 50);
ground1.display();
ground2.display();
ground3.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
polygon1.display();
slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}