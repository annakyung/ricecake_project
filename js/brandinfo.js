// 브랜드 장점
window.addEventListener("load", function () {
  const content1 = document.querySelector(".brandinfo");
  const path1 = document.querySelector(".line");
  const path1Length = path1.getTotalLength();
  path1.style.strokeDasharray = path1Length;
  path1.style.strokeDashoffset = calcDashoffset(
    window.innerHeight * 0.99,
    content1,
    path1Length
  );

  function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;
    return value < 0 ? 0 : value > length ? length : value;
  }

  function scrollHandler() {
    const scrollY = window.scrollY + window.innerHeight * 0.99;
    path1.style.strokeDashoffset = calcDashoffset(
      scrollY,
      content1,
      path1Length
    );
  }
  window.addEventListener("scroll", scrollHandler);
});
