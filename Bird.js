class Bird extends BaseClass {
  constructor(x,y,t){
    super(x,y,50,50);
    if (t==1)    
    this.image = loadImage("sprites/bird.png");
    if(t==2)
    this.image = loadImage("sprites/chuck.png");
    this.smokeImage=loadImage("sprites/smoke.png")
this.trajectory=[]  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>150){

    
  var position =[this.body.position.x,this.body.position.y]
  this.trajectory.push(position)}
  for(var i=0;i<this.trajectory.length;i=i+1){
image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
  }
  }
}
