import styled from "@emotion/styled";
// import HomeWrapper from "../styles/IndexStyle";

const HomeWrapper = styled.div`
  background: url("../beerBack.gif") center/cover;
  /* background: url(id) center/cover; */
  width: 100vw;
  height: 100vh;
`;
// 궁금점 : useEffect 로 마운트 될때 setState를 만들어 거기에 넣고 id값을 그걸로 주고
// 이모션에서 props로 받아서 url로 넣을까?

// 이미지 태그로 바꾸고 넣어보자.
export default function Home() {
  const images = ["../beerBack.gif"];
  const randomimage = images[Math.floor(Math.random() * images.length)];

  return <HomeWrapper id={images[randomimage]}></HomeWrapper>;
}
