var serve = 0;
var story = 1;
var level1start = 2;
var level1play = 3;
var level1end = 4;
var level1win = 5;
var level2play = 6;
var level2end = 7;
var level2win = 8;
var gamewin = 9;
var gamelost = 10;
var gameState = 0;
var background, backgroundImg;
var background1, backgroundImg1;
var level1bg, level1bgImg;
var level2bg, level2bgImg;
var level3bg, level3bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var level1story, level1Img;
var level2story, level2Img;
var book, bookImg;
var youwin, youwinImg;
var gameover, gameoverImg;
var playagain, playagainImg;
var restart, restartImg;
var player, playerImg;
var youwinstory, youwinstoryImg;
var startButton, storyButton,playButton;
var security;
var annabelle, annabelleImg;
var nun, nunImg;
var pennywise, pennywiseImg;
var ghostlady, ghostladyImg;
var deadlady, deadladyImg;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,
cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,
cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,
cardboard28,cardboard29,cardboard30,cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,
cardboard37,cardboard38,cardboard39,cardboard40,cardboard41,cardboard42,cardboard43,cardboard44,cardboard45,
cardboard46,cardboard47,cardboard48,cardboard49,cardboard50,cardboard51,cardboard52,cardboard53,cardboard54,
cardboard55,cardboard56,cardboard57,cardboard58,cardboard59,cardboard60,cardboard61,cardboard62,cardboard63,
cardboard64,cardboard65,cardboard66,cardboard67;

const accessCode1 = "ZOMBIE";
const accessCode2 = "VAMPIRE";
const accessCode3 = "SKELETON";
const accessCode4 = "DRACULA";
const accessCode5 = "WITCH";
const accessCode6 = "NUN";

const accessCode11 = "MUMMY";
const accessCode12 = "COFFIN";
const accessCode13 = "72";
const accessCode14 = "153"
const accessCode15 = "15";


function preload(){
backgroundImg = loadImage("images/background.png");
backgroundImg1 = loadImage("images/background.png");
level1bgImg = loadImage("images/level1_bg.jpg");
level2bgImg = loadImage("images/level2_bg.jpg");
level3bgImg = loadImage("images/level3_bg.png");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level 1 story.png");
level2Img = loadImage("images/level 2 story.png");
bookImg = loadImage("images/book.jpg");
youwinImg = loadImage("images/youwinbg.jpg");
gameoverImg = loadImage("images/gameover.png");
playagainImg = loadImage("images/playagain.png");
restartImg = loadImage("images/restart.png");
playerImg = loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png");
youwinstoryImg = loadImage("images/youwin_story.png");
youlostImg = loadImage("images/youlost.png");
annabelleImg = loadImage("images/annabelle.png");
nunImg = loadImage("images/nun.png");
pennywiseImg = loadImage("images/pennywise.jpg");
deadladyImg = loadImage("images/deadlady.jpg");
ghostladyImg = loadImage("images/ghostlady.jpg");
sound1 = loadSound("sounds/sound1.mp3");
sound2 = loadSound("sounds/sound2.mp3");
sound3 = loadSound("sounds/sound3.wav");
sound4 = loadSound("sounds/sound4.wav");
sound5 = loadSound("sounds/sound5.mp3");
sound6 = loadSound("sounds/sound6.mp3");

}

