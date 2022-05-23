// 평균구하기

function solution(arr) {
  let sum = 0;

  // answer = arr.reduce((acc,cur,idx) => {return acc += cur},0)
  // return answer / arr.length;
  // reduce 는 누산기 값을 누적해서 출력.  = acc(누적기)

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 고차함수 reduce()
// let arr = [1,2,3,4,5];
// let answer = arr.reduce((acc,cur) => {
//   return acc + cur
// }, 0 )
// console.log(answer)

// reduce() 뜯어보기 초기값 설정, acc, cur = 다음값
// arr.reduce((acc,cur) => {
//   console.log(acc,cur)
//   return acc + cur }
//   , 0)
// 초기값
