import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
// 호이스팅에서 선언식보다 표현식이 안전성이 있다. 화살표함수가 더 간단해서 쓴다.
    const onClickMove = () =>{
        router.push('/05-04-static-routed-board/4')
    }
    const onClickMove2 = () =>{
        router.push('/05-04-static-routed-board/5')
    }

    const onClickMove3 = () =>{
        router.push('/05-04-static-routed-board/7')
    }

    const router = useRouter()
    return (
        <> 
            <button onClick={onClickMove}> 4 게시글로 이동합니다.</button> <br/><br/>
            <button onClick={onClickMove2}>5 게시글로 이동합니다.</button> <br/><br/> 
            <button onClick={onClickMove3}>7 게시글로 이동합니다.</button> 
        </>
    )
}