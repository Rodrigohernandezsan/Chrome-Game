# Chrome-Square

## Description
The "Chrome Square" It is a game, where the player has to jump over the different obstacles.The game ends when the player hits an obstacle. The success of the game is to overcome the maximum number of obstacles and spend the maximum time in the game.


## MVP (DOM - CANVAS)
 - Player commands (Jump)
 - Obstacles come randomly from the left side of the screen with different speeds
 - The game ends when the player collides with an obstacle

 
## Backlog
- Permanent horizontal background animation
- Create a counter
- obstacles speed
- Sounds and effects at the end of each game

## Data structure

### index.html
### style.css
### Component.js

- class Component {
    - constructor(game, x, y, w, h) {
    - drawComponent(imgSource) {

### game.js

- class Game {
  - constructor() {
    - this.canvas = xxx;
    - this.ctx = xxx;
    - this.player = xxx;
    - this.obstacles = xx;
    - this.background = xxx;
    - this.backgroundImg = xxx;
    - this.jumps = xxx;
    - this.x = xxx;
    - this.y = xxx;
    - this.width = xxx;
    - this.height = xxx;
  }

- init() {

   - this.canvas = ;
   - this.ctx = ;
   - this.x = xxx;
   - this.y = xxx;
   - this.start();
   - this.createObstacles();
  }

### script.js

- game.start()
- game.end()

### player.js

-player Extends element () {
    -constructor ()
    }
    - move()
    - collision()

### Obstacles.js

- class Obstacle extends Component {
    constructor(game) {
    - draw()
    - move()


## States y States Transitions
- splashScreen
  - drawSplashScreen ()
  - addEventListener(startGame
  
- gameScreen
  - drawGameScreen()
  - game.init()

- gameOver()
  - drawGameOverScreen()
  - addEventListener(tryAgain) 


## Task
- HTML - Structure
- CSS - styles

- Main - buildDom
- Main - buildSplashScreen
- Main - addEventListener
- Main - buildGameScreen
- Main - buildGameOverScreen

- Background - drawSun
- Background - drawMoon

- Game - start
- Game - backgroundMove
- Game - finish

- Player - drawPlayer
- Player - Move
- Player - Jump
- Player - collision

- Obstacles - drawObstacles
- Obstacles - random


## Links


### Trello
[Link url](https://trello.com/b/2aVBN9wp/m1-project-game)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)


