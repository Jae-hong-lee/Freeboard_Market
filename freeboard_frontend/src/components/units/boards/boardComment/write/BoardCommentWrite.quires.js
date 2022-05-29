import { gql } from "@apollo/client";

// createBoardComment
export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $boardId: ID!
    $createBoardCommentInput: CreateBoardCommentInput!
  ) {
    createBoardComment(
      boardId: $boardId
      createBoardCommentInput: $createBoardCommentInput
    ) {
      _id
      writer
      contents
      rating
    }
  }
`;

// updateBoardComment
export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $password: String
    $boardCommentId: ID!
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    _id
    writer
    contents
    rating
  }
`;
