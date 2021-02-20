var slide1 = document.getElementById('trigger1');
var slide2 = document.getElementById('trigger2');
var intervall = 5000

function autoSlide1() {
    if(slide1.checked){
        setTimeout(() => { 
            slide1.checked = false
            slide2.checked = true
            autoSlide2()
        }, intervall)
    }
};

function autoSlide2() {
    if(slide2.checked){
        setTimeout(() => {
            slide2.checked = false
            slide1.checked = true
            autoSlide1();
        }, intervall)
    }
}

autoSlide1();
autoSlide2();