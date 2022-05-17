// 가운데 글자 가져오기

function solution(s) {
  var answer = '';
  if (s.length % 2 === 0 ) {
    answer = s.slice(s.length/2-1, s.length/2+1)
  } else {
     //홀수 일때 인댁스 1만 출력
    answer = s[Math.floor(s.length / 2)]
  }
  console.log(answer)
  return answer;
}

solution("adCDda")


// Math.ceil(x)