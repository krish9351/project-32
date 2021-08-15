const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<=19){
        bg = "sunrise1.png";
    }else if(hour>=19 && hour<=04){
        bg = "sunset10.png";
    }else if(hour>=0 && hour==0){
        bg = "sunset10.png";
    }else if(hour>=0 && hour==0){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);

} 