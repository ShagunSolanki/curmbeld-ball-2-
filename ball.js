class ball{
    constructor(x,y){
    var options = {
        restitution: 0.5,
        density: 1.0,
    
    
    }
    
    this.body = Bodies.circle(x,y,20,options)
    this.r = 20
    this.image = loadImage("paper.png")
    World.add(world,this.body)
    
    }
    display(){
    
        fill("red")
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    
    
    }
    
    
    
    
    
    
    
    
    
    }