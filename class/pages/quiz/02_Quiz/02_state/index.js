import { useState } from "react"

// state
export default function MyPage(){
    const [count, setCount] = useState(0)

    function counter() {
        setCount(count+1)
    }

    return(
        
        <div>
            <div id="count">{count}</div>
            <button onClick={counter}>카운트 증가</button>
        </div>

    )
}