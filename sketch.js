var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  orangeleafImg=loadImage("orangeLeaf.png")
  redleafImg=loadImage("redImage.png")
  greenleafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple=createSprite(180,41)
apple.addImage(appleImg)
apple.scale=0.05
apple.velocityY=5

leaf1=createSprite(67,15)
leaf1.addImage(orangeleafImg)
leaf1.scale=0.080
leaf1.velocityY=3

leaf2=createSprite(333,26)
leaf2.addImage(redleafImg)
leaf2.scale=0.060
leaf2.velocityY=3.3

leaf3=createSprite(265,18)
leaf3.addImage(greenleafImg)
leaf3.scale=0.050
leaf3.velocityY=4



rand=Math.round(random(1,400))
  
  console.log(rand)

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();


  if(keyDown("right")){
    rabbit.x = rabbit.x + 5;
  }
  if(keyDown("left")){
    rabbit.x = rabbit.x - 5;
  }
   


  if(frameCount%60 === 0){


apple.y=Math.round(random(10,60))


  }


  if(frameCount%60 === 0){


    leaf2.y=Math.round(random(10,60))
    
    
      }

      if(frameCount%60 === 0){
leaf1.y=Math.round(random(10,60))
   }


 if(frameCount%60 === 0){
leaf3.y=Math.round(random(10,60))
     }









  
  
  }







