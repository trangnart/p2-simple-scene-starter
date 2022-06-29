let seed = 1234;
const cloudColor = "#f4fafc";
const grassColor ="#d9b44a";
const hillColor = "#152238";
var color;

function setup() {
  createCanvas(700, 500);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  color=map(mouseY,50,360,200,0);
  background (color);

  fill(224,176,186);
  noStroke();
  circle (mouseX,mouseY,100);

  fill(hillColor);
  beginShape();
  vertex(0, height + 50);
  const steps = 10;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y =
      height - 80 - (random() * random() * random() * height) / 8 - height / 50;
    vertex(x, y);
  }
  vertex(width, height + 50);
  endShape(CLOSE);

  fill(grassColor);
  rect(0, 410, width, 100);

  const clouds = 5 * random();
  for (let i = 0; i < clouds; i++) {
    setCloud();
  }

  function setCloud() {
    let x = width * random();
    let y = height/2 * random();
    drawCloud(x, y);
  }

  function drawCloud(cloudx, cloudy) {
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
  fill(cloudColor);
  ellipse(50, 20, 300, 100);
  ellipse(300, 25, 300, 150);
  ellipse(500, 20, 300, 100);
  ellipse(680, 20, 150, 100);
}
