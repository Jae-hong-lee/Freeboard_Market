// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  if (arr.length <= 1) return [-1];
  arr.splice(arr.indexOf(arr[arr.indexOf(Math.min(...arr))]), 1);
  return arr;
}

solution([4, 3, 2, 1]);
solution([10]);
