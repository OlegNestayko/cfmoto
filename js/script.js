// Slick slider
// Route section
$(document).ready(function () {
  $('.route-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    centerMode: true,
  });
});

/*------------------------------------------*/
// Gallery section
$(document).ready(function () {
  $('.gallery__wrapper').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    dots: true,
    centerMode: true,
  });
});

// Spoiler
$(document).ready(function () {
  $('.qa__subtitle').click(function (event) {
    if ($('.qa__list').hasClass('one')) {
      $('.qa__subtitle').not(this).removeClass('active');
      $('.qa__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
});
