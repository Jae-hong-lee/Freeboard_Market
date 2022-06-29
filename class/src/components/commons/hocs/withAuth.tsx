// HOC 페이지
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useResetRecoilState,
} from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
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

  const [accessToken, setAccessToken] = useResetRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // useEffect(() => {
  // 새로고침하면 없어짐
  // if (!localStorage.getItem("accessToken")) {
  //   alert("로그인 후 이용가능합니다");
  //   router.push("/23-04-login-check");
  // }

  // 이렇게 하면 순서가 맞지 않는 문제가 있음 페이지가 이동되고 AccessToken이 생기는 문제
  // if (!accessToken) {
  //   alert("로그인 후 이용가능합니다");
  //   router.push("/23-04-login-check");
  // }
  //
  // [해결방법: 1번째 - 새로고침 페이지에서 토큰을 두번 받는 즉 한번 더 요청을 보내는 방법]
  // restoreAccessToken을 두번 요청하기
  // if (!accessToken) {
  //   getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken) {
  //       setAccessToken(newAccessToken);
  //     } else {
  //       // 토큰만료인것이니까 돌려보내기
  //       alert("로그인 후 이용가능합니다");
  //       router.push("/23-04-login-check");
  //     }
  //   });
  // }
  // }, []);

  // [해결방법: 2번째 - 로딩(글로벌로 저장되어있음) 활용하기 ]
  // useEffect(() => {
  //   if (isLoaded && !accessToken) {
  //     alert("로그인 후 이용가능합니다");
  //     router.push("/23-04-login-check");
  //   }
  // }, [isLoaded]);

  // [해결방법: 3번째 - recoil selector 활용하기!!! ,(Recoil에서 promise도 제공을 해준다.)]
  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      // 여기서는 검증을 해줘야함
      if (!newAccessToken) {
        alert("로그인 후 이용가능합니다");
        router.push("/23-04-login-check");
      }
    });
  }, []);

  return <Component {...props} />;
};
// Component 에러는 eslint 오류 eslint.js rules에서 off로 꺼줫음.
// parmeter 타입 에러는 TS 제너릭을 알아야한다. 배우고 바꿔보자.
