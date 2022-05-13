import { useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

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
    // 라우터.쿼리 안에 aaa라는 변수가 들어있다.
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables:{ number: Number(router.query.aaa)}
    })
    // 주소값은 전부 Str
    console.log(data)

    return (

        <>
            <div> {router.query.aaa} 게시글 이동완료! </div>
            <div> 작성자: {data?.fetchBoard.writer}</div>
            <div> 제목: {data?.fetchBoard.title}</div>
            <div> 내용: {data? data.fetchBoard.contents : "조금만 기다려 주세요"} </div>
        </>
    )
}

// 4,5,7