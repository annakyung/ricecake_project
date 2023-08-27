// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {
  // AOS 적용
  AOS.init();

  // =========================================
  // data.json을 로딩 (new Date()처럼 복사해온 것)
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response; // 속성값을 담음
      // 글자로 온 데이터를 객체로 변환
      // 글자가 json 규칙대로 만들어진 문자열이다.
      // 그러므로 json 글자를 객체로 변환해서 활용한다.
      // json의 배열값 하나하나가 obj 안에 담김(pic 하나하나)
      let obj = JSON.parse(str);

      RECOMMEND_GOOD = obj.recommendgood;

      // 추천상품을 화면에 배치
      showRecommendGood();
    }
  };

  // 자료를 호출한다.
  console.log("자료를 가져온다. XMLHT.....");
  xhttp.open("GET", "data.json");
  // 웹 브라우저 기능을 실행할 수 있도록 요청
  xhttp.send();

  // 추천상품
  let RECOMMEND_GOOD;
  let recommendTag = document.getElementById("data-recommend");
  
  // =========================================
  // 추천 상품 화면 출력 기능
  function showRecommendGood() {
    let html = `
    <div class="swiper sw-recommend">
    <div class="swiper-wrapper">
    `;

    RECOMMEND_GOOD.forEach(function (item) {
      let tag = `
      <div class="swiper-slide">
        <div class="good-box">
          <!-- 제품 이미지 -->
          <a href="${item.link}" class="good-img">
            <img src="../images/${item.pic}" alt="${item.name}" />
            <span class="good-type">${item.tag}</span>
          </a>

          <!-- 제품 정보 -->
          <a href="${item.link}" class="good-info">
            <em>${item.name}</em>(<em>${item.unit}</em>)
          </a>

          <!-- 제품 가격 -->
          <a href="${item.link}" class="good-info-price">
            ${priceToString(item.price)}<em>원</em>
          </a>

          <!-- 장바구니 이미지 -->
          <button class="good-add-cart"></button>
        </div>
      </div>
      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;

    recommendTag.innerHTML = html;
    const swRecommend = new Swiper(".sw-recommend", {
      slidesPerView: 3, // 화면에 보여지는 갯수
      spaceBetween: 16, // 슬라이드와 슬라이드의 사이 간격
      slidesPerGroup: 3, // 슬라이드로 넘어가는 갯수
      navigation: {
        prevEl: ".recommend .slide-prev",
        nextEl: ".recommend .slide-next",
      },
      pagination: {
        el: ".recommend .slide-pg",
        type: "fraction",
      },
    });
  }
};

window.addEventListener("load", function () {});