import styled from "@emotion/styled";

// export const WrapperPage = styled.div``;
export const Pages = styled.span`
  margin: 0px 10px;
  color: ${(props) => (props.isActive ? "cornflowerblue" : "black")};
  font-weight: ${(props) => (props.isActive ? 700 : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "grabbing")};
`;
