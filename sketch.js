var monkey,ground,invisibleGround,monkeyImage,BananasGroup,StonesGroup;
var BananaImage,StoneImage,BG,jungle;
//score
var count = 0;
function preload(){
 monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  BananaImage=loadImage("banana.png");
  StoneImage=loadImage("stone.png");
  BG=loadImage("jungle.jpg");
}
function setup() {
  createCanvas(400, 400);
  //create a monkey sprite
  monkey = createSprite(200,320,20,50);
  monkey.addAnimation("monkey",monkeyImage);

  //set collision radius for the monkey
  monkey.setCollider("circle",0,0,30);

  //scale and position the monkey
  monkey.scale = 0.2;
  monkey.x = 50;

  //create a ground sprite
  ground = createSprite(200,380,800,15);
  ground.x = ground.width /2;

  //invisible Ground to support monkey
  invisibleGround = createSprite(200,325,400,5);
  invisibleGround.visible = false;

  //create Stone and Banana Groups
  StonesGroup = new Group();
  BananasGroup = new Group();

  //set text
  textSize(18);
  textFont("Georgia");
}




function draw() {
  //set background to white
  background("white");
  //display score
  text("Score: "+ count, 250, 100);

    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space")){
      monkey.velocityY = -12 ;
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    //spawn the Bananas
    spawnBananas();
  
    //spawn Stones
    spawnStones();
  if(monkey.isTouching(BananasGroup)){
    BananasGroup.destroyEach();
    count++;
  }
  //console.log(monkey.y);
  
  //stop monkey from falling down
  monkey.collide(invisibleGround);
  
  drawSprites();
}

function spawnStones() {
  if(frameCount % 200 === 0) {
    var Stone = createSprite(400,365,10,40);
    Stone.velocityX = -4;
  
    Stone.addImage(StoneImage);
    
    //assign scale and lifetime to the Stone           
    Stone.scale = 0.2;
    Stone.lifetime = 120;
    //add each Stone to the group
    StonesGroup.add(Stone);
  }
}

function spawnBananas() {
  //write code here to spawn the Bananas
  if (frameCount % 100 === 0) {
    var Banana = createSprite(400,320,40,10);
    Banana.y = random(80,280);
    Banana.addImage(BananaImage);
    Banana.scale = 0.05;
    Banana.velocityX = -3;
    
     //assign lifetime to the variable
    Banana.lifetime = 134;
    
    
    //add each Banana to the group
    BananasGroup.add(Banana);
  }
  
}
