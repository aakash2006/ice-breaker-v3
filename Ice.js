class Ice{

    constructor(x,y,width,height){
     var options = {
         restitution:0.3,
         density:0.2,
         isStatic:true,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height
     
   
     this.image = loadImage("iceblock.png");
     World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y); 
       
        image(this.image,0,0,this.width,this.height);
        pop(); 

        
    }
}