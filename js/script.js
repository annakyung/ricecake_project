// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {
  // AOS 적용
  AOS.init();
};
$(document).ready(function() {
 
  var $panel = $(".rolling_panel").find("ul");

  var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
  var itemLength = $panel.children().length;      // 아이템 수

  // Auto 롤링 아이디
  var rollingId;

  auto();

  // 배너 마우스 오버 이벤트
  $panel.mouseover(function() {
      clearInterval(rollingId);
  });

  // 배너 마우스 아웃 이벤트
  $panel.mouseout(function() {
      auto();
  });

  // 이전 이벤트
  $("#prev").on("click", prev);

  $("#prev").mouseover(function(e) {
      clearInterval(rollingId);
  });

  $("#prev").mouseout(auto);

  // 다음 이벤트
  $("#next").on("click", next);

  $("#next").mouseover(function(e) {
      clearInterval(rollingId);
  });

  $("#next").mouseout(auto);

  function auto() {

      // 2초마다 start 호출
      rollingId = setInterval(function() {
          start();
      }, 3000);
  }

  function start() {
      $panel.css("width", itemWidth * itemLength);
      $panel.animate({"left": - itemWidth + "px"}, function() {

          // 첫번째 아이템을 마지막에 추가하기
          $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

          // 첫번째 아이템을 삭제하기
          $(this).find("li:first").remove();

          // 좌측 패널 수치 초기화
          $(this).css("left", 0);
      });
  }

  // 이전 이벤트 실행
  function prev(e) {
      $panel.css("left", - itemWidth);
      $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
      $panel.animate({"left": "0px"}, function() {
          $(this).find("li:last").remove();
      });
  }

  // 다음 이벤트 실행
  function next(e) {
      $panel.animate({"left": - itemWidth + "px"}, function() {
          $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
          $(this).find("li:first").remove();
          $(this).css("left", 0);
      });
  }
});