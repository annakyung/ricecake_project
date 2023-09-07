// 리뷰창
window.addEventListener("load", function () {
  var swiper = new Swiper(".sw-review", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
  });
});
