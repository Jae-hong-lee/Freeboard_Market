// 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932
function solution(n) {
  var answer = [];
  let str = n + "";
  answer = str
    .split("")
    .map((x) => Number(x))
    .reverse();

  return answer;
}
