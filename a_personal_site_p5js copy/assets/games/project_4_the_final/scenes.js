// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;
let gui;

let d1,d2,d3;
let c1,c2;

////////////////////////////// 1 /////////////////
function intro() {

    let b;
    let angle = 0; // Angle for rocking motion

    this.setup = function () {
        console.log("We are at setup for scene1");

        // Create the canvas
        createCanvas(800, 600); // Adjust the canvas size as needed

        // Initialize the TouchGUI object

          gui.loadStyle("Blue");
  b = createButton("Start", 300, 450, 200, 50);
   
         b.onPress = () => {
            this.sceneManager.showScene(scene2); // Transition to Scene 2 when the button is pressed
            select.play();
              b.enabled = false; 
        };
        b.onHover = () => {
        
            if (!mousehover.isPlaying()) {
                mousehover.play(); // Play the sound when the mouse hovers over the button
            }
        };
      
 };
 
 
    this.enter = function () {
        console.log("We are at entering scene1");
        loy = 100; // Reset the global variable
        background("red");
            b.enabled = true; // Enable the button when entering Scene 1
            
        // if (songintro.isPlaying()) {
  //  songintro.pause(); // .play() will resume from .pause() position
//} else {
   // songintro.play();
//}
    };

    this.draw = function () {
        background(0, 0, 255 - loy); // Clear the canvas with a dynamic background
        image (bg0,0,0)
        textAlign(CENTER);
        textSize(35);
        fill(255 - loy);
        
        textSize(29);

        // Calculate rocking angle using sin()
        angle = sin(frameCount * 0.05) * 0.2; // Adjust 0.05 for speed and 0.2 for amplitude

        // Animate the logo with rocking motion
        push();
        translate(width / 2, height / 2 - 100); // Center the logo above the button
        rotate(angle); // Apply rocking rotation
        imageMode(CENTER); // Set image mode to center
        scale (0.8)
        image(logo, 0, 0); // Draw the logo
       
        pop();

        // Draw the GUI
        drawGui();
    };

    
}

///////////////////////  2  ////////////////////////
//Prologue and How To Play 
function scene2()  {
  

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
  gui = createGui();
  c = createButton("Next", 550, 500, 200, 50);

         c.onPress = () => {
            this.sceneManager.showScene(scene3); 
            select.play();
              c.enabled = false; 
              c.visible = false;
        };
      
  }

  this.enter = function()
  {
 
 c.enabled = true; 
      console.log("We are at  scene2 (again?)");
if (!songintro.isPlaying()) {
         songintro.setLoop(true);
         songintro.setVolume(0.1);
         songintro.play();
      }
  }

    this.draw = function()
    {
      background(0);
      noStroke();
      image(bg1, 0, 0, );
      push();
      fill(0);
  

    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(20); // Set text size
    textFont(rimsb)
    text(
      "You are 'Dteve Surie', a junior at the University of West Wondon. The great Little Lady's Day dance, and you need to convince a bachelorette to go with you. Luckily you have a couple of options. But you'll need to go on a date with them and Woo them enough to go to the dance with you. "
      , 70, 340, 400); 
    pop()
    drawGui();
  }

 

}
function scene3()  {
  

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene3");
  gui = createGui();
  c = createButton("Next", 550, 500, 200, 50);

         c.onPress = () => {
            this.sceneManager.showScene(dateselect); 
            select.play();
              c.enabled = false; 
              c.visible = false;
        };
      
  }

  this.enter = function()
  {
 
 c.enabled = true; 
      console.log("We are at  scene3 (again?)");
if (!songintro.isPlaying()) {
         songintro.setLoop(true);
         songintro.setVolume(0.1);
         songintro.play();
      }
  }

    this.draw = function()
    {
      background(0);
      noStroke();
      image(bg1, 0, 0, );
          push();
      fill(166,0,167);
  

    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(30); // Set text size
    textFont(rimsb)
    text(
      "How to Play !"
      , 175, 325, 400); 
    pop()
      push();
      fill(0);
  

    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(19); // Set text size
    textFont(rimsb)
    text(
      "You’ll select from three different bachelorettes, read their biographies and choose one that suits you. You ‘ll then do an activity with them! Which will take you to a dating mini-game where you’ll answers questions that will either raise or lower your affinity with them. If you reach 0, you’ll have to restart the page all the way back to the beginning!"
      , 70, 365, 400); 
    pop()
    drawGui();
  }

 

}

////////////////////////////// 3 /////////////////




/// Select Screen which has different character with their own things 
function dateselect() {
  this.setup = function() {
    console.log("we are setting up on the date selection scene");
  }

  this.enter = function() {
    background(255,0,0);
    if (!songintro.isPlaying()) {
         songintro.setLoop(true);
         songintro.setVolume(0.1);
         songintro.play();
      }
    console.log("we are entering the date selection scene");
    d1 = createButton("Hatsune Miku", 10, 525, 200, 50);
    d2 = createButton("Neco-Arc", 300, 525, 200, 50);
    d3 = createButton("Ethel", 590, 525, 200, 50);

    d1.onPress = () => {
      this.sceneManager.showScene(dateselectMiku); 
      mikuselect.setVolume(0.4);
      mikuselect.play();
      songintro.stop();
      select.play();
      d1.visible = false;
      d2.visible = false;
      d3.visible = false;
      d1.enabled = false;
      d2.enabled = false;
      d3.enabled= false;
    };

    d2.onPress = () => {
      this.sceneManager.showScene(dateselectNecoArc); 
      necoarcselect.setVolume(0.4);
     necoarcselect.play();
      songintro.stop();
      select.play();
      d1.visible = false;
      d2.visible = false;
      d3.visible = false;
      d1.enabled = false;
      d2.enabled = false;
      d3.enabled= false;
    };

    d3.onPress = () => {
      this.sceneManager.showScene(dateselectEthel); 
      songintro.stop();
      select.play();
      d1.visible = false;
      d2.visible = false;
      d3.visible = false;
      d1.enabled = false;
      d2.enabled = false;
      d3.enabled= false;
    };
  }

  this.draw = function() {
    background(255,0,0);
    image(bg2, 0, 0);

    drawGui();
  }
}

