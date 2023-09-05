// 퀴즈 이벤트
window.addEventListener("load", function () {
  const quizMultiBoxes = document.querySelectorAll(".quiz_multi .box");
  const quizAnswerBoxes = document.querySelectorAll(".quiz_answer .box span");
  const checkAnswerButton = document.querySelector(".quiz_btn");

  let currentIndex = 0;

  quizMultiBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (currentIndex < quizAnswerBoxes.length) {
        quizAnswerBoxes[currentIndex].textContent = box.textContent;
        currentIndex++;
      }
    });
  });

  checkAnswerButton.addEventListener("click", () => {
    const userAnswer = Array.from(quizAnswerBoxes)
      .map((box) => box.textContent)
      .join("");

    const expectedAnswer = "국내최초";

    if (userAnswer === expectedAnswer) {
      alert("정답입니다! 쿠폰이 발급되었습니다.");
    } else {
      alert("틀렸습니다. 다시 시도하세요.");

      // 틀렸을 경우 정답 박스 초기화
      currentIndex = 0;
      quizAnswerBoxes.forEach((box) => {
        box.textContent = "?";
      });
    }
  });
});
