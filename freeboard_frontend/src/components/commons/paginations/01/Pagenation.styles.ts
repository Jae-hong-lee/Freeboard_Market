import styled from "@emotion/styled";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Pages = styled.span`
  margin: 10px 20px;
  color: ${(props) => (props.isActive ? "cornflowerblue" : "black")};
  font-weight: ${(props) => (props.isActive ? 900 : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "grabbing")};
`;
