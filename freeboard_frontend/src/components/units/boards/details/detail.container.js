import { useQuery,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import DetailUI from './detail.presenter';
import { FETCH_BOARD,DELETE_BOARD } from './detail.fetch.board';
import { useMutation} from "@apollo/client"

export default function DetailBoardPage(){

  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables:{boardId: router.query.boardId}
  })
  // 목록이동
  const onClickMoveBoardList = () => {
    router.push('/boarder/list')
  };
  const onClickEditBoard = () => {
    router.push(`/boarder/${router.query.boardId}/edit`)
  }


  const [deleteBoard] = useMutation(DELETE_BOARD)
  const DeleteButtonClick = async() => {
    try {
        await deleteBoard({
            variables: {boardId: router.query.boardId }
        })
        alert("삭제")
        router.push('/boarder/list')
    } catch (error) {
        alert(error.message)
    }
}


  return(

    <DetailUI
      data = {data} 
      onClickMoveBoardList = {onClickMoveBoardList}
      onClickEditBoard = {onClickEditBoard}
      DeleteButtonClick = {DeleteButtonClick}
    />

  )
}