function setup() {
createCanvas(1000,600);
sound1.play();


startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

homeButton=createSprite(750,60);
homeButton.addImage(homeImg)
homeButton.scale = 0.3;

playButton=createSprite(750,150);
playButton.addImage(playImg);
playButton.scale = 0.15;

playagainButton = createSprite(750,500);
playagainButton.addImage(playagainImg);
//playagainButton.scale = 0.3;

annabelle = createSprite(350,170);
annabelle.addImage(annabelleImg);
annabelle.scale = 0.6;
annabelle.visible = false;

nun = createSprite(900,70);
nun.addImage(nunImg);
nun.scale = 0.8;
nun.visible = false;

pennywise = createSprite(850,270);
pennywise.addImage(pennywiseImg);
pennywise.scale = 0.8;
pennywise.visible = false;

ghostlady = createSprite(870,470);
ghostlady.addImage(ghostladyImg);
ghostlady.scale = 0.8;
ghostlady.visible = false;

deadlady = createSprite(300,380);
deadlady.addImage(deadladyImg);
deadlady.scale = 0.7;
deadlady.visible = false;

player = createSprite(50,30,100,50);
player.addAnimation("player",playerImg);
player.scale = 0.41;
player.visible=false;

book = createSprite(950,570,20,110);
book.addImage(bookImg);
book.scale = 0.2;
book.visible = false;

cardboard1=createSprite(10,70,100,20);
cardboard1.shapeColor="black";

cardboard2=createSprite(105,35,20,150);
cardboard2.shapeColor="orange";

cardboard3=createSprite(175,35,120,20);
cardboard3.shapeColor="red";

cardboard4=createSprite(170,160,20,120);
cardboard4.shapeColor="orange";

cardboard5=createSprite(100,220,100,20);
cardboard5.shapeColor="yellow";

cardboard6=createSprite(50,175,20,100);
cardboard6.shapeColor="pink";

cardboard7=createSprite(210,200,20,150);
cardboard7.shapeColor="blue";

cardboard8=createSprite(250,120,145,20);
cardboard8.shapeColor="purple";

cardboard9=createSprite(280,90,20,50);
cardboard9.shapeColor="green";

cardboard10=createSprite(75,300,20,100);
cardboard10.shapeColor="black";

cardboard11=createSprite(2,160,100,20);
cardboard11.shapeColor="pink";

cardboard12=createSprite(370,40,100,20);
cardboard12.shapeColor="white";

cardboard13=createSprite(370,150,200,20);
cardboard13.shapeColor="darkgreen";

cardboard14=createSprite(280,260,20,100);
cardboard14.shapeColor="yellow";

cardboard15=createSprite(365,260,100,20);
cardboard15.shapeColor="purple";

cardboard16=createSprite(295,315,150,20);
cardboard16.shapeColor="white";

cardboard17=createSprite(360,95,20,90);
cardboard17.shapeColor="darkblue";

cardboard18=createSprite(30,290,80,20);
cardboard18.shapeColor="black";

cardboard19=createSprite(150,290,20,100);
cardboard19.shapeColor="lightblue";

cardboard20=createSprite(270,360,100,20);
cardboard20.shapeColor="white";

cardboard21=createSprite(10,350,20,100);
cardboard21.shapeColor="brown";

cardboard22=createSprite(215,355,20,100);
cardboard22.shapeColor="red";

cardboard23 = createSprite(500,220,130,20);
cardboard23.shapeColor="red"

cardboard24 = createSprite(550,160,20,100);
cardboard24.shapeColor="yellow";

cardboard25 = createSprite(470,90,90,20);
cardboard25.shapeColor="brown";

cardboard26 = createSprite(460,50,20,70);
cardboard26.shapeColor="darkgreen";

cardboard27 = createSprite(415,420,20,180);
cardboard27.shapeColor="orange";

cardboard28 = createSprite(380,207,20,92);
cardboard28.shapeColor="pink";

cardboard29 = createSprite(500,340,150,20);
cardboard29.shapeColor="brown";

cardboard30 = createSprite(490,280,20,100);
cardboard30.shapeColor="darkblue";

cardboard31=createSprite(175,550,150,20);
cardboard31.shapeColor="lightblue";

cardboard32=createSprite(400,500,150,20);
cardboard32.shapeColor="grey";

cardboard33=createSprite(50,460,110,20);
cardboard33.shapeColor="lightgreen";

cardboard34=createSprite(350,440,20,100);
cardboard34.shapeColor="yellow";

cardboard35=createSprite(50,400,100,20);
cardboard35.shapeColor="darkgreen";

cardboard36=createSprite(350,560,130,20);
cardboard36.shapeColor="red";

cardboard37=createSprite(195,410,150,20);
cardboard37.shapeColor="pink";

cardboard38=createSprite(50,540,20,140);
cardboard38.shapeColor="orange";

cardboard39=createSprite(190,480,20,120);
cardboard39.shapeColor="brown";

cardboard40=createSprite(280,530,20,140);
cardboard40.shapeColor="darkgreen";

cardboard41=createSprite(600,50,140,20);
cardboard41.shapeColor="grey";

cardboard42=createSprite(485,545,20,110);
cardboard42.shapeColor="pink";

cardboard43=createSprite(690,120,150,20);
cardboard43.shapeColor="orange";

cardboard44=createSprite(630,250,20,150);
cardboard44.shapeColor="lightgreen";

cardboard45=createSprite(490,410,130,20);
cardboard45.shapeColor="darkblue";

cardboard46=createSprite(560,530,130,20);
cardboard46.shapeColor="lightblue";

cardboard47=createSprite(695,330,150,20);
cardboard47.shapeColor="yellow";

cardboard48=createSprite(695,415,20,150);
cardboard48.shapeColor="orange";

cardboard49=createSprite(610,470,150,20);
cardboard49.shapeColor="pink";

cardboard50=createSprite(635,400,100,20);
cardboard50.shapeColor="red";

cardboard51=createSprite(620,560,20,80);
cardboard51.shapeColor="darkgreen";

cardboard52=createSprite(750,50,20,120);
cardboard52.shapeColor="purple";

cardboard53=createSprite(700,195,20,130);
cardboard53.shapeColor="yellow";

cardboard54=createSprite(760,270,140,20);
cardboard54.shapeColor="orange";

cardboard55=createSprite(780,420,150,20);
cardboard55.shapeColor="brown";

cardboard56=createSprite(705,550,150,20);
cardboard56.shapeColor="darkblue";

cardboard57=createSprite(820,50,120,20);
cardboard57.shapeColor="pink";

cardboard58=createSprite(870,100,20,120);
cardboard58.shapeColor="purple";

cardboard59=createSprite(940,100,120,20);
cardboard59.shapeColor="darkgreen";

cardboard60=createSprite(790,210,160,20);
cardboard60.shapeColor="brown";

cardboard61=createSprite(965,210,70,20);
cardboard61.shapeColor="red";

cardboard62=createSprite(940,270,20,100);
cardboard62.shapeColor="yellow";

cardboard63=createSprite(850,400,20,140);
cardboard63.shapeColor="darkblue";

cardboard64=createSprite(950,400,100,20);
cardboard64.shapeColor="red";

cardboard65=createSprite(930,530,160,20);
cardboard65.shapeColor="pink";

cardboard66=createSprite(960,465,20,110);
cardboard66.shapeColor="darkgreen";

cardboard67=createSprite(770,485,20,110);
cardboard67.shapeColor="yellow";


startButton.visible = false;
storyButton.visible = false;
homeButton.visible = false;
playButton.visible = false;
security = new Security();
security1 = new Security1();
cardboardhide();

}

