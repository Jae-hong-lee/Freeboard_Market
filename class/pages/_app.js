import '../styles/globals.css'
//  모든페이지가 시작되기 전에 맨 처음 1번 시작되는 파일

function MyApp({ Component, pageProps }) {

  // 여기에다가 설정
  return <Component {...pageProps} />
}

export default MyApp
