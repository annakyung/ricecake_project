$(function () {
    var mHtml = $("html");
    var currentSection = 1;
    var totalSections = 7; // 전체 섹션 수
    var sectionHeight = 1030; // 각 섹션의 높이를 900px로 설정
  
    mHtml.animate({ scrollTop: 0 }, 10);
  
    // 섹션 스크롤 함수 정의
    function scrollToSection(sectionNumber) {
      var posTop = (sectionNumber - 1) * sectionHeight;
      mHtml.animate({ scrollTop: posTop });
    }
  
    $(window).on("wheel", function (e) {
      if (mHtml.is(":animated")) return;
  
      if (e.originalEvent.deltaY > 0) {
        if (currentSection == totalSections) return;
        currentSection++;
      } else if (e.originalEvent.deltaY < 0) {
        if (currentSection == 1) return;
        currentSection--;
      }
  
      scrollToSection(currentSection);
    });
  
    //   // 섹션 스크롤링을 위한 다른 이벤트나 버튼 클릭에 사용할 수 있습니다.
    //   $(".scroll-to-section-button").on("click", function () {
    //     var targetSection = $(this).data("section");
    //     scrollToSection(targetSection);
    //   });
  });