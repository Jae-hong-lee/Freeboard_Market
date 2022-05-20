// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  var answer = [];
  for (let i=1;i<=n;i++){
      answer.push(x*i);
  }
  return answer;
}


//------------
// 메서드 풀이 map
function solution(x, n) {
  let answer = new Array(n).fill(1).map((num,i) => {
      return (num+i)*x
  })
   //map을 사용하기 위해서 배열을 만들어주고(new Array), 1로 배열을 채워주고 map을 사용
   // 
}

function solution(x, n) {
  let answer = new Array(n).fill(1).map((num,i) => (num+i)*x)
  return answer;
}