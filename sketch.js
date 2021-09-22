var cowboyrun1, cowboyrun2, cowboyrun3, cowboyrun4, cowboyrun5, cowboyrun6, cowboyrun7, cowboyrun8, cowboyrun9;
var cowboygirl1, cowboygirl2, cowboygirl3, cowboygirl4, cowboygirl5, cowboygirl6, cowboygirl7, cowboygirl8;
var cowboyJUMP1, cowboyJUMP2, cowboyJUMP3, cowboyJUMP4, cowboyJUMP5, cowboyJUMP6, cowboyJUMP7, cowboyJUMP8, cowboyJUMP9, cowboyJUMP10;
var cowgirlJUMP1, cowgirlJUMP2, cowgirlJUMP3, cowgirlJUMP4, cowgirlJUMP5, cowgirlJUMP6, cowgirlJUMP7, cowgirlJUMP8, cowgirlJUMP9, cowgirlJUMP10;
var DIEcowgirl1, DIEcowgirl2, DIEcowgirl3, DIEcowgirl4, DIEcowgirl5, DIEcowgirl6, DIEcowgirl7, DIEcowgirl8, DIEcowgirl9, DIEanimationcont;
var DIEcowboy1, DIEcowboy2, DIEcowboy3, DIEcowboy4, DIEcowboy5, DIEcowboy6, DIEcowboy7, DIEcowboy8, DIEcowboy9, DIEcowboy10, DIEanimationcont2;
var IDLEcowgirl1, IDLEcowgirl2, IDLEcowgirl3, IDLEcowgirl4;
var IDLEcowboy1, IDLEcowboy2, IDLEcowboy3, IDLEcowboy4, IDLEcowboy5;
var cowboy, cowgirl, platbackground;
var snake, scorpio, Camel;
var snakeImg, scorpioImg, CamelImg;
var score = 0;
var scoreIMG, score2;
var invisline;
var invispoint, pointGroup;
var stopper;
var over, overIMG;
var PLAY = 1
var END = 0
var none = 2
var GameState = PLAY

