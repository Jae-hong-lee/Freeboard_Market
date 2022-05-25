// import "../styles/globals.css";
//  모든페이지가 시작되기 전에 맨 처음 1번 시작되는 파일
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
// apollo 설정 : Rest-api는 백엔드 컴 주소를 알지만 그래프 큐엘은 api는 알지만 백주소를 모른다.
//              그 주소를 알려주는 세팅을 하는 것
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
function MyApp({ Component, pageProps }: AppProps) {
  // 여기에다가 설정

  // apollo 설정 - freeboard 에도 설정하기.(example -> backend07)
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    // client 백 주소.
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* 페이지 컴포넌트를 의미한다 */}
    </ApolloProvider>
    // provider로 감싸서 모든 페이지에 apollo 적용시킨다.
  );
}

export default MyApp;
