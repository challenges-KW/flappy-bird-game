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
    ctx.font = "90px Poppins";
    ctx.strokeText(score, 450, 80);
    ctx.fillText(score, 450, 80);
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+= 0.12;
    frame++;
}
animate();

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
                ctx.font = "25px Poppins";
                ctx.fillStyle = 'black';
                ctx.fillText = ('Game Over, your score is ' + score, 160, canvas.height/2 - 10);
                return true
            }
    }
}


// document.addEventListener("DOMContentLoaded", () => {


    // let container = document.getElementById("container")
    // let player = document.getElementById("player")
    // let bgSky = document.getElementById("bg-sky")

    // let gravity = 2.5;
    // let playerLeft = 100;
    // let playerBottom = 50;
    // let isGameOver = false;
    // let gap = 430
    

    // let startBtn = document.querySelector("#startBtn")

    // startBtn.addEventListener("click", function () {
    //     startBtn.style.display = "none";
    //     player.classList.remove("playerDisappear")
    //     player.classList.add("playerShow")
    //     let gravityTimer = setInterval(startGame, 20)
    //     function startGame() {
    //         playerBottom -= gravity
    //         player.style.bottom = playerBottom + 'px'
    //         player.style.left = playerLeft + 'px'
    //     }
    
    // //continous gravity on player
    
    //     function control(e) {
    //         if (e.keyCode === 38) {
    //             jump()
    //         }
    //     }
    
    //     function jump() {
    //         if (playerBottom < 0) playerBottom += 50
    //         player.style.bottom = playerBottom + 'px'
    //         console.log('This is playerBottom and playerLeft: ', playerBottom, " , ", playerLeft)
    
    //     }
    //     document.addEventListener('keyup', control)
    
    
    //     function generateObstacle() {
    //         let obstacleLeft = 550
    //         let randomHeight = Math.random() * 70
    //         let obstacleBottom = randomHeight
    //         console.log('obstacle bottom and obstacle left on generate: ', obstacleBottom, obstacleLeft)
    //         const obstacle = document.createElement('div')
    //         const topObstacle = document.createElement('div')
    //         if (!isGameOver) {
    //             obstacle.classList.add('obstacle')
    //             topObstacle.classList.add('topObstacle')
    //         }
    //         container.appendChild(obstacle)
    //         container.appendChild(topObstacle)
    //         obstacle.style.left = obstacleLeft + 'px'
    //         topObstacle.style.left = obstacleLeft + 'px'
    //         obstacle.style.bottom = obstacleBottom + 'px'
    //         topObstacle.style.bottom = obstacleBottom + gap + 'px'
    
    //         function moveObstacle() {
    //             obstacleLeft -=2
    //             obstacle.style.left = obstacleLeft + 'px'
    //             topObstacle.style.left = obstacleLeft + 'px'
    
    //             if (obstacleLeft === -75) {
    //                 clearInterval(obstacleTimer)
    //                 container.removeChild(obstacle)
    //                 container.removeChild(topObstacle)
    //             }
                
    //             if (
    //                 //not in last 200 pixels of travels
    //                 obstacleLeft > -240 && obstacleLeft < -160 && playerLeft === 220
    //                 || playerBottom === -440
    //                 // (
    //                 // playerBottom < obstacleBottom + 150 || 
    //                 // playerBottom > obstacleBottom + gap - 200 ||
    //                 // playerBottom === -440
    //                 // )
    //                 ) {
    //                     console.log('obstacle bottom and obstacle left: ', obstacleBottom, ' , ' , obstacleLeft)
    //                     console.log('player bottom and player left :', playerBottom, playerLeft)
                 
    //                 gameOver()
    //                 clearInterval(obstacleTimer)
    //             }
                
    //         }
    //         let obstacleTimer = setInterval(moveObstacle, 20)
    //         if(!isGameOver) setTimeout(generateObstacle, 6000)
    //     }
    //     generateObstacle()

    //     function score() {
            
    //     }

    //    function gameOver() {
    //        clearInterval(gravityTimer)
    //        isGameOver = true
    //        console.log('game over')
    //        player.classList.remove("playerShow")
    //     //    player.classList.add("playerDisappear")   
    //        document.removeEventListener('keyup', control)
    //        const gameOverMessage = document.createElement('div')
    //        gameOverMessage.classList.add("over")
    //        gameOverMessage.innerText = "Game over! Click here to try again!"
    //    }
    
    // })

