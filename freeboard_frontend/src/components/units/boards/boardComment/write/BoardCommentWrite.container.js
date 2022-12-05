import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.quires";
import { FETCH_BOARDS_COMMENTS } from "../list/BoardCommentList.quire";
import { Modal } from "antd";

export default function BoardCommentWrite(props) {
  const router = useRouter(3);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0); // 별점주기 ,rating: 평가하다

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
    setWriter("");
    setPassword("");
    setRating(0);
    setContents("");
  };

  const UpdateCommentOnclick = async () => {
    if (contents || password || rating) {
      try {
        if (!props.el?._id) return;
        const updateBoardCommentInput = {};
        if (contents) updateBoardCommentInput.contents = contents;
        if (rating !== props.el?.rating)
          updateBoardCommentInput.rating = rating;
        console.log(updateBoardCommentInput);
        await updateBoardComment({
          variables: {
            updateBoardCommentInput,
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
        Modal.success({ content: "댓글수정 성공" });
      } catch (error) {
        Modal.error({
          title: "댓글수정실패",
          content: "비밀번호를 확인하세요!",
        });
      }
    }
  };

  return (
    <>
      <BoardCommentWriteUI
        // test
        onClickSubmit={onClickSubmit}
        UpdateCommentOnclick={UpdateCommentOnclick}
        isEdit={props.isEdit}
        el={props.el}
        // --------------------------------------------
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        writerError={writerError}
        passwordError={passwordError}
        contentsError={contentsError}
        contents={contents}
        rating={rating}
        writer={writer}
        password={password}
        setRating={setRating}
      />
    </>
  );
}
