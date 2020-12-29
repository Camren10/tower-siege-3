class Block {
  constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.1,
          friction: 1,
          density:0.5
      }

      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
  }

  display() {
    
    if(this.body.speed<3){
      
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(2);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    } else{
      World.remove(world,this.body);
    }
  }
  score() {
    if(this.visibility<0 && this.visibility>-105) {
      score++;
    }
  }
}
