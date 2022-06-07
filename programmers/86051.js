// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
  return (
    45 -
    numbers.reduce((acc, cur) => {
      return acc + cur;
    })
  );
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);

// ==============================================
function solution(numbers) {
  return new Array(9).fill(1).reduce((acc, cur, index) => {
    const num = cur + i; // 1~9숫자를 나타냄
    return (
      acc +
      (numbers.includes(num) ? 0 : num)
      // 결과가 true 라면 숫자가 있는 것 acc + 0, false 숫자가없다면 acc + num
    );
    // 없는 숫자를 찾는 것이다
  }, 0);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
// 9개의 1이 들어있는 배열을 만들고 reduce를 돌리는데.
//