function dateselectEthel() {
  this.setup = function() {
    console.log("we are setting up on select Ethel scene");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering the Selectscene");
    //theme of select music 
    if (! ethelSelectMusic.isPlaying()) {
         ethelSelectMusic.setLoop(true);
         ethelSelectMusic.setVolume(0.1);
         ethelSelectMusic.play();
      }

    c1 = createButton("Back to Selection", 10, 525, 200, 50);
    c2 = createButton("Go on a Date!", 590, 525, 200, 50);

    c1.onPress = () => {
      
      this.sceneManager.showScene(dateselect);
      select.play();
      ethelSelectMusic.stop();
      c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;
    };
          // Hide and disable buttons in this scene

    // Reset button visibility and enabled state

    c2.onPress = () => {
    select.play();
    ethelSelectMusic.stop();
    c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;

    let roll = Math.floor(Math.random() * 2) + 1;

    if (roll === 1) {
      this.sceneManager.showScene(IntermissionEvent1);
      console.log("Rolled for Intermission Date 1");
    } else {
      this.sceneManager.showScene(IntermissionEvent2);
       console.log("Rolled for Intermission Date 1");
    }
};
  };

  this.draw = function() {
    background(255, 0, 0);
    image(bg3, 0, 0);
    image(floor, 50, 350);

    // Floating effect for Ethel image
    let floatOffset = sin(frameCount * 0.05) * 10; // Adjust 0.05 for speed and 10 for amplitude
    image(ethel, 125, 200 + floatOffset);
    // Name
    push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(45); // Set text size
    textFont(rimsb)
    text(
      "Ethel "
      , 400, 160, 400); 
    pop()

    //Title
    push();
      fill(255);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(30); // Set text size
    textFont(rimsb)
    text(
      "The OC 'Original Cat' "
      , 400, 210, 400); 
    pop()
    //Bioinformation
     push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(25); // Set text size
    textFont(rimsb)
    text(
      "Level : 10 "
      , 400, 280, 400); 
       text(
      "Class : Trickster "
      , 400, 310, 400); 
       text(
      "Likes : Fish, Milk, Money "
      , 400, 360, 400); 
      text(
      "Dislikes : Valorant, Work "
      , 400, 410, 400); 
    pop()
  
    drawGui();
  };
}
function dateselectMiku() {
  this.setup = function() {
    console.log("we are setting up on select Ethel scene");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering the Selectscene");
    //theme of select music 
    if (! mikuSelectMusic.isPlaying()) {
         mikuSelectMusic.setLoop(true);
         mikuSelectMusic.setVolume(0.1);
         mikuSelectMusic.play();
      }

    c1 = createButton("Back to Selection", 10, 525, 200, 50);
    c2 = createButton("Go on a Date!", 590, 525, 200, 50);

    c1.onPress = () => {
      
      this.sceneManager.showScene(dateselect);
      select.play();
      mikuSelectMusic.stop();
      c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;
    };
          // Hide and disable buttons in this scene

    // Reset button visibility and enabled state

    c2.onPress = () => {
    select.play();
    mikuSelectMusic.stop();
    c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;

    let roll = Math.floor(Math.random() * 2) + 1;

    if (roll === 1) {
      this.sceneManager.showScene(IntermissionEvent3);
      console.log("Rolled for Intermission Date 3");
    } else {
      this.sceneManager.showScene(IntermissionEvent4);
       console.log("Rolled for Intermission Date 4");
    }
};
  };

  this.draw = function() {
    background(255, 0, 0);
    image(bg4, 0, 0);
   
    // Floating effect for Miku image
    let floatOffset = sin(frameCount * 0.05) * 10; // Adjust 0.05 for speed and 10 for amplitude
    image(miku, 50, 125 + floatOffset);
    // Name
    push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(45); // Set text size
    textFont(rimsb)
    text(
      "Hatsune Miku"
      , 400, 160, 400); 
    pop()

    //Title
    push();
      fill(255);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(30); // Set text size
    textFont(rimsb)
    text(
      "Vocaloid 'CV01'"
      , 400, 210, 400); 
    pop()
    //Bioinformation
     push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(25); // Set text size
    textFont(rimsb)
    text(
      "Level : 5 "
      , 400, 280, 400); 
       text(
      "Class : Idol "
      , 400, 310, 400); 
       text(
      "Likes : Singing, Dancing "
      , 400, 360, 400); 
      text(
      "Dislikes : Insincerity, Work "
      , 400, 410, 400); 
    pop()
  
    drawGui();
  };
}
function dateselectNecoArc() {
  this.setup = function() {
    console.log("we are setting up on select Ethel scene");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering the Select scene");
    //theme of select music 
    if (! necoarcSelectMusic.isPlaying()) {
         necoarcSelectMusic.setLoop(true);
         necoarcSelectMusic.setVolume(0.1);
         necoarcSelectMusic.play();
      }

    c1 = createButton("Back to Selection", 10, 525, 200, 50);
    c2 = createButton("Go on a Date!", 590, 525, 200, 50);

    c1.onPress = () => {
      
      this.sceneManager.showScene(dateselect);
      select.play();
      necoarcSelectMusic.stop();
      c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;
    };
          // Hide and disable buttons in this scene

    // Reset button visibility and enabled state

    c2.onPress = () => {
    select.play();
    necoarcSelectMusic.stop();
    c1.visible = false;
    c1.enabled = false;
    c2.visible = false;
    c2.enabled = false;

    let roll = Math.floor(Math.random() * 2) + 1;

    if (roll === 1) {
      this.sceneManager.showScene(IntermissionEvent5);
      console.log("Rolled for Intermission Date 5");
    } else {
      this.sceneManager.showScene(IntermissionEvent6);
       console.log("Rolled for Intermission Date 6");
    }
};
  };

  this.draw = function() {
    background(255, 0, 0);
    image(bg5, 0, 0);
   
    // Floating effect for Necoarc image
    push()
    let floatOffset = sin(frameCount * 0.05) * 10; // Adjust 0.05 for speed and 10 for amplitude
    image(necoarc, 100, 125 + floatOffset);
    pop()
    // Name
    push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(45); // Set text size
    textFont(rimsb)
    text(
      "Neco-Arc"
      , 400, 160, 400); 
    pop()

    //Title
    push();
      fill(255);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(30); // Set text size
    textFont(rimsb)
    text(
      "Destroyer"
      , 400, 210, 400); 
    pop()
    //Bioinformation
     push();
      fill(0);
    textAlign(LEFT, TOP); // Align text to the top-left corner of the box
    textSize(25); // Set text size
    textFont(rimsb)
    text(
      "Level : ?? "
      , 400, 280, 400); 
       text(
      "Class : Neco Spirit "
      , 400, 310, 400); 
       text(
      "Likes : Crime, Gatcha Games "
      , 400, 360, 400); 
      text(
      "Dislikes : Him, Work "
      , 400, 410, 400); 
    pop()
  
    drawGui();
  };
}
// These are the intermission events that happen before the date
// each character has two different intermission events that can be triggered

