document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("container")
    let player = document.getElementById("player")

    let gravity = 2.5;
    let playerLeft = 300;
    let playerBottom = 0;
    let isGameOver = false;
    let gap = 300

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
        if (playerBottom < 0) playerBottom += 50
        player.style.bottom = playerBottom + 'px'
        console.log('This is playerBottom and playerLeft: ', playerBottom, " , ", playerLeft)

    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 1300
        let randomHeight = Math.random() * 70
        let obstacleBottom = randomHeight
        console.log('obstacle bottom and obstacle left on generate: ', obstacleBottom, obstacleLeft)
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        container.appendChild(obstacle)
        container.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -75) {
                clearInterval(obstacleTimer)
                container.removeChild(obstacle)
            }
            
            if (
                obstacleLeft > 200 && obstacleLeft < 300 &&  playerLeft === 300 &&
                (playerBottom < obstacleBottom + -290 ) ||
                playerBottom === -440
                ) {
                    console.log('obstacle bottom and obstacle left: ', obstacleBottom, ' , ' , obstacleLeft)
                    console.log('player bottom and player left :', playerBottom, playerLeft)
             
                gameOver()
                clearInterval(obstacleTimer)
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
