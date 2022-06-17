import Head from "next/head";
// 헤드로 삽입하기 위해서 next에서 import

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능 스크립트를 이용해 불러오면 자동으로 IMP에 함수들이 들어가져 있다.

    IMP.init("imp07851009"); // Example: imp00000000 // 여기에 키값이 들어가야한다.

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis", // 테스트라 pg는 상관 없음
        pay_method: "card", // 결제하는 것
        // merchant_uid: "ORD20180131-0000011", // 상품 아이디, 상품 아이디를 넣고 싶다면 절대 중복되면 안댐
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // ...,
          // 결제 성공 시 로직,
          // ...

          // 백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoding 이라는 API
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다! 다시 시도해 주세요");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
        {/* SDK : 소프트웨어 개발 키트 (라이브러리 느낌.) */}
      </Head>
      <button onClick={requestPay}> 결제하기 </button>
    </>
  );
}
