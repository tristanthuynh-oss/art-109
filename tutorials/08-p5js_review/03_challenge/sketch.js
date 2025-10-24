'use strict'

// 1: In the draw loop, create a smallish circle with a global variable storing the x position
// Reference: https://p5js.org/reference/p5/circle/

// 2: Increment the x position so that the circle moves to the right 

// 3: When the circle reaches the edge (x position is greater than the width), reset the x position to 0 (so it starts at left side again). You can do this with a single if statement =)


// hint: there are different syntaxes for incrementing variables. These are all the same thing:
// x = x + 1;
// x += 1;
// x++

let lox;
// Tristan Note, i did a little thingy so it looked more natural going off and coming back
function setup() {
  createCanvas(400, 400);
  lox = -50;
}

function draw() {
  background(150);
  ellipse(lox, height/2, 50, 50);
  lox += 2;
  if (lox > width+50) {
    lox = -50;
  }

  // Add your code here
}