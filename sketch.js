const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	var bobDiameter = 180;

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(190,600);
	bobObject2 = new Bob(280,600);
	bobObject3 = new Bob(370,600);
	bobObject4 = new Bob(460,600);
	bobObject5 = new Bob(550,600);

	roof = new Roof(370,100,500,50);

	rope1 = new rope(bobObject1.body,roof.body,-bobDiameter * 2,0);
	rope2 = new rope(bobObject2.body,roof.body,-180 * 2,0);
	rope3 = new rope(bobObject3.body,roof.body,-180 * 2,0);
	rope4 = new rope(bobObject4.body,roof.body,-180 * 2,0);
	rope5 = new rope(bobObject5.body,roof.body,-180 * 2,0);

}


function draw() {
	background(220);
	Engine.update(engine);

  	roof.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	// line(bobObject1.body,roof.body,-360,0);
	// line(bobObject2.body,roof.body,-360,0);
	// line(bobObject3.body,roof.body,-360,0);
	// line(bobObject4.body,roof.body,-360,0);
	// line(bobObject5.body,roof.body,-360,0);

  	drawSprites();
 
}



