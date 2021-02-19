(function() {
    var stickersLeft;
    var stickersRight;
    var windowHeight;
    var blocks;
  
    function init() {
      stickersLeft = document.querySelectorAll(".hidden-sticker-left");
      stickersRight = document.querySelectorAll(".hidden-sticker-right");
      text = document.querySelectorAll(".hidden-text");
      blocks = document.querySelectorAll(".hidden-heading");
      windowHeight = window.innerHeight;
      console.log('radiiim')
    }
  
    function checkPositionStickerLeft() {
      for (var i = 0; i < stickersLeft.length; i++) {
        var element = stickersLeft[i];
        var positionFromTop = stickersLeft[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add("fade-in-sticker-left");
          element.classList.remove("hidden-sticker-left");
        }
      }
    }
  
    function checkPositionStickerRight() {
      for (var i = 0; i < stickersRight.length; i++) {
        var element = stickersRight[i];
        var positionFromTop = stickersRight[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add("fade-in-sticker-right");
          element.classList.remove("hidden-sticker-right");
        }
      }
    }
  
    function checkPositionText() {
      for (var i = 0; i < text.length; i++) {
        var element = text[i];
        var positionFromTop = text[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add("fade-in-text");
          element.classList.remove("hidden-text");
        }
      }
    }
  
  
    function checkPositionBlocks() {
      for (var i = 0; i < blocks.length; i++) {
        var element = blocks[i];
        var positionFromTop = blocks[i].getBoundingClientRect().top;
        var list = Array.from(blocks)
        if (positionFromTop - windowHeight <= 0) {
          if(list[i].classList.contains("right")){
            element.classList.add("fade-in-sticker-right");
            element.classList.remove("hidden-heading");
          }else if(list[i].classList.contains("left")){
            element.classList.add("fade-in-sticker-left");
            element.classList.remove("hidden-heading");
          }else if(list[i].classList.contains("up")){
            element.classList.add("fade-in-up");
            element.classList.remove("hidden-heading");
          }else if(list[i].classList.contains("down")){
            element.classList.add("fade-in-text");
            element.classList.remove("hidden-heading");
          }
        }
      }
    }
  
    function initAnimation() {
      checkPositionStickerLeft();
      checkPositionStickerRight();
      checkPositionText();
      checkPositionBlocks();
    }
  
    window.addEventListener("scroll", initAnimation);
    window.addEventListener("resize", init);
  
    init();
  })();