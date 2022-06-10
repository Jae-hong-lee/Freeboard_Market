import * as BB from "./BestBoards.styles";
import Slider from "react-slick";
import styled from "@emotion/styled";

const SliderDiv = styled(Slider)`
  height: 300px;
  width: 100%;
`;

export default function BestBoardsUI(props) {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <BB.Box>
      <SliderDiv {...settings}>
        {props.data?.fetchBoardsOfTheBest.map((el, i) => (
          <BB.Wrapper key={el._id}>
            <BB.Quizimg>
              <div>{el.writer}</div>
              <div>{el.title} </div>
              <div>{el.contents} </div>
              <div>{el.likeCount} </div>
            </BB.Quizimg>
          </BB.Wrapper>
        ))}
      </SliderDiv>
    </BB.Box>
  );
}
