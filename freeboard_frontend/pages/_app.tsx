import "antd/dist/antd.css";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react"; // 스타일 폴더 생성해서 글로벌 스타일 생성
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutPage from "../src/components/commons/layout";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/Apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
