let canvas;
let x = 0, y = 0;
let easing = 0.05;
let bg, ethel;
let lox, tox, mox,pox,qox;

function preload() {
  bg    = loadImage('assets/images/windowsbackground.png');
  ethel = loadImage('assets/images/cat1.png');
  applecat= loadImage('assets/images/applecatrun.gif');
  scootercat = loadImage('assets/images/scootercat.gif');
  durie = loadImage('assets/images/durie.png');
  gakel = loadImage('assets/images/gakel.png');
  maxwell = loadImage('assets/images/maxwellspinning.gif');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-bg');
  lox = width + 200;
  tox = 0 - 200;
  mox = 0 - 300;
  pox = width + 300;
  qox = 0 - 300;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,128,128);
// movement for the ethel to cat to follow  the mouse
  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
// movements for cats
  lox += -2;
  if (lox < -200) {
    lox = width + 200;
  }
  qox += -3.5;
  if (qox < -200) {
    qox = width + 250;
  }
tox += 4;
if (tox > width + 225) {
  tox = -200;
}
  mox += 2;
  if (mox > width + 200) {
    mox = -200;
  }
    pox += 1;
  if (pox > width + 200) {
    pox = -200;
  }

  // image layer for the cats
  image(gakel,pox, height - 200, 150, 160);
image(maxwell,qox, height - 200, 150, 160);
image(scootercat,tox, height - 200, 150, 150);
image(applecat,lox, height - 200, 150, 150);
image(durie,mox, height - 200, 150, 160);



  noStroke();
  fill(random(255), random(255), random(255), 150);
  ellipse(x - 50, y, 50, 50);

  if (ethel) image(ethel, x - 100, y - 50, 100, 100);


}
