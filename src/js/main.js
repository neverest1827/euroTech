import * as functions from "./modules/functions.js";



functions.isWebp()

const width = window.screen.availWidth;
if (width<=850){
    functions.menuPress(document.querySelector('.nav__btn'))
}

functions.scrolTo()

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});





