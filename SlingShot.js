class SlingShot {
 constructor(bodyA,bodyB){
     
    var options={
         bodyA :bodyA,
         bodyB :bodyB,
         stiffness : 0.3,
         length: 50
     }
     this.slingshot= Constraint.create(options);
     World.add(world,this.slingshot)
    }
 display(){
var pointA = this.slingshot.bodyA.position;
var pointB = this.slingshot.bodyB.position;

line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}
