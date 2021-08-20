const motorfisico = Matter.Engine;
const mundofisico= Matter.World;
const cuerpofisico = Matter.Bodies;

var motor, mundo;
var suelo_atributos, suelo, pel_atributos, pelota;

function setup(){
    createCanvas(400,400);
    motor = motorfisico.create();
    mundo = motor.world;
// creamos el objeto de suelo
    suelo_atributos = {
        isStatic: true
    }
    suelo = cuerpofisico.rectangle(200,380,200,20,suelo_atributos);
    mundofisico.add(mundo,suelo);

    pel_atributos ={
        restitution: 1.0
    }
    pelota = cuerpofisico.circle(200,100,20, pel_atributos);
    mundofisico.add(mundo,pelota);
    console.log(suelo);
}

function draw(){
    background(0);
    motorfisico.update(motor);
    rectMode(CENTER);
    rect(suelo.position.x,suelo.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(pelota.position.x, pelota.position.y, 20, 20);
}