// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// ==========================================
// 메서드 풀이
function solution(a, b) {
  return a.reduce((acc, cur, i) => {
    console.log(acc, cur, b[i]); // cur은 a의 요소들을 가져오는 것, b는 index!
    return acc + cur * b[i];
  }, 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
