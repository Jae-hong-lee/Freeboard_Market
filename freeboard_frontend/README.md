ReadMe Test
![타이틀](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4a6eee8-db04-46db-a766-845cda8e12ac/Untitled.png)

# 프로젝트 소개

**(중고마켓) 중고마켓 개인프로젝트 입니다**

- Github 레포지토리(클라이언트) :

[레포지토리](https://github.com/Jae-hong-lee/Freeboard_Market/tree/master/freeboard_frontend)

# 사용한 기능

- **apollo-client**를 이용하여 백앤드 Api 와 데이터를 주고받았습니다. onError를 사용하여 refreshToken이 만료될 때까지 accessToken을 재발급 받았습니다.
- **react-hook-form**을 이용하여 불필요한 렌더링을 막아주었습니다.
- **react-hook-form**에 **yup**을 함께 사용하여 정규 표현 식을 활용한 검증 기능 로그인, 회원가입 페이지를 구현했습니다.
- **카카오 맵 API, react-daum-postcode** 연결하여 맵 API를 구현하였습니다.
- **react-slick**을 이용하여 배너와 베스트게시물, 상품 상세 이미지를 케러셀로 구현하였습니다.
- **무한스크롤, 페이지 네이션**을 이용하여 사용자 용이성에 맞게 적절히 구현하였습니다.
- **권한 분기(withAuth, useAuth)**를 활용한 accessToken 검증 및 접근 제한 기능을 구현하였습니다.
- **Recoil**을 이용하여 state를 전역으로 accessToken, Header의 장바구니 개수를 관리하였습니다.
- **브라우저 저장소** (로컬스토리지를 이용하여 장바구니 기능 구현, 세션스토리지를 이용하여 오늘 본 상품)을 구현하였습니다.
- 결제 API **아임포트**와 백앤드 API를 연결하여 결제 시스템을 구현하였습니다.
- **미디어 쿼리**를 이용하여 반응형 (모바일, 태블릿 웹 뷰)를 구현하였습니다.
- 현재 **aws, Docker**를 이용하여 동적 배포 중이며,
  **FileReader**를 활용한 이미지 최적화, **옵티미스틱UI**를 활용한 빠른 서비스,
  **OG태그와 시멘틱 태그**를 이용하여 검색엔진최적화(SEO)를 중심으로 성능 최적화를 고민하며 꾸준히 리팩토링하고 있습니다.

# 시연영상

개인프로젝트 시연 영상입니다.

모든 페이지 반응형 ( 모바일, 태블릿, 웹 ) 표준에 맞춰 제작하였습니다.
