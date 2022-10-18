//Js para hacer que el menu sea responsive

btn= document.getElementById('btn-menu');
menulink= document.getElementById('menulink');
menuback= document.getElementById('menuback');

btn.addEventListener('click', mostrar_menu);
menuback.addEventListener('click', ocultar_menu);

function mostrar_menu() {
    menulink.style.right = '0';
    menuback.style.display = 'block';
}

function ocultar_menu() {
    menulink.style.right = '-1500px';
    menuback.style.display = 'none';
}


//Librería Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    //por defecto está en horizontal
    //direction: 'vertical',
    loop: true,
    //velocidad en la que cambia cada slider
    speed:700,
    effect: 'slide',
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay:{
        delay: 4000
    },

    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200:{
        slidesPerView: 4,
        spaceBetween: 40
    }
  }
});



//Librería ScrollReveal
var slideUp = {
  distance: '60px',
  origin: 'bottom',
  opacity: null,
  delay: 600,
  reset:true,
};

ScrollReveal().reveal('.slide-up', slideUp);

