
//the constants from Matter.js ...

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//the variables...

var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;

//an array for the raindrops...

var drops = [];

var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

//the preload function to load all the images...

function preload(){
    thunder1 = loadImage("ThunderBolt/1.png");
    thunder2 = loadImage("ThunderBolt/2.png");
    thunder3 = loadImage("ThunderBolt/3.png");
    thunder4 = loadImage("ThunderBolt/4.png");
}

//the setup to create the default functions required...

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creation of the rain drop effect...

    if(frameCount % 150 === 0) {

        for(var i=0; i<maxDrops; i++) {
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating the thunder effect...

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        
        //using the switch function to display accordingly...

        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

//condition to destroy the thunder...

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    // the for loop to display rain drops...
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

