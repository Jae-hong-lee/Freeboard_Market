import { useRouter } from 'next/router'
import BoardWriteUI from './boardWrite.presenter'

export default function StaticRoutingPage(){

    const onClickMove = () =>{
        router.push('/quiz/06_quiz_02/4')
    }
    const onClickMove2 = () =>{
        router.push('/quiz/06_quiz_02/5')
    }

    const onClickMove3 = () =>{
        router.push('/quiz/06_quiz_02/7')
    }

    const router = useRouter()
    
    return (
        <BoardWriteUI 
          onClickMove = {onClickMove}
          onClickMove2 = {onClickMove2}
          onClickMove3 = {onClickMove3}
        />
    )
}