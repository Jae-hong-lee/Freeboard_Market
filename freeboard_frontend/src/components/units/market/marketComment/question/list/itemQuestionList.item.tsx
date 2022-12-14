import * as BC from "./itemQuestionList.style";
import MarketCommentWrite from "../write/itemQuestion.container";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./itemQuestionList.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import MarketCommentAnswerWrite from "../../answer/write/itemAnswer.container";
import MarketAnswerList from "../../answer/list/itemAnswerList.container";

export default function MarketCommentListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();
  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDel = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
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
      Modal.success({ title: "댓글삭제성공" });
    } catch (error) {
      Modal.error({ title: "댓글삭제실패!" });
    }
  };

  const onClickToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <BC.Wrapper>
          <BC.CommentWrapper key={props.el?._id}>
            {/* 헤더 */}
            <BC.WriterWrapper>
              <BC.WriteRatingWrapper>
                <BC.ProfileImg src="/images/Profile.png" />
                <BC.Writer>{props.el?.user.name}</BC.Writer>
              </BC.WriteRatingWrapper>
              {/* 수정 삭제 */}
              <BC.BtnWrapper>
                <BC.DeleteBtn src="/images/Delete.png" onClick={onClickDel} />
                {/* 수정  props 로 함수 받기 */}
                <BC.EditBtn src="/images/Edit.png" onClick={onClickEdit} />
                <button onClick={onClickToggle}>질문답변하기</button>
              </BC.BtnWrapper>
            </BC.WriterWrapper>
            <BC.Footer>
              <BC.Contents>{props.el?.contents}</BC.Contents>
            </BC.Footer>
          </BC.CommentWrapper>
          {isToggle && <MarketCommentAnswerWrite id={props.el._id} />}
          <MarketAnswerList id={props.el._id} />
        </BC.Wrapper>
        // { isToggle && 댓글답변토글, 답변리스트}
      )}

      {/* isEdit 이 true 일때  */}
      {isEdit && (
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
        // { !isToggle && 댓글답변토글, 답변 리스트}
      )}
      {isEdit && <MarketAnswerList id={props.el._id} />}
    </>
  );
}
