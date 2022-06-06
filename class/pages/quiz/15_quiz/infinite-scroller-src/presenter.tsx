import * as S from "./styles";
import InfiniteScroll from "react-infinite-scroller";
export default function QuizPageUI(props: any) {
  return (
    <div>
      <S.Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          <S.QuizWrapper>
            {props.data?.fetchBoards.map((el: any) => (
              <S.Row key={el._id}>
                <S.Colum>{el.writer}</S.Colum>
                <S.Colum>{el.title}</S.Colum>
              </S.Row>
            ))}
          </S.QuizWrapper>
        </InfiniteScroll>
      </S.Wrapper>
    </div>
  );
}
