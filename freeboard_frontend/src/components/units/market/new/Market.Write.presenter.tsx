import * as MWS from "./Market.Write.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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
    .typeError("숫자만 입력해주세요")
    .required("상품가격을 입력해주세요"),
});

export default function MarketWriteUI(props) {
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  const onChangeContents = (v: string) => {
    setValue("contents", v === "<p><br></p>" ? "" : v);
    trigger("contents");
  };
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
            {/* Web-Editor */}
            <ReactQuill
              style={{ height: "300px", marginBottom: "50px" }}
              onChange={onChangeContents}
            />
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
            {/* 태그 에러? */}
            <MWS.Error></MWS.Error>
          </MWS.ItemNameWrapper>

          <MWS.AddressWrapper>
            <MWS.KaKaoMapWrapper>
              <MWS.MarketWriteLabel>거래위치</MWS.MarketWriteLabel>
              <MWS.kakaoMap>KakaoMap</MWS.kakaoMap>
            </MWS.KaKaoMapWrapper>
            <MWS.AddressInfo>
              <MWS.MarketWriteLabel>GPS</MWS.MarketWriteLabel>
              <MWS.GPSWrapper>
                <MWS.Latitude>위도</MWS.Latitude>
                <MWS.Latitude>경도</MWS.Latitude>
              </MWS.GPSWrapper>

              <MWS.MarketWriteLabel>주소</MWS.MarketWriteLabel>
              <div>
                <MWS.AddressInput type="text" />
                <MWS.AddressInput type="text" />
              </div>
            </MWS.AddressInfo>
          </MWS.AddressWrapper>

          <MWS.ImgPlus>
            <MWS.MarketWriteLabel>대표이미지</MWS.MarketWriteLabel>
            <MWS.ImgdivWrapper>
              <MWS.ImgDiv>
                <div>+</div>
                Upload
              </MWS.ImgDiv>
            </MWS.ImgdivWrapper>
          </MWS.ImgPlus>

          <MWS.CreateItemBtn isActive={formState.isValid}>
            등록하기
          </MWS.CreateItemBtn>
        </MWS.Wrapper>
      </form>
    </>
  );
}
