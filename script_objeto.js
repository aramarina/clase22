const motorfisico = Matter.Engine;
const mundofisico= Matter.World;
const cuerpofisico = Matter.Bodies;

var motor, mundo;
var objeto,obj_atributos;


function setup(){
createCanvas(400,400);
    motor = motorfisico.create();
    mundo = motor.world;
    obj_atributos =
    {
        isStatic: true
    }
    objeto = cuerpofisico.rectangle(200,100,50,50);
    mundofisico.add(mundo,objeto);
    console.log(objeto);
    //nsole.log(objeto.type);
    //console.log(objeto.position.x);
   // console.log(objeto.position.y);
}
function draw()
{
    background(0);
    motorfisico.update(motor);
    rectMode(CENTER);
    //rect(200,200,50,50)
    rect(objeto.position.x,objeto.position.y,50,50)

}