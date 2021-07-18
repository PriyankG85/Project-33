class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 8
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    attach(body) {
        this.Slingshot.bodyA = body;
    }

    fly() {
        this.Slingshot.bodyA = null;
    }

    display() {
        // image(this.sling1, 200, 220);
        // image(this.sling2, 170, 220);

        if (this.Slingshot.bodyA) {

            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            stroke('pink');
            strokeWeight(4);
            line(pointA.x + 20, pointA.y, pointB.x - 20, pointB.y);
            // line(pointA.x + 20, pointA.y, pointB.x + 30, pointB.y);


            // if (pointA.x>200) {
            //     console.log('greater than 200');
            //     image(this.sling3, pointA.x+20, pointA.y-14, 16, 30);
            // }
            // else{
            //     line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
            //     line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
            //     image(this.sling3, pointA.x-26, pointA.y-14, 16, 30);
            // }
        }

        if (!this.Slingshot.bodyA) {
            fill('white');
            textSize(32);
            text("Press 'space' to get more chance to play", 1160, 740);
        }
    }

}
