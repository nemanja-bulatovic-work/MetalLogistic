document.getElementById("body").onscroll =  myFunction = () => {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("main1");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue ;
  if(window.matchMedia("(max-width: 768px)").matches){
      yvalue =  300 - scrolltotop * 0.4;
    }else{
      yvalue =  100 - scrolltotop * factor;
    }
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }