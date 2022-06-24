import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER, // 답글 수정
} from "./itemAnswer.queries";

import { Modal } from "antd";
import MarketCommentAnswerWriteUI from "./itemAnswer.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../list/itemAnswerList.queries";

export default function MarketCommentAnswerWrite(props: any) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [contents, setContents] = useState("");

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (e: any) => {
    if (contents) {
      try {
        const result = await createUseditemQuestionAnswer({
          variables: {
            useditemQuestionId: e.target.id,
            createUseditemQuestionAnswerInput: {
              contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: e.target.id,
              },
            },
          ], // reFetch
        });
        console.log(result);
        Modal.success({
          content: "댓글이 등록되었습니다!!",
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

  const UpdateOnclick = async () => {
    if (contents) {
      try {
        if (!props.el?._id) return;
        const updateUseditemQuestionAnswerInput = {};
        if (contents) updateUseditemQuestionAnswerInput.contents = contents;
        await updateUseditemQuestionAnswer({
          variables: {
            updateUseditemQuestionAnswerInput,
            useditemQuestionAnswerId: props.el._id,
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
      <MarketCommentAnswerWriteUI
        UpdateOnclick={UpdateOnclick}
        onClickSubmit={onClickSubmit}
        id={props.id}
        isEdit={props.isEdit}
        el={props.el}
        onChangeContents={onChangeContents}
        contents={contents}
      />
    </>
  );
}
