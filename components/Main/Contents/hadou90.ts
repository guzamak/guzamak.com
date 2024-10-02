export class Hadou90{
    constructor(ctx,x, y, dx, dy, width ,height,color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
      }

      draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
        this.ctx.closePath()
      }
    
      update() {
        this.x += this.dx
        this.y += this.dy;
        this.draw();
      }
    
}