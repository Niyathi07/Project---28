class Boy{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitutions : 0.03,
            density:0.4,
            friction:0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("boy.png")
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      imageMode(CENTER)
      rotate(angle)
      translate(pos.x,pos.y)
      fill("rgb(20,21,24)")
      image(this.image,pos.x,pos.y,this.width,this.height)
      pop()
    }
}