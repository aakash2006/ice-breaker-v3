class Ball{

    constructor(x,y,radius,angle){
     var options = {
         restitution:1.7,
         density:0.5,
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.angle = angle;
     this.image = loadImage("ball.png");
     World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        image(this.image,0,0,this.radius,this.radius);
        pop(); 

        
    }
}