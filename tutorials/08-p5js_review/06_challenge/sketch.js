// Review of objects and arrays
// Exercise 6: Loop thru an array

// Reference: https://javascript.info/while-for

// Loop through this array using a for loop and console.log each item 

let array = ["dad", "mom", 5,  "whoops", "accident", "TIGER", "darn", "shoot", "dang"];
    


function setup() {
  createCanvas(400, 400);
  
  // Add your code here
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function draw() {
  background(220);
}