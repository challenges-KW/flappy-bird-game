
document.addEventListener("DOMContentLoaded", () => {

    let obstacle = document.getElementById("obstacle")
    let obstacle2 = document.getElementById("obstacle2")
    let player = document.getElementById("player")
    let jumping = 0;
    let gravity = 1.5;
    let score = 0;
    let playerX = 10;
    let playerY = 100;

    let playerLeft = 300
    let playerBottom = 0

    function startGame() {
        playerBottom -= gravity
        player.style.bottom = playerBottom + 'px'
        player.style.left = playerLeft + 'px'
    }
    
    let timer = setInterval(startGame, 20)
});