const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var b1 = [1[2[3[4[5]]]]]
console.log(b1);

function preload(){
    
}
function setup(){
     var canvas = createCanvas(1200,400);
     engine = Engine.create();
     world = engine.world;

     box1 = new Block(200,200,20,20);

          engine.run();

}
function display(){
     box1.display();
}

