import axios from 'axios' 
import { useState } from 'react'

export default function RestGetPage() {

    const [data, setData] = useState("")

    const onClickRestApi = async(event) =>{
 
        const result = await axios.get("https://koreanjson.com/users")
        // console.log(result)
        setData(result.data.name)

    }

    return(

        <div>
            <div>{data}</div>
            <button onClick={onClickRestApi}> REST-API 요청하기</button>
        </div>

    )
}