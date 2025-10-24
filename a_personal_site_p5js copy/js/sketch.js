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
  canvas.parent('p5-holder');   // <— mount under the holder
  // no negative z-index; CSS handles layering
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (bg) image(bg, 0, 0, width, height);

  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;

  noStroke();
  fill(random(255), random(255), random(255), 150);
  ellipse(x - 50, y, 50, 50);

  if (ethel) image(ethel, x - 100, y - 50, 100, 100);
}
