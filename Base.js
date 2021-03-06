class Base {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
  
  
     World.add(world, this.body);
    }
  
    
  
    
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      //Displayed the rectangle here and gave it a fill color
      fill("#8d6e63");
      rect(0,0,this.width, this.height)
      pop();
    }
  }