function draw() {
createEdgeSprites();

player.bounceOff(cardboard1);
player.bounceOff(cardboard2);
player.bounceOff(cardboard3);
player.bounceOff(cardboard4);
player.bounceOff(cardboard5)
player.bounceOff(cardboard6);
player.bounceOff(cardboard7);
player.bounceOff(cardboard8);
player.bounceOff(cardboard9);
player.bounceOff(cardboard10);
player.bounceOff(cardboard11)
player.bounceOff(cardboard12);
player.bounceOff(cardboard13);
player.bounceOff(cardboard14);
player.bounceOff(cardboard15);
player.bounceOff(cardboard16)
player.bounceOff(cardboard17);
player.bounceOff(cardboard18);
player.bounceOff(cardboard19);
player.bounceOff(cardboard20);
player.bounceOff(cardboard21);
player.bounceOff(cardboard22);
player.bounceOff(cardboard23);
player.bounceOff(cardboard24);
player.bounceOff(cardboard25);
player.bounceOff(cardboard26)
player.bounceOff(cardboard27);
player.bounceOff(cardboard28);
player.bounceOff(cardboard29);
player.bounceOff(cardboard30);
player.bounceOff(cardboard31);
player.bounceOff(cardboard32);
player.bounceOff(cardboard33);
player.bounceOff(cardboard34);
player.bounceOff(cardboard35);
player.bounceOff(cardboard36)
player.bounceOff(cardboard37);
player.bounceOff(cardboard38);
player.bounceOff(cardboard39);
player.bounceOff(cardboard40);
player.bounceOff(cardboard41);
player.bounceOff(cardboard42);
player.bounceOff(cardboard43);
player.bounceOff(cardboard44);
player.bounceOff(cardboard45);
player.bounceOff(cardboard46)
player.bounceOff(cardboard47);
player.bounceOff(cardboard48);
player.bounceOff(cardboard49);
player.bounceOff(cardboard50);
player.bounceOff(cardboard51);
player.bounceOff(cardboard52);
player.bounceOff(cardboard53);
player.bounceOff(cardboard54);
player.bounceOff(cardboard55);
player.bounceOff(cardboard56)
player.bounceOff(cardboard57);
player.bounceOff(cardboard58);
player.bounceOff(cardboard59);
player.bounceOff(cardboard60);
player.bounceOff(cardboard61);
player.bounceOff(cardboard62);
player.bounceOff(cardboard63);
player.bounceOff(cardboard64);
player.bounceOff(cardboard65);
player.bounceOff(cardboard66)
player.bounceOff(cardboard67);


if(keyDown("right_arrow")){
player.x = player.x +3;
}
if(keyDown("left_arrow")){
player.x = player.x -3;
}
if(keyDown("up_arrow")){
player.y = player.y -3;
}
if(keyDown("down_arrow")){
player.y = player.y +3;
}
        
    
if(gameState === serve)
{
background(backgroundImg);
sound6.stop();
startButton.visible = true;
storyButton.visible = true;
playagainButton.visible = false;



if(mousePressedOver(startButton))
{
gameState = level1start;

}
if(mousePressedOver(storyButton))
{
gameState = story;

}    
}

else if (gameState === story)
{
background(infoSlideImg);
textSize(30);
fill("white");
text("You have to reload the page and then click on the start button ",70, 110);
textSize(30);
fill("white");
text("to start playing the game",70, 140);
storyButton.visible = false;
startButton.visible=false;
playagainButton.visible = false;
homeButton.visible = true;

}
else if (gameState === level1start)
{
background(level1Img);
sound1.stop();
sound2.play();
startButton.visible = false;
storyButton.visible = false;
playagainButton.visible = false;
playButton.visible = true;
homeButton.visible = true;
if(mousePressedOver(playButton))
{
gameState = level1play;
}

}
else if(gameState === level1play)
{
background(level1bgImg);
sound2.stop();
sound3.play();
playButton.visible = false;
homeButton.visible = false;
playagainButton.visible = false;
annabelle.visible = true;
nun.visible = true;
pennywise.visible = true;
ghostlady.visible = true;
deadlady.visible = true;
security.display();
clues();
}
else if(gameState === level1win)
{
background(level2Img);
sound3.stop();
startButton.visible = false;
storyButton.visible = false;
playagainButton.visible = false;
playButton.visible = true;
annabelle.visible = false;
nun.visible = false;
pennywise.visible = false;
ghostlady.visible = false;
deadlady.visible = false;
if(mousePressedOver(playButton))
{
gameState = level2play;
}
}
else if(gameState === level1end)
{
background(playagainImg);
sound3.stop();
startButton.visible = false;
storyButton.visible = false;
playagainButton.visible = false;
playButton.visible = true;
security.hide();
if(mousePressedOver(playButton))
{
gameState = level1play;
security = new Security();
security.display()

}


}
else if (gameState === level2play)
{
sound3.stop();
//sound4.play();
background(level2bgImg);
homeButton.visible = false;
playagainButton.visible = false;
player.visible = true;
if(player.isTouching(book)){
gameState = level2win;
}
play2();
}

else if(gameState === level2win)
{
background(level3bgImg);
youwinstoryImg.visible = false;
youlostImg.visible = false;
security1.display()
sound4.stop();
//sound5.play();
book.visible = false;
player.visible = false;
playagainButton.visible = false;
cardboard1.visible = false;
cardboard2.visible = false;
cardboard3.visible = false;
cardboard4.visible = false;
cardboard5.visible = false;
cardboard6.visible = false;
cardboard7.visible = false;
cardboard8.visible = false;
cardboard9.visible = false;
cardboard10.visible = false;
cardboard11.visible = false;
cardboard12.visible = false;
cardboard13.visible = false;
cardboard14.visible = false;
cardboard15.visible = false;
cardboard16.visible = false;
cardboard17.visible = false;
cardboard18.visible = false;
cardboard19.visible = false;
cardboard20.visible = false;
cardboard21.visible = false;
cardboard22.visible = false;
cardboard23.visible = false;
cardboard24.visible = false;
cardboard25.visible = false;
cardboard26.visible = false;
cardboard27.visible = false;
cardboard28.visible = false;
cardboard29.visible = false;
cardboard30.visible = false;
cardboard31.visible = false;
cardboard32.visible = false;
cardboard33.visible = false;
cardboard34.visible = false;
cardboard35.visible = false;
cardboard36.visible = false;
cardboard37.visible = false;
cardboard38.visible = false;
cardboard39.visible = false;
cardboard40.visible = false;
cardboard41.visible = false;
cardboard42.visible = false;
cardboard43.visible = false;
cardboard44.visible = false;
cardboard45.visible = false;
cardboard46.visible = false;
cardboard47.visible = false;
cardboard48.visible = false;
cardboard49.visible = false;
cardboard50.visible = false;
cardboard51.visible = false;
cardboard52.visible = false;
cardboard53.visible = false;
cardboard54.visible = false;
cardboard55.visible = false;
cardboard56.visible = false;
cardboard57.visible = false;
cardboard58.visible = false;
cardboard59.visible = false;
cardboard60.visible = false;
cardboard61.visible = false;
cardboard62.visible = false;
cardboard63.visible = false;
cardboard64.visible = false;
cardboard65.visible = false;
cardboard66.visible = false;
cardboard67.visible = false;



}
else if(gameState === gamewin){
sound5.stop();
sound6.play();
background(youwinstoryImg)
textSize(30);
fill("white");
text("You have to reload the page to again play the game. ",150, 150);
playagainButton.visible = true;
if(mousePressedOver(playagainButton)){
gameState = serve;
sound6.stop();

}
}
else if(gameState === gamelost){
background(youlostImg);
}


if(mousePressedOver(homeButton))
{
gameState = serve;
homeButton.visible = false;
playButton.visible = false;
security.hide();
cardboardhide()
}








drawSprites();
console.log(gameState)
}



