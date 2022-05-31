import InfiniteScroll from "react-infinite-scroller";
import BoardCommentListItemUI from "./BoardCommentList.item";

export default function BoardCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItemUI
          key={el._id}
          el={el}
          DeleteCommentOnclick={props.DeleteCommentOnclick}
        />
      ))}
    </InfiniteScroll>
  );
}
