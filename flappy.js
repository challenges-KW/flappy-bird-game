document.addEventListener("DOMContentLoaded", () => {
    let player = document.getElementById("player")
    let bg = document.getElementById("bg")

    let gravity = 1.5;
    let playerLeft = 300;
    let playerBottom = 50;
    let isGameOver = false;
    let gap = 430

    function startGame() {
        playerBottom -= gravity
        player.style.bottom = playerBottom + 'px'
        player.style.left = playerLeft + 'px'
    }
    
    let startGameTimer = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 38) {
            jump()
        }
    }

    function jump() {
        if (playerBottom < 245) playerBottom += 50
        player.style.bottom = playerBottom + 'px'
        console.log('This is playerBottom: ', playerBottom)
    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 1300
        let randomHeight = Math.random() * 50
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        bg.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -75) {
                clearInterval(obstacleTimer)
                bg.removeChild(obstacle)
            }
            if (obstacleLeft == playerLeft || playerBottom === -550) {
                gameOver()
            }
        }
        let obstacleTimer = setInterval(moveObstacle, 20)
        if(!isGameOver) setTimeout(generateObstacle, 6000)
    }
    generateObstacle()

   function gameOver() {
       clearInterval(startGameTimer)
       console.log('start over, Puffy!')
       isGameOver = true
       document.removeEventListener('keyup', control)
   } 
    

});