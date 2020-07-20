// nameSpace
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ground,ball


function setup(){
 createCanvas(400,400);
 engine=Engine.create();
 // world is nothing but a property of the engine
 world=engine.world;
 var groundOptions={
   isStatic:true
 }
 ground=Bodies.rectangle(200,380,400,10,groundOptions);
 World.add(world,ground);
 //restitutions == bounceOff
 var ballOptions={
   restitution:1
 }
 ball=Bodies.circle(200,200,20,ballOptions);
 World.add(world,ball);

}

function draw(){
background(0);
Engine.update(engine);
var ballPos=ball.position;
var groundPos=ground.position;
ellipseMode(RADIUS);
ellipse(ballPos.x,ballPos.y,20,20)
rectMode(CENTER);
rect(groundPos.x,groundPos.y,400,10);

}