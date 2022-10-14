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

// PopUp
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index += 1) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index += 1) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-header__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnLock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnLock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index += 1) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index += 1) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
