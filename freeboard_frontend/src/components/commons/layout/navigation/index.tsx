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
  font-size: 30px;
  font-weight: 700;
  margin-left: 100px;
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
  return (
    <>
      <Wrapper>
        <NavigationWrapper>
          <SiteName>Site Name</SiteName>
          <ListWrapper>
            <ClickSpan onClick={onClickGoList}>게시판 목록 |</ClickSpan>
            <ClickSpan onClick={onClickGoMarket}> 중고마켓 |</ClickSpan>
            <ClickSpan onClick={onClickGoMypage}> 마이페이지 |</ClickSpan>
            <ClickSpanAPI onClick={onClickAPI}> 뭐 먹을까?</ClickSpanAPI>
          </ListWrapper>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}
