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

// ------------------
// string 와 toString 의 차이: toString은 변수에서만 가능한 함수임 , 다른 기능은 MDN 참고.

function solution(n) {
  const answer = [];
  n = String(n);
  // 뒤쪽 데이터 부터 가져올거임
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(+n[i]);
  }

  return answer;
}
// solution(12345);

// 메서드 풀이
// 숫자형은 split 안대니까 문자형 변환 -> 배열 변환 -> reverse로 돌리고 -> map으로 하나씩 뽑아서 숫자형으로 return
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((num) => {
      return +num;
    });
}
solution(12345);
