import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  /* background-color: yellow; */
  height: 30px;
  width: 100%;
`;
const NavigationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  /* background-color: blue; */
`;
const ClickSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  :hover {
    color: cornflowerblue;
  }
`;
const ClickSpanAPI = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  :hover {
    color: cornflowerblue;
  }
`;

const SiteName = styled.div`
  width: 10%;
  font-size: 15px;
  font-weight: 700;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LoginPage = styled.div`
  :hover {
    color: cornflowerblue;
  }
`;
const SingUpPage = styled.div`
  :hover {
    color: cornflowerblue;
  }
`;
export default function LayoutNavigation() {
  const router = useRouter();

  const onClickGoList = () => {
    router.push("/boarder/list");
  };
  const onClickGoMarket = () => {
    router.push("/");
    // 수정필요
  };
  const onClickGoMypage = () => {
    router.push("/");
    // 수정필요
  };
  const onClickAPI = () => {
    router.push("/boarder/CoffeeAPI");
  };

  const onClickLoginMove = () => {
    router.push("/Login");
  };
  const onClickSingUpMove = () => {
    router.push("/Signup");
  };
  return (
    <>
      <Wrapper>
        <NavigationWrapper>
          <SiteName>
            <SingUpPage onClick={onClickSingUpMove}>회원가입</SingUpPage>
            <LoginPage onClick={onClickLoginMove}>로그인</LoginPage>
          </SiteName>
          <ListWrapper>
            <ClickSpan onClick={onClickGoList}>게시판 목록 </ClickSpan> |
            <ClickSpan onClick={onClickGoMarket}> 중고마켓 </ClickSpan> |
            <ClickSpan onClick={onClickGoMypage}> 마이페이지</ClickSpan> |
            <ClickSpanAPI onClick={onClickAPI}> 뭐 먹을까?</ClickSpanAPI>
          </ListWrapper>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}
