class SpaceShip{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
           
        }
  this.image=loadImage("spaceship.png")
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
       this.body.position.x=mouseX;
    //   this.body.position.y=mouseY;
      var pos =this.body.position;
        fill(255);
        imageMode(CENTER);
        image(this.image,this.body.position.x,pos.y,this.width,this.height);
    }
    
    };