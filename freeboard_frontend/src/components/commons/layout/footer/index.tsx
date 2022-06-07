import styled from "@emotion/styled";

const Wrapper = styled.div`
  /* background-color: cornflowerblue; */
  height: 30px;
`;

const LinkimageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-150%); */
  /* transform: translateY(-150%); */
`;

const LinkImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
`;
const LinkDiv = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export default function LayoutFooter() {
  return (
    <>
      <Wrapper>
        <LinkimageWrapper>
          <LinkDiv>
            <LinkImg src="/FooterImg/facebook.png" alt="facebook" />
          </LinkDiv>
          <LinkDiv>
            <LinkImg src="/FooterImg/instargram.png" alt="instar" />
          </LinkDiv>
        </LinkimageWrapper>
      </Wrapper>
    </>
  );
}
