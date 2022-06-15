// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 문제 접근 map 이나 filter로 두번 돌려서 인덱스와 값이 같지 않을 경우 stack 에 넣고 출력할려고 했음.

// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }
//   return participant[0];
// }
// participant 에서 completion 에 인댁스 값과 한개만 제거하겠다는 뜻으로 1을 붙여 splice로
// participant 배열에서 삭제한다.
// ---> 시간초과!!! : for문을 사용하고 안쪽으로 splic를 사용하고 안쪽에서 indexOf를 쓰고 있기 때문에 시간이 많이 걸림

// 2번쨰 풀이
function solution(participant, completion) {
  const answer = {};
  // 1. 참가한 선수의 이름과 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }
  // 2. 참가자 명단에서 완주한 사람의 이름을 제거
  for (let i = 0; i < completion.length; i++) {
    answer[completion[i]]--;
  }

  // 3. 완주하지 못한 선수 찾기 (객체를 반복 하니까 for in)
  for (const key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
  console.log(answer);
  return answer;
}
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

// splice
// 1. 배열메서드
// 2. 원하는 구간의 데이터를 삭제
// 3. 원하는 구간의 데이터를 추가
// 4. 원본이 저장된다!!!

// 객체를 이용해서 배열을 직접 수정하지 않고 데이터를 따로 두어서 완주하지 못한 선수를 찾은것
// 배열을 수정하고 출력하고 에서 속도차이가 많이 나게 되었다.
// 이 객체와 비슷한 기능을 하는 자료구조가 있다.
// 객체와 비슷한 기능을 하는데 중복되는 데이터를 제거해주는 Set 과 비슷한

// Map에 대해 아라보장
// 1. 객체와 비슷한 역할을 하는 자료구조
// 2. 키와 벨류로 데이터를 관리한다.
let obj = {};
let obj2 = new Map();

// 데이터를 추가
obj.name = "철수";
obj2.set("name", "철수");
obj2.set("age", "12");

// 데이터를 조회
obj.name;
obj2.get("name");

// 반복
for (const key in obj) {
  console.log(key, obj[key]);
}
obj2.forEach((value, key) => {
  console.log(value, key);
});

// 맵핑을 통한 반복 : 이 반복은 다른좋은 방법들이 있기 때문에 추천은 하지 않는다.
const mapping = obj2.entries();
mapping.next().value; // 가장 앞에 있는 데이터 조회
mapping.next().value; // 그 다음에 있는 데이터 조회한다.

// 삭제
delete obj.name;
console.log(obj);
obj2.delete("name");
console.log(obj2);

// 초기화
obj = {};
obj2.clear();

// MAP이 가지는 장점:
// 1. 객체의 크기를 바로 가져올 수 있다.
// 키값의 키가 몇개로 이루어지고 있는지를 알고 싶다 -> map.size

// 2. key 값에 어떠한 데이터의 타입도 들어올 수 있다.
// - 숫자 따로 문자따로 타입에 따라 객체에 저장된다. ++ 배열과 객체들도 가능하다.
obj = {};
obj[1] = "숫자 타입입니다";

obj2.set(1, "숫자 타입입니다");
obj2.set("1", "문자 타입입니다");
obj2.set([1, 2, 3], "배열입니다");
obj2.set({}, "객체입니다");
// 다른 예
arr = [1];
arr2 = [1, 2];
obj2.set(arr, "숫자 1 입니다");
obj2.set(arr2, "숫자 1,2 입니다.");

arr.push(2);
obj2.get(arr); // 해당 메모리 값으로 접근해서 "숫자 1입니다" 가 출력됨

// 3. 객체의 순서를 보장 받을 수 있다.
obj = {};
obj["1"] = 1;
obj["3"] = 3;
obj["2"] = 2;
obj; // 객체가 자동으로 오름차순 형태로 정렬해준다.

obj2.set("1", 1);
obj2.set("3", 3);
obj2.set("2", 2);
obj2; // 맵은 내가 넣은 순서대로 나온다.

// ==================================================
// 메서드 풀이
// 해시를 이용하지 않고 풀어보겠다.
// 섞여있는 배열들을 정렬을 먼저시킨다.
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); // 오름차순 형태로 정렬
  completion.sort(); // 인자를 넣지 않았는데도 오름차순 정렬이됨(기본값이 오름차순 정렬임.)

  return participant.filter((name, index) => {
    // console.log(name, completion[index]);
    return name !== completion[index];
  })[0];
  // 가장 먼저 찾은 한사람의 이름만 뽑아서 return 하기 위해서  [0] 을 붙여줌
}
