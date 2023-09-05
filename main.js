import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper('.swiper', {
    spaceBetween: 24,
    slidesPerView: 3,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: true,
  });


