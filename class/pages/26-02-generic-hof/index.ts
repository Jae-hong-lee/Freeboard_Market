// 1. HOF - 일반 타입

// import { string } from "yup";

// 함수를 리턴하는 함수, HOF에 타입지정.
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultFunc1 = firstFunc1("철수")(9);
console.log(resultFunc1);

// 첫번쨰 함수에서 타임지정, return 함수의 타입을 지정해줘야함
// function firstFunc1(arg1: string): (arg2: number) => [string, number] {
//   return function secondFunc1(){
//     return [arg1, arg2];
//   };
// }

// 2. HOF - any타입
// 사용하는 사람이 어떤 타입의 값을 입력할지 모르니까 any를 사용하게 되면
// 타입예측도 안되고 예상치 못한 오류를 마주할 수 있다.
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const resultFunc2 = firstFunc2("철수")(9);
console.log(resultFunc2);

// 3. HOF - Generic 타입
// any 처럼 똑같이 모든 타입이 들어가지만 조금 더 안정성 있게 코드 작성가능
// 인자에 어떤 type이 들어가더라도 해당 type을 반환한다.
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const resultFunc3 = firstFunc3("철수")(9);
console.log(resultFunc3);

// 4. HOF - Generic 타입의 화살표함수
// prettier-ignore
const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2];
};

const resultFunc4 = firstFunc4("철수")(9);
console.log(resultFunc4);
//
//
// 5. HOF - Generic 타입 (컴포넌트에 응용해보기 - HOC) *withAuth
// prettier-ignore
const withAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};

const resultFunc5 = withAuth("Bbb")({ qqq: "철수" });
console.log(resultFunc5);
