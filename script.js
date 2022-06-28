let cloudx = 100;
let cloudy = 100;
let blue = 189;
const cloudColor = "#f4fafc";
const grassColor ="#d9b44a";

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("#5579c6");

  fill(grassColor);
  rect(0, 420, width, 80);

  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 100)
  cloudx+=0.1;

  function makeCloud(cloudx, cloudy) {
    fill(cloudColor)
    noStroke();
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
  }
}
