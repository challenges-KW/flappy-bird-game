const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 500;


let btnPressed = false;
let angle = 0;
let frame = 0;
let score = 0;
let hue = 0;
let gameSpeed = 2;
let startBtn = document.querySelector("#startBtn");
let menu = document.querySelector("#menu");



const background = new Image();
background.src = "bg-puffy.png";
const bg = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
function handleBackground(){
    if (bg.x1 <= -bg.width + gameSpeed) bg.x1 = bg.width;
    else bg.x1 -= gameSpeed;
    if (bg.x2 <= -bg.width + gameSpeed) bg.x2 = bg.width;
    else (bg.x2 -= gameSpeed);
    ctx.drawImage(background, bg.x1, bg.y, bg.width, bg.height);
    ctx.drawImage(background, bg.x2, bg.y, bg.width, bg.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, canvas.height - 90, 50, 50);
    handleBackground();
    handleObstacles();
    puffy.update();
    puffy.draw();
    ctx.fillStyle = '#00396c';
    ctx.font = '90px "Bungee Shade"';
    ctx.strokeText(score, 450, 80);
    ctx.fillText(score, 450, 80);
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+= 0.12;
    frame++;
}

window.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowUp') btnPressed = true;
});

window.addEventListener('keyup', function(e) {
    if (e.code === 'ArrowUp') btnPressed = false;
    puffy.frameX = 0;
});

const collide = new Image();
collide.src = 'collide.png';
function handleCollisions(){
    for (let i = 0; i < obstaclesArray.length; i++){
        if (puffy.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            puffy.x + puffy.width > obstaclesArray[i].x &&
            ((puffy.y < 0 + obstaclesArray[i].top && puffy.y + puffy.height > 0) || 
            (puffy.y > (canvas.height - (obstaclesArray[i].bottom + 50)) &&
            puffy.y + puffy.height < canvas.height))){
                //collision occurs
                ctx.drawImage(collide, puffy.x, puffy.y, 50, 50);
                ctx.font = '25px Bungee';
                ctx.fillStyle = 'slateblue';
                ctx.fillText('Game Over!', canvas.width/2 - 80, canvas.height/2 - 10);

                return true;
            }
    }
}

startBtn.addEventListener("click", () => {
    animate();
    menu.style.display = "none";
});