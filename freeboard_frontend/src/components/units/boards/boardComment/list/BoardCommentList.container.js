import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARDS_COMMENTS,
  DELETE_COMMENTS,
} from "./BoardCommentList.quire";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useState } from "react";
import { Modal } from "antd";

export default function BoardCommentList() {
  const router = useRouter();
  // console.log(router.query.boardId);

  const { data } = useQuery(FETCH_BOARDS_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteComment] = useMutation(DELETE_COMMENTS);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const onChagePassword = (event) => {
    setPassword(event.target.value);
  };

  const DeleteCommentOnclick = (event) => {
    // 모달로 변경
    // const password = prompt("비밀번호를 입력해주세요!!!");
    setIsModalVisible(true);
    setAddress(event.target.id);
  };

  const onOKclick = async () => {
    try {
      await deleteComment({
        variables: {
          password,
          boardCommentId: address, // 코멘트 아이디를 받아오자
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글 삭제 완료!!",
      });
    } catch (error) {
      Modal.error({
        title: "비밀번호 틀림",
        content: "비밀번호 다시입력",
      });
    }
    setIsModalVisible(false);
  };

  const onCancelclick = () => {
    setIsModalVisible(false);
  };
  return (
    <BoardCommentListUI
      data={data}
      DeleteCommentOnclick={DeleteCommentOnclick}
      // test
      onChagePassword={onChagePassword}
      isModalVisible={isModalVisible}
      onOKclick={onOKclick}
      onCancelclick={onCancelclick}
    />
  );
}
