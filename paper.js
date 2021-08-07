class paper{
    constructor(x, y, radius, height) {
         var options = { 
             'restitution':1,
          'friction':0.3, 
          'isStatic':false,
          'density':1.0 }
          this.body=Bodies.circle(x, y, radius, [options]) 
         this.radius = radius;
         this.image=loadImage("paper.png")
            World.add(world, this.body); } 
            display(){ 
                var pos =this.body.position; 
                var angle=this.body.angle
                push()
                translate(pos.x,pos.y)
                rotate(angle)
                rectMode(CENTER);
                 fill(255);
                 image(this.image, 0,0,this.r*2, this.r*2)
                  rect(0, 0, this.width, this.height);
                  pop()
                   }
                   };
