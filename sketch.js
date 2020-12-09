
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain;

function preload(){
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	
	createCanvas(1000, 500);

	engine = Engine.create();
	world  = engine.world;

	rock   = new stone(320,225);
	chain  = new SlingShot(rock.body,{x:120 , y:335});
	ground = new Ground(500,490,1000,15);

	m1 = new mango(700,200,6);
	m2 = new mango(800,140,6);
	m3 = new mango(840,100,6);
	m4 = new mango(850,230,6);
	m5 = new mango(900,210,6);
	m6 = new mango(750,240,6);

	Engine.run(engine);
	  
}



function draw() {
	
    rectMode(CENTER);
    background(200);
    
    drawSprites();
	
    imageMode(CENTER);
    image(boy,200,400,250,300);
	image(tree,800,270,400,400);

	chain.display();
	rock.display();

	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();

	ground.display();

	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);

	textSize(20);
	fill("black");
	text("Drag the Stone to Release it",10,20)
    text("Press SPACE to Relaunch",10, 50);
	
}


function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}

function keyPressed(){
if (keyCode === 32) {
	chain.attach();
  }
}