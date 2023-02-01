const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "1",
      coverflowEffect: {
        rotate: 50,
        stretch: 4,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.2,
      },

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
});

