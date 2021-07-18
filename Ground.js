class Ground {
    constructor(x,y,width, c) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,20,options);
      World.add(world, this.body);
      this.width = width;
      this.c = c;
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.c);
      rect(pos.x, pos.y, this.width, 20);
    }
  };