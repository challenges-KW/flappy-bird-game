const puffySprite = new Image();
puffySprite.src = 'tiny-puffy-1.gif';

class Puffy {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.velocity = 0;
        this.originalWidth = 150;
        this.originalHeight = 94;
        this.width = this.originalWidth/1.5;
        this.height = this.originalHeight/1.5;
        this.weight = 0.005;
    }
    update(){
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this.velocity = 0;
        } else {
            this.velocity += this.weight;
            this.velocity += 0.9;
            this.y += this.velocity;
        }
        if (this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.velocity = 0;
        }
        if (btnPressed && this.y > this.height * 3) this.jump();
    }
    draw(){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(puffySprite, 0, 0, this.originalWidth, this.originalHeight, this.x - 20, this.y - 12, this.width, this.height);
    }
    jump(){
        this.velocity -= 2;
    }
}

const puffy = new Puffy();