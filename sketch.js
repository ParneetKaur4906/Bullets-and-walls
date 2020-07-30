var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet=createSprite(0,200,20,20)
bullet.shapeColor="white";
bullet.velocityX = speed;


wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);



}

function draw() {
  background(0,0,0); 
   hasCollided(bullet,wall);
  drawSprites();
}
function hasCollided()
{
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
  }
}
