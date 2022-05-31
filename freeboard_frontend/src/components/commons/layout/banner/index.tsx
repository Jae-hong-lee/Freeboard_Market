import styled from "@emotion/styled";
import Slider from "react-slick";
const Wrapper = styled.div`
  height: 350px;
  padding: 0px 50px;
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
  width: 300px;
  height: 250px;
  border-radius: 5px;
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
        <Slider {...settings}>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/ListImg/1.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/ListImg/2.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/ListImg/3.jpg" />
            </ImageDiv>
          </SliderDiv>
          <SliderDiv>
            <ImageDiv>
              <Quizimg src="/ListImg/4.jpg" />
            </ImageDiv>
          </SliderDiv>
        </Slider>
      </Wrapper>
    </>
  );
}
