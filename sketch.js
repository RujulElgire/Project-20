

function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    bgImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    
    catImg3 = loadAnimation("images/cat4.png")
    
}

function setup(){
    createCanvas(1000,655);
    //create tom and jerry sprites here
    bg = createSprite(500,350,10,10);
    bg.addImage(bgImg)
    tom = createSprite(800,550,10,10);
    
    tom.addImage(catImg)
    tom.scale = 0.1;
    mouse = createSprite(150,550,10,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;
}

function draw() {

    background("blue");
    //Write condition here to evalute if tom and jerry collide
    tom.addAnimation("catImgLast",catImg3)
   keyPresse();
    drawSprites();
}


function keyPresse(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -2;
        tom.addAnimation("tomRunning",catImg2)
        tom.changeAnimation("tomRunning")
        mouse.addAnimation("mouseRunning",mouseImg2)
        mouse.changeAnimation("mouseRunning")
    }
    if(tom.x - mouse.x < (tom.width - mouse.width)/2){
        tom.velocityX = 0;
        
        tom.changeAnimation("catImglast")
    }
  }
