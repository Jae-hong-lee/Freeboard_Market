import {
  ProfilePhoto,
  Rectangle,
  Head,
  HeadName,
  Title,
  TitleName,
  Question,
  Span,
  QuestionTitle,
  Navigation,
  NavigationBtn,
} from "../../../../freeboard_frontend/styles/emotion2";

export default function MyPage() {
  // 여기는 자바스크립트 쓰는 곳
  // 틀 다시잡기.
  return (
    // 여기는 HTML
    // Rectangle
    <Rectangle>
      {/* head */}
      <Head>
        <div>
          <h3>마이</h3>
        </div>
        <HeadName>
          <ProfilePhoto className="phoneImage" src="/images/Profile.png" />
          임정아
          <img src="/images/arrow.png" />
        </HeadName>
      </Head>
      {/* title? */}
      <Title>
        <TitleName>공지사항</TitleName>
        <TitleName>이벤트</TitleName>
        <TitleName>FAQ</TitleName>
        <TitleName>Q&A</TitleName>
      </Title>
      {/* list span, Question 묶고 이미지 추가? */}
      <Question>
        <Span>Q. 01</Span>
        <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
        <Span>Q. 02</Span>
        <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
        <Span>Q. 03</Span>
        <QuestionTitle>아이디/비밀번호를 잊어버렸어요.</QuestionTitle>
        <Span>Q. 04</Span>
        <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
        <Span>Q. 05</Span>
        <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
        <Span>Q. 06</Span>
        <QuestionTitle>비밀번호를 변경하고 싶어요</QuestionTitle>
      </Question>
      {/* footer */}
      <Navigation>
        {/* 네비게이션 바 */}

        <NavigationBtn>
          <img src="/images/home.png" />홈
        </NavigationBtn>
        <NavigationBtn>
          <img src="/images/location.png" />
          잇츠로드
        </NavigationBtn>
        <NavigationBtn>
          <img src="/images/heart.png" />
          마이찜
        </NavigationBtn>
        <NavigationBtn>
          <img src="/images/selected.png" />
          마이
        </NavigationBtn>
      </Navigation>
    </Rectangle>
  );
}
