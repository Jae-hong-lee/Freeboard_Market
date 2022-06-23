import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketDetailUI from "./Market.Detail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./Market.Detail.queries";

export default function MarketDetailItemPage() {
  useAuth();
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);

  const MoveItemList = () => {
    router.push("/market/list");
  };

  const EditItemNew = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const DeleteItem = async () => {
    try {
      await deleteUsedItem({
        variables: { useditemId: router.query.useditemId },
      });
      Modal.success({ content: "게시글이 삭제되었습니다" });
      router.push("/market/list");
    } catch (error) {
      Modal.error({
        title: "삭제실패용!!",
      });
    }
  };
  return (
    <MarketDetailUI
      data={data}
      EditItemNew={EditItemNew}
      MoveItemList={MoveItemList}
      DeleteItem={DeleteItem}
    />
  );
}
