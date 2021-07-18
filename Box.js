class Box {
  constructor(x, y, c) {
    var options = {
      isStatic: false,
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
    this.c = c;
    this.visibility = 255;
  }
  display() {
    
    if (this.body.speed <= 5) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.c);
      rectMode(CENTER);
      rect(0, 0, 50, 50);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      tint(50, this.visibility);
      pop();
    }

  }
}
