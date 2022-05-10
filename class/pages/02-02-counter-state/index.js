// state
import {useState} from 'react'


export default function CounterStatePage() {
    
    const [ count, setCount ] = useState(0)
    // state 변수만들기 - 변수명, 변수바꾸기, 변수만들기(초기값)

    
    function counter() {
        setCount(count + 1)
    }

    return(
        <div>
            <div id="count"> {count} </div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>

    )
}