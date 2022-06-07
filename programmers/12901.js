// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
function solution(a, b) {
  let answer = 0;
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  for (let i = 1; i < a; i++) {
    if (i === 4 || i === 6 || i == 9 || i === 11) {
      answer += 30;
    } else if (i === 2) {
      answer += 29;
    } else {
      answer += 31;
    }
  }
  answer += b;
  // for문 조건에 어긋나서 1월 일때는 for문으로 들어가질 않아서
  // +b +4 를 For문 밖에서 해줬더니 채점성공
  return week[(answer + 4) % 7];
}
solution(1, 1);
solution(5, 24);
