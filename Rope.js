class rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
    
        line(bodyA.body,bodyB.body,-bobDiameter*2,0);
    }
}