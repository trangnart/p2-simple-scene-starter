let seed = 12345;
let cloudx = 100;
let cloudy = 100;
let blue = 189;
const cloudColor = "#f4fafc";
const grassColor ="#d9b44a";
const hillColor = "#1e273f";
var drop = []

function setup() {
  createCanvas(700, 500);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);
  background(100, 100, mouseY);

  fill(cloudColor);
  ellipse(50, 20, 300, 100);
  ellipse(300, 25, 300, 150);
  ellipse(500, 20, 300, 100);
  ellipse(680, 20, 150, 100);

  fill(grassColor);
  rect(0, 420, width, 80);

  const steps = 10;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y =
      height - (random() * random() * random() * height) / 8 - height / 50;
    vertex(x, y);
  }
  const clouds = 5 * random();
  for (let i = 0; i < clouds; i++) {
    setCloud();
  }

  function setCloud() {
    let x = width * random();
    let y = height/2 * random();
    makeCloud(x, y);
  }

  function makeCloud(cloudx, cloudy) {
    fill(cloudColor);
    noStroke();

    ellipse(cloudx, cloudy, 100, 80);
    ellipse(cloudx+50, cloudy+5, 70, 90);
    ellipse(cloudx+100, cloudy-25, 70, 80);
    ellipse(cloudx+140, cloudy-10, 70, 80);
    ellipse(cloudx+100, cloudy+20, 50, 50);
    ellipse(cloudx+170, cloudy+20, 100, 60);
    ellipse(cloudx+175, cloudy-15, 50, 50);

  }
  for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
  }
}
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1;
    this.y = this.y + this.speed*this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
}
