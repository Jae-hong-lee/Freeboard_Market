import styled from "@emotion/styled";

export const MyTitleContents = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MyTitle = styled.div`
  width: 10%;
  text-align: center;
`;
export const MyContents = styled.div`
  width: 40%;
  text-align: center;
`;
export const MyRow = styled.div`
  display: flex;
`;

export const MyColumn = styled.div`
  width: 25%;
`;
export const MyList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ListSpan = styled.span`
  background-color: ${(props) =>
    props.isEdit === props.id ? "yellow" : "none"};
`;
