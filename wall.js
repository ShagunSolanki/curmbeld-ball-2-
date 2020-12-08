class wall{
    constructor(x,y,width,height){
    var options = {
        
        isStatic: true,
        friction:0.8,
        density:1.5
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbin.png");
    World.add(world,this.body)

    
    }
    display(){
    
    imageMode(CENTER)
    fill("green");
    image(this.image,this.body.position.x,this.body.position.y,140,200)
    
    
    }
    
    
    
    
    
    
    
    
    
    }