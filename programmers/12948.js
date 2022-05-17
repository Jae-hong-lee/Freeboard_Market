// 핸드폰 번호 가리기

function solution(phone_number) {
  var answer = '';

  let star_num = phone_number.slice(0, phone_number.length - 4);
  for (let i = 0; i < star_num.length; i++) {
    answer += "*"
  }
  answer += phone_number.slice(star_num.length)
  
  
  return answer;
}

solution("01022284035")

// 선생님 풀이
function solution(phone_number) {
  var answer = '';

  for (let i = 0; i < phone_number.length; i++) {
   if (i < phone_number.length-4) {
     answer += "*";
   } else{
     answer += phone_number[i];
   }
  }
  return answer
}

solution("01022284035")


// 선생님 풀이 (메서드 이용)
function solution(phone_number) {
  var answer = '';
  // padStart(글자수, 글자)
  answer = answer.padStart(phone_number.length -4, "*");
  answer += phone_number.substring(phone_number.length -4); // + slice()
  return answer
}

solution("01022284035")
