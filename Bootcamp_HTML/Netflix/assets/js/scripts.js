document.addEventListener('DOMContentLoaded', () => {
  let slider = tns({
    items: 1,
    touch: true,
    controls: false,
    nav: false,

    responsive: {  
      576: {
        items: 2,
        gutter: 8,
        controls: true,
        controlsText: ['<i data-feather="chevron-left"></i>', '<i data-feather="chevron-right"></i>']
      },

      768: {
        items: 3,
      }
    }
  });

  feather.replace();
});
