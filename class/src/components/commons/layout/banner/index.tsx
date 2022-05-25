import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  background-color: tomato;
  height: 400px;
`;
const SliderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Quizimg = styled.img`
  width: 200px;
  height: 300px;
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <>
      <Wrapper>
        여기는 베너영역 입니다!!
        <Slider {...settings}>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/quizimg/1.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/quizimg/2.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/quizimg/3.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/quizimg/4.jpg" />
            </ImageDiv>
          </SliderDiv>
        </Slider>
      </Wrapper>
    </>
  );
}
