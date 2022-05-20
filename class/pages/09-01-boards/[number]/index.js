import { useRouter } from 'next/router'
import { useQuery, gql} from '@apollo/client'
const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutedPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables:{ number: Number(router.query.number)}
    })

    console.log(data)
    const onClickMoveToEdit = () =>{
      router.push(`/09-01-boards/${router.query.number}/edit`)
    }

    return (

        <>
            <div> {router.query.number} 게시글 이동완료! </div>
            <div> 작성자: {data?.fetchBoard.writer}</div>
            <div> 제목: {data?.fetchBoard.title}</div>
            <div> 내용: {data? data.fetchBoard.contents : "조금만 기다려 주세요"} </div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}
