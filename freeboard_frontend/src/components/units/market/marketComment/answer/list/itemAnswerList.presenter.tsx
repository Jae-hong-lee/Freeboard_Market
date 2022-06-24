// import InfiniteScroll from "react-infinite-scroller";
import MarketAnswerListItemUI from "./itemAnswerList.item";

export default function MarketAnswerListUI(props: any) {
  if (!props.data) return <div />;
  return (
    <div>
      {props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
        <MarketAnswerListItemUI key={el._id} el={el} id={props.id} />
      ))}
    </div>
  );
}
