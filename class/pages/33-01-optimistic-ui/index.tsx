import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

// 좋아요 카운트 올리는 api
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62b3c48d03610b0029990501" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "62b3c48d03610b0029990501",
      },
      // 응답을 받고난 후 받아온 응답을 다시 fetch 해줍니다.
      //  -> 느리고 효율적이지 못합니다.(백엔드에 요청을 한번더 해야하고 받아올때 까지 기다려야 합니다.)
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "62b3c48d03610b0029990501" },
      //   },
      // ],

      // 옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줌
      // 현재 좋아요 수  + 1 , 만약에 좋아요가 없다면 0으로.
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      // apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: {
            boardId: "62b3c48d03610b0029990501",
          },
          // id,__typename 가 반드시 들어가야한다.
          data: {
            fetchBoard: {
              likeCount: data.likeBoard,
              _id: "62b3c48d03610b0029990501",
              __typename: "Board",
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>옵티미스틱 UI</h1>
      <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>조항요!!</button>
    </>
  );
}
