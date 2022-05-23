// 문자열 다루기 기본

function solution(s) {
  var answer = false;
  if (s.length == 4 || s.length == 6) {
    if (isNaN(s) || s.indexOf("e") >= 0) {
      answer = false;
    } else {
      answer = true;
    }
  }

  return answer;
}

// -----------------

function solution(s) {
  var answer = false;
  let check = /^[0-9]*$/;
  if (s.length == 4 || s.length == 6) {
    if (check.test(s)) {
      answer = true;
    }
  }
  //console.log(answer)
  return answer;
}
solution("a234");
solution("1234");
solution("12e3");
// false true false

// ------------------

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  // 1.
  // if( isNaN(s) === true){
  //   return false
  // }

  for (let i = 0; i < s.length; i++) {
    // console.log(i, s[i])
    if (isNaN(s[i])) {
      //2.  문자열 중 하나라도 숫자가 아닌 경우 이때는 바로 false 를 리턴 -> 여기서 안걸리면 전체가 다 숫자다!
      return false;
    }
  }
  return true;
}
// 1.
// s 는 문자열. s에   "1  2"   처럼 공백이 들어오는 경우에는 공백으로 인해서 문자열로 검증됨. 그래서
// isNaN을 사용했을때 true 값이 나온다. 문자열에서 숫자하나씩을 가져와서 검증을 해야한다.

// s를 통째로 넘겨주면 테스트가 통과 안될 경우가 많음 문자 하나하나 판별하는 로직이 필요한 문제였다.

// 메서드 활용 풀이방법
// 배열메서드인데 내가 원하는 데이터만 받아올거야! -> filter
// 근데 s 는 문자열임. -> split() : 문자열을 어떤 기준으로 쪼개서 배열로 만들것인가.
//
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  // 메서드 뒤에 메서드 쓰는 것 - 메서드 체이닝 : 계속해서 메서드를 연결해서 사용한다.
  const answer = s.split("").filter((el) => {
    //고차함수
    // console.log(el , isNaN(el)) // isNaN으로 숫자가 아닌 것만 배열에 넣어줌
    return isNaN(el) === true;
  });
  // 빈배열이 아니라면 , 전체가 숫자로 구성 (false)
  // 빈 배열이 맞다면, 전체가 숫자로 구성 (true)
  return answer.length === 0;
}
