 var canvas = document.querySelector('canvas');
 canvas.width= window.innerWidth;
 canvas.height= (window.innerHeight);
 var c= canvas.getContext('2d');
 var x=0;
 var y=  (window.innerHeight)/5;
 var ch=5;
 var no = 1;
 var dif=20;
function ani(){
  var limet= document.getElementById("num").value;
	if(no<=limet){
      window.requestAnimationFrame(ani);
      c.font= "30px Arial";
      if ((x-100)%60==0){c.fillText(no,(x+dif),(y*9/10));
         c.rect((x),y,60,60);
	       c.stroke();
         no+=1;
      }
	  if(no>9) dif=15;
  x+=4;
}
}
var x=0;
var y=(window.innerHeight)/5;
function ani2(){
  var daa= document.getElementById("data").value;
      window.requestAnimationFrame(ani2);
      c.font= "30px Arial";
      if ((x-100)%60==0){c.fillText(daa,(x+dif),(y*8/10));
	       c.stroke();
      }
    x+=4;
}
ani();
