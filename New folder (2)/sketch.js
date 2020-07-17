let bubble1,bubble2;
function setup() {
  createCanvas(400, 400);
  
  bubble1 = new Bubble(0,0,fill(random(0,255),0,(20,200)));
  bubble2 = new Bubble(110,110,fill(random(0,255),0,(10,200)));
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble1.coordinates();
    bubble2.show();
  bubble2.move();
  bubble2.coordinates();
  
  
}

