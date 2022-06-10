// HOC 페이지
import { useRouter } from "next/router";
import { useEffect } from "react";
// export function withAuth() {
//   return function () {};
// }

// 화살표 함수로 변경
// export const withAuth = (Component) => {
//   return (props) => {};
// };

// 화살표 함수에서 return 과 함수 사이에 아무것도 없으면 생략 가능

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);
  return <Component {...props} />;
};
// Component 에러는 eslint 오류 eslint.js rules에서 off로 꺼줫음.
// parmeter 타입 에러는 TS 제너릭을 알아야한다. 배우고 바꿔보자.
