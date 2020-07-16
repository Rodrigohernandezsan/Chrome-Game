const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


// Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed; ;
let keys = {};

// audio

this.gameOverSound = new Audio("sound/gameOver.ogg");
this.backgroundMusic = new Audio("sound/xeon6.ogg");


// Event Listeners
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});





class Text {
  constructor (t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;

    
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
    
  }
}




// Game Functions

function SpawnObstacle () {
  let size = RandomIntInRange(20, 70);
  let type = RandomIntInRange(0, 1);
  let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4');
  

  if (type == 1) {
    obstacle.y -= player.originalHeight - 10;
  }
  obstacles.push(obstacle);
}
function RandomIntInRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);

  
}
function Start () {
  
  gameSpeed = 4;
  gravity = 1;
  score = 0;
  highscore = 0;
  if (localStorage.getItem('highscore')) {
  highscore = localStorage.getItem('highscore');
  this.backgroundMusic.volume = 0.2;
  this.backgroundMusic.play();
  
      
  }
  

  player = new Player(25, 0, 50, 50, '#FF5858');
  scoreText = new Text("Score: " + score, 25, 25, "left", "white", "20");
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "black", "20");
  
  requestAnimationFrame(Update);
}

  let initialSpawnTimer = 200;
  let spawnTimer = initialSpawnTimer;
   function Update () {
  requestAnimationFrame(Update);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    console.log(obstacles);
    spawnTimer = initialSpawnTimer - gameSpeed * 8;
    
    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }
  
  
  // obstacles

  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
      
      
    }

    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
      
      
    ) {
      
      
      obstacles = [];
      score = 0;
      spawnTimer = initialSpawnTimer;
      gameSpeed = 3
      window.localStorage.setItem('highscore', highscore);

      this.backgroundMusic.pause();
      this.gameOverSound.volume = 0.3;
      this.gameOverSound.play();
        
      alert('GAME OVER');
      
      document.location.reload();
    }
  
    o.Update();
  }

  

  player.Animate();

  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highscore) {
    
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }
  
  highscoreText.Draw();

  gameSpeed += 0.003;
}

Start(