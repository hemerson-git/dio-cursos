'use strict';

document.addEventListener('DOMContentLoaded', () => {
  startCarousel();
  feather.replace();

  document.addEventListener('scroll', changeNavbarBg);

});

function changeNavbarBg() {
  const menu = document.querySelector('#main-menu');
  
  if (pageYOffset === 0) {
    menu.classList.add('translucent');
  } else {
    menu.classList.remove('translucent');
  }
}

function toggleMenu() {
  const menu = document.querySelector('#main-menu');

}

function startCarousel() {
  let slider = tns({
    items: 1,
    touch: true,
    controls: true,
    controlsText: ['<i data-feather="chevron-left"></i>', '<i data-feather="chevron-right"></i>'],
    rewind: false,
    nav: false,

    responsive: {  
      576: {
        items: 2,
        gutter: 8,
        controls: true,
      },

      768: {
        items: 3,
      }
    }
  });
}
