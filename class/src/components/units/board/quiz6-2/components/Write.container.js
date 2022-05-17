import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

import { FETCH_BOARD } from './Write.queries'
import WriteUI from './Write.presenter'

export default function WriteContainerPage(){
    const router = useRouter()
    // console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables:{number:Number(router.query.number)}
    })

    return (
        <WriteUI 
            data={data}
        />
    )
}
