
document.addEventListener("DOMContentLoaded", () => {
    let obstacle = document.getElementById("obstacle")
    let obstacle2 = document.getElementById("obstacle2")
    let player = document.getElementById("player")

    let gravity = 1.5;
    let score = 0;
    let playerLeft = 300
    let playerBottom = 50

    function startGame() {
        playerBottom -= gravity
        player.style.bottom = playerBottom + 'px'
        player.style.left = playerLeft + 'px'
    }
    
    let timer = setInterval(startGame, 20)

    function jump() {
        if (playerBottom < 275) playerBottom += 50
        player.style.bottom = playerBottom + 'px'
        console.log('this is player bottom: ', playerBottom)
    }

    document.addEventListener('keyup', jump)
});