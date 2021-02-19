document.getElementById("body").onscroll =  myFunction = () => {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("main1");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue =  205 - scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }