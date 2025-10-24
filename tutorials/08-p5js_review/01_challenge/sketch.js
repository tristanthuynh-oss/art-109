'use strict'

// Review Documentation: 

// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// - https://www.w3schools.com/js/js_comparisons.asp

// First, define a global variable for someone's hunger state. It should be a boolean initialized as false.

// In setup(), create a single if / else statement to test if someone is hungry using the variable you declared

// If they are not hungry, print "eat later" to the console
// If they are hungry then print "eat now or get hangry!" to the console

// ** Switch the variable from true to false to make sure your code works. 

let maxwell;
let food = false;
let ff;
let foodbowl;

function preload() {
    maxwell = loadImage('assets/maxwell.png');
    foodbowl = loadImage('assets/foodbowl.png');
    ff = loadFont('assets/smallest_pixel-7.ttf');
}


function setup() {
  createCanvas(800, 800);

  // add your code here
  

}

function draw() {
  background(150,150,150);
  image(maxwell, width/2 - 200, height/2 - 200, 400, 400);
    console.log("Maxwell is Hungry! Press 'b' to feed him.")

   textFont(ff)
      textSize(25); 
      fill(255)
      textAlign(CENTER, CENTER); 
      text("Press \"B\" to feed Maxwell the cat!", width / 2, 750);


    if (food) {
   textFont(ff)
      textSize(25); 
      fill(255)
      textAlign(CENTER, CENTER); 
      text("Thank you.", width / 2, 150);
      image(foodbowl, width/3 + 225, height/2 + 75, 200,200)
  } else {
   textFont(ff)
      textSize(25); 
      fill(255)
      textAlign(CENTER, CENTER); 
      text("I'm so hungry.", width / 2, 150);
 }
}

 function keyPressed() { 
   if ( key == 'b' || key == 'B' ) { 
     if (food == 0) { 
       food = 1;
       console.log("Maxwell is grateful for your generosity!")
       console.log("eat later")
     } else { 
       food = 0;
       console.log("Maxwell ponders your cruelty...")
     }
    }
}