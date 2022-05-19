import styled from '@emotion/styled'


export const Box = styled.div`
  width: 1200px;
  margin: 100px;
`
export const Wrapper = styled.div`

  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  margin-bottom:40px;
  /* background-color: #FFBEFF; */
`;
// Writer
export const WriterRapper = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  /* background-color: greenyellow; */
  
`
// Profile
export const WriterProfile = styled.div`
  /* background-color: #DCAD67; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ProfileTitle = styled.div`
  /* background-color: #00D7FF; */
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  
`
export const ProfileImg = styled.img`
  width: 46px;
  height: 46px;
  margin-right:16px;
`
export const ProfileName = styled.div`
  font-weight: 500;
  font-size: 24px;
`
export const ProfileDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`


// Link
export const WrapperLink = styled.div`
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`

export const LinkImage = styled.img`
  width: 26px;
  height: 13px;
  margin-right:25px;
`
export const LinkGPS = styled.img`
  width: 32px;
  height: 32px;
`
// Line
export const DivideLine = styled.div`
  border-top: 1px solid gray;
  width:100%;
  margin: 20px 0px 40px ;

`
// Title
export const Title = styled.div`
  /* background-color: tomato; */
  text-align: start;
  width:100%;
  margin-bottom:40px;
`
export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 36px;
  /* background-color: cadetblue; */
`
// IMG
export const ContentImage = styled.div`
  width: 996px;
  height: 480px;
  left: 474px;
  top: 1024px;
  background-color: gray;
  margin-bottom:40px;
`
// Contents
export const Contents = styled.div`
  font-size: 16px;
  margin-bottom:120px;
`


// Youtube
export const ContentYoutube = styled.div`
  width: 486px;
  height: 240px;
  left: 729px;
  top: 1760px;
  background-color: gray;
  margin-bottom:160px;
`
// Like Wrapper
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction : row;
  
`
// Like
export const LikeContent = styled.div`
  display:flex;
  flex-direction: column;
  margin-right:20px;
  width:50px;
  height:50px;

`;
export const LikeImg = styled.img`
  width: 20px;
  height: 20px;
`
export const LikeCount = styled.span`
  font-size: 18px;
`
// Dlike
export const DLlikeContent = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:20px;

`
export const DlikeImg = styled.img`
  width: 20px;
  height: 20px;
`
export const DlikeCount = styled.span`
  font-size: 18px;
`

// ButtonList
export const ButtonWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  /* background-color:green; */
`

export const Button = styled.button`
  width:180px;
  height: 45px;
  border-radius:50%;
  text-align:center;
  margin: 0px 12px;
  background-color: #DDDDDD98;
  cursor: pointer;

`