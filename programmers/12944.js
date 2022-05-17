// 평균구하기

function solution(arr) {
  var answer = 0;
  let sum = 0 

  // answer = arr.reduce((acc,cur,idx) => {return acc += cur},0)
  // return answer / arr.length;
 // reduce 는 누산기 값을 누적해서 출력.  = acc


  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length

}