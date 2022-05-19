import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width:1200px;
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

export const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align : center;
  color : black;
  margin-bottom:40px;
`;

// 베스트 게시물 
export const BestBoards = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom:40px;
  background-color: cornflowerblue;
`;

export const BestBoardcontent = styled.div`
  width: 290px;
  height: 260px;
  background-color: yellow;
`;

export const BestBoardImg = styled.div`
  width: 282px;
  height: 120px;
  background-color:gray;
`;

export const BestBoardTitle = styled.div`
  font-size:20px;
  font-weight:500;
`;

export const BestProfile = styled.div`
  background-color: green;
`;

export const BestProfileImg = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:gray;
`;

export const BestProfileName = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

// 좋아요
export const LikeWrapper = styled.div`
  background-color: blanchedalmond;
`;

export const LikeWrapper_img = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:yellow;
`

export const LikeWrapper_count = styled.div`
  font-size: 16px;
`

export const SearchWrapper = styled.div`
  background-color:blueviolet;
  width:100%;

  display:flex;
  flex-direction:row;
  justify-content: space-around;
  margin-bottom: 40px;
`;


// ---test 게시판
export const BoardsWrapper = styled.div`
  width:100%;
`;

export const BoardsList = styled.table`
  width:100%;
  /* background-color:red; */
`;
export const BoardsListLine = styled.tr`
  width:100%;
  /* background-color:green; */
  text-align:center
`;