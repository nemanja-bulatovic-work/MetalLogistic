const search = document.querySelector('.search-icon');
// const form = document.querySelector('.search-form');
const navigation = document.querySelector('.navigation-list');
const burger = document.querySelector('.navigation-burger');
const navigationLinks = document.querySelectorAll('.navigation-list-item');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const input = document.querySelector('.search-input');
const slide1 = document.getElementById('trigger1');
const slide2 = document.getElementById('trigger2');
const intervall = 5000

const fixedHeader = () => {
    window.addEventListener('scroll', () => {
        console.log(slide1.checked)
        if(window.scrollY > 75){
            header.classList.add('fixed-header')
        }
         if(window.scrollY <= 0 ){
            header.classList.remove('fixed-header')
        }
    })
};

const navigationSlide = () => {
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

const autoSlide1 = () => {
    console.log(slide1.checked)
    console.log(slide2.checked)
    if(slide1.checked){
        setTimeout(() => { 
            slide1.checked = false
            slide2.checked = true
            autoSlide2()
        }, intervall)
    }
};

const autoSlide2 = () => {
    if(slide2.checked){
        setTimeout(() => {
            slide2.checked = false
            slide1.checked = true
            autoSlide1();
        }, intervall)
    }
}

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
autoSlide1();
autoSlide2();
// searchSlide();
