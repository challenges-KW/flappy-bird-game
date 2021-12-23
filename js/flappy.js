const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 500;

let btnPressed = false;
let angle = 0;
let frame = 0;
let score = 0;
let best = localStorage.getItem("best");
let hue = 0;
let gameSpeed = 2;
let startBtn = document.querySelector("#startBtn");
let menu = document.querySelector("#menu");
let scoresMenu = document.querySelector("#scoreboard")
let startScreen = document.querySelector("#startScreen")
let animationId;
let username = prompt("Hello! Please enter your name.")

const background = new Image();
background.src = "game-img/bg-puffy.png";
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

function init() {
    puffy = new Puffy();
    obstaclesArray = [];
    score = 0;
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
    ctx.strokeText(score, 400, 80);
    ctx.fillText(score, 400, 80);
    ctx.fillStyle = '#7031d0';
    ctx.font = '20px "Arial"';
    ctx.fillText("Best", 30, 30);
    ctx.font = '50px "Bungee Shade"';
    if (localStorage.getItem("best") === null) {
        ctx.strokeText(0, 30, 80);
        ctx.fillText(0, 30, 80);
    } else {
        ctx.strokeText(localStorage.getItem("best"), 30, 80);
        ctx.fillText(localStorage.getItem("best"), 30, 80);    
    }
    handleCollisions();
    if (handleCollisions()) return;
    animationId = requestAnimationFrame(animate);
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
collide.src = 'game-img/collide.png';
function handleCollisions(){
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (
            puffy.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            puffy.x + puffy.width > obstaclesArray[i].x &&
            ((puffy.y < -10 + obstaclesArray[i].top && puffy.y + puffy.height > 0) || 
            (puffy.y > (canvas.height - (obstaclesArray[i].bottom + 60)) &&
            puffy.y + puffy.height < canvas.height))) {
                //collision occurs - end game
                let currentScore = { "current": score }
                console.log("currentScore: ", currentScore)
                console.log("name: ", username)
                ctx.drawImage(collide, puffy.x, puffy.y, 50, 50);
                ctx.font = '25px Bungee';
                ctx.fillStyle = 'slateblue';
                ctx.fillText('Game Over!', canvas.width/2 - 80, canvas.height/2 - 60);
                cancelAnimationFrame(animationId)
                menu.style.display = "flex";
                // scoresMenu.style.display = "block";
                getBestScore(currentScore);
                return true;
        }
    }
};

const startGame = () => {
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    init();
    animate();
    menu.style.display = "none";
    scoresMenu.display = "none";
    console.log("start game");
    console.log("username:", username)
}

startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    init();
    animate();
    menu.style.display = "none";
    console.log("start game");
});

const 
let json = JSON.parse(str);
console.log('string', str);
console.log('json', json);
}


// const getScore = async() => {
//     return await fetch("./api/score")
//     .then(response => {
//       console.log("response", response)
//       return response.json()
//     }).then(data => {
//       console.log("data", data);
//     }
//     );
//   }

const getBestScore = (currentScore) => {
    console.log("local/best at start of f: ", best)
    if (best===null) {
        console.log("best is null")
        localStorage.setItem("best", currentScore.current)
        best = localStorage.getItem("best");
        console.log("best after set", best)
    } else {
        if (currentScore.current > best) {
            console.log("current is more than best so update")
            console.log("best before change", best)
            localStorage.setItem("best", currentScore.current)
            best = localStorage.getItem("best");
            console.log("best after update: ", best)
        }
        else {
            console.log("best is not changing")
            console.log("here is best with no changes: ", best)
        }
    }
    console.log("best score: ", localStorage.getItem("best"))
}