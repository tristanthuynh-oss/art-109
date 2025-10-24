// Object basics

// Reverence: https://javascript.info/object

// Create an object with a family tree including mom, dad, siblings, grandparents.

// For siblings, create a nested object that lists a name for brother and sister.

// For grandparents, store their name in a nested array.

// Log the sister's name to the console.

// Then, log the grandpa's name to the console.

let family = {
  grandparents: ["Jimothy", "P.R.A.X.I.S MARK SEVEN"],
    mom: "Margret",
    dad: "Micheal",
      siblings: {
        brother: "John Megacool",
        sister: "Diana Megalame" 
               },

  
};

function setup() {
  createCanvas(400, 400);
      console.log(family);
  // Add your code here
  
}

function draw() {
  background(220);


}