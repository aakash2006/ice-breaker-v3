const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var world,engine;


function preload(){

}
function setup() {
  createCanvas(350,570);
 engine = Engine.create();
 world = engine.world;
 
 ball = new Ball(175,500,20,20);
 
 pad = new Pad(140,540,80,20);

 
 
 lEdges = new Pad(0,-100,5,900);

 tEdges = new Pad(-200,0,600,5);

 rEdges = new Pad(345,-200,5,900);

}

function draw() {
  background(0); 

  Engine.update(engine);

  spawnIce();
 // bounceOff(pad.body,ball.body);

 
  
 console.log(ball.body.position.x);

  
 
 bounceOff(tEdges,ball.body);
 bounceOff(rEdges,ball.body);
 bounceOff(lEdges,ball.body);
  bounceOff(ice,ball.body);


  rEdges.display();
  tEdges.display();
  lEdges.display();
  ball.display();
  pad.display();
  
  
  drawSprites();
}

function spawnIce()
{
  for(i=30;i<350;i=i+30)
  ice = new Ice(i,10,30,30);
  
  
}

function keyPressed()
{
 if(keyCode === 32)
 {
  
   console.log(ball.body);
 }
 if(keyCode === 39)
 {
   Matter.Body.translate(pad.body,{x:40,y:0});
 }
 if(keyCode === 37)
 {
   Matter.Body.translate(pad.body,{x:-40,y:0});
 }
 
}