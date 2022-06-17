import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const AmountBtn = styled.div`
  border: 1px solid black;
  width: 50px;
  margin: 20px 20px;
`;
export default function PaymentLoading() {
  const router = useRouter();
  const [point, setPoint] = useState("");
  const param = {
    pg: "html5_inicis",
    pay_method: "card",
    name: "패스트파이브",
    amount: point,
    buyer_email: "gildong@gmail.com",
    buyer_name: "이재홍",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181",
  };
  const onClickBtnLoading = (e: any) => {
    setPoint(e.target.innerText);
    console.log(point);
  };
  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp07851009");

    IMP.request_pay(param, function (rsp: any) {
      if (rsp.success) {
        console.log(rsp);
        router.push("/quiz/28_quiz/payment/complete");
        // 결제 성공 시 로직,
      } else {
        // 결제 실패 시 로직,
        alert("결제에 실패했습니다! 다시 시도해 주세요");
      }
    });
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <AmountBtn onClick={onClickBtnLoading} id="500">
        500
      </AmountBtn>
      <AmountBtn onClick={onClickBtnLoading} id="1000">
        1000
      </AmountBtn>
      <AmountBtn onClick={onClickBtnLoading} id="2000">
        2000
      </AmountBtn>
      <AmountBtn onClick={onClickBtnLoading} id="5000">
        5000
      </AmountBtn>
      <button onClick={requestPay}> 충전하기 </button>
    </div>
  );
}
