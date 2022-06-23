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

export default function MarketCommentListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
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
              </BC.BtnWrapper>
            </BC.WriterWrapper>
            <BC.Footer>
              <BC.Contents>{props.el?.contents}</BC.Contents>
            </BC.Footer>
          </BC.CommentWrapper>
        </BC.Wrapper>
      )}

      {/* isEdit 이 true 일때  */}
      {isEdit && (
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
