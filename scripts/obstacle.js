class Obstacle {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.dx = -gameSpeed;
    
    
  }

  Update () {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
    
    
  }

  Draw () {
    
    ctx.fillStyle = 'red'
    const img = new Image();
    img.src = "../obstacle.png";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    
}
}
