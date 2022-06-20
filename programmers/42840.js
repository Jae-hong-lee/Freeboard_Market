// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

// 메서드 풀이
const answerTB = [
  [1, 2, 3, 4, 5], // 1번
  [2, 1, 2, 3, 2, 4, 2, 5], // 2번
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번
];

function solution(answers) {
  const score = answerTB.map((el, i) => {
    const info = answers.reduce((acc, cur, j) => {
      // console.log(cur, el[j], el, j)
      return acc + (el[j % el.length] === cur ? 1 : 0);
    }, 0);
    // console.log(info)
    return { number: i + 1, score: info };
  });
  // console.log(score)
  // 가장 많이 맞춘 학생 찾기
  const big = Math.max(
    ...score.map((el) => {
      return el.score;
    })
  );
  // console.log(big)
  // 가장 많이 맞춘 점수를 가지는 학생 찾기
  return score
    .filter((el) => {
      return el.score === big;
    })
    .map((el) => {
      return el.number;
    });
}
