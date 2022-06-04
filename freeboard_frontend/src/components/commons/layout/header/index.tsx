import styled from "@emotion/styled";

const Wrapper = styled.div`
  background: url("../waves.svg");
  height: 500px;
  margin-bottom: 20px;
`;
const WrapperHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
`;
export default function LayoutHadder() {
  return (
    <>
      <Wrapper>
        <WrapperHeader>Site Name</WrapperHeader>
      </Wrapper>
    </>
  );
}
