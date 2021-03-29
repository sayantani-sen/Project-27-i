class Bob {
    constructor(x,y){
        var options = {
            density: 1.2,
            restitution: 1.0,
            stiffness: 0.8,
            isStatic: true
        }
        this.body = Bodies.circle(x,y,90,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,90,90);
    }
}