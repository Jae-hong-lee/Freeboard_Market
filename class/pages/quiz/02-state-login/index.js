import { Box, Email, Head, Kakao, KakaoLogin, Login, LoginButton, SignMenu, Wrapper } from "../../../styles/emotion2"

export default function name(params) {
    
    return(
        // BOX
        <Box>
            {/* Wrapper */}
            <Wrapper>
                {/* Head */}
                <Head>
                    {/* <img>잇츠로드 아이콘</img> */}
                    <div>이미지</div>
                    <h1>잇츠로드</h1>
                </Head>

                {/* email */}
                <Email>
                    <div>
                        <input type='text'/> <br/>
                    </div>
                    <label>error메세지</label>
                    <div>
                        <input type='password'/> <br/>
                    </div>
                    <label>error메세지</label>
                </Email>

                {/* button */}
                <Login>
                    <LoginButton>로그인</LoginButton>
                </Login>
                {/* menu */}
                <SignMenu>
                    <div>이메일 찾기</div>
                    <div>ㅣ</div>
                    <div>비밀번호 찾기</div>
                    <div>ㅣ</div>
                    <div>회원가입</div>
                </SignMenu>

                {/* button kakao */}
                <Kakao>
                    <KakaoLogin>카카오톡으로 로그인</KakaoLogin>
                </Kakao>

            </Wrapper>
            

            
        </Box>

    )
}