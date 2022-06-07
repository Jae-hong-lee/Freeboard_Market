import Pagination01 from "../../../commons/paginations/01/Pagenation.container";
import * as LS from "./boardlist.styles";
import SearchBar01 from "../../../commons/searchbar/boardlist/Searchbar01.container";
import { v4 as uuidv4 } from "uuid";

export default function ListsUI(props) {
  return (
    <LS.Wrapper>
      {/* 게시물목록? */}
      {/* table? div? */}
      {/* 궅이 검색하기를 여기서 만들필요없음. */}
      <SearchBar01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
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
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el) => (
                    <LS.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                      id={el._id}
                    >
                      {el}
                    </LS.TextToken>
                  ))}
              </LS.ColumnTitle>
              <LS.ColumnWriter>{el.writer}</LS.ColumnWriter>
              <LS.ColumnLike>{el.likeCount}</LS.ColumnLike>
              <LS.ColumnDisLike>{el.dislikeCount}</LS.ColumnDisLike>
            </LS.BoardsListLine>
          ))}
        </LS.BoardsList>
        <Pagination01 refetch={props.refetch} count={props.dataBoardsCount} />
      </LS.BoardsWrapper>
      <LS.MoveWritecontainer onClick={props.onClickMoveCreateBoard}>
        게시물 등록하기
      </LS.MoveWritecontainer>
    </LS.Wrapper>
  );
}
