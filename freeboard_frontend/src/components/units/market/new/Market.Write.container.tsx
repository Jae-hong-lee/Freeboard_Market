import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketWriteUI from "./Market.Write.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./Market.Write.queries";

export default function MarketWriteContainer(props) {
  useAuth();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [adreeZipcode, setAddressZipcode] = useState("");
  const [addressInput, setAddressInput] = useState("");

  const onClickCreateItem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: fileUrls,
            useditemAddress: {
              zipcode: adreeZipcode,
              address: addressInput,
            },
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

  const onClickEditItem = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: {
            ...data,
            images: fileUrls,
            useditemAddress: {
              zipcode: adreeZipcode,
              address: addressInput,
            },
          },
        },
      });
      Modal.success({ title: "상품수정성공" });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ title: "상품수정실패" });
    }
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

  // isModalView
  const [isModalView, setisModalView] = useState(false);

  const onToggleModal = () => {
    setisModalView((perv) => !perv);
  };

  const handleCompleteDaum = (addressdata) => {
    onToggleModal();
    setAddressInput(addressdata.address);
    setAddressZipcode(addressdata.zonecode);
  };

  return (
    <MarketWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickCreateItem={onClickCreateItem}
      onClickEditItem={onClickEditItem}
      data={props.data}
      isEdit={props.isEdit}
      loading={props.loading}
      // 주소등록
      handleCompleteDaum={handleCompleteDaum}
      onToggleModal={onToggleModal}
      isModalView={isModalView}
      zipcode={adreeZipcode}
      address={addressInput}
    />
  );
}
