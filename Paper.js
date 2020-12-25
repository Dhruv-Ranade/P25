class Paper{
     constructor(x,y,radius){
          var options ={
              isStatic:false, 
              restituition:0.3,
            
              density :1.2,
              friction:0.5 
            } 
           this.x=x;
           this.y=y;
           this.radius=radius;
           this.body =Bodies.circle(this.x,this.y,(this.radius-20)/2,options); 
           this.image=loadImage("paperBall.png")
           World.add(world,this.body);

            } 
display(){
                var pos =this.body.position
         push(); 
         translate(pos.x,pos.y);
        
         //  ellipse(pos.x,pos.y,this.radius) 
         imageMode(CENTER);
         image(this.image,this.x,this.y,this.radius,this.radius)
         pop();
         
               }
 }