// Ethel Intermission Scnes //  
function IntermissionEvent1() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 1");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_1.isPlaying()) {
         interMusic_1.setLoop(true);
         interMusic_1.setVolume(0.1);
         interMusic_1.play();
      }



    console.log("we are entering Intermission Date 1");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_1.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameEthel);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg1, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You take Ethel to a nice picnic at a nearby park, you enjoy fine sandwiches with cheese and crackers. Ethel only eats a bag of gummy bears she brought from home.",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}
function IntermissionEvent2() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 2");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_2.isPlaying()) {
         interMusic_2.setLoop(true);
         interMusic_2.setVolume(0.1);
         interMusic_2.play();
      }



    console.log("we are entering Intermission Date 1");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_2.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameEthel);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg2, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You take Ethel to ‘Seven Banners, Finding Region!’, an amusement theme park with roller coaster rides. You and her have fun eating the food, enjoying the sites and riding the roller coasters!",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}

// Hatsune Miku Intermission Scnes //  
function IntermissionEvent3() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 3");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_3.isPlaying()) {
         interMusic_3.setLoop(true);
         interMusic_3.setVolume(0.2);
         interMusic_3.play();
      }



    console.log("we are entering Intermission Date 3");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_3.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameMiku);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg3, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You and Hatsune Miku go watch the Minecraft movie featuring Jack Black as Steve! You were brought to tears by the theatrical mastery, Miku thought it was okay.",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}
function IntermissionEvent4() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 4");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_4.isPlaying()) {
         interMusic_4.setLoop(true);
         interMusic_4.setVolume(0.1);
         interMusic_4.play();
      }



    console.log("we are entering Intermission Date 4");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_4.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameMiku);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg4, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You take Hatsune Miku to a nearby karaoke place and rock some sick tunes! Miku cheers you on as you sing your heart out with your Hatsune Miku mic!",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}
// necoarc Intermission Scnes //  
function IntermissionEvent5() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 5");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_5.isPlaying()) {
         interMusic_5.setLoop(true);
         interMusic_5.setVolume(0.2);
         interMusic_5.play();
      }



    console.log("we are entering Intermission Date 5");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_5.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameNecoArc);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg5, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "Neco-Arc asks if you want to do a hobby with her, you agree and later you end up robbing the local bank. It was pretty stressful but thankfully Neco-Arc was patient and helped you out in the process. ",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}
