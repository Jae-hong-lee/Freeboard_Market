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


// Math.ceil(x) 아님

// 멘토님 풀이
function solution(s) {
  const center = Math.floor(s.length/2);
  let answer = s[center];
// 홀수일때는 center 값만 출력

  if ( s.length % 2 === 0 ) {
    // 문자열 길이 짝수 판단 -> 맞다면 가운데 글자의 앞에 있는 글자를 붙여줌
    answer = s[center - 1 ] + answer;
  }

  return answer;
}

// 풀이 리팩토링
// 삼항 연산자 이용 , substring
function solution(s) {
  const center = Math.floor(s.length/2);
  return s.length % 2 === 1 
      ? s[center] 
      : s.substring( center - 1, center + 1 ) ;
}