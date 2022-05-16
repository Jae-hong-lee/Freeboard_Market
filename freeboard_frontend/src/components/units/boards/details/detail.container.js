import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

import DetailUI from './detail.presenter';
import { FETCH_BOARD } from './detail.fetch.board';

export default function DetailBoardPage(){

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables:{boardId: `${router.query.boardId}`}
  })
  

  return(

    <DetailUI
      data = {data} 
    />

  )
}