function IntermissionEvent6() {
  this.setup = function() {
    console.log("we are setting up on Intermission Date 6");

    };

  this.enter = function() {
    background(255, 0, 0); 

// plays theme of scene 
if (! interMusic_1.isPlaying()) {
         interMusic_1.setLoop(true);
         interMusic_1.setVolume(0.1);
         interMusic_1.play();
      }



    console.log("we are entering Intermission Date 6");
    // simple button to move to the next scene
    // will also stop music from playing to not overlay 
    c1 = createButton("Next", 590, 525, 200, 50);
    c1.onPress = () => {
      interMusic_1.stop();
      c1.visible = false;
      c1.enabled = false;
      this.sceneManager.showScene(dategameNecoArc);
      select.play();
    };


  };

  this.draw = function() {
    background(255, 0, 0);
    image(de_bg6, 0, 0);
    push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You decide to take Neco-Arc fishing, it was pretty uneventful but she seemed to enjoy the time spent.",
        45, 335, 725
      );
      pop();

    drawGui();
  };
}
/// These are the scene containing the main gameplay of each character//
function dategameEthel() {
  // An index of created questions and answers unique to the character, this will be
  // pilled later for a different function
  const questions = [
    {
      question: "What do you think about the game Valorant?",
      answers: [
        { text: "It's fun!", effect: -999 },
        { text: "Not my thing.", effect: 50 }
      ]
    },
    {
      question: "Do you like cats?",
      answers: [
        { text: "Yes, they're cute!", effect: 20 },
        { text: "No, I'm allergic.", effect: -20 }
      ]
    },
    {
      question: "Favorite food?",
      answers: [
        { text: "Pizza", effect: 30 },
        { text: "Fish", effect: 10 }
      ]
    },
    {
      question: "Do you think I'm sexy?",
      answers: [
        { text: "Yes", effect: -30 },
        { text: "You are a cat", effect: 30 }
      ]
    },
    {
      question: "Do you have money?",
      answers: [
        { text: "Yes", effect: +20 },
        { text: "No", effect: -30 }
      ]
    },
    {
      question: "Would you love me if I was a worm?",
      answers: [
        { text: "No", effect: -20 },
        { text: "Yes", effect: +25 }
      ]
    },
    {
      question: "Do you have money?",
      answers: [
        { text: "Yes", effect: +20 },
        { text: "No", effect: -30 }
      ]
    },
    {
      question: "How are your grades?",
      answers: [
        { text: "Pretty good", effect: 20 },
        { text: "No good", effect: 10 }
      ]
    },
    {
      question: "How do you like your coffee?",
      answers: [
        { text: "Lots of milk", effect: +20 },
        { text: "Black", effect: -30 }
      ]
    },
    {
      question: "Do you play video games?",
      answers: [
        { text: "They digust me", effect: -30 },
        { text: "Yes, I do", effect: +20 }
      ]
    }
  ];
  let currentQuestionIndex = 0;

  this.setup = function() {
    this.Affinity = 100;
    this.rectBaseY = 450;
  };

  // Helper to load a random question
 const loadRandomQuestion = (scene) => {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  const q = questions[currentQuestionIndex];
  c1.label = q.answers[0].text;
  c2.label = q.answers[1].text;
  scene.currentQuestion = q;
  if (etheltalk && typeof etheltalk.play === "function") {
    if (etheltalk.isPlaying()) {
      etheltalk.stop(); // Stop the sound if it's still playing
    }
    etheltalk.setVolume(0.4);
    etheltalk.play(); // Play talking sound when a new question is asked
  }
};

this.enter = function() {
    background(255, 0, 0); 

// theme music of character 
  if (ethelDateMusic && typeof ethelDateMusic.play === "function") {
      if (!ethelDateMusic.isPlaying()) {
        ethelDateMusic.setLoop(true);
        ethelDateMusic.setVolume(0.1);
        ethelDateMusic.play();
      }
    }



    c1 = createButton("Yes", 490, 320, 200, 50);
    c2 = createButton("No", 490, 400, 200, 50);

    // Load the first question
    loadRandomQuestion(this);

    // Helper to handle ending transitions
    const checkEndings = (scene) => {
      if (scene.Affinity <= 0) {
       
        if (ethelDateMusic && ethelDateMusic.isPlaying()) {
          ethelDateMusic.stop();
        }
        if (etheltalk.isPlaying()) {
      etheltalk.stop(); // Stop the sound if it's still playing
    }
    // disables buttons for next scene 
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;

        // Will randomly roll for 1 of 4 possible bad endings
        let badEndingNum = Math.floor(Math.random() * 4) + 1;
        if (badEndingNum === 1) scene.sceneManager.showScene(badend1);
        else if (badEndingNum === 2) scene.sceneManager.showScene(badend2);
        else if (badEndingNum === 3) scene.sceneManager.showScene(badend3);
        else scene.sceneManager.showScene(badend4);
        return true;
      }
      //Checks the affinity and will reach a game over or a win state when meeting thresholds
      if (scene.Affinity >= 220) {
        // stops all existing sounds related to scene if transitioning
        if (ethelDateMusic && ethelDateMusic.isPlaying()) {
          ethelDateMusic.stop();
        }
        if (etheltalk.isPlaying()) {
      etheltalk.stop(); // Stop the sound if it's still playing
    }
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;
        scene.sceneManager.showScene(goodend1);
        return true;
      }
      return false;
    };
// after choosing a answer the index will randomly choose a question and will
// appy the questions and the answers with their affinity values to the buttons
// If affinity is gained, a win sound will play. If lost, a fail sound will play
    c1.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[0].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };

    c2.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[1].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };
  };

  this.draw = function() {
    background(255, 0, 0);
    image(dg_bg1, 0, 0);
    image(lovemeter,50, 85)
    push();
    fill(255, 0, 0);
    noStroke();
    rect(122, this.rectBaseY - this.Affinity, 50, this.Affinity);
    pop();
    image(lovemeter_1,50, 85)

    // Rocking effect for Ethel
    push();
    let ethelAngle = sin(frameCount * 0.05) * 0.15;
    translate(250 + ethel.width / 2, 255 + ethel.height / 2);
    rotate(ethelAngle);
    imageMode(CENTER);
    image(ethel, 0, 0);
    pop();
// set dressing and other images
    image(table, 325, 370);
    image(milk, 365, 345);
    image(talkbubble, 390, 70);

    // Show the current question
    if (this.currentQuestion) {
      push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(20);
      textFont(rimsb);
      text(
        this.currentQuestion.question,
        460, 160, 325
      );
      pop();
    }

    drawGui();
  };
}
function dategameMiku() {
  // An index of created questions and answers unique to the character, this will be
  // pilled later for a different function
  const questions = [
    {
      question: "Are you British?",
      answers: [
        { text: "No", effect: 50 },
        { text: "Yes.", effect: -999 }
      ]
    },
    {
      question: "Do you think I'm a catgirl?",
      answers: [
        { text: "Yes!", effect: 20 },
        { text: "No.", effect: -20 }
      ]
    },
    {
      question: "Do you enjoy Video Games?",
      answers: [
        { text: "Yes, I play them", effect: 30 },
        { text: "Only mobile games", effect: 10 }
      ]
    },
    {
      question: "Do you think this world is mine?",
      answers: [
        { text: "No", effect: -30 },
        { text: "Of course", effect: 30 }
      ]
    },
    {
      question: "Whats your most favorite music genre?",
      answers: [
        { text: "Vocaloid", effect: +20 },
        { text: "Blues", effect: -30 }
      ]
    },
    {
      question: "whats your least favorite music genre?",
      answers: [
        { text: "Country", effect: -20 },
        { text: "Vocaloid", effect: +25 }
      ]
    },
    {
      question: "Do you eat pizza with crust or without?",
      answers: [
        { text: "with crust", effect: +20 },
        { text: "no crust", effect: -30 }
      ]
    },
    {
      question: "What is your Mythic score?",
      answers: [
        { text: "3000", effect: 20 },
        { text: "1300", effect: 10 }
      ]
    },
    {
      question: "Do you eat your vegtables?",
      answers: [
        { text: "Yes", effect: +20 },
        { text: "No", effect: -30 }
      ]
    },
    {
      question: "Would you buy my merchandise?",
      answers: [
        { text: "They digust me", effect: -30 },
        { text: "Yes, I do", effect: +20 }
      ]
    }
  ];
  let currentQuestionIndex = 0;

  this.setup = function() {
    this.Affinity = 100;
    this.rectBaseY = 450;
  };

  // Helper to load a random question
 const loadRandomQuestion = (scene) => {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  const q = questions[currentQuestionIndex];
  c1.label = q.answers[0].text;
  c2.label = q.answers[1].text;
  scene.currentQuestion = q;
  if (mikutalk && typeof mikutalk.play === "function") {
    if (mikutalk.isPlaying()) {
      mikutalk.stop(); // Stop the sound if it's still playing
    }
    mikutalk.setVolume(0.4);
    mikutalk.play(); // Play talking sound when a new question is asked
  }
};

this.enter = function() {
    background(255, 0, 0); 

// theme music of character 
  if (mikuDateMusic && typeof mikuDateMusic.play === "function") {
      if (!mikuDateMusic.isPlaying()) {
        mikuDateMusic.setLoop(true);
        mikuDateMusic.setVolume(0.1);
        mikuDateMusic.play();
      }
    }

    c1 = createButton("Yes", 490, 320, 200, 50);
    c2 = createButton("No", 490, 400, 200, 50);

    // Load the first question
    loadRandomQuestion(this);

    // Helper to handle ending transitions
    const checkEndings = (scene) => {
      if (scene.Affinity <= 0) {
       
        if (mikuDateMusic && mikuDateMusic.isPlaying()) {
          mikuDateMusic.stop();
        }
        if (mikutalk.isPlaying()) {
      mikutalk.stop(); // Stop the sound if it's still playing
    }
    // disables buttons for next scene 
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;

        // Will randomly roll for 1 of 4 possible bad endings
        let badEndingNum = Math.floor(Math.random() * 4) + 1;
        if (badEndingNum === 1) scene.sceneManager.showScene(badend1);
        else if (badEndingNum === 2) scene.sceneManager.showScene(badend2);
        else if (badEndingNum === 3) scene.sceneManager.showScene(badend3);
        else scene.sceneManager.showScene(badend4);
        return true;
      }
      //Checks the affinity and will reach a game over or a win state when meeting thresholds
      if (scene.Affinity >= 220) {
        // stops all existing sounds related to scene if transitioning
        if (mikuDateMusic && mikuDateMusic.isPlaying()) {
          mikuDateMusic.stop();
        }
        if (mikutalk.isPlaying()) {
      mikutalk.stop(); // Stop the sound if it's still playing
    }
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;
        scene.sceneManager.showScene(goodend2);
        return true;
      }
      return false;
    };
// after choosing a answer the index will randomly choose a question and will
// appy the questions and the answers with their affinity values to the buttons
// If affinity is gained, a win sound will play. If lost, a fail sound will play
    c1.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[0].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };

    c2.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[1].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };
  };

  this.draw = function() {
    background(255, 0, 0);
    image(dg_bg2, 0, 0);
    image(lovemeter,50, 85)
    push();
    fill(255, 0, 0);
    noStroke();
    rect(122, this.rectBaseY - this.Affinity, 50, this.Affinity);
    pop();
    image(lovemeter_1,50, 85)

    // Rocking effect for Ethel


    // Floating effect for Miku
    push();
    let mikuFloat = sin(frameCount * 0.05) * 15; // Adjust speed/amplitude as desired
    scale(0.8);
    image(miku, 275, 275 + mikuFloat);
    pop();
// set dressing and other images

    image(miku_table, 275, 380);
    // Rocking effect for Miku Soda
    push();
    let sodaAngle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(400 + miku_soda.width / 2, 310 + miku_soda.height / 2); // Move to soda center
    rotate(sodaAngle);
    imageMode(CENTER);
    image(miku_soda, 0, 0);
    pop();
    image(talkbubble, 390, 70);

    // Show the current question
    if (this.currentQuestion) {
      push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(20);
      textFont(rimsb);
      text(
        this.currentQuestion.question,
        460, 160, 325
      );
      pop();
    }

    drawGui();
  };
}
function dategameNecoArc() {
  // An index of created questions and answers unique to the character, this will be
  // pilled later for a different function
  const questions = [
    {
      question: "What is the best way to spend a Saturday night?",
      answers: [
        { text: "Committing harmless pranks!", effect: 30 },
        { text: "Studying for exams.", effect: -20 }
      ]
    },
    {
      question: "Pick a favorite snack:",
      answers: [
        { text: "Fish-shaped crackers", effect: 25 },
        { text: "Celery sticks", effect: -15 }
      ]
    },
    {
      question: "How do you feel about chaos?",
      answers: [
        { text: "Love it! Keeps life interesting.", effect: 30 },
        { text: "I prefer peace and quiet.", effect: -20 }
      ]
    },
    {
      question: "Your ideal pet?",
      answers: [
        { text: "A mischievous cat", effect: 20 },
        { text: "A goldfish", effect: -30 }
      ]
    },
    {
      question: "What would you do with a million dollars?",
      answers: [
        { text: "Buy gacha pulls!", effect: 25 },
        { text: "Donate to charity.", effect: -10 }
      ]
    },
    {
      question: "Favorite type of weather?",
      answers: [
        { text: "Thunderstorms", effect: 15 },
        { text: "Sunny and calm", effect: 10 }
      ]
    },
    {
      question: "How do you react to a surprise?",
      answers: [
        { text: "Laugh and join in!", effect: 20 },
        { text: "Get flustered.", effect: -10 }
      ]
    },
    {
      question: "Best way to solve a problem?",
      answers: [
        { text: "With a clever trick", effect: 20 },
        { text: "Ask for help", effect: -10 }
      ]
    },
    {
      question: "What’s your favorite meme format?",
      answers: [
        { text: "Cats doing crimes", effect: 25 },
        { text: "Stock photos", effect: -5 }
      ]
    },
    {
      question: "What would you do if you found a mysterious button?",
      answers: [
        { text: "Press it immediately!", effect: 30 },
        { text: "Leave it alone.", effect: -25 }
      ]
    }
  ];
  let currentQuestionIndex = 0;

  this.setup = function() {
    this.Affinity = 100;
    this.rectBaseY = 450;
  };

  // Helper to load a random question
 const loadRandomQuestion = (scene) => {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  const q = questions[currentQuestionIndex];

  // Set default button width
  let baseWidth = 200;
  let padding = 40; // Extra space for padding

  // Calculate required width for each answer using textWidth
  textSize(20); // Match your button text size
  textFont(rimsb); // Match your button font

  let width1 = textWidth(q.answers[0].text) + padding;
  let width2 = textWidth(q.answers[1].text) + padding;

  // Set button width to max of baseWidth or required width
  c1.w = max(baseWidth, width1);
  c2.w = max(baseWidth, width2);

  // Optionally, re-center buttons if widths change
  c1.x = 490 + (200 - c1.w) / 2;
  c2.x = 490 + (200 - c2.w) / 2;

  c1.label = q.answers[0].text;
  c2.label = q.answers[1].text;
  scene.currentQuestion = q;
  if (necoarctalk && typeof necoarctalk.play === "function") {
    if (necoarctalk.isPlaying()) {
      necoarctalk.stop(); // Stop the sound if it's still playing
    }
    necoarctalk.setVolume(0.4);
    necoarctalk.play(); // Play talking sound when a new question is asked
  }
};

this.enter = function() {
    background(255, 0, 0); 

// theme music of character 
  if (necoarcDateMusic && typeof necoarcDateMusic.play === "function") {
      if (!mikuDateMusic.isPlaying()) {
        necoarcDateMusic.setLoop(true);
        necoarcDateMusic.setVolume(0.1);
        necoarcDateMusic.play();
      }
    }

    c1 = createButton("Yes", 490, 320, 200, 50);
    c2 = createButton("No", 490, 400, 200, 50);

    // Load the first question
    loadRandomQuestion(this);

    // Helper to handle ending transitions
    const checkEndings = (scene) => {
      if (scene.Affinity <= 0) {
       
        if (necoarcDateMusic && necoarcDateMusic.isPlaying()) {
          necoarcDateMusic.stop();
        }
        if (necoarctalk.isPlaying()) {
      necoarctalk.stop(); // Stop the sound if it's still playing
    }
    // disables buttons for next scene 
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;

        // Will randomly roll for 1 of 4 possible bad endings
        let badEndingNum = Math.floor(Math.random() * 4) + 1;
        if (badEndingNum === 1) scene.sceneManager.showScene(badend1);
        else if (badEndingNum === 2) scene.sceneManager.showScene(badend2);
        else if (badEndingNum === 3) scene.sceneManager.showScene(badend3);
        else scene.sceneManager.showScene(badend4);
        return true;
      }
      //Checks the affinity and will reach a game over or a win state when meeting thresholds
      if (scene.Affinity >= 220) {
        // stops all existing sounds related to scene if transitioning
        if (necoarcDateMusic && necoarcDateMusic.isPlaying()) {
          necoarcDateMusic.stop();
        }
        if (necoarctalk.isPlaying()) {
      necoarctalk.stop(); // Stop the sound if it's still playing
    }
        c1.visible = false;
        c1.enabled = false;
        c2.visible = false;
        c2.enabled = false;
        scene.sceneManager.showScene(goodend3);
        return true;
      }
      return false;
    };
// after choosing a answer the index will randomly choose a question and will
// appy the questions and the answers with their affinity values to the buttons
// If affinity is gained, a win sound will play. If lost, a fail sound will play
    c1.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[0].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };

    c2.onPress = () => {
      select.play();
      let effect = this.currentQuestion.answers[1].effect;
      if (effect > 0) {
        win.setVolume(0.3)
        win.play();
      } else if (effect < 0) {
        this.Affinity = max(this.Affinity + effect, 0);
        fail.setVolume(0.3)
        fail.play();
      }
      this.Affinity = min(this.Affinity + effect, 300);

      // Check for endings
      if (!checkEndings(this)) {
        loadRandomQuestion(this);
      }
    };
  };

  this.draw = function() {
    background(255, 0, 0);
    image(dg_bg3, 0, 0);
    image(lovemeter,50, 85)
    push();
    fill(255, 0, 0);
    noStroke();
    rect(122, this.rectBaseY - this.Affinity, 50, this.Affinity);
    pop();
    image(lovemeter_1,50, 85)


 // Rocking effect for Necoarc
    push();
    let necoarcAngle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(225 + necoarc.width / 2, 175 + necoarc.height / 2); // Move to Necoarc center
    rotate(necoarcAngle);
    imageMode(CENTER);
    scale(0.8);
    image(necoarc, 0, 0);
    pop();
// set dressing and other images

    image(oildrum, 375, 365);
    // Rocking effect for coke
    push();
    //listen its the same thing with the other drink man, i dont wanna rename every single one
    let sodaAngle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(400 + miku_soda.width / 2, 310 + miku_soda.height / 2); // Move to soda center
    rotate(sodaAngle);
    imageMode(CENTER);
    image(coke, 0, 0);
    pop();
    image(talkbubble, 390, 70);

    // Show the current question
    if (this.currentQuestion) {
      push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(20);
      textFont(rimsb);
      text(
        this.currentQuestion.question,
        460, 160, 325
      );
      pop();
    }

    drawGui();
  };
}

