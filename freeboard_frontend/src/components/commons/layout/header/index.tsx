import styled from "@emotion/styled";

const Wrapper = styled.div`
  background: url("../Beer.png");
  height: 500px;
  margin-bottom: 20px;
  width: 100%;
  /* transform: rotate(180deg); */
`;
const WrapperHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  /* transform: rotate(180deg); */
  padding-top: 100px;
  text-shadow: 2px 2px 2px gray;
  color: white;
`;
export default function LayoutHadder() {
  return (
    <>
      <Wrapper>
        <WrapperHeader>BEER Market</WrapperHeader>
      </Wrapper>
    </>
  );
}
