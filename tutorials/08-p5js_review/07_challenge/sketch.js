// Nested for loops, aka 2d arrays

// Reference: https://www.geeksforgeeks.org/javascript-2d-array/


// Create a grid using two nested for loops.

// Add a fill and change the color of each grid item
    


function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  background(220);

  // Add your code here
  for (let x = 0; x < width; x += width/10) {
    for (let y = 0; y < height; y += height/10) {
      fill(x / 2, y / 2, random(255));
      // professor durie showed me this trick
      rect(x, y, width/10, height/10);
    }
  }
}