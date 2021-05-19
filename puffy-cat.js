class Puffy {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.velocity = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
    }
    update(){
        this.velocity += this.weight;
        this.y += this.velocity;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap(){
        this.velocity -= 2;
    }
}

const puffy = new Puffy();