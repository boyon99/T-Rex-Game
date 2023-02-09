let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
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
    this.x = window.innerWidth - 200;
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

  cactus_box.forEach((a)=>{
    a.x--;
    a.draw()
  })

  dino.draw()
}

frames()