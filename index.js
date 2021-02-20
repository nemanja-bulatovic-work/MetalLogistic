var search = document.querySelector('.search-icon');
// var form = document.querySelector('.search-form');
var navigation = document.querySelector('.navigation-list');
var burger = document.querySelector('.navigation-burger');
var navigationLinks = document.querySelectorAll('.navigation-list-item');
var hero = document.querySelector('.hero');
var header = document.querySelector('.header');
var input = document.querySelector('.search-input');

function fixedHeader() {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 75){
            header.classList.add('fixed-header')
        }
         if(window.scrollY <= 0 ){
            header.classList.remove('fixed-header')
        }
    })
};

function navigationSlide() {
    burger.addEventListener('click', () => {
        document.getElementsByTagName('body')[0].classList.toggle('hidden')
        navigation.classList.toggle('navigation-list-active');
        burger.classList.toggle('toggle');
        // if(form.classList.contains('search-form-active')){
        //     form.classList.remove('search-form-active');
        // }
        navigationLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation= ``
            }else{
                link.style.animation= `navigationLinkFade 0.3s forwards ${index / 7 + 0.2}s`
            }
        });
    });
};


// const searchSlide = () => {
//     search.addEventListener('click', () => {
//         form.classList.toggle('search-form-active');
//         if(navigation.classList.contains('navigation-list-active')){
//             navigation.classList.remove('navigation-list-active');
//             burger.classList.remove('toggle');
//             navigationLinks.forEach((link, index) => {
//                 if(link.style.animation){
//                     link.style.animation= ``
//                 }else{
//                     link.style.animation= `navigationLinkFade 0.3s forwards ${index / 7 + 0.2}s`
//                 }
//             });
//         }
//     });
// }




fixedHeader();
navigationSlide();
// searchSlide();
