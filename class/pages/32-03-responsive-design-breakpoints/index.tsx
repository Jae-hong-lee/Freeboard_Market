import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 62.5rem; // em vs rem // 1000px
  height: 1000px;
  background-color: blueviolet;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: tomato;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    /* display: none; */
  }
`;

const MWrapper = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 100px;
    background-color: #36b67d;
    display: block;
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <>
      <MWrapper>모바일에서만 나와요!</MWrapper>
      <Wrapper>상자</Wrapper>
    </>
  );
}
