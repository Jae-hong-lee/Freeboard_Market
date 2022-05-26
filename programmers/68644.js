// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!answer.includes(sum) && i !== j) {
        answer.push(sum);
      }
    }
  }
  console.log(answer.sort((a, b) => a - b));
}

// solution([0, 100, 1000, 10]);
solution([2, 1, 3, 4, 1]);
// // 자기자신 예외처리.
// function solution(numbers) {
//   for (let i = 1; i < numbers.length; i++) {
//     numbers.reduce()
//   }
// }
// solution([2, 1, 3, 4, 1]);
