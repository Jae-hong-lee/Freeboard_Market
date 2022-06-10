import styled from "@emotion/styled";
// import Slider from "react-slick";
import BestBoardPage from "../../../../../pages/boarder/Best";
const Wrapper = styled.div`
  height: 350px;
  padding: 0px 50px;
`;
// const SliderDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   text-align: center;
// `;

// const Quizimg = styled.img`
//   width: 300px;
//   height: 250px;
//   border-radius: 5px;
// `;
export default function LayoutBanner() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 4000,
  //   autoplaySpeed: 500,
  //   cssEase: "linear",
  // };

  return (
    <>
      <Wrapper>
        <BestBoardPage />
        {/* <Slider {...settings}>
          <BestBoardPage />
          <SliderDiv>
            <BestBoardPage />
          </SliderDiv>
          <SliderDiv>
            <Quizimg src="/ListImg/2.jpg" />
          </SliderDiv>
          <SliderDiv>
            <Quizimg src="/ListImg/3.jpg" />
          </SliderDiv>
          <SliderDiv>
            <Quizimg src="/ListImg/4.jpg" />
          </SliderDiv>
        </Slider> */}
      </Wrapper>
    </>
  );
}
