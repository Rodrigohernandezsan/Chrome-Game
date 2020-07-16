

class Player {
    constructor ( x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.dy = 0;
      this.img = new Image();
      this.jumpForce = 15;
      this.originalHeight = h;
      this.grounded = false;
      this.jumpTimer = 0;
      this.sound = new Audio("sound/jump.wav");


    }
 



    Animate () {
        // Jump
        if (keys['Space'] || keys['KeyW']) { 
          this.Jump();
        } else {
          this.jumpTimer = 0;
        }
        
    
        if (keys['ShiftLeft'] || keys['KeyS']) {
          this.h = this.originalHeight / 2;
        } else {
          this.h = this.originalHeight;
        }
        this.y += this.dy;
        
        
    
        // Gravity

        if (this.y + this.h < canvas.height) {
          this.dy += gravity;
          this.grounded = false;
          
        } else {
          this.dy = 0;
          this.grounded = true;
          this.y = canvas.height - this.h;
          
        }
    
        this.Draw();
      }
    
      Jump () {
        if (this.grounded && this.jumpTimer == 0) {
          this.jumpTimer =  1;
          this.dy = -this.jumpForce;
          

        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
          this.jumpTimer++;
          this.dy = -this.jumpForce - (this.jumpTimer / 50);
          this.sound.volume = 0.2;
          this.sound.play();
          
          ;
        }
      }

    
       
    
    
       Draw () {
        ctx.fillStyle = 'yellow';
        this.img = new Image();
        this.img.src = ("images/player.png");
        ctx.fillRect(this.x, this.y, this.w, this.h);
        
      
      }
    }
    
    
    
