// [1차] 다트게임
// https://programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  const answer = [];
  let score = "";
  const isBonus = ["S", "D", "T"];

  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      score += dartResult[i];
    } else {
      // 보너스와 옵션이 여기로 빠지게 된다.
      if (isBonus.includes(dartResult[i])) {
        score = Number(score);
        if (dartResult[i] === "D") {
          score = Math.pow(score, 2);
        } else if (dartResult[i] === "T") {
          score = Math.pow(score, 3);
        }

        answer.push(score);
        score = "";
      }
    }
  }
}
