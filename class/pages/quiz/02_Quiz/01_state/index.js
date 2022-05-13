// state
import { useState } from "react"
export default function MyPage(){
    const [Hello, setHello] = useState('안녕하세요')

    function Click() {
        setHello("반갑습니다")
    }

    return(
        <button onClick={Click}>{Hello}</button>
    )
}