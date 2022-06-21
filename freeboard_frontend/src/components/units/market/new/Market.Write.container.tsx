import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketWriteUI from "./Market.Write.presenter";
import { CREATE_USED_ITEM } from "./Market.Write.queries";

export default function MarketWriteContainer(props) {
  useAuth();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onClickCreateItem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: fileUrls,
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

  const onClickEditItem = () => {
    console.log("수정하기");
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <MarketWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickCreateItem={onClickCreateItem}
      onClickEditItem={onClickEditItem}
      data={props.data}
      isEdit={props.isEdit}
      loading={props.loading}
    />
  );
}
