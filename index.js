const search = document.querySelector('.search-icon');
const form = document.querySelector('.search-form');
const navigation = document.querySelector('.navigation-list');
const burger = document.querySelector('.navigation-burger');
const navigationLinks = document.querySelectorAll('.navigation-list-item');


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

navigationSlide()
searchSlide()