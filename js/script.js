// Swiper slider
new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },

  // Slides effect
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },
});

// const swiperGallery = new Swiper('.gallery-container ', {
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// Slick slider
$(document).ready(function () {
  $('.gallery__wrapper').slick({
    // Кол-во фото для показа
    slidesToShow: 3,
    dots: true,
    centerMode: true,
  });
});
