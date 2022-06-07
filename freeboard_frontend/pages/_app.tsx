// import "../styles/globals.css"; // 이모션 글로벌태그 사용하고 임폴트하면 주석처리
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react"; // 스타일 폴더 생성해서 글로벌 스타일 생성
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutPage from "../src/components/commons/layout";

import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ApolloProvider>
  );
}

export default MyApp;
