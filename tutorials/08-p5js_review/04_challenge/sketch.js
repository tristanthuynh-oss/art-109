'use strict'


// Array reference: https://javascript.info/array

// Define an array with three items, including two strings (words) and one integer

// Print the second item of the array to the console

    let gridarr1 = [
    ["bazinga", "sheldon", 42],
    ]
function setup() {
  createCanvas(400, 400);

  // Add your code here
  console.log(gridarr1[0][1]);
}

function draw() {
  background(220);
}