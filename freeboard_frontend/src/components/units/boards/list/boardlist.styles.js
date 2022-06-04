import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

// ---test 게시판
export const BoardsWrapper = styled.div`
  width: 100%;
  margin: 50px;
`;

export const BoardsList = styled.div`
  width: 100%;
  border: 1px solid gray;
`;
export const BoardsListLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

export const ColumnNumber = styled.div`
  width: 5%;
  text-align: center;
  /* background-color: violet; */
  margin: 10px;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  /* background-color: cornflowerblue; */
  margin: 10px;
`;
export const ColumnWriter = styled.div`
  width: 10%;
  text-align: center;
  /* background-color: blueviolet; */
  margin: 10px;
`;
export const ColumnLike = styled.div`
  width: 10%;
  text-align: center;
  /* background-color: yellowgreen; */
  margin: 10px;
`;
export const ColumnDisLike = styled.div`
  width: 10%;
  text-align: center;
  /* background-color: gold; */
  margin: 10px;
`;

export const MoveWritecontainer = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 25px;
  /* background-color: white; */
  border: none;
  color: white;
  box-shadow: 0px 1px 10px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

  :hover {
    color: black;
  }
`;
