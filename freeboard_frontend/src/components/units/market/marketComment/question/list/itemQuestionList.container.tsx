import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTIONS } from "./itemQuestionList.queries";
import { useRouter } from "next/router";
import MarketCommentListUI from "./itemQuestionList.presenter";

export default function MarketCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  return <MarketCommentListUI data={data} />;
}
