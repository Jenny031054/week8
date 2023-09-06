import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const commentSwiper = new Swiper('.comment-swiper', {
    spaceBetween: 24,
    slidesPerView: 3,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: true,
  });

  const productSwiper = new Swiper('.product-swiper', {
   
      autoplay: {
        delay: 5000,
      },
       breakpoints: {
         768: {
           autoplay: {
             enabled: false,
           }
         }
       },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });


 


