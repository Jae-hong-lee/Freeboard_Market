import BoardWrite from "../../../../src/components/units/board/10-write/boardWrite.container"
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

export default function BoardsEditPage() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables:{ number: Number(router.query.number)}
    })


    // data.fetchBoard.writer 에 데이터가 있는 것임
    return (

        <BoardWrite isEdit={true}
        boardData = {data}
        />
    )

}