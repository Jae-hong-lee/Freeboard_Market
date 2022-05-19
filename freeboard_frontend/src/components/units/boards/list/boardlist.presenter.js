import * as LS from './boardlist.styles'

export default function ListsUI(props){
  return(
    <LS.Wrapper>
      {/* title */}
      <LS.HeaderTitle>베스트 게시글 타이틀</LS.HeaderTitle>
      {/* 베스트게시물 목록 */}
      <LS.BestBoards>
        {/* 1 */}
        <LS.BestBoardcontent>
          <LS.BestBoardImg>이미지</LS.BestBoardImg>
          <LS.BestBoardTitle>게시물제목</LS.BestBoardTitle>
          {/* 프로필 */}
          <LS.BestProfile>
            <LS.BestProfileImg></LS.BestProfileImg>
            <LS.BestProfileName>프로필 이름</LS.BestProfileName>
          </LS.BestProfile>
          {/* 좋아요 */}
          <LS.LikeWrapper>
            <LS.LikeWrapper_img>좋아요 이미지</LS.LikeWrapper_img>
            <LS.LikeWrapper_count>조아요 수</LS.LikeWrapper_count>
          </LS.LikeWrapper>
        </LS.BestBoardcontent>
        {/* 2 */}
        <LS.BestBoardcontent>
          <LS.BestBoardImg>이미지</LS.BestBoardImg>
          <LS.BestBoardTitle>게시물제목</LS.BestBoardTitle>
          {/* 프로필 */}
          <LS.BestProfile>
            <LS.BestProfileImg></LS.BestProfileImg>
            <LS.BestProfileName>프로필 이름</LS.BestProfileName>
          </LS.BestProfile>
          {/* 좋아요 */}
          <LS.LikeWrapper>
            <LS.LikeWrapper_img>좋아요 이미지</LS.LikeWrapper_img>
            <LS.LikeWrapper_count>조아요 수</LS.LikeWrapper_count>
          </LS.LikeWrapper>
        </LS.BestBoardcontent>
        {/* 3 */}
        <LS.BestBoardcontent>
          <LS.BestBoardImg>이미지</LS.BestBoardImg>
          <LS.BestBoardTitle>게시물제목</LS.BestBoardTitle>
          {/* 프로필 */}
          <LS.BestProfile>
            <LS.BestProfileImg></LS.BestProfileImg>
            <LS.BestProfileName>프로필 이름</LS.BestProfileName>
          </LS.BestProfile>
          {/* 좋아요 */}
          <LS.LikeWrapper>
            <LS.LikeWrapper_img>좋아요 이미지</LS.LikeWrapper_img>
            <LS.LikeWrapper_count>조아요 수</LS.LikeWrapper_count>
          </LS.LikeWrapper>
        </LS.BestBoardcontent>
        {/* 4 */}
        <LS.BestBoardcontent>
          <LS.BestBoardImg>이미지</LS.BestBoardImg>
          <LS.BestBoardTitle>게시물제목</LS.BestBoardTitle>
          {/* 프로필 */}
          <LS.BestProfile>
            <LS.BestProfileImg></LS.BestProfileImg>
            <LS.BestProfileName>프로필 이름</LS.BestProfileName>
          </LS.BestProfile>
          {/* 좋아요 */}
          <LS.LikeWrapper>
            <LS.LikeWrapper_img>좋아요 이미지</LS.LikeWrapper_img>
            <LS.LikeWrapper_count>조아요 수</LS.LikeWrapper_count>
          </LS.LikeWrapper>
        </LS.BestBoardcontent>
      </LS.BestBoards> 

      {/* 검색창 */}
      <LS.SearchWrapper>
        <div>제목검색</div>
        <div>날짜검색</div>
        <div>검색하기 버튼</div>
      </LS.SearchWrapper>
  
      {/* 게시물목록? */}
      {/* table? div? */}
      <LS.BoardsWrapper>
        <LS.BoardsList>
          <LS.BoardsListLine>
          {/* 체크박스?  */}
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>좋아요</th>
            <th>싫어요</th>
          </LS.BoardsListLine>
          
          {props.data?.fetchBoards.map((el,index) => (
            <LS.BoardsListLine key={el._id}>
              <td>{index+1}</td>
              <td>{el.title}</td>
              <td>{el.writer}</td>
              <td>{el.likeCount}</td>
              <td>{el.dislikeCount}</td>
            </LS.BoardsListLine>
          ))}
        </LS.BoardsList>
      </LS.BoardsWrapper>
    </LS.Wrapper>
  )
}
