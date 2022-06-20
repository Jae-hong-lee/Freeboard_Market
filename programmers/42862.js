// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862

// 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve

function solution(n, lost, reserve) {
  var answer = 0;
  return answer;
}

// 멘토풀이
function solution(n, lost, reserve) {
  let answer = n - lost.length;
  // 전체 학생 수에서 체육복을 잃어버린 학생의 수만큼 뺀다
  // === 체육 수업을 들을 수 있는 학생의 수
  for (let i = 0; i < lost.length; i++) {
    console.log(lost[i], reserve, answer);
    // 앞 번호의 학생을 조회
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    }

    // 뒷 번호의 학생을 조회
    else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// 테스트 케이스 실패

// filter 로 거르고 sort로 정렬까지.
function solution(n, lost, reserve) {
  const losted = [...lost]; // 잃어버린 학생의 원본 정보를 복사한다.
  // 여벌 체육복을 가지고 있는 학생이 체육복을 도난당했는지를 체크한다.
  // === 도난 당했다면, lost와 reserve 배열에 해당 학생의 번호를 삭제한다.
  lost = lost.filter((student) => reserve.includes(student) === false).sort();
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort();
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // console.log(lost[i], reserve, answer);
    // 앞 번호의 학생을 조회
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    }

    // 뒷 번호의 학생을 조회
    else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// 메서드 풀이
function solution(n, lost, reserve) {
  const losted = [...lost]; // 잃어버린 학생의 원본 정보를 복사한다.
  // 여벌 체육복을 가지고 있는 학생이 체육복을 도난당했는지를 체크한다.
  // === 도난 당했다면, lost와 reserve 배열에 해당 학생의 번호를 삭제한다.
  lost = lost.filter((student) => reserve.includes(student) === false).sort();
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort();
  return lost.reduce((acc, cur) => {
    const prev = reserve.indexOf(cur - 1);
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있다면!!
    if (prev !== -1) {
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, n - lost.length); // 체육 수업을 들을 수 있는 학생의 수
}
