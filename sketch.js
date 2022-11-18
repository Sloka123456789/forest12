let b1
let b2
let b3
let b4
let b5
let i1

let x1=0
let x2=400
let x3=300

let skeleton_x=40
let skeleton_y=300
  



function preload(){
  
  b1 = loadImage("plx-1.png")
  b2 = loadImage("plx-2.png")
  b3 = loadImage("plx-3.png")
  b4 = loadImage("plx-4.png")
  b5 = loadImage("plx-5.png")
  i1 = loadImage("run.gif")
  enemy = loadImage("skeleton Walk.gif")
}


function setup() {
  createCanvas(400,400);
  
}

function draw() {
  image(b1,x1,0,400,400)
  image(b2,x1,0,400,400)
  image(b3,x1,0,400,400)
  image(b4,x1,400,400)
  image(b5,x1,0,400,400)
  
  
  image(b1,x2,0,400,400)
  image(b2,x2,0,400,400)
  image(b3,x2,0,400,400)
  image(b4,x2,0,400,400)
  image(b5,x2,0,400,400)
  
  
  image(enemy,skeleton_x,skeleton_y,40,70)
  
  
  x1 = x1-1
  x2 = x2-1
  

  
  if (x1<-400){
    x1=401
  }
  
  
  if(x2<-400){
    x2=401
  }
  
 
  image(i1,20,x3,30,60)
 
  if (keyIsPressed==true)
 
 {
   if (keyCode==32)
     {
   x3=x3-20
     }   
 
 }
  
    if (x3!=310)
      {
        x3 = x3+10
      }
  
   if (x3 > 310)
   {
     x3= x3 + 1.1
   }
  
  
  
}