//// Bad Endings when falling below 0 affinity ////
function badend1() {
  this.setup = function() {
    console.log("we are setting up on Bad End 1");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Bad End 1 ");
    // plays the bad end music
if (!gameoverMusic.isPlaying()) {
        gameoverMusic.setLoop(true);
        gameoverMusic.setVolume(0.1);
        gameoverMusic.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(be_bg1, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You were rejected on the date! Instead of going to the dance you spend the night playing Valorant competitive alone stuck in Silver… Perhaps things could’ve been different if you were more careful.",
        45, 335, 725
      );
      pop();

      push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(oef);
    let yOffset = sin(frameCount * 0.05) * 18; // Adjust speed/amplitude as desired
    text(
      "Game Over!",
      245, 505 + yOffset
    );
    pop();
    drawGui();
  };
}
function badend2() {
  this.setup = function() {
    console.log("we are setting up on Bad End 2");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Bad End 2 ");
    // plays the bad end music
if (!gameoverMusic.isPlaying()) {
        gameoverMusic.setLoop(true);
        gameoverMusic.setVolume(0.1);
        gameoverMusic.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(be_bg2, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "They were not interested in going with you to the dance, instead of partying all night long you spend time doing dailies on Genshin Impact. Wondering if one day you’ll win the 50/50 in real life instead of on a banner.",
        45, 335, 725
      );
      pop();

      push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(oef);
    let yOffset = sin(frameCount * 0.05) * 18; // Adjust speed/amplitude as desired
    text(
      "Game Over!",
      245, 505 + yOffset
    );
    pop();
    drawGui();
  };
}
function badend3() {
  this.setup = function() {
    console.log("we are setting up on Bad End 3");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Bad End 3 ");
    // plays the bad end music
if (!gameoverMusic.isPlaying()) {
        gameoverMusic.setLoop(true);
        gameoverMusic.setVolume(0.1);
        gameoverMusic.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(be_bg3, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "Your date decided to leave early, you sadly find your way to the SJSU Union building where you sit and wait for your mom to pick you up. You were excited to tell her how the date went but now all you feel is the melancholy of the lonely soul.",
        45, 335, 725
      );
      pop();

      push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(oef);
    let yOffset = sin(frameCount * 0.05) * 18; // Adjust speed/amplitude as desired
    text(
      "Game Over!",
      245, 505 + yOffset
    );
    pop();
    drawGui();
  };
}
function badend4() {
  this.setup = function() {
    console.log("we are setting up on Bad End 4");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Bad End 4 ");
    // plays the bad end music
if (!gameoverMusic.isPlaying()) {
        gameoverMusic.setLoop(true);
        gameoverMusic.setVolume(0.1);
        gameoverMusic.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(be_bg4, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "The date did not go well. You went to the bus station alone, knowing that you flubbed your chance at finding a date for the dance. Thoughts swirl on what went wrong, maybe in another time it went better…",
        45, 335, 725
      );
      pop();

      push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(oef);
    let yOffset = sin(frameCount * 0.05) * 18; // Adjust speed/amplitude as desired
    text(
      "Game Over!",
      245, 505 + yOffset
    );
    pop();
    drawGui();
  };
}

//// Specific endings when reaching max affnity with a character ////
// ethel ending
function goodend1() {
  this.setup = function() {
    console.log("we are setting up on Good Ending 1");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Good Ending 1 ");
    // plays the bad end music
if (!winEndingMusic_1.isPlaying()) {
        winEndingMusic_1.setLoop(true);
        winEndingMusic_1.setVolume(0.1);
        winEndingMusic_1.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(ge_bg1, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "Ethel is taken on how much of a hot stud you are! She accepts your invitation to the dance! You spend the night boogeying down with your new date. What a lucky guy you are!",
        45, 335, 725
      );
      pop();
   // Dancing effect for Durie
    push();
    let durieX = 200 + sin(frameCount * 0.08) * 25; // Sway left/right
    let durieY = 100 + cos(frameCount * 0.12) * 15; // Bounce up/down
    let durieAngle = sin(frameCount * 0.1) * 0.15;  // Rotate a bit
    translate(durieX + 75, durieY + 75); // Center for rotation (150x150 image)
    rotate(durieAngle);
    imageMode(CENTER);
    image(durie, 0, 0, 150, 150);
    pop();

    // Dancing effect for Ethel
    push();
    let ethelX = 400 + sin(frameCount * 0.09 + PI) * 25; // Sway opposite
    let ethelY = 100 + cos(frameCount * 0.13 + PI) * 15; // Bounce up/down
    let ethelAngle = -sin(frameCount * 0.1) * 0.15; // Rotate opposite
    translate(ethelX + 75, ethelY + 75); // Center for rotation (150x150 image)
    rotate(ethelAngle);
    imageMode(CENTER);
    image(ethel, 0, 0, 150, 150);
    pop();
    push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(cs);
    let angle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(300 + 120, 490 + 30); // Move to center of text (approximate)
    rotate(angle);
    text(
      "You Win!",
      -120, -30 // Draw text centered at the translated point
    );
    pop();

    drawGui();
  };
}
// Miku ending
function goodend2() {
  this.setup = function() {
    console.log("we are setting up on Good End 2");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Good End 2 ");
    // plays the bad end music
if (!winEndingMusic_2.isPlaying()) {
        winEndingMusic_2.setLoop(true);
        winEndingMusic_2.setVolume(0.1);
        winEndingMusic_2.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(ge_bg2, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(25);
      textFont(rimsb);
      text(
        "You ace the date! Hatsune Miku accepts your offer to go dance with her! The day of the dance is filled with joy and fun! What a day! You are the G.O.A.T!",
        45, 335, 725
      );
      pop();
   // Dancing effect for Durie
    push();
    let durieX = 200 + sin(frameCount * 0.08) * 25; // Sway left/right
    let durieY = 100 + cos(frameCount * 0.12) * 15; // Bounce up/down
    let durieAngle = sin(frameCount * 0.1) * 0.15;  // Rotate a bit
    translate(durieX + 75, durieY + 75); // Center for rotation (150x150 image)
    rotate(durieAngle);
    imageMode(CENTER);
    image(durie, 0, 0, 150, 150);
    pop();

    // Dancing effect for Ethel but i translated it for Miku but i'm too lazy to rename this
    push();
    let ethelX = 400 + sin(frameCount * 0.09 + PI) * 25; // Sway opposite
    let ethelY = 100 + cos(frameCount * 0.13 + PI) * 15; // Bounce up/down
    let ethelAngle = -sin(frameCount * 0.1) * 0.15; // Rotate opposite
    translate(ethelX + 75, ethelY + 75); // Center for rotation (150x150 image)
    rotate(ethelAngle);
    imageMode(CENTER);
    image(miku_dance, 0, 0,250, 250);
    pop();
    push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(cs);
    let angle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(300 + 120, 490 + 30); // Move to center of text (approximate)
    rotate(angle);
    text(
      "You Win!",
      -120, -30 // Draw text centered at the translated point
    );
    pop();

    drawGui();
  };
}

function goodend3() {
  this.setup = function() {
    console.log("we are setting up on Good End 3");

    };

  this.enter = function() {
    background(255, 0, 0); 
    console.log("we are entering Good End 3 ");
    // plays the bad end music
if (!winEndingMusic_3.isPlaying()) {
        winEndingMusic_3.setLoop(true);
        winEndingMusic_3.setVolume(0.1);
        winEndingMusic_3.play();
      }

 
  };

  this.draw = function() {
    background(255, 0, 0);
    image(ge_bg3, 0, 0);

     push();
      fill(0);
      textAlign(LEFT, TOP);
      textSize(22);
      textFont(rimsb);
      text(
        "Nyaa, you super wowed the great Neco-Arc, nya! She wants to dance with you, nya~! You both are gonna groove it down cat-style, meow! The night is so pawsitively purrfect, it’s almost a crime, nya! Especially since Neco-Arc is one, teehee! You’re so daring for winning this fun time, nya~!",
        45, 335, 725
      );
      pop();
   // Dancing effect for Durie
    push();
    let durieX = 200 + sin(frameCount * 0.08) * 25; // Sway left/right
    let durieY = 100 + cos(frameCount * 0.12) * 15; // Bounce up/down
    let durieAngle = sin(frameCount * 0.1) * 0.15;  // Rotate a bit
    translate(durieX + 75, durieY + 75); // Center for rotation (150x150 image)
    rotate(durieAngle);
    imageMode(CENTER);
    image(durie, 0, 0, 150, 150);
    pop();

    // Dancing effect for Ethel but i translated it for Necoarc but i'm too lazy to rename this
    push();
    let ethelX = 400 + sin(frameCount * 0.2 + PI) * 25; // Sway opposite
    let ethelY = 100 + cos(frameCount * 0.13 + PI) * 15; // Bounce up/down
    let ethelAngle = -sin(frameCount * 0.1) * 0.15; // Rotate opposite
    translate(ethelX + 75, ethelY + 75); // Center for rotation (150x150 image)
    rotate(ethelAngle);
    imageMode(CENTER);
    image(necoarc, 0, 0,100, 200);
    pop();
    push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(50);
    textFont(cs);
    let angle = sin(frameCount * 0.07) * 0.18; // Adjust speed/amplitude as desired
    translate(300 + 120, 490 + 30); // Move to center of text (approximate)
    rotate(angle);
    text(
      "You Win!",
      -120, -30 // Draw text centered at the translated point
    );
    pop();

    drawGui();
  };
}