import MarketDetailItemPage from "../../../src/components/units/market/detail/Market.Detail.container";
import MarketCommentList from "../../../src/components/units/market/marketComment/question/list/itemQuestionList.container";
import MarketCommentWrite from "../../../src/components/units/market/marketComment/question/write/itemQuestion.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetailItemPage />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
