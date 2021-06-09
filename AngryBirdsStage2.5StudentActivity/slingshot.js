class Sling{
    constructor(bodyA, pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 0.05,
           lenght: 10
       } 
       this.sling = Constraint.create(options);
       World.add(world, this.sling);
    }
    display(){
       var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}