/* created by Tivotal */

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 300,
        disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });