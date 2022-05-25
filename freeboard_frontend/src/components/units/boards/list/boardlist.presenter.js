import * as LS from "./boardlist.styles";

export default function ListsUI(props) {
  return (
    <LS.Wrapper>
      {/* 게시물목록? */}
      {/* table? div? */}
      <LS.BoardsWrapper>
        <LS.BoardsList>
          <LS.BoardsListLine>
            {/* 체크박스?  */}
            <LS.ColumnNumber>번호</LS.ColumnNumber>
            <LS.ColumnTitle>제목</LS.ColumnTitle>
            <LS.ColumnWriter>작성자</LS.ColumnWriter>
            <LS.ColumnLike>좋아요</LS.ColumnLike>
            <LS.ColumnDisLike>싫어요</LS.ColumnDisLike>
          </LS.BoardsListLine>
          {props.data?.fetchBoards.map((el, index) => (
            <LS.BoardsListLine key={el._id}>
              <LS.ColumnNumber>{index + 1}</LS.ColumnNumber>
              <LS.ColumnTitle onClick={props.onClickTitle} id={el._id}>
                {el.title}
              </LS.ColumnTitle>
              <LS.ColumnWriter>{el.writer}</LS.ColumnWriter>
              <LS.ColumnLike>{el.likeCount}</LS.ColumnLike>
              <LS.ColumnDisLike>{el.dislikeCount}</LS.ColumnDisLike>
            </LS.BoardsListLine>
          ))}
        </LS.BoardsList>
      </LS.BoardsWrapper>
      <LS.MoveWritecontainer onClick={props.onClickMoveCreateBoard}>
        게시물 등록하기
      </LS.MoveWritecontainer>
    </LS.Wrapper>
  );
}
