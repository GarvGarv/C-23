class Box {
    //is used to initialise an object
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8, 
            'friction':0.3, 
            'density':1.0 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height =  height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //created a var to store the value of the angle where the body will be rotated
        var angle = this.body.angle;
        //create a new setting 
        push();
        //change the 0 axixs to a given x and y position 
        translate(pos.x, pos.y); 
        //its rotates the body to different angle
        rotate(angle);
        rectMode(CENTER); 
        fill(255);
        rect(0, 0, this.width, this.height);
        //its revert to the old settings 
        pop();
    }
}