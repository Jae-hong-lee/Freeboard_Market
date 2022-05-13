import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
// 호이스팅에서 선언식보다 표현식이 안전성이 있다. 화살표함수가 더 간단해서 쓴다.
    const onClickMove = () =>{
        router.push('/05-02-static-routed')
    }

    const router = useRouter()
    return (

        <>
            <button onClick={onClickMove}> 페이지를 이동합니다.</button>
        </>
    )
}