

document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });

        let x = 0; // stores lagging X position
let y = 0; // stores lagging Y position
let easing = 0.05; // speed of ease: 0 to 1.0
let bg;
let ethel;

function preload() {
    bg = loadImage('./assets/images/windowsbackground.png');
    ethel = loadImage('./assets/images/cat1.png');
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index','-1');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    console.log('sketch.js loaded');
  background(bg);
  
  x = x + ((mouseX - x) * easing);
  y = y + ((mouseY - y) * easing);
  push();
  fill(random(255), random(255), random(255), 150);
  ellipse(x -50, y, 50, 50)
  pop();
  image(ethel,x-100, y- 50, 100, 100);
}

