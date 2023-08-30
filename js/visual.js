// 비주얼

window.addEventListener("load", function () {
  const letterTop = document.querySelector(".letter-top");
  const letterPaper = document.querySelector(".letter-paper");
  const letterClick = document.querySelector(".letter-click");
  const letterLogo = document.querySelector(".letter-logo");
  letterTop.addEventListener("click", function () {
    letterTop.classList.toggle("letter-top-active");
    letterPaper.classList.toggle("letter-paper-active");
    letterClick.classList.toggle("letter-click-active");
    letterLogo.classList.toggle("letter-logo-active");
  });

  // 스크롤 모션에 따른 css 추가 (https://greensock.com/scrolltrigger/)
});
