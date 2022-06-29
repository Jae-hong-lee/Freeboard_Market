import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // Value는 그냥 읽는거. -> API 요청을 할 거기 때문에 promise 가 들어간다.
  useEffect(() => {
    // 1. 기존방식 - 로컬 스토리지 안으로
    // console.log("브라우저");
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");
    // 2. 새로운 방식 - getAccessToken() 재사용
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //

    // 새로고침하면 자꾸 사라짐 토큰값이
    // [해결방법: 1번째 - restoreAccessToken 2번 요청하기]
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });

    // [해결방법: 2번째 - 로딩(글로벌로 저장되어있음) 활용하기 ]
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(true);
    // });

    // [해결방법: 3번째 - recoil selector 활용하기!!! ,(Recoil에서 promise도 제공을 해준다.)]
    aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    // 1번과 다른거는 요청 하나로 공유 할 수 있다는 것!
  }, []);

  // callback 함수
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    // 그래프 큐엘 에러들에서 에러들을 for문을 도는데 그 에러중에서 UNAUTHENTICATED에 해당하는 에러인지 판단
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰만료 에러인지 체크. 해당에러라면 2번실행.
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 AccessToken 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2 재발급 받은 accessToken 저장하기 (recoil state에도 업데이트해주기 위해)
            setAccessToken(newAccessToken);

            // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // 정보 바꾸기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken 만 바꿈
              },
            });
            //  3-2 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
