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
//  자기자신 예외처리.

// ---------------------------------
// Set
// 1. 배열을 대체해서 사용할 수 있다.
// 2. 타입은 객체 형태를 가진다.
// 3. 고유한 데이터만 저장할 수 있따. (중복되는 데이터가 없다.)

// set => 배열로 변환
// 1. Array.from(arr)    Array.from
// 2. [...arr]           스프레드 연산자

// 메서드
//
function solution(numbers) {
  const answer = new Set();
  // 중복제거

  numbers.forEach((num1) => {
    // console.log(num1, numbers) // num1 빼고 자르고 가져올거임
    // numbers.slice(i+1) // 중복되는 숫자없이 가져올 수 있음.
    numbers.slice(i + 1).forEach((num2) => {
      // 중복 지운 것을 가져와서 한번더 forEach를 돌린다
      const sum = num1 + num2;
      answer.add(sum);
    });
  });

  return [...answer].sort((a, b) => a - b);
  // 스프레드 연산자로 배열로 만듬
}
