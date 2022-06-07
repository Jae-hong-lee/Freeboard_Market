// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  if (arr.length <= 1) return [-1];
  arr.splice(arr.indexOf(arr[arr.indexOf(Math.min(...arr))]), 1);
  return arr;
}

solution([4, 3, 2, 1]);
solution([10]);

// =================================
// 메서드 사용, 스프레드 연산자, filter!!!
function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((num) => {
    return num !== min; // 제일 작은 값만 남긴다.
  });
  return answer.length === 0 ? [-1] : answer;
}
solution([4, 3, 2, 1]);
solution([10]);
