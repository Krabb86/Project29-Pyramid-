class Blocks{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
      }
      display(){
        
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        

        
        pop();
      }
}