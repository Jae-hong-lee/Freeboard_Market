import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LOGEOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const Wrapper = styled.div`
  height: 30px;
  width: 100%;
`;
const NavigationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ListWrapper = styled.div``;
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
  width: 15%;
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
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  // state 만들고 초기값 false 온클릭 발생할때 스테이트 바뀌게 true
  // true 일떄 색깔이 바뀌는걸 style에..
  // const [isBold, setIsBold] = useState(["", "1", "", ""]);
  // 재렌더링 너무 많을거 같음.
  const onClickGoList = () => {
    router.push("/boarder/list");
  };

  const onClickGoMarket = () => {
    router.push("/market/list");
  };
  const onClickGoMypage = () => {
    router.push("/");
    // 마이페이지로 이동
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
  // logoutUser
  const [logoutUser] = useMutation(LOGEOUT_USER);

  const onClickLogOut = async () => {
    try {
      const result = await logoutUser();
      setAccessToken("");
      localStorage.setItem("accessToken", "");
      console.log(result);
      router.push("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Wrapper>
        <NavigationWrapper>
          {data ? (
            <SiteName>
              {data?.fetchUserLoggedIn?.name.slice(0, 5)}님 환영합니다.
              <LoginPage onClick={onClickLogOut}>로그아웃</LoginPage>
            </SiteName>
          ) : (
            <SiteName>
              <SingUpPage onClick={onClickSingUpMove}>회원가입</SingUpPage>
              <LoginPage onClick={onClickLoginMove}>로그인</LoginPage>
            </SiteName>
          )}
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
