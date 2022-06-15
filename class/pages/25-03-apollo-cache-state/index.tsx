import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: {
        boardId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
                // el._id가 안되므로, readField에서 꺼내오기.
              );
              // deletedId가 아닌 것들!
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "응이니히기니디ㅣ리",
          password: "1234",
          title: "제목입니다",
          contents: "내용이엥용오옹",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </MyRow>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
