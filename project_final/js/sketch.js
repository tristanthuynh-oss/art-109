let wizardName = "N/A";
let wizardElement = "N/A";
let wizardStyle = "N/A";

let gui;
let slider;

let font_0, font_1;

let base;
let background_image, frame_image;


let dress_0, dress_0_color, eyes;

let slidercolor_R, slidercolor_G, slidercolor_B;

let outfit_color_R, outfit_color_G, outfit_color_B;

let outfit_top_color;
let outfit_hat_outline, outfit_hat_color;
let outfit_left_arm_outline, outfit_left_arm_color;
let outfit_right_arm_outline, outfit_right_arm_color;

// indexs
let hats = [];
let hat_index = 0;
let hatNames = ["No Hat", "Hood","Wizard Hat", "Magician Hat", "Chef Hat", "Hatsune Miku", "Curved Hat", "Yensid Hat", "Baseball Cap", "Cowboy",];

let leftarm = [];
let leftarm_index = 0;
let leftarmNames = ["No arm", "Hand","Wand","Gun", "Fire", "Ice", "Genshin Impact"];

let rightarm = [];
let rightarm_index = 0;
let rightarmNames = ["No arm", "Hand","Wand","Gun", "Fire", "Ice", "Money"];



function preload() {

  // -----------------------------
// Index for Hats
// -----------------------------

  hats[0] = null; // let the baldness be defined

  hats[1] = {
    color:   loadImage("./assets/dollmaker/hat/hat_1_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_1_outline.png")
  };

  hats[2] = {
    color:   loadImage("./assets/dollmaker/hat/hat_2_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_2_outline.png")
  };
    hats[3] = {
    color:   loadImage("./assets/dollmaker/hat/hat_3_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_3_outline.png")
  };
      hats[4] = {
    color:   loadImage("./assets/dollmaker/hat/hat_4_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_4_outline.png")
  };
      hats[5] = {
    color:   loadImage("./assets/dollmaker/hat/hat_5_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_5_outline.png")
  };
      hats[6] = {
    color:   loadImage("./assets/dollmaker/hat/hat_6_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_6_outline.png")
  };
      hats[7] = {
    color:   loadImage("./assets/dollmaker/hat/hat_7_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_7_outline.png")
  };
      hats[8] = {
    color:   loadImage("./assets/dollmaker/hat/hat_8_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_8_outline.png")
  };
      hats[9] = {
    color:   loadImage("./assets/dollmaker/hat/hat_9_color.png"),
    outline: loadImage("./assets/dollmaker/hat/hat_9_outline.png")
  };
 
  // -----------------------------
// Index for the left arm
// -----------------------------

  leftarm[0] = null; // let the baldness be defined

  leftarm[1] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_1_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_1_outline.png")
  };

  leftarm[2] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_2_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_2_outline.png")
  };
    leftarm[3] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_3_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_3_outline.png")
  };
      leftarm[4] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_4_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_4_outline.png")
  };
      leftarm[5] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_5_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_5_outline.png")
  };      
        leftarm[6] = {
    color:   loadImage("./assets/dollmaker/left_arm/left_arm_6_color.png"),
    outline: loadImage("./assets/dollmaker/left_arm/left_arm_6_outline.png")
  };      

// -----------------------------
// Index for the right arm
// -----------------------------

  rightarm[0] = null; 

  rightarm[1] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_1_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_1_outline.png")
  };

  rightarm[2] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_2_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_2_outline.png")
  };
    rightarm[3] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_3_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_3_outline.png")
  };
      rightarm[4] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_4_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_4_outline.png")
  };
      rightarm[5] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_5_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_5_outline.png")
  };      
      rightarm[6] = {
    color:   loadImage("./assets/dollmaker/right_arm/right_arm_6_color.png"),
    outline: loadImage("./assets/dollmaker/right_arm/right_arm_6_outline.png")
  };      
font_0 = loadFont('./assets/fonts/KiwiSoda.ttf');
font_1 = loadFont('./assets/fonts/BoldPixels.ttf');


background_image = loadImage("./assets/dollmaker/background.png");
frame_image = loadImage("./assets/dollmaker/frame.png");

base = loadImage("./assets/dollmaker/base_template.png");
eyes = loadImage("./assets/dollmaker/eyes.png");

