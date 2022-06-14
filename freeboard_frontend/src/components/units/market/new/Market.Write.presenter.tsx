import * as MWS from "./Market.Write.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schma = yup.object({
  name: yup
    .string()
    .max(16, "이름이 너무 길어요!")
    .required("이름은 필수 입력사항입니다."),

  remarks: yup
    .string()
    .max(30, "한줄 입력해주세요")
    .required("한줄입력은 필수 입니다."),

  contents: yup.string().required("상품설명을 입력해주세요!!!"),

  price: yup
    .number()
    .typeError("숫자만 입력해줭!")
    .required("상품가격을 입력해주세요"),
});

export default function MarketWriteUI(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  return (
    <>
      <form onSubmit={handleSubmit(props.onClickCreateItem)}>
        <MWS.Wrapper>
          <MWS.WriteItemHeader>상품 등록하기 ✅</MWS.WriteItemHeader>
          <MWS.ItemNameWrapper>
            <MWS.MarketWriteLabel>상품명</MWS.MarketWriteLabel>
            <MWS.MarketWriteInput type="text" {...register("name")} />
            <MWS.Error>{formState.errors.name?.message}</MWS.Error>
          </MWS.ItemNameWrapper>

          <MWS.ItemNameWrapper>
            <MWS.MarketWriteLabel>한줄요약</MWS.MarketWriteLabel>
            <MWS.MarketWriteInput type="text" {...register("remarks")} />
            <MWS.Error>{formState.errors.remarks?.message}</MWS.Error>
          </MWS.ItemNameWrapper>
          {/* Text Editor?? */}
          <MWS.ItemNameWrapper>
            <MWS.MarketWriteLabel>상품설명</MWS.MarketWriteLabel>
            <MWS.MarketWriteInput type="text" {...register("contents")} />
            <MWS.Error>{formState.errors.contents?.message}</MWS.Error>
          </MWS.ItemNameWrapper>

          <MWS.ItemNameWrapper>
            <MWS.MarketWriteLabel>판매가격</MWS.MarketWriteLabel>
            <MWS.MarketWriteInput type="text" {...register("price")} />
            <MWS.Error>{formState.errors.price?.message}</MWS.Error>
          </MWS.ItemNameWrapper>

          <MWS.ItemNameWrapper>
            <MWS.MarketWriteLabel>태그입력</MWS.MarketWriteLabel>
            <MWS.MarketWriteInput type="text" />
            <MWS.Error>Error 태그</MWS.Error>
          </MWS.ItemNameWrapper>
          <div>
            <MWS.KaKaoMapWrapper>
              <MWS.MarketWriteLabel>거래위치</MWS.MarketWriteLabel>
              <MWS.kakaoMap>KakaoMap</MWS.kakaoMap>
            </MWS.KaKaoMapWrapper>

            <MWS.AddressWrapper>
              <div>
                <MWS.MarketWriteLabel>GPS</MWS.MarketWriteLabel>
                <div>위도</div>
                <div>경도</div>
              </div>
              <div>
                <MWS.MarketWriteLabel>사진 첨부</MWS.MarketWriteLabel>
                <div>
                  <div>+</div>
                  <div>Upload</div>
                </div>
              </div>
            </MWS.AddressWrapper>
          </div>

          <div>
            <MWS.MarketWriteLabel>메인 사진 설정</MWS.MarketWriteLabel>
          </div>

          <MWS.CreateItemBtn isActive={formState.isValid}>
            등록하기
          </MWS.CreateItemBtn>
        </MWS.Wrapper>
      </form>
    </>
  );
}
