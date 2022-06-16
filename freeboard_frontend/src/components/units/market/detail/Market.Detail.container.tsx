import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketDetailUI from "./Market.Detail.presenter";
import { FETCH_USED_ITEM } from "./Market.Detail.queries";

export default function MarketDetailItemPage() {
  useAuth();
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketDetailUI data={data} />;
}
