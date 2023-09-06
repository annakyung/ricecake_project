// 비주얼

window.addEventListener("load", function () {
  const letterTop = document.querySelector(".letter-top");
  const letterPaperWrap = document.querySelector(".letter-paper-wrap");
  const letterPaper = document.querySelector(".letter-paper");
  const letterCover = document.querySelector(".letter-cover");
  const letterClick = document.querySelector(".letter-click");
  const letterLogo = document.querySelector(".letter-logo");
  const letterTxt = document.querySelector(".letter-click-txt");
  letterCover.addEventListener("click", function () {
    const activeState = letterPaperWrap.classList.contains(
      "letter-paper-wrap-active"
    );
    if (activeState) {
      console.log("닫혀라");
      setTimeout(function () {
        letterTop.classList.remove("letter-top-active");
        letterPaperWrap.classList.remove("letter-paper-wrap-active");
        letterCover.classList.remove("letter-cover-active");
        // letterLogo.classList.toggle("letter-logo-active");
      }, 1000);
      setTimeout(function () {
        letterClick.classList.remove("letter-click-active");
        letterTxt.classList.remove("letter-click-txt-active");
      }, 1500);

      letterPaper.classList.remove("letter-paper-active");
    }
  });
  letterTop.addEventListener("click", function () {
    // 현재 펼쳐져 있는지 아닌지를 파악한다.
    const activeState = letterPaperWrap.classList.contains(
      "letter-paper-wrap-active"
    );
    if (!activeState) {
      console.log("열려라");
      letterTop.classList.add("letter-top-active");
      setTimeout(function () {
        letterPaperWrap.classList.add("letter-paper-wrap-active");
        letterPaper.classList.add("letter-paper-active");
        letterCover.classList.add("letter-cover-active");
        // letterLogo.classList.toggle("letter-logo-active");
      }, 1000);
      letterClick.classList.add("letter-click-active");
      letterTxt.classList.add("letter-click-txt-active");
    }
  });

  // 스크롤 모션에 따른 css 추가 (https://greensock.com/scrolltrigger/)
  downicon.addEventListener("click", function(){
    window.scrollTo({
      top: 886,
      left: 0,
      behavior: "smooth"
    });
  });
});
