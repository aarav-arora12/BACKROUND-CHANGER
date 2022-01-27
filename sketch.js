var box
function setup() {
  createCanvas(800, 800);
  box = createSprite(400, 400, 50, 50)
}

function draw() {
  
  if (keyDown("RIGHT")) {
    background("red"); 
  }
  if (keyDown("DOWN")) {
    background("yellow"); 
  }
  if (keyDown("UP")) {
    background("green"); 
  }
  if (keyDown("LEFT")) {
    background("blue"); 
  }


drawSprites()



}
