
// This contains the use of both the Sounds and Scenemanager libraries

let wood, snd1;
let opi;
let volumeSlider; 
let r = 255, g = 200, b = 200;

let s;
let bg1,bg2,bg3,bg4,bg5;
let logo;
let floor,lovemeter,lovemeter_1;

let durie;
let miku, miku_soda,miku_table, miku_dance;
let necoarc, coke, oildrum;
let ethel, table, milk,ethelDateMusic, ethelSelectMusic ;
let necoarcDateMusic,necoarcSelectMusic
let mikuDateMusic, mikuSelectMusic ;
let etheltalk,mikutalk,necoarctalk;

let select;
let mousehover;
let mikuselect;
let necoarcselect;
let songintro, gameoverMusic;
let de_bg1, de_bg2, de_bg3, de_bg4, de_bg5, de_bg6;
let dg_bg1,dg_bg2,dg_bg3;
let rimsb, oef;
let win,fail;
let be_bg1,be_bg2,be_bg3,be_bg4;
let ge_bg1,ge_bg2;

let winEndingMusic_1, winEndingMusic_2, winEndingMusic_3;

let interMusic_1, interMusic_2, interMusic_3, interMusic_4, interMusic_5;
// rewrite buttons insketch 

function preload() {
  snd1 = loadSound("assets/beat.mp3");
 
  wood = loadSound("assets/wood.mp3");
  opi = loadImage("assets/octo.png");
//fonts
  rimsb = loadFont("assets/fonts/rimouski_sb.otf");
  oef   = loadFont("assets/fonts/Ordeal-Eroded-FFP.ttf");
  cs   = loadFont("assets/fonts/comicsans.ttf");
  //Image Assets
  logo = loadImage("assets/game_assets/game_logo.png");
  floor = loadImage("assets/floor.png");
  ethel = loadImage("assets/cat1.png");
  durie = loadImage("assets/game_assets/durie.png");
  miku = loadImage("assets/game_assets/miku.png");
  necoarc = loadImage("assets/game_assets/necoarc.png");
  lovemeter = loadImage("assets/game_assets/love_meter.png");
  lovemeter_1 = loadImage("assets/game_assets/love_meter_front.png");
  talkbubble = loadImage("assets/game_assets/talk_bubble.png");
  

      // Date Scene Assets
  table = loadImage("assets/game_assets/table.png");
  milk = loadImage("assets/game_assets/milk.png");
  
  miku_soda = loadImage("assets/game_assets/miku_soda.png");
  miku_table = loadImage("assets/game_assets/miku_table.png");
  miku_dance = loadImage("assets/game_assets/miku_dance.gif");

  coke = loadImage("assets/game_assets/coke.png");
  oildrum = loadImage("assets/game_assets/oildrum.png");

    // Background assets
    bg0 = loadImage("assets/game_background/intro_bg.png");
    bg1 = loadImage("assets/bgintro.png");
    bg2 = loadImage("assets/bgdateselect.png");
    bg3 = loadImage("assets/bgdateselect1.png");
    bg4 = loadImage("assets/game_background/miku_select_bg.png")
    bg5 = loadImage("assets/game_background/necoarc_select_bg.png")


    de_bg1 = loadImage("assets/game_background/intermission_date_1.png");
    de_bg2 = loadImage("assets/game_background/intermission_date_2.png");
    de_bg3 = loadImage("assets/game_background/intermission_date_3.png");
    de_bg4 = loadImage("assets/game_background/intermission_date_4.png");
    de_bg5 = loadImage("assets/game_background/intermission_date_5.png");
    de_bg6 = loadImage("assets/game_background/intermission_date_6.png");

    dg_bg1 = loadImage("assets/game_background/date_ethel_background.png");
    dg_bg2 = loadImage("assets/game_background/date_miku_background.png");
    dg_bg3 = loadImage("assets/game_background/date_necoarc_background.png");

    be_bg1 = loadImage("assets/game_background/bad_end_1.png");
    be_bg2 = loadImage("assets/game_background/bad_end_2.png");
    be_bg3 = loadImage("assets/game_background/bad_end_3.png");
    be_bg4 = loadImage("assets/game_background/bad_end_4.png");

    ge_bg1 = loadImage("assets/game_background/ethel_ending_1.png");
    ge_bg2 = loadImage("assets/game_background/miku_ending.png");
    ge_bg3 = loadImage("assets/game_background/necoarc_ending.png");
   
    // Sound Assets 

 select = loadSound("assets/select.mp3");
 mousehover = loadSound("assets/mousehover.mp3");``
 mikuselect = loadSound("assets/mikuselect.mp3");
 necoarcselect = loadSound("assets/necoarcselect.mp3");
 
etheltalk = loadSound("assets/sound_effects/etheltalk.mp3");
mikutalk = loadSound("assets/sound_effects/kkkiaimen.mp3");
necoarctalk = loadSound("assets/sound_effects/necotalk.mp3");
 win = loadSound("assets/sound_effects/win.mp3");
 fail = loadSound("assets/sound_effects/fail.mp3");
 // Songs
 songintro = loadSound("assets/music/1-10. Become Friends.mp3");
 gameoverMusic = loadSound("assets/music/2-14_All_Star_Apologies.mp3");
 
interMusic_1 = loadSound("assets/music/43. Specialist.mp3");
interMusic_2 = loadSound("assets/music/24. Let S Go To The Beach.mp3");
interMusic_3 = loadSound("assets/music/13. Wet Hands.mp3");
interMusic_4 = loadSound("assets/music/My Room Option.mp3");
interMusic_5 = loadSound("assets/music/11._where's_the_van!.mp3");

 ethelSelectMusic = loadSound("assets/music/1-08 Monomi-sensei no Kyouiku Jisshuu.mp3");
 ethelDateMusic = loadSound("assets/music/1-26_Beautiful_Morning.mp3");
 
 mikuSelectMusic = loadSound("assets/music/Pv011 Mix.mp3");
 mikuDateMusic = loadSound("assets/music/3-02 Love wa Survival.mp3");

 necoarcSelectMusic = loadSound("assets/music/necoarctheme.mp3");
 necoarcDateMusic = loadSound("assets/music/1-07._rise_and_shine,_ursine!.mp3");

 winEndingMusic_1 = loadSound("assets/music/10. Joy.mp3");
 winEndingMusic_2 = loadSound("assets/music/Pv002 Mix.mp3");
 winEndingMusic_3 = loadSound("assets/music/2-35_friday_night.mp3");
}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
createCanvas(800, 600);
  //  console.log(hell);

  gui = createGui();
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
     
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene2);


    mgr.addScene (dateselect);
    mgr.addScene (dateselectEthel);
    mgr.addScene (dateselectMiku);
    mgr.addScene (dateselectNecoArc);


    mgr.addScene (IntermissionEvent1);
    mgr.addScene (IntermissionEvent2);
    mgr.addScene (IntermissionEvent3);
    mgr.addScene (IntermissionEvent4);


    mgr.addScene (dategameEthel);
    mgr.addScene (dategameMiku);
    mgr.addScene (dategameNecoArc);
    

    mgr.addScene (badend1);
    mgr.addScene (badend2);
    mgr.addScene (badend3);
    mgr.addScene (badend4);

    mgr.addScene (goodend1);
    mgr.addScene (goodend2);
    mgr.addScene (goodend3);

    mgr.showNextScene();

   // mgr.showScene(dategameNecoArc)
} 

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    // switch(key)
    // {
    //     case '1':
    //         mgr.showScene( intro );
           
    //         break;
    //     case '2':
    //         mgr.showScene( dateselect );
    //         break;
    //     case '3':
    //         mgr.showScene( dateselectEthel );
    //         break;
    //     case 'h':
    //         break;
    //     case 'H':
    //         break;
    //      case 'e':
    //         mgr.showScene( dateselect );
    //         break;
    // }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
