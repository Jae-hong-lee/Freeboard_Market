import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARDS_COMMENTS } from "../list/BoardCommentList.quire";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.quires";
import { Modal } from "antd";

export default function BoardCommentWrite(props) {
  const router = useRouter(3);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3); // 별점주기 ,rating: 평가하다

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (!event.target.value) {
      setWriterError("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (!event.target.value) {
      setPasswordError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (!event.target.value) {
      setContentsError("");
    }
  };
  // 별점
  const onChangeStar = (value) => {
    setRating(value);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (!contents) {
      setContentsError("내용를 입력해주세요");
    }
    if (writer && password && contents) {
      try {
        const result = await createBoardComment({
          variables: {
            boardId: router.query.boardId,
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARDS_COMMENTS,
              variables: {
                boardId: router.query.boardId,
              },
            },
          ], // reFetch
        });
        // location.reload(); // 페이지 새로고침
        console.log(result);
        Modal.success({
          content: "댓글이 등록되었습니다!!",
        });
      } catch (error) {
        Modal.error({
          title: "댓글등록 실패!!!",
          content: "댓글 등록에 실패했습니다.",
        });
      }
    }
  };

  const UpdateCommentOnclick = async () => {
    if (!contents) {
      alert("내용수정 X");
    }
    if (!password) {
      alert("패스워드 입력 x");
    }
    try {
      // if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents },
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
      console.log("성공");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardCommentWriteUI
        // test
        onClickSubmit={onClickSubmit}
        UpdateCommentOnclick={UpdateCommentOnclick}
        isEdit={props.isEdit}
        // ----
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        writerError={writerError}
        passwordError={passwordError}
        contentsError={contentsError}
        contents={contents}
        rating={rating}
        onChangeStar={onChangeStar}
      />
    </>
  );
}
