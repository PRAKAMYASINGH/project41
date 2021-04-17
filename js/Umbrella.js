class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("WalkingFrames/walking_1.png");
       
       //creation of the main circular body...
       
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;

//adding the created body to the world...

        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}