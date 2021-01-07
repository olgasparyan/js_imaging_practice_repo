var img=null;
var output=null;

//function that allows to upload an image
function upload(){
  var cc1=document.getElementById("c1");
  var
  fileinput=document.getElementById("finput");
 img = new SimpleImage(fileinput);
  img.drawTo(cc1);
}

//function that resets the canvas to the initial image
function resetimage(){
  upload();
}


//function that allows to make a greyscale of an image and upload it to a new canvas 
function makeGrey(){
  for (var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);    
  }
  var cc1=document.getElementById("c1");
  img.drawTo(cc1);
}

//function that creates a red filter
function makeRed(){
  for (var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }   
  }
  var cc1=document.getElementById("c1");
  img.drawTo(cc1);
}

//function that creates a rainbow filter
function makeRainbow(){
  var w=img.getWidth();
  for (var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    //red condition
    if (pixel.getX()<=w/7){
      if (avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }   
    }
    //orange condition
    if (pixel.getX()>w/7 && pixel.getX()<=2/7*w){
      if (avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
     //yellow condition
    if (pixel.getX()>2/7*w && pixel.getX()<=3/7*w){
      if (avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }     
    }  
     //green condition
    if (pixel.getX()>3/7*w && pixel.getX()<=4/7*w){
      if (avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }     
    } 
     //blue condition
    if (pixel.getX()>4/7*w && pixel.getX()<=5/7*w){
      if (avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }     
    }
     //indigo condition
    if (pixel.getX()>5/7*w && pixel.getX()<=6/7*w){
      if (avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }     
    }   
     //violet condition
    if (pixel.getX()>6/7*w && pixel.getX()<=w){
      if (avg<128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }else{
        pixel.setRed(0.4*avg-153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg-153);
      }     
    }       
}
    var cc1=document.getElementById("c1");
  img.drawTo(cc1);
}


//function that makes a blur image
function makeBlur(){
  output = new SimpleImage(img.getWidth(), img.getHeight());
  var w=img.getWidth();
  var h=img.getHeight();
  for (var pixel of img.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    //gen a random var from 0 to 1
    var rndm = Math.random();
    if (rndm<0.5){
     output.setPixel(x,y,pixel); 
  }else{
      var rndm_x=Math.random() * 20-10;
    var rndm_y=Math.random()*20 -10;
    if ((x+rndm_x)<0 || (x+rndm_x)>w || (y+rndm_y)<0 || (y+rndm_y)>h){
      output.setPixel(x,y,pixel);
    }else{
     var nearPixel=img.getPixel(x+rndm_x, y+rndm_y);
      output.setPixel(x,y, nearPixel);
    }
  }
  }
  var cc1=document.getElementById("c1");
  output.drawTo(cc1);  
  
}


function makeBri(){
  var cc1=document.getElementById("c1");
  var brinput=document.getElementById("brightness").value;
  cc1.style.filter ="brightness(" + brinput + "%)";
  }


function makeContrast(){
  var cc1=document.getElementById("c1");
  var coninput=document.getElementById("contrast").value;
  cc1.style.filter ="contrast(" + coninput + "%)";
  }

function makeInvert(){
  var cc1=document.getElementById("c1");
  var invinput=document.getElementById("invert").value;
  cc1.style.filter ="invert(" + invinput + "%)";
  }