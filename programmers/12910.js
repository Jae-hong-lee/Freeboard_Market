// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];
  arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr.sort());
  arr.forEach((element) => {
    if (element % divisor === 0) {
      answer.push(element);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  console.log(answer);
  return answer;
}
// solution([5, 9, 7, 10], 5);
// solution([2, 36, 1, 3], 1);
// solution([3, 2, 6], 10);

// ------------------------------------------------------
// 실패
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);

// filter 로 확인.
// 마지막은 삼항연사자로 비어있다면 -1을 담아 return 아니라면 sort로 정렬해서 출력
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
