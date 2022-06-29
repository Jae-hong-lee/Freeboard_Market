import styled from "@emotion/styled";

const Image = styled.img`
  width: 500px;
  height: 500px;
`;
export default function ImageLoadingPage() {
  return (
    <>
      <div> webp 이미지</div>
      <Image src="/31quizimg/cat.webp" />
    </>
  );
}
