// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
  console.log(
    45 -
      numbers.reduce((acc, cur) => {
        return acc + cur;
      })
  );
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
