class Polygon {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      'restitution': 0.4,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.circle(x, y, (r-30)/2, options);
    this.image=loadImage('polygon.png');
    World.add(world, this.body);
    this.r=r;
  }
  
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, pos.x, pos.y, (this.r)/2, (this.r)/2);
    pop();
  }
}
