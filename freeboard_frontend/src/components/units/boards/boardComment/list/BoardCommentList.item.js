import * as BC from "./BoardCommentList.style";
import { getDate } from "../../../../../commons/libraries/utils";
import { Rate, Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_COMMENTS,
  FETCH_BOARDS_COMMENTS,
} from "./BoardCommentList.quire";
import { useRouter } from "next/router";

export default function BoardCommentListItemUI(props) {
  const router = useRouter();
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onDeleteClick = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      Modal.success({
        content: "댓글삭제 완료!!",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const handleCancel = () => {
    setIsOpenModel(false);
  };
  const onClickDeleteModel = () => {
    setIsOpenModel(true);
  };
  const onChangeDeletePW = (event) => {
    setPassword(event.target.value);
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
                <BC.Writer>{props.el?.writer}</BC.Writer>
                {/* 별점 */}
                <Rate value={props.el?.rating} disabled />
              </BC.WriteRatingWrapper>
              {/* 수정 삭제 */}
              <BC.BtnWrapper>
                <BC.DeleteBtn
                  src="/images/Delete.png"
                  onClick={onClickDeleteModel}
                />
                {/* 모달버튼 */}
                {isOpenModel && (
                  <Modal
                    visible={true}
                    onOk={onDeleteClick}
                    onCancel={handleCancel}
                  >
                    비밀번호 입력:
                    <input type="password" onChange={onChangeDeletePW} />
                  </Modal>
                )}
                {/* 수정  props 로 함수 받기 */}
                <BC.EditBtn src="/images/Edit.png" onClick={onClickEdit} />
              </BC.BtnWrapper>
            </BC.WriterWrapper>
            <BC.Footer>
              <BC.Contents>{props.el?.contents}</BC.Contents>
              <BC.Date>{getDate(props.el?.createdAt)}</BC.Date>
            </BC.Footer>
          </BC.CommentWrapper>
        </BC.Wrapper>
      )}

      {/* isEdit 이 true 일때  */}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
