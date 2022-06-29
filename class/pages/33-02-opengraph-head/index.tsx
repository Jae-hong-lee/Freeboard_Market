import Head from "next/head";

export default function OpengraphPage() {
  return (
    <>
      {/* 페이지 별로 다 바꿀 수 있다. */}
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신걸 환영합니당"
        />
        <meta
          property="og:image"
          content="https://static.gabia.com/www/common/img/logo.png"
        />
      </Head>
      <h1>OpenGraph 연습 페이지</h1>
    </>
  );
}
