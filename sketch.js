const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var holder,polygon,ground;
var stand1;
var slingshot;
var engine,world;
function setup(){
createCanvas(900,400);

engine= Engine.create();
world=engine.world;

ground=new Ground();
stand1=new Stand(420,300,350,10);
block1= new Block(340,275,30,40);
block2 = new Block(370,275,30,40);
block3 = new Block(400,275,30,40);
block4 = new Block(430,275,30,40);
block5 = new Block(460,275,30,40);
block6 = new Block(490,275,30,40);
block7 = new Block(520,275,30,40);

block8 = new Block(370,235,30,40);
block9 = new Block(400,235,30,40);
block10 = new Block(430,235,30,40);
block11 = new Block(460,235,30,40);
block12 = new Block(490,235,30,40);

block13 = new Block(400,195,30,40);
block14 = new Block(430,195,30,40);
block15 = new Block(460,195,30,40);

block16 = new Block(430,155,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot=new Slingshot(this.polygon,{x:200,y:200})
}

function draw(){
background(252,193,207);
Engine.update(engine);

stroke(15);
fill(89,24,21);
ground.display();

stroke(15);
stand1.display();

stroke(15);
fill("indigo");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill(1,0,128);
stroke(15);
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();


fill("blue");
stroke(15);
block13.display();
block14.display();
block15.display(); 

fill("cyan");
stroke(15);
block16.display(); 


fill(79,41,99);
textSize(32);
text("DRAG THE POLYGON AND RELEASE IT TO MAKE THE BLOCKS FALL",70,50);

fill("yellow");
ellipse(polygon.position.x,polygon.position.y,20);

slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode===32){
    slingshot.attach(this.polygon);
}
}