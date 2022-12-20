# 프로젝트 소개

![image](https://user-images.githubusercontent.com/72030487/205590744-61dc7d15-3a19-4586-ae16-26bb3cb5a5e0.png)

### 중고마켓&게시판 개인프로젝트 입니다

# 사용한 기능

- **apollo-client**를 이용하여 백앤드 Api 와 데이터를 주고받았습니다. onError를 사용하여 `refreshToken`이 만료될 때까지 `accessToken`을 재발급 받았습니다.
- **react-hook-form**을 이용하여 불필요한 렌더링을 막아주었습니다.
- **react-hook-form**에 **yup**을 함께 사용하여 정규 표현 식을 활용한 검증 기능 로그인, 회원가입 페이지를 구현했습니다.
- **카카오 맵 API, react-daum-postcode** 연결하여 맵 API를 구현하였습니다.
- **react-slick**을 이용하여 배너와 베스트게시물, 상품 상세 이미지를 케러셀로 구현하였습니다.
- **무한스크롤, 페이지 네이션**을 이용하여 사용자 용이성에 맞게 적절히 구현하였습니다.
- **권한 분기(withAuth, useAuth)**를 활용한 `accessToken` 검증 및 접근 제한 기능을 구현하였습니다.
- **Recoil**을 이용하여 state를 전역으로 `accessToken`, `Header`의 장바구니 개수를 관리하였습니다.
- **브라우저 저장소** (로컬스토리지를 이용하여 장바구니 기능 구현, 세션스토리지를 이용하여 오늘 본 상품)을 구현하였습니다.
- 결제 API **아임포트**와 백앤드 API를 연결하여 결제 시스템을 구현하였습니다.
- **미디어 쿼리**를 이용하여 반응형 (모바일, 태블릿 웹 뷰)를 구현하였습니다.
- 현재 **AWS, Docker**를 이용하여 동적 배포 중이며,
  **FileReader**를 활용한 이미지 최적화, **옵티미스틱UI**를 활용한 빠른 서비스,
  **OG태그와 시멘틱 태그**를 이용하여 검색엔진최적화(SEO)를 중심으로 성능 최적화를 고민하며 꾸준히 리팩토링하고 있습니다.

---

# 시연영상

개인프로젝트 시연 영상입니다.
모든 페이지 반응형 ( 모바일, 태블릿, 웹 ) 표준에 맞춰 제작하였습니다.

### 💻회원가입

![회원가입](https://user-images.githubusercontent.com/72030487/208620064-a9e7d894-3197-4fa7-af30-e449dfbf997e.png)

### 💻로그인

![로그인](https://user-images.githubusercontent.com/72030487/208620302-9f0367f5-8a23-4154-9567-ccdd6188f904.png)

### 💻중고마켓 메인페이지

![중고마켓메인-min](https://user-images.githubusercontent.com/72030487/205592665-ae0532d4-5e75-46a7-94e0-61c54376f202.gif)

### 💻중고마켓 상품등록

![중고마켓등록1-min](https://user-images.githubusercontent.com/72030487/205592822-ad00394a-883f-4de9-aa94-b79382e590c3.gif)
![중고마켓등록2-min](https://user-images.githubusercontent.com/72030487/205592894-6eca1cc3-8a3e-4f1f-a609-bdd7126de9cf.gif)

### 💻중고마켓 상세페이지

![중고마켓 디테일-min](https://user-images.githubusercontent.com/72030487/205593022-55a695ae-3cd4-4ea1-9d8a-a79b5ccc2527.gif)

### 💻중고마켓 상품수정

![상품수정1-min](https://user-images.githubusercontent.com/72030487/205593166-c6da7c45-a369-45f1-999d-4b79f2db6e02.gif)
![상품수정2-min](https://user-images.githubusercontent.com/72030487/205593173-eb5cfa49-7254-4085-85f9-3deb3104c3fe.gif)

### 💻중고마켓 포인트충전

![포인트충전1-min](https://user-images.githubusercontent.com/72030487/205593300-935d3da0-b25d-42dd-a197-ffd4c9bcc2f1.gif)
![포인트충전2-min](https://user-images.githubusercontent.com/72030487/205593307-0e94b297-7891-45a4-a4e8-463205399207.gif)

### 💻결제하기

![결제하기-min](https://user-images.githubusercontent.com/72030487/205593445-646cb146-89a0-49cb-8785-2390740e1eaf.gif)

### 💻게시판 리스트페이지

![게시판List-min](https://user-images.githubusercontent.com/72030487/205593545-532bfab8-12ba-4455-851e-ba48f3bdd4e3.gif)

### 💻게시글 등록하기

![게시글등록-min](https://user-images.githubusercontent.com/72030487/205593695-f7c7cf6b-bf53-4d8c-a669-8fd4bfc79d33.gif)
![게시글등록2-min](https://user-images.githubusercontent.com/72030487/205593702-70e70597-c98c-4e41-9982-37edc73a06f2.gif)

### 💻게시글 수정하기

![게시물수정1-min](https://user-images.githubusercontent.com/72030487/205593828-4f549d04-a66a-40b1-9977-6259c47aa7c0.gif)

### 💻게시글 디테일(삭제)

![게시글삭제-min](https://user-images.githubusercontent.com/72030487/205593955-16d1a14c-be6d-4807-a5b8-025b6ada4904.gif)

### 💻댓글CRUD

![댓글등록삭제-min](https://user-images.githubusercontent.com/72030487/205594202-4ec755e2-31f0-4fbe-a5e7-2b1367235a5c.gif)
![댓글수정-min](https://user-images.githubusercontent.com/72030487/205594232-7eaf8813-3552-4653-ab37-bf0d48d4b397.gif)
