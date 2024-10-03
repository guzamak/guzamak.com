export class Hadou90{
    constructor(ctx,x, y, dx, dy, width ,height,color,opacity,innerHeight) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.width = width;
        this.height = height;
        this.opacity = opacity;
        this.ctx = ctx;
        this.innerHeight = innerHeight;
      }

      draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.opacity;
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
        this.ctx.closePath()
      }
    
      update() {
        this.x += this.dx
        this.y += this.dy;
        this.checkOutoffScreen();
        this.draw();
      }

      checkOutoffScreen(){
        if (this.y  < 0){
            this.y = this.innerHeight + Math.random() * (2* this.innerHeight);
        }
      }
    
}