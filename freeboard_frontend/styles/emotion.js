import styled from '@emotion/styled'


export const Box = styled.div`
    width: 1200px;
    /* background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    display:flex;
    flex-direction: column; */
    border: 1px solid black;
    margin: 100px;
    padding: 80px 102px 100px 102px ;
    display:flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const Title = styled.h1`
    /* font-weight: 700;
    font-size: 36px;
    text-align: center;
    color : black;
    padding-top: 60px; */
    /* background-color : yellow; */
    font-family:Arial, Helvetica, sans-serif;
    /* 찾아보기 */
    font-size: 36px;
    font-weight: bold;
`

// 유저
export const UserWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding-bottom: 80px; */
    padding-top:40px;
`
export const NameInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 486px;
    height: 52px;
    /* margin-right:12px; */
    padding-left: 16px;
`
export const PasswordInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 486px;
    height: 52px;
    /* margin-right:12px; */
    padding-left: 16px;
`
/* 패딩이나 마진 값 줄때 하나로 통일하기 */

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`
export const InputWrapper = styled.div`
    padding-top: 40px;
`;

// ---------


// 제목

export const Contents = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    padding: 14px;
    border: 1px solid #bdbdbd;
`
// 주석처리하기
export const TitleInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 996px;
    height: 52px;
    /* margin-bottom:30px */
`
// 내용
export const ContentText = styled.input`
    /* width: 996px;
    height: 480px;
    background: #FFFFFF;
    border: 1px solid #BDBDBD; */
        /* 패딩주기 */
    width: 996px;
    height: 480px;
    padding-left: 16px;
    padding: 14px;
    border: 1px solid #bdbdbd;
`

// 주소
export const AddressBtn = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    background-color: black;
    cursor: pointer;
    color: white;
`
export const AddressInput = styled.input`
    width: 77px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    /* border: 1px solid #BDBDBD; */
`
export const Title2Input = styled.input`
    /* border: 1px solid #BDBDBD;
    width: 996px;
    height: 52px;
    margin-bottom:15px; */
        /* 패딩주기 */
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`
export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

// 유튜브

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

// 사진
export const ImageWrapper = styled.div`
    width: 996px;
    padding-top:40px;
`

export const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    margin-right: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    /* 포인터... */
`
// 메인설정
export const OptionWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`

export const RadioButton = styled.input`
    cursor: pointer;
`;

// 인라인 요소 label
export const RadioLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`;

// 버튼
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;

    background-color: #FFD600;
`;