function preload(){

  cowboyrun1 = loadImage("COWBOYrun1.png")
  cowboyrun2 = loadImage('COWBOYrun2.png')
  cowboyrun3 = loadImage('COWBOYrun3.png')
  cowboyrun4 = loadImage('COWBOYrun4.png')
  cowboyrun5 = loadImage('COWBOYrun5.png')
  cowboyrun6 = loadImage('COWBOYrun6.png')
  cowboyrun7 = loadImage('COWBOYrun7.png')
  cowboyrun8 = loadImage('COWBOYrun8.png')
  cowboyrun9 = loadImage('COWBOYrun9.png')

  runningAnimationcowboy = loadAnimation(cowboyrun1, cowboyrun2, cowboyrun3, cowboyrun4, cowboyrun5, cowboyrun6, cowboyrun7, cowboyrun8, cowboyrun9);

  cowboygirl1 = loadImage("COWGIRLrun1.png")
  cowboygirl2 =loadImage("COWGIRLrun2.png")
  cowboygirl3 =loadImage("COWGIRLrun3.png")
  cowboygirl4 =loadImage("COWGIRLrun4.png")
  cowboygirl5 =loadImage("COWGIRLrun5.png")
  cowboygirl6 =loadImage("COWGIRLrun6.png")
  cowboygirl7 = loadImage("COWGIRLrun7.png")
  cowboygirl8 =loadImage("COWGIRLrun8.png")

  runningAnimationcowgirl = loadAnimation(cowboygirl1, cowboygirl2, cowboygirl3, cowboygirl4, cowboygirl5, cowboygirl6, cowboygirl7, cowboygirl8);

  cowboyJUMP1 = loadImage('COWBOYjump1.png')
  cowboyJUMP2 = loadImage('COWBOYjump2.png')
  cowboyJUMP3 = loadImage('COWBOYjump3.png')
  cowboyJUMP4 = loadImage('COWBOYjump4.png')
  cowboyJUMP5 = loadImage('COWBOYjump5.png')
  cowboyJUMP6 = loadImage('COWBOYjump6.png')
  cowboyJUMP7 = loadImage('COWBOYjump7.png')
  cowboyJUMP8 = loadImage('COWBOYjump8.png')
  cowboyJUMP9 = loadImage('COWBOYjump9.png')
  cowboyJUMP10 = loadImage('COWBOYjump10.png')

  jumpingAnimationcowboy = loadAnimation(cowboyJUMP10, cowboyJUMP9, cowboyJUMP8, cowboyJUMP7, cowboyJUMP6, cowboyJUMP5, cowboyJUMP4, cowboyJUMP3, cowboyJUMP2, cowboyJUMP1)

  cowgirlJUMP1 = loadImage('COWGIRLjump1.png')
  cowgirlJUMP2 = loadImage('COWGIRLjump2.png')
  cowgirlJUMP3 = loadImage('COWGIRLjump3.png')
  cowgirlJUMP4 = loadImage('COWGIRLjump4.png')
  cowgirlJUMP5 = loadImage('COWGIRLjump5.png')
  cowgirlJUMP6 = loadImage('COWGIRLjump6.png')
  cowgirlJUMP7 = loadImage('COWGIRLjump7.png')
  cowgirlJUMP8 = loadImage('COWGIRLjump8.png')
  cowgirlJUMP9 = loadImage('COWGIRLjump9.png')
  cowgirlJUMP10 = loadImage('COWGIRLjump10.png')

  jumpingAnimationcowgirl = loadAnimation(cowgirlJUMP10, cowgirlJUMP9, cowgirlJUMP8, cowgirlJUMP7, cowgirlJUMP6, cowgirlJUMP5, cowgirlJUMP4, cowgirlJUMP3, cowgirlJUMP2, cowgirlJUMP1)

  DIEcowboy1 = loadImage("COWBOYdead1.png")
  DIEcowboy2 = loadImage("COWBOYdead2.png")
  DIEcowboy3 = loadImage("COWBOYdead3.png")
  DIEcowboy4 = loadImage("COWBOYdead4.png")
  DIEcowboy5 = loadImage("COWBOYdead5.png")
  DIEcowboy6 = loadImage("COWBOYdead6.png")
  DIEcowboy7 = loadImage("COWBOYdead7.png")
  DIEcowboy8 = loadImage("COWBOYdead8.png")
  DIEcowboy9 = loadImage("COWBOYdead9.png")
  DIEcowboy10 = loadImage("COWBOYdead10.png")

  DieAnimationcowboy = loadAnimation(DIEcowboy1, DIEcowboy2, DIEcowboy3, DIEcowboy4, DIEcowboy5, DIEcowboy6, DIEcowboy7, DIEcowboy8, DIEcowboy9, DIEcowboy10)
  DIEanimationcont = loadAnimation(DIEcowboy10, DIEcowboy10, DIEcowboy10, DIEcowboy10)

  DIEcowgirl1 = loadImage("COWGIRLdead1.png")
  DIEcowgirl2 = loadImage("COWGIRLdead2.png")
  DIEcowgirl3 = loadImage("COWGIRLdead3.png")
  DIEcowgirl4 = loadImage("COWGIRLdead4.png")
  DIEcowgirl5 = loadImage("COWGIRLdead5.png")
  DIEcowgirl6 = loadImage("COWGIRLdead6.png")
  DIEcowgirl7 = loadImage("COWGIRLdead7.png")
  DIEcowgirl8 = loadImage("COWGIRLdead8.png")
  DIEcowgirl9 = loadImage("COWGIRLdead9.png")

  DieAnimationcowgirl = loadAnimation(DIEcowgirl1, DIEcowgirl2, DIEcowgirl3, DIEcowgirl4, DIEcowgirl5, DIEcowgirl6, DIEcowgirl7, DIEcowgirl8, DIEcowgirl9)
  DIEanimationcont2 = loadAnimation(DIEcowgirl9, DIEcowgirl9, DIEcowgirl9, DIEcowgirl9)

  IDLEcowboy1 = loadImage("COWBOYidle1.png")
  IDLEcowboy2 = loadImage("COWBOYidle2.png")
  IDLEcowboy3 = loadImage("COWBOYidle3.png")
  IDLEcowboy4 = loadImage("COWBOYidle4.png")
  IDLEcowboy5 = loadImage("COWBOYidle5.png")

  cowboyStill = loadAnimation(IDLEcowboy1, IDLEcowboy2, IDLEcowboy3, IDLEcowboy4, IDLEcowboy5)

  IDLEcowgirl1 = loadImage("COWGIRLidle1.png")
  IDLEcowgirl2 = loadImage("COWGIRLidle2.png")
  IDLEcowgirl3 = loadImage("COWGIRLidle3.png")
  IDLEcowgirl4 = loadImage("COWGIRLidle4.png")

  cowgirlStill = loadAnimation(IDLEcowgirl1, IDLEcowgirl2, IDLEcowgirl3, IDLEcowgirl4)
  
  gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertBackground.png');
  platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/desertPlatform.png');

  scorpioImg = loadImage("Scorpio (2).png")
  snakeImg = loadImage("Snake.png")
  CamelImg = loadImage("Camel.png")

  scoreIMG = loadImage("Score.png")

  overIMG = loadImage("over.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight)
  platbackground = createSprite(width/2,height+200,width,2);
  platbackground.addImage(platformBackground);
  platbackground.scale = 2;
  platbackground.velocityX = 0;

  cowgirl = createSprite(100,height - 350,100,100);
  cowgirl.addAnimation("cow Still", cowgirlStill);
  cowgirl.addAnimation("Run Cowboy",runningAnimationcowgirl);
  cowgirl.addAnimation("jumpcow2",jumpingAnimationcowgirl)
  cowgirl.addAnimation("diegirl", DieAnimationcowgirl)
  // cowgirl.addAnimation("die",DIEanimationcont2)
  cowgirl.scale = 0.3;
  cowgirl.setCollider('rectangle', 0, 0, 30, 400)


  cowboy = createSprite(180,height - 350,100,100);
  cowboy.addAnimation("cow Still2", cowboyStill);
  cowboy.addAnimation("Run Cowboy2",runningAnimationcowboy);
  cowboy.addAnimation("jumpcow",jumpingAnimationcowboy)
  cowboy.addAnimation("dieboy",DieAnimationcowboy)
  // cowboy.addAnimation("die1", DIEanimationcont)
  cowboy.scale = 0.3;
  cowboy.setCollider('rectangle', 0, 0, 30, 400)


  invisline = createSprite(width/2,height-130, 2000, 5)
  invisline.visible = false

  score2 = createSprite(width/2, height - 900)
  score2.addImage(scoreIMG)
  score2.scale = 0.4

  stopper = createSprite(width-200, height/2, 10, 1000)
  stopper.visible = false

  over = createSprite(width/2, height/2)
  over.addImage(overIMG)
  over.visible = false

  obstacleGroup = new Group()
  obstacleGroup1 = new Group()
  obstacleGroup2 = new Group()
  pointGroup = new Group()

}

function draw(){

  background(gameBackground);

  if(GameState == PLAY){
  if(keyWentDown("RIGHT_ARROW")){
    cowgirl.changeAnimation("Run Cowboy");
    cowboy.changeAnimation("Run Cowboy2");
    cowgirl.velocityX = 3;
    cowboy.velocityX = 3;
  }
  if(keyWentUp("RIGHT_ARROW")){
    cowgirl.changeAnimation("cow Still");
    cowboy.changeAnimation("cow Still2");
    cowgirl.velocityX = 0;
    cowboy.velocityX = 0;
    platbackground.velocityX = 0;

  }
  if(cowboy.x >= 700){
    platbackground.velocityX = -3;
    cowgirl.x = cowgirl.x + 0;
    cowboy.x = cowboy.x + 0;
  }
  if(platbackground.x <= 800){
    platbackground.x = width/2
  }
  if(keyDown("SPACE") && cowboy.y >= 740){
    cowboy.velocityY = -21
    cowgirl.velocityY = -21
    cowboy.velocityX = 4
    cowgirl.velocityX = 4
    cowboy.changeAnimation('jumpcow')
    cowgirl.changeAnimation('jumpcow2')
  }
  if(obstacleGroup.isTouching(cowboy) || obstacleGroup2.isTouching(cowboy) || obstacleGroup1.isTouching(cowboy)){
    cowboy.changeAnimation('dieboy',DieAnimationcowboy)
    cowgirl.changeAnimation('diegirl',DieAnimationcowgirl)
    GameState = END
  }
  if(pointGroup.isTouching(cowboy)){
    fill("Brown")
    score = score + 1
    pointGroup.destroyEach();
  }
  if(stopper.isTouching(cowboy)){
    cowboy.x = 180
    cowgirl.x = 100
  }
  textSize(70)
  text(" - " + score, width-850, height - 880)
  cowboy.velocityY = cowboy.velocityY + 0.8
  cowgirl.velocityY = cowgirl.velocityY + 0.8
  SpawnObstacles();
  SpawnPoints();
}
  if(GameState == END){

    over.visible = true

    cowboy.velocityX = 0
    cowgirl.velocityX = 0
    cowboy.velocityY = 0
    cowgirl.velocityY = 0
    platbackground.velocityX = 0
    
    if(obstacleGroup.isTouching(cowboy) || obstacleGroup2.isTouching(cowboy) || obstacleGroup1.isTouching(cowboy)){
      cowboy.pause()
      cowgirl.pause()
    }

    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup1.setLifetimeEach(-1);
    obstacleGroup2.setLifetimeEach(-1);

    obstacleGroup.setVelocityXEach(0);
    obstacleGroup1.setVelocityXEach(0);
    obstacleGroup2.setVelocityXEach(0);

    
  }
  
  cowboy.collide(invisline)
  cowgirl.collide(invisline)

  drawSprites();
}

function SpawnObstacles(){
  if (frameCount % 170 === 0){
    var obstacle1 = createSprite(width+10,height - 180, 1,10);
    var obstacle2 = createSprite(width+10,height - 135, 1,10);
    var obstacle3 = createSprite(width+10,height - 220, 1,10);

    obstacle3.scale = 0.1
    obstacle2.scale = 0.2
    obstacle1.scale = 0.15

    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle1.addImage(snakeImg);
               break;
       case 2: obstacle3.addImage(CamelImg);
               break;
       case 3: obstacle2.addImage(scorpioImg);
               break;
       default: break;
     }

     obstacle1.velocityX = -3
     obstacle2.velocityX = -3
     obstacle3.velocityX = -3

     obstacle1.lifetime = 1000
     obstacle2.lifetime = 1000
     obstacle3.lifetime = 1000

     obstacle1.setCollider('rectangle', 0, 0, 500, 1000)
     obstacle2.setCollider('rectangle', 0, 0, 500, 500)
     obstacle3.setCollider('rectangle', 0, 0, 500, 1000)
     
     obstacleGroup.add(obstacle1)
     obstacleGroup1.add(obstacle2)
     obstacleGroup2.add(obstacle3)
    
  }
}

function SpawnPoints(){
  if (frameCount % 60 === 0){
    invispoint = createSprite(width-100, height - 170)  
    invispoint.velocityX = -3    
    invispoint.lifetime = 2000
    invispoint.visible = false
    pointGroup.add(invispoint)
  }
}
