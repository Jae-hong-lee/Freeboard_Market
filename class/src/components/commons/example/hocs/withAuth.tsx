import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다");
      // router.push("/23-04-login-check");
      router.push("/example/hoc/login");
    }
  }, []);
  return <Component {...props} />;
};
// Component 에러는  eslint 오류 eslint.js rules에서 off로 꺼줫음.
// parmeter 타입 에러는 TS 제너릭을 알아야한다. 배우고 바꿔보자.
