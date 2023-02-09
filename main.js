let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let isJumping = false;
let jumpTimer = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

// 공룡
let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

dino.draw()

// 장애물
class Cactus {
  constructor() {
    this.x = window.innerWidth;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


let timer = 0;
let cactus_box = [];

// animation
function frames() {
  requestAnimationFrame(frames);
  timer++;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  if(timer%200 === 0){
    let cactus = new Cactus();
    cactus_box.push(cactus);
  }

  cactus_box.forEach((a, i, o)=>{
    // x좌표가 0 미만이면 제거
    if(a.x < 0){
      o.splice(i, 1)
    }

    a.x--;
    a.draw()
  })

  if(isJumping === true){
    dino.y-= 2;
    jumpTimer+= 2;
  } else{
    if(dino.y < 200){
      dino.y+= 2;      
    }
  }

  if(jumpTimer > 100){
    isJumping = false;
    jumpTimer = 0;
  }

  dino.draw()
}

frames()


document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    isJumping = true;
  }
})