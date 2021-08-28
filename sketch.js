
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball, blower, blowerMouth, blowButton;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 400);
  ball = new Ball(width / 2 + 80, height / 2 - 80, 30);
  blowButton = createButton("Click to blow")
  blowButton.position(width / 2, height - 100);
  blowButton.class("blowbutton")
  blowButton.mousePressed(blow);
  //Created 2 bodies for the blower and blower mouth
  blower = new Base(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new Base(width / 2 + 70, height / 2 + 20, 100, 90);
}

function draw() {
  Engine.update(engine);
  background(255, 255, 255);
  ball.show();
  //Write the code to display the 2 new bodies
  //Test the code and submit the changes
}

function blow() {
  console.log("ejej")
  //Completed the applyForce function for the force to be applied correctly
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}