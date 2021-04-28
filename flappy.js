document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("container")
    let player = document.getElementById("player")
    let sky = document.getElementById("bg-sky")
    let ground = document.getElementById("bg-ground")

    let gravity = 2.5;
    let playerLeft = 300;
    let playerBottom = 50;
    let isGameOver = false;
    let gap = 475

    function startGame() {
        playerBottom -= gravity
        player.style.bottom = playerBottom + 'px'
        player.style.left = playerLeft + 'px'
    }

//continous gravity on player
    let gravityTimer = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 38) {
            jump()
        }
    }

    function jump() {
        if (playerBottom < 20) playerBottom += 50
        player.style.bottom = playerBottom + 'px'
        console.log('This is playerBottom: ', playerBottom)
    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 1300
        let randomHeight = Math.random() * 70
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        const topObstacle = document.createElement('div')
        topObstacle.classList.add('topObstacle')
        container.appendChild(obstacle)
        container.appendChild(topObstacle)

        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -75) {
                clearInterval(obstacleTimer)
                container.removeChild(obstacle)
            }
            
            if (
                obstacleLeft === playerLeft ||
                playerBottom === obstacleBottom || 
                playerBottom === -425
                ) {
                console.log(obstacleLeft)
                gameOver()
            }
            
        }
        let obstacleTimer = setInterval(moveObstacle, 20)
        if(!isGameOver) setTimeout(generateObstacle, 6000)
    }
    generateObstacle()

   function gameOver() {
       clearInterval(gravityTimer)
       isGameOver = true
       console.log('game over')
       document.removeEventListener('keyup', control)
   } 
    

});