function play2(){
playButton.visible = false;
book.visible = true;
cardboard1.visible = true;
cardboard2.visible = true;
cardboard3.visible = true;
cardboard4.visible = true;
cardboard5.visible = true;
cardboard6.visible = true;
cardboard7.visible = true;
cardboard8.visible = true;
cardboard9.visible = true;
cardboard10.visible = true;
cardboard11.visible = true;
cardboard12.visible = true;
cardboard13.visible = true;
cardboard14.visible = true;
cardboard15.visible = true;
cardboard16.visible = true;
cardboard17.visible = true;
cardboard18.visible = true;
cardboard19.visible = true;
cardboard20.visible = true;
cardboard21.visible = true;
cardboard22.visible = true;
cardboard23.visible = true;
cardboard24.visible = true;
cardboard25.visible = true;
cardboard26.visible = true;
cardboard27.visible = true;
cardboard28.visible = true;
cardboard29.visible = true;
cardboard30.visible = true;
cardboard31.visible = true;
cardboard32.visible = true;
cardboard33.visible = true;
cardboard34.visible = true;
cardboard35.visible = true;
cardboard36.visible = true;
cardboard37.visible = true;
cardboard38.visible = true;
cardboard39.visible = true;
cardboard40.visible = true;
cardboard41.visible = true;
cardboard42.visible = true;
cardboard43.visible = true;
cardboard44.visible = true;
cardboard45.visible = true;
cardboard46.visible = true;
cardboard47.visible = true;
cardboard48.visible = true;
cardboard49.visible = true;
cardboard50.visible = true;
cardboard51.visible = true;
cardboard52.visible = true;
cardboard53.visible = true;
cardboard54.visible = true;
cardboard55.visible = true;
cardboard56.visible = true;
cardboard57.visible = true;
cardboard58.visible = true;
cardboard59.visible = true;
cardboard60.visible = true;
cardboard61.visible = true;
cardboard62.visible = true;
cardboard63.visible = true;
cardboard64.visible = true;
cardboard65.visible = true;
cardboard66.visible = true;
cardboard67.visible = true;

}



