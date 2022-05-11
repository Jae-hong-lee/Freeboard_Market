import { useState } from "react"

export default function SignUpForm() {
    
    const [ id, setid ] = useState("")
    const [ pw, setpw ] = useState("")
    const [ pw2, setpw2] = useState("")

    const [errorId, setErroId] = useState("")
    const [errorPw, setErroPw] = useState("")

    function handleChangeId(event) {
        setid(event.target.value)
    }
    function handleChangePw(event) {
        setpw(event.target.value)
    }
    function handleChangePw2(event) {
        setpw2(event.target.value)
    }

    function onClickSingup() {

        if (id.includes('@') === false) {
            setErroId("이메일이 아닙니다.")
        }
        if (pw !== pw2 ) {
            setErroPw("비밀번호가 다릅니다.")
        }

        // 발생한 에러를 빨간색으로 입력창 하단에 표시
    }
    return(

        <div>
            <h1>로그인</h1>

            <div>이메일</div>
            <input id="tag" type="text" onChange={handleChangeId}/>
            
            <div style={{color: 'red'}}>{errorId}</div>

            <div>비밀번호</div>
            <input id="tag" type="password" onChange={handleChangePw}/>
            <div style={{color: 'red'}}>{errorPw}</div>

            <div>비밀번호확인</div>
            <input id="tag" type="password" onChange={handleChangePw2}/>
            <div style={{color: 'red'}}>{errorPw}</div>
            <br/>

            <button onClick={onClickSingup}>가입하기</button>
        </div>
    )
    
}

// 4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
//           ⇒ 조건1) 이메일에 @가 없으면 에러입니다. includes
//           ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다. password === password2
//           ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.  
// if not false {setState } 다 발동 빈칸.

// 4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.
//<div style={{color: 'red'}}>{errorId}</div>        Error state만들기