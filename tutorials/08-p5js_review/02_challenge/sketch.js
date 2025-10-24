'use strict'

// Documentation: 
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://www.w3schools.com/js/js_comparisons.asp

// Make the background change depending on what quadrant of the sketch the mouse is in.


function setup() {
  createCanvas(400, 400);
  

}



function draw() {
  if ( mouseX > 200 && mouseY > 200) {
    background(255, 0, 0); 
    console.log("red")
  } else if ( mouseX > 200 && mouseY < 200) {
    background(0, 0, 255); 
     console.log("blue")
  } else if ( mouseX < 200 &&mouseY < 200) {
    background(0, 255, 0); 
     console.log("green")
  } else if ( mouseX < 200&&  mouseY > 200) {
    background(0, 255, 255); 
      console.log("cyan")
}

rect(0, height/2, 400, 5);
rect(width/2, 0, 5, 400);

}