let canvas;
let x = 0, y = 0;
let easing = 0.05;
let bg, ethel;

function preload() {
  bg    = loadImage('assets/images/windowsbackground.png');
  ethel = loadImage('assets/images/cat1.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-bg');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,128,128);

  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;

  noStroke();
  fill(random(255), random(255), random(255), 150);
  ellipse(x - 50, y, 50, 50);

  if (ethel) image(ethel, x - 100, y - 50, 100, 100);
}