function clues() {
    
fill("white")
textSize(25)
text("I E Z B O M", 30,50)
fill("lightblue")
textSize(20)
text("Hint: It bites you then you are infected !!", 30,70)

fill("white")
textSize(25)
text("M P R E I V A", 450,50)
fill("lightblue")
textSize(20)
text("Hint: It has long and sharp teeth !! ", 450,70)

fill("white")
textSize(25)
text("L E S E K O N T", 30,250)
fill("lightblue")
textSize(20)
text("Hint: It is found in the Science laboratory !!", 30,270)

fill("white")
textSize(25)
text("RDCAALU", 450,250)
fill("lightblue")
textSize(20)
text("Hint: It sucks blood !!", 450,270)

fill("white")
textSize(25)
text("THCIW", 30,450)
fill("lightblue")
textSize(20)
text("Hint: It stays on the banyan tree at night !!", 30,470)

fill("white")
textSize(25)
text("UNN", 450,450)
fill("lightblue")
textSize(20)
text("Hint: A movie was made on this !!", 450,470)


}

function cardboardhide()
{

cardboard1.visible = false;
cardboard2.visible = false;
cardboard3.visible = false;
cardboard4.visible = false;
cardboard5.visible = false;
cardboard6.visible = false;
cardboard7.visible = false;
cardboard8.visible = false;
cardboard9.visible = false;
cardboard10.visible = false;
cardboard11.visible = false;
cardboard12.visible = false;
cardboard13.visible = false;
cardboard14.visible = false;
cardboard15.visible = false;
cardboard16.visible = false;
cardboard17.visible = false;
cardboard18.visible = false;
cardboard19.visible = false;
cardboard20.visible = false;
cardboard21.visible = false;
cardboard22.visible = false;
cardboard23.visible = false;
cardboard24.visible = false;
cardboard25.visible = false;
cardboard26.visible = false;
cardboard27.visible = false;
cardboard28.visible = false;
cardboard29.visible = false;
cardboard30.visible = false;
cardboard31.visible = false;
cardboard32.visible = false;
cardboard33.visible = false;
cardboard34.visible = false;
cardboard35.visible = false;
cardboard36.visible = false;
cardboard37.visible = false;
cardboard38.visible = false;
cardboard39.visible = false;
cardboard40.visible = false;
cardboard41.visible = false;
cardboard42.visible = false;
cardboard43.visible = false;
cardboard44.visible = false;
cardboard45.visible = false;
cardboard46.visible = false;
cardboard47.visible = false;
cardboard48.visible = false;
cardboard49.visible = false;
cardboard50.visible = false;
cardboard51.visible = false;
cardboard52.visible = false;
cardboard53.visible = false;
cardboard54.visible = false;
cardboard55.visible = false;
cardboard56.visible = false;
cardboard57.visible = false;
cardboard58.visible = false;
cardboard59.visible = false;
cardboard60.visible = false;
cardboard61.visible = false;
cardboard62.visible = false;
cardboard63.visible = false;
cardboard64.visible = false;
cardboard65.visible = false;
cardboard66.visible = false;
cardboard67.visible = false;


}




// maths problem
// 4(10+15/5*4-2*2)=72
//89+{6-(-3)[5+6]+25}=153
//50-[20+{30-(20-5)}]=15

// (I want it to be continuously changing the values whenever I restart the game)

//riddles
// I am wrapped but I am not a gift, I am kept neatly in a chamber and archaeologists find me as a great treasure. What am I?
// Answer- Mummy
// The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is it?
// Answer- Coffin
//(Riddles can be same even when I restart the game)
