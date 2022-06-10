// import "../styles/globals.css";
//  모든페이지가 시작되기 전에 맨 처음 1번 시작되는 파일

import { AppProps } from "next/app";
// apollo 설정 : Rest-api는 백엔드 컴 주소를 알지만 그래프 큐엘은 api는 알지만 백주소를 모른다.
//              그 주소를 알려주는 세팅을 하는 것
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
// 업로드 import
import { RecoilRoot } from "recoil";
import { createContext } from "react";
// fireBase ==============================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy1x4pHs48JW1y1uwmJLdAZ7slouNWnmE",
  authDomain: "example-firebase-13.firebaseapp.com",
  projectId: "example-firebase-13",
  storageBucket: "example-firebase-13.appspot.com",
  messagingSenderId: "436411362296",
  appId: "1:436411362296:web:5a018a343d4fee1a97040d",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// =======================================

// 글로벌 컨텍스트
export const GlobalContext = createContext({
  isEdit: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  // 여기에다가 설정

  // 아폴로 설정으로 빼버림.
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // // upload 설정 , 업로드 관련 링크를 추가해주는 것
  // const uploadLink = createUploadLink({
  //   uri: "http://backend07.codebootcamp.co.kr/graphql",
  //   // headers, accessToken
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });
  // // useRecoil

  // // apollo 설정 - freeboard 에도 설정하기.(example -> backend07)
  // // 이미지 업로드 설정하기 위해선 여기에다가 업로드 설정을 추가시켜줘야한다.
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
  // });

  // 설정한 state값들 useState 설정 : 글로벌스테이츠

  return (
    // Recoil 설정.
    <RecoilRoot>
      {/* <GlobalContext.Provider value={{ isEdit, setIsEdit }}> */}
      {/* // client 백 주소. */}
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
      {/* // provider로 감싸서 모든 페이지에 apollo 적용시킨다. */}
      {/* </GlobalContext.Provider> */}
    </RecoilRoot>
  );
}

export default MyApp;