dress_0 = loadImage("./assets/dollmaker/dress_0_outline.png");
dress_0_color = loadImage("./assets/dollmaker/dress_0_color.png");

// left arm
left_arm_1 = loadImage("./assets/dollmaker/left_arm/left_arm_1_outline.png");
left_arm_1_color = loadImage("./assets/dollmaker/left_arm/left_arm_1_color.png");

// right arm
right_arm_1 = loadImage("./assets/dollmaker/right_arm/right_arm_1_outline.png");
right_arm_1_color = loadImage("./assets/dollmaker/right_arm/right_arm_1_color.png");



}
function setup() {
  createCanvas(900,600);
  noSmooth();
  background(255);
  fill(255);


 
  outfit_color_R = 255;
  outfit_color_G = 255;
  outfit_color_B = 255;


  outfit_right_arm_outline = right_arm_1;
  outfit_right_arm_color_  = right_arm_1_color;
  outfit_left_arm_outline  = left_arm_1;
  outfit_left_arm_color_   = left_arm_1_color;


 gui = createGui();
// button layout


btnPNGsave = createButton("FINISH AND TAKE PICTURE", 560, 520, 300, 50);

// hat buttons
  btnHatLeft  = createButton("<",  width/2 - 120, 230, 40, 30);
  btnHatRight = createButton(">",  width/2 - 30, 230, 40, 30);

  btnLeftArmLeft  = createButton("<",  width/2 - 120 + 190, 230, 40, 30);
  btnLeftArmRight = createButton(">",  width/2 - 30 + 190, 230, 40, 30);

  btnRightArmLeft  = createButton("<",  width/2 - 120, 380, 40, 30);
  btnRightArmRight = createButton(">",  width/2 - 30, 380, 40, 30);



  // thsi controls the colors for the outfit 
 slidercolor_R = createSlider("red", 600, 350, 200, 20, 0, 255);
 slidercolor_G = createSlider("green", 600, 350 + 25, 200, 20, 0, 255);
 slidercolor_B = createSlider("blue", 600, 350 + 50, 200, 20, 0, 255);
}

function changeHat(dir) {
  const NUM_HATS = 9;           
  const options = NUM_HATS + 1; 
  hat_index = (hat_index + dir + options) % options;
}

function changeleftarm(dir) {
  const NUM_LEFT_ARMS = 6;           
  const options = NUM_LEFT_ARMS + 1; 
  leftarm_index = (leftarm_index + dir + options) % options;
}

function changerightarm(dir) {
  const NUM_RIGHT_ARMS = 5;           
  const options = NUM_RIGHT_ARMS + 1; 
  rightarm_index = (rightarm_index + dir + options) % options;
}

  const savedResult = JSON.parse(localStorage.getItem('wizardQuizResults'));

  if (savedResult) {
    console.log('THE WIZARD NAME IS:', savedResult.name);
    console.log('THE WIZARD POWER IS:', savedResult.element);
    console.log('THE WIZARD PERSONALITY IS:', savedResult.style);

    // put into globals so draw() can use them
    wizardName  = savedResult.name;
    wizardPower = savedResult.element;  // or whatever you called it in the quiz
    wizardTrait = savedResult.style;    // or your quiz property name
  } else {
    alert('THE ORB REJECTS YOU FOR YOU HAVE NOT DONE MY FUNNY QUIZ');
    console.log('THE ORB DOES NOT SENSE A WIZARD POWER');
    window.location.href = "index.html";
  }


function takePicture() {
  let x = 0;   
  let y = 0;
  let w = 250;
  let h = 500;

  let cropped = get(x, y, w, h);
  save(cropped, "My_Wizard.png");
}



//mousePressed = function() {
//  console.log("mousePressed at " + mouseX + ", " + mouseY);
//}



