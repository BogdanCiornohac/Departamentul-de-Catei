var poza= 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  poza++;
  if (poza > x.length) {poza = 1}    
  x[poza-1].style.display = "block";  
  setTimeout(slideShow, 2500);   
}

function link1(){
  window.open("https://www.facebook.com/bogdan.ciornohac.7");
}

function link2(){
  window.open("https://www.instagram.com/bogdan.ciornohac/");
}

function link3(){
  window.open("https://www.linkedin.com/in/bogdan-ciornohac-58a6b0247/");
}