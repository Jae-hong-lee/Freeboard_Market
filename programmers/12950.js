// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  var answer = arr1;
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }
  return answer;
}
// ==========================================
// 메서드 풀이
function solution(arr1, arr2) {
  return arr1.map((num1, i) => {
    // console.log(num1, i, arr2[i]);
    // arr1의 배열에 담겨있는 것들을 가져옴
    // arr1, arr2의 첫번쨰 인덱스를 map 함수의 인덱스를 통해 가져올 수 있음
    return num1.map((num2, j) => {
      // console.log(num1, num2, arr2[i],arr2[i][j]);
      return num2 + arr2[i][j];
    });
    // 바깥쪽에 맵이 배열 두개를 감싸는 한 배열이고 안쪽에 맵에 map을 하면 안쪽에 값들을 할당해줄 수 있음.
    // 새로운 2차원 배열 만드는 형태라 메모.
  });
}

// 2차원 배열 형태.

// ==========================================

function solution(arr1, arr2) {
  var answer = [[]];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];

      // 배열이 없을때 빈배열을 만든다
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // answer[i][j] 2차원배열 위치에 sum 변수 추가.
      answer[i][j] = sum;
    }
  }
  return answer;
}