function draw() {


  // set up the colors

outfit_color_R = slidercolor_R.val;
outfit_color_G = slidercolor_G.val;
outfit_color_B = slidercolor_B.val

background(255);
image(background_image,0,0,900,600);



// -----------------------------
// Wizard body
// -----------------------------

//wizard right arm

 //wizard left arm
if (rightarm_index > 0 && rightarm[rightarm_index]) {
  let h = rightarm[rightarm_index];

  // color layer
  push();
  tint(outfit_color_R, outfit_color_G, outfit_color_B);
  image(h.color, 0, 0, 250, 250);
  pop();

  // outline layer
  image(h.outline, 0, 0, 250, 250);
}


//wizard body
image(base,0,0,250,250);
image(eyes,0,0,250,250);
// Wizard Top
// color layer
push();
tint(outfit_color_R,outfit_color_G,outfit_color_B);
 image(dress_0_color, 0,0,250,250);
pop();

// top layer
 image(dress_0, 0,0,250,250);
if (hat_index > 0 && hats[hat_index]) {
  let h = hats[hat_index];
  // color layer
  push();
  tint(outfit_color_R, outfit_color_G, outfit_color_B);
  image(h.color, 0, 0, 250, 250);
  pop();
 // outline layer 
  image(h.outline, 0, 0, 250, 250);
}


 //wizard left arm
if (leftarm_index > 0 && leftarm[leftarm_index]) {
  let h = leftarm[leftarm_index];

  // color layer
  push();
  tint(outfit_color_R, outfit_color_G, outfit_color_B);
  image(h.color, 0, 0, 250, 250);
  pop();

  // outline layer
  image(h.outline, 0, 0, 250, 250);
}



// -----------------------------
// text for Buttons
// -----------------------------
push();
textSize(60);
 textFont(font_0); 
 fill('white');
textAlign(CENTER, CENTER);
text('The Wizard Wardrobe', width/2 + 150, height/2 - 250);
pop();

// labels for buttons
push();
textSize(50);
 textFont(font_0); 
 fill('orange');
textAlign(CENTER, CENTER);
text('Hat', width/2 - 50, 150);
text('Left Arm', width/2 - 50 + 190, 150);
text('Right Arm', width/2 - 50, 300);
text('Outfit Color', width/2 - 50 + 300, 300);
pop();

//
push();
textSize(40);
 textFont(font_1); 
 fill('white');
textAlign(CENTER, CENTER);
text(hatNames[hat_index], width/2 - 50, 150 + 50);
text(leftarmNames[leftarm_index], width/2 - 50 + 190, 150 + 50);
text(rightarmNames[rightarm_index], width/2 - 50, 300 + 50);
pop();

push();
textSize(30);
 textFont(font_1); 
 fill('white');
textAlign(CENTER, CENTER);
push();
fill('red');
text('R', 580, 355);
pop();

push();
fill('green');
text('G', 580, 355 + 25);
pop();
push();
fill('cyan');
text('B', 580, 355 + 50);
pop();
pop();


// 600, 350

// -----------------------------
// text from the quiz
// -----------------------------

// WIZARD NAME

push();
textSize(30);
 textFont(font_0); 
 fill('purple');
textAlign(CENTER, CENTER);
text('WIZARD NAME', 125, height/2 - 25);
pop();

push();
textSize(20);
 textFont(font_0); 
textAlign(CENTER, CENTER);
text(wizardName, 125, height/2 + 5);
pop();


// WIZARD POWER

push();
textSize(30);
 textFont(font_0); 
 fill('blue');
textAlign(CENTER, CENTER);
text('WIZARD POWER', 125, height/2 - 25 + 80);
pop();

push();
textSize(20);
 textFont(font_0); 
textAlign(CENTER, CENTER);
text(wizardPower, 125, height/2 + 5 + 80);
pop();

// WIZARD PERSONALITY

push();
textSize(30);
 textFont(font_0); 
 fill('red');
textAlign(CENTER, CENTER);
text('WIZARD TRAIT', 125, height/2 - 25 + 160);
pop();

push();
textSize(20);
 textFont(font_0); 
textAlign(CENTER, CENTER);
text(wizardTrait, 125, height/2 + 5 + 160);
pop();

//draw the buttons
 
drawGui();

// button checks 

  if (btnHatLeft.isPressed) {
    changeHat(-1);
  }
  if (btnHatRight.isPressed) {
    changeHat(1);
  }

  if (btnLeftArmLeft.isPressed) {
    changeleftarm(-1);
  } 
  if (btnLeftArmRight.isPressed) {
    changeleftarm(1);
  }

if (btnRightArmLeft.isPressed) {
  changerightarm(-1); }
if (btnRightArmRight.isPressed) {
  changerightarm(1);
}


  if (btnPNGsave.isPressed) {
    takePicture();
  }

}

// in case they wanna go back and stuff


document.getElementById("retry-btn").onclick = function () {
    window.location.href = "index.html";
};
