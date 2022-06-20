import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketItemListUI from "./Market.ItemList.presenter";
import { FETCH_USED_ITEMS } from "./Market.ItemList.queries";

export default function MarketItemListContainer() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const onClickItem = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
  };
  return (
    <MarketItemListUI
      data={data}
      loadFunc={loadFunc}
      onClickItem={onClickItem}
    />
  );
}
