import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer} </div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* 삼항연산자로 판단 window가 있을때 */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
        // 가짜 태그.
      )}

      <div style={{ color: "brown" }}>상품가격!</div>
    </div>
  );
}
