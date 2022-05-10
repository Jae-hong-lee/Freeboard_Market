import styled from '@emotion/styled'

export const Rectangle = styled.div`
    /* background-color: tomato; */
    width: 640px;
    display: flex;
    flex-direction: column;
    border:1px solid black;
`

export const Head = styled.div`
    /* background-color: gray; */
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 40px;
    margin:0px 50px;

`

export const HeadName = styled.div`
    /* background-color: red; */
    display:flex;
    flex-direction : row;
    align-items:center;

    font-size: 24px;
`

export const Title = styled.div`
    /* background-color: yellow; */
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    margin-bottom:90px;
`
export const TitleName = styled.div`
    font-size: 30px;
    color: #cacaca;
`

export const Question = styled.div`
    /* background-color:cornflowerblue; */
    margin-left:50px;
`
export const Span = styled.div`
    font-family: SpoqaHanSans;
    font-size: 18px;
    color: #adadad;
`

export const QuestionTitle = styled.div`
    font-size: 24px;
    margin-bottom:40px;
`

export const Navigation = styled.div`
    font-size: 16px;
    color: #adadad;
    /* background-color: green; */
    display:flex;
    flex-direction:row;
    justify-content:space-around;

    margin-bottom: 20px;
`

export const NavigationBtn = styled.div`
    /* background-color: red; */
    display:flex;
    flex-direction:column;
    align-items:center;
`

// 이미지
export const ProfilePhoto = styled.img`
    width: 60px;
    height: 60px;
`