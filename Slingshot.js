class Slingshot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;
    }
    display() {
        if (this.sling.bodyA){
            var posA=this.sling.bodyA.position;
            var posB=this.pointB;
            strokeWeight(4);
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
}
