const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var bakgounss
var score = 0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25

function preload(){
  polygonImg=loadImage("polygon.png");
  bakgounss = loadImage("Untitled.png")
  fetchtime();
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(480,275);
  b2=new Box(510,275);
  b3=new Box(540,275);
  b4=new Box(570,275);
  b5=new Box(600,275);
  b6=new Box(450,275);
  b7=new Box(630,275);
  b8=new Box(480,235);
  b9=new Box(510,235);
  b10=new Box(540,235);
  b11=new Box(570,235);
  b12=new Box(600,235);
  b13=new Box(510,195);
  b14=new Box(540,195);
  b15=new Box(570,195);
  b16=new Box(530,155);
  b17=new Box(800,100);
  b18=new Box(800,140);
  b19=new Box(830,140);
  b20=new Box(770,140);
  b21=new Box(800,180);
  b22=new Box(830,180);
  b23=new Box(860,180);
  b24=new Box(770,180);
  b25=new Box(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,350,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new Chain(this.polygon,{x:200,y:200});
}
function draw() {
  background(bakgounss); 
  Engine.update(engine);
  fill(247,247,72);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(145,0,0);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(194,0,0);
  b13.display();
  b14.display();
  b15.display();
  fill(247,0,0);
  b16.display();
  fill(247,0,0);
  b17.display();
  fill(194,0,0);
  b18.display();
  b19.display();
  b20.display();
  fill(145,0,0);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();
  textSize(24);
  fill("white")
  text("Score: "+score,30,360);
  
  
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if (keyCode===32){
      chain1.attach(this.polygon);
  }
}
async function fetchtime()
{
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    }
    else{
       bg=color("black")
       txtcolor=color("white")
    }
}
