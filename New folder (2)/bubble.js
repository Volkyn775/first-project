class Bubble{

  constructor(x,y,col){
  
    this.x = x;
    this.y = y;
    this.col = col;
    
  
    
  }
  
  show(){
  
   // noFill();
    stroke(255);
    strokeWeight(2);
    circle(this.x,this.y,40,40);
    
  }
  
  move(){
  
  if(keyIsDown(RIGHT_ARROW)){
    
    this.x = this.x + 5;
  
  }
      if(keyIsDown(LEFT_ARROW)){
    
    this.x = this.x -5;
  
  }
      if(keyIsDown(UP_ARROW)){
    
    this.y = this.y - 5;
  
  }
      if(keyIsDown(DOWN_ARROW)){
    
    this.y = this.y + 5;
  
  }
    

    
    
  }
  
  coordinates(){
  
        if (this.x < 0 ){
  
  this.x=0;
    
  }
    if (this.x > width ){
  
  this.x=width;}
      if (this.y < 0 ){
  
  this.y=0;}
        if (this.y > height ){
  
  this.y= height;}
    
  }
  

  

}