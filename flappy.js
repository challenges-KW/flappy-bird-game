document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("container")
    let player = document.getElementById("player")
    let bgSky = document.getElementById("bg-sky")

    let gravity = 2.5;
    let playerLeft = 300;
    let playerRight = 500
    let playerBottom = 0;
    let playerTop = 200;
    let isGameOver = false;
    let gap = 450

    let startBtn = document.querySelector("#startBtn")

    startBtn.addEventListener("click", function () {
        startBtn.style.display = "none";
        player.classList.remove("playerDisappear")
        player.classList.add("playerShow")
        let gravityTimer = setInterval(startGame, 20)
        function startGame() {
            playerBottom -= gravity
            player.style.bottom = playerBottom + 'px'
            player.style.left = playerLeft + 'px'
        }
    
    //continous gravity on player
    
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
            let obstacleLeft = 650
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
            topObstacle.style.left = obstacleLeft + 'px'
            obstacle.style.bottom = obstacleBottom + 'px'
            topObstacle.style.bottom = obstacleBottom + gap + 'px'
    
            function moveObstacle() {
                obstacleLeft -=2
                obstacle.style.left = obstacleLeft + 'px'
                topObstacle.style.left = obstacleLeft + 'px'
    
                if (obstacleLeft === -75) {
                    clearInterval(obstacleTimer)
                    container.removeChild(obstacle)
                    container.removeChild(topObstacle)
                }
                
                if (
                    obstacleLeft > 250 && obstacleLeft < 250 &&  playerLeft === 300 
                    &&
                    (
                    playerBottom < obstacleBottom + 150 || 
                    playerBottom > obstacleBottom + gap - 200 ||
                    playerBottom === -440
                    )) {
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

        function score() {
            
        }

       function gameOver() {
           clearInterval(gravityTimer)
           isGameOver = true
           console.log('game over')
           player.classList.remove("playerShow")
        //    player.classList.add("playerDisappear")   
           document.removeEventListener('keyup', control)
           const gameOverMessage = document.createElement('div')
           gameOverMessage.classList.add("over")
           gameOverMessage.innerText = "Game over! Click here to try again!"
       }
    
    })

    

});
