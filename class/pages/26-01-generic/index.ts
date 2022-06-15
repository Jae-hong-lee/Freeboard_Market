// import { useState } from "react";

// // 1. 문자 타입 지정 예시
// const getString = (args: string): string => {
//   return args;
// };
// const result1 = getString("철수");

// // 2. 숫자 타입 지정 예시
// const getNumber = (args: number): number => {
//   return args;
// };
// const result2 = getString("철수");
// // 에러를 사전에 방지할 수 있다.

// // 3. any타입 (그냥 JS랑 같음)
// const getAny2 = (args: any) => {
//   return args;
// };
// const result3_1 = getAny2("철수");
// const result3_2 = getAny2(8);
// const result3_3 = getAny2(true);
// //
// // 4. any 타입2
// const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
//   return [arg3, arg2, arg1];
// };
// const result4 = getAnys("철수,true, 8");
// //
// //
// // 5. generic 타입 (들어온 타입을 그대로 사용)
// // <MyType> 은 그저 묶음일뿐, generic 타입은 내가만들 수 있다
// function getGeneric<MyType>(args: MyType): MyType {
//   return args;
// }

// const aaa: string = "철수";
// const bbb: number = 8;
// const ccc: boolean = true;
// const result5_1 = getGeneric(aaa);
// const result5_2 = getGeneric(bbb);
// const result5_3 = getGeneric(ccc);

// // 6. generic 타입2
// // 묶음으로 타입을 줄때 굉장히 유용하다.
// // prettier-ignore
// // vs-code가 주석을 잃어서 프리티어를 무시한다.
// function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
//   return [arg3, arg2, arg1];
// }
// const result6 = getGenerics("철수", true, 8);
// // 이런식으로 훨씬더 안전한 코드를 작성할 수 있다.

// // 7. generic - 축약1
// function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
//   return [arg3, arg2, arg1];
// }
// const result7 = getGenericsT("철수", true, 8);

// // 8. generic - 축약2
// function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
//   return [arg3, arg2, arg1];
// }
// const result8 = getGenericsTUV("철수", true, 8);
// // const result8 = getGenericsTUV<string, boolean, number>(123, true, 8); // 문자열대신 123이 들어가니까 Error뜬다
// // 이런식으로 타입을 명시해줄 수도 있다.

// //
// //
// // 9. useState에서의 generic
// const [aaa, setAAA] = useState<number>(111);

// // 우리가 깔았던 라이브러리에 가보면 제네릭타입을 쓴것을보고있다.
// // 우리가 만든(useState)같은 것을 다른 사람이 쓸때 그 사람이
// // 어떤 타입의 값을 넣을지 모르니 generic으로 타입을 지정해주는 것

// // 10. 화살표 함수에서의 generic
// const getGenericsArrow = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
//   return [arg3, arg2, arg1];
// };
// const result10 = getGenericsArrow("철수", true, 8);
