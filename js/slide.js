window.addEventListener("load", function () {
  var swiper = new Swiper(".cake-slide-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 100000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});