import { useQuery } from "@apollo/client";
import QuizPageUI from "./presenter";
import { FETCH_BOARDS } from "./queries";

export default function QuizPageContainer() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  // console.log(data);
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return <QuizPageUI data={data} loadFunc={loadFunc} />;
}
