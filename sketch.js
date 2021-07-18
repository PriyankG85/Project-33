const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17;
var box18, box19, box20, box21, box22;
var box23, box24, box25;

var box26, box27, box28, box29, box30, box31, box32;
var box33, box34, box35, box36, box37;
var box38, box39, box40, box41;

var polygon, polygonImg, sling;

function preload() {
    polygonImg = loadImage('polygon.png');
}

function setup() {
    var canvas = createCanvas(1800, 800);
    engine = Engine.create();
    world = engine.world;

    // All Bodies

    ground = new Ground(width / 2, height - 10, width, 'brown');
    stand = new Ground((width - 170) / 2, 600, 580, 'grey');
    stand2 = new Ground(width - 295, 440, 440, 'grey');

    // Second stand blocks
    // First Layer

    box1 = new Box(600, 565, 'green');
    box2 = new Box(600 + 55, 565, 'blue');
    box3 = new Box(600 + 110, 565, 'yellow');
    box4 = new Box(600 + 165, 565, 'red');
    box5 = new Box(600 + 220, 565, 'red');
    box6 = new Box(600 + 275, 565, 'red');
    box7 = new Box(600 + 330, 565, 'yellow');
    box8 = new Box(600 + 385, 565, 'aqua');
    box9 = new Box(600 + 440, 565, 'black');

    // Second Layer

    box11 = new Box(600 + 55, 515, 'green');
    box12 = new Box(600 + 110, 515, 'blue');
    box13 = new Box(600 + 165, 515, 'yellow');
    box14 = new Box(600 + 220, 515, 'red');
    box15 = new Box(600 + 275, 515, 'yellow');
    box16 = new Box(600 + 330, 515, 'aqua');
    box17 = new Box(600 + 385, 515, 'black');

    // Third Layer

    box18 = new Box(600 + 110, 465, 'green');
    box19 = new Box(600 + 165, 465, 'blue');
    box20 = new Box(600 + 220, 465, 'yellow');
    box21 = new Box(600 + 275, 465, 'aqua');
    box22 = new Box(600 + 330, 465, 'black');

    // Forth Layer

    box23 = new Box(600 + 165, 415, 'green');
    box24 = new Box(600 + 220, 415, 'red');
    box25 = new Box(600 + 275, 415, 'black');

    // Fifth Layer
    box10 = new Box(600 + 220, 365, 'yellow');

    // Second stand blocks
    // First Layer
    box26 = new Box(1340, 420, 'blue');
    box27 = new Box(1395, 420, 'red');
    box28 = new Box(1450, 420, 'white');
    box29 = new Box(1505, 420, 'yellow');
    box30 = new Box(1560, 420, 'aqua');
    box31 = new Box(1615, 420, 'green');
    box32 = new Box(1670, 420, 'purple');

    // Second Layer
    box33 = new Box(1395, 355, 'orange');
    box34 = new Box(1450, 355, 'purple');
    box35 = new Box(1505, 355, 'gold');
    box36 = new Box(1560, 355, 'red');
    box37 = new Box(1615, 355, 'white');

    // Third Layer
    box38 = new Box(1450, 305, 'pink');
    box39 = new Box(1505, 305, 'blue');
    box40 = new Box(1560, 305, 'lightgreen');

    // Fifth Layer
    box41 = new Box(1505, 255, 'aqua');

    var options = {
        'restitution': 0.4,
        'friction': 1.0,
        'density': 1.0
    }

    polygon = Bodies.circle(220, 250, 30, options);
    World.add(world, polygon);

    sling = new SlingShot(this.polygon, { x: 220, y: 250 });
}

function draw() {

    background(180);

    Engine.update(engine);

    fill('aqua');
    textSize(42);
    text('Drag and Release the hexagonal stone, to launch it towards the blocks', 180, 60);

    ground.display();
    stand.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();

    sling.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 80, 80);
}

function mouseDragged() {
    Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
    sling.fly();
}

function keyPressed() {
    if (keyCode == 32) {
        sling.attach(this.polygon);
    }
}




