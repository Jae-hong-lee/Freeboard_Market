import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 100px;
  height: 250px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Quizimg = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 5px;
  /* background-color: blue; */
`;

export const BestBoardImg = styled.img`
  width: 300px;
  height: 200px;
  z-index: 2;
`;

export const BestBoardNotImg = styled.div`
  width: 300px;
  height: 200px;
  z-index: 2;
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BestBoardTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  z-index: 1;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid gray;
  z-index: 1;
`;

export const BestBoardInputs = styled.div`
  font-size: 10px;
  font-weight: 400;
  overflow: hidden;
  /* 내용이 길면 감춘다. */
`;
