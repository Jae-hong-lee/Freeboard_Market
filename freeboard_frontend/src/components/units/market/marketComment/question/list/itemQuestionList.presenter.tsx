// import InfiniteScroll from "react-infinite-scroller";

import MarketCommentListItemUI from "./itemQuestionList.item";

export default function MarketCommentListUI(props: any) {
  if (!props.data) return <div />;

  return (
    <div>
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <MarketCommentListItemUI key={el._id} el={el} />
      ))}
    </div>
  );
}
