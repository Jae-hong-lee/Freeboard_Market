import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./itemQuestion.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/itemQuestionList.queries";

import { Modal } from "antd";
import MarketCommentWriteUI from "./itemQuestion.presenter";

export default function MarketCommentWrite(props: any) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    if (contents) {
      try {
        const result = await createUseditemQuestion({
          variables: {
            useditemId: router.query.useditemId,
            createUseditemQuestionInput: {
              contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: router.query.useditemId,
              },
            },
          ],
        });
        console.log(result);
        Modal.success({
          content: "댓글이 등록되었습니다!!",
          onOk() {
            setContents("");
          },
        });
      } catch (error) {
        console.log(contents);
        Modal.error({
          title: "댓글등록 실패!!!",
          content: "댓글 등록에 실패했습니다.",
        });
      }
    }
  };

  const UpdateCommentOnclick = async () => {
    if (contents) {
      try {
        if (!props.el?._id) return;
        const updateUseditemQuestionInput = {};
        if (contents) updateUseditemQuestionInput.contents = contents;
        await updateUseditemQuestion({
          variables: {
            updateUseditemQuestionInput,
            useditemQuestionId: props.el?._id,
          },
          // refetchQueries: [
          //   {
          //     query: FETCH_BOARDS_COMMENTS,
          //     variables: { boardId: router.query.boardId },
          //   },
          // ],
        });
        props.setIsEdit?.(false);
        Modal.success({ content: "댓글수정 성공" });
      } catch (error) {
        Modal.error({
          title: "댓글수정실패",
        });
      }
    }
  };

  return (
    <>
      <MarketCommentWriteUI
        UpdateCommentOnclick={UpdateCommentOnclick}
        onClickSubmit={onClickSubmit}
        isEdit={props.isEdit}
        el={props.el}
        onChangeContents={onChangeContents}
        contents={contents}
      />
    </>
  );
}
