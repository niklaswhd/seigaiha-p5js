let w =800
let h =800
let fr=60

function setup() {

 createCanvas(w, h)
    frameRate(fr)
}

function draw() {
    background(255)
  strokeWeight(2);
 stroke (226, 230, 213)
fill (98, 50, 168);
 
let x=-20
let y=0
let r=20  

     
while (x<=w){
    
    ellipse(x,y,2*r,2*r)
    ellipse(x,y,r+r/2,r+r/2)
    ellipse(x,y,r,r)
    ellipse(x,y,r/2,r/2)
    
    ellipse(x+20,y+10,2*r,2*r)
    ellipse(x+20,y+10,r+r/2,r+r/2)
    ellipse(x+20,y+10,r,r)
    ellipse(x+20,y+10,r/2,r/2)
    
    ellipse(x-20,y+10,2*r,2*r)
    ellipse(x-20,y+10,r+r/2,r+r/2)
    ellipse(x-20,y+10,r,r)
    ellipse(x-20,y+10,r/2,r/2)
    
    ellipse(x,y+20,2*r,2*r)
    ellipse(x,y+20,r+r/2,r+r/2)
    ellipse(x,y+20,r,r)
    ellipse(x,y+20,r/2,r/2);
    x+=2*r
    
    if (x>=w){
        x=20
        y+=r;
        
        if (y>h){
            x=1700
        }
    }

    

}

}

    
    


 

