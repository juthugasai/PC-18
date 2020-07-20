//Global Variables
var monkey,monkey_running,obstacle_img,obstaclesGroup,bananaGroup,ground,ground_img,banana,banana_img,over,gameover_img,restart,img;
var back,back_Img;
var Score=0

function preload(){
  
  
  ground_img=loadImage("ground.jpg");
  back_Img=loadImage("jungle.jpg")
 
  
   monkey_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png" ,"Monkey_09.png","Monkey_10.png");
  
  banana_img=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
  gameover_img=loadImage("gameOver.png")
  img=loadImage("restart.png")
 
  
  
}


function setup() {
  createCanvas(600,600);
  
  
  
  back=createSprite(300,50,600,600);
  back.addImage("back",back_Img)
  //if(back.x>0){
    //back.x =back.width/2;
  back.velocityX=-4;
  //}
  back.scale=1.2;
  
 
  //if(back.x<0){
   //back.x=back.width/2;
    
   // back.velocityX=-2;
  //}
 
  
    ground = createSprite(200,600,30,10);
  ground.addImage("ground",ground_img);
  //ground.x = ground.width /2;
  ground.velocityX=-2
  ground.scale=0.5;
  ground.visible=false;
  
  monkey=createSprite(100,580,20,50);
monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  over=createSprite(160,350);
  over.addImage(gameover_img);
  over.scale=0.5;
  over.visible=false;
  
  restart=createSprite(160,400);
  restart.addImage(img);
  restart.scale=0.5;
 restart.visible=false;
  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
  stroke("White");
  textSize(20);
  fill("white");
  
    

}


function draw(){
 background(255); 
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    Score=Score+2
    
  }
    //back.x =back.width/2;
  //back.velocity=-3
  

   monkey.collide(ground)
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
   }
  if(monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach();
       Score=Score+1; 
      
      if(bananaGroup.isTouching(monkey)){
     bananaGroup.destroyEach();
 
      Score=Score+1   
      }
     }
  if(monkey.isTouching(obstaclesGroup)){
        monkey.velocity=0; 
          Score=0
    over.visible=true
    restart.visible=true

  }
  
  bananaGroup.visible=true;
  
  if(keyDown("space")&&monkey.y>=264.15){
     monkey.velocityY=-16; 
  }
  
  //console.log(monkey.y)
  
      back.velocityX=-4;
  if(back.x < 0){
    back.x = back.width/2;
  }
  
    monkey.velocityY = monkey.velocityY + 0.8

  
  
  
      ground.velocityX=-4;
  if(ground.x < 0){
    ground.x = back.width/2;
  }
  
  
  
  drawSprites();
  
  text("Score:"+ Score,500,50);
  banana();
  Obstacles();
}


 function Obstacles(){
   
   if(frameCount % 60  === 0) {
    var stone= createSprite(600,320,10,40);
     stone.x = random(600,600);
    stone.velocityX = -5; 
   
   
   
    
    //generate obstacles
    stone.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.1;
    //stone.lifetime = 70;
   
   obstaclesGroup.add(stone);     
   }
 }

function banana(){
   if (frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = random(250,300);
    banana.x = random(600,600);

    banana.addImage(banana_img);
    banana.scale = 0.05;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 134;

     
      bananaGroup.add(banana);
   }



  
}


