window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        let startButton = document.getElementById("start-button")
        startButton.addEventListener('click', function() {
      startGame();
    };
    function startGame() {
      const myGame = new Game();
      myGame.init();
    }
  };

  function drawSplashScreen() {
            splashScreen = build (`
            <div id="game-splash-screen" class="container">
            <h1>CHROME SQUARE</h1>
            <div class="images-group">
            <img class="splash-background" src="images/obstacle.png" alt="Background" >
            <img class="splash-background" src="images/player.png" alt="Background">
            <img class="splash-background" src="images/obstacleBlack.png" alt="Background"> 
            </div>
                <div class="btn-group">
                      <button id="start-button">START GAME</button>
            </div> `)
            mainContainer.appendChild(splashScreen)
            let startButton = document.getElementById("start-button")
            startButton.addEventListener('click', function() {
            startGame();
        });
        }
        function removeSplashScreen() {
        splashScreen.remove();
        }
        function drawGameScreen() {
            gameScreen = build (`
            <div id="game-screen">
              <canvas id="canvas" width="1500" height="450"></canvas>
            </div>`)
    
            mainContainer.appendChild(gameScreen)
            return gameScreen
        }

        //removeGameScreen

    function removeGameScreen() {
    gameScreen.remove();
    }
   
    function drawGameOverScreen() {
        gameOverScreen = build()
        
        mainContainer.appendChild(gameOverScreen)
        
        let tryAgaintBtn = gameOverScreen.querySelector('tryAgain-button');
        
        tryAgaintBtn.addEventListener('click', function(){
      startGame(gameOverScreen)
    });

    }
    function removeGameOverScreen() {
       if (gameOverScreen !== undefined) {
     gameOverScreen.remove();
   }
    }


    function startGame() {
        removeSplashScreen();
        removeGameOverScreen();
        game = new Game();
        game.gameScreen = drawGameScreen();
        game.init()


    }

    function gameOver () {
        removeGameScreen();
        drawGameOverScreen();
    }

   
   drawSplashScreen()

}