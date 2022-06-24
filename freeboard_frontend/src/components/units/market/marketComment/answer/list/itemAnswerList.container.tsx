import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./itemAnswerList.queries";

import MarketAnswerListUI from "./itemAnswerList.presenter";

export default function MarketAnswerList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.id,
    },
  });

  return <MarketAnswerListUI data={data} id={props.id} />;
}
