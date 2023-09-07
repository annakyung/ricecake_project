// 비주얼

window.addEventListener("load", function () {
  const letterWrap = document.querySelector(".visual-letter");
  letterWrap.addEventListener("click",function(){
    letterWrap.classList.toggle("letter-active")
  })
});
