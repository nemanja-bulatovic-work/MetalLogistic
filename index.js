const search = document.querySelector('.search-icon');
const form = document.querySelector('.search-form');
const navigation = document.querySelector('.navigation-list');
const burger = document.querySelector('.navigation-burger');
const navigationLinks = document.querySelectorAll('.navigation-list-item');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

const fixedHeader = () => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 75){
            header.classList.add('fixed-header')
        }
         if(window.scrollY <= 0 ){
            header.classList.remove('fixed-header')
        }
    })
}

const navigationSlide = () => {
    burger.addEventListener('click', () => {
        document.getElementsByTagName('body')[0].classList.toggle('hidden')
        navigation.classList.toggle('navigation-list-active');
        burger.classList.toggle('toggle');
        if(form.classList.contains('search-form-active')){
            form.classList.remove('search-form-active');
        }
        navigationLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation= ``
            }else{
                link.style.animation= `navigationLinkFade 0.3s forwards ${index / 7 + 0.2}s`
            }
        });
    });
}

const searchSlide = () => {
    search.addEventListener('click', () => {
        form.classList.toggle('search-form-active');
        if(navigation.classList.contains('navigation-list-active')){
            navigation.classList.remove('navigation-list-active');
            burger.classList.remove('toggle');
            navigationLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation= ``
                }else{
                    link.style.animation= `navigationLinkFade 0.3s forwards ${index / 7 + 0.2}s`
                }
            });
        }
    });
}

document.getElementById("body").onscroll =  myFunction = () => {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("main1");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }

fixedHeader();
navigationSlide();
searchSlide();