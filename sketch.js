
var bullet,wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50,200,10,5);
 bullet.velocityX = 5;
 bullet.shapeColor = "white"
 wall = createSprite(1500,200,thickness,height/2);
 wall.shapeColor = "green";
 speed=random(223,321);
 weight=random(30,52);
 thickness = random(22,83)
}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2 ) {
     bullet.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;

     if(deformation > 180)  {
        bullet.shapeColor = color(225,0,0);
     }
     if(deformation < 180 && deformation > 100) {
        bullet.shapeColor = color(230,0,0);
     }
     if(deformation < 100) {
        bullet.shapeColor = color(0,255,0);
     }
  }
  
    drawSprites();
  }
