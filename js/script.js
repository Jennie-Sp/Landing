//START   ---       HEADER BACKGROUND
window.onscroll = function () {
    let headerBackground = document.querySelector('.header-menu');
    if (window.pageYOffset >= 50) {
        headerBackground.classList.add('background-black');
    }
    if (window.pageYOffset === 0) {
        headerBackground.classList.remove('background-black');
    }
}
//START   ---       OWL CAROUSEL1
$(document).ready(function(){
    $("#slider-main-1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700
    });
});

//START   ---       OWL CAROUSEL2
$(document).ready(function(){
    $("#slider-main-2").owlCarousel({
        center: true,
        items: 3,
        margin: 20,
        loop: true,
        dots: true,
        smartSpeed: 700,
        slideBy: 1,
        nav: true,
        navText : ['Назад','Вперед']
    });
});

//START   ---       OWL CAROUSEL reviews
$(document).ready(function(){
    $("#reviews").owlCarousel({
        items: 1,
        autoplay: true,
        dots: true,
        smartSpeed: 2000,
        autoplayTimeout: 8000
    });
});

//START   ---       FORMS-AUTHORIZATION
let authorizationButton = document.querySelector('.header-button-authorization');
let popupAuthorization = document.querySelector('#authorization');
let authorizationClose = popupAuthorization.querySelector('.popup-authorization-close');

function addClassActive () {
    popupAuthorization.classList.add('active');
}
authorizationButton.onclick = function () {
    addClassActive();
};
authorizationClose.onclick = function () {
    popupAuthorization.classList.remove('active');
    popupAuthorizationHeight.style.height = 360 + 'px';
    popupAuthorizationForm.removeChild(inputNew);
};
//START   ---       FORMS-CHECK-IN
let popupAuthorizationForm = popupAuthorization.querySelector('#popup-authorization-form');
let checkInButton = document.querySelector('.header-button-check-in');
let inputNew = document.createElement('input');
let inputSub = popupAuthorization.querySelector('input[name=submit]');
let  popupAuthorizationHeight = document.querySelector('.popup-authorization');


checkInButton.onclick = function () {
    popupAuthorizationHeight.style.height = 400 + 'px';
    inputNew.type = 'password';
    inputNew.name = 'password-2';
    inputNew.placeholder = 'Retype password';
    inputNew.setAttribute('required', '');
    popupAuthorizationForm.insertBefore(inputNew, inputSub);
    addClassActive();

}











