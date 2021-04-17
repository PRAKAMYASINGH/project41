class Drop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }

//creating the main circular body for the class...

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;

//adding the created body to the world...

        World.add(world, this.rain);
    }

//the update function to set a random position for the drops...

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

 //the showDrop to create an elipse position...
 
    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}