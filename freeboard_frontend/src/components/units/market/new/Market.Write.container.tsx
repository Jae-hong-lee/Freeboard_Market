import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketWriteUI from "./Market.Write.presenter";
import { CREATE_USED_ITEM } from "./Market.Write.queries";

export default function MarketWriteContainer() {
  useAuth();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();

  const onClickCreateItem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
          },
        },
      });
      console.log(result);
      Modal.success({ title: "상품등록성공" });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ title: "상품등록실패" });
    }
  };

  return <MarketWriteUI onClickCreateItem={onClickCreateItem} />;
}
