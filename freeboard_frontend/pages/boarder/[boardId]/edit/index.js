import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"
import CreateBoardPage from "../../../../src/components/units/boards/news/Write.container"
//fetchBoard
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
    }
  }
`;
export default function BoardEditPage() {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId : router.query.boardId}
    })


    return <CreateBoardPage isEdit ={true} data = {